import React from  "react"
import ReactDOM from "react-dom"
import marked from 'marked';
marked.setOptions({
  breaks: true,
});

// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}

class App extends React.Component{
  constructor(){
    super()
    this.state =  {
      markdown: placeholder
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      markdown:event.target.value
    })
  }
  render(){
    return(
    <div>
        <h1>MARKDOWN PREVIEW</h1>
        <br/>
        <div className="side container"> 
        <div className="one">
       <h1>Editor:</h1> 
       <br/>
      <Editor markdown={this.state.markdown} 
             onChange={this.handleChange} />
        <br/>
        </div>
        <div className="two">
        <h1>Preview:</h1>
        <Preview  markdown={this.state.markdown}
         />
         </div>
         </div>
    </div>
    )
  
   
    
  }
}
function Editor(props){
     return(
       <textarea id="editor"
         onChange={props.onChange}
         value={props.markdown}/>
     )
   }
function Preview(props){
     return(
       <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.markdown, { renderer: renderer })}} />
     )
   }

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
export default App