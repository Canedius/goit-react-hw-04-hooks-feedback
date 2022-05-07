import PropTypes from 'prop-types'; // ES6
import s from './FeedbackOptions.module.css';
function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <ul className={s.list}>
      {Object.keys(options).map(option => (
        <li className={s.listItem} key={option}>
          <button type="button" onClick={onLeaveFeedback}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.shape({
    option: PropTypes.string,
  }),
};
