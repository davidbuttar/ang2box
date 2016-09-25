import { TreeTestPage } from './app.po';

describe('tree-test App', function() {
  let page: TreeTestPage;

  beforeEach(() => {
    page = new TreeTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
