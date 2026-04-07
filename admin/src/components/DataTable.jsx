export default function DataTable({ columns, data }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full text-sm text-left text-gray-700 border-collapse">
        {/* Header */}
        <thead className="bg-blue text-white uppercase text-xs sticky top-0 z-10">
          <tr>
            {columns.map((col, i) => (
              <th
                key={i}
                className="px-4 py-3 border-b border-gray-200 font-semibold tracking-wide text-left"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data?.length > 0 ? (
            data.map((row, i) => (
              <tr
                key={i}
                className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition border-b border-slate-300 cursor-pointer"
              >
                {Object.values(row).map((val, j) => (
                  <td
                    key={j}
                    className="px-4 py-3 whitespace-normal break-words"
                    data-label={columns[j]} // For responsive stacked view
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-6 text-center text-gray-400"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Mobile stacked view */}
      <style>
        {`
          @media (max-width: 640px) {
            table, thead, tbody, th, td, tr {
              display: block;
            }
            thead tr {
              display: none;
            }
            tbody tr {
              margin-bottom: 1rem;
              border: 1px solid #e5e7eb;
              border-radius: 0.5rem;
              padding: 0.5rem;
            }
            td {
              display: flex;
              justify-content: space-between;
              padding: 0.5rem;
              border-bottom: 1px solid #e5e7eb;
              text-align: right;
            }
            td::before {
              content: attr(data-label);
              font-weight: 600;
              text-transform: uppercase;
              color: #6b7280;
              text-align: left;
            }
            td:last-child {
              border-bottom: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
