import React, { ReactNode } from 'react'

interface LinkProps extends React.ComponentProps<"a">  {
children?: ReactNode;
}

const Link:React.FC<LinkProps> = ({children,...props}) => {
  return (
    <a {...props}>{children}</a>
  )
}

export default Link