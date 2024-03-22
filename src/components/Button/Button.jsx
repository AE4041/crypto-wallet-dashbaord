import "./style.css"

const Button = ({ label, icon, onClick, className }) => {
    return (
        <button className={`button ${className}`} onClick={() => onClick()}>
            <div className="flex align-items-center justify-content-center">
                <i>{icon}</i>
                <span className="text">{label}</span>
            </div>
        </button>
    )
}

export default Button 