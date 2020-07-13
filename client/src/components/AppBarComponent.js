import {AppBar, IconButton, SvgIcon, Toolbar, Typography} from "@material-ui/core";
import {GitHub} from "@material-ui/icons";
import React from "react";

const AppBarComponent = () => {
    return(
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">
                    Herolo Test
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default AppBarComponent;
