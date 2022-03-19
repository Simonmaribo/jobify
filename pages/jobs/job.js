import DefaultLayout from '../../view/DefaultLayout';
import Meta from '../../view/Layout/Meta';
import JobHeader from '../../view/components/JobHeader';
import JobInformationCard from '../../view/components/JobInformationCard';


const Job = () => {
    var props = {}
    props.data = {
        _id: '6234c182a029a897ef249adc',
        category: 'PlexHost',
        description: 'Eu consequat ad sint esse occaecat mollit voluptate Lorem tempor. Eu consequat ad sint esse occaecat mollit voluptate Lorem tempor.',
        location: 'Remote',
        title: 'Junior Supporter'
      }

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

export default Job;