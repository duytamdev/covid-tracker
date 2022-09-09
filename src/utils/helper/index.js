import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';

export const optionsLineGraph = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          format: 'MM/DD/YY',
          tooltipFormat: 'll',
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback(value) {
            return numeral(value).format('0a');
          },
        },
      },
    ],
  },
};
const casesTypeColors = {
  cases: {
    hex: '#CC1034',
    rgb: 'rgb(204, 16, 52)',
    half_op: 'rgba(204, 16, 52, 0.5)',
    multiplier: 800,
  },
  recovered: {
    hex: '#7dd71d',
    rgb: 'rgb(125, 215, 29)',
    half_op: 'rgba(125, 215, 29, 0.5)',
    multiplier: 1200,
  },
  deaths: {
    hex: '#fb4443',
    rgb: 'rgb(251, 68, 67)',
    half_op: 'rgba(251, 68, 67, 0.5)',
    multiplier: 2000,
  },
};
export const sortData = (data) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    }
    return 1;
  });
  return sortedData;
};

export const prettyPrintStat = (stat) => (stat ? `+${numeral(stat).format('0.0a')}` : '+0');
export const formatNumber = (number, format = '0,0') => numeral(number).format(format);
export const showDataOnMap = (data, casesType = 'cases') => data.map((country) => (
  <Circle
    center={[country.countryInfo.lat, country.countryInfo.long]}
    color={casesTypeColors[casesType]?.hex}
    fillColor={casesTypeColors[casesType]?.hex}
    fillOpacity={0.1}
    radius={0.15 * (Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier)}
  >
    <Popup>
      <div className="info-container">
        <div
          className="info-flag"
          style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
        />
        <div className="info-name">{country.country}</div>
        <div className="info-confirmed">
          Cases:
          {' '}
          {formatNumber(country.cases)}
        </div>
        <div className="info-recovered">
          Recovered:
          {' '}
          {formatNumber(country.recovered)}
        </div>
        <div className="info-deaths">
          Deaths:
          {' '}
          {formatNumber(country.deaths)}
        </div>
      </div>
    </Popup>
  </Circle>
));
