import styled, { css } from 'styled-components';
import { Flex } from 'rebass';

// NOTE:: Do not add margin's here. You can add it where you use this element.
const Text = styled(Flex)`
	color: ${({ theme: { colors }, color }) => colors[color]};
  font-size: ${({ theme: { fontSizes }, fontSize }) => fontSizes[fontSize]};
  font-family: ${({ bolder, bold, theme: { fonts }}) => {
    if(bolder) {
      return fonts.extraBold
    } else if(bold) {
      return fonts.semiBold
    } else {
      return fonts.normal
    }
  }};
  line-height: ${({ theme: { lineHeights }, lineHeight }) => lineHeights[lineHeight]};
  letter-spacing: ${({ theme: { letterSpaces }, letterSpace}) => letterSpaces[letterSpace]};
  ${({ cursor }) => cursor && css`
    cursor: ${cursor};
  `}
`

Text.defaultProps = {
  lineHeight: 'md',
  fontSize: 'md',
  lineSpace: 'md',
  color: 'body',
  as: 'p',
}

export default Text