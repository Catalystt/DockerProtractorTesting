var additionalCoveragesPage = function() {
	
	this.limit = element(by.xpath("//*[@id='step-3']/cnf-additional-questions/form/div[1]/div[5]/div/div/div[1]/mat-card-content/mat-form-field/div/div[1]/div/mat-select/div/div"));
	this.value = element(by.cssContainingText('span.mat-option-text','$500,000.00'));
	this.WorkersCompensation = element(by.xpath("//form[@name='frmAqs']/div[1]/div[11]/div[1]/div[1]/mat-card-content/table/tbody/tr[2]"))
	//this.ExcessUmbrella = element(by.xpath("//mat-selection-list[@name='lobSelect']/mat-list-option[2]/div/mat-pseudo-checkbox"));
	this.valueOfBuilding = element(by.css("input[placeholder='Value of your Building?'].mat-input-element"));
	this.yearBuilt = element(by.css("input[placeholder='Year Built?'].mat-input-element"));
	this.ocuupancy = element(by.css("input[placeholder='Occupancy %'].mat-input-element"));
	this.nextButton = element(by.buttonText("Next"));
	
	this.clickLimitDropdown = function() {
		this.limit.click();
	}
	
	this.selectValue = function() {
		this.value.click();
	}
	
	this.checkWorkersCompensation = function() {
		this.WorkersCompensation.click();
	}
	
//	this.checkExcessUmbrella = function() {
//		this.ExcessUmbrella.click();
//	}
//	
	this.enterValueOfBuilding = function(ValueOfBuilding) {
		this.valueOfBuilding.sendKeys(ValueOfBuilding);
	}
	
	this.enterYearBuilt = function(YearBuilt) {
		this.yearBuilt.sendKeys(YearBuilt);
	}
	
	this.enterOcuupancy = function(Occupancy) {
		this.ocuupancy.sendKeys(Occupancy);		
	}
	
	this.clickNextButton = function() {
	    //var EC = protractor.ExpectedConditions;
	    browser.wait(EC.visibilityOf(this.nextButton), 400);
		this.nextButton.click();
	}
}

module.exports = new additionalCoveragesPage();