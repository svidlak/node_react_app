import React from 'react';
import AppBarComponent from "../components/AppBarComponent";
import DrawerController from "../controllers/DrawerController";
import Grid from "@material-ui/core/Grid";
/** @jsx jsx */
import {jsx, css} from "@emotion/core";
import {Hidden} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ComposeEmailPage from "./ComposeEmailPage";
import ManageEmailsPage from "./ManageEmailsPage";
import AboutPage from "./AboutPage";

const MainPage = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <AppBarComponent />
                </Grid>
            </Grid>

            <Router>
                <Grid container
                      spacing={0}
                      css={css(`margin-top: 65px`)}>
                    <Hidden smDown>
                        <Grid item sm={2} css={css(`background: white`)}>
                            <DrawerController />
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} sm={10}>
                        <Switch>
                            <Route path="/compose_email">
                                <ComposeEmailPage />
                            </Route>
                            <Route path="/manage_emails">
                                <ManageEmailsPage />
                            </Route>
                            <Route path="/">
                                <AboutPage />
                            </Route>
                        </Switch>
                    </Grid>
                </Grid>
            </Router>
        </div>
    );
}

export default MainPage;
