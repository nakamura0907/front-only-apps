ARG NODE_VERSION=20.11.0
FROM node:${NODE_VERSION}-bullseye

WORKDIR /workspace

RUN \
    # install packages
    apt-get update && \
    apt-get install -y --no-install-recommends \
        git \
        sudo \
        vim \
        less \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    # volume mount non-root user
    && mkdir node_modules && chown node:node node_modules

USER node 

EXPOSE 3000