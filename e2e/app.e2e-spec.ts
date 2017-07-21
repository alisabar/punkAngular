import { PunkClientPage } from './app.po';

describe('punk-client App', () => {
  let page: PunkClientPage;

  beforeEach(() => {
    page = new PunkClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
