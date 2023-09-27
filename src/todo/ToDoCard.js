// import React from 'react'

// const ToDoCard = () => {
//   return (
//     <div>ToDoCard</div>
//   )
// }

// export default ToDoCard

import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React, { useCallback, useEffect, useState } from 'react'
import dummyToDo from '../data/toDoList';
import ToDoAddModal from './ToDoAddModal';
import ToDoItem from './ToDoItem';
// import ResourceListItem from './ResourceListItem';

const ResourcesCard = () => {
  const [opened, { close, open }] = useDisclosure(false);
  const [toDoList,setToDoList] = useState([]);
  const fetchToDo = useCallback(()=>{
    // API Call to fetch the resources from DB,
    setToDoList(dummyToDo);
  },[])

  useEffect(()=>{
    fetchToDo();
  },[fetchToDo])

  return (
    <div className='h-[90vh] bg-grey rounded-lg p-4'>
        <p className='text-[1.5rem] font-semibold'>To Do</p>
        <div className='overflow-auto h-[80vh]'>
          {
            toDoList.map((e,i)=>{
              return <ToDoItem key={i} item={e}/>
            })
          }
        </div>
        <ToDoAddModal opened={opened} close={close} toDoList={toDoList} setToDoList={setToDoList}/>
        <Button bg={'inherit'} color='' onClick={open} className='w-[full]'>Add A Card...</Button>
    </div>
  )
}

export default ResourcesCard