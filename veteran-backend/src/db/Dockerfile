FROM postgres:15.2-alpine

RUN apk add --no-cache tzdata
ENV TZ=America/Sao_Paulo

COPY init.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_USER admin
ENV POSTGRES_PASSWORD admin
ENV POSTGRES_DB VETERAN_CAR