import { useContext,createContext, useState } from "react";


let HostContext=createContext("")

let HostProvider=({children})=>
{
    let [index,setIndex]=useState(null);

    return <HostContext.Provider value={{index,setIndex}}>{children}</HostContext.Provider>
}


export {HostContext,HostProvider}