import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes } from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((item, index) => {
            let Layout = DefaultLayout;
            if (item.layout) {
              Layout = item.layout;
            } else if (item.layout === null) {
              Layout = Fragment;
            }
            return <Route key={index} path={item.path} element={<Layout>{item.component}</Layout>} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
