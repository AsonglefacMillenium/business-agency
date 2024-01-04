"use client"
import { Text } from '@/components/atoms'
import { Button } from '@/components/molecules'



export default function Home() {
  return (
   <main className='bg-black' >
    <Text color='red' fontSize='Xlarge' fontWeight='bold' text='Hello world' />
    <Button text='Get in touch' color='#000' bgColor='#fff'  onClick={() => {}}/>
   </main>
  )
}
