import React from "react";
import MyComponent from "../components/MyComponent";
import Toggler from "../components/Toggler";
import Posts from "../components/Posts";

const Patterns = () => (
 <>
  <Toggler>
   {({ isOpen, onToggle }) => (
    <>
     <p>in Func children Toggler -button-</p>
     <button type="button" onClick={onToggle}>
      {isOpen ? "Hide" : "Show"}
     </button>

     {isOpen && <MyComponent a="a" b="b" c="c" />}
    </>
   )}
  </Toggler>

  <hr />

  <Toggler>
   {({ isOpen, onToggle }) => (
    <>
     <p>in Func children Toggler -checkbox-</p>
     <label>
      <input type="checkbox" checked={isOpen} onChange={onToggle} />
      {isOpen ? "Hide" : "Show"}
     </label>

     {isOpen && <MyComponent a="a" b="b" c="c" />}
    </>
   )}
  </Toggler>
  <hr />

  <Posts />
 </>
);

export default Patterns;
