import { BootcampPage } from './app.po';

describe('bootcamp App', () => {
  let page: BootcampPage;

  beforeEach(() => {
    page = new BootcampPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
