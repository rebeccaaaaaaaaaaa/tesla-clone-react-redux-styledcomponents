import React from 'react'
import styled from 'styled-components'

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
        </RightMenu>
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

`

const RightMenu = styled.div`
a{
  font-weight: 600;
  text-transform: uppercase;
  margin-right :10px;
  flex-wrap: nowrap;
}
`