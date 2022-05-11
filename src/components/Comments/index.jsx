import { Wrapper, CommentsItem, Body, Date, Author } from './style';

import { useSelector } from "react-redux";

export const Comments = () => {
  const data = useSelector(state=>state);
  console.log(data.comments.edges)
  return (
    <Wrapper>
      {data.comments.edges.map(elem => (
      <CommentsItem key={elem.node.createdAt}>
        <Body>{elem.node.body}</Body>
        <Date>{elem.node.createdAt.split(/[A-Z]/g).join(' ')}</Date>
        <Author>{elem.node.author.login}</Author>
      </CommentsItem>)
      )}
    </Wrapper>    
  );
}
