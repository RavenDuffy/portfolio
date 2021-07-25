describe('Index page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should see my name in the page title', () => {
    cy.title().should('contain', 'Raven Duffy')
  })

  it('should fail', () => {
    assert(false)
  })
})
