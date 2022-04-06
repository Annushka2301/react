import React from "react";
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
import { MyList } from "./GenericList";
import { merge } from "./utils/js/merge";
import { nanoid } from 'nanoid';

const LIST = [
  { value: 'some'},
  { value: 'other some'},
  { value: 'some'},
].map(generateId);

function AppComponent() {
  // const [isVisible, setIsVisible] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [isVisible] = useIsMounted();

  const [list, setList] = React.useState(LIST);

  const handleItemClick = (id: string) => {
    console.log(id)
    setList(list.filter((item) => item.id !== id))
  }

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        {/* <button onClick={() => setIsVisible(!isVisible)}>Change me!</button> */}
        {/* <input type="text" onChange={getValue(setTitle)} />
        {isVisible && <MyHooks title={title} id="11"/>} */}
        <MyList list={LIST.map(merge({ onClick: handleItemClick }))} />
        {/* <MyList list={LIST} onClick={console.log} /> */}
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);


