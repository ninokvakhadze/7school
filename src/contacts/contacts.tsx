import styled from "styled-components";

function Contacts() {
  return (
    <Contact>
      <Name>კონტაქტი</Name>
      <MapEmail>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5897.538948695133!2d43.007167!3d42.347438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c9bf4cd10247f%3A0x8640a44991d4275!2z4YOi4YOn4YOY4YOR4YOj4YOa4YOY4YOhIE4tNyDhg6Hhg5Dhg6_hg5Dhg6Dhg50g4YOh4YOZ4YOd4YOa4YOQ!5e0!3m2!1sen!2sge!4v1698411700755!5m2!1sen!2sge"></Iframe>
        <EmailDiv>
          <Adress>მისამართი: ქ.ტყიბული ბრეგვაძის ქ N</Adress>
          <PhoneNumber>ტელეფონი:</PhoneNumber>
          <Adress>მეილი:</Adress>
          <Adress>Facebook:</Adress>
        </EmailDiv>
      </MapEmail>
    </Contact>
  );
}

export default Contacts;

const Name = styled.h2`
  text-align: left;
  font-size: 30px;
  color: #8b0909;
  font-family: bpg_ghalo;
`;
const Contact = styled.div`
  padding: 4.5%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const MapEmail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media only screen and (min-width: 1100px) {
    flex-direction: row;
  }
`;
const Iframe = styled.iframe`
  margin-top: 20px;
  border: none;
  height: 400px;
  @media only screen and (min-width: 1100px) {
    height: 500px;
    width: 600px;
  }
`;
const EmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  @media only screen and (min-width: 1100px) {
    width: 50%;
    margin-top: 20px;
  }
`;
const EmailInput = styled.input`
  padding: 10px;
  outline-color: #8b0909;
  border: 2px solid #8b0909;
  border-radius: 3px;
  &::placeholder {
    color: #8b0909;
  }
  @media only screen and (min-width: 1100px) {
    width: 100%;
  }
`;
const TextInput = styled.textarea`
  padding: 10px;
  outline-color: #8b0909;
  border: 2px solid #8b0909;
  border-radius: 3px;
  width: 100%;
  height: 200px;
  resize: none;
  &::placeholder {
    color: #8b0909;
  }
  @media only screen and (min-width: 1100px) {
  }
`;
const Adress = styled.p`
  font-family: bpg_ghalo;
  font-weight: 900;
  color: gray;
`;
const PhoneNumber = styled.p`
  font-weight: 900;
  font-family: bpg_ghalo;
  color: gray;
`;
