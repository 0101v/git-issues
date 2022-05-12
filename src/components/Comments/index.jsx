import { Wrapper, CommentsItem, Body, Date, Author } from './style';

export const Comments = ({ comments }) => {
  
  return (
    <Wrapper>
      {comments.map(elem => (
        <CommentsItem key={elem.node.createdAt}>
          <Body>{elem.node.body}</Body>
          <Date>{elem.node.createdAt.split(/[A-Z]/g).join(' ')}</Date>
          <Author>{elem.node.author.login}</Author>
        </CommentsItem>)
      )}
    </Wrapper>    
  );
}
