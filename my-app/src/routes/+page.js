import Papa from 'papaparse'

export const ssr = false

export const load = async ({ fetch }) => {
    // Fetch Orders.csv
    const responseOrders = await fetch('http://localhost:5173/product_counts.csv', {
        headers: {
            'Content-Type': 'text/csv'
        }
    })
    const csvOrders = await responseOrders.text()
    const parsedCsvOrders = Papa.parse(csvOrders, { header: false, dynamicTyping: true })

    // Fetch Orders.csv
    const responseTypes = await fetch('http://localhost:5173/type_counts.csv', {
        headers: {
            'Content-Type': 'text/csv'
        }
    })
    const csvTypes = await responseTypes.text()
    const parsedCsvTypes = Papa.parse(csvTypes, { header: false, dynamicTyping: true })

    // Fetch Products.csv
    const responseProducts = await fetch('http://localhost:5173/products.csv', {
        headers: {
            'Content-Type': 'text/csv'
        }
    });
    const csvProducts = await responseProducts.text()
    const parsedCsvProducts = Papa.parse(csvProducts, { header: true })

    return {
        counts: parsedCsvOrders.data,
        products: parsedCsvProducts.data,
        types: parsedCsvTypes.data
    }
}