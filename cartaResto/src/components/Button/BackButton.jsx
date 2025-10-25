import { Link, useLocation } from "react-router-dom"

const BackButton = ({ to = "/", children = "", className = "" }) => {
    const location = useLocation()
    const isHome = location.pathname === "/"
    
    if (isHome) return null
    
    return (
        <Link 
            to={to} 
            className={`fixed top-4 right-4 z-50 flex items-center gap-4 text-primary hover:text-primary/80 transition-colors text-8xl p-12 bg-background/80 backdrop-blur-sm rounded-lg border border-border ${className}`}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="24px" 
                viewBox="0 -960 960 960" 
                width="24px" 
                fill="currentColor"
                className="w-16 h-16 flex-shrink-0"
            >
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
            </svg>
            {children}
        </Link>
    )
}

export default BackButton
