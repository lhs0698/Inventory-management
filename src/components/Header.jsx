export default function Header() {
    return (
      <header className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
        {/* 로고/타이틀 */}
        <div className="text-xl font-bold">
          ALTA 재고관리
        </div>
  
        {/* 내비게이션 */}
        <nav className="space-x-4 hidden md:flex">
          <a href="/products" className="text-gray-700 hover:text-blue-600">재고</a>
        </nav>
  
        {/* 사용자 정보 / 로그아웃 */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">관리자</span>
          <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
            로그아웃
          </button>
        </div>
      </header>
    )
  }
  