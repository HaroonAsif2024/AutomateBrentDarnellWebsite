//Naming Convention used of this file name  is Pascal Case 
//Pascal Case: Starts with a uppercase letter and capitalizes the first letter of each subsequent
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
    
    
      //In this testcase For initalizing the variable used Camel Case naming convention
      //Camel Case: Starts with a lowercase letter and capitalizes the first letter of each subsequent word 
      //invalidData is a Camel Case  
      const invalidData = Data.InvalidData[0]; 
     
     //Getting the "Name" field by "ID" selector
       cy.get('#input_comp-kf5uosmd').type(invalidData.Name).wait(2000)

     //Getting the "Email" field by "ID" selector  
       cy.get('#input_comp-kf5uosmq').type(invalidData.Email).wait(2000)

     //Getting the "Phone" field by "ID" selector  
       cy.get('#input_comp-kf5uosmw').type(invalidData.Phone).wait(2000)

     //Getting the "Company Name" field by "ID" selector  
       cy.get('#input_comp-kf5uosn2').type(invalidData.CompanyName).wait(2000)
     
     //Getting the "Message" field by "ID" selector  
       cy.get('#textarea_comp-kf5uosn7').type(invalidData.Message).wait(2000)

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
          
          //In this testcase For initalizing the variable used Snake Case naming convention
         //Snake Case: All words are in lowercase and separated by underscores
         //empty_data is a Snake Case 
           const empty_data = Data.EmptyData[0];
        
        //Getting the "Name" field by "ID" selector
          cy.get('#input_comp-kf5uosmd').type(empty_data.Name).wait(1000)
   
        //Getting the "Email" field by "ID" selector  
          cy.get('#input_comp-kf5uosmq').type(empty_data.Email).wait(1000)
   
        //Getting the "Phone" field by "ID" selector  
          cy.get('#input_comp-kf5uosmw').type(empty_data.Phone).wait(1000)
   
        //Getting the "Company Name" field by "ID" selector  
          cy.get('#input_comp-kf5uosn2').type(empty_data.CompanyName).wait(1000)
        
        //Getting the "Message" field by "ID" selector  
          cy.get('#textarea_comp-kf5uosn7').type(empty_data.Message).wait(1000)
   
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
   
       //In this testcase For initalizing the variable used Pascal Case naming convention
         //Pascal Case: Similar to Camel Case, but starts with an uppercase letters
         //empty_data is a Pascal Case 
           const EmptySomeFields = Data.EmptySomeData[0];
        
        //Getting the "Name" field by "ID" selector
          cy.get('#input_comp-kf5uosmd').type(EmptySomeFields.Name).wait(1000)
   
        //Getting the "Email" field by "ID" selector  
          cy.get('#input_comp-kf5uosmq').type(EmptySomeFields.Email).wait(1000)
   
        //Getting the "Phone" field by "ID" selector  
          cy.get('#input_comp-kf5uosmw').type(EmptySomeFields.Phone).wait(1000)
   
        //Getting the "Company Name" field by "ID" selector  
          cy.get('#input_comp-kf5uosn2').type(EmptySomeFields.CompanyName).wait(1000)
        
        //Getting the "Message" field by "ID" selector  
          cy.get('#textarea_comp-kf5uosn7').type(EmptySomeFields.Message).wait(1000)
   
        //Getting and Clicking on "Send" button  
          cy.get('.l7_2fn').click().wait(3000) 
         })
           
       });

//------Fourth Testcase---------- 
     //Writing Testcase for user enter valid  data  
     it('Filling the Contact Us Form with Valid Data',()=>{

      //Getting Contact button element and Click it
      cy.get('#DrpDwnMn06label').click()
      
    //In this testcase For initalizing the variable used Camel Case naming convention
      //Camel Case: Starts with a lowercase letter and capitalizes the first letter of each subsequent word 
      //validData is a Camel Case   
        cy.fixture('ContactUsFormData.json').then((Data) => {
   
        //In this testcase For initalizing the variable used Pascal Case naming convention
         //Pascal Case: Starts with an uppercase letters
         //empty_data is a Pascal Case
           const validDataForAllFields = Data.ValidData[0];
        
        //Getting the "Name" field by "ID" selector
          cy.get('#input_comp-kf5uosmd').type(validDataForAllFields.Name).wait(1000)
   
        //Getting the "Email" field by "ID" selector  
          cy.get('#input_comp-kf5uosmq').type(validDataForAllFields.Email).wait(1000)
   
        //Getting the "Phone" field by "ID" selector  
          cy.get('#input_comp-kf5uosmw').type(validDataForAllFields.Phone).wait(1000)
   
        //Getting the "Company Name" field by "ID" selector  
          cy.get('#input_comp-kf5uosn2').type(validDataForAllFields.CompanyName).wait(1000)
        
        //Getting the "Message" field by "ID" selector  
          cy.get('#textarea_comp-kf5uosn7').type(validDataForAllFields.Message).wait(1000)
   
        //Getting and Clicking on "Send" button  
          cy.get('.l7_2fn').click().wait(3000) 
         })
           
       });

})
