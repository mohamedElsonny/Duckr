import React, { Fragment } from 'react';
import { default as ReactModal } from 'react-modal';
import styled from 'styled-components';
import { object, string, func, bool } from 'prop-types';
import { baseTextAreaContainer, baseTextArea, darkBtn } from 'sharedStyles';
import { formatDuck } from 'helpers/utils';

const NewDuckTop = styled.div`
  background: #fff;
  padding: 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1877e6;
`;

const Pointer = styled.span`
  cursor: pointer;
`;

const NewDuckInputContainer = styled.div`
  ${baseTextAreaContainer};
`;
const NewDuckInput = styled.textarea`
  border-width: 0;
  ${baseTextArea};
`;
const DarkBtn = styled.button`
  ${darkBtn};
`;
const SubmitDuckBtn = styled.button`
  margin: 0px auto;
  width: 150px;
  text-align: center;
  display: block;
  ${darkBtn} &:disabled {
    background: #c6c6c6;
    border: 1px solid #c6c6c6;
  }
`;

const ModalStyle = {
  content: {
    width: 350,
    margin: '0 auto',
    height: 220,
    borderRadius: 5,
    background: '#EBEBEB',
    padding: 0
  }
};

const Modal = ({
  openModal,
  isOpen,
  closeModal,
  duckText,
  updateDuckText,
  isSubmitDisabled,
  duckFanout,
  user
}) => {
  const submitDuck = () => {
    return duckFanout(formatDuck(duckText, user));
  };

  return (
    <Fragment>
      <DarkBtn onClick={openModal}>{'Duck'}</DarkBtn>
      <ReactModal style={ModalStyle} onRequestClose={closeModal} isOpen={isOpen}>
        <NewDuckTop>
          <span>{'Compose New Duck'}</span>
          <Pointer onClick={closeModal}>{'X'}</Pointer>
        </NewDuckTop>
        <NewDuckInputContainer>
          <NewDuckInput
            onChange={e => updateDuckText(e.target.value)}
            value={duckText}
            maxLength={140}
            type="text"
            placeholder="What's on your mind?"
          />
        </NewDuckInputContainer>
        <SubmitDuckBtn disabled={isSubmitDisabled} onClick={submitDuck}>
          {'Duck'}
        </SubmitDuckBtn>
      </ReactModal>
    </Fragment>
  );
};
Modal.propTypes = {
  duckText: string.isRequired,
  isOpen: bool.isRequired,
  isSubmitDisabled: bool.isRequired,
  user: object.isRequired,
  openModal: func.isRequired,
  closeModal: func.isRequired,
  duckFanout: func.isRequired,
  updateDuckText: func.isRequired
};

ReactModal.setAppElement('#root');

export default Modal;
