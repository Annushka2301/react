import React from "react";
import './main.global.css'
import { hot } from 'react-hot-loader/root'
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { getValue } from "./FunctionalExample";
import { MyHooks } from "./HooksExample";


function AppComponent() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [title, setTitle] = React.useState('')

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <button onClick={() => setIsVisible(!isVisible)}>Change me!</button>
        <input type="text" onChange={getValue(setTitle)} />
        {isVisible && <MyHooks title={title}/>}
      </Content>
    </Layout>
  );
}

export const App = hot(AppComponent);


