import React from "react";
import { useState } from "react";

import Add from "./Add";
import Transfer from "./Transfer";
import Remove from "./remove";
import Search from "./Search";



const Main = () =>{
    const [page, setpage] = useState("main") ;
    console.log(page)
    switch(page){
        case "main":
            return (
            <div id='main-menu'>
                <button className='main-button' onClick={()=>{setpage("search")}}>search for an item</button>
                <button className='main-button' onClick={()=>{setpage("add")}}>add to store</button>
                <button className='main-button' onClick={()=>{setpage("transfer")}}>transfer to shop</button>
                <button className='main-button' onClick={()=>{setpage("remove")}}>remove from store</button>
            </div>
            )
        case "add":
            return (
                <div className="form">
                <form action="#">
                    <Add/>
                    <button className="return-button" onClick={()=>{setpage("main")}}>Return</button>
                </form>
                </div>
        )
        case "transfer":
            return (
                <div className="form">
                <form action="#">
                    <Transfer/>
                    <button className="return-button" onClick={()=>{setpage("main")}}>Return</button>
                </form>
            </div>)
        case "remove":
            return (
            <div className="form">
                <form action="#">
                <Remove/>
                <button className="return-button" onClick={()=>{setpage("main")}}>Return</button>
                </form>
            </div>
            )
        case "search":
            return (
            <div className="form">
                <Search/>
                <button className="return-button" onClick={()=>{setpage("main")}}>Return</button>
            </div>
            )
        default:
            null
    }
}

export default Main