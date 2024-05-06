import React from 'react';
import {useState} from "react";
export const UseCount = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);
    const increment = () => {
        setCount( count + 1);
    };

    const decrement = () => {
        setCount( count - 1);
    };

    return { count, decrement, increment};
};

export default UseCount;