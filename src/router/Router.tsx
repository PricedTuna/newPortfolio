import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutView from '../views/AboutView'
import MainLayout from '../layout/MainLayout'
import SkillsView from '../views/SkillsView'
import ProjectsView from '../views/ProjectsView'
import ContactButtons from '../views/components/ContactButtons.tsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    errorElement: <MainLayout />,
    children: [
      {
        path: "/about",
        element: <AboutView />
      },
      {
        path: "/skills",
        element: <SkillsView />
      },
      {
        path: "/projects",
        element: <ProjectsView />
      },
      {
        path: "/contact",
        element: <ContactButtons />
      }
    ]
  },
])

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
