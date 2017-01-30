import { browser, element, by } from 'protractor';

export class DiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('di-root h1')).getText();
  }
}
