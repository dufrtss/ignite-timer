import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <Timer />
        <Scroll />
      </nav>
    </HeaderContainer>
  )
}
