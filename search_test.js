Feature('search');

Scenario('test something',  ({ I }) => {
    I.amOnPage('https://www.google.com');
    I.see('Google');
});
