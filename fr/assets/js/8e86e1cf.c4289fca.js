"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67842"],{471582:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/substring","title":"Substring","description":"Substring ( source ; \xe0PartirDe {; nbCars} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/substring.md","sourceDirName":"commands-legacy","slug":"/commands/substring","permalink":"/docs/fr/commands/substring","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsubstring.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"substring","title":"Substring","slug":"/commands/substring","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"String","permalink":"/docs/fr/commands/string"},"next":{"title":"Uppercase","permalink":"/docs/fr/commands/uppercase"}}'),t=r("785893"),i=r("250065");let a={id:"substring",title:"Substring",slug:"/commands/substring",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Substring"})," ( ",(0,t.jsx)(n.em,{children:"source"})," ; \xe0PartirDe {; ",(0,t.jsx)(n.em,{children:"nbCars"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"source"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Cha\xeene de laquelle extraire une sous-cha\xeene"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xe0PartirDe"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Position du premier caract\xe8re"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nbCars"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre de caract\xe8res \xe0 extraire"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Sous-cha\xeene de source"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La fonction ",(0,t.jsx)(n.strong,{children:"Substring"})," retourne la partie de ",(0,t.jsx)(n.em,{children:"source"})," d\xe9limit\xe9e par les param\xe8tres ",(0,t.jsx)(n.em,{children:"\xe0PartirDe"})," et ",(0,t.jsx)(n.em,{children:"nbCars"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"\xe0PartirDe"})," indique le premier caract\xe8re de la cha\xeene \xe0 retourner, et ",(0,t.jsx)(n.em,{children:"nbCars"})," d\xe9finit le nombre de caract\xe8res \xe0 retourner."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"nbCars"})," n'est pas d\xe9fini ou si le total de ",(0,t.jsx)(n.em,{children:"\xe0PartirDe"})," plus ",(0,t.jsx)(n.em,{children:"nbCars"})," est sup\xe9rieur au nombre de caract\xe8res de la cha\xeene ",(0,t.jsx)(n.em,{children:"source"}),", ",(0,t.jsx)(n.strong,{children:"Substring"})," retourne tous les caract\xe8res de la cha\xeene \xe0 partir du caract\xe8re sp\xe9cifi\xe9 par ",(0,t.jsx)(n.em,{children:"\xe0PartirDe"}),". Si ",(0,t.jsx)(n.em,{children:"\xe0PartirDe"})," est sup\xe9rieur au nombre de caract\xe8res de la cha\xeene, ",(0,t.jsx)(n.strong,{children:"Substring"}),' retourne une cha\xeene vide ("").']}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Attention :"})," Si vous utilisez cette commande dans un contexte de texte multistyle, il est n\xe9cessaire de convertir les \xe9ventuels caract\xe8res de fin de ligne Windows ('\\r\\n') en caract\xe8res de fin de ligne simples ('\\r') afin que les traitements soient valides. Ce principe est li\xe9 au m\xe9canisme de normalisation des fins de lignes de 4D assurant la compatibilit\xe9 de multi-plate-forme des textes. Pour plus d'informations, reportez-vous au paragraphe ",(0,t.jsx)(n.em,{children:"Normalisation automatique des fins de lignes"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple suivant illustre l'utilisation de ",(0,t.jsx)(n.strong,{children:"Substring"}),". Les r\xe9sultats sont assign\xe9s \xe0 la variable ",(0,t.jsx)(n.em,{children:"vR\xe9sultat"}),". Les commentaires fournissent la valeur de ",(0,t.jsx)(n.em,{children:"vR\xe9sultat"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vR\xe9sultat:=Substring("08/04/62";4;2)\xa0// vR\xe9sultat prend la valeur "04"\n\xa0vR\xe9sultat:=Substring("Important";1;6)\xa0// vR\xe9sultat prend la valeur "Import"\n\xa0vR\xe9sultat:=Substring(var;2)\xa0// vR\xe9sultat retourne tous les caract\xe8res sauf le premier\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"La m\xe9thode projet suivante ajoute au tableau de type texte ou alpha, dont le pointeur est pass\xe9 en second param\xe8tre, les paragraphes tir\xe9s du texte pass\xe9 en premier param\xe8tre :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// EXTRAIRE PARAGRAPHES\n\xa0\xa0// EXTRAIRE PARAGRAPHES ( Texte ; Pointeur )\n\xa0\xa0// EXTRAIRE PARAGRAPHES ( Texte \xe0 \xe9tudier ; -> Tableau de paragraphes )\n\xa0\n#DECLARE($text : Text ; $arrParaPtr : Pointer)\xa0\n\xa0$vlElem:=Size of array($arrParaPtr->)\n\xa0Repeat\n\xa0\xa0\xa0\xa0$vlElem:=$vlElem+1\n\xa0\xa0\xa0\xa0INSERT IN ARRAY($arrParaPtr->;$vlElem)\n\xa0\xa0\xa0\xa0$vlPos:=Position(Char(Carriage return);$text)\n\xa0\xa0\xa0\xa0If($vlPos>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$arrParaPtr->{$vlElem}:=Substring($text;1;$vlPos-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$text:=Substring($text;$vlPos+1)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$arrParaPtr->{$vlElem}:=$text\n\xa0\xa0\xa0\xa0End if\n\xa0Until($text="")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/position",children:"Position"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"12"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var s=r(667294);let t={},i=s.createContext(t);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);