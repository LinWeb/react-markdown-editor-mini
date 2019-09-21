/// <Reference path="../@types/markToHtml.d.ts"/>
import MarkToHtml from 'marked'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import "highlight.js/styles/atom-one-light.css";


hljs.registerLanguage("javascript", javascript); // javascript语法高亮

MarkToHtml.setOptions({
  renderer: new MarkToHtml.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: function (code: any) {
    return hljs.highlightAuto(code).value;
  }
});

export default MarkToHtml;
