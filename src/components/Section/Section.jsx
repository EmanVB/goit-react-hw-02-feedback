import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      <section>{children}</section>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
