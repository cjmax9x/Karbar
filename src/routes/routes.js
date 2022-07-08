import Home from '~/Pages/Home';
import Explore from '~/Pages/Explore';
import Bookmark from '~/Pages/Bookmark';
import Profile from '~/Pages/Profile';

const publicRoutes = [
    { path: '/', component: <Home /> },
    { path: '/explore', component: <Explore /> },
    { path: '/bookmark', component: <Bookmark /> },
    { path: '/profile', component: <Profile /> },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
