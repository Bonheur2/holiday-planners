import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext({});

const AppProvider = ({children}) => {
    const[myusers,setMyusers] = useState([])
    const [myTours, setMyTours] = useState([])

        useEffect(()=>{
          const fetchuser = async()=>{
           try {
             const result =  await axios.get('https://holiday-planner-4lnj.onrender.com/api/v1/tour')
             console.log(result.data)
              setMyTours(result.data)
           } catch (error) {
            console.log(error);
           }
          } 
          fetchuser()
        }
        ,[])

    useEffect(()=>{
        const fetchuser = async ()=>{
         const res =  await axios.get('https://holiday-planner-4lnj.onrender.com/api/v1/auth/users');
         console.log(res.data)
         setMyusers(res.data)
        }
        fetchuser()
      }
      ,[]);


  return (
    <AuthContext.Provider value={{myusers, myTours}}>
        {children}
    </AuthContext.Provider>
  )
};


export default AppProvider;
