import { useState } from 'react'
import { useUsers } from './context/UserContext'

function App() {
  const { users, loading, error } = useUsers()

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <header className="bg-[#1B3A8C] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#E8192C] rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-medium">AH</span>
          </div>
          <div>
            <p className="text-white text-sm font-medium">Amerikan Hastanesi</p>
            <p className="text-white/60 text-xs">Kullanıcı Yönetim Paneli</p>
          </div>
        </div>
        <button className="bg-[#E8192C] text-white text-sm px-4 py-2 rounded-lg font-medium">
          + Yeni Kullanıcı
        </button>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-lg font-medium text-gray-900">Kullanıcılar</h1>
          <p className="text-sm text-gray-500 mt-1">{users.length} kullanıcı kayıtlı</p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-400 text-sm">Yükleniyor...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Liste */}
        {!loading && !error && (
          <div className="flex flex-col gap-3">
            {users.map((user) => (
              <div key={user.id} className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-xs font-medium text-[#1B3A8C] flex-shrink-0">
                  {user.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{user.permissions.join(' · ')}</p>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  user.role === 'Admin' ? 'bg-red-50 text-red-700' :
                  user.role === 'Doctor' ? 'bg-blue-50 text-blue-700' :
                  'bg-green-50 text-green-700'
                }`}>
                  {user.role}
                </span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 border border-[#1B3A8C] rounded-lg flex items-center justify-center text-[#1B3A8C] text-sm">✎</button>
                  <button className="w-8 h-8 border border-[#E8192C] rounded-lg flex items-center justify-center text-[#E8192C] text-sm">✕</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App