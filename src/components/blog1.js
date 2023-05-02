import React from "react";
import MarkdownView from 'react-showdown';
import { marked } from 'marked';

// var showdown  = require('showdown'),
// converter = new showdown.Converter(),
// text = readFile('/src/blogs/linux administrative profolio/1_Create a virtual machine.md')
// html      = converter.makeHtml(text);

function Blog1() {
    fetch('/src/blogs/linux administrative profolio/1_Create a virtual machine.md')
    .then(response => response.text())
    .then(text => {
        // Parse the markdown text using a markdown parser
        const markdown = marked(text);
        console.log(text)

    return (
        <MarkdownView
            markdown={markdown}
            options={{ tables: true}}
        />
        );
  });

  
};

export default Blog1;