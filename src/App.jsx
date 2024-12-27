import { RouterProvider } from "react-router-dom";
import { router } from "./route";

import Head from "./components/Head";

function App() {
  return (
    <div className='min-h-screen w-full relative'>
      <Head />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
