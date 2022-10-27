import type { Component } from "solid-js";
/* @refresh reload */
import { render } from 'solid-js/web';

import { {{capital name}} } from './{{capital name}}.tsx'

const App: Component = () => {
  return (
    <>
      <p>{{capital name}}</p>
      <{{capital name}} />
    </>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
