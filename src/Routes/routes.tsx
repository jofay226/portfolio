import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const LandingPage = lazy(() => import('../Pages/LandingPage/LandingPage.tsx'));
const LayoutPage = lazy(() => import('../Pages/LayoutPage/LayoutPage.tsx'));
const SkillsPage = lazy(() => import('../Pages/SkillsPage/SkillsPage.tsx'));
const ProjectsPage = lazy(() => import('../Pages/ProjectsPage/ProjectsPage.tsx'));
const ContactPage = lazy(() => import('../Pages/ContactPage/ContactPage.tsx'))
export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPage/>,
        children: [
            {
                path:'/',
                element: <LandingPage/>
            },
            {
                path:'/skills',
                element: <SkillsPage/>
            },
            {
                path:'/projects',
                element: <ProjectsPage/>
            },
            {
                path:'/contact',
                element: <ContactPage/>
            },
        ]
    }
])