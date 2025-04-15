import React from "react";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({ children }) {
    return (
        <div className="layoutContainer">
            <Header />
        <div className="layoutBody">
            <Sidebar/>
            <main className="contentArea">
                {children}
            </main>
        </div>
        </div>
    )

}