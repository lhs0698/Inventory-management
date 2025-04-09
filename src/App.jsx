// App.jsx
import React from 'react'

import Header from './components/Header/Header'
import Products from './pages/Products/Products'
import Sidebar from './components/Sidebar/Siderbar'

import './App.scss'

export default function App() {
  return (
    <div className="app-root">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="page-content">
          <Products />
        </main>
      </div>
    </div>
  )
}
