import * as React from 'react'
import Editor from 'rctui/addons/Editor'

import './editorAjast.scss'

class EditorItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 'test',
      isFocus: false
    }
  }
  render() {

    console.log(this.state.isFocus);

    if (this.state.isFocus) {
      let maskLayer = document.querySelector('.mask-layer');
      // 显示遮罩层
      maskLayer.style.display = 'block';

      // 设置对遮罩层的点击事件监听
      // maskLayer.onClick = (function (event) {
      //   // console.log(event.target);
      //   maskLayer.style.display = 'none';
      //   this.setState({
      //     isFocus: false
      //   })
      // }).bind(this);

      maskLayer.addEventListener('click', (function (event) {
        this.setState({
          isFocus: false
        });
        maskLayer.style.display = 'none';
      }).bind(this));
    } else {
    }

    return (
      <div ref='' onClick={this.clickFocus.bind(this)} className={this.state.isFocus ? 'focus-editor-item' : 'blur-editor-item'}>
        <Editor placeholder="some text"
          value={this.state.value}
          height={300}
          onChange={(value) => this.setState({ value })}
          toolbar={[
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['link'],
            ['clean']
          ]} />
       
      </div>
    );
  }
//  <div style={{ border: 'solid 1px #ccc', marginTop: 20, padding: 10, marginBottom: 20 }}>
//           {this.state.value || <span style={{ color: '#999' }}>Result</span>}
//         </div>
  clickFocus() {
    if (!this.state.isFocus) {
      this.setState({
        isFocus: true
      });
    }
  }

}

export default EditorItem
