from celery import shared_task
from django.conf import settings
from django.core.mail import send_mail



@shared_task
def send_delay_email(email):
    send_mail(
        'Спамить буду тебя:))))>',
        'Спам это хорошо.',
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=['pozdeev1994@mail.ru'],
        fail_silently=False
    )
    print(email)
