import React from 'react';
import '../styles/index.scss';
import Editor from 'rctui/addons/Editor'
import EditorItem from './components/page/EditorItem';

export default class App extends React.Component {
  render() {
    return (
      <div style={{width: '1100px', margin: '0 auto'}}>
        <div className='mask-layer'></div>
        <EditorItem />
        <EditorItem />
      </div>
    )
  }
}
