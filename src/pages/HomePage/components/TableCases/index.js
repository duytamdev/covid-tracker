import React from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';
import { formatNumber, sortData } from '../../../../utils/helper';

function TableCases({ countries }) {
  const { t } = useTranslation();
  return (
    <div className="table-cases">
      <div className="table-cases__header">
        <h4>{t('country')}</h4>
        <h4>{t('typeCase.cases')}</h4>
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
