import { AngularStreamingPage } from './app.po';

describe('angular-streaming App', () => {
  let page: AngularStreamingPage;

  beforeEach(() => {
    page = new AngularStreamingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
