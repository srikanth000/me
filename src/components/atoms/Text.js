import styled, { css } from 'styled-components';
import { Flex } from 'rebass';

const Text = styled(Flex)`
	color: ${({ theme: { colors }, color }) => colors[color]};
  font-size: ${({ theme: { fontSizes }, fontSize }) => fontSizes[fontSize]};
  margin-left: ${props =>  props?.ml };
  margin-right: ${props =>  props?.mr};
  margin-bottom: ${props =>  props?.mb};
  margin-top: ${props =>  props?.mt};
  text-align: ${props => props?.textAlign};
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
  mt: '0px',
  ml: '0px',
  mb: '0px',
  mr: '0px'
}

export default Text