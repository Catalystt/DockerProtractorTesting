# DockerProtractorTesting
l Docker image for executing headless Google Chrome e2e test cases in a Docker container, allowing for VNC connections to display Chrome GUI.

To run your test cases in this image
Pull the hortonworks/docker-e2e-protractor image from DockerHub
If you have any environment variable which is used for your test project, provide here environment file.
The Protractor configuration file is vital for the Docker image. Add your e2e test configuration JS file (for example e2e.conf.js). Beside this you can provide additional parameters here for protractor.
You can see some example for execute your protractor tests in this Docker container:
docker run -it --rm --name protractor-runner -v $(PWD):/protractor/project hortonworks/docker-e2e-protractor e2e.conf.js    
docker run -it --rm --name protractor-runner --env-file utils/testenv -v $(PWD):/protractor/project hortonworks/docker-e2e-protractor e2e.conf.js --suite smoke
docker run -it --rm --name protractor-runner -e USERNAME=teszt.elek -e PASSWORD=Teszt12 -v $(PWD):/protractor/project hortonworks/docker-e2e-protractor e2e.conf.js --suite regression
docker run -it --rm --name protractor-runner --privileged --net=host -v /dev/shm:/dev/shm -v $(PWD):/protractor/project hortonworks/docker-e2e-protractor e2e.conf.js --suite smoke    
utils/testenv the location (full path) of the testenv file on your machine. This file can contain environment variables for your new container.
USERNAME=teszt.ele a single environment variable that is passed for the new container.
$(PWD) or pwd the root folder of your Protractor test project:
For example the local folder where the your functional E2E test project has been cloned from GitHub.
The use of PWD is optional, you do not need to navigate to the Protractor test project root. If it is the case, you should add the full path of the root folder instead of the $(PWD).
e2e.conf.js --suite regression in case of you defined test suites in your Protractor configuration, you can add these here
Advanced options and information
Protractor direct connect
Protractor can test directly using Chrome Driver or Firefox Driver, bypassing any Selenium Server. The advantage of direct connect is that your test project start up and run faster.

To use this, you should change your protractor configuration file as desbribed in the related Protractor Documentation:

directConnect: true
If this is true, settings for seleniumAddress and seleniumServerJar will be ignored. If you attempt to use a browser other than Chrome or Firefox an error will be thrown.

No sandbox for Google Chrome
Chrome does not support to running it in container. So you need to start the Chrome Driver with --no-sandbox argument to avoid errors.

Also in the Protractor configuration file:

capabilities: {
     'browserName': 'chrome',
     /**
      * Chrome is not allowed to create a SUID sandbox when running inside Docker
      */
     'chromeOptions': {
         'args': [
            'no-sandbox',
            '--disable-web-security'
         ]
     }
},
You can find additional setup configurations in the related Protractor Documentation
