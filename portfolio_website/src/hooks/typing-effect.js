import { useEffect, useState } from "react";

export function useTypingEffect(textToType){
    const [typedString, setTypedString] = useState('');
    useEffect(() => {
        // condition to exit
        if(textToType === typedString) return;

        const timeout = setTimeout(() => {
            setTypedString(textToType.substring(0,typedString.length+1));
        },50);

        return () => clearTimeout(timeout);
    },[textToType,typedString]);

    return typedString;
}