/** @jsxImportSource @emotion/react */
import { backdrop, modal } from '../../styles/ui-style';

const Backdrop = (props) => {
  return <div css={backdrop} />;
};

const ModalOverlay = (props) => {
  return <div css={modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <>
      <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  );
};

export default Modal;
