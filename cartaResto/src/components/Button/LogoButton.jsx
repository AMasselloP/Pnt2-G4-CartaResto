import { Link } from "react-router-dom"

const LogoButton = ({ to = "/", children = "", className = "" }) => {
    return (
        <Link 
            to={to} 
            className={`fixed top-4 left-20 z-50 flex items-center gap-2 transition-colors text-2xl p-3 bg-background/80 backdrop-blur-sm rounded-lg border border-border ${className}`}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="140" 
                height="50" 
                viewBox="0 0 520 160"
                className="flex-shrink-0"
            >
                {/* Texto con estilo grunge - sin fondo */}
                <g transform="translate(26,118)">
                    <text
                        x="0" 
                        y="0"
                        fill="#000000"
                        fontFamily="'Rubik Dirt', 'Arial Black', sans-serif"
                        fontSize="110"
                        fontWeight="900"
                        dominantBaseline="alphabetic"
                        style={{
                            filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                        }}
                    >
                        Foodit
                    </text>
                </g>
            </svg>
            {children}
        </Link>
    )
}

export default LogoButton
