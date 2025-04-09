import React from 'react'
import ProductTable from '../../components/ProductTable/ProductTable'
import './Products.scss'

export default function Products() {
  return (
    <div className="products-page">
      {/* <h1 className="page-title"></h1> */}
      <ProductTable />
    </div>
  )
}
