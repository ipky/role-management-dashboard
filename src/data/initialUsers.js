export const ROLES = ["Admin", "Doctor", "Patient"];

export const PERMISSIONS = ["read", "write", "delete"];

export const initialUsers = [
  { id: "1", name: "Dr. Ayşe Kaya", role: "Doctor", permissions: ["read", "write"] },
  { id: "2", name: "Mehmet Yılmaz", role: "Admin", permissions: ["read", "write", "delete"] },
  { id: "3", name: "Fatma Demir", role: "Patient", permissions: ["read"] },
  { id: "4", name: "Dr. Can Öztürk", role: "Doctor", permissions: ["read", "write"] },
  { id: "5", name: "Zeynep Arslan", role: "Patient", permissions: ["read"] },
  { id: "6", name: "Ali Çelik", role: "Patient", permissions: ["read"] },
  { id: "7", name: "Dr. Elif Şahin", role: "Doctor", permissions: ["read", "write"] },
  { id: "8", name: "Admin Burak Doğan", role: "Admin", permissions: ["read", "write", "delete"] },
  { id: "9", name: "Hande Koç", role: "Patient", permissions: ["read"] },
  { id: "10", name: "Dr. Murat Aydın", role: "Doctor", permissions: ["read", "write"] },
  { id: "11", name: "Selin Yıldız", role: "Patient", permissions: ["read"] },
  { id: "12", name: "Dr. Ceren Aktaş", role: "Doctor", permissions: ["read", "write"] },
];