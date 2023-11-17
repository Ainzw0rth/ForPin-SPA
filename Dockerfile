FROM node:17-alpine
WORKDIR /app
COPY package.json .
RUN yarn install --ignore-engines
COPY . .
EXPOSE 5173
CMD ["yarn", "dev", "--host"]