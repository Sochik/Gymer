import { useState } from 'react'
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import OurTeam from './Pages/OurTeam';
import OurGallery from './Pages/OurGallery';
import Timetable from './Pages/Timetable';
import BMICalculator from './Pages/BMICalculator';
import Contact from './Pages/Contact';
import Services from './Pages/Services';

export default function App() {
  const [selectedPage, setSelectedPage] = useState("All");

  const PageLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const PageRoutes = createBrowserRouter ([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: (
            <Home selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
          ),
        },
        {
          path: "/team",
          element: <OurTeam />
        },
        { path: "/gallery",
          element: <OurGallery />
        },
        {
          path: "/bmi-calculator",
          element: <BMICalculator />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        { path: "/timetable",
          element: <Timetable />
        },
      ],
    },
  ]);

  return (
    <main className="bg-backdrop">
      <Toaster />
      <RouterProvider router={PageRoutes}></RouterProvider>
    </main>
  );
}

