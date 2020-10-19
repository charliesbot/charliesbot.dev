import { PostLayout } from "@components/PostLayout";
import { posts } from "../getAllPosts";

const IndexPage = () => {
  console.log("teeest ", posts);
  return (
    <>
      {posts.map((post) => (
        <PostLayout key={post.link} post={post} />
      ))}
    </>
  );
};

export default IndexPage;
