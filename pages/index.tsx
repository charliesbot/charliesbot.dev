import { Post } from "@components/Post";
import { posts } from "../getAllPosts";

const IndexPage = () => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
};

export default IndexPage;
