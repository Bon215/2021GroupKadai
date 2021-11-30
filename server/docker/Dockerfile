FROM node:14

WORKDIR /server/app

COPY ./server/app/src .
COPY ./server/app/package.json .
COPY ./server/app/tsconfig.json .
COPY ./server/app/yarn.lock .

COPY scripts/server /scripts

RUN chmod +x /scripts/*

ENTRYPOINT [ "/scripts/entrypoint.sh" ]