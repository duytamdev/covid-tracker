import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './index.css';
import { useTranslation } from 'react-i18next';
import { casesTypeColors, prettyPrintStat } from '../../../../utils/helper';

function InfoBox({
  title, cases, total, onClick, active, typeCase,
}) {
  const { t } = useTranslation();
  return (
    <Card
      style={{ borderTop: active ? `10px solid ${casesTypeColors[typeCase].half_op}` : null, boxShadow: 'none' }}
      onClick={onClick}
      className="info-box"
    >
      <CardContent>
        <Typography className="info-box__title" color="textSecondary">{t(title)}</Typography>
        <h2 style={{ color: casesTypeColors[typeCase].hex }} className={'info-box__cases\'}'}>{prettyPrintStat(cases)}</h2>
        <Typography className="info-box__total" color="textSecondary">
          {t('totalCase', { cases: prettyPrintStat(total) })}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
