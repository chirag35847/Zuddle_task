import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React, { useCallback, useEffect, useState } from 'react'
import dummyToDo from '../data/toDoList';
import ToDoAddModal from './ToDoAddModal';
import NonResourceItem from '../NonResourceItem';
// import ResourceListItem from './ResourceListItem';
import { DataState } from '../Context/DataProvider';

const ToDoCard = () => {
  const [opened, { close, open }] = useDisclosure(false);
  const {toDoList,setToDoList,fetchToDo,handleOnDrop} = DataState();

  useEffect(()=>{
    fetchToDo();
  },[fetchToDo])

  return (
    <div className='h-[90vh] bg-grey rounded-lg p-4'>
        <p className='text-[1.5rem] font-semibold'>To Do</p>
        <div id='list-todo' className='overflow-auto h-[80vh]' onDrop={handleOnDrop} onDragOver={e=>e.preventDefault()}>
          {
            toDoList.map((e,i)=>{
              return <NonResourceItem key={i} item={e} from={'todo'}/>
            })
          }
        </div>
        <ToDoAddModal opened={opened} close={close} toDoList={toDoList} setToDoList={setToDoList}/>
        <Button bg={'inherit'} color='' onClick={open} className='w-[full]'>Add A Card...</Button>
    </div>
  )
}

export default ToDoCard