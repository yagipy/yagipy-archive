import * as React from 'react'
import { SubComponent } from '../components/SubComponent'
import { ReactElement } from 'react'

const Home = (): ReactElement => {
  return (
    <>
      <div className="font-bold">Hello World!</div>
      <SubComponent />
    </>
  )
}

export default Home
