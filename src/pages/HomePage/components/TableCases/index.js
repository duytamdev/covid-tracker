import React from 'react';
import './index.css';

const sortData = (data) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    }
    return 1;
  });
  return sortedData;
};
function TableCases({ countries }) {
  return (
    <div className="table-cases">
      {
            sortData(countries).map(({ name, cases }) => (
              <tr>
                <td>{name}</td>
                <strong>
                  <td>{cases}</td>
                </strong>
              </tr>
            ))
        }
    </div>
  );
}

export default TableCases;
