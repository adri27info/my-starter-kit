import HomeView from "@/views/HomeView.vue";

describe("HomeView.spec.cy.js", () => {
  it("should display the correct title", () => {
    cy.mount(HomeView);
    cy.get("h1").should("have.text", "Home view");
  });
});
