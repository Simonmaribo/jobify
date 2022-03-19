import { Box, Container, Text } from '@mantine/core';
import { useState, useEffect } from 'react';

import JobCard from '../../view/components/JobCard';
import SearchBar from '../../view/components/SearchBar';


const allJobs = [
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


const generateJobList = (data, search) => {
    const searchedJobs = []
    console.log(search);
    for(var i = 0; i < data.length; i++){
        if(search.location != null && data[i].location != search.location) continue;
        if(search.category != null && data[i].category != search.category) continue;
        if(search.title != '' && !(data[i].title.includes(search.title))) continue;
        searchedJobs.push(data[i])
    }

    return searchedJobs;
}

export default function JobList(){
    const [allJobs, setAllJobs] = useState([]);
    const [jobs, setJobs] = useState(allJobs);
    
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch("/api/jobs")
        if(res.status == 200){
          res.json().then((data) => { setAllJobs(data.data); setJobs(data.data) })
        }
      }
      fetchData();
    }, [])

    return (
        <Box sx={{ backgroundColor: 'rgb(248, 249, 250)', paddingTop: 25, paddingBottom: 25 }}>
        <Container size='sm'>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center', alignContent: 'center' }}>
            <Text align='center' sx={{ fontWeight: 700, fontSize: 35 }}>Open Positions</Text>
            <SearchBar data={allJobs} onSearch={(search) => setJobs(generateJobList(allJobs, search))}/>
            { jobs.map((value, index) => {
              return (
                <JobCard key={index} title={value.title} description={value.description} location={value.location} category={value.category} id={value._id} />
              )
            })}
            { jobs.length <= 0 && 
              <Text align="center" sx={(theme) => ({
                color: theme.colors.primary[5],
                fontSize: 18
              })}>No open positions found!</Text>
            }
          </Box>
        </Container>
      </Box>        
    )
}