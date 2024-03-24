import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

export const data = {
    labels,
    datasets: [
        {
            data: labels.map(() => faker.number.int(1000, { min: 200.00, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            fill: false
        },
        {
            data: labels.map(() => faker.number.int(1000, { min: 200.0, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ]
};


export const options = {
    responsive: true,
    type: 'line',
    data: data,
    options: {
        plugins: {
            filler: {
                propagate: false,
            },
            title: {
                display: true,
                text: 'Fill'
            }
        },
        interaction: {
            intersect: false,
        }
    }
};



const TransactionChart = () => {
    return (
        <div className="w-full">
            <Line options={options} data={data} />
        </div>
    )
}

export default TransactionChart