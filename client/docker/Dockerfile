FROM node:14

WORKDIR /client/app

COPY ./client/app/public .
COPY ./client/app/src .
COPY ./client/app/package.json .
COPY ./client/app/yarn.lock .
COPY ./client/app/tsconfig.json .

COPY scripts/client /scripts

RUN chmod +x /scripts/*

ENTRYPOINT [ "/scripts/entrypoint.sh" ]