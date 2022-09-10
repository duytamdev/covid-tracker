import React from 'react';
import './index.css';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { optionsLineGraph } from '../../../../utils/helper';

function LineGraph({ dataChart, caseType }) {
  const { t } = useTranslation();
  const translateTypeCase = {
    cases: t('typeCase.cases').toLowerCase(),
    recovered: t('typeCase.recovered').toLowerCase(),
    deaths: t('typeCase.deaths').toLowerCase(),
  };
  return (
    <div className="line-graph">
      <h3 className="line-graph__title">
        {t('workCase', { typeCase: translateTypeCase[caseType] })}
      </h3>
      {dataChart?.length > 0 && (
      <div className="line-graph__chart">
        <Line
          data={{
            datasets: [
              {
                labels: 'Cases',
                backgroundColor: 'rgba(204, 16, 52, 0.5)',
                borderColor: '#CC1034',
                data: dataChart,
              },
            ],
          }}
          options={optionsLineGraph}
        />
      </div>

      )}
    </div>
  );
}

export default LineGraph;
