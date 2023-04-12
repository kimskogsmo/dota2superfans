import React from 'react';
import { Outlet } from 'react-router-dom';
import { StandingsProvider } from './contexts/StandingsContext';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css';

const Layout = (): JSX.Element => {
    return (
        <div className="flex flex-col flex-1 h-full">
            <Header />

            <main className="px-4 py-16 text-white text-center flex w-full flex-col flex-1 justify-start align-center bg-slate-800 relative">
                <StandingsProvider>
                    <Outlet />
                </StandingsProvider>
            </main>

            <Footer />
        </div>
    );
}

export default Layout;