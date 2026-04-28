import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { MagnifyingGlassIcon, ChevronUpDownIcon, CheckIcon } from '@heroicons/react/24/outline'
import { ROLES } from '../data/initialUsers'

const ALL_ROLES = ['Tümü', ...ROLES]

function SearchBar({ search, onSearch, selectedRole, onRoleFilter }) {
  const selectedLabel = selectedRole === '' ? 'Tümü' : selectedRole

  return (
    <div className="flex gap-3 items-center">
      
      {/* Arama */}
      <div className="relative flex-1">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="İsim ile ara..."
          aria-label="Kullanıcı ara"
          className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm text-gray-700 outline-none focus:border-[#1B3A8C]"
        />
      </div>

      {/* Rol Filtresi - Headless UI Listbox */}
      <Listbox value={selectedLabel} onChange={(val) => onRoleFilter(val === 'Tümü' ? '' : val)}>
        <div className="relative">
          <ListboxButton className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 w-36 justify-between">
            <span>{selectedLabel}</span>
            <ChevronUpDownIcon className="w-4 h-4 text-gray-400" />
          </ListboxButton>

          <ListboxOptions className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
            {ALL_ROLES.map((role) => (
              <ListboxOption
                key={role}
                value={role}
                className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 data-[selected]:text-[#1B3A8C] data-[selected]:font-medium data-[focus]:bg-gray-50"
              >
                <span>{role}</span>
                <CheckIcon className="w-4 h-4 text-[#1B3A8C] hidden data-[selected]:block" />
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>

    </div>
  )
}

export default SearchBar