import { Layout } from "@components/Layout";
import { Post } from "@components/Post";
import { posts } from "../getAllPosts";

const IndexPage = () => {
  return (
    <Layout pageTitle="Charlie's Blog" description="Charlie's Blog">
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </Layout>
  );
};

export default IndexPage;
