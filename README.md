## Quick start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/react-boilerplate/react-boilerplate.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm run setup` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`._
5.  Run `npm run clean` to delete the example app.

## Thinking/Reasoning Process
1. As a former backend developer, the first thing I would consider is the data aspect of the application and data source is the first thing I would look at because it has huge impact on the data logic of the application. Luckily for this task the data source can be acquired from an endpoint provided by github
(Endpoint url: https://api.github.com/search/repositories?q=keyword) 

2. Having a look at the data returned by the endpoint there are potentially huge amount of data to display. This can have a adverse impact on the performance of the application because the application will have to render a huge list of items in one go. However, the issue can be resolved by implementing pagination or rendering on demand. For simplicity I will just use react-window libarary for rendering on demand.

3. For security there is one thing to note. React itself is very secure if it is used properly(Just don't use dangerouslySetInnerHtml). However, A security issue can be raised if we want to show a link to each repo as hackers can embed a malicious script in the url of the link(although it is not required for this project but it is good to point it out)

4. I understand that due to the simple data complexity of this task we could just use internal state to hold application data but for future proofing purpose I will use redux as the state management tool. Also, if the data gets more complicated in the futher, we need to think about data normalization.

5. The application currently has very simple view but to provide better reusability and testability(for both end-to-end test and unit test), I will create two resuable compnonets, TextInput and Button with proper class names so that end-to-end testing framework can easily indentify the components. Also, for ease of unit test, I would introduce concept of data wrapper components which are connected to rudex(and any other React context) and pure view components whose behaviors only depend on their own props and state. I put data wrapper components into 'container' folder and pure view components into 'components' folder for differetiation.

6. For simplicity I would create reducers, actions and selectors manaually using createSlice but when the projects gets bigger I would suggest an automated approach which I did for my current projects.

6. For rendering logic as we need to sort the list, we could either sort the list as soon as we get it from the endpoint and store in redux(which I won't do it here as it is not future proofing eg. if we want to sort on mutiple fields) or introduce a caching mechanism to speed up the rendering process(here I will use useMemo React hook)


