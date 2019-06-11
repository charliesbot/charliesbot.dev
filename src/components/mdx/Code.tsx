import React from 'react'
import styled from '@emotion/styled'
import theme from 'prism-react-renderer/themes/nightOwl'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const CodeBlock = styled.pre`
  display: inline-block;
  line-height: 1.5;
  padding: 20px;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-all;
  word-wrap: break-word;
`

const Code = props => {
  const {
    children,
    codeString,
    className = 'language-js',
    ...otherProps
  } = props
  const language = className.replace(/language-/, '')
  if (otherProps['react-live']) {
    return (
      <LiveProvider code={children} theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  }

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <CodeBlock className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </CodeBlock>
      )}
    </Highlight>
  )
}

export default Code
