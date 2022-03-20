import { Box, Container, Image, Text } from '@mantine/core';

import Link from 'next/link';

export default function Header(){
    return (
      <Box sx={{
          backgroundColor: '#fff',
          paddingTop: 15,
          paddingBottom: 15,
          boxShadow: '0 0 3px 0 rgb(24 50 71 / 20%)',
      }}>
        <Container size='xs'>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link href="/" passHref>
              <Box component="a">
                <Image alt="Logo" src="https://svgur.com/i/fR6.svg" height={50} width='auto'/>
              </Box>
            </Link>
          </Box>
        </Container>
      </Box>
    )
}