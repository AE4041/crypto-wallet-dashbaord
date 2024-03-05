import "./style.css"

const Button = ({ label, icon, onClick, className }) => {
    return (
        <button className={`p-button ${className}`} onClick={() => onClick()}>
            <div className="flex">
                <i>{icon}</i>
                <span className="text">{label}</span>
            </div>
        </button>
    )
}

export default Button 