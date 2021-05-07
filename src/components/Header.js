import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

export default function Header() {
    const displayDesktop = () => {
        return <Toolbar>Dev_Cartman</Toolbar>;
    };

    return (
        <Header>
            <AppBar>{displayDesktop()}</AppBar>
        </Header>
    );
}