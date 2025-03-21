"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75342"],{3309:function(e,t,n){n.r(t),n.d(t,{default:()=>l,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/get-picture-from-pasteboard","title":"GET PICTURE FROM PASTEBOARD","description":"GET PICTURE FROM PASTEBOARD ( imagem )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-picture-from-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-from-pasteboard","permalink":"/docs/pt/commands/get-picture-from-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-from-pasteboard.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-picture-from-pasteboard","title":"GET PICTURE FROM PASTEBOARD","slug":"/commands/get-picture-from-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PASTEBOARD DATA TYPE","permalink":"/docs/pt/commands/get-pasteboard-data-type"},"next":{"title":"Get text from pasteboard","permalink":"/docs/pt/commands/get-text-from-pasteboard"}}'),a=n("785893"),s=n("250065");let d={id:"get-picture-from-pasteboard",title:"GET PICTURE FROM PASTEBOARD",slug:"/commands/get-picture-from-pasteboard",displayed_sidebar:"docs"},o=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"GET PICTURE FROM PASTEBOARD"})," ( ",(0,a.jsx)(t.em,{children:"imagem"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Par\xe2metro"}),(0,a.jsx)(t.th,{children:"Tipo"}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"imagem"}),(0,a.jsx)(t.td,{children:"Picture"}),(0,a.jsx)(t.td,{children:"\u2190"}),(0,a.jsx)(t.td,{children:"Imagem extra\xedda da \xe1rea de transfer\xeancia"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(t.p,{children:["GET PICTURE FROM PASTEBOARD devolve a imagem presente na \xe1rea de transfer\xeancia no campo ou vari\xe1vel imagem ",(0,a.jsx)(t.em,{children:"imagem"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Nota"}),": no caso de uma opera\xe7\xe3o copiar/colar, o container de dados corresponde a \xe1rea de transfer\xeancia"]}),"\n",(0,a.jsx)(t.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(t.p,{children:"O m\xe9todo a seguir de objeto de um bot\xe3o atribui a imagem presente na \xe1rea de transfer\xeancia (se houver) ao campo [Empregados]Foto:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:'\xa0If((Pasteboard data size("com.4d.imagen.jpeg")>0)|(Pasteboard data size("com.4d.imagem.gif")>0))\n\xa0\xa0\xa0\xa0GET PICTURE FROM PASTEBOARD([Empregados]Foto)\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("A \xe1rea de transfer\xeancia n\xe3o cont\xe9m nenhuma imagem.")\n\xa0End if\n'})}),"\n",(0,a.jsx)(t.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,a.jsx)(t.p,{children:"Se a imagem for extra\xedda corretamente, OK toma o valor 1; do contr\xe1rio OK toma o valor 0 e se gera um erro."}),"\n",(0,a.jsx)(t.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/pt/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/pt/commands/get-text-from-pasteboard",children:"Get text from pasteboard"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/pt/commands/pasteboard-data-size",children:"Pasteboard data size"})]}),"\n",(0,a.jsx)(t.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"N\xfamero do comando"}),(0,a.jsx)(t.td,{children:"522"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Thread-seguro"}),(0,a.jsx)(t.td,{children:"\u2717"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Modificar vari\xe1veis"}),(0,a.jsx)(t.td,{children:"OK"})]})]})]})]})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return d}});var r=n(667294);let a={},s=r.createContext(a);function d(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);