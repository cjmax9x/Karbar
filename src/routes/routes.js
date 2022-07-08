import Home from '~/Pages/Home';
import Explore from '~/Pages/Explore';
import Bookmark from '~/Pages/Bookmark';
import Profile from '~/Pages/Profile';
import TrendingPage from '~/layouts/DefaultLayout/components/TrendingPage';
import NavOnly from '~/layouts/DefaultLayout/NavOnly';
import Notifi from '~/layouts/DefaultLayout/components/Notifi';

const publicRoutes = [
    { path: '/home', component: <Home /> },
    { path: '/home/trending', component: <TrendingPage />, layout: NavOnly },
    { path: '/home/notification', component: <Notifi />, layout: NavOnly },
    { path: '/explore', component: <Explore /> },
    { path: '/bookmark', component: <Bookmark /> },
    { path: '/profile', component: <Profile /> },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
