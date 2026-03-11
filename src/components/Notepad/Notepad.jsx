import {useState, useEffect}from 'react'
import Markdown from 'react-markdown'
import Macwindow from '../Macwindow/Macwindow'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';  


const Notepad = () => {

    const [markDown, setmarkDown] = useState(null)

    useEffect(()=>{
        fetch('/note.txt')
        .then( res => res.text())
        .then( text => setmarkDown(text))
    },[])

  return (
    <Macwindow>
    {/* <div className="mark"> */}
        {/* {markDown ? <Markdown>{markDown}</Markdown> : <p>Loading....</p>} */}
    {/* </div> */}
    {/* <SyntaxHighlighter language="typescript" style={docco}>
        {markDown}
    </SyntaxHighlighter> */}

        <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
      {markDown}
    </SyntaxHighlighter>

    </Macwindow>
  )
}

export default Notepad