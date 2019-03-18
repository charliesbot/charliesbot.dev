import styled from '@emotion/styled'
import { rhythm } from 'lib/typography'
import theme from '../../../config/theme'

export const Title = styled.h1`
  position: relative;
  z-index: 5;
  line-height: 1.5;
  margin: 0;
  max-width: ${rhythm(15)};
`

export const Section = styled.section`
  * {
    color: ${theme.colors.white};
  }
  width: 100%;
  background: ${theme.brand.primary};
  padding: 20px 0 30px 0;
  display: flex;
`
