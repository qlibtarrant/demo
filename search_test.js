Feature('search');

Scenario('Testing Automation Demo',  ({ I }) => {
    I.amOnPage('http://the-internet.herokuapp.com');
    I.see('Welcome to the-internet');
});
