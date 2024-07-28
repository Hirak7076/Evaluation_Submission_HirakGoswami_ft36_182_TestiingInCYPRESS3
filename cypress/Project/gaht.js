describe('Automation Practice Site Test', () => {
    it('should use cy.get() to select an element, cy.find() to find a child element, and cy.then() to perform an action', () => {
      // Visit the automation practice site
      cy.visit('http://automationpractice.com/index.php');
  
      // Use cy.get() to select the element with class 'sf-menu' (top menu) with an increased timeout
      cy.get('.sf-menu', { timeout: 10000 })
        .should('be.visible') // Ensure the element is visible
        .find('li') // Use cy.find() to find child 'li' elements
        .first() // Select the first 'li' element
        .then($firstMenuItem => {
          // Perform an action on the selected element using cy.then()
          const menuItemText = $firstMenuItem.text().trim();
          cy.log('The text of the first menu item is: ' + menuItemText);
          
          // Optionally, you can assert the text of the first menu item
          expect(menuItemText).to.eq('Women');
        });
  
      // Click on the first menu item
      cy.get('.sf-menu > li').first().click();
  
      // Verify that the URL changes to the Women's section
      cy.url().should('include', 'id_category=3');
    });
  });