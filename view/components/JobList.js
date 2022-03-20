import { Box, Container, Text } from '@mantine/core';
import { useState, useEffect } from 'react';

import Meta from '../Layout/Meta'

import JobCard from '../../view/components/JobCard';
import SearchBar from '../../view/components/SearchBar';

import { FaBriefcase } from 'react-icons/fa'

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
      <>
        <Meta title={`Jobify - ${jobs.length > 0 ? jobs.length : 'No'} Open Positions`}/>
        <Box sx={{
          paddingTop: 25,
          paddingBottom: 25,
          display: 'flex',
          justifyContent: 'center',
          background: 'rgb(248, 249, 250) url(https://i.imgur.com/rsYF2tp.png) no-repeat center',
          backgroundAttachment: 'fixed',
          height: 1000,
        }}>
          <Container size='sm' sx={{ marginTop: 25 }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              backgroundColor: '#fff', 
              border: '1px solid rgb(233, 236, 239)', 
              borderRadius: 5, 
              padding: '1rem', 
              gap: 10, 
              marginBottom: 25
            }}>
              <Text align='center' sx={{ color: '#0D101D', fontWeight: 700, fontSize: 35 }}>Open Positions</Text>
              <SearchBar data={allJobs} onSearch={(search) => setJobs(generateJobList(allJobs, search))}/>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center', alignContent: 'center' }}>
              { jobs.map((value, index) => {
                return (
                  <JobCard key={index} title={value.title} description={value.description} location={value.location} category={value.category} id={value._id} />
                )
              })}
              { jobs.length <= 0 && 
                  <Box sx={{ 
                    backgroundColor: '#fff', 
                    padding: '1.5rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    border: '1px solid rgb(233, 236, 239)',
                    borderRadius: 5
                  }}>
                    <FaBriefcase style={{color: '#0050ff', width: 35, height: 35, marginBottom: 15}}/>
                    <Text align="center" sx={{ color: '#0D101D', fontSize: 18, fontWeight: 600 }}>No positions found</Text>
                    <Text align="center" sx={{ color: '#0D101D', opacity: 0.85, fontSize: 15 }}>We found no positions matching your conditions.</Text>
                  </Box>
              }
            </Box>
          </Container>
        </Box>  
      </>  
    )
}