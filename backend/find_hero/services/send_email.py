from django.conf import settings
from django.core.mail import send_mail


def send_email(email, message='текст письма', title='Заголовок письма'):
    try:
        send_mail(
            title,
            message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[email],
            fail_silently=False
        )
    except Exception as e:
        print(e)
