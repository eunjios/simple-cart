/** @jsxImportSource @emotion/react */
import { item, info } from '../../styles/item-style';
import ItemForm from './ItemForm';

const Item = (props) => {
  const price = `${props.price.toLocaleString('ko-KO')}원`;
  const rating = `평점 ${props.rating}`;
  const review = `리뷰 ${props.review}`;

  return (
    <div css={item}>
      <img src={props.src} alt={props.title} />
      <h5>{props.title}</h5>
      <h5>{price}</h5>
      <div css={info}>
        <span>{rating}</span>
        <span>{review}</span>
      </div>
      <ItemForm />
    </div>
  );
};

export default Item;
