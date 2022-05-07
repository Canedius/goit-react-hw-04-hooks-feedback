import PropTypes from 'prop-types'; // ES6
function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total()}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage(total())}%</p>
        </li>
      </ul>
    </div>
  );
}
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
