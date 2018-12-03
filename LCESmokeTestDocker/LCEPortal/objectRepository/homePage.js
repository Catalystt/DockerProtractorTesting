var homePage = function() {
    
	this.newQuote = element(by.css("span.mat-expansion-indicator"));
	this.location = element(by.css("input[id='mat-input-5'].mat-form-field-autofill-control"));
	this.streetAddress = element(by.css("input[placeholder='Street Address']"));
	this.firstName = element(by.id("mat-input-1"));
	this.lastName = element(by.id("mat-input-2"));
	this.legalEntityName = element(by.id("mat-input-3"));
	this.emailAddress = element(by.id("mat-input-4"));
	this.termsAndConditions =  element(by.css("span.terms-link"));
	this.startNewQuotebutton = element(by.css('button.create-quote'));
	this.homeButton = element(by.xpath("//*[@id='topMain']/li[1]/a/b"));
	this.agentSignInButton = element(by.buttonText("AGENT SIGN IN"));	
		
	this.enterLocation = function(LocationAddress,StreetAddress) {
		this.location.click();
		this.location.clear();
		this.location.sendKeys(LocationAddress);
		browser.sleep(3000);	    
	    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
	    browser.actions().sendKeys(protractor.Key.ENTER).perform();
	    browser.wait(EC.textToBePresentInElementValue(this.streetAddress, StreetAddress), 5000);
	};
	
	
	this.enterContactDetails = function(FirstName,LastName,LegalEntityName,EmailAddress) {
		this.firstName.sendKeys(FirstName);	
		this.lastName.sendKeys(LastName);
		this.legalEntityName.sendKeys(LegalEntityName);	
		this.emailAddress.sendKeys(EmailAddress);
	};
	
	this.clickStartNewQuoteButton = function() {
	   // var EC = protractor.ExpectedConditions;
	    browser.wait(EC.visibilityOf(this.startNewQuotebutton), 400);
	    this.startNewQuotebutton.click();
	}
	
	this.enterFirstName = function(FirstName){	
		this.firstName.sendKeys(FirstName);	
	};
	
	this.enterLastName = function(LastName){	
		this.lastName.sendKeys(LastName);	
	};
	
	this.enterLegalEntityName = function(LegalEntityName){	
		this.legalEntityName.sendKeys(LegalEntityName);	
	};

	this.enterEmailAddress = function(EmailAddress){	
		this.emailAddress.sendKeys(EmailAddress);	
	};
	
	this.clickHomeButton = function() {
		this.homeButton.click();
	}
	
	this.clickAgentSignInButton = function() {
		this.agentSignInButton.click();
	}
	
	
};

module.exports = new homePage();