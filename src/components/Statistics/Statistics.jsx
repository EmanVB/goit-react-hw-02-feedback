import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <p className={css.label}>
        Good: <span className={css.value}>{good}</span>
      </p>
      <p className={css.label}>
        Neutral: <span className={css.value}>{neutral}</span>
      </p>
      <p className={css.label}>
        Bad: <span className={css.value}>{bad}</span>
      </p>
      <p className={css.label}>
        Total: <span className={css.value}>{total}</span>
      </p>
      <p className={css.label}>
        Positive Feedback: <span className={css.value}>{positive}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.string.isRequired,
};
