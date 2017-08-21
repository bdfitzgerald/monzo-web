import { MonzoWebPage } from './app.po';

describe('monzo-web App', () => {
  let page: MonzoWebPage;

  beforeEach(() => {
    page = new MonzoWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
