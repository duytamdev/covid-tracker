import React from 'react';
import './index.css';
import { formatNumber, sortData } from '../../../../utils/helper';

function TableCases({ countries }) {
  return (
    <div className="table-cases">
      <div className="table-cases__header">
        <h3>Country</h3>
        <h3>Cases</h3>
      </div>
      {
            sortData(countries).map(({ name, cases }) => (
              <div className="table-cases__item" key={name}>
                <h7 className="table-cases__item__name">{name}</h7>
                <h5 className="table-cases__item__cases">{formatNumber(cases)}</h5>
              </div>
            ))
      }
    </div>

  );
}

export default React.memo(TableCases);
