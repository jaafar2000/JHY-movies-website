import { useState } from "react";
import { createContext } from "react";

export const myContext = createContext();

const MyContextProvider = (props) => {

  const [id, setId] = useState()
  const [tvId, setTvId] = useState()

  const value = {id, setId , tvId, setTvId }
  return(
    
    <myContext.Provider value={value}>
      {props.children}
    </myContext.Provider>
    )
};

export default MyContextProvider;
