FROM python:slim-buster

WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY . .
RUN pip install -r requirements.txt
CMD gunicorn service:app --bind 0.0.0.0:5000