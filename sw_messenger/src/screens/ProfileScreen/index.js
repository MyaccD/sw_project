import Profile from './Profile';
import {connect} from 'react-redux';

const mapStateToProps = store => {
  return {
    selfInf: store.selfInf,
    social: store.social,
    photo: store.photo,
  };
};

export default connect(mapStateToProps)(Profile);
