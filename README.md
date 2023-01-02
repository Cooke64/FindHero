# Электронная ознакомительная версия для социального проекта #FindHero

## Проект реализован в формате SPA с применением следующих технологий:
> ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
> ![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray)
> ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
> ![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
> ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
> ![Celery](https://a11ybadges.com/badge?logo=celery)

## [Посмотреть визуальную часть проекта](https://findhero.netlify.app/)

## to be done
- :white_check_mark: Клиентская часть
- :white_check_mark: Серверная часть
- :white_check_mark: Реализованы периодичные задачи с помощью Celery
- ❌ Деплой всего проекта на сервер и полуение нормальное доменное имя
- ❌ Телеграмм-бот-помощник для отслеживания результатов работы сайта
- ❌ Перевести с pip на poetry
- ❌ Допилить Flower к Celery для визуализации периодичных задач

## Как установить
- Клонируем
> ``` git clone git@github.com:Cooke64/FindHero.git ```
- Докеризируем
> ``` docker-compose up -d --build ```
- Миграции, Суперпользователь, Статик
>```docker-compose exec web python manage.py migrate```
>```docker-compose exec web python manage.py createsuperuser```
>```docker-compose exec web python manage.py collectstatic --no-input```
- Взлетаем
[click](http://localhost:3000/)
