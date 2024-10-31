import { Routes, Route } from 'react-router-dom'
import { Home } from './Containers/home'
import Login from './Containers/User/Login'
import Packages from './Containers/packages'
import { SubscriptionUpdate } from './Containers/Subscription/components/SubscriptionUpdate'
/* import { SubscriptionStatus } from './Containers/Subscription/components/SubscriptionStatus' */
import UserRegister from './Containers/User/UserRegister'
import { DefaultTemplate } from './templates/Default'
import { AberturaOrdemServico } from './Containers/AberturaOrdemServico'
import { ListaOrdensServico } from './Containers/ListaOrdemServico'
import { TipoServico } from './Containers/TipoServico'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultTemplate />}>
        <Route path="/" element={<Home />} /> 
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/packages" element={<Packages />} />
        {/* <Route path="/status" element={<SubscriptionStatus />} /> */}
        <Route path="/subscription-update" element={<SubscriptionUpdate />} />
        <Route path="/tipo-de-servico" element={<TipoServico/>} />
        <Route path="/abertura-ordem-servico" element={<AberturaOrdemServico />} />
        <Route path="/lista-ordem-servico" element={<ListaOrdensServico/>} />
      </Route>
    </Routes>
  )
}