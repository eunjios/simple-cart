/** @jsxImportSource @emotion/react */
import { backdrop, modal } from '../../styles/ui-style';

const Backdrop = (props) => {
  return <div css={backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return <div css={modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <>
      <Backdrop onClick={props.onClose} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  );
};

export default Modal;
