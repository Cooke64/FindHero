from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


class FeedbackUser(models.Model):
    name = models.CharField('Имя', max_length=50)
    email = models.CharField('Email', max_length=99, unique=True)
    get_mails = models.BooleanField('Подписка на рассылку', default=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name = 'Пользователи оставившие обратную связь'


class FeedbackItem(models.Model):
    user = models.OneToOneField(FeedbackUser, on_delete=models.CASCADE)
    text = models.TextField('Текст сообщения')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.name} оставил отзыв № {self.pk}'

    class Meta:
        ordering = ['-pk']
        verbose_name = 'Обратная связь'


@receiver(post_save, sender=FeedbackUser)
def create_profile(sender, instance, created, **kwargs):
    if created:
        feedback = FeedbackUser()
        feedback.user = instance
