"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41211"],{580979:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/register-data-key","title":"Register data key","description":"Register data key ( phraseSecr\xe8teCour | cl\xe9Donn\xe9esCour ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/register-data-key.md","sourceDirName":"commands-legacy","slug":"/commands/register-data-key","permalink":"/docs/fr/commands/register-data-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fregister-data-key.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"register-data-key","title":"Register data key","slug":"/commands/register-data-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"New data key","permalink":"/docs/fr/commands/new-data-key"},"next":{"title":"Database Methods","permalink":"/docs/fr/category/database-methods"}}'),t=s("785893"),a=s("250065");let d={id:"register-data-key",title:"Register data key",slug:"/commands/register-data-key",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Register data key"})," ( phraseSecr\xe8teCour | cl\xe9Donn\xe9esCour ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"phraseSecr\xe8teCour | cl\xe9Donn\xe9esCour"}),(0,t.jsx)(n.td,{children:"Texte, Objet"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Phrase secr\xe8te courante (texte) ou cl\xe9 de chiffrement des donn\xe9es courante (objet)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Vrai si la cl\xe9 de chiffrement des donn\xe9es a \xe9t\xe9 ajout\xe9e avec succ\xe8s au trousseau 4D. Faux si elle \xe9tait d\xe9j\xe0 dans le trousseau 4D."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"Register data key"})," ajoute au trousseau 4D la cl\xe9 de chiffrement de donn\xe9es qui a \xe9t\xe9 pass\xe9e dans le param\xe8tre."]}),"\n",(0,t.jsxs)(n.p,{children:["Le trousseau 4D est un ensemble d'une ou plusieurs cl\xe9s de chiffrement des donn\xe9es, charg\xe9es dans la m\xe9moire, que 4D scanne automatiquement lorsqu'une cl\xe9 de donn\xe9es est requise pour chiffrer/d\xe9chiffrer un fichier de donn\xe9es. Pour plus d'informations, veuillez consulter la page ",(0,t.jsx)(n.em,{children:"Chiffrer les donn\xe9es"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez le param\xe8tre ",(0,t.jsx)(n.em,{children:"phraseSecr\xe8teCour"})," ou ",(0,t.jsx)(n.em,{children:"cl\xe9Donn\xe9esCour"}),", qui d\xe9finit la cl\xe9 de chiffrement, pour ajouter :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"phraseSecr\xe8teCour : Cha\xeene utilis\xe9e pour g\xe9n\xe9rer la cl\xe9 de chiffrement des donn\xe9es. Lorsque vous utilisez ce param\xe8tre, une cl\xe9 de chiffrement est g\xe9n\xe9r\xe9e."}),"\n",(0,t.jsxs)(n.li,{children:["cl\xe9Donn\xe9esCour : Objet (avec la propri\xe9t\xe9 ",(0,t.jsx)(n.em,{children:"encodedKey"}),") contenant la cl\xe9 de chiffrement des donn\xe9es. Cette cl\xe9 peut avoir \xe9t\xe9 g\xe9n\xe9r\xe9e \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/new-data-key",children:"New data key"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Valeur retourn\xe9e"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Vrai"})," si la cl\xe9 de chiffrement est charg\xe9e dans le trousseau 4D avec succ\xe8s."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Faux"})," si la m\xeame cl\xe9 de chiffrement \xe9tait d\xe9j\xe0 pr\xe9sente dans le trousseau 4D."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $passphrase : Text\n\xa0var $added : Boolean\n\xa0\n\xa0$passphrase:=Request("Saisissez la phrase secr\xe8te :")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$added:=Register data key($passphrase)\n\xa0\n\xa0\xa0\xa0\xa0OPEN DATA FILE("data.4DD")\xa0//Aucune cl\xe9 n\'est requise, elle se trouve dans le trousseau 4D\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/new-data-key",children:"New data key"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1638"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var r=s(667294);let t={},a=r.createContext(t);function d(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);