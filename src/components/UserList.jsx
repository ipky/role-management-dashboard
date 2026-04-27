import UserCard from './UserCard'

function UserList({ users, onDelete, onEdit }) {
  if (users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-gray-400 text-sm">Kullanıcı bulunamadı.</p>
        <p className="text-gray-300 text-xs mt-1">Arama kriterlerini değiştirmeyi deneyin.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default UserList