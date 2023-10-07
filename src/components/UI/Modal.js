/** @jsxImportSource @emotion/react */
import ReactDOM from 'react-dom';
import { backdrop, modal } from '../../styles/ui-style';

const Backdrop = (props) => {
  return <div css={backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return <div css={modal}>{props.children}</div>;
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
