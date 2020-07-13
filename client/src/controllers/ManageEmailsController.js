import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {GET_MESSAGES} from "../store/actions";
import {TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody} from "@material-ui/core";
import TableRowComponent from "../components/TableRowComponent";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const ManageEmailsController = ({filter, selectedTab}) => {
    const messages = useSelector(state => state.messages)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch({type: GET_MESSAGES, data: true})
    }, [])

    return (
        <div>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Sender</TableCell>
                            <TableCell >Receiver</TableCell>
                            <TableCell >Subject</TableCell>
                            <TableCell >Message</TableCell>
                            <TableCell >Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            messages.messagesState
                                .filter( ele => {
                                    if(filter.length > 1){
                                        if(selectedTab) return ele.sender.includes(filter)
                                        return ele.receiver.includes(filter)
                                    }
                                    return ele;
                                })
                                .map( (row, idx) => {
                                return(
                                    <TableRowComponent key={idx+row.sender} row={row} />
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ManageEmailsController;
