// 集中式路由設定管理
import { Home } from './pages/Home';
import { NotFoundPage } from './pages/Error';
import { About } from './pages/About';


export const routes4 = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
];
