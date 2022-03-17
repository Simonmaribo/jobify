import { Box, Container, Image, Text } from '@mantine/core';
import DefaultLayout from '../view/DefaultLayout';

import Link from 'next/link';
import JobCard from '../view/components/JobCard';


const jobs = [
  {
    title: "Minecraft Builder",
    description: "Eu consequat ad sint esse occaecat mollit voluptate Lorem tempor. Eu consequat ad sint esse occaecat mollit voluptate Lorem tempor.",
    location: 'Remote',
    category: 'Minecraft'
  },
  {
    title: "Junior Supporter",
    description: "Eu consequat ad sint esse occaecat mollit voluptate Lorem tempor.",
    location: 'Remote',
    category: 'Supporter'
  }
]

export default function Home() {
  return (
    <DefaultLayout>
      <Box sx={{
        backgroundImage: `url(https://i.imgur.com/nYioYEQ.jpeg)`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 500,
      }}>
        <Container size='xl' sx={{ paddingTop: 50 }}>
          <Link href="/" passHref>
            <Box component="a">
              <Image alt="Logo" src="https://i.imgur.com/YXnIdqX.png" height={75} width='auto'/>
            </Box>
          </Link>
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
      <Box sx={{ backgroundColor: 'rgb(248, 249, 250)', paddingTop: 25, paddingBottom: 25 }}>
        <Container size='sm'>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center', alignContent: 'center' }}>
            <Text align='center' sx={{ fontWeight: 700, fontSize: 35 }}>Open Positions</Text>
            { jobs.map((value, index) => {
              return (
                <JobCard key={index} title={value.title} description={value.description} location={value.location}/>
              )
            })}
          </Box>
        </Container>
      </Box>
    </DefaultLayout>
  )
}
