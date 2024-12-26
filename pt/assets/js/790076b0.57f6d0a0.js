"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88573"],{81571:function(e,o,r){r.r(o),r.d(o,{metadata:()=>n,contentTitle:()=>d,default:()=>m,assets:()=>a,toc:()=>l,frontMatter:()=>c});var n=JSON.parse('{"id":"commands-legacy/form-get-color-scheme","title":"FORM Get color scheme","description":"FORM Get color scheme  : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-get-color-scheme.md","sourceDirName":"commands-legacy","slug":"/commands/form-get-color-scheme","permalink":"/docs/pt/commands/form-get-color-scheme","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-get-color-scheme.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-get-color-scheme","title":"FORM Get color scheme","slug":"/commands/form-get-color-scheme","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM FIRST PAGE","permalink":"/docs/pt/commands/form-first-page"},"next":{"title":"FORM Get current page","permalink":"/docs/pt/commands/form-get-current-page"}}'),s=r("785893"),t=r("250065");let c={id:"form-get-color-scheme",title:"FORM Get color scheme",slug:"/commands/form-get-color-scheme",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function i(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"FORM Get color scheme"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Resultado"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:'Esquema de cores do formul\xe1rio atual "light" ou "dark"'})]})})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"FORM Get color scheme"})," retorna o nome do esquema atual de cores do formul\xe1rio atualmente sendo exibido . Se n\xe3o houver formul\xe1rio atual, o comando retorna uma string vazia."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota"}),': Em Windows, esse comando sempre retorna "light/claro".']}),"\n",(0,s.jsx)(o.p,{children:"O esquema de cores atual de um formul\xe1rio \xe9 definido:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:['pela propriedade de formul\xe1rio "Color Scheme" (ver ',(0,s.jsx)(o.em,{children:"colorScheme"}),");"]}),"\n",(0,s.jsxs)(o.li,{children:['se "Color Scheme" for estabelecido como "inherited", pela chamada ao comando ',(0,s.jsx)(o.a,{href:"/docs/pt/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"}),";"]}),"\n",(0,s.jsxs)(o.li,{children:["se ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"}),' n\xe3o for chamado, ou for chamado com o par\xe2metro "inherited", use Configura\xe7\xf5es (Configura\xe7\xf5es do banco de dados host no caso de um componente);']}),"\n",(0,s.jsx)(o.li,{children:'se Configura\xe7\xf5es for estabelecido como "inherited", use as prefer\xeancias de usu\xe1rio do sistema operacional'}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Veja o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"})," para detalhles sobre nomes de esquemas de cores."]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(o.p,{children:"Se quiser carregar uma imagem dependendo do esquema atual do formul\xe1rio:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0$txt_suffix:=Choose((FORM Get color scheme="dark");"_dark";"")\n\xa0READ PICTURE FILE(Get 4D folder(Current resources folder)+"myPict"+$txt_suffix+".png";$Pic_icon)\n'})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," \xe9 recomendado usar ",(0,s.jsx)(o.em,{children:"css"})," para adaptar o design de objetos formul\xe1rio para o esquema atual."]}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/commands/get-application-color-scheme",children:"Get application color scheme"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"})]}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"1761"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return d},a:function(){return c}});var n=r(667294);let s={},t=n.createContext(s);function c(e){let o=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);