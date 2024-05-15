//Naming Convention used of this file name  is Pascal Case 
//Pascal Case: Starts with a uppercase letter and capitalizes the first letter of each subsequent

//------------Import File to visit Website----------
import './VisitContactUsForm.cy'


//----Test scenario-----------
describe('LEAN Pull Planning Page',()=>{

    //Writing Testcase for visit "LEAN Pull Planning" Module
    it('Visiting LEAN Pull Planning Module',()=>{

        //Getting LEAN Pull Planning button by ID selector and click on it
        cy.get('#DrpDwnMn01label')
        .should('be.visible') // Visible in the screen
        .scrollIntoView()     //Focus on element 
        .wait(2000)           //Wait for 2 sec   
        .click()              //Click on the button
        
       
        cy.scrollTo('bottom');      // Scroll down page to center

        //-------Testing UI of the Modules----------
        cy.get('#comp-j36feozt > [data-testid="container-bg"]').should('have.css', 'width', '292px');
        
        cy.get('#comp-j36feozt > [data-testid="container-bg"]').should('have.css', 'height', '478px');

        //Getting Download Flyer button by class selector and click on it
        cy.get('.l7_2fn')
        //.should('be.visible') // Visible in the screen   
        .scrollIntoView()   //Focus on element
        .wait(2000)         //Wait for 2 sec
        .click()            //Click on the button
        .wait(5000) 

       

    
    })
})
