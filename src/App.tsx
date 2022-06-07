import React, { useEffect, useState } from "react";
import './main.global.css'
import { hot } from 'react-hot-loader/root'
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { getValue } from "./FunctionalExample";
import { MyHooks, useIsMounted } from "./HooksExample";
import { values } from "../webpack.config";
import { assignId, generateId, generateRandomString } from "./utils/react/generateRandom";
import { GenericList } from "./GenericList";
import { merge } from "./utils/js/merge";
import { Dropdown } from "./shared/Dropdown";
import { Card } from "./shared/CardsList/Card";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";

// const LIST = [
//   { text: 'some'},
//   { text: 'other some'},
//   { text: 'some'},
// ].map(generateId);

function AppComponent() {
  // const url = new URL(window.location.href);
  // console.log(url.searchParams.get('token'))

  // const [token] = useToken();
  // const { Provider } = tokenContext;

  // const [isVisible, setIsVisible] = React.useState(false);
  // const [title, setTitle] = React.useState('');
  // const [isVisible] = useIsMounted();

  // const [list, setList] = React.useState(LIST);

  // const handleItemClick = (id: string) => {
  //   setList(list.filter((item) => item.id !== id))
  // }

  // const handleAdd = () => {
  //   setList(list.concat(assignId({ text: generateRandomString() })))
  // }

  return (
      <Layout>
        <Header />
        <Content>
          <CardsList />
          {/* <button onClick={() => setIsVisible(!isVisible)}>Change me!</button> */}
          {/* <input type="text" onChange={getValue(setTitle)} />
          {isVisible && <MyHooks title={title} id="11"/>} */}
          {/* <button onClick={handleAdd}>Add element</button>
          <GenericList list={list.map(merge({ onClick: handleItemClick }))} /> */}
          {/* <MyList list={LIST} onClick={console.log} /> */}
        {/* <div style={{ padding: 200 }}>
          <br/>
          <Dropdown
            // onClose={() => console.log('closed')}
            // onOpen={() => console.log('opened')}
            // isOpen={false}
            button={<button> Test </button>}
          >
            <Card/>
          </Dropdown>
        </div> */}
        </Content>
      </Layout>
  );
}

export const App = hot(() => <AppComponent />);


