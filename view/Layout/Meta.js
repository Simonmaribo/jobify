import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="theme-color" content="#0050ff"/>

      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
    
      <meta name="Language" content="da" />
      <meta httpEquiv="Content-Language" content="da" />

      <meta charSet='utf-8' />
      <link rel='icon' href='https://i.imgur.com/UyR4LIB.png' />
      <title>{title}</title>

    </Head>
  )
}

Meta.defaultProps = {
  title: 'Jobify - Career Page',
  keywords: 'jobify',
  description: 'Self-hosted Application Platform for companies. ',
}

export default Meta