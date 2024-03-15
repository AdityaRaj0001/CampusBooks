import { BookContext } from "../Context/BookContext";
import { useContext } from "react";


export const useBooksContext=()=>{

    const context=useContext(BookContext)
    if(!context){
        throw Error("must be inside a provider")
    }

    return context
}