import { createBrowserRouter } from "react-router-dom";

import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";
import Head from "./components/Head";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className='min-h-screen'>
        <Head />
        <Body />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <SearchResults />,
      },
    ],
  },
]);
