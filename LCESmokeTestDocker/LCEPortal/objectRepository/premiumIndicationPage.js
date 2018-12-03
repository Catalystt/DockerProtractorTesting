var premiumIndicationPage = function() {
	
	this.heading = element(by.css(".font-bold.py-5"));
	this.addLocation = element(by.cssContainingText('span.mat-button-wrapper','Add Location'));
	this.nextButton = element(by.xpath("//*[@id='main']/cnf-root/div/mat-sidenav-container/mat-sidenav-content/cnf-policy/section[2]/div[2]/button[2]/span"));
	this.premium = element(by.xpath("//form[@name='frmPropCoverage']/div/div/div/div/div/h2"));
	
	this.getHeading = function() {
		return  this.heading.getText();
	}
	
	this.clickAddLocation = function() {
		this.addLocation.click();
	}
	
	this.clickNextButton = function() {

		browser.sleep(2000);
	    this.nextButton.click();
		
	}
	
	this.getPremium = function() {
		this.premium.getText().then(function (text) {
			 console.log(text);
			
		});
	}
}

module.exports  = new premiumIndicationPage();