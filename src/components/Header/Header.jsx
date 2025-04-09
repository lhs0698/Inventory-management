import React from 'react'
import './Header.scss'

export default function Header() {
  return (
    <header className="app-header">
      <h1 className="logo">ALTA 재고관리</h1>
      <nav className="nav">
        <ul>
          {/* <li><a href="/">홈</a></li>
          <li><a href="/products">품목</a></li>
          <li><a href="/settings">설정</a></li> */}
        </ul>
      </nav>
    </header>
  )
}
