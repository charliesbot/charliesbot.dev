import React from 'react'
import { css } from '@emotion/core'
import Container from 'components/Container'
import { Section, Title } from './Hero.style'
import theme from '../../../config/theme'

export const Hero = () => (
  <Section>
    <Container
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <Title>Coffee + Code</Title>
    </Container>
    <div
      css={css`
        height: 150px;
        overflow: hidden;
      `}
    />
  </Section>
)
