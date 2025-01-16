"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83638"],{270334:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/ob-is-defined","title":"OB Is defined","description":"OB Is defined ( objet {; propri\xe9t\xe9} ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/ob-is-defined.md","sourceDirName":"commands-legacy","slug":"/commands/ob-is-defined","permalink":"/docs/fr/commands/ob-is-defined","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-is-defined.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ob-is-defined","title":"OB Is defined","slug":"/commands/ob-is-defined","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Instance of","permalink":"/docs/fr/commands/ob-instance-of"},"next":{"title":"OB Is empty","permalink":"/docs/fr/commands/ob-is-empty"}}'),t=i("785893"),d=i("250065");let r={id:"ob-is-defined",title:"OB Is defined",slug:"/commands/ob-is-defined",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OB Is defined"})," ( ",(0,t.jsx)(n.em,{children:"objet"})," {; ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"}),"} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"Object, Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objet structur\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"propri\xe9t\xe9"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si pass\xe9 = propri\xe9t\xe9 \xe0 v\xe9rifier, si omis = v\xe9rifier l\u2019objet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsxs)(n.td,{children:["Si propri\xe9t\xe9 omis : Vrai si objet est d\xe9fini, sinon Faux.",(0,t.jsx)(n.br,{}),"Si propri\xe9t\xe9 pass\xe9 : Vrai si propri\xe9t\xe9 est d\xe9finie, sinon Faux"]})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"OB Is defined"})," retourne ",(0,t.jsx)(n.strong,{children:"Vrai"})," si ",(0,t.jsx)(n.em,{children:"objet"})," ou ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," est d\xe9fini, et ",(0,t.jsx)(n.strong,{children:"Faux"})," sinon.doit avoir \xe9t\xe9 cr\xe9\xe9 via la commande ",(0,t.jsx)(n.em,{children:"C_OBJECT"})," ou d\xe9signer un champ objet 4D."]}),"\n",(0,t.jsxs)(n.p,{children:["Par d\xe9faut, si vous omettez le param\xe8tre ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"}),", la commande v\xe9rifie que ",(0,t.jsx)(n.em,{children:"objet"})," est d\xe9fini. Un objet est d\xe9fini si son contenu a \xe9t\xe9 initialis\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Un objet peut \xeatre d\xe9fini mais vide. Pour savoir si un objet est ind\xe9fini ou vide, utilisez la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/ob-is-empty",children:"OB Is empty"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez le param\xe8tre ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"}),", la commande v\xe9rifie si cette propri\xe9t\xe9 existe dans ",(0,t.jsx)(n.em,{children:"objet"}),". Attention, le param\xe8tre ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," tient compte des majuscules/minuscules."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Syntaxe testant l\u2019initialisation d\u2019un objet :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $objet : Object\n\xa0$def:=OB Is defined($objet)\xa0//$def=faux car $objet n\u2019est pas initialis\xe9\n\xa0\n\xa0OB SET($objet;"nom";"Martin")\n\xa0OB REMOVE($objet;"nom")\n\xa0$def2:=OB Is defined($objet)\xa0//$def2=vrai car $objet est vide {} mais a \xe9t\xe9 initialis\xe9\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Test de l\u2019existence d\u2019une propri\xe9t\xe9 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0OB SET($ref;"nom";"smith";"age";42)\n\xa0\xa0\xa0\xa0\xa0//...\n\xa0If(OB Is defined($ref;"age"))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0//...\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.p,{children:"Ce test \xe9quivaut \xe0 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0If(OB Get type($Objet;"nom")#Is undefined)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/ob-is-empty",children:"OB Is empty"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1231"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return r}});var s=i(667294);let t={},d=s.createContext(t);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);