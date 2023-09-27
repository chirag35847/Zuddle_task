import { Image, Space, Text } from '@mantine/core'
import React from 'react'
import {IconPaperclip, IconTemplate} from '@tabler/icons-react'

const ResourceListItem = ({url,name,attachments,createdAt}) => {
  return (
    <div className='flex flex-col bg-white mb-5 rounded-lg p-3'>
        {
            url!=undefined && url!='' &&
            <Image radius={'md'} w={'auto'} style={{height:'10vh'}} src={url}/>
        }
        <h2>{name}</h2>
        <div className='flex'>
            <IconTemplate />
            <Space w={'0.5vw'}/>
            <IconPaperclip/>
            <Space w={'0.2vw'}/>
            <Text>{attachments}</Text>
        </div>
    </div>
  )
}

export default ResourceListItem