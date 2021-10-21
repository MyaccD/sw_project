import {CountsModule} from './CountsModule';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  data: state,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CountsModule);
