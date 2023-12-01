import React, {useEffect, useState} from 'react';
import Markdown from 'markdown-to-jsx';
import './mdrender.css'

const MarkdownRenderer = (props) => {
  const [post, setPost] = useState('');
  const file = props.path

  useEffect(() => {
    import(`./${file}`)
    .then(res => {
      fetch(res.default)
      .then(res => res.text())
      .then(res => setPost(res))
      .catch(err => console.log(err))
    })
  })

  
  return (
    <div>
      <Markdown>
        {post}
      </Markdown>
    </div>
  );
};

export default MarkdownRenderer;