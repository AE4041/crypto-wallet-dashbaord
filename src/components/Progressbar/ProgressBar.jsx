import "./style.css"

const ProgressBar = ({ className }) => {
    return (
        <div className={`container ${className}`}>
            <div className="progress progress-moved">
                <div className={`progress-bar`}></div>
            </div>
        </div>
    )
}

export default ProgressBar