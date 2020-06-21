## Quick start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/react-boilerplate/react-boilerplate.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm run setup` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`._
5.  Run `npm run clean` to delete the example app.

# The application code is under ./app/ , the other folders/files are provided by the boilerplate that I used.

## Thinking/Reasoning Process
1. As a former backend developer, the first thing I would consider is the data of the application. The data can be acquired via github endpoint.
(Endpoint url: https://api.github.com/search/repositories?q=keyword) 

2. Having a look at the data returned by the endpoint, the data complexity is low as it is just a list of objects that can be consumed by the views directly. However, there is potentially huge amount of data returned by the API. This can have an adverse impact on the performance of the application because the application will have to render a huge list of items in one go. This issue can be resolved by implementing pagination or rendering on demand though. For simplicity I will just use react-window libarary for rendering on demand.

3. For security there is one thing to note. React itself is secure as long as it is used properly(Just don't use dangerouslySetInnerHtml) but a security issue could be raised if we wanted to show a link to each repo as a malicious script can be embeded in the url of the link

4. I understand that due to the simple data complexity of this task we could just use internal state to hold application data but for future proofing purpose I will use redux as the state management tool. Also, if the data gets more complicated in the futher, we need to consider data normalization.

5. The application currently has a very simple view but to provide better reusability and testability(for both end-to-end test and unit test), I will create three resuable compnonets, TextInput, Button and RepositoryListComponent with proper class names(we need to prefix these class names properly) so that end-to-end testing framework can easily indentify these components. Also, for ease of unit testing, I would introduce the concept of data wrapper components which are connected to rudex(and any other React contexts) and pure view components whose behaviors only depend on their own props and state. A React component should only connect to redux when it is necessary. I put data wrapper components into 'container' folder and pure view components into 'components' folder for differetiation.

6. Unit tests are essential for maintainance and dectecting unexpected behaviors. I normally write unit test once I finish one function of the components(We don't have to wait for a component to finish before we start writing unit tests). For containers I suggest to use a integrated approach(we use real store to test whether the outcome is expected) and for pure view components just test them normally. We also need to test async actions and custom React hooks.

7. For simplicity I would create reducers, actions and selectors manaually using createSlice but when the projects gets bigger I would suggest an automated approach which I did for my current projects.

8. For sorting the list, we could either sort the list as soon as we get it from the endpoint and store in redux(which I won't do here as it is not future proofing eg. what if we want to sort on multiple fields) or sorting the list on the fly while rendering. For the second appraoch, we can introduce a caching mechanism(eg. useMemo) to speed up the sorting and rendering process.



