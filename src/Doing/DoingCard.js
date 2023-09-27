import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React, { useCallback, useEffect, useState } from 'react'
import dummyDoing from '../data/doingList';
import DoingModal from './DoingModal';
import NonResourceItem from '../NonResourceItem';
import { DataState } from '../Context/DataProvider';

const DoingCard = () => {
  const [opened, { close, open }] = useDisclosure(false);
  const {doingList,setDoingList,fetchDoing} = DataState();

  useEffect(()=>{
    fetchDoing();
  },[fetchDoing])

  return (
    <div className='h-[90vh] bg-grey rounded-lg p-4'>
        <p className='text-[1.5rem] font-semibold'>Doing</p>
        <div className='overflow-auto h-[80vh]'>
          {
            doingList.map((e,i)=>{
              return <NonResourceItem key={i} item={e} from={"doing"}/>
            })
          }
        </div>
        <DoingModal opened={opened} close={close} doingList={doingList} setDoingList={setDoingList}/>
        <Button bg={'inherit'} color='' onClick={open} className='w-[full]'>Add A Card...</Button>
    </div>
  )
}

export default DoingCard