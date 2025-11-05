import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

// The root component of the application
function App() {
  return (
    <>
      {/* Provide the Redux store to the entire application */}
      <Provider store={appStore}>
      {/* Display the header on all pages */}
      <Header />
      {/* Render the child route components */}
      <Outlet />
      </Provider>
    </>
  )
}

export default App