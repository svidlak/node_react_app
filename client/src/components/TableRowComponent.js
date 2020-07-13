import React from "react";
import {TableCell, TableRow} from "@material-ui/core";

const TableRowComponent = ({row}) => {
    return(
        <TableRow>
            <TableCell>{row.sender}</TableCell>
            <TableCell >{row.receiver}</TableCell>
            <TableCell >{row.subject}</TableCell>
            <TableCell >{row.message}</TableCell>
            <TableCell >{row.creation_date}</TableCell>
        </TableRow>
    )
}

export default TableRowComponent;
