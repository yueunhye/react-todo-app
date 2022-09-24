import styled from 'styled-components'

export const From = styled.form`
  display: flex;
  flex: 1;
  background: #087f5b;
`
export const Input = styled.input`
  flex: 1;
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  //커서 깜빡임 색상
  color: #eee;
  &::placeholder {
    color: #dee2e6;
  }
`
export const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #099268;
  color: #eee;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #0ca678;
  }
`
