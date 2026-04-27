import { ROLES } from '../data/initialUsers'

function SearchBar({ search, onSearch, selectedRole, onRoleFilter }) {
  return (
    <div className="flex gap-3 items-center">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="İsim ile ara..."
        aria-label="Kullanıcı ara"
        className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 outline-none focus:border-[#1B3A8C]"
      />
      <div className="flex gap-2">
        <button
          onClick={() => onRoleFilter('')}
          className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
            selectedRole === '' 
              ? 'bg-[#1B3A8C] text-white border-[#1B3A8C]' 
              : 'bg-white text-gray-500 border-gray-200'
          }`}
        >
          Tümü
        </button>
        {ROLES.map((role) => (
          <button
            key={role}
            onClick={() => onRoleFilter(role)}
            className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
              selectedRole === role 
                ? 'bg-[#1B3A8C] text-white border-[#1B3A8C]' 
                : 'bg-white text-gray-500 border-gray-200'
            }`}
          >
            {role}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchBar