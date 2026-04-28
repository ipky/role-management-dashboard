function Button({ children, variant = 'primary', onClick, type = 'button', disabled = false }) {
    const styles = {
        primary: 'bg-[#1B3A8C] text-white hover:bg-[#142d6e]',
        secondary: 'bg-white text-[#1B3A8C] border border-[#1B3A8C] hover:bg-blue-50',
        danger: 'bg-white text-[#E8192C] border border-[#E8192C] hover:bg-red-50',
        'danger-fill': 'bg-[#E8192C] text-white hover:bg-red-700',
        cancel: 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50',
  }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${styles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
            {children}
        </button>
    )
}

export default Button