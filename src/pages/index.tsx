import Page from '../components/Page'
import Head from 'next/head'
import { Fragment } from 'react'

export default function Home() {

  return (
    <Fragment>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="A website for Rebecca's works" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="ml-auto mr-auto !text-[#02b40b]">
            <div className='mt-8 min-w-[80%] max-w-[90%] h-[90vh] p-3 md:p-7 ml-auto mr-auto relative'>
                <Page />
          </div>
      </main>
    </Fragment>
  )
}