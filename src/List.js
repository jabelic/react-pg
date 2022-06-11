import { useEffect } from 'react'
import styled from 'styled-components';
import { TabBodyContainer } from "./components/tab-body-container";


const ListItem = styled.div`
  padding: 8px 16px;
  
  &:nth-child(n+2) {
    border-top: 1px solid #D9DBDE;
  }
`

// { langs, title }はPropsからの分割代入
export const List = ({ langs, title }) => {
    useEffect(()=>{
        return ()=>{
            console.debug('Listjs:unmounted')
        }
    }
    )
    return(
        <TabBodyContainer title={title}>
            <div>
            {
                langs.map((lang, index) => {
                return <ListItem key={index}>{ lang }</ListItem>
                })
            }
            </div>
        </TabBodyContainer>
    )
}