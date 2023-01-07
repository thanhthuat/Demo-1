import React from 'react'
import { LayoutContainer } from '../../components/Container'
import { Header } from '../../components/Header'



function Home() {
  return (
    <>
			<Header />
			<div className="wapper mt-3">
				<LayoutContainer />
			</div>
		</>
  )
}

export default Home