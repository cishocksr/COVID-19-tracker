import numeral from 'numeral';
import '../styles/table.styles.css';

const Table = ({ countries }) => {
  return (
    <div className='table'>
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format('000,000')}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};

export default Table;
