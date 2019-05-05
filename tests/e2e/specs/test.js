// https://docs.cypress.io/api/introduction/api.html

describe("测试登录页", () => {
  it("访问登录页", () => {
    cy.visit("/#/login");
    cy.contains(".title", "分析管理系统");
  });
});
