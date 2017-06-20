import { PartialWordSearchInAngularTwoPage } from './app.po';

describe('partial-word-search-in-angular-two App', function() {
  let page: PartialWordSearchInAngularTwoPage;

  beforeEach(() => {
    page = new PartialWordSearchInAngularTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
