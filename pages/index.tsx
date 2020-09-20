import { Box } from "@components/ds/Box";
import { Post } from "@components/Post";
import { posts } from "../getAllPosts";

const IndexPage = () => {
  return (
    <>
      {posts.map((post) => (
        <Box width="70vw" margin="0 auto">
          <Post key={post.link} post={post} />
        </Box>
      ))}
    </>
  );
};

export default IndexPage;
