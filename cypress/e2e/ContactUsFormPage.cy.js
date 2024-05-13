//------------Import File to visit Website----------
import './VisitContactUsForm.cy'


//----Test scenario-----------
describe('Automate Contact Us Form Page', () => {

    //------First Testcase---------- 
     //Writing Testcase for user enter Invalid data   
    it('Filling the Contact Us Form with Invalid Data',()=>{

      //Getting Contact element and Click it
      cy.get('#DrpDwnMn06label').click()
     //Import data from the Fixture Folder   
     cy.fixture('ContactUsFormData.json').then((Data) => {
    
      // Use the data from 'ValidData' to fill the form
        const vdata = Data.InValidData[0];
     
     //Getting the "Name" field by "ID" selector
       cy.get('#input_comp-kf5uosmd').type(vdata.Name).wait(2000)

     //Getting the "Email" field by "ID" selector  
       cy.get('#input_comp-kf5uosmq').type(vdata.Email).wait(2000)

     //Getting the "Phone" field by "ID" selector  
       cy.get('#input_comp-kf5uosmw').type(vdata.Phone).wait(2000)

     //Getting the "Company Name" field by "ID" selector  
       cy.get('#input_comp-kf5uosn2').type(vdata.CompanyName).wait(2000)
     
     //Getting the "Message" field by "ID" selector  
       cy.get('#textarea_comp-kf5uosn7').type(vdata.Message).wait(2000)

     //Getting and Clicking on "Send" button  
       cy.get('.l7_2fn').click().wait(3000) 
      })
        
    });

    //------Second Testcase---------- 
     //Writing Testcase for user empty all data  
     it('Filling the Contact Us Form with Empty Data Fields',()=>{

      //Getting Contact button element and Click it
        cy.get('#DrpDwnMn06label').click()
        //Import data from the Fixture Folder   
        cy.fixture('ContactUsFormData.json').then((Data) => {
   
         // Use the data from 'ValidData' to fill the form
           const vdata = Data.EmptyData[0];
        
        //Getting the "Name" field by "ID" selector
          cy.get('#input_comp-kf5uosmd').type(vdata.Name).wait(1000)
   
        //Getting the "Email" field by "ID" selector  
          cy.get('#input_comp-kf5uosmq').type(vdata.Email).wait(1000)
   
        //Getting the "Phone" field by "ID" selector  
          cy.get('#input_comp-kf5uosmw').type(vdata.Phone).wait(1000)
   
        //Getting the "Company Name" field by "ID" selector  
          cy.get('#input_comp-kf5uosn2').type(vdata.CompanyName).wait(1000)
        
        //Getting the "Message" field by "ID" selector  
          cy.get('#textarea_comp-kf5uosn7').type(vdata.Message).wait(1000)
   
        //Getting and Clicking on "Send" button  
          cy.get('.l7_2fn').click().wait(3000) 
         })
           
       });

    //------Third Testcase---------- 
     //Writing Testcase for user left some required fields
     it('Filling the Contact Us Form with left some required fields',()=>{

      //Getting Contact button element and Click it
      cy.get('#DrpDwnMn06label').click()

        //Import data from the Fixture Folder   
        cy.fixture('ContactUsFormData.json').then((Data) => {
   
         // Use the data from 'ValidData' to fill the form
           const vdata = Data.EmptySomeData[0];
        
        //Getting the "Name" field by "ID" selector
          cy.get('#input_comp-kf5uosmd').type(vdata.Name).wait(1000)
   
        //Getting the "Email" field by "ID" selector  
          cy.get('#input_comp-kf5uosmq').type(vdata.Email).wait(1000)
   
        //Getting the "Phone" field by "ID" selector  
          cy.get('#input_comp-kf5uosmw').type(vdata.Phone).wait(1000)
   
        //Getting the "Company Name" field by "ID" selector  
          cy.get('#input_comp-kf5uosn2').type(vdata.CompanyName).wait(1000)
        
        //Getting the "Message" field by "ID" selector  
          cy.get('#textarea_comp-kf5uosn7').type(vdata.Message).wait(1000)
   
        //Getting and Clicking on "Send" button  
          cy.get('.l7_2fn').click().wait(3000) 
         })
           
       });

//------Fourth Testcase---------- 
     //Writing Testcase for user enter valid  data  
     it('Filling the Contact Us Form with Valid Data',()=>{

      //Getting Contact button element and Click it
      cy.get('#DrpDwnMn06label').click()
      
        //Import data from the Fixture Folder   
        cy.fixture('ContactUsFormData.json').then((Data) => {
   
         // Use the data from 'ValidData' to fill the form
           const vdata = Data.ValidData[0];
        
        //Getting the "Name" field by "ID" selector
          cy.get('#input_comp-kf5uosmd').type(vdata.Name).wait(1000)
   
        //Getting the "Email" field by "ID" selector  
          cy.get('#input_comp-kf5uosmq').type(vdata.Email).wait(1000)
   
        //Getting the "Phone" field by "ID" selector  
          cy.get('#input_comp-kf5uosmw').type(vdata.Phone).wait(1000)
   
        //Getting the "Company Name" field by "ID" selector  
          cy.get('#input_comp-kf5uosn2').type(vdata.CompanyName).wait(1000)
        
        //Getting the "Message" field by "ID" selector  
          cy.get('#textarea_comp-kf5uosn7').type(vdata.Message).wait(1000)
   
        //Getting and Clicking on "Send" button  
          cy.get('.l7_2fn').click().wait(3000) 
         })
           
       });

})
