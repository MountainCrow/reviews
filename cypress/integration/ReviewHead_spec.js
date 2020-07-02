/* eslint-disable */

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

    cy.get('.indiv-review').eq(0).children('.title').invoke('text').then(($revTitle) => {
      const firstNonSortedReview = $revTitle;

      cy.get('#sort_list').children('#lowestRated').click();


      cy.get('.indiv-review').eq(0).children('.title').invoke('text').then(($revTitle2) => {
        const firstSortedReview = $revTitle2;


        expect(firstNonSortedReview).to.not.eq(firstSortedReview);
      })

    })

  })
})


//expect(firstNonSortedReview).to.not.equal(firstSortedReview);