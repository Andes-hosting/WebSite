FROM node:hydrogen-alpine AS react-build
WORKDIR /andes-website
COPY website-andes-hosting/package.json .
RUN npm install
COPY website-andes-hosting/ .
RUN npm run build

FROM nginx:alpine
COPY --from=react-build /andes-website/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf