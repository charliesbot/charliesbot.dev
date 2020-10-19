import { PostEntry } from "@components/PostEntry";
import { posts } from "../getAllPosts";

const IndexPage = () => {
  console.log("teeest ", posts);
  return (
    <>
      {posts.map((post) => (
        <PostEntry key={post.link} frontMatter={post} />
      ))}
    </>
  );
};

export default IndexPage;
