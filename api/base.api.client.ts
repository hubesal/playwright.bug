import { APIRequestContext } from "@playwright/test";

export default abstract class BaseApiClient {

  constructor(private readonly request: APIRequestContext) {
  }

  protected async get(url: string): Promise<any> {
    const response = await this.request.get(url, {
      headers: {
        //'Authorization': `Bearer qwwertyuiuiyrt`
      },
    });
    
    return response;
  };
}