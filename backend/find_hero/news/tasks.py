from celery import shared_task
from django.conf import settings
from django.core.mail import send_mass_mail

from feedback.models import FeedbackItem


@shared_task
def send_messages_to_all_user():
    email_list = FeedbackItem.objects.all.values_list(
        'email',
        flat=True
    ).distinct()
    message1 = (
        'Спамить буду тебя:))))>',
        'Спам это хорошо.',
        settings.EMAIL_HOST_USER,
        ['pozdeev1994@mail.ru']
    )
    send_mass_mail(message1, fail_silently=False)

