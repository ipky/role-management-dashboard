import Button from './ui/Button'

function Header({ onAddUser }) {
    return (
        <header className='bg-[#1B3A8C] px-6 py-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-[#E8192C] rounded-full flex items-center justify-center'>
                    <span className='text-white text-xs font-medium'>AH</span>
                </div>
                 <div>
                <p className='text-white text-sm font-medium'>Amerikan Hastanesi</p>
                <p className='text-white/60 text-xs'>Kulanıcı Yönetim Paneli</p>
            </div>
            </div>
            <Button variant='primary' onClick={onAddUser}>
                + Yeni Kullanıcı
            </Button>
        </header>
    ) 
}

export default Header