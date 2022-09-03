describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the title text', () => {
    cy.get('h2')
    .contains('2 jumalatest kaksikut soovivad tuua su ellu puhtust ja sygelust jalge vahele');
  })
}) 
