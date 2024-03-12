import { test, expect } from '@playwright/test';
import ApiClient from '../api/api.client';
import SwApiPage from '../pages/SwApiPage';

let apiClient: ApiClient;
let swApiPage: SwApiPage;

test.beforeAll(async ({ request }) => {
  console.log('beforeAll hook')
  apiClient = new ApiClient(request);
  await apiClient.getPeople();
});

test.beforeEach(async ({ page }) => {
  console.log('beforeEach hook')
  await apiClient.getPlanets();
  swApiPage = new SwApiPage(page);
});

test('navigate', async () => {
  console.log('test')
  await Promise.all([
    swApiPage.goto(),
    swApiPage.waitForPageToLoad()
  ]);
});

test.afterEach(async () => {
  console.log('afterEach hook')
  await apiClient.getPeople();

});