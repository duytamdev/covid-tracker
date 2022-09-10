import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './index.css';
import { useTranslation } from 'react-i18next';
import { prettyPrintStat } from '../../../../utils/helper';

function InfoBox({
  title, cases, total, onClick, isRed, active,
}) {
  const { t } = useTranslation();
  return (
    <Card
      style={{ boxShadow: 'none' }}
      onClick={onClick}
      className={`info-box ${active && 'info-box--selected'} ${isRed && 'info-box--red'}`}
    >
      <CardContent>
        <Typography className="info-box__title" color="textSecondary">{title}</Typography>
        <h2 className={`info-box__cases ${!isRed && 'info-box__cases--green'}`}>{prettyPrintStat(cases)}</h2>
        <Typography className="info-box__total" color="textSecondary">
          {t('totalCase', { cases: prettyPrintStat(total) })}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
