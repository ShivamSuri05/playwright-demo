import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from '@playwright/test';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  testDir: path.join(__dirname, 'routes'),
  retries: 2,
  use: {
    outputDir: path.join(__dirname, 'test-results', 'artifacts'),
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  reporter: [
    ['list'],
    ['junit', { outputFile: path.join(__dirname, 'test-results', 'results.xml') }],
    ['json', { outputFile: path.join(__dirname, 'test-results', 'results.json') }],
    ['html', { outputFolder: path.join(__dirname, 'test-results', 'html-report') }],
  ],
});
