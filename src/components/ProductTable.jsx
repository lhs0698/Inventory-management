export default function ProductTable() {
    const products = [
      { id: 1, name: '무선 마우스', category: '전자기기', stock: 25, status: '정상' },
      { id: 2, name: '키보드', category: '전자기기', stock: 5, status: '부족' },
      { id: 3, name: '모니터', category: '디스플레이', stock: 12, status: '정상' },
    ]
  
    return (
      <div className="mt-6 bg-white shadow-md rounded-md overflow-hidden">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">품목명</th>
              <th className="px-4 py-2 text-left text-gray-600">카테고리</th>
              <th className="px-4 py-2 text-left text-gray-600">재고 수량</th>
              <th className="px-4 py-2 text-left text-gray-600">상태</th>
              <th className="px-4 py-2 text-left text-gray-600">관리</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.stock}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      item.status === '정상'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button className="text-blue-600 hover:underline">수정</button>
                  <button className="text-red-600 hover:underline">삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  