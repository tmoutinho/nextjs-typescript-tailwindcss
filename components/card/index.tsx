import styled from '@emotion/styled';

import styles from './card.module.scss';

// use css or scss
// use installed emotion from chakra-ui

const StyledExternalDiv = styled.div`
  padding: 40px;
  background-color: var(--chakra-colors-palette-red);
  border-radius: var(--chakra-space-2);
`;

const Card = () => {
  return (
    <div className={styles['card-section']}>
      <h1 className={styles['card-heading']}>Card</h1>
      <p>Things</p>
    </div>
  );
};

export default Card;
