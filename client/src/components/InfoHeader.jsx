import { Box, Typography, styled } from '@mui/material';

const Container = styled(Box)`
background-color:#f44336;
color: #fff;
display: flex;
align-items: center;
`
const Text = styled(Typography)`
font-size: 14px;
margin-left: 50px;
font-weight: 300;
`
const Image = styled('img')({
    height: 34,
    '&:last-child': {
        margin: '0 50px 0 20px'
    }
})
const InfoHeader = () => {
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
    return (

        <Container>
            <Text>For the best experience use inshorts app on your smarphone</Text>
            <Box style={{ display: "flex", marginLeft: 'auto' }}>
                <Image src={appleStore} alt={appleStore} />
                <Image src={googleStore} alt={googleStore} />
            </Box>
        </Container>

    )
}
export default InfoHeader;