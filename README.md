# See some dogs~!
Get random dog image from the <a href="https://dog.ceo/dog-api/">Dog API</a>, then search the breed on Wikipedia.

## User stories
1. As a user, I want to see a dog image
2. As a user, I want to receive information about the dog
3. As a user, I want the application to fail gracefully

### Technical details
This project uses the Fetch API and Redux Sagas to asynchronously request data from the Dog and Wikipedia APIs.
Error handling captures instances where the Dog or Wikipedia API calls fail or where there are no results, 
as well as reducing garbage output by providing sensible defaults.
This was also a good opportunity to try out Tailwind.

## Running locally
1. Run `npm install`
2. Run `npm start`
3. To run tests, run `npm run test`
4. To format, run `npm run format`
