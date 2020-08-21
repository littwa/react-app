import React from "react";
// import withFetch from './hoc/withFetch';
import withToggle from "./hoc/withToggle";

const Posts = props => {
 console.log(props);
 return <h1>Ето компонет Posts + withToggle</h1>;
};

// export default withFetch('https://jsonplaceholder.typicode.com/todos')(Posts);

export default withToggle(Posts);
