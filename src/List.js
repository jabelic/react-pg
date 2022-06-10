
export const List = ({ langs, title }) => {
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