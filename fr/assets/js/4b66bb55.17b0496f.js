"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45817"],{913127:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/replace-string","title":"Replace string","description":"Replace string ( source ; obsol\xe8te ; nouveau {; combien}{; *} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/replace-string.md","sourceDirName":"commands-legacy","slug":"/commands/replace-string","permalink":"/docs/fr/commands/replace-string","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freplace-string.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"replace-string","title":"Replace string","slug":"/commands/replace-string","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Position","permalink":"/docs/fr/commands/position"},"next":{"title":"Split string","permalink":"/docs/fr/commands/split-string"}}'),t=s("785893"),l=s("250065");let i={id:"replace-string",title:"Replace string",slug:"/commands/replace-string",displayed_sidebar:"docs"},c=void 0,a={},d=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Replace string"})," ( ",(0,t.jsx)(n.em,{children:"source"})," ; ",(0,t.jsx)(n.em,{children:"obsol\xe8te"})," ; ",(0,t.jsx)(n.em,{children:"nouveau"})," {; ",(0,t.jsx)(n.em,{children:"combien"}),"}{; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"source"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Cha\xeene de d\xe9part"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"obsol\xe8te"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Caract\xe8re(s) \xe0 remplacer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nouveau"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Cha\xeene de remplacement (si cha\xeene vide, toutes les occurrences sont effac\xe9es)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"combien"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre de remplacements \xe0 effectuer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si pass\xe9 : \xe9valuation bas\xe9e sur les codes de caract\xe8res"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Cha\xeene r\xe9sultante"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Replace string"})," retourne une cha\xeene de caract\xe8res r\xe9sultant du remplacement dans ",(0,t.jsx)(n.em,{children:"source"})," de ",(0,t.jsx)(n.em,{children:"obsol\xe8te"})," par ",(0,t.jsx)(n.em,{children:"nouveau"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"nouveau"}),' est une cha\xeene vide (""), ',(0,t.jsx)(n.strong,{children:"Replace string"})," supprime chaque occurrence de ",(0,t.jsx)(n.em,{children:"obsol\xe8te"})," dans ",(0,t.jsx)(n.em,{children:"source"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"combien"})," est sp\xe9cifi\xe9, ",(0,t.jsx)(n.strong,{children:"Replace string"})," ne remplace que le nombre d'occurrences de ",(0,t.jsx)(n.em,{children:"obsol\xe8te"})," sp\xe9cifi\xe9, \xe0 partir du premier caract\xe8re de ",(0,t.jsx)(n.em,{children:"source"}),". Si ",(0,t.jsx)(n.em,{children:"combien"})," est omis, toutes les occurrences de ",(0,t.jsx)(n.em,{children:"obsol\xe8te"})," sont remplac\xe9es."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"obsol\xe8te"})," est une cha\xeene vide, ",(0,t.jsx)(n.strong,{children:"Replace string"})," retourne ",(0,t.jsx)(n.em,{children:"source"})," inchang\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:["Par d\xe9faut, la commande effectue des comparaisons globales, tenant compte des particularit\xe9s linguistiques et des lettres pouvant s'\xe9crire avec un ou plusieurs caract\xe8res (par exemple \xe6 = ae). En revanche, elle n'est pas diacritique (a=A, a=\xe0...) et ne tient pas compte des caract\xe8res \"ignorables\" tels que les caract\xe8res dont le code est < 9 (sp\xe9cification Unicode).",(0,t.jsx)(n.br,{}),"\nPour modifier ce fonctionnement, passez l'ast\xe9risque ",(0,t.jsx)(n.em,{children:"*"})," en dernier param\xe8tre. Dans ce cas, les comparaisons sont effectu\xe9es sur la base des codes des caract\xe8res. Vous devez donc passer le param\xe8tre * :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["si vous souhaitez remplacer des caract\xe8res sp\xe9ciaux, utilis\xe9s par exemple comme d\xe9limiteurs (",(0,t.jsx)(n.strong,{children:"Caractere"}),"(1)...),"]}),"\n",(0,t.jsxs)(n.li,{children:["si le remplacement des caract\xe8res doit tenir compte de la casse et des accents (a#A, a#\xe0...).",(0,t.jsx)(n.br,{}),"\nA noter que dans ce mode, l'\xe9valuation ne g\xe8re pas les variations d'\xe9criture des mots."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Dans 4D v15 R3 et suivantes, une optimisation importante a \xe9t\xe9 apport\xe9e \xe0 l'algorithme utilis\xe9 par cette commande lorsque vous remplacez une cha\xeene par une autre de taille diff\xe9rente, quelle que soit la syntaxe utilis\xe9e. Il en r\xe9sulte une acc\xe9l\xe9ration significative des traitements dans ce contexte."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple suivant illustre l'utilisation de ",(0,t.jsx)(n.strong,{children:"Replace string"}),". Les r\xe9sultats sont affect\xe9s \xe0 la variable ",(0,t.jsx)(n.em,{children:"vR\xe9sultat"}),". Les commentaires fournissent la valeur de la variable :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vR\xe9sultat:=Replace string("Ville";"ll";"d")\xa0// vR\xe9sultat est \xe9gal \xe0 "Vide"\n\xa0vR\xe9sultat:=Replace string("Table";"b";"")\xa0// vR\xe9sultat est \xe9gal \xe0 "Tale"\n\xa0vR\xe9sultat:=Replace string(var;Char(Tab);",";*)\xa0// Remplacer toutes les tabulations par des virgules\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple suivant \xe9limine les retours chariot et les tabulations du texte contenu dans la variable ",(0,t.jsx)(n.em,{children:"vR\xe9sultat"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vR\xe9sultat:=Replace string(Replace string(vR\xe9sultat;Char(Carriage return);"";*);Char(Tab);"";*)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant illustre le r\xf4le du param\xe8tre * dans le cadre d'une \xe9valuation diacritique :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vR\xe9sultat:=Replace string("Cr\xe8me br\xfbl\xe9e";"Brulee";"caramel")\xa0//vR\xe9sultat est \xe9gal \xe0 "Cr\xe8me caramel"\n\xa0vR\xe9sultat:=Replace string("Cr\xe8me br\xfbl\xe9e";"Brulee";"caramel";*)\xa0//vR\xe9sultat est \xe9gal \xe0 "Cr\xe8me br\xfbl\xe9e"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/change-string",children:"Change string"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/delete-string",children:"Delete string"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/insert-string",children:"Insert string"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"233"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var r=s(667294);let t={},l=r.createContext(t);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);