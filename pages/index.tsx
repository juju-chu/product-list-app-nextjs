import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  div {
      color: red;
  }
`;

const Home = () => {
    return <Container>
        <div>home</div>
    </Container>;
};

export default Home;