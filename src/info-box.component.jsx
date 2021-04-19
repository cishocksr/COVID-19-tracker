import { Card, CardContent, Typography } from '@material-ui/core';

function InfoBox({ title, cases, total }) {
  return (
    <Card className='info-box'>
      <CardContent>
        <Typography color='textSecondary' className='info-box__title'>
          {title}
        </Typography>

        <h2 className='info-box__cases'>{cases}</h2>

        <Typography color='textSecondary' className='info-box__total'>
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
