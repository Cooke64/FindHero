from celery import shared_task

from services.send_email import send_email


@shared_task
def send_messages_to_all_user(email_list):
    if email_list:
        for email in email_list:
            send_email(email)
    else:
        print('нет емейлов')
