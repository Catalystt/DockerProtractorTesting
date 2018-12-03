var searchQuotesPage = function() {
	
	this.firstname = element(by.xpath("//*[@class='searchCriteria']/mat-form-field[3]/div/div/div/input"));
	this.searchButton = element(by.xpath("//span[contains(text(),'Search')]"));
	//this.quoteNumber = element(by.xpath("//div[@class='tableContainer']/mat-table/mat-header-row/mat-header-cell[1]/div/button"));
	this.viewAndEditQuote = element(by.xpath("//mat-table[@class='mat-table']/mat-row[1]/mat-cell[7]/button/span/mat-icon"));

	this.enterFirstName = function(name) {
		this.firstname.sendKeys(name);
//		this.firstname.isPresent().then(function() {
//			console.log("Hii");
//		})
	}
	
	this.clickSearchButton = function() {
		this.searchButton.click();
	}
	
	this.clickviewAndEditQuote = function() {
//		this.viewAndEditQuote.isPresent().then(function() {
//			console.log("Pass");
//		})
		this.viewAndEditQuote.click();
	}
	
	this.getQuoteNumberText = function() {
		this.quoteNumber.isPresent().then(function() {
		console.log("Hii");
		});
	//	browser.wait(EC.presenceOf(this.quoteNumber), 2000);
		var t = this.quoteNumber.getText();
		expect(t).toBe("QuoteNumber");
	}
}

module.exports = new searchQuotesPage();