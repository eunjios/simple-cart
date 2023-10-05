/** @jsxImportSource @emotion/react */
import Item from './Item';
import {
  itemsContainer,
  itemsUl,
  itemsLi,
} from '../../styles/item-style';

const Items = (props) => {
  const items = props.ITEMS.map((item) => (
    <li key={item.id} css={itemsLi}>
      <Item
        title={item.title}
        price={item.price}
        rating={item.rating}
        review={item.review}
        src={item.imageUrl}
      />
    </li>
  ));
  return (
    <div css={itemsContainer}>
      <ul css={itemsUl}>{items}</ul>
    </div>
  );
};

export default Items;
