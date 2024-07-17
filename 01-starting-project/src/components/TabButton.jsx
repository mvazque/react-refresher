export default function TabButton({ children, onSelect, isSelected, ...props }) {
    return (
        <li>
            <button className={isSelected ? 'active': ''} {...props}>
                {children}
            </button>
        </li>
    );
}