import React from 'react'
//import this for header or navigation 
import { AppBar, Toolbar, styled } from '@mui/material'
import { Menu, Widgets } from '@mui/icons-material';
//if you want to give css on any component of material ui so import styled and use it as a function (and pass the componets as parameter)
const StyledHeader = styled(AppBar)`
    background-color: #fff;
    height: 70px;
`
const MenuIcon = styled(Menu)`
    color: #000
`
const Image = styled('img')({
    height: 55,
    margin: 'auto',
    paddingRight: 70,
})
const Header = () => {
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return (
        //Appbar and toolbar is used to creat header or navigation 
        <StyledHeader position='static'>
            <Toolbar>
                <MenuIcon />
                <Image src={url} alt='Inshorts icons' />
            </Toolbar>
        </StyledHeader>
    )
}

export default Header