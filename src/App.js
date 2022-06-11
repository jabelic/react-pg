import { useState, useEffect } from 'react'
import { List } from "./List"
import { Form } from "./Form"
import { getLanguages } from "./const/languages";
import styled from 'styled-components';
import { withLoading } from "./hoc/with-loading";

// styled-components
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`

const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`
const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none' };
`


function App({ data }) {
  /** useState: 引数は1つ */
  // const [description, setDescription] = useState('初期値');
  // const changeDescription = () => {
  //   if(description=='スイッチ、オン！') setDescription('スイッチ、オフ！')
  //   else setDescription('スイッチ、オン！')
  // }
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState([]);
  
  /** レンダリングが起きたタイミングで発火する. onMountedみたいな? */
  /** 
   * 第一引数: callback method, returnでclean up処理(DB connection, timer, eventListener)
   * 第二引数: 依存させたいobjectのlist. 何も指定しないと全てに依存する? []を指定すると依存するstate(object)はなくなる
  */
  useEffect(() => {
    console.log('App.js:useEffect')
    fetchLanguages()// fetchする
  }, [])

  const fetchLanguages = async () =>{
    const languages = await getLanguages()
    setLangs(languages)
  }
  const addLang = (lang) => {
    console.log(lang)
    setLangs([...langs, lang])
    setTab('list')
  }

  return (
    <div className="section">
       {/* <header>
        <ul>
          <li><button onClick={() => setTab('list')}>リスト</button></li>
          <li><button onClick={() => setTab('form')}>フォーム</button></li>
        </ul>
      </header> */}
      <Header>
        <HeaderUl>
          <HeaderLi focused={tab === 'list'}>
              {/* focused={tab === 'list'} onClick={() => setTab('list')} */}
            <button onClick={() => setTab('list')}>リスト</button>
          </HeaderLi>
          <HeaderLi focused={tab === 'form'}>
              {/* focused={tab === 'form'} onClick={() => setTab('form')} */}
            <button onClick={() => setTab('form')}>フォーム</button>
          </HeaderLi>
        </HeaderUl>
      </Header>
      New to React.js
      {/* <button onClick={()=>changeDescription()}>ボタン</button> */}
      {
        tab === 'list' ? <List langs={langs} title="取り扱いメニュー一覧"/> : <Form onAddLang={addLang}/>
      }
    </div>
  );
}

// export default App;
export default withLoading(App, getLanguages);
