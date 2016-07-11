import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Welcome from '../components/Welcome';
import { goSession } from '../actions';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({goSession}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
