FROM rosenhouse/phantomjs2:latest

RUN \
  apt-get update && apt-get upgrade -y && \
  apt-get install -y curl git

RUN \
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash && \
  . ~/.nvm/nvm.sh && \
  nvm install v4.2.1 && \
  npm install pm2 -g

RUN \
  git clone https://github.com/jaxgeller/static-site-benchmark
