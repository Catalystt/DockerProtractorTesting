var util = require('util');
var homePage = require('../objectRepository/homePage.js');
var aboutYourStorePage = require('../objectRepository/aboutYourStorePage.js');
var premiumIndicationPage = require('../objectRepository/premiumIndicationPage.js');
var addNewLocationPage = require('../objectRepository/addNewLocationPage.js');
var additionalCoveragesPage  = require('../objectRepository/additionalCoveragesPage.js');
var contactInformationPage = require('../objectRepository/contactInformationPage.js');
var signInPage = require('../objectRepository/signInPage.js');
var data = require('../TestData/JsonData.json');
var path = require('path'); 
var Helperfuctions = require('../ReusableFunctions/Helperfunctions.js');
var searchQuotesPage = require("../objectRepository/searchQuotesPage.js");

describe('LCE Portal Testing', function() {

    var fs = require('fs-extra');   
    
    beforeEach(function() {
		browser.get("https://dev.aonlittlecaesarsportal.com");
		//browser.manage().window().maximize();	

    })
    
    it('For Entire Workflow', function() {  
    	var random = Helperfuctions.getrandomString();
		homePage.newQuote.click();
		homePage.enterLocation(data.Locations[0],data.StreetAddress);
		homePage.enterContactDetails(random,data.LastName,data.LegalEntityName,data.EmailAddress);
		
		
	    expect(homePage.termsAndConditions.getText()).toBe(data.TandConditions);
		homePage.clickStartNewQuoteButton();
		expect(aboutYourStorePage.getHeading()).toBe(data.StoreHeading[0]);
		
		aboutYourStorePage.enterYearlySales(data.YearlySales);
		aboutYourStorePage.clickStoreSquareFootageDropdown();
		aboutYourStorePage.selectstoreSquareFootage();
	
		aboutYourStorePage.enterNumberOfEmployees(data.NumberOfEmployees);
		aboutYourStorePage.clickBuildingOwnerOrTenantDropown();
		aboutYourStorePage.selectBuildingOwnerOrTenant();
		aboutYourStorePage.clickNextButton();
		
		expect(premiumIndicationPage.getHeading()).toBe(data.PremiumIndicationHeading);
		premiumIndicationPage.clickAddLocation();
		
		addNewLocationPage.enterLocation(data.Locations[1]);
		Helperfuctions.scrollDown();
		addNewLocationPage.enterYearlySales(data.YearlySales);
		addNewLocationPage.clickStoreSquareFootageDropdown();
		addNewLocationPage.selectstoreSquareFootage();
		addNewLocationPage.enterNumberOfEmployees(data.NumberOfEmployees);
		addNewLocationPage.clickBuildingOwnerOrTenantDropown();
		
		addNewLocationPage.selectBuildingOwnerOrTenant();
		addNewLocationPage.clickSaveStoreButton();
		browser.wait(EC.textToBePresentInElement(premiumIndicationPage.premium, data.premiumValue), 1000);
		premiumIndicationPage.getPremium();
		
		premiumIndicationPage.clickNextButton();
		additionalCoveragesPage.clickLimitDropdown();
		additionalCoveragesPage.selectValue();
		additionalCoveragesPage.checkWorkersCompensation();
		//additionalCoveragesPage.checkExcessUmbrella();
		additionalCoveragesPage.enterValueOfBuilding(data.ValueOfBuilding);
		additionalCoveragesPage.enterYearBuilt(data.YearBuilt);
		additionalCoveragesPage.enterOcuupancy(data.Occupancy);
		additionalCoveragesPage.clickNextButton();
		contactInformationPage.enterPhoneNumber(data.PhoneNumber);
		contactInformationPage.clickRequestQuoteButton();    
		homePage.clickHomeButton();
		homePage.clickAgentSignInButton();
		browser.waitForAngularEnabled(false);
		signInPage.enterUsername(data.userName);
        signInPage.enterPasword(data.password);
        signInPage.clickSignInButton();
        browser.waitForAngularEnabled(true);
        searchQuotesPage.enterFirstName(random);
        searchQuotesPage.clickSearchButton();
        Helperfuctions.scrollDown();
        searchQuotesPage.clickviewAndEditQuote();
        
        //Validate Yearly sales
        expect(aboutYourStorePage.getYearlySales()).toBe(data.YearlySales);
        
        //validate number Of Employees
        expect(aboutYourStorePage.getnumberOfEmployees()).toBe(data.NumberOfEmployees);
        //Validate Owner or Tenant
        aboutYourStorePage.buildingOwnerOrTenantDropdown.getText().then(function(text)
        		{expect(text).toContain(data.BuildingOwnerOrTenant)});
        
        aboutYourStorePage.clickNextButton();
        //validate whether premium value is same 
        premiumIndicationPage.premium.getText().then(function(text)
        		{expect(text).toContain(data.premiumValue)});
        premiumIndicationPage.clickNextButton();
        //Validate additional coverages
        //expect((additionalCoveragesPage.ExcessUmbrella).isEnabled()).toBeTruthy();
        expect((additionalCoveragesPage.WorkersCompensation).isEnabled()).toBeTruthy();
    });
    
    
    it("This test case will fail", function() {
    	var random = Helperfuctions.getrandomString();
		homePage.newQuote.click();
		homePage.enterLocation(data.Locations[0],data.StreetAddress);
		homePage.enterContactDetails(random,data.LastName,data.LegalEntityName,data.EmailAddress);
	    expect(homePage.termsAndConditions.getText()).toBe(data.TandConditions);
		homePage.clickStartNewQuoteButton();
		expect(aboutYourStorePage.getHeading()).toBe(data.StoreHeading[1]);
    })
    
});
