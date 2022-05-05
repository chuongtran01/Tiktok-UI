import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            // const Layout = route.layout === HeaderOnly ? HeaderOnly : DefaultLayout

            let Layout = DefaultLayout

            if (route.layout) {
              Layout = route.layout
            }
            else if (route.layout === null) {
              Layout = Fragment
            }

            // element contains component so we need to have the line below
            const Page = route.component
            return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
