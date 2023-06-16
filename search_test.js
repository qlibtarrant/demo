Feature('search');

Scenario('Testing the google homepage',  ({ I }) => {
    I.amOnPage('https://www.google.com');
    I.see('About');
});
