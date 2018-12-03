var jasmineReporters = require('jasmine-reporters');
var HTMLReport = require('protractor-html-reporter');
var fs = require('fs-extra');

exports.config = {
		seleniumAddress: 'http://cicd-workshop-us-east-2-927208520869.s3-website.us-east-2.amazonaws.com/welcome',
    directConnect: true,
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
        chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log',
		'--no-sandbox'
//		'--disable-gpu',
//		'--headless'
            ],
            prefs: {
                // disable chrome's annoying password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }  },

  // Run a single test
  specs: ['Tests/AgentSignIn.js'],

  // Run suite of test
//  suites: {
//  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
        showColors: true,  // Use colors in the command line report.
        defaultTimeoutInterval: 200000,
        isVerbose: true,
        includeStackTrace: true
  },
  
  allScriptsTimeout: 90000,

  onPrepare: function() 
  {	  
	 //The configuration file can also include one or more global settings 
	 global.EC = protractor.ExpectedConditions,
    
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(
    {
      consolidateAll: true,
      savePath: './TestResults/',
      filePrefix: 'xmlresults'
    }));
    
//	 emptyDir(dir, [callback])
//	 Ensures that a directory is empty. Deletes directory contents if the directory is not empty. 
//	 If the directory does not exist, it is created. The directory itself is not deleted.
	 
    fs.emptyDir('TestResults/screenshots/', function (err) 
    {
      //console.log(err);
    });

    jasmine.getEnv().addReporter(
    {
      specDone: function(result) 
      {
       // if (result.status == 'failed') 
        if (result.status == 'failed' || 'passed') //- if u need screen shot for passed test cases
        {
          browser.getCapabilities().then(function (caps) 
          {
            var browserName = caps.get('browserName');
            browser.takeScreenshot().then(function (png) 
            {
              var stream = fs.createWriteStream('TestResults/screenshots/' + browserName + '-' + result.fullName+ '.png');
              stream.write(new Buffer(png, 'base64'));
              stream.end();
            });
          });
        }
      }
    });
  },

  onComplete: function() {
     var browserName="chrome";
     var browserVersion=51;
     var capsPromise = browser.getCapabilities();
 
     capsPromise.then(function (caps) {
        browserName = caps.get('browserName');
        browserVersion = caps.get('version');
        testConfig = {
            reportTitle: 'Test Execution Report',
            outputPath: './TestResults',
            screenshotPath: './TestResults/screenshots',
            testBrowser: browserName,
            browserVersion: browserVersion,
            screenshotsOnlyOnFailure: false,
            screenshotsOnSkipped: true
        };
        new HTMLReport().from('TestResults/xmlresults.xml', testConfig);
    });
 }

};
