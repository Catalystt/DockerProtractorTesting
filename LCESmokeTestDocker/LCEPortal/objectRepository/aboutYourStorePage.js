var data = require('../TestData/JsonData.json');
var aboutYourStorePage = function() {
	this.heading = element(by.css("h1.font-bold.py-5.step1"));
	this.yearlySales = element(by.css("input[placeholder='Yearly Sales?'].mat-form-field-autofill-control"));
	this.storeSquareFootageDropdown = element(by
			.css("span.mat-select-placeholder"));
	this.storeSquareFootage = element(by.cssContainingText(
			'span.mat-option-text', data['StoreSquareFootage']));
	this.numberOfEmployees = element(by
			.css("input[placeholder='Number of Employees']"));
//	this.buildingOwnerOrTenantDropdown = element(by.cssContainingText(
//			'span.mat-select-placeholder', 'Building Owner or Tenant?'));
	this.buildingOwnerOrTenantDropdown = element(by.xpath("//*[@name='occupancy']/div/div[1]/span"));
	this.buildingOwnerOrTenant = element(by.cssContainingText(
			'span.mat-option-text', data['BuildingOwnerOrTenant']));
	this.squareFootageField = element(by.xpath("//mat-select[@name='storeArea']/div/div[1]/span/span"));
	
	
	this.getHeading = function() {
		return  this.heading.getText();
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
	
	this.clickNextButton = function() {
       // var EC = protractor.ExpectedConditions;
	    var btn = element(by.buttonText("Next"));
	    browser.wait(EC.visibilityOf(btn), 400);
	    btn.click();
	}
	
	this.getYearlySales = function() {
		return   this.yearlySales.getAttribute('value');
	}
	
	this.getstoreSquareFootage = function() {
		return   this.storeSquareFootageDropdown.getAttribute('value');
	}
	
	this.getnumberOfEmployees = function() {
		return   this.numberOfEmployees.getAttribute('value');
	}
	
	this.getbuildingOwnerOrTenant = function() {
		return   this.buildingOwnerOrTenant.getAttribute('value');
	}
	
}
module.exports = new aboutYourStorePage();
