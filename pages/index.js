import DefaultLayout from '../view/DefaultLayout';
import Header from '../view/components/DefaultHeader';
import JobList from '../view/components/JobList';

export default function Home() {
  return (
    <DefaultLayout>
      <Header/>
      <JobList/>
    </DefaultLayout>
  )
}
