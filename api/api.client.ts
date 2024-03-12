import { APIRequestContext } from "@playwright/test";
import BaseApiClient from "./base.api.client";

export default class ApiClient extends BaseApiClient {
  
  constructor(request: APIRequestContext) {
    super(request);
  }

  public async getPeople(): Promise<any> {
    console.log('getPeople api call')
    const response = await this.get('/people/1');
    console.log('getPeople api call successful')
    
    return response;
  }

  public async getPlanets(): Promise<any> {
    console.log('getPlanets api call')
    const response = await this.get('/planets/1');
    console.log('getPlanets api call successful')

    return response;
  }
}