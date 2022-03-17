import React,{FC} from 'react'

type WrapperProps = {
}

const Wrapper: FC<WrapperProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Wrapper