FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE 1

ENV PYTHONUNBUFFERED 1

RUN mkdir /app

COPY requirements.txt /app

RUN pip3 install -r /app/requirements.txt --no-cache-dir


COPY find_hero/ /app

WORKDIR /app



CMD ["gunicorn", "config.wsgi:application", "--bind", "0:8000" ]