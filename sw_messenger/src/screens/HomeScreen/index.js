import {Home} from './Home';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  selfInf: state.selfInf,
});

export default connect(mapStateToProps)(Home);
