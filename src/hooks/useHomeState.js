import {useState} from "react"
export default initialVal =>{
    const [value,setValue] =useState(initialVal);
    const handleChange = e =>{
        console.log(e.target.value);
        setValue(e.target.value);
        
    }
    const reset =() =>{
        setValue("");
    };
    return [value,handleChange,reset];
};