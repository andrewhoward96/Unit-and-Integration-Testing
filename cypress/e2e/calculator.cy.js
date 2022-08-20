describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display when a number is clicked', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '12');
  });

  it('should update display on operation click', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click()
    cy.get('#number3').click();
    cy.get('#operator-multiply').click()
    cy.get('.display').should('contain', '6');
  })

  it('should allow chaining of multiple operations', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click()
    cy.get('#number3').click();
    cy.get('#operator-multiply').click()
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '21');
  });

  it('should display negative numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2');
  })

  it('should display decimal numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click()
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1.5');
  })

  it('should display scientific notation for very large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click()
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9.99999999999998e+29');
  });

  it('should display not a number when diving by 0', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click()
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Not a Number');
  })
})