"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10280"],{452067:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/length","title":"Length","description":"Length ( cha\xeene ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/length.md","sourceDirName":"commands-legacy","slug":"/commands/length","permalink":"/docs/fr/20-R7/commands/length","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flength.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"length","title":"Length","slug":"/commands/length","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Insert string","permalink":"/docs/fr/20-R7/commands/insert-string"},"next":{"title":"Localized string","permalink":"/docs/fr/20-R7/commands/localized-string"}}'),r=t("785893"),l=t("250065");let i={id:"length",title:"Length",slug:"/commands/length",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Length"})," ( ",(0,r.jsx)(n.em,{children:"cha\xeene"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cha\xeene"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Cha\xeene dont vous voulez conna\xeetre la longueur"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nombre de caract\xe8res de cha\xeene"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Length"})," vous permet d'obtenir la longueur de ",(0,r.jsx)(n.em,{children:"laCha\xeene"}),".retourne le nombre de caract\xe8res alphanum\xe9riques contenus dans ",(0,r.jsx)(n.em,{children:"laCha\xeene"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"}),' En mode Unicode, si vous souhaitez v\xe9rifier qu\'une cha\xeene ne contient aucun caract\xe8re, y compris des caract\xe8res ignorables, vous devez utiliser le test Si(Longueur(vTexte)=0) plut\xf4t que Si(vTexte=""). En effet, si la cha\xeene contient par exemple Caractere(1) qui est un caract\xe8re ignorable, Longueur(vTexte) retourne bien 1 mais vTexte="" retourne Vrai.']}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["L'exemple suivant illustre l'utilisation de ",(0,r.jsx)(n.strong,{children:"Length"}),". Les valeurs retourn\xe9es sont assign\xe9es \xe0 la variable ",(0,r.jsx)(n.em,{children:"vR\xe9sultat"}),". Les commentaires fournissent la valeur de ",(0,r.jsx)(n.em,{children:"vR\xe9sultat"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vR\xe9sultat:=Length("Topaze")\xa0// vR\xe9sultat prend la valeur 6\n\xa0vR\xe9sultat:=Length("Citoyen")\xa0// vR\xe9sultat prend la valeur 7\n'})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"16"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);