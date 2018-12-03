var addNewLocationPage = function() {
	
	this.location = element(by.xpath("//*[@class='mat-card-content']/div/cnf-address/form/div//mat-form-field[1]/div/div[1]/div[1]/input"));
	this.phone = element(by.css("input[name='phone'].mat-input-element.mat-form-field-autofill-control"));
	this.yearlySales = element(by.xpath("//*[@id='storeInfo']/cnf-store-info/form/div/div[1]/div/div/mat-form-field/div/div[1]/div[2]/input"));
	this.storeSquareFootageDropdown = element(by.xpath("//*[@id='storeInfo']/cnf-store-info/form/div/div[2]/div/div/mat-form-field/div/div[1]/div/mat-select/div/div[1]/span"));
	this.storeSquareFootage = element(by.xpath("//*[@id='main']/div[3]/div[4]/div[1]/div[1]/div[1]/mat-option[3]/span"));
	this.numberOfEmployees = element(by.xpath("//*[@id='storeInfo']/cnf-store-info/form/div/div[3]/div/div/mat-form-field/div/div[1]/div/input"));
	this.buildingOwnerOrTenantDropdown = element(by.xpath("//*[@id='storeInfo']/cnf-store-info/form/div/div[4]/div/div/mat-form-field/div/div[1]/div/mat-select/div/div[1]/span"));
//	this.buildingOwnerOrTenant = element(by.xpath("//*[@id='main']/div[4]/div[4]/div/div/div/mat-option[1]/span"));
	this.buildingOwnerOrTenant = element(by.xpath("//*[@value='tenant']/span"));
	this.saveStoreButton = element(by.cssContainingText("span.mat-button-wrapper",'Save Store'));
	
	this.enterLocation = function(LocationAddress) {
		this.location.click();
		this.location.clear();
		this.location.sendKeys(LocationAddress);	
		browser.sleep(3000);
	    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
	    browser.actions().sendKeys(protractor.Key.ENTER).perform();
	}
	
	this.clickPhoneField = function() {
		this.phone.click();
	}
	
	
	this.enterYearlySales = function(YearlySales) {
		this.yearlySales.sendKeys(YearlySales);
	}
	
	this.clickStoreSquareFootageDropdown = function() {
		this.storeSquareFootageDropdown.click();
	}
	
	this.selectstoreSquareFootage = function() {
		this.storeSquareFootage.click();
	}
	
	this.enterNumberOfEmployees = function(NumberOfEmployees) {
		this.numberOfEmployees.sendKeys(NumberOfEmployees);
	}
	
	this.clickBuildingOwnerOrTenantDropown = function() {
		this.buildingOwnerOrTenantDropdown.click();
	}
	
	this.selectBuildingOwnerOrTenant = function() {
		this.buildingOwnerOrTenant.click();
	}
	
	this.clickSaveStoreButton = function() {
		this.saveStoreButton.click();
	}
	
	
}

module.exports = new addNewLocationPage();