describe("User that fills out a registration form", () => {
  describe("with all necessary information", () => {
    before(() => {
      cy.visit("/");
      cy.get("input[name=firstName]").type("Thomas");
      cy.get("input[name=email]").type("thomas@email.com");
      cy.get("input[name=password]").type("my_secret_password");
      cy.get("input[id=submit-button]").click();
    });

    it("is expected to see a confirmation message", () => {
      cy.get("div[id=confirmation-message]").should(
        "contain.text",
        "Thank you for signing up!"
      );
    });
  });

  describe("with some fields missing", () => {
    before(() => {
      cy.visit("/");
      cy.get("input[name=firstName]").type("Thomas");
      cy.get("input[name=password]").type("my_secret_password");
      cy.get("input[id=submit-button]").click();
    });

    it("is expected to see an error message", () => {
      cy.get("div[id=confirmation-message]").should(
        "contain.text",
        "Hey! You need to give us your email address!"
      );
    });
  });
});
