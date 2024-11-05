describe("e2e/App.spec.cy.js", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the link to Home and navigate to the homepage", () => {
    cy.get("nav").contains("Home").should("be.visible");
    cy.get("nav").contains("Example").should("be.visible");
  });
});
