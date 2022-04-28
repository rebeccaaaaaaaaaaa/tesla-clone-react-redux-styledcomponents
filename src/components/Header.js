import React from 'react'
import styled from 'styled-components'
import {MdMenu} from 'react-icons/md'
import {MdOutlineClose} from "react-icons/md"
function Header() {
  return (
    <Container>
        <a>
          <img
            src="/images/logo.svg"
          />
        </a>
        <Menu>
           <a href=""> Modal S </a>
           <a href=""> Modal 3 </a>
           <a href=""> Modal x </a>
           <a href=""> Modal Y </a>
        </Menu>
        <RightMenu>
          <a href=""> Shop </a>
          <a href=""> Tesla Account </a>
          <CustomeMenu />
        </RightMenu>
        <BurgerNav>
          <CustomClose />
          <li><a title="Model S" href="/models" >Model S</a></li>
          <li><a title="Model 3" href="/model3" >Model 3</a></li>
          <li><a title="Model X" href="/modelx" >Model X</a></li>
          <li><a title="Model Y" href="/modely" >Model Y</a></li>
          <li><a title="Solar Roof" href="/solarroof" >Solar Roof</a></li>
          <li><a title="Solar Panels" href="/solarpanels" >Solar Panels</a></li>
          <li><a title="Existing Inventory" href="/inventory/new/m3" >Existing Inventory</a></li>
          <li><a title="Used Inventory" href="/inventory/used/m3" >Used Inventory</a></li>
          <li><a title="Trade-In" href="/tradein" >Trade-In</a></li>
          <li><a title="Test Drive" href="/drive" >Test Drive</a></li>
          <li><a title="Insurance" href="/insurance" >Insurance</a></li>
          <li><a title="Powerwall" href="/powerwall" >Powerwall</a></li>
          <li><a title="Commercial Energy" href="/commercial" >Commercial Energy</a></li>
          <li><a title="Utilities" href="/utilities" >Utilities</a></li>
          <li><a title="Charging" href="/charging" >Charging</a></li>
          <li><a title="Find Us" href="/findus" >Find Us</a></li>
          <li><a title="Support" href="/support" >Support</a></li>
          <li><a title="Investor Relations" href="https://ir.tesla.com" >Investor Relations</a></li>
          <li><a title="Shop" href="https://shop.tesla.com" >Shop</a></li>
          <li><a title="Account" href="/teslaaccount" >Account</a></li>
       
        </BurgerNav>
        
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;

 
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;

  }

`

const RightMenu = styled.div`

  display: flex;
  align-items: center;

a{
  font-weight: 600;
  text-transform: uppercase;
  margin-right :10px;
  flex-wrap: nowrap;
}
`

const CustomeMenu = styled(MdMenu)`
  cursor: pointer;

`

const BurgerNav = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;

  li{
    padding: 15px 0;
    border-bottom: 1px solid #e5e5e5;

    a{
      font-weight: 600;
    }
  }
`

const CustomClose = styled(MdOutlineClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 25px;
`