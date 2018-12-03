FROM ubuntu:xenial
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update -qqy && apt-get -qqy install \
	apt-utils\
	wget \
	sudo \
	curl

# Font libraries
RUN apt-get update -qqy \ 
	&& apt-get -qqy install\
	fonts-ipafont-gothic \
	xfonts-100dpi \
	xfonts-75dpi \
	xfonts-cyrillic \
	xfonts-scalable \ 
	xfonts-scalable \
	ttf-ubuntu-font-family \
	libfreetype6 \
	libfontconfig

# NodeJS 8
RUN apt-get update -qqy \
	&& apt-get -qqy install\
	software-properties-common \
	python-software-properties 
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN apt-get update -qqy \
	&& apt-get -qqy install \
	nodejs \
	build-essential 

# Download Chrome Installation
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
	&& sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'

# FireFox, Chrome and JRE installation
RUN apt-get update -qqy \
	&& apt-get -qqy install \
	xvfb \
	firefox=45.0.2+build1-0ubuntu1 \
	google-chrome-stable \ 
	default-jre

RUN sudo apt-mark hold firefox

RUN apt-get clean \
	Z&& rm -rf /var/lib/apt/lists/*

RUN rm -fr /root/tmp
RUN npm install --unsafe-perm --save-exact -g protractor@5.0.0 \
	&& npm update \
	&& webdriver-manager update

ENV NODE_PATH /usr/lib/node_moduels
RUN npm install --unsafe-perm -g \
	jasmine-reporters \
	jasmine-spec-reporter \
	protractor-jasmine2-html-reporter \
	jasmine-allure-reporter \
	protractor-console

WORKDIR /protractor/
COPY /scripts/run-e2e-tests.sh /entrypoint.sh
ENV HOME=/protractor/project
RUN chmod -Rf 777 .

ENTRYPOINT ["/entrypoint.sh"]

