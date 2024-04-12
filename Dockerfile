FROM nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./build/ /usr/share/nginx/html

# FROM node:16 as build
# WORKDIR /app
# COPY . /app
# RUN npm config set ca=""
# RUN npm set strict-ssl false
# RUN npm install
# RUN npm run build

# FROM nginx
# COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/build/ /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]