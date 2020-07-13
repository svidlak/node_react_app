import React from "react";
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";

const ListItemsComponent = ({color, icon ,name, click}) => {

    return(
        <Button
            css={css`color:${color};width: 100%;'}`}
            onClick={()=>click()}
        >
                <SvgIcon
                    css={css`padding: 10px;`}
                    component={icon}
                />
                {name}
        </Button>
    )
}

export default ListItemsComponent;
