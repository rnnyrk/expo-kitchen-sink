import styled, { css } from 'styled-components/native';

export const AccordionContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const AccordionItemContainer = styled.View``;

export const AccordionItemHeader = styled.Pressable<AccordionItemHeaderProps>`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `}
`;

type AccordionItemHeaderProps = {
  isOpen: boolean;
};

export const AccordionItemContent = styled.Pressable`
  margin-top: 4px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  overflow: hidden;
`;
