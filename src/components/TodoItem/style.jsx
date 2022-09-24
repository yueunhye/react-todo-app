import styled from 'styled-components'

export const Virtualized = styled.div`
  border-top: 1px solid #dee2e6;
  &:nth-child(even) {
    background: #f8f9fa;
  }
`
export const TodoItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`
export const CheckBox = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
`
export const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
`
export const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`
