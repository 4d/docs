"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3381"],{681338:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/spell-add-to-user-dictionary","title":"SPELL ADD TO USER DICTIONARY","description":"SPELL ADD TO USER DICTIONARY ( mots )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/spell-add-to-user-dictionary.md","sourceDirName":"commands-legacy","slug":"/commands/spell-add-to-user-dictionary","permalink":"/docs/fr/commands/spell-add-to-user-dictionary","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-add-to-user-dictionary.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"spell-add-to-user-dictionary","title":"SPELL ADD TO USER DICTIONARY","slug":"/commands/spell-add-to-user-dictionary","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Spell Checker","permalink":"/docs/fr/category/spell-checker"},"next":{"title":"SPELL CHECK TEXT","permalink":"/docs/fr/commands/spell-check-text"}}'),r=t("785893"),i=t("250065");let d={id:"spell-add-to-user-dictionary",title:"SPELL ADD TO USER DICTIONARY",slug:"/commands/spell-add-to-user-dictionary",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SPELL ADD TO USER DICTIONARY"})," ( ",(0,r.jsx)(n.em,{children:"mots"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mots"}),(0,r.jsx)(n.td,{children:"Text, Text array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Mot ou liste de mots \xe0 ajouter au dictionnaire utilisateur"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"SPELL ADD TO USER DICTIONARY"})," permet d\u2019ajouter un ou plusieurs mot(s) au dictionnaire utilisateur courant."]}),"\n",(0,r.jsxs)(n.p,{children:["Le dictionnaire utilisateur est un dictionnaire contenant les mots ajout\xe9s par l\u2019utilisateur au dictionnaire courant. Ce dictionnaire est un fichier nomm\xe9 ",(0,r.jsx)(n.em,{children:"UserDictionaryxxx.dic"})," (ou xxx repr\xe9sente l\u2019ID du dictionnaire courant) et automatiquement cr\xe9\xe9 dans le dossier 4D courant. Il existe un dictionnaire utilisateur par dictionnaire courant utilis\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,r.jsx)(n.em,{children:"mots"})," une cha\xeene texte ou un tableau texte contenant le ou les mot(s) \xe0 ajouter dans le dictionnaire utilisateur. Si un mot est d\xe9j\xe0 pr\xe9sent dans le dictionnaire, il est ignor\xe9 par la commande."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Ajout de noms propres au dictionnaire utilisateur :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($tTwords;0)\n\xa0APPEND TO ARRAY($tTwords;"4D")\n\xa0APPEND TO ARRAY($tTwords;"Wakanda")\n\xa0APPEND TO ARRAY($tTwords;"Clichy")\n\xa0SPELL ADD TO USER DICTIONARY($tTwords)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/spell-check-text",children:"SPELL CHECK TEXT"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1214"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);