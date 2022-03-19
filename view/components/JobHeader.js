import { Box, Container, Image, Text } from "@mantine/core";

import Link from 'next/link';

export default function JobHeader(){
    return (
        <Box sx={{
            backgroundColor: '#17191b',
            height: 300,
        }}>
            <Container size='xl' sx={{ paddingTop: 50 }}>
                <Box sx={{ display: 'flex' }}>
                    <Link href="/" passHref>
                        <Box component="a">
                            <Image alt="Logo" src="https://i.imgur.com/YXnIdqX.png" height={75} width='auto'/>
                        </Box>
                    </Link>
                </Box>
            </Container>
        </Box>
    )
}