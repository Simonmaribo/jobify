import { Anchor, Box, Divider, Text, Container } from "@mantine/core";

export default function Footer(){
    return (
        <Box sx={{ backgroundColor: 'rgb(248, 249, 250)' }}>
            <Divider size={"xs"} ml={ 16 } mr={ 16 }/>
            <Container size='xl' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
                <Text>
                    © { new Date().getFullYear() } <Anchor sx={{ textDecoration: 'none !important', color: "inherit" }} href="https://github.com/simonmaribo/jobify" target="_blank">Jobify</Anchor>
                </Text>
                <Text>
                    Created by {' '}
                    <Anchor href="https://minato.com" target="_blank" sx={{ textDecoration: 'none !important', color: '#000', fontWeight: 700 }}>
                        minato<Text component="span" sx={{ color: '#0050ff' }}>.</Text>
                    </Anchor>
                </Text>               
            </Container>
        </Box>
    )
}