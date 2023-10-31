
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header>
      <h2>{title}</h2>
      <Button text="Add" />
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
