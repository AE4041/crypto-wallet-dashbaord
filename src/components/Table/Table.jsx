import "./style.css"
import Button from "../Button/Button"

const Table = ({ className, data }) => {
    return (
        <table className={`transparent-table ${className}`}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Balance</th>
                    <th>Profit</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.recepientName}</td>
                        <td>{row.date}</td>
                        <td>{row.amount}</td>
                        <td>
                            <Button label="Add" className="btn-mask p-2 w-full text-white font-semibold" />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table