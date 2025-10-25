import { Link, useLocation } from "react-router-dom"

const LoginButton = ({ to = "/Login", children = "", className = "" }) => {
    const location = useLocation()
    const isLogin = location.pathname === "/Login"
    
    if (isLogin) return null
    
    return (
        <Link 
            to={to} 
            className={`fixed top-4 z-50 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-2xl p-3 bg-background/80 backdrop-blur-sm rounded-lg border border-border ${className}`}
            style={{ right: '40px', position: 'fixed' }}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="24px" 
                viewBox="0 -960 960 960" 
                width="24px" 
                fill="currentColor"
                className="w-6 h-6 flex-shrink-0"
            >
                <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/>
            </svg>
            {children}
        </Link>
    )
}

export default LoginButton
