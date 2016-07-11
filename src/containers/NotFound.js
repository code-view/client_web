import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import NotFound from '../components/NotFound';
import { goBack } from '../actions';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({goIndex: goBack}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
