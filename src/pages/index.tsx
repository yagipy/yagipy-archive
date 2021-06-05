import * as React from 'react'
import { ReactElement } from 'react'
import { Sidebar } from '../components/Sidebar'
import { About } from '../components/contents/About'
import { Skills } from '../components/contents/Skills'
import { Interests } from '../components/contents/Interests'
import { OpenSources } from '../components/contents/OpenSources'
import { titles } from '../docs/titles'

const Home = (): ReactElement => {
  return (
    <>
      <Sidebar />
      <div className="h-screen">
        <div className="block w-full h-full divide-y pl-72">
          <About />
          <Skills />
          <Interests />
          <OpenSources />
        </div>
      </div>
    </>
  )
}

export default Home
