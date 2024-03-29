import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface Post {
  _id: string;
  name: string;
  imageCover: { contentType: String; data: String };
  text: string;
  videos: string;
  posts: any
  images: string;
}


// import vaja from "../assets/vaja.jpeg";
// import example from "../assets/example.png";
// import facebook from "../assets/facebook (1).svg";
// import twitter from "../assets/x-twitter.svg";
// import instagram from "../assets/instagram.svg";
// import games from "../assets/kalatburti.jpg";

function Singlepost() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/posts");
      const result = await response.json();
      console.log(result.data.posts);
      setPosts(result.data.posts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayImage = (imageData: { contentType: String; data: String }) => {
    return `data:${imageData ? imageData.contentType : ""};base64,${
      imageData ? imageData.data : ""
    }`;
  };
  const line = {
    textDecoration: "none",
  };

  return (
    <div>
      <Container>
      {posts.map((data: Post) => (
            <Post key={data._id}>
              <CoverImage src={displayImage(data.imageCover)} />
              <Link style={line} to={`/news/${data._id}`}>
              <Text>{data.name}</Text>
              </Link>
              {/* <video width="640" height="360" controls>
                <source src={displayImage(data.videos)} type="video/mp4" />
              </video> */}
            </Post>
          ))}
      </Container>
    </div>
  );
}

export default Singlepost;

const Container = styled.div`
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

const CoverImage = styled.img`
  width: 100%;
  height: 350px;
`;

const Post = styled.div`
  width: 100%;
  margin-top: 50px;
  @media only screen and (min-width: 768px) {
    width: 45%;
  }
  @media only screen and (min-width: 1020px) {
    width: 30%;
  }
  /* margin: auto; */
`;

const Text = styled.p`
  font-family: bpg_ghalo;
  color: #8b0909;
  font-size: 20px;
  margin-top: 15px;
`;

