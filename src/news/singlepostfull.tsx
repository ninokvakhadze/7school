import styled from "styled-components";

function Singlepostfull() {
  return (
    <div>
      <Div>
        <h2>საქართველოს ულამაზესი კუთხე კახეთი</h2>
        <p>
          6ა და 6ბ კლასში (დამრ.ვ.ვოლჩანსკი და ლ.გაბისობია ) მასწავლებელი ნანა
          გოგორიშვილი საქართველოს ერთერთი ულამაზესი კუთხის კახეთის შესწავლის
          შემდეგ მოსწავლეებმა შექმნეს ძალიანი საინტერესო რეკლამები, პლაკატები,
          ვივიდეორგოლები კახურ ღვინოზე და ყურძენზე . მადლობა ბავშვების ასეთი
          აქტიურობისთვის და საინტერესო იდეებისთვის.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RWxP0MlIDuY?si=yA6_l-RpcyKJHaM6"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Div>
    </div>
  );
}

export default Singlepostfull;

const Div = styled.div`
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
