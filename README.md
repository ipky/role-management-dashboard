# Role Management Dashboard

Bir sağlık kuruluşu için geliştirilmiş kullanıcı yönetim paneli. Admin, Doctor ve Patient rollerini destekler.

## Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

## Teknoloji Tercihleri

- **React + Vite** → Modern, hızlı geliştirme ortamı
- **Context API + useReducer** → Merkezi state yönetimi. Projenin ölçeği Redux Toolkit gerektirmediğinden daha sade olan bu yapı tercih edildi.
- **Tailwind CSS** → Utility-first CSS, hızlı ve tutarlı stil yönetimi
- **Headless UI** → Erişilebilir Dialog (modal) ve Listbox (filtre dropdown) bileşenleri için kullanıldı
- **Heroicons** → Headless UI ile uyumlu ikon seti

## Klasör Yapısı
```
src/
├── components/
│   ├── ui/
│   │   ├── Badge.jsx       # Rol badge bileşeni
│   │   └── Button.jsx      # Yeniden kullanılabilir buton
│   ├── AddUserModal.jsx    # Kullanıcı ekleme modalı
│   ├── EditUserModal.jsx   # Kullanıcı düzenleme modalı
│   ├── Header.jsx          # Üst bar
│   ├── Pagination.jsx      # Sayfalama
│   ├── SearchBar.jsx       # Arama ve filtre
│   ├── UserCard.jsx        # Tekil kullanıcı kartı
│   └── UserList.jsx        # Kullanıcı listesi
├── context/
│   └── UserContext.jsx     # Global state yönetimi
├── data/
│   ├── fakeApi.js          # Mock API (setTimeout ile gecikme simülasyonu)
│   └── initialUsers.js     # Başlangıç verileri, roller ve izinler
└── pages/
└── UsersPage.jsx       # Ana sayfa
```

## İsimlendirme Standardı

- **Component dosyaları** → PascalCase (`UserCard.jsx`)
- **Hook/util dosyaları** → camelCase (`fakeApi.js`)
- **Klasörler** → camelCase (`components`, `context`)
- **State yönetimi** → Context tek dosyada (`UserContext.jsx`), action tipleri string sabit olarak reducer içinde
- **Import yolları** → Relative path, barrel kullanılmadı
- **Commit formatı** → Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`)

## Özellikler

- Kullanıcı listeleme, ekleme, düzenleme, silme
- İsim bazlı arama
- Role göre filtreleme (Headless UI Listbox)
- Çoklu izin atama (read, write, delete)
- Pagination (sayfa başı 5 kullanıcı)
- Form validasyonu (boş alan, aynı isim kontrolü)
- Loading / Error / Empty state UI
- Erişilebilirlik (aria-label, htmlFor, Headless UI)
- useMemo ile arama/filtreleme optimizasyonu

## Süre Notu

Aktif geliştirme süresi: 4 gün (25-28 Nisan). 
Öncesinde Context API + useReducer ve Headless UI araştırması yapıldı.