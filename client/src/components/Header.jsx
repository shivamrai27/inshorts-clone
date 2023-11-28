import React from 'react'
//import this for header or navigation 
import { AppBar, Toolbar, styled } from '@mui/material'
//if you want to give css on any component of material ui so import styled and use it as a function (and pass the componets as parameter)
const StyledHeader = styled(AppBar)`
    background-color: brown;
`
const Header = () => {
    return (
        //Appbar and toolbar is used to creat header or navigation 
        <StyledHeader>
            <Toolbar>

            </Toolbar>
        </StyledHeader>
    )
}

export default Header