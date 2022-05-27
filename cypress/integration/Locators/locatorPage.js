class Locators {

    // bdjobs locators
    searchJobtxtBox = '#txtKeyword'
    organizationType = '#qOT'
    searchButton = 'form > .btn'

    // BDJobs SignIn Page Locators
    firstSignInButton = '[href=""]'
    secondSignInButton = '.hidden-xs > .dropdown-menu > .login-form-n > .cart-mbdj > .cart-mbdj-r > .btn-wraper > .btn'
    userNameTxt = '#TXTUSERNAME'
    firstNextButton = '.col-sm-4 > .btn'
    passwordTxt = '#TXTPASS'
    secondNextButton = '.checkbox-link > :nth-child(2) > .btn'


    // google page locators
    googleSearchTxtBox = '.gLFyf'
    gmailButton = ':nth-child(1) > .gb_d'

    // popup close button 
    popupCloseButton = '//*[@id="popUpDiv"]/a'

    //allure locators
    allureDateTime = '//*[@class="widget__column"]/h2'
    totalTestCases = '//*[@class="splash__title"]'
    testCasesPercent = '//*[@class="chart__caption"]'

    categories = '//*[text()="Categories"]/..'
    suites = '//*[text()="Suites"]/..'
    graph = '//*[text()="Graphs"]/..'
    timeline = '//*[text()="Timeline"]/..'
    bahaviors = '//*[text()="Behaviors"]/..'
    packages = '//*[text()="Packages"]/..'

    // user: 'tnodemail3@gmail.com',
    // pass: 'nodemailer07@'


    get Two() {
        cy.wait(2000)
    }

}
module.exports = new Locators();