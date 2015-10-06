#!/bin/bash

cd ..

# Install Dependencies
sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install git curl build-essential g++ flex bison gperf ruby perl libsqlite3-dev libfontconfig1-dev libicu-dev libfreetype6 libssl-dev \
  libpng-dev libjpeg-dev python libx11-dev libxext-dev -y

# Install node
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.28.0/install.sh | bash && \
source ~/.bashrc && \
nvm install v4.1.2 && \
npm update -g && \
npm install pm2 -g

# Install phantom from source v2
git clone https://github.com/ariya/phantomjs && /
cd phantomjs  && /
git checkout 2.0  && /
./build.sh

cd static-site-benchmark
pm2 start start.js http://youwebsitehere.com
