import Home from '~/Pages/Home';
import Explore from '~/Pages/Explore';
import Bookmark from '~/Pages/Bookmark';
import Profile from '~/Pages/Profile';
import TrendingPage from '~/components/TrendingPage';
import NavOnly from '~/layouts/NavOnly';
import Notifi from '~/components/Notifi';

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
