import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React, { useCallback, useEffect, useState } from 'react'
import ResourceModal from './ResourceModal';
import dummyResource from '../data/resourceList';
import ResourceListItem from './ResourceListItem';

const ResourcesCard = () => {
  const [opened, { close, open }] = useDisclosure(false);
  const [resourceList,setResourceList] = useState([]);
  const fetchResources = useCallback(()=>{
    // API Call to fetch the resources from DB,
    setResourceList(dummyResource);
  },[])

  useEffect(()=>{
    fetchResources();
  },[fetchResources])

  return (
    <div className='h-[90vh] bg-grey rounded-lg p-4'>
        <p className='text-[1.5rem] font-semibold'>Resources</p>
        <div className='overflow-auto h-[80vh]'>
          {
            resourceList.map((e,i)=>{
              return <ResourceListItem key={i} createdAt={e.createdAt} url={e.url} name={e.name} attachments={e.attachments}/>
            })
          }
        </div>
        <ResourceModal opened={opened} close={close} resourceList={resourceList} setResourceList={setResourceList}/>
        <Button bg={'inherit'} color='' onClick={open} className='w-[full]'>Add A Card...</Button>
    </div>
  )
}

export default ResourcesCard