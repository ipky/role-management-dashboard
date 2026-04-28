import { useState, useMemo } from 'react'
import { useUsers } from '../context/UserContext'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import UserList from '../components/UserList'
import Pagination from '../components/Pagination'
import AddUserModal from '../components/AddUserModal'

const USERS_PER_PAGE = 5

function UsersPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const { users, loading, error, deleteUser } = useUsers()
  const [search, setSearch] = useState('')
  const [selectedRole, setSelectedRole] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase())
      const matchesRole = selectedRole === '' || user.role === selectedRole
      return matchesSearch && matchesRole
    })
  }, [users, search, selectedRole])

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE)

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  )

  const handleSearch = (value) => {
    setSearch(value)
    setCurrentPage(1)
  }

  const handleRoleFilter = (role) => {
    setSelectedRole(role)
    setCurrentPage(1)
  }

  const handleDelete = async (id) => {
    await deleteUser(id)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAddUser={() => setIsAddModalOpen(true)} />
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-lg font-medium text-gray-900">Kullanıcılar</h1>
          <p className="text-sm text-gray-500 mt-1">{filteredUsers.length} kullanıcı listeleniyor</p>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-400 text-sm">Yükleniyor...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-4">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="mb-4">
              <SearchBar
                search={search}
                onSearch={handleSearch}
                selectedRole={selectedRole}
                onRoleFilter={handleRoleFilter}
              />
            </div>
            <UserList
              users={paginatedUsers}
              onDelete={handleDelete}
              onEdit={() => {}}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </main>
      <AddUserModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  )
}

export default UsersPage