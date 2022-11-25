import Head from 'next/head'

export default function Contact({ page }) {
  page ? (page = page + ' | ') : (page = '')
  return (
    <Head>
      <title>{page} aadila chand - multidisciplinary artist</title>
      <meta
        name="description"
        content={page + ' aadila chand | multidisciplinary artist'}
      />
      <link rel="icon" href="/images/favicon.ico" />
    </Head>
  )
}
