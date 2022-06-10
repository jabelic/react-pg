import { useEffect } from 'react'
export const List = ({ langs, title }) => {
    useEffect(()=>{
        return ()=>{
            console.debug('Listjs:unmounted')
        }
    }
    )
    return(
        <div>
            <h4>{ title }</h4>
            <div>一覧</div>
            {
                langs.map((lang, index) => {
                    return <div key={index}>{ lang }</div>
                    })
            }
        </div>
    )
}