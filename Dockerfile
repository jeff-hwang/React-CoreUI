FROM node:12.12-slim
RUN mkdir /app
WORKDIR /app
COPY . /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install --silent
#RUN npm install react-scripts@3.0.1 -g --silent
EXPOSE 3000
CMD ["npm", "start"]
