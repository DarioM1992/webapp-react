
import { Link, Outlet, Route, Routes } from 'react-router';
import './App.css'
import { Homepage } from './pages/Homepage';
import { Header } from './layout/Header';
import { Layout } from './layout/Layout';
import { Detail } from './pages/Detail';

export const App = () => (
<>
<Routes>
    <Route element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='/detail' element={<Detail/> }/>
    </Route>
</Routes>
</>
);