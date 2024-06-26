// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './Pages/Home';
import Events, {loader as eventsLoader} from './Pages/Events';
import EventDetail , {loader as eventDetailsLoader, action as eventDeleteAction} from './Pages/EventDetail';
import NewEvent, {action as newEventAction} from './Pages/NewEvent';
import EditEvent from './Pages/EditEvent';
import Root from './Pages/Root';
import EventsRoot from './Pages/EventsRoot';
import Error from './Pages/Error';
import {action as manipulateEventAction} from './components/EventForm';



function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Root/>,
    errorElement:<Error/>,
    children:[
      {index:true,element:<Home/>},
      {path:'events',element:<EventsRoot/>,
      children:[  
      {index:true,element:<Events/>,
       loader: eventsLoader,
       },

       {path:':id',
       id:'event-detail',
       loader: eventDetailsLoader,
        children:[
          {index:true,element:<EventDetail/>, action:eventDeleteAction},
          {path:'edit',element:<EditEvent/>, action: manipulateEventAction}
        ]
       },
      {path:'new',element:<NewEvent/>, action: manipulateEventAction},
      ]
      }
    ]
  }
  ]);
  return <RouterProvider router = {router}/>;
}

export default App;
