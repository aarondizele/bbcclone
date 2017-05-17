import { BlablacarclonePage } from './app.po';

describe('blablacarclone App', () => {
  let page: BlablacarclonePage;

  beforeEach(() => {
    page = new BlablacarclonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
