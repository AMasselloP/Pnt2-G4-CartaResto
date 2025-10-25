import { Link, useLocation } from "react-router-dom"

const BuyButton = ({ to = "/carrito", children = "", className = "" }) => {
    const location = useLocation()
    const isCarrito = location.pathname === "/carrito"
    
    if (isCarrito) return null
    
    return (
        <Link 
            to={to} 
            className={`fixed top-4 z-50 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-2xl p-3 bg-background/80 backdrop-blur-sm rounded-lg border border-border ${className}`}
            style={{ right: '80px', position: 'fixed' }}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="24px" 
                viewBox="0 -960 960 960" 
                width="24px" 
                fill="currentColor"
                className="w-6 h-6 flex-shrink-0"
            >
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM280-320q-50 0-85-35t-35-85v-360q0-17 11.5-28.5T160-840h600q17 0 28.5 11.5T800-800v360q0 50-35 85t-85 35H280Z"/>
            </svg>
            {children}
        </Link>
    )
}

export default BuyButton
