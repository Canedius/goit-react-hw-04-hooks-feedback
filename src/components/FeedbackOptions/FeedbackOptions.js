import PropTypes from 'prop-types'; // ES6
import s from './FeedbackOptions.module.css';
function FeedbackOptions({ onLeaveFeedback, options }) {
  console.log(options);
  return (
    <ul className={s.list}>
      {options.map(option => (
        <li className={s.listItem} key={option}>
          <button type="button" onClick={onLeaveFeedback}>
            {option}
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
