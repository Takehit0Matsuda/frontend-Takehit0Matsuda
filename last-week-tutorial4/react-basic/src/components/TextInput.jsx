import { useState } from "react"

const TextInput = () => {
    const [name, setName] = useState("")

    const handleName = (event) => {
        setName(event.target.value)
    }

    return(
        <>
            <p>Type your name.</p>
            <input
                onChange={(event) => handleName(event)}
                type={"text"}
                value={name}
            />
            <p>Hello! {name}</p>
        </>
    );
};

export default TextInput;

