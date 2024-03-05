import "./style.css"

const InputText = ({ className, value, onChange, placeholder }) => {
    return (
        <input
            className={`p-inputtext text-base border-round-lg ${className}`}
            type="text" value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
};

export default InputText;