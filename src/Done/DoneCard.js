import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React, { useCallback, useEffect, useState } from 'react'
import dummyDone from '../data/done';
import DoneModal from './DoneModal';
import NonResourceItem from '../NonResourceItem';
import { DataState } from '../Context/DataProvider';

const DoneCard = () => {
  const [opened, { close, open }] = useDisclosure(false);
  const {doneList,setDoneList,fetchDone,handleOnDrop} = DataState();

  useEffect(()=>{
    fetchDone();
  },[fetchDone])

  // console.log(doneList);

  return (
    <div className='h-[90vh] bg-grey rounded-lg p-4'>
        <p className='text-[1.5rem] font-semibold'>Done</p>
        <div id='list-done' className='overflow-auto h-[80vh]' onDrop={handleOnDrop} onDragOver={e=>e.preventDefault()}>
          {
            doneList.map((e,i)=>{
              return <NonResourceItem key={i} item={e} from='done'/>
            })
          }
        </div>
        <DoneModal opened={opened} close={close} doneList={doneList} setDoneList={setDoneList}/>
        <Button bg={'inherit'} color='' onClick={open} className='w-[full]'>Add A Card...</Button>
    </div>
  )
}

export default DoneCard