import styled from "styled-components";
import teacher from "../assets/teacher.jpg";

function Employees() {
  return (
    <>
      <Teachers>
        <TeacherDiv>
          <TeacherImg src={teacher} />
          <TeacherName>ნონა ჩუბინიძე</TeacherName>
        </TeacherDiv>
        <TeacherDiv>
          <TeacherImg src={teacher} />
          <TeacherName>ნონა ჩუბინიძე</TeacherName>
        </TeacherDiv>
        <TeacherDiv>
          <TeacherImg src={teacher} />
          <TeacherName>ნონა ჩუბინიძე</TeacherName>
        </TeacherDiv>
        <TeacherDiv>
          <TeacherImg src={teacher} />
          <TeacherName>ნონა ჩუბინიძე</TeacherName>
        </TeacherDiv>
      </Teachers>
    </>
  );
}

export default Employees;

const Teachers = styled.div`
padding: 4.5%;
    display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    gap: 10%;
    align-items: left;
    justify-content: flex-start;
  }
  @media only screen and (min-width: 1020px) {
    gap: 5%;
    align-items: left;
  }
`;
const TeacherDiv = styled.div`
  width: 100%;
  margin-top: 50px;
  @media only screen and (min-width: 768px) {
    width: 45%;
  }
  @media only screen and (min-width: 1020px) {
    width: 30%;
  }`;
const TeacherImg = styled.img`
  width: 100%;
`;
const TeacherName = styled.p`
  text-align: center;
  font-family: bpg_ghalo;
  color: grey;
  font-size: 19px;
  line-height: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;
