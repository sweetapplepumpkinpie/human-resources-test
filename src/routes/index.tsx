import { Routes, Route } from 'react-router-dom'

import { Base } from '../components/layouts/base'
import { Footer } from '../components/layouts/footer'
import { Header } from '../components/layouts/header'
import { UserContainer } from '../modules/users'

const RoutesComponent = () => {
  return (
    <>
      <Base>
        <Header />
        <Routes>
          <Route path="/users" element={<UserContainer />} />
        </Routes>
        <Footer />
      </Base>
    </>
  )
}

export { RoutesComponent }
