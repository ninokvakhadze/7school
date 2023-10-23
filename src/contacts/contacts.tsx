import styled from "styled-components";

function Contacts() {
  return (
    <Contact>
      <Name>კონტაქტი</Name>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2948.769467032344!2d43.007166790734466!3d42.34743815594772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sge!4v1697898471160!5m2!1sen!2sge"
        width="600"
        height="450"
      ></Iframe>
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
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const Iframe = styled.iframe`
  margin-top: 20px;
  border: none;
`;
