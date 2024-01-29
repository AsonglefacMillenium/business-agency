import { Text } from '@/components/atoms'
import React from 'react'

const DetailsCard = ({...props}: DetailsCardProps) => {
  return (
    <div {...props} className='w-fit h-fit bg-[#0C0C0C] rounded-[15px] gap-[11px] px-[30px] py-[20px] flex flex-col justify-center ' >
        <Text 
          text={props.title}
          color="#fff"
          fontWeight={"bold"}
          fontSize={"large"}
        />
        <Text
          text={props.text}
          color="#fff"
          fontWeight={"400"}
          fontSize={"normal"}
        /> 
    </div>
  )
}

export default DetailsCard