import styled from 'styled-components';
import { device } from '../../../common/styles/breakpoints';
import { Colors } from '../../../common/styles/colors';

export const PricesContainer = styled.section`
  background-color: ${Colors.greyLight};
`;

export const TextContainer = styled.div`
  padding: 20px;
  cursor: pointer;
  background-color: ${Colors.orange};
`;

interface TableContainerProps {
  isSectionOpen: boolean;
}

export const ContentContainer = styled.div<TableContainerProps>`
  max-height: ${(props) => (props.isSectionOpen ? '2000px' : '0px')};
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 500ms linear;

  table {
    width: 100%;
    padding: 20px;

    @media only screen and ${device.tablet} {
      padding: 50px;
    }
  }

  td {
    padding: 10px 0;
  }
`;

export const Alert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 80%;
  background-color: ${(props) => (props.theme === 'orange' ? Colors.orangeLight : Colors.purpleLight)};
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: center;

  svg {
    margin-right: 10px;
  }
`;
