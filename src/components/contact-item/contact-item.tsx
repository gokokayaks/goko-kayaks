import React, { FC } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';
import { Colors } from '../../common/styles/colors';
import { Text } from '../text';

interface ContactItemProps {
  inverted: boolean;
}

export const ContactItem = styled.a<ContactItemProps>`
  border: 1px solid ${(props) => (props.inverted ? Colors.white : Colors.blue)};
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  color: ${(props) => (props.inverted ? Colors.white : Colors.blue)};

  :hover {
    background-color: ${(props) => (props.inverted ? Colors.white : Colors.blue)};
    color: ${(props) => (props.inverted ? Colors.blue : Colors.white)};

    p {
      color: ${(props) => (props.inverted ? Colors.blue : Colors.white)};
    }
  }

  svg {
    margin-right: 10px;
  }

  p {
    color: ${(props) => (props.inverted ? Colors.white : Colors.blue)};
  }
`;

interface ContactProps {
  useWords?: boolean;
  inverted?: boolean;
  className?: string;
}

export const Email: FC<ContactProps> = ({ useWords = false, className, inverted = false }) => {
  const text = useWords ? 'Email Us' : 'gokokayaks@gmail.com';

  return (
    <ContactItem href="mailto:gokokayaks@gmail.com" className={className} inverted={inverted}>
      <FaEnvelope />
      <Text type="paragraph">{text}</Text>
    </ContactItem>
  );
};

export const Phone: FC<ContactProps> = ({ useWords = false, className, inverted = false }) => {
  const text = useWords ? 'Call Us' : '(727)-336-9595';

  return (
    <ContactItem href="tel:7273369595" className={className} inverted={inverted}>
      <FaPhone />
      <Text type="paragraph">{text}</Text>
    </ContactItem>
  );
};
