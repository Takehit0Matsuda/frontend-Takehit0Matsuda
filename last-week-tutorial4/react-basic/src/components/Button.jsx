const Button = (props) => {

    return (
        <>
            <button onClick={() => props.onClick()}>
                {props.message}
            </button>
            <h1>
                {props.clicked}
            </h1>
        </>
    );
};

export default Button;