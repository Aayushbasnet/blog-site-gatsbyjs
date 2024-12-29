"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCreateNode = void 0;
const onCreateNode = ({ node }) => {
    if (node.internal.contentDigest.length > 10000) {
        console.log(`⚠️ Large node detected: ${node.internal.type}`);
    }
};
exports.onCreateNode = onCreateNode;
