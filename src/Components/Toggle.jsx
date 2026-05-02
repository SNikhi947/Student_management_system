import { useState } from "react";
import Stu from "../Stu";

function Toggle(){
    const [value,setvalue]=useState(false)
    const handletoggle=()=> setvalue(!value)

    return(
        <>
        <button onClick={handletoggle}>{value?"Hidestudent":"Show Student"}</button>
        {value&&<Stu/>}
        </>
    );
}

export default Toggle;