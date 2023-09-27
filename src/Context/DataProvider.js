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

    return (
        <DataContext.Provider value={{toDoList,doingList,doneList,setDoingList,setToDoList,setDoneList}}>
            {children}
        </DataContext.Provider>
    )
}

export const DataState=()=>{
    return useContext(DataContext);
}

export default DataProvider;