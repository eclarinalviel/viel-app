import { useState } from 'react'
import DataTable from 'react-data-table-component';

export default function CompanyQuote({ quote }) {
  const data = JSON.parse(quote)
  const [loading, setLoading] = useState(false);
  const columns = [
    { name: "Symbol", width: "120px", selector: (row) => row.symbol, sortable: true },
    { name: "Name", width: "150px", selector: (row) => row.name },
    { name: "Price", selector: (row) => row.price },
    { name: "Change", width: "150px", selector: (row) => row.change + ' (' + (row.changesPercentage * 100) + '%)' },
    { name: "Day Low", selector: (row) => row.dayLow },
    { name: "Day High", selector: (row) => row.dayHigh },
    { name: "Year Low", selector: (row) => row.yearLow },
    { name: "Year High", selector: (row) => row.yearHigh },
    { name: "Market Cap", width: "180px", selector: (row) => row.marketCap },
    { name: "Exchange", selector: (row) => row.exchange },
    { name: "Volume", selector: (row) => row.volume },
    { name: "Open", selector: (row) => row.open },
    { name: "Previous Close", selector: (row) => row.previousClose },
  ];
  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-yellow-500 text-lg font-semibold pb-4"><i className="fas fa-dollar text-yellow-500 text-lg"></i> Company Quote</h2>
      <div className="my-1"></div>
      <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 h-px mb-6"></div>
      <DataTable
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
      />
    </div>
  )
}