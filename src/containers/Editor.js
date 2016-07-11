import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Editor from '../components/Editor';
import { goBack, updateSession } from '../actions';

const mapStateToProps = ({session = {}}, ownProps) => {
  if (session.id !== ownProps.params.sessionId) {
    session = {id: ownProps.params.sessionId};
  }

  return session;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({goBack, updateSession}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
