import { Text } from '@/components/atoms'
import React from 'react'

const DetailsCard = ({...props}: DetailsCardProps) => {
  return (
    <div {...props}>
        <Text 
          text={props.title}
          color="#000"
          fontWeight={"bold"}
          fontSize={"large"}
        />
        <Text
          text={props.text}
          color="#000"
          fontWeight={"semiBold"}
          fontSize={"normal"}
        /> 
    </div>
  )
}

export default DetailsCard