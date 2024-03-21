import { DiscussionEmbed } from "disqus-react";

const DisqusComments = ({ post }: any) => {
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const disqusConfig = {
    url: pageUrl,
    identifier: post.id,
    title: post.name,
  };
  return <DiscussionEmbed shortname="aimodelize" config={disqusConfig} />;
};

export default DisqusComments;
