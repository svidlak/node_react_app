import React, {useState} from "react";
import ManageEmailsController from "../controllers/ManageEmailsController";
import {Paper} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextInputComponent from "../components/TextInputComponent";

const ManageEmailsPage = () => {
    const [emailPageState, changeState] = useState({
        selectedTab: 0,
        emailAddress: ''
    })

    const updateEmail = (event) => {
        const prevState = {...emailPageState, emailAddress: event.target.value}
        changeState(prevState)
    }
    const tabs = [
        {name: 'Received'},
        {name: 'Sent'}
    ]
    return(
        <div>
            <TextInputComponent
                label={`Mail Address:`}
                value={emailPageState.emailAddress}
                change={updateEmail}
                multiline={false}
            />
            <Paper square>
                <Tabs aria-label="simple tabs example"
                      value={emailPageState.selectedTab}
                >
                    {
                        tabs.map( (value, idx) => {
                            return(
                                <Tab label={value.name}
                                     key={idx+value.name}
                                     onClick={()=>changeState({...emailPageState, selectedTab: idx})}
                                />
                            )
                        })
                    }
                </Tabs>
            </Paper>
            <ManageEmailsController
                filter={emailPageState.emailAddress}
                selectedTab={emailPageState.selectedTab}
            />

        </div>
    )
}

export default ManageEmailsPage
