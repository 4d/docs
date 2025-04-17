"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2813"],{706461:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/ob-entries","title":"OB Entries","description":"OB Entries ( objeto ) : Collection","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/ob-entries.md","sourceDirName":"commands-legacy","slug":"/commands/ob-entries","permalink":"/docs/pt/commands/ob-entries","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-entries.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"ob-entries","title":"OB Entries","slug":"/commands/ob-entries","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Copy","permalink":"/docs/pt/commands/ob-copy"},"next":{"title":"OB Get","permalink":"/docs/pt/commands/ob-get"}}'),o=s("785893"),d=s("250065");let t={id:"ob-entries",title:"OB Entries",slug:"/commands/ob-entries",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OB Entries"})," ( ",(0,o.jsx)(n.em,{children:"objeto"})," ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Objeto para retornar conte\xfados"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Collection"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Cole\xe7\xe3o de objetos com propriedades key/value"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.strong,{children:"OB Entries"})," retorna uma cole\xe7\xe3o de objetos contendo os conte\xfados de ",(0,o.jsx)(n.em,{children:"objeto"})," como pares de propriedade key/value."]}),"\n",(0,o.jsx)(n.p,{children:"Cada objeto retornado cont\xe9m as propriedades abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Propriedade"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Tipo"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"key"}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{children:"nomes de propriedade enumer\xe1veis do objeto"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"value"}),(0,o.jsx)(n.td,{children:"variant"}),(0,o.jsx)(n.td,{children:"valor de propriedades enumer\xe1veis do objeto"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"S\xf3 os nomes de propriedade de primeiro-n\xedvel s\xe3o retornados (nomes de propriedade de sub-objetos n\xe3o s\xe3o retornados). A ordem de propriedades dentro das cole\xe7\xf5es retornadas segue a ordem de defini\xe7\xe3o das propriedades."}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:'Usando um objeto com um map hash (sistema key/value) oferece um acesso r\xe1pido e direto aos dados, como quando se usa um \xedndice (por exemplo se n\xf3s precis\xe1ssemos da idade de Mary, poder\xedamos escrever: $persons["Mary"])'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $individual;$persons : Object\n\xa0var $names;$ages : Collection\n\xa0\n\xa0$persons:=New object\n\xa0$persons["John"]:=42\n\xa0$persons["Andy"]:=24\n\xa0$persons["Mary"]:=30\n\xa0$persons["Paul"]:=50\n\xa0\n\xa0ALERT("The average age is "+String(OB Values($persons).average()))\n\xa0ALERT("There are "+String(OB Keys($persons).length)+" persons")\n\xa0\n\xa0$ages:=OB Entries($persons).query("value>:1";25)\n\xa0ALERT("There are "+String($ages.length)+" persons who are over 25")\n\xa0\n\xa0ALERT("Their names are: "+$ages.extract("key").join("-"))\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/commands/ob-keys",children:"OB Keys"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/ob-values",children:"OB Values"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"1720"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var r=s(667294);let o={},d=r.createContext(o);function t(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);