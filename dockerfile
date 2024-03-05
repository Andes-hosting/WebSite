FROM node:hydrogen-alpine

WORKDIR /andes-website/
COPY website-andes-hosting/public/ /andes-website/public
COPY website-andes-hosting/src/ /andes-website/src
COPY website-andes-hosting/package.json /andes-website/

RUN npm install

CMD ["npm", "start"]