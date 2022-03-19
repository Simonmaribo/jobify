import DefaultLayout from '../view/DefaultLayout';
import Header from '../view/components/DefaultHeader';
import JobList from '../view/components/JobList';

export default function Home() {
  return (
    <DefaultLayout>
      <div style={{ minHeight: 1000, backgroundColor: 'rgb(248, 249, 250)' }}>
        <Header/>
        <JobList/>
      </div>
    </DefaultLayout>
  )
}
