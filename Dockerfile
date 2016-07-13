FROM node:4

ENV version 0.1.0
COPY . /src
RUN useradd -r code_view
WORKDIR /src
RUN npm install
RUN npm run build
VOLUME /src/resources/
USER code_view
