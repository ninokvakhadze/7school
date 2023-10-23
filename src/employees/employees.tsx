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
  margin-top: 30px;
  padding: 0px 20px;
  display: grid;
  grid-template-columns: auto;
  @media only screen and (min-width: 768px) {
    grid-template-columns: auto auto;
    gap: 15px;
  }
  @media only screen and (min-width: 1100px) {
    grid-template-columns: auto auto auto auto;
  }
`;
const TeacherDiv = styled.div``;
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
