import { GatsbyNode } from "gatsby";

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node }) => {
  if (node.internal.contentDigest.length > 10000) {
    console.log(`⚠️ Large node detected: ${node.internal.type}`);
  }
};
