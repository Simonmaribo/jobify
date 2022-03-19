import { Box, Container, Image, Text } from '@mantine/core';

import Link from 'next/link';

export default function Header(){
    return (
        <Box sx={{
            /*backgroundImage: `url(https://i.imgur.com/ENgAtOL.png)`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',*/
            backgroundColor: '#17191b',
            height: 500,
          }}>
            <Container size='xl' sx={{ paddingTop: 50 }}>
              <Box sx={{ display: 'flex' }}>
                <Link href="/" passHref>
                  <Box component="a">
                    <Image alt="Logo" src="https://i.imgur.com/YXnIdqX.png" height={75} width='auto'/>
                  </Box>
                </Link>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                <Text align="center" sx={{
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 45
                }}>Working at Jobify</Text>
                <Text align="center" sx={{
                  color: '#fff',
                  fontSize: 20
                }}>
                  Employees at Jobify believe in the future
                </Text>
              </Box>
            </Container>
          </Box>
    )
}