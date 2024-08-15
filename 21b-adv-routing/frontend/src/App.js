// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements) x
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages x
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components x
// 4. Add properly working links to the MainNavigation x
// 5. Ensure that the links in MainNavigation receive an "active" class when active x
// 6. Output a list of dummy events to the EventsPage x
//    Every list item should include a link to the respective EventDetailPage x
// 7. Output the ID of the selected event on the EventDetailPage x
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home';
import EventsPage, { loader as eventsLoader } from './Pages/Events';
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from './Pages/EventDetail';
import NewEventPage from './Pages/NewEvent';
import EditEventPage from './Pages/EditEvent';
import RootLayout from './Pages/Root';
import EventsRootLayout from './Pages/EventsRoot';
import ErrorPage from './Pages/Error';
import { action as manipulateEventAction } from './components/EventForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      { path: 'events', element: <EventsRootLayout />,
        children: [
          { 
            path: '', 
            element: <EventsPage />,
            loader: eventsLoader
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction
              },
              {path: 'edit', element: <EditEventPage />, action: manipulateEventAction}
            ]
            
          },
          {path: 'new', element: <NewEventPage />, action: manipulateEventAction }
        ]
      }
      
    ]
  }
])


function App() {
  return <RouterProvider router={router} />;
}

export default App;
