import { useContext } from "react";
import { MyContext } from "../MyContext";
import Grandson from "./Grandson";

function Daughter() {

    const age = useContext(MyContext);

    return <>
    {age}
    <Grandson />
    </>
};

export default Daughter;