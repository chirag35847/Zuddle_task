import { createContext,useCallback,useContext, useEffect, useState } from "react";
import dummyToDo from '../data/toDoList'
import dummyDoing from '../data/doingList'
import dummyDone from '../data/done'

const DataContext = createContext();

const DataProvider = ({children})=>{
    const [toDoList,setToDoList] = useState(dummyToDo);
    const [doingList,setDoingList] = useState(dummyDoing);
    const [doneList,setDoneList] = useState(dummyDone);

    // useEffect(()=>{
    //     setToDoList(dummyToDo)
    //     setDoingList(dummyDoing)
    //     setDoneList(dummyDone)
    // })

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

    const putToList=useCallback((data,putTo)=>{
        if(putTo=='list-doing'){
            setDoingList([data,...doingList]);
        }
        else if(putTo=='list-done'){
            setDoneList([data,...doneList]);
        }
        else if(putTo=='list-todo'){
            setToDoList([data,...toDoList]);
        }
    },[doingList,toDoList,doneList]);

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

        // Values for to
        // list-doing
        // list-done
        // list-todo

        if(dropList!=null && dropList!='' && dropList!='root'){
            const from = data.from;
            if(dropList==('list-'+from)){
                return;
            }
            console.log(from,dropList);
            const d=data.item;
            
            if(from=='doing'){
                const lst=doingList.filter(x=>x.id!=d.id);
                setDoingList(lst);
                putToList(d,dropList);
            }
            else if(from=='done'){
                const lst=doneList.filter(x=>x.id!=d.id);
                setDoneList(lst);
                putToList(d,dropList);
            }
            else if(from=='todo'){
                const lst=toDoList.filter(x=>x.id!=d.id);
                setToDoList(lst);
                putToList(d,dropList);
            }
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