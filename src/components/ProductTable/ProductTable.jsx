import React from 'react'
import './ProductTable.scss'

export default function ProductTable() {
  const products = [
    { id: 1, name: '차단기', category : '함체' , quantity: 10, status: '정상' },
    { id: 2, name: 'SVD 상판', category : 'SVD' , quantity: 3, status: '부족' },
    { id: 3, name: 'SVA 하판', category : 'SVA', quantity: 0, status: '없음' }
  ]

  const getStatusClass = (status) => {
    switch (status) {
      case '정상':
        return 'status normal'
      case '부족':
        return 'status low'
      case '없음':
        return 'status none'
      default:
        return 'status'
    }
  }

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>품목</th>
          <th>품목카테고리</th>
          <th>재고수량</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.quantity}</td>
            <td><span className={getStatusClass(item.status)}>{item.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
