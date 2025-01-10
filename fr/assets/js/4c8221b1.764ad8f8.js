"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28911"],{54814:function(e,t,s){s.r(t),s.d(t,{default:()=>u,frontMatter:()=>d,metadata:()=>n,assets:()=>a,toc:()=>o,contentTitle:()=>r});var n=JSON.parse('{"id":"commands-legacy/list-of-style-sheets","title":"LIST OF STYLE SHEETS","description":"LIST OF STYLE SHEETS ( tabFeuillesStyle )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/list-of-style-sheets.md","sourceDirName":"commands-legacy","slug":"/commands/list-of-style-sheets","permalink":"/docs/fr/commands/list-of-style-sheets","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flist-of-style-sheets.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"list-of-style-sheets","title":"LIST OF STYLE SHEETS","slug":"/commands/list-of-style-sheets","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET STYLE SHEET INFO","permalink":"/docs/fr/commands/get-style-sheet-info"},"next":{"title":"OBJECT DUPLICATE","permalink":"/docs/fr/commands/object-duplicate"}}'),i=s("785893"),l=s("250065");let d={id:"list-of-style-sheets",title:"LIST OF STYLE SHEETS",slug:"/commands/list-of-style-sheets",displayed_sidebar:"docs"},r=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Note de compatibilit\xe9",id:"note-de-compatibilit\xe9",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"LIST OF STYLE SHEETS"})," ( ",(0,i.jsx)(t.em,{children:"tabFeuillesStyle"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Param\xe8tre"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tabFeuillesStyle"}),(0,i.jsx)(t.td,{children:"Text array"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Noms des feuilles de style d\xe9finies dans l\u2019application"})]})})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["La commande ",(0,i.jsx)(t.strong,{children:"LIST OF STYLE SHEETS"})," retourne la liste des feuilles de style de l\u2019application dans le tableau ",(0,i.jsx)(t.em,{children:"tabFeuillesStyle"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["S\u2019il n\u2019a pas \xe9t\xe9 d\xe9fini auparavant, le tableau texte ",(0,i.jsx)(t.em,{children:"tabFeuillesStyle"})," est cr\xe9\xe9 par la commande. Il est automatiquement dimensionn\xe9 en fonction du nombre de feuilles de style d\xe9finies."]}),"\n",(0,i.jsx)(t.p,{children:'A l\u2019issue de l\u2019ex\xe9cution de la commande, chaque \xe9l\xe9ment du tableau contient un nom de feuille de style. Les noms sont tri\xe9s par ordre alphab\xe9tique, comme dans l\u2019\xe9diteur de feuilles de style. Le premier \xe9l\xe9ment du tableau contient syst\xe9matiquement "__automatic__", qui repr\xe9sente la feuille de style "Automatique".'}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note :"}),' Pour des raisons de compatibilit\xe9, les feuilles de style automatiques "__automatic_main_text__" et "__automatic_additional_text__" ne sont pas retourn\xe9es par cette commande. Cependant, elles sont toujours disponibles dans les formulaires.']}),"\n",(0,i.jsx)(t.h5,{id:"note-de-compatibilit\xe9",children:"Note de compatibilit\xe9"}),"\n",(0,i.jsxs)(t.p,{children:["Cette commande ne peut \xeatre utilis\xe9e que dans les ",(0,i.jsx)(t.strong,{children:"bases de donn\xe9es binaires"}),". Dans ",(0,i.jsx)(t.strong,{children:"l'architecture projet"}),", le tableau n'est pas rempli."]}),"\n",(0,i.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(t.p,{children:"Dans votre application, les feuilles de style suivantes sont d\xe9finies :"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(433360).Z+"",width:"778",height:"198"})}),"\n",(0,i.jsx)(t.p,{children:"Si vous ex\xe9cutez le code suivant :"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\xa0LIST OF STYLE SHEETS($tTtabstyles)\n\xa0\xa0\xa0\xa0\xa0//$tTtabstyles{1} contient "__automatic__"\n\xa0\xa0\xa0\xa0\xa0//$tTtabstyles{2} contient "Boutons"\n\xa0\xa0\xa0\xa0\xa0//$tTtabstyles{3} contient "Champs_saisie"\n\xa0\xa0\xa0\xa0\xa0//$tTtabstyles{4} contient "default"\n\xa0\xa0\xa0\xa0\xa0//$tTtabstyles{5} contient "Libell\xe9s"\n\xa0\xa0\xa0\xa0\xa0//$tTtabstyles{6} contient "Variables"\n'})}),"\n",(0,i.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/fr/commands/get-style-sheet-info",children:"GET STYLE SHEET INFO"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/fr/commands/object-set-style-sheet",children:"OBJECT SET STYLE SHEET"})]}),"\n",(0,i.jsx)(t.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(t.td,{children:"1255"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},433360:function(e,t,s){s.d(t,{Z:function(){return n}});let n=s.p+"assets/images/pict1206954.fr-0d6e4265a7286583edbf4ce176c5ebfe.png"},250065:function(e,t,s){s.d(t,{Z:function(){return r},a:function(){return d}});var n=s(667294);let i={},l=n.createContext(i);function d(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);