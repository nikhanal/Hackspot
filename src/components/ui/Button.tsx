interface ButtonProps {
    variant?: "default" | "outline" | "ghost" | "link";
    children: React.ReactNode;
    onClick?: () => void;
    size?: "lg" | "md" | "sm";
}
const Button = ({variant, children, onClick, size}: ButtonProps) => {
    return(
        <button onClick={onClick} className={`${size === 'lg' ? 'px-6 py-3' : size === 'md' ? 'px-4 py-2' : 'px-3 py-1'} rounded-lg cursor-pointer font-medium text-xl ${variant === 'default' ? 'bg-purple-600 text-white hover:bg-purple-700' : variant === 'outline' ? 'bg-transparent border border-purple-600 hover:bg-purple-600 hover:text-white' : ''}`}>{children}</button>
    )
}

export default Button
