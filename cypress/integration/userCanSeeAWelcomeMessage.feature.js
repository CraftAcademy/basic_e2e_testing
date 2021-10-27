describe("user that navigates to the application", () => {
  // Step 2 INTERACT / ACT
  before(()=> {
    cy.visit('/')
  })

  // Step 3 ASSERT
  it('is expected to see "Hello World"', ()=> {
    cy.get('h1').should('contain.text', 'Hello mars')
    cy.get('h3').should('contain.text', 'My first test')
  })
});


// SETUP - INTERACT - ASSERT

// ARRANGE - ACT  ASSERT
