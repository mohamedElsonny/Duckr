import { Modal } from 'components';
import { connect } from 'react-redux';
import * as modalActionCreators from 'redux-config/modules/modal';
import * as ducksActionCreators from 'redux-config/modules/ducks';
import { bindActionCreators } from 'redux';

export default connect(
  ({ users, modal: { duckText, isOpen } }) => ({
    user: users[users.authId] ? users[users.authId].info : {},
    duckText,
    isOpen,
    isSubmitDisabled: duckText.length <= 0 || duckText.length > 140
  }),
  dispatch =>
    bindActionCreators({ ...modalActionCreators, ...ducksActionCreators }, dispatch)
)(Modal);
