/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { item, info } from '../../styles/item-style';
import ItemForm from './ItemForm';

const Item = (props) => {
  const [amount, setAmount] = useState(1);

  const price = `${props.price.toLocaleString('ko-KO')}원`;
  const rating = `평점 ${props.rating}`;
  const review = `리뷰 ${props.review}`;

  const changeHandler = (event) => {
    setAmount(Number(event.target.value));
  };

  const plusAmountHandler = () => {
    if (amount >= 10) return;
    setAmount((prevAmount) => prevAmount + 1);
  };

  const minusAmountHanlder = () => {
    if (amount <= 1) return;
    setAmount((prevAmount) => prevAmount - 1);
  };

  const currentItem = {
    id: props.id,
    title: props.title,
    price: props.price,
    amount: amount,
    imageUrl: props.src,
  };

  return (
    <div css={item}>
      <img src={props.src} alt={props.title} />
      <h5>{props.title}</h5>
      <h5>{price}</h5>
      <div css={info}>
        <span>{rating}</span>
        <span>{review}</span>
      </div>
      <ItemForm
        item={currentItem}
        value={amount}
        onChange={changeHandler}
        onPlus={plusAmountHandler}
        onMinus={minusAmountHanlder}
      />
    </div>
  );
};

export default Item;
