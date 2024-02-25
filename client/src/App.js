import React, { useState, useEffect } from 'react'
import Homepage from './pages/Homepage'
import Authentication from './pages/Authentication'
import apiService from './api/apiService '

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {

    // try {
    //   const result = await apiService.getItem('products', 1);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }
  }, [])

  return (
    <>
      <div>Welcome to doorstep grocery frontend.</div>

      {isAuthenticated ? <Homepage /> : <Authentication />}
    </>



  )
}

export default App