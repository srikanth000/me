import styled, { css } from 'styled-components';
import { Box } from 'rebass';

const Image = styled(Box).attrs(() => ({as: 'img'}))`
  width: ${props => props.width || '100%'};
  ${({ minWidth }) => {
    return minWidth && css`
      min-width: ${minWidth};
    `
  }}
  ${({ borderRadius }) => {
    return borderRadius && css`
      border-radius: ${borderRadius};
    `
  }}

`

export default Image;