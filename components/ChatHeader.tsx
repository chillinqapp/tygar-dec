import { FC } from 'react'

const ChatHeader: FC = () => {
  return (
    <div className='w-full flex gap-3 justify-start items-center '>
      <div className='flex flex-col items-start text-sm'>
        <p className='text-xs text-background'>Chat with</p>
        <div className='flex gap-1.5 items-center'>
          <p className='w-2 h-2 rounded-full bg-background' />
          <p className='ml-2 font-medium text-background'> Eventify support</p>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
