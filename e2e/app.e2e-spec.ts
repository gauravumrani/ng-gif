import { OMDBPage } from './app.po';

describe('omdb App', () => {
  let page: OMDBPage;

  beforeEach(() => {
    page = new OMDBPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
