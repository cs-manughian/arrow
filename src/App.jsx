import React from 'react';
import { useRoutes } from 'hookrouter';
import Dashboard from './components/Dashboard';

const routes = {
  '/': () => <Dashboard />
};

function App() {
  const routeResult = useRoutes(routes);
  return routeResult;
}

export default App;
