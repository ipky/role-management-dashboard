import Badge from './ui/Badge'

function UserCard({ user, onDelete, onEdit }) {
  const initials = user.name
    .split(' ')
    .filter(word => word.length > 1)
    .slice(0, 2)
    .map(word => word[0].toUpperCase())
    .join('')

  const avatarColors = {
    Admin: 'bg-red-50 text-red-700',
    Doctor: 'bg-blue-50 text-[#1B3A8C]',
    Patient: 'bg-green-50 text-green-700',
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center gap-3">
      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 ${avatarColors[user.role]}`}>
        {initials}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{user.name}</p>
        <p className="text-xs text-gray-400 mt-0.5">{user.permissions.join(' · ')}</p>
      </div>
      <Badge role={user.role} />
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(user)}
          aria-label={`${user.name} kullanıcısını düzenle`}
          className="w-8 h-8 border border-[#1B3A8C] rounded-lg flex items-center justify-center text-[#1B3A8C] text-sm hover:bg-blue-50 transition-colors"
        >
          ✎
        </button>
        <button
          onClick={() => onDelete(user.id)}
          aria-label={`${user.name} kullanıcısını sil`}
          className="w-8 h-8 border border-[#E8192C] rounded-lg flex items-center justify-center text-[#E8192C] text-sm hover:bg-red-50 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default UserCard