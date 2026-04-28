import { useState, useEffect } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useUsers } from '../context/UserContext'
import { ROLES, PERMISSIONS } from '../data/initialUsers'
import Button from './ui/Button'

function EditUserModal({ isOpen, onClose, user }) {
  const { users, updateUser } = useUsers()
  const [name, setName] = useState('')
  const [role, setRole] = useState(ROLES[0])
  const [permissions, setPermissions] = useState([])
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (user) {
      setName(user.name)
      setRole(user.role)
      setPermissions(user.permissions)
      setErrors({})
    }
  }, [user])

  const validate = () => {
    const newErrors = {}
    if (!name.trim()) {
      newErrors.name = 'İsim boş bırakılamaz.'
    } else if (
      users.some(
        (u) => u.name.toLowerCase() === name.trim().toLowerCase() && u.id !== user.id
      )
    ) {
      newErrors.name = 'Bu isimde bir kullanıcı zaten mevcut.'
    }
    if (permissions.length === 0) {
      newErrors.permissions = 'En az bir izin seçilmelidir.'
    }
    return newErrors
  }

  const handlePermissionToggle = (permission) => {
    setPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    )
  }

  const handleSubmit = async () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    await updateUser({
      ...user,
      name: name.trim(),
      role,
      permissions,
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white rounded-xl w-full max-w-md overflow-hidden shadow-lg">

          <DialogTitle className="bg-[#1B3A8C] px-6 py-4 text-white text-sm font-medium">
            Kullanıcıyı Düzenle
          </DialogTitle>

          <div className="px-6 py-5 flex flex-col gap-4">

            {/* İsim */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="edit-name" className="text-xs font-medium text-gray-500">
                Ad Soyad
              </label>
              <input
                id="edit-name"
                name="edit-name"
                type="text"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Kullanıcı adı soyadı"
                className={`border rounded-lg px-3 py-2 text-sm outline-none focus:border-[#1B3A8C] ${
                  errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Rol */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="edit-role" className="text-xs font-medium text-gray-500">
                Rol
              </label>
              <select
                id="edit-role"
                name="edit-role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                aria-label="Kullanıcı rolü"
                className="border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#1B3A8C]"
              >
                {ROLES.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            {/* İzinler */}
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-medium text-gray-500">İzinler</p>
              <div className="flex flex-col gap-2">
                {PERMISSIONS.map((permission) => (
                  <label key={permission} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={permissions.includes(permission)}
                      onChange={() => handlePermissionToggle(permission)}
                      className="w-4 h-4 accent-[#1B3A8C]"
                    />
                    <p className="text-sm text-gray-800">{permission}</p>
                  </label>
                ))}
              </div>
              {errors.permissions && (
                <p className="text-xs text-red-500">{errors.permissions}</p>
              )}
            </div>

          </div>

          <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-2">
            <Button variant="cancel" onClick={onClose}>İptal</Button>
            <Button variant="primary" onClick={handleSubmit}>Kaydet</Button>
          </div>

        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default EditUserModal