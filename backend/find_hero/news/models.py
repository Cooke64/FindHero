import base64

from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db.models.signals import pre_save
from django.dispatch import receiver

from feedback.models import FeedbackItem
from news.tasks import send_messages_to_all_user


def image_to_b64(image_file):
    with open(image_file.path, "rb") as f:
        encoded_string = base64.b64encode(f.read())
        return f'data:image/png;base64,{encoded_string.decode()}'


class NewsItemManager(models.Manager):
    def get_all_posts(self):
        return super(NewsItemManager, self).get_queryset().select_related('images').all()


class NewsItem(models.Model):
    title = models.CharField('Заголовок', max_length=199)
    preview = models.CharField('Превью к новости', max_length=199)
    text = models.TextField('Текст')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-pk']
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

    def __str__(self):
        return self.title

    objects = NewsItemManager()

    def get_first_images(self):
        if self.images:
            return self.images.first()
        return None


class Image(models.Model):
    news_item = models.ForeignKey(NewsItem, on_delete=models.CASCADE,
                                  related_name='images')
    image = models.ImageField(upload_to='', null=True, blank=True)
    image_b64 = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = 'Фотография'
        verbose_name_plural = 'Фотографии'


@receiver(post_save, sender=Image)
def create_base64_str(sender, instance=None, created=False, **kwargs):
    if created:
        instance.image_b64 = image_to_b64(instance.image)
        instance.image.delete()
        instance.save()


@receiver(pre_save, sender=NewsItem)
def store_pre_save(sender, instance, *args, **kwargs):
    email_list = FeedbackItem.objects.values_list(
        'email',
        flat=True
    ).distinct()
    send_messages_to_all_user.delay(list(email_list))
