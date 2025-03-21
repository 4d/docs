"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58502"],{291999:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>t,assets:()=>r,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/application-file","title":"Application file","description":"Application file  : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/application-file.md","sourceDirName":"commands-legacy","slug":"/commands/application-file","permalink":"/docs/pt/20-R7/commands/application-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fapplication-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"application-file","title":"Application file","slug":"/commands/application-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Ambiente 4D","permalink":"/docs/pt/20-R7/commands/theme/4D-Environment"},"next":{"title":"Application info","permalink":"/docs/pt/20-R7/commands/application-info"}}'),o=i("785893"),a=i("250065");let s={id:"application-file",title:"Application file",slug:"/commands/application-file",displayed_sidebar:"docs"},d=void 0,r={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Application file"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nome longo da aplica\xe7\xe3o ou arquivo 4D execut\xe1vel"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(n.p,{children:"O comando Application file retorna o nome longo do arquivo execut\xe1vel ou da aplica\xe7\xe3o 4D que est\xe1 sendo utilizada."}),"\n",(0,o.jsxs)(n.p,{children:["Em Windows",(0,o.jsx)(n.br,{}),"\nSe voc\xea est\xe1 utilizando por exemplo 4D localizado em \\PROGRAMS\\4D no disco E, o comando retorna E:\\PROGRAMS\\4D\\4D.EXE.."]}),"\n",(0,o.jsxs)(n.p,{children:["Em Macintosh",(0,o.jsx)(n.br,{}),"\nSe voc\xea est\xe1 executando, por exemplo, 4D na pasta Programas do disco Macintosh HD, o comando retorna Macintosh HD:Programs:4D.app."]}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Ao iniciar seu banco de dados em Windows, voc\xea precisa verificar se uma biblioteca DLL se encontra localizada no mesmo n\xedvel do arquivo execut\xe1vel 4D. No m\xe9todo de banco de dados  de sua aplica\xe7\xe3o voc\xea pode escrever:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0If(Is Windows&(Application type#4D Server))\n\xa0\xa0\xa0\xa0var $appPath : Object\n\xa0\xa0\xa0\xa0$appPath:=Path to object(Application file)\n\xa0\xa0\xa0\xa0If(Test path name(($appPath.parentFolder)+"XRAYCAPT.DLL")#Is a document)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("XRAYCAPT.DLL is missing. The X-ray capture capability will not be available.")\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/data-file",children:"Data file"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/structure-file",children:"Structure file"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"491"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return s}});var t=i(667294);let o={},a=t.createContext(o);function s(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);