FROM rosenhouse/phantomjs2:latest

RUN \
  apt-get update && apt-get upgrade -y && \
  apt-get install -y curl git nodejs

RUN \
  git clone https://github.com/jaxgeller/static-site-benchmark

WORKDIR /static-site-benchmark/benchmarker
ENTRYPOINT ["/usr/bin/nodejs", "start.js"]
