import { useState } from 'react'
import DataTable from 'react-data-table-component';


export default function CompanyProfile({ profile }) {
  const data = JSON.parse(profile)
  const [loading, setLoading] = useState(false);

  const columns = [
    { name: "Symbol", width: "100px", selector: (row) => row.symbol, sortable: true },
    { name: "Name", width: "100px", selector: (row) => row.companyName },
    { name: "Price", width: "100px", selector: (row) => row.price },
    { name: "Market Cap", width: "150px", selector: (row) => row.mktCap },
    { name: "Change", width: "100px", selector: (row) => row.changes },
    { name: "Currency", selector: (row) => row.currency },
    { name: "Exchange", width: "100px", selector: (row) => row.exchangeShortName },
    { name: "Industry", width: "200px", selector: (row) => row.industry },
    { name: "Address", width: "320px", selector: (row) => row.address + ' ' + row.city + ', ' + row.state + ', ' + row.zip },
    { name: "Sector", width: "150px", selector: (row) => row.sector },
  ];
  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-cyan-500 text-lg font-semibold pb-4"><i className="fas fa-building text-cyan-500 text-lg"></i> Company Profile</h2>
      <div className="my-1"></div>
      <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
      <DataTable
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
      />
    </div>
  )
}