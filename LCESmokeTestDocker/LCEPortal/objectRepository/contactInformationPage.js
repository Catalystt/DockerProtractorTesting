var contactInformationPage = function() {
	
	this.phoneNumber =  element(by.css("input[placeholder='Phone Number']"));
	this.requestQuote = element(by.buttonText("Request Quote"));
	
	this.enterPhoneNumber = function(PhoneNumber) {
		this.phoneNumber.sendKeys(PhoneNumber);
	}
	
	this.clickRequestQuoteButton = function() {
		this.requestQuote.click();
	}	
}

module.exports = new contactInformationPage();