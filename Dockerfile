# base image  
FROM python:3.10 

RUN apt update
RUN apt-get install cron -y
RUN alias py=python

ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/app

COPY . .
COPY ./requirements.txt /usr/src/app

RUN pip install -r requirements.txt

# django-crontab logfile
RUN mkdir /logs
RUN touch /logs/cron.log

EXPOSE 8000

CMD service cron start && python manage.py migrate && python manage.py crontab add && python manage.py runserver 0.0.0.0:8000
