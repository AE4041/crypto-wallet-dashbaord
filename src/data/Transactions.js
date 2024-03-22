export const Transactions = {
    getData() {
        return [
            {
                date: "2024-03-04T08:30:00",
                recepientName: "John Doe",
                amount: " + ₵ 500.00",
                status: "Paid",
                transactionId: "T123456789001",
            },
            {
                date: "2024-03-04T11:45:00",
                recepientName: "Emily Davis",
                amount: "+ ₵ 300.00",
                status: "Paid",
                transactionId: "T123456789004",
            },
            {
                date: "2024-03-04T13:15:00",
                recepientName: "Linda Brown",
                amount: "+ ₵ 650.5",
                status: "Paid",
                transactionId: "T123456789006",
            },
            {
                date: "2024-03-04T12:30:00",
                recepientName: "Chris Miller",
                amount: "+ ₵ 950.0",
                status: "Pending",
                transactionId: "T123456789005",
            },
            {
                date: "2024-03-04T09:15:00",
                recepientName: "Alice Smith",
                amount: "+ ₵ 75.00",
                status: "Pending",
                transactionId: "T123456789002",
            },
            {
                date: "2024-03-04T10:00:00",
                recepientName: "Oasis Medical Clinic",
                amount: "- ₵ 5,000",
                status: "Paid",
                transactionId: "T123456789003",
            },
            {
                date: "2024-03-04T14:00:00",
                recepientName: "Mike Wilson",
                amount: "₵ 400.25",
                status: "Failed",
                transactionId: "T123456789007",
            },
            {
                date: "2024-03-04T15:45:00",
                recepientName: "Eva Turner",
                amount: "+ ₵ 110.75",
                status: "Pending",
                transactionId: "T123456789008",
            },
            {
                date: "2024-03-04T16:30:00",
                recepientName: "Samuel White",
                amount: "+ ₵ 85.0",
                status: "Paid",
                transactionId: "T123456789009",
            },
            {
                date: "2024-03-04T17:15:00",
                recepientName: "Grace Taylor",
                amount: "₵ 550.5",
                status: "Failed",
                transactionId: "T123456789010",
            },
            {
                date: "2024-03-04T18:00:00",
                recepientName: "Henry Clark",
                amount: "+ ₵ 95.25",
                status: "Paid",
                transactionId: "T123456789011",
            },
            {
                date: "2024-03-04T19:45:00",
                recepientName: "Sophia Martinez",
                amount: "+ ₵ 120.0",
                status: "Pending",
                transactionId: "T123456789012",
            },
            {
                date: "2024-03-04T20:30:00",
                recepientName: "Daniel Hall",
                amount: "₵ 70.75",
                status: "Failed",
                transactionId: "T123456789013",
            },
            {
                date: "2024-03-04T21:15:00",
                recepientName: "Olivia Adams",
                amount: "+ ₵ 350.5",
                status: "Paid",
                transactionId: "T123456789014",
            },
            {
                date: "2024-03-04T22:00:00",
                recepientName: "William Turner",
                amount: "+ ₵ 800.25",
                status: "Pending",
                transactionId: "T123456789015",
            },
            {
                date: "2024-03-04T23:45:00",
                recepientName: "Ava Mitchell",
                amount: "₵ 450.75",
                status: "Failed",
                transactionId: "T123456789016",
            },
            {
                date: "2024-03-05T00:30:00",
                recepientName: "Jack Turner",
                amount: "+ ₵ 100.0",
                status: "Paid",
                transactionId: "T123456789017",
            },
            {
                date: "2024-03-05T01:15:00",
                recepientName: "Emma Brown",
                amount: "+ ₵ 600.50",
                status: "Pending",
                transactionId: "T123456789018",
            },
            {
                date: "2024-03-05T02:00:00",
                recepientName: "Ryan Wilson",
                amount: "₵ 250.25",
                status: "Failed",
                transactionId: "T123456789019",
            },
            {
                date: "2024-03-05T02:45:00",
                recepientName: "Isabella Davis",
                amount: "+ ₵ 900.75",
                status: "Paid",
                transactionId: "T123456789020",
            },
        ];
    },

    getMediumData() {
        return Promise.resolve(this.getData().slice(0, 20))
    },

    getSmallData() {
        return Promise.resolve(this.getData().slice(0, 2))
    }
}