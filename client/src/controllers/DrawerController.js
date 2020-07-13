/** @jsx jsx */
import {jsx, css} from "@emotion/core";
import React, {useEffect, useState} from "react";
import {Inbox, Send, Add} from "@material-ui/icons";
import ListItemsComponent from "../components/ListItemsComponent";
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";

const DrawerController = () => {
    const drawerItems = [
        {name: 'Compose Email', url: '/compose_email',icon: Add},
        {name: 'Manage Emails', url: '/manage_emails', icon: Inbox},
        {name: 'About', url: '/', icon: Send}
    ]

    const [selected, setSelected] = useState({
        selectedIndex: 2
    })

    useEffect(()=> {
        const index = drawerItems.findIndex( ele => ele.url === window.location.pathname)
        setSelected({selectedIndex: index})
    }, [])

    return(
        <Container
            css={css`background: white;padding: 0`}
        >
                {drawerItems.map((value, index) => (
                            <Link to={value.url}
                                  css={css('text-decoration: none')}
                                  key={value.name+index}
                            >
                                 <ListItemsComponent
                                    css={css(`width: 100%`)}
                                    color={selected.selectedIndex === index ? "#1976d2" : "initial"}
                                    icon={value.icon}
                                    name={value.name}
                                    click={()=>setSelected({ ...selected, selectedIndex: index })}
                                />
                            </Link>

                ))}

        </Container>
    )
}

export default DrawerController;
