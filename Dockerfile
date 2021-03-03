FROM node:14-alpine

WORKDIR /app

COPY . /app

RUN apk add --no-cache bash && npm install -g @nestjs/cli && apk add git && rm -rf /var/cache/apk/*

EXPOSE 3001

CMD ["yarn", "start:prod"]