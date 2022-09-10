import React from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';
import { formatNumber, sortData } from '../../../../utils/helper';

function TableCases({ countries }) {
  const { t } = useTranslation();
  return (
    <div className="table-cases">
      <div className="table-cases__header">
        <h3>{t('country')}</h3>
        <h3>{t('typeCase.cases')}</h3>
      </div>
      {
            sortData(countries).map(({ name, cases }) => (
              <div className="table-cases__item" key={name}>
                <div className="table-cases__item__name">{name}</div>
                <b className="table-cases__item__cases">{formatNumber(cases)}</b>
              </div>
            ))
      }
    </div>

  );
}

export default React.memo(TableCases);
