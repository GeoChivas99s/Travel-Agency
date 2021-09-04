/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';

import { FlexView } from '../../elements';

const Card = styled(FlexView)<any>`
  cursor: pointer;
  display: flex;
  transition: transform 0.5s;
  margin: 10px;
  flex-direction: column;
  border-radius: 5px;
  width: 80%;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  background-image: url(${(props) => props.image});

  height: 20rem;
  :hover {
    transform: scale(1.3);
    .icon {
      display: flex;
      color: #fb8f1d;
    }
  }

  .icon {
    display: none;
    font-size: 3rem;
    align-self: center;
    flex: 1;
  }
`;

export default Card;
