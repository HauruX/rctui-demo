import React from 'react';
import '../styles/index.scss';
import Editor from 'rctui/addons/Editor'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className="redBg">module</span> local styles.</p>
        <p>Enjoy!</p>
        <Editor/>
      </div>
    )
  }
}
