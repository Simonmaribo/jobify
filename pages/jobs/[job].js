import { Box } from '@mantine/core';
import config from '../../frontend.config';

import Meta from '../../view/Layout/Meta';
import JobHeader from '../../view/components/JobHeader';
import JobInformationCard from '../../view/components/JobInformationCard';


const Job = (props) => {
    return (
        <Box>
            <Meta title={`Jobify: ${props.data.category} - ${props.data.title}`}/>
            <JobHeader/>
            <JobInformationCard data={props.data}/>
        </Box>
    )
}

Job.getInitialProps = async (ctx) => {
    var hostname = `${config.deployment}`;
    if(!ctx.req) 
        hostname = window.location.host;
    const res = await fetch(`${hostname}/api/jobs/${ctx.query.job}`);
    if(res.status == 200){
        const json = await res.json();
        return { data: json.data }
    }
    return { data: null }
}
export default Job;