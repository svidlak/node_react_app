import React from "react";
import TextField from "@material-ui/core/TextField";
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const TextInputComponent = ({label, value, index, multiline = false, error, change}) => {
    return(
        <TextField
            css={css(`width: 100%;`)}
            label={label}
            required={true}
            value={value}
            multiline={multiline}
            rows={multiline ? 4 : 1}
            error={!!error}
            helperText={error}
            onChange={ event => change(event, index)}
        />
    )
}

export default TextInputComponent;
