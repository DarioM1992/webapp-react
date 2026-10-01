import { Outlet } from 'react-router';
import { Header } from './Header';

export const Layout = () =>(
    <div className="layout">
        <Header />
        <main>
            <Outlet />
        </main>
    </div>
);
