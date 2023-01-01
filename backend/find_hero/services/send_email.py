from django.conf import settings
from django.core.mail import send_mail


def send_email(email):
    try:
        send_mail(
            'Спамить буду тебя:))))>',
            'Спам это хорошо.',
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=['ya.angelina250596@yandex.ru'],
            fail_silently=False
        )
        print('work')
    except Exception as e:
        print(e)
