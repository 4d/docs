"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11426"],{820081:function(e,o,n){n.r(o),n.d(o,{metadata:()=>s,contentTitle:()=>a,default:()=>m,assets:()=>c,toc:()=>i,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/method-get-names","title":"METHOD GET NAMES","description":"METHOD GET NAMES ( arrayNoms {; filtro}{; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-get-names.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-names","permalink":"/docs/pt/commands/method-get-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-names.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-get-names","title":"METHOD GET NAMES","slug":"/commands/method-get-names","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET MODIFICATION DATE","permalink":"/docs/pt/commands/method-get-modification-date"},"next":{"title":"METHOD Get path","permalink":"/docs/pt/commands/method-get-path"}}'),t=n("785893"),d=n("250065");let r={id:"method-get-names",title:"METHOD GET NAMES",slug:"/commands/method-get-names",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"METHOD GET NAMES"})," ( ",(0,t.jsx)(o.em,{children:"arrayNoms"})," {; ",(0,t.jsx)(o.em,{children:"filtro"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"arrayNoms"}),(0,t.jsx)(o.td,{children:"Text array"}),(0,t.jsx)(o.td,{children:"\u2190"}),(0,t.jsx)(o.td,{children:"Arrays de nomes de m\xe9todos de projeto"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"filtro"}),(0,t.jsx)(o.td,{children:"Text"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Filtros de nomes"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"*"}),(0,t.jsx)(o.td,{children:"Operador"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Se passado = o comando se aplica \xe0 base local quando se executa desde um componente (par\xe2metro ignorado fora deste contexto)"})]})]})]}),"\n",(0,t.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["O comando ",(0,t.jsx)(o.strong,{children:"METHOD GET NAMES"})," enche o array ",(0,t.jsx)(o.em,{children:"arrayNoms"})," com os nomes dos m\xe9todos projeto criados na aplica\xe7\xe3o."]}),"\n",(0,t.jsxs)(o.p,{children:["Por defeito, todos os m\xe9todos est\xe3o listados. Pode restringir esta lista passando uma cadeia de compara\xe7\xe3o no par\xe2metro ",(0,t.jsx)(o.em,{children:"filtro"}),', neste caso, o comando somente devolve os m\xe9todos cujo nome coincide com o filtro. Deve utilizar o caracter @ com o fim de definir os filtros de tipo "come\xe7a por", "termina em" o "cont\xe9m".']}),"\n",(0,t.jsxs)(o.p,{children:["Se executado este comando desde um componente, devolve por defeito os nomes dos m\xe9todos projeto do componente. Se passado o par\xe2metro ",(0,t.jsx)(o.em,{children:"*"}),", o array conter\xe1 os m\xe9todos projeto da base local."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Nota"}),": os m\xe9todos localizados no lixeiro n\xe3o s\xe3o listados."]}),"\n",(0,t.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(o.p,{children:"Exemplos de uso:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// Lista de todos os m\xe9todos projeto da base\n\xa0METHOD GET NAMES(t_Names)\n\xa0\n\xa0\xa0//\xa0 Lista dos m\xe9todos projeto que come\xe7am por uma cadeia espec\xedfica\n\xa0METHOD GET NAMES(t_Names;"web_@")\n\xa0\n\xa0\xa0// Lista dos m\xe9todos projeto da base local que come\xe7am por uma cadeia espec\xedfica\n\xa0METHOD GET NAMES(t_Names;"web_@";*)\n'})}),"\n",(0,t.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"N\xfamero do comando"}),(0,t.jsx)(o.td,{children:"1166"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Thread-seguro"}),(0,t.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return a},a:function(){return r}});var s=n(667294);let t={},d=s.createContext(t);function r(e){let o=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(d.Provider,{value:o},e.children)}}}]);