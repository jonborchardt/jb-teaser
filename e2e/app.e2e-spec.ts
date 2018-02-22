import { AppPage } from './app.po';

// TODO: write tests

describe('teaser App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Teaser for Placements.io');
  });
});
