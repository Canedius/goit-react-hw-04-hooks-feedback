import PropTypes from 'prop-types'; // ES6
function Notification({ message }) {
  return <p>{message}</p>;
}
export default Notification;
Notification.propTypes = {
  message: PropTypes.string,
};
