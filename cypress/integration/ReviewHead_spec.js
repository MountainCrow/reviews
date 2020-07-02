import { $, jQuery } from 'jquery';

describe('Review Head Tests', () => {
  it('Visits the correct page', () => {
    cy.visit('localhost:3003');
  });

  it('Opens the sort dropdown on click', () => {
    cy.get('#sortBtn').contains('Sort By');
    cy.get('#sortBtn').click();
    cy.get('#sortBtn').contains('Hide Sorting');
    cy.get('#sort-dropdown').children();
  });

  it('Drop Down Buttons Re-Arrange Review List', () => {
    // get the first reviews title
    const firstNonSortedReview = cy.get('.indiv-review').eq(0).children('.title').invoke('text');

    // sort the list
    cy.get('#sort_list').children('#lowestRated');
    cy.get('#sort_list').children('#lowestRated').click();

    // get top of list review
    const firstSortedReview = cy.get('.indiv-review').eq(0).children('.title').invoke('text');

    // should not be the same as first review
    expect(firstNonSortedReview).to.not.equal(firstSortedReview);

  })
})