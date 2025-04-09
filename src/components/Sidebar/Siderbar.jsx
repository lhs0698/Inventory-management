import React from 'react'
import './Sidebar.scss'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        재고관리
      </div>
      <nav className="sidebar-menu">
        <a href="/">대시보드</a>
        <a href="/products">제품 목록</a>
        <a href="/add-product">제품 추가</a>
        <a href="/history">입출고 이력</a>
      </nav>
    </aside>
  )
}
