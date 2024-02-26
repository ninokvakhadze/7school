import styled from "styled-components";

function Login() {
  return (
    <>
      <LoginCard>
        <LoginTitle>შესვლა</LoginTitle>
        <Input type="text" />
        <Input type="password" />
        <LoginButton>შესვლა</LoginButton>
      </LoginCard>
    </>
  );
}

export default Login;

const LoginCard = styled.div`
  margin: 8% 4.5%;
  /* height: 500px; */
  border-radius: 4%;
  border: solid #8b0909 3px;
  padding: 6%;

  @media only screen and (min-width: 768px) {
    margin: 10% 16%;
    /* height: 400px; */
    border-radius: 6%;
    padding: 3%;
    @media only screen and (min-width: 1100px) {
      margin: 6% 25%;
      /* height: 500px; */
    }
    @media only screen and (min-width: 1400px) {
      /* height: 700px; */
    }
  }
`;

const LoginTitle = styled.h2`
  font-size: 250%;
  color: #8b0909;
  font-family: bpg_ghalo;
  margin-bottom: 20px;

`;

const Input = styled.input`
  margin-top: 50px;
  height: 30px;
  width: 100%;
  font-size: 100%;
  outline: none;
  border: none;
  border-bottom: solid 2px #8b0909;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: #8b0909;
  margin-top: 60px;
  border: none;
  color: #fff;
  font-size: 150%;
  font-family: bpg_ghalo;
  border-radius: 60px;
`;
