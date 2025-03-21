"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35210"],{973919:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>a,metadata:()=>c,assets:()=>i,toc:()=>l,contentTitle:()=>d});var c=JSON.parse('{"id":"commands-legacy/character-code","title":"Character code","description":"Character code ( unCaract\xe8re ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/character-code.md","sourceDirName":"commands-legacy","slug":"/commands/character-code","permalink":"/docs/fr/20-R7/commands/character-code","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcharacter-code.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"character-code","title":"Character code","slug":"/commands/character-code","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Char","permalink":"/docs/fr/20-R7/commands/char"},"next":{"title":"Compare strings","permalink":"/docs/fr/20-R7/commands/compare-strings"}}'),s=n("785893"),t=n("250065");let a={id:"character-code",title:"Character code",slug:"/commands/character-code",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Character code"})," ( ",(0,s.jsx)(r.em,{children:"unCaract\xe8re"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Param\xe8tre"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"unCaract\xe8re"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Caract\xe8re dont vous voulez obtenir le code"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"R\xe9sultat"}),(0,s.jsx)(r.td,{children:"Integer"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Code du caract\xe8re"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["La commande ",(0,s.jsx)(r.strong,{children:"Character code"})," retourne le code Unicode UTF-16 (compris entre 1 et 65535) de ",(0,s.jsx)(r.em,{children:"unCaract\xe8re"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Si la cha\xeene ",(0,s.jsx)(r.em,{children:"unCaract\xe8re"})," comporte plus d'un caract\xe8re, ",(0,s.jsx)(r.strong,{children:"Character code"})," retourne uniquement le code du premier caract\xe8re."]}),"\n",(0,s.jsxs)(r.p,{children:["La fonction ",(0,s.jsx)(r.strong,{children:"Character code"})," est l'inverse de ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R7/commands/char",children:"Char"}),". Elle retourne le caract\xe8re d\xe9sign\xe9 par un code UTF-16."]}),"\n",(0,s.jsx)(r.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsxs)(r.p,{children:["Les caract\xe8res majuscules et minuscules ne sont pas diff\xe9renci\xe9s lors d'une comparaison ou d'une recherche. Vous pouvez utiliser la fonction Code de caractere si vous souhaitez \xe9tablir une distinction entre les caract\xe8res majuscules et les minuscules.",(0,s.jsx)(r.br,{}),"\nEn effet, cette ligne retourne VRAI :"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0("A"="a")\n'})}),"\n",(0,s.jsx)(r.p,{children:"En revanche, cette ligne retourne FAUX :"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0(Character code("A")=Character code("a"))\n'})}),"\n",(0,s.jsx)(r.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsxs)(r.p,{children:["L'exemple suivant retourne le code du premier caract\xe8re de la cha\xeene ",(0,s.jsx)(r.em,{children:'"ABC"'})," :"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0R\xe9cupCode:=Character code("ABC")\xa0// R\xe9cupCode prend la valeur 65, le code de caract\xe8re de A\n'})}),"\n",(0,s.jsx)(r.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,s.jsx)(r.p,{children:"Le code suivant :"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0For($vlCar;1;Length(vtText))\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(vtText[[$vlCar]]=Char(Carriage return))\n\xa0\xa0// Faire quelque chose\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(vtText[[$vlCar]]=Char(Tab))\n\xa0\xa0// Faire autre chose\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0End case\n\xa0End for\n"})}),"\n",(0,s.jsx)(r.p,{children:"... lorsqu'il est utilis\xe9 de nombreuses fois avec des textes de taille importante, s'ex\xe9cutera plus vite, une fois compil\xe9, s'il est \xe9crit ainsi :"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0For($vlCar;1;Length(vtText))\n\xa0\xa0\xa0\xa0$vlCode:=Character code(vtText[[$vlCar]])\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlCode=Carriage return)\n\xa0\xa0// Faire quelque chose\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlCode=Tab)\n\xa0\xa0// Faire autre chose\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0End case\n\xa0End for\n"})}),"\n",(0,s.jsx)(r.p,{children:"... et ce, pour deux raisons principales : il ne r\xe9f\xe9rence un caract\xe8re qu'une seule fois par it\xe9ration, et compare des entiers longs et non des cha\xeenes de caract\xe8res lorsqu'il teste la pr\xe9sence de retours chariot et de tabulations. Nous vous conseillons d'employer cette technique lorsque vous travaillez avec des caract\xe8res standard tels que des Retours chariot et des Tabulations."}),"\n",(0,s.jsx)(r.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/fr/20-R7/commands/char",children:"Char"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.em,{children:"Symboles d'indice de cha\xeene"})]}),"\n",(0,s.jsx)(r.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(r.td,{children:"91"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread safe"}),(0,s.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return a}});var c=n(667294);let s={},t=c.createContext(s);function a(e){let r=c.useContext(t);return c.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),c.createElement(t.Provider,{value:r},e.children)}}}]);