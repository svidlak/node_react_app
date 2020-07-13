import React from "react";
import Box from "@material-ui/core/Box";
import {css} from "@emotion/core";

const AboutPage = () => {
    return(
        <Box
            boxShadow={2}
            css={css(`width: 500px;margin: 0 auto;background: white; padding: 35px;`)}>
            <p>Made by: Max Svidlo</p>
            <p>Email: Svid320@gmail.com</p>

        </Box>
    )
}

export default AboutPage
