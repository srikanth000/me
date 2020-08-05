import styled, { css } from 'styled-components';
import { Box } from 'rebass';

/**
 * Icon takes in url parameter which are the relative paths from assets/icons folder.
 * size picks up values from themes/index.js `iconSizes`
 */
const Icon = styled(Box).attrs(({
  rotate, pointer, width, height, borderRadius
}) => ({as: 'img', rotate, pointer, width, height, borderRadius}))`
    ${({ theme: { iconSizes }, size = 'sm' }) => {
    return css`
            width: ${iconSizes[size]};
            height: ${iconSizes[size]};
            background-size: cover;
            vertical-align: ${({verticalAlign}) => verticalAlign || 'middle'};
            ${({ rounded }) => rounded && css`border-radius: 50%`};
            ${({ rotate }) => rotate && css`transform: rotate(${rotate}deg)`};
            ${({ ml }) => ml && css`margin-left: ${ml}`};
            ${({ mt }) => mt && css`margin-top: ${mt}`};
            ${({ mr }) => mr && css`margin-right: ${mr}`};
            ${({ pointer }) => pointer && css`cursor: pointer`};
            ${({ borderRadius }) => borderRadius && css`border-radius: ${borderRadius}`};
        `
  }}
`

export default Icon;