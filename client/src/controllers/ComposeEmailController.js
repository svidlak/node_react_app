import React, {useState} from "react";
import {Button, Grid} from "@material-ui/core";
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import TextInputComponent from "../components/TextInputComponent";
import { useSelector, useDispatch } from 'react-redux'
import {CREATE_MESSAGE, RESET_FORM, UPDATE_FORM} from "../store/actions";
import Box from "@material-ui/core/Box";

const ComposeEmailController = () => {
    const formState = useSelector(state => state.form.formState)
    const dispatch = useDispatch()

    const updateForm = (event, index) => {
        const newFormState = [...formState]
        newFormState[index].error = null
        newFormState[index].value = event.target.value
        dispatch({type: UPDATE_FORM, formState: newFormState})
    }

    const validateForm = () => {
        let newFormState = [...formState].map( value => {
            if(value.type === 'email'){
                const regex_test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if( !regex_test.test(value.value) ) value.error = 'Please provide a valid email address'
            } else {
                if( value.value.length < 1 || value.value.length > 255 ) value.error = 'Field must be between 1 and 255 characters long'
            }
            return value
        })

        dispatch({type: UPDATE_FORM, formState: newFormState})
        if(formState.every( ele => !ele.error)) submitForm()
    }

    const submitForm = () => {
        dispatch({type: CREATE_MESSAGE, formState})
        dispatch({type: RESET_FORM, formState})
    }

    return (
        <Box
            boxShadow={2}
            css={css`width: 500px;margin: 0 auto;background: white; padding: 35px;`}>
           <form>
               {
                   formState.map( (value, idx) =>
                       <TextInputComponent
                           key={value.name}
                           label={`${value.name}:`}
                           value={value.value}
                           error={value.error}
                           change={updateForm}
                           multiline={value.type === 'textarea'}
                           type={value.type}
                           index={idx}
                       />
                       )
               }
               <Button
                   css={css('margin-top: 15px;')}
                   variant="contained"
                   color="primary"
                   onClick={()=> validateForm()}
               >Submit</Button>
           </form>
        </Box>
    );
}

export default ComposeEmailController;
