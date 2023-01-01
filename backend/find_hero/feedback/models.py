from django.db import models


class FeedbackItem(models.Model):
    name = models.CharField('Имя', max_length=50)
    email = models.CharField('Email', max_length=99, unique=True)
    text = models.TextField('Текст сообщения')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name} оставил отзыв №{self.pk}'

    class Meta:
        ordering = ['-pk']
        verbose_name = 'Обратная связь'
