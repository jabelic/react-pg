import styled from "styled-components";

const Container = styled.div`
  padding: 12px 64px;
`

// childrenは予約語. vueで言うslot
// 複数渡す方法もいろいろあるみたい↓ (配列, keyを使う, PropsでElementを定義する(それ専用の変数を用意してしまう. childrenを諦めてる感じ))
// https://zenn.dev/terrierscript/articles/2018-10-24-react-children
export const TabBodyContainer = ({ children, title }) => {
  return (
    <Container>
      <h4>{ title }</h4>
      { children }
    </Container>
  )
}
