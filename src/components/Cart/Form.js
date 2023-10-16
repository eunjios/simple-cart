/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import useForm from '../../hooks/use-form';
import {
  actionsContainer,
  formContainer,
  inputContainer,
  inputStyle,
  labelStyle,
  narrow,
  wide,
} from '../../styles/form-style';
import CartContext from '../../store/cart-context';
import OrderButton from './OrderButton';

const Form = (props) => {
  const { totalPrice, resetCart } = useContext(CartContext);
  const total = `${totalPrice.toLocaleString('ko-KO')}원`;

  const nameRegEx = /^[가-힣]{2,4}$/;
  const telRegEx = /^\d{2,4}$/;
  const addressRegEx = /.+/;

  const {
    isRequired: nameIsRequired,
    enteredValue: enteredName,
    isValid: nameIsValid,
    isInvalidUI: nameIsInvalidUI,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useForm(nameRegEx);

  const {
    isRequired: tel1IsRequired,
    enteredValue: enteredTel1,
    isValid: tel1IsValid,
    isInvalidUI: tel1IsInvalidUI,
    inputChangeHandler: tel1ChangeHandler,
    inputBlurHandler: tel1BlurHandler,
    reset: tel1Reset,
  } = useForm(telRegEx);

  const {
    isRequired: tel2IsRequired,

    enteredValue: enteredTel2,
    isValid: tel2IsValid,
    isInvalidUI: tel2IsInvalidUI,
    inputChangeHandler: tel2ChangeHandler,
    inputBlurHandler: tel2BlurHandler,
    reset: tel2Reset,
  } = useForm(telRegEx);

  const {
    isRequired: tel3IsRequired,

    enteredValue: enteredTel3,
    isValid: tel3IsValid,
    isInvalidUI: tel3IsInvalidUI,
    inputChangeHandler: tel3ChangeHandler,
    inputBlurHandler: tel3BlurHandler,
    reset: tel3Reset,
  } = useForm(telRegEx);

  const {
    isRequired: addressIsRequired,

    enteredValue: enteredAddress,
    isValid: addressIsValid,
    isInvalidUI: addressIsInvalidUI,
    inputChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: addressReset,
  } = useForm(addressRegEx);

  const {
    isRequired: memoIsRequired,
    enteredValue: enteredMemo,
    isValid: memoIsValid,
    isInvalidUI: memoIsInvalidUI,
    inputChangeHandler: memoChangeHandler,
    inputBlurHandler: memoBlurHandler,
    reset: memoReset,
  } = useForm();

  let telIsValid = false;
  if (tel1IsValid && tel2IsValid && tel3IsValid) {
    telIsValid = true;
  }

  let formIsValid = false;
  if (
    nameIsValid &&
    telIsValid &&
    addressIsValid &&
    memoIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    const userData = {
      name: enteredName,
      tel: `${enteredTel1}-${enteredTel2}-${enteredTel3}`,
      address: enteredAddress,
      memo: enteredMemo,
    };
    props.onOrder(userData);
    nameReset();
    tel1Reset();
    tel2Reset();
    tel3Reset();
    addressReset();
    memoReset();
    resetCart();
  };

  return (
    <form css={formContainer} onSubmit={formSubmitHandler}>
      {/* 이름, 연락처, 배송지 주소, 배송 메모 */}
      <div css={inputContainer}>
        <strong css={labelStyle(nameIsRequired)}>
          name
        </strong>
        <input
          css={[inputStyle]}
          name="name"
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          required={nameIsRequired}
        />
      </div>
      <div css={inputContainer}>
        <strong css={labelStyle(tel1IsRequired)}>
          phone
        </strong>
        <div>
          <input
            css={[inputStyle, narrow]}
            name="tel.1"
            type="text"
            value={enteredTel1}
            onChange={tel1ChangeHandler}
            onBlur={tel1BlurHandler}
            inputMode="numeric"
            maxLength="4"
            required={tel1IsRequired}
          />
          <span>-</span>
          <input
            css={[inputStyle, narrow]}
            name="tel.2"
            type="text"
            value={enteredTel2}
            onChange={tel2ChangeHandler}
            onBlur={tel2BlurHandler}
            inputMode="numeric"
            maxLength="4"
            required={tel2IsRequired}
          />
          <span>-</span>
          <input
            css={[inputStyle, narrow]}
            name="tel.3"
            type="text"
            value={enteredTel3}
            onChange={tel3ChangeHandler}
            onBlur={tel3BlurHandler}
            inputMode="numeric"
            maxLength="4"
            required={tel3IsRequired}
          />
        </div>
      </div>
      <div css={inputContainer}>
        <strong css={labelStyle(addressIsRequired)}>
          address
        </strong>
        <input
          css={[inputStyle, wide]}
          name="address"
          type="text"
          value={enteredAddress}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
          required={addressIsRequired}
        />
      </div>
      <div css={inputContainer}>
        <strong css={labelStyle(memoIsRequired)}>
          delivery memo
        </strong>
        <input
          css={[inputStyle, wide]}
          name="memo"
          type="text"
          value={enteredMemo}
          onChange={memoChangeHandler}
          onBlur={memoBlurHandler}
          required={memoIsRequired}
        />
      </div>
      <div css={actionsContainer}>
        <div>
          <p>총 주문금액</p>
          <h3>{total}</h3>
        </div>
        <OrderButton onPrev={props.onPrev} />
      </div>
    </form>
  );
};

export default Form;
