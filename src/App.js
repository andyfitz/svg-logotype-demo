import PropTypes from "prop-types";
import './App.css';


function App({ name }) {
  return (
    <div className="App"  >

      <h1>{name}</h1>
 
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string
}

App.defaultProps = {
  name: 'Believe'
}

export default App;
