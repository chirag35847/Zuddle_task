import React from 'react'
import { Avatar, Image, Space, Text } from '@mantine/core'
import { IconCheckbox, IconClock, IconPaperclip, IconTemplate } from '@tabler/icons-react'
import { format } from 'date-fns'
import { DataState } from './Context/DataProvider'

const NonResourceItem = ({item,from}) => {
  const {handleOnDrag} = DataState();

  return (
    <div className='flex flex-col bg-white mb-5 rounded-lg p-3' draggable onDragStart={(e)=>handleOnDrag(e,{item,from})}>
    {
      item.url != undefined && item.url != '' &&
      <Image fit='contain' h={'10vh'} radius={'md'} src={item.url} className='' mb={10}/>
    }
    <h2>{item.name}</h2>
    <Space h={'1vh'} />
    <div className='flex justify-between items-center'>
      <div className='flex'>
        {
          item.completed != undefined &&
          <div className='flex'>
            <div className={`flex ${item.completed == item.total ? 'bg-green rounded pl-2 pr-2 pt-1 pb-1' : ''}`}>
            <IconCheckbox />
            <Space w={'0.5vw'} />
              <Text>{item.completed}</Text>
              <Text>/</Text>
              <Text>{item.total}</Text>
            </div>
          </div>
        }
        {
          item.deadline != undefined &&
          <Text>{format(new Date(item.deadline), 'LLL dd')}</Text>
        }
        {
          item.attachments != undefined &&
          <div className='flex'>
            <Space w={'0.5vw'} />
            <IconPaperclip />
            <Space w={'0.2vw'} />
            <Text>{item.attachments}</Text>
          </div>
        }
        {
            item.completedAt != undefined && 
            <div className='flex bg-green rounded pl-2 pr-2 pt-1 pb-1'>
                <IconClock/>
                <Space w={'0.3vw'}/>
                <Text>{format(new Date(item.completedAt),'LLL dd, yyyy')}</Text>
            </div>
        }
        <Space w={'0.3vw'}/>
        <IconTemplate/>
      </div>
      <div className='flex'>
        {
          item.assignedTo != undefined &&
          <Avatar src={item.assignedTo} radius={'md'} />
        }
      </div>
    </div>
  </div>
  )
}

export default NonResourceItem