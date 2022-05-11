import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 20px;
  background-color: ${(({ theme }) => theme)};
  cursor: pointer;
  fontSize: 15px;
  padding: 10px;
  box-shadow: 0 2px 5px #ccc;
  border-radius: 7px;
`

export const PIssues = styled.p`
  font-weight: 600;
`

export const PDate = styled.p`
  font-size: 12px;
  margin: 5px 0;
`

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Text = styled.span`
  font-size: 12px;
`
export const CommentsBlock = styled.div`
  
`
export const Count = styled.span`
  font-size: 14px;
  margin-left: 5px;
  margin-bottom: 20px;
`
