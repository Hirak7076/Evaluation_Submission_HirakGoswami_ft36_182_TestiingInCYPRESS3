///<reference types="cypress" />

const { expect } = require("chai");

describe('Assignment ', () => {
    it('CheckTITLE', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.title().should('include','The Internet');
    });
    it('VisibilityCHECK', () => {
        cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1");
        cy.xpath('//div[@id="finish"]').should('not.be.visible');
        cy.xpath('//button').click();
        cy.wait(6000);
        cy.xpath('//div[@id="finish"]').should('be.visible');
        cy.xpath('//div[@id="finish"]').should('contain','Hello World!');
    });
    it('Select -> Find -> Then Perform', () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.origin('https://www.inmotionhosting.com/', () => {
            cy.on('uncaught:exception', (e) => {
              if (e.message.includes('Things went bad')) {
               
                return false
              }
              
            })
          })
          //cy.xpath('(//i[@class="fa fa-imh-commenting-red"])[1]').click();
          //cy.visit('https://www.inmotionhosting.com/')
        //cy.get('img[src="https://design.inmotionhosting.com/assets/logos/corporate/logo-imh.svg"]').click();
    });
    it('Google Search', () => {
        cy.visit('https://www.google.com');
        cy.xpath('//textarea[@aria-label="Search"]').type('Masai').should('have.value', 'Masai'); 
    });
});