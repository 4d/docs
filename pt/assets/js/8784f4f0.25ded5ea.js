"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98292"],{851583:function(e,d,n){n.r(d),n.d(d,{metadata:()=>t,contentTitle:()=>s,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"commands-legacy/method-get-modification-date","title":"METHOD GET MODIFICATION DATE","description":"METHOD GET MODIFICATION DATE ( rota ; dataMod ; horaMod {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-get-modification-date.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-modification-date","permalink":"/docs/pt/commands/method-get-modification-date","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-modification-date.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-get-modification-date","title":"METHOD GET MODIFICATION DATE","slug":"/commands/method-get-modification-date","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET FOLDERS","permalink":"/docs/pt/commands/method-get-folders"},"next":{"title":"METHOD GET NAMES","permalink":"/docs/pt/commands/method-get-names"}}'),o=n("785893"),r=n("250065");let a={id:"method-get-modification-date",title:"METHOD GET MODIFICATION DATE",slug:"/commands/method-get-modification-date",displayed_sidebar:"docs"},s=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let d={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(d.p,{children:[(0,o.jsx)(d.strong,{children:"METHOD GET MODIFICATION DATE"})," ( ",(0,o.jsx)(d.em,{children:"rota"})," ; ",(0,o.jsx)(d.em,{children:"dataMod"})," ; ",(0,o.jsx)(d.em,{children:"horaMod"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(d.table,{children:[(0,o.jsx)(d.thead,{children:(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.th,{children:"Par\xe2metro"}),(0,o.jsx)(d.th,{children:"Tipo"}),(0,o.jsx)(d.th,{}),(0,o.jsx)(d.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(d.tbody,{children:[(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"rota"}),(0,o.jsx)(d.td,{children:"Text, Text array"}),(0,o.jsx)(d.td,{children:"\u2192"}),(0,o.jsx)(d.td,{children:"Texto ou array que cont\xe9m uma ou mais rotas de acesso"})]}),(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"dataMod"}),(0,o.jsx)(d.td,{children:"Date, Date array"}),(0,o.jsx)(d.td,{children:"\u2190"}),(0,o.jsx)(d.td,{children:"Data(s) de modifica\xe7\xe3o do m\xe9todo"})]}),(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"horaMod"}),(0,o.jsx)(d.td,{children:"Time, Integer array"}),(0,o.jsx)(d.td,{children:"\u2190"}),(0,o.jsx)(d.td,{children:"Hora(s) de modifica\xe7\xe3o do m\xe9todo"})]}),(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"*"}),(0,o.jsx)(d.td,{children:"Operador"}),(0,o.jsx)(d.td,{children:"\u2192"}),(0,o.jsx)(d.td,{children:"Se passar = o comando \xe9 aplicado ao banco local quando \xe9 executado apartir de um componente (par\xe2metro ignorado fora deste contexto)"})]})]})]}),"\n",(0,o.jsx)(d.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(d.p,{children:["O comando ",(0,o.jsx)(d.strong,{children:"METHOD GET MODIFICATION DATE"})," retorna nos par\xe2metros ",(0,o.jsx)(d.em,{children:"dataMod"})," e ",(0,o.jsx)(d.em,{children:"horaMod"})," as datas e hor\xe1rios da \xfaltima modifica\xe7\xe3o dos m\xe9todos designados pelo par\xe2metro rota."]}),"\n",(0,o.jsx)(d.p,{children:"Pode utilizar dois tipos de sintaxe, baseadas em arrays ou vari\xe1veis:"}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{className:"language-4d",children:"\xa0var tVpath : Text\xa0// vari\xe1veis\n\xa0var vDate : Date\n\xa0var vTime : Time\n\xa0METHOD GET MODIFICATION DATE(tVpath;vDate;vTime)\xa0// data e hora de um s\xf3 m\xe9todo\n"})}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrPaths;0)\xa0// arrays\n\xa0ARRAY DATE(arrDates;0)\n\xa0ARRAY LONGINT(arrTimes;0)\n\xa0METHOD GET MODIFICATION DATE(arrPaths;arrDates;arrTimes)\xa0// datas e horas de v\xe1rios m\xe9todos\n"})}),"\n",(0,o.jsx)(d.p,{children:"N\xe3o \xe9 poss\xedvel combinar as duas sintaxes."}),"\n",(0,o.jsxs)(d.p,{children:["Se o comando for executado desde uma componente, \xe9 aplicado por padr\xe3o aos m\xe9todos da componente. Se passar o par\xe2metro ",(0,o.jsx)(d.em,{children:"*"}),", acessa aos m\xe9todos do banco local."]}),"\n",(0,o.jsx)(d.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsx)(d.p,{children:"Se quiser conhecer as datas e horas de modifica\xe7\xe3o por v\xe1rios m\xe9todos:"}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{className:"language-4d",children:'\xa0ARRAY TEXT(arrPaths;0)\n\xa0APPEND TO ARRAY(arrPaths;"MyMethod1")\n\xa0APPEND TO ARRAY(arrPaths;"MyMethod2")\n\xa0...\n\xa0ARRAY DATE(arrDates;0)\n\xa0ARRAY LONGINT(arrTimes;0)\n\xa0METHOD GET MODIFICATION DATE(arrPaths;arrDates;arrTimes)\n'})}),"\n",(0,o.jsx)(d.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsx)(d.p,{children:'Se quiser obter as datas de modifica\xe7\xe3o dos m\xe9todos de um m\xf3dulo com o prefixo "Web_". N\xe3o \xe9 poss\xedvel utilizar o s\xedmbolo "@" em uma rota; entretanto, pode escreverr:'}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{className:"language-4d",children:'\xa0ARRAY TEXT($_webMethod;0)\n\xa0METHOD GET NAMES($_webMethod;"Web_@")\n\xa0ARRAY DATE($_date;0)\n\xa0ARRAY LONGINT($_time;0)\n\xa0METHOD GET MODIFICATION DATE($_webMethod;$_date;$_time)\n'})}),"\n",(0,o.jsx)(d.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(d.table,{children:[(0,o.jsx)(d.thead,{children:(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.th,{}),(0,o.jsx)(d.th,{})]})}),(0,o.jsxs)(d.tbody,{children:[(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"N\xfamero do comando"}),(0,o.jsx)(d.td,{children:"1170"})]}),(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"Thread-seguro"}),(0,o.jsx)(d.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:d}={...(0,r.a)(),...e.components};return d?(0,o.jsx)(d,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,d,n){n.d(d,{Z:function(){return s},a:function(){return a}});var t=n(667294);let o={},r=t.createContext(o);function a(e){let d=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(d):{...d,...e}},[d,e])}function s(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:d},e.children)}}}]);