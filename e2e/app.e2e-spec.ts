import { WebD3ChartsPage } from './app.po';

describe('web-d3-charts App', () => {
  let page: WebD3ChartsPage;

  beforeEach(() => {
    page = new WebD3ChartsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
