var signInPage = function() {
	
	this.username = element(by.xpath("//*[@id='div-forms']/div[2]/div[2]/div/div/form/div[1]/input"));
	this.password = element(by.xpath("//*[@id='div-forms']/div[2]/div[2]/div/div/form/div[2]/input"));
	this.signInButton = element(by.xpath("//*[@id='div-forms']/div[2]/div[2]/div/div/form/input[3]"));
	
	this.enterUsername = function(userName) {
		this.username.sendKeys(userName);
	}
	
	this.enterPasword = function(password) {
		this.password.sendKeys(password);
	}
	
	this.clickSignInButton = function() {
		this.signInButton.click();
	}
	

}

module.exports = new signInPage();