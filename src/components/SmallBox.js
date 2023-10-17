import { MyContext } from '../MyContext.js';
import { useContext } from 'react';

function SmallBox() {
    const name = useContext(MyContext);

    return <>
    <p>I am {name}</p>
    </>
};

export default SmallBox;