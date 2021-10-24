import {Friends} from './Friends';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  friends: state.friends,
});

export default connect(mapStateToProps)(Friends);
