// import PropComp from "./Hello"

const ComponentWithProps = props => {
    return (
        <>
        <h1>Title: {props.title}</h1>
        <p>Paragraph: {props.p}</p>
        <p>Number: {props.number}</p>
        {/* <p>Nothing: {props}</p> */}
        </>
    );
}


export default ComponentWithProps;