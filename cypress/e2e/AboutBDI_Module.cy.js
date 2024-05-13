//------------Import File to visit Website----------
import './VisitContactUsForm.cy'


//----Test scenario-----------
describe('About BDI', () => {

it('Visiting About BDI Module',()=>{

    //Getting About BDI button by ID selector and click on it
    cy.get('#DrpDwnMn00label')
    .should('be.visible')  // Visible in the screen 
    .scrollIntoView()     //Focus on element 
    .wait(2000)           //Wait for 2 sec   
    .click()              //Click on the button

    cy.contains('Our Mission') //Verify text present in the Page
    .should('be.visible')  // Visible in the screen 
    .wait(2000)           //Wait for 2 sec 

    cy.contains('Your Top of Mind Problems') //Verify text present in the Page
    .should('be.visible')  // Visible in the screen 
    .wait(2000)           //Wait for 2 sec 

    cy.contains('Our Solutions') //Verify text present in the Page
    .should('be.visible')  // Visible in the screen 
    .wait(2000)           //Wait for 2 sec 



});

})