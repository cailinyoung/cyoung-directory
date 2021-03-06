import React from "react";
import "./wrapper.css";

export default function Wrapper(props) {
    return <main className="wrapper">{props.children}</main>;
};