import styled from "styled-components";
import image from "../assets/example.png";
import arrow from "../assets/arrow-red.svg";

function Singlepostfull() {
  return (
    <>
      <FullPost>
        <PostTitle>საქართველოს ულამაზესი კუთხე კახეთი</PostTitle>
        <PostText>
          6ა და 6ბ კლასში (დამრ.ვ.ვოლჩანსკი და ლ.გაბისობია ) მასწავლებელი ნანა
          გოგორიშვილი საქართველოს ერთერთი ულამაზესი კუთხის კახეთის შესწავლის
          შემდეგ მოსწავლეებმა შექმნეს ძალიანი საინტერესო რეკლამები, პლაკატები,
          ვივიდეორგოლები კახურ ღვინოზე და ყურძენზე . მადლობა ბავშვების ასეთი
          აქტიურობისთვის და საინტერესო იდეებისთვის.
        </PostText>
        <PostDiv>
          <Arrow1 src={arrow} />
          <Image src={image} />
          <Arrow2 src={arrow} />
        </PostDiv>
      </FullPost>
    </>
  );
}

export default Singlepostfull;

const FullPost = styled.div`
  padding: 4% 2%;
  margin: 4.5%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (min-width: 768px) {
    /* margin: 20%; */
    margin: 3%;
  }
`;

const PostTitle = styled.h2`
  font-family: bpg_ghalo;
  font-size: 200%;
  color: #8b0909;
`;
const PostText = styled.h2`
  font-family: bpg_ghalo;
  font-size: 100%;
  font-weight: 500;
  color: gray;
`;
const Image = styled.img`
  margin: 6%;
  width: 100%;
`;

const PostDiv = styled.div`
  display: flex;
`;
const Arrow1 = styled.img`
  width: 4%;
  height: 4%;
  rotate: 180deg;
  margin-top: 35%;
`;
const Arrow2 = styled.img`
  width: 4%;
  height: 4%;
  margin-top: 35%;

`;
