import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
const locators = require("../../Locators/locatorPage");
const data = require("../../TestData/data")
 
 

Given('I Open Allure Link', () => {
    cy.visit(data.allureURL)
    locators.Two
})

And('Take Screenshoot From Overview', async ()=>{
   //   cy.xpath(locators.allureDateTime).then(function($elem) {
   //      cy.log($elem.text())
   // }) 
   cy.screenshot()
   
  
})

And('Click Categories And Take Screenshot', async ()=>{
   cy.xpath(locators.categories).click()
   locators.Two
   cy.screenshot()
})

And('Click Suites And Take Screenshot', async ()=>{
   cy.xpath(locators.suites).click()
   locators.Two
   cy.screenshot()
})

And('Click Graph And Take Screenshot', async ()=>{
   cy.xpath(locators.graph).click()
   locators.Two
   cy.screenshot()
})

And('Click Timeline And Take Screenshot', async ()=>{
   cy.xpath(locators.timeline).click()
   locators.Two
   cy.screenshot()
})

And('Click Behaviors And Take Screenshot', async ()=>{
   cy.xpath(locators.bahaviors).click()
   locators.Two
   cy.screenshot()
})

And('Click Packages And Take Screenshot', async ()=>{
   cy.xpath(locators.packages).click()
   locators.Two
   cy.screenshot()
})



// And('Collect Total Test Cases Ammount', async ()=>{
//      cy.xpath(locators.totalTestCases).then(function($elem) {
//         cy.log($elem.text())
//    })
    
// })

// And('Collect Percentage of Total Test Cases Passed', async ()=>{
//      cy.xpath(locators.testCasesPercent).then(function($elem) {
//      cy.log($elem.text())
      
//    })
    
// })

And('Log To Console', () => {
    cy.log('*****************************************************************')
 
   
})



 

 