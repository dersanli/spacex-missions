## Agora Front-End Test - SpaceX App
Hello! I'm Devrim Ersanli, and thank you for giving me the opportunity to participate in this cool challenge.
- I tried to build an application that lists information about _SpaceX rocket launches_ using their free open SpaceX api
- I tried to stick to the requirements and tried not to over-design or over-load the application

### How install and run
I prepared a Github [repo](https://github.com/dersanli/spacex-missions), please clone that.
And Install it and run:
```sh
npm install
npm test
npm start
```

### Tech stack used
- **TypeScript** and **React** is used
- **create-react-app** is used for faster boilerplate
- Unit tests are written using **Jest** and **React Testing Library**
- The application uses **Material-UI** for UI components
- **Redux Toolkit** is used to manage the state _(from the Redux authors: Redux Toolkit is our official recommended approach for writing Redux logic)_
- As the data table, **ag-grid** is used
- **React router dom** is used for navigating, for demonstration purposes, although the application has two routes only

### About the application
- In order to list the most recent 50 launches, the SpaceX api is being queried with the correct query params (`limit=50&sort=launch_date_utc&order=desc`) to optimize the data retrieved from the backend
- The backend payload is converted (serialised) to an application consumable format (`/src/features/missionSlice.ts:~62`)(Typed properly in `TypeScript` and used throughout the application) in order not to bloat the redux state
- Application starts with a `GET MISSIONS` button. I did not want to query the backend on startup. I wanted to utilise the `idle, loading, success, or error` states while making asynchronous calls
- A spinner is displayed while waiting
- The grid is displayed with the following
    - Latest 50 flights with these columns (Flight Number, Mission Name, Mission Date)
    - The grid can be sorted by **Mission Name** and **Mission Date**
    - A **search text box** for making searches by the Mission Name
    - On each row, an extra **view rocket details** 'Link' element is added to navigate to Mission Information page
    - But when you click on a row, the **selected** row is captured and displayed at the bottom of the grid. That means, it is possible to display the mission details within the same page, as well
- When the **view rocket details** link is clicked on a row
    - **Rocket Details and Extra Information** route is displayed with `missionId` as the URL parameter
    - The extra information is displayed using `Material-UI` UI elements
    - Added an image for the mission, where available :)

#### What's next?
- Thank you for giving me the opportunity to participate in this cool challenge
- You can always reach me at `dersanli@gmail.com` for further queries
- Hope to hear from you, soon. Bye! 👋
