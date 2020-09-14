export type Meta = {
  title: string;
  description: string;
  date: string;
  readTime: string;
};

type Props = {
  meta: Meta;
  isBlogPost?: boolean;
};

const HeadPost = ({ meta, isBlogPost }: Props) => (
  <>
    <h1 className={isBlogPost ? "great-title" : ""}>{meta.title}</h1>
    <div className="details">
      {isBlogPost ? null : <p>{meta.description}</p>}
      <span>{meta.date}</span>
      <span role="img" aria-label="one coffee">
        ☕ {meta.readTime + " min read"}
      </span>
    </div>
  </>
);

export { HeadPost };
