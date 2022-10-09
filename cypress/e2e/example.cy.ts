// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("a", "Day 1").click();
    cy.get("input[type=file]").selectFile("inputs/day1.txt");
    cy.contains("div", "1709");
    cy.contains("div", "1636");
  });
});
