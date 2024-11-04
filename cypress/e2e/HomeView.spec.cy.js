describe("HomeView", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("debería mostrar el contador inicial", () => {
    cy.get("h1").should("contain", "0");
  });

  it("debería incrementar el contador al hacer clic en el botón", () => {
    cy.get("button").click();
    cy.get("h1").should("contain", "1");
  });
});
