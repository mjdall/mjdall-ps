# could use a node container but for now i'll use
# ubuntu and a bootstrap script
FROM ubuntu:18.04

WORKDIR /repo

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Set debconf to run non-interactively
RUN debconf-set-selections

# Install base dependencies
RUN apt-get update && apt-get install -y -q --no-install-recommends \
        apt-transport-https \
        build-essential \
        ca-certificates \
        curl \
        git \
        libssl-dev \
        wget \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /nvm

ENV NVM_DIR /nvm
ENV NODE_VERSION v10.15.3
ENV NVM_VERSION v0.34.0

# Install nvm with node and npm
RUN curl https://raw.githubusercontent.com/creationix/nvm/$NVM_VERSION/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/versions/node/$NODE_VERSION/bin/
ENV PATH="${NODE_PATH}:${PATH}"

# boostrap the container with nvm
# COPY ./script/install_nvm ./script/
# RUN ./script/install_nvm

COPY package.json .

# install all of the node modules
RUN npm install

# copy the source files
COPY ./src ./src
COPY gatsby-config.js .

# build it so we can host the server in prod
RUN npm run build

FROM nginx:1.17-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/mjdall.conf

COPY --from=0 /repo/public /www/mjdall

EXPOSE 80
