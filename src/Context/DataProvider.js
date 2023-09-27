import { createContext,useContext, useEffect, useState } from "react";
import dummyToDo from '../data/toDoList'
import dummyDoing from '../data/doingList'
import dummyDone from '../data/done'

const DataContext = createContext();

const DataProvider = ({children})=>{
    const [toDoList,setToDoList] = useState([]);
    const [doingList,setDoingList] = useState([]);
    const [doneList,setDoneList] = useState([]);

    useEffect(()=>{
        setToDoList(dummyToDo)
        setDoingList(dummyDoing)
        setDoneList(dummyDone)
    },[])

    const fetchDoing=()=>{
        setDoingList(dummyDoing)
    }

    const fetchToDo=()=>{
        setToDoList(dummyToDo)
    }

    const fetchDone=()=>{
        setDoneList(dummyDone)
    }

    const handleOnDrag=(e,data)=>{
        e.dataTransfer.setData('widgetData',data);
    }

    const handleOnDrop=(e)=>{
        const data = JSON.parse(e.dataTransfer.getData('widgetData'));

        function getDropList(element, level = 1) { 
            while (level-- > 0) {
              element = element.parentNode;
              if (!element) return null;
              if(element.id!=''){
                return element.id;
              }
            }
            return element.id;
        }

        const dropList = getDropList(e.target,6);
        // Values for from 
        // doing
        // done
        // todo
        if(dropList!=null || dropList!=''){
            const from = data.from;
        }
    }

    return (
        <DataContext.Provider value={{toDoList,doingList,doneList,setDoingList,setToDoList,setDoneList,fetchDoing,fetchToDo,fetchDone,handleOnDrag,handleOnDrop}}>
            {children}
        </DataContext.Provider>
    )
}

export const DataState=()=>{
    return useContext(DataContext);
}

export default DataProvider;