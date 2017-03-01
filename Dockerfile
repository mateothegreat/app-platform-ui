## BUILDING
##   (from project root directory)
##   $ docker build -t node-js-for-mateothegreat-app-platform-ui .
##
## RUNNING
##   $ docker run -p 3000:3000 node-js-for-mateothegreat-app-platform-ui
##
## CONNECTING
##   Lookup the IP of your active docker host using:
##     $ docker-machine ip $(docker-machine active)
##   Connect to the container at DOCKER_IP:3000
##     replacing DOCKER_IP for the IP of your active docker host

FROM gcr.io/stacksmith-images/minideb:jessie-r10

MAINTAINER Bitnami <containers@bitnami.com>

ENV STACKSMITH_STACK_ID="kposmrk" \
    STACKSMITH_STACK_NAME="Node.js for mateothegreat/app-platform-ui" \
    STACKSMITH_STACK_PRIVATE="1"

# Install required system packages
RUN install_packages libc6 libssl1.0.0 libncurses5 libtinfo5 zlib1g libbz2-1.0 libreadline6 libstdc++6 libgcc1 ghostscript imagemagick libmysqlclient18

RUN bitnami-pkg install node-7.6.0-0 --checksum 168e385d8ecc52d637f0b99561d4f357203e619ddfc1a00b9fc97dafc5ecf8fd

ENV PATH=/opt/bitnami/node/bin:/opt/bitnami/python/bin:$PATH \
    NODE_PATH=/opt/bitnami/node/lib/node_modules

## STACKSMITH-END: Modifications below this line will be unchanged when regenerating

# Node base template
COPY . /app
WORKDIR /app

RUN npm install

CMD ["node"]
