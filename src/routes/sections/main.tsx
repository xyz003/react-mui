import { lazy } from 'react';
// auth
import { AuthGuard, GuestGuard } from 'utils/guard';
// layouts
import MainLayout from 'layouts/HomeLayout';
// components

// ----------------------------------------------------------------------
// OVERVIEW
const HomePage = lazy(() => import('pages/home'));
const LoginPage = lazy(() => import('pages/auth/login'));
const RegisterPage = lazy(() => import('pages/auth/register'));
// layouts

// ----------------------------------------------------------------------

export const mainRoutes = [
    {
        path: '/',
        element: (
            <AuthGuard>
                <MainLayout />
            </AuthGuard>
        ),
        children: [
            {
                path: 'home',
                element: <HomePage />
            }
        ]
    },
    {
        path: '/auth',
        element: (
            <GuestGuard>
                <MainLayout />
            </GuestGuard>
        ),
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    }
];
