import config from '../../frontend.config';


import DefaultLayout from '../../view/DefaultLayout';
import Meta from '../../view/Layout/Meta';
import JobHeader from '../../view/components/JobHeader';
import JobInformationCard from '../../view/components/JobInformationCard';


const Job = (props) => {
    return (
        <DefaultLayout>
            <Meta title={`Jobify: ${props.data.category} - ${props.data.title}`}/>
            <JobHeader/>
            <div style={{ display: 'flex', justifyContent: 'center', minHeight: 1000, backgroundColor: 'rgb(248, 249, 250)' }}>
                <div style={{ paddingTop: 25 }}>
                    <JobInformationCard data={props.data}/>
                </div>
            </div>
        </DefaultLayout>
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