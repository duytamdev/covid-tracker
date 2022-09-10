import React from 'react';
import './index.css';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { casesTypeColors, optionsLineGraph } from '../../../../utils/helper';

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
        <Line
          data={{
            datasets: [
              {
                label: t('numberCase'),
                backgroundColor: casesTypeColors[caseType].half_op,
                borderColor: casesTypeColors[caseType].hex,
                data: dataChart,
              },
            ],
          }}
          options={optionsLineGraph}
        />

      )}
    </div>
  );
}

export default LineGraph;
