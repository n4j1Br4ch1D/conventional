import React from 'react';

import './App.css';
import Templates from './sections/application/Templates';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Licensing from './pages/Licensing';
import NotFoundPage from './pages/NotFoundPage';
import { useRoutes, Link, useQueryParams } from 'raviger';

const routes = {
  '/': () => <Home />,
  '/privacy-policy': () => <PrivacyPolicy />,
  '/licensing': () => <Licensing />,
  // '/templates/:id': ({id}) => <Templates id={id} />
};

function App() {
  const route = useRoutes(routes);

  return route || <NotFoundPage />;
}

export default App;
