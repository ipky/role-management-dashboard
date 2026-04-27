function Badge({ role }) {
    const styles = {
        Admin: 'bg-red-50 text-red-700',
        Doctor: 'bg-blue-50 text-blue-700',
        Patient: 'bg-green-50 text-green-700',
    }

    return (
        <span className={`text-xs font-medium px-3 py-1 rounded-full ${styles[role] || 'bg-gray-50 text-gray-700'}`}>
            {role}
        </span>
    )
}

export default Badge