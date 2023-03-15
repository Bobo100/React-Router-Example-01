import React from 'react';
import './css/App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//////////////////////////////////////////////////////////////////////
// 方法一: 直接在 App.tsx 中定義路徑
// import { Home } from './pages/Home';
// import { NotFoundPage } from './pages/Error';
// import { About } from './pages/About';

// function App() {
//   return (
//     <div className="App">
//       <Router basename="/React-Router-Example-01">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="*" element={<NotFoundPage />}></Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }
// export default App;
// //////////////////////////////////////////////////////////////////////
// // 方法二: 使用陣列的方式來定義路徑
// const routes = [
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/about',
//     element: <About />
//   },
//   {
//     path: '*',
//     element: <NotFoundPage />
//   }
// ];

// export function AppVersion2() {
//   return (
//     <div className="App">
//       <Router basename="/React-Router-Example-01">
//         <Routes>
//           {routes.map((route, index) => (
//             <Route key={index} path={route.path} element={route.element} />
//           ))}
//         </Routes>
//       </Router>
//     </div>
//   )
// }

//////////////////////////////////////////////////////////////////////
// 方法三: 使用陣列的方式來定義路徑，並且使用 React.lazy() 來做 lazy loading(延遲載入) 
// 也稱作動態載入(dynamic import)，這個功能是在 React 16.6 版本才有的。
// 也就是說，當我們進入到某個頁面時，才會載入該頁面的元件

const Home3 = React.lazy(() => import('./pages/Home'));
const About3 = React.lazy(() => import('./pages/About'));
const NotFoundPage3 = React.lazy(() => import('./pages/Error'));

const routes3 = [
  {
    path: '/',
    element: <Home3 />
  },
  {
    path: '/about',
    element: <React.Suspense fallback={<div>Loading...</div>}><About3 /></React.Suspense>
  },
  {
    path: '*',
    element: <React.Suspense fallback={<div>Loading...</div>}><NotFoundPage3 /></React.Suspense>
  }
];

export function AppVersion3() {
  return (
    <div className="App">
      <Router basename="/React-Router-Example-01">
        <Routes>
          {routes3.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  )
}

//////////////////////////////////////////////////////////////////////
// 方法四：使用統一的tsx檔案來定義路徑

export function AppVersion4() {
  return (
    <div className="App">
      <Router basename="/React-Router-Example-01">
        <Routes>
        
        </Routes>
      </Router>
    </div>
  )
}

