import React from 'react'
import styled from 'styled-components'
import Section from "../components/Section"

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImage="/images/model-3.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing Inventory"
      />

      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImage="/images/model-y.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing Inventory"
      />

      <Section
        title="Modal S"
        description="Order Online for Touchless Delivery"
        backgroundImage="/images/model-s.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing Inventory"
      />

      <Section
        title="Modal X"
        description="Order Online for Touchless Delivery"
        backgroundImage="/images/model-x.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing Inventory"
      />

      <Section
        title="Solar Panel"
        description="Order Online for Touchless Delivery"
        backgroundImage="/images/solar-panel.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing Inventory"
      />

      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage="/images/solar-roof.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing Inventory"
      />

      <Section
        title="Accessories"
        description=""
        backgroundImage="/images/accessories.jpg"
        leftButtonText="Shop Now"
        rightButtonText=""
      />
    </Container>
  );
}

export default Home

const Container = styled.div`
    height: 100vh;
    
`