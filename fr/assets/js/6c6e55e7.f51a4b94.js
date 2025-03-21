"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59650"],{109731:function(e,n,r){r.r(n),r.d(n,{default:()=>o,frontMatter:()=>t,metadata:()=>a,assets:()=>c,toc:()=>i,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/dom-create-xml-ref","title":"DOM Create XML Ref","description":"DOM Create XML Ref ( racine {; nameSpace} {; nSNom ; nSValeur} {; nSNom2 ; nSValeur2 ; ... ; nSNomN ; nSValeurN} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-create-xml-ref.md","sourceDirName":"commands-legacy","slug":"/commands/dom-create-xml-ref","permalink":"/docs/fr/commands/dom-create-xml-ref","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-create-xml-ref.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-create-xml-ref","title":"DOM Create XML Ref","slug":"/commands/dom-create-xml-ref","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Create XML element arrays","permalink":"/docs/fr/commands/dom-create-xml-element-arrays"},"next":{"title":"DOM EXPORT TO FILE","permalink":"/docs/fr/commands/dom-export-to-file"}}'),s=r("785893"),l=r("250065");let t={id:"dom-create-xml-ref",title:"DOM Create XML Ref",slug:"/commands/dom-create-xml-ref",displayed_sidebar:"docs"},d=void 0,c={},i=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function m(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM Create XML Ref"})," ( ",(0,s.jsx)(n.em,{children:"racine"})," {; ",(0,s.jsx)(n.em,{children:"nameSpace"}),"} {; ",(0,s.jsx)(n.em,{children:"nSNom"})," ; ",(0,s.jsx)(n.em,{children:"nSValeur"}),"} {; ",(0,s.jsx)(n.em,{children:"nSNom2"})," ; ",(0,s.jsx)(n.em,{children:"nSValeur2"})," ; ... ; ",(0,s.jsx)(n.em,{children:"nSNomN"})," ; ",(0,s.jsx)(n.em,{children:"nSValeurN"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"racine"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom de l\u2019\xe9l\xe9ment racine"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nameSpace"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Valeur de l\u2019espace de nommage (Namespace)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nSNom"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom d\u2019espace de nommage"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nSValeur"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Valeur d\u2019espace de nommage"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"R\xe9f\xe9rence de l\u2019\xe9l\xe9ment XML racine"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"DOM Create XML Ref"})," cr\xe9e un arbre XML vide en m\xe9moire et retourne sa r\xe9f\xe9rence."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"racine"})," le nom de l\u2019\xe9l\xe9ment racine de l\u2019arbre XML."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans le param\xe8tre facultatif ",(0,s.jsx)(n.em,{children:"nameSpace"})," la d\xe9claration de la valeur de l\u2019espace de nommage (namespace) de l\u2019arbre (par exemple \u201C",(0,s.jsx)(n.a,{href:"http://www.4d.com%E2%80%9D",children:"http://www.4d.com\u201D"}),").",(0,s.jsx)(n.br,{}),"\nA noter qu'il est possible de pr\xe9fixer le param\xe8tre ",(0,s.jsx)(n.em,{children:"racine"})," avec le nom de l\u2019espace de nommage, suivi de ",(0,s.jsx)(n.em,{children:":"})," (par exemple \u201CMonNameSpace:MaRacine\u201D). Dans ce cas, le param\xe8tre ",(0,s.jsx)(n.em,{children:"nameSpace"})," pr\xe9cisant la valeur de l\u2019espace de nommage est obligatoire."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," L\u2019espace de nommage (namespace) est une cha\xeene de caract\xe8res permettant de garantir l\u2019unicit\xe9 des noms de variables XML. En g\xe9n\xe9ral, un URL du type ",(0,s.jsx)(n.a,{href:"http://www.monsite.com/monurl",children:"http://www.monsite.com/monurl"})," est utilis\xe9. Il n\u2019est pas n\xe9cessaire que l\u2019URL soit valide sur le site, il faut juste qu\u2019il soit unique."]}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez d\xe9clarer un ou plusieurs espace(s) de nommage suppl\xe9mentaire(s) dans l\u2019arbre XML g\xe9n\xe9r\xe9, \xe0 l\u2019aide de couples ",(0,s.jsx)(n.em,{children:"nSNom / nSValeur"}),". Vous pouvez passer autant de couples nom / valeur d\u2019espace de nommage que vous voulez."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important :"})," N'oubliez pas d'appeler la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/dom-close-xml",children:"DOM CLOSE XML"})," afin de lib\xe9rer la m\xe9moire lorsque vous avez termin\xe9 d'utiliser l'arbre XML."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:"Cr\xe9ation d\u2019un arbre XML simple :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var vRefElem : Text\n\xa0vRefElem:=DOM Create XML Ref("MaRacine")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Ce code produit le r\xe9sultat suivant :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8" standalone="no" ?> \n<MaRacine/>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:"Cr\xe9ation d\u2019un arbre XML avec un espace de nommage :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var vRefElem : Text\n\xa0$Racine:="MonNameSpace:MaRacine"\n\xa0$Namespace:="http://www.4D.com/tech/namespace"\n\xa0vRefElem:=DOM Create XML Ref($Racine;$Namespace)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Ce code produit le r\xe9sultat suivant :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<MonNameSpace:MaRacine xmlns:MonNameSpace="http://www.4D.com/tech/namespace"/>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,s.jsx)(n.p,{children:"Cr\xe9ation d\u2019un arbre XML avec plusieurs espaces de nommage :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var vRefElem : Text\n\xa0var $aNSNom1;$aNSNom2;$aNSValeur1;$aNSValeur2 : Text\n\xa0$Racine:="MonNameSpace:MaRacine"\n\xa0$Namespace:="http://www.4D.com/tech/namespace"\n\xa0$aNSNom1:="NSNom1"\n\xa0$aNSNom2:="NSNom2"\n\xa0$aNSValeur1:="http://www.4D.com/Prod/namespace"\n\xa0$aNSValeur2:="http://www.4D.com/Mkt/namespace"\n\xa0vRefElem:=DOM Create XML Ref($Racine;$Namespace;$aNSNom1;$aNSValeur1;$aNSNom2;$aNSValeur2)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Ce code produit le r\xe9sultat suivant :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<MonNameSpace:MaRacine xmlns:MonNameSpace="http://www.4D.com/tech/nameSpace"\nNSNom1="http://www.4D.com/Prod/namespace"\nNSNom2="http://www.4D.com/Mkt/namespace"/>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,s.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/dom-close-xml",children:"DOM CLOSE XML"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/dom-set-xml-declaration",children:"DOM SET XML DECLARATION"})]}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"861"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifie les variables"}),(0,s.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return t}});var a=r(667294);let s={},l=a.createContext(s);function t(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);