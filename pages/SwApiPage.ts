export default class SwApiPage {
  constructor(private readonly page: any) {
  }

  public async goto(): Promise<void> {
    await this.page.goto('/people/1');
  }

  public async waitForPageToLoad(): Promise<void> {
    await this.page.waitForRequest('**/people/*');
  }
}