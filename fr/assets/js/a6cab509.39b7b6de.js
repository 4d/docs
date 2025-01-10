"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17925"],{697316:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/query-selection-by-attribute","title":"QUERY SELECTION BY ATTRIBUTE","description":"QUERY SELECTION BY ATTRIBUTE ( {;}{opConj ;} champObjet ; cheminAttribut ; opRecherche ; valeur {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/query-selection-by-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/query-selection-by-attribute","permalink":"/docs/fr/commands/query-selection-by-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-selection-by-attribute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"query-selection-by-attribute","title":"QUERY SELECTION BY ATTRIBUTE","slug":"/commands/query-selection-by-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY SELECTION","permalink":"/docs/fr/commands/query-selection"},"next":{"title":"QUERY SELECTION BY FORMULA","permalink":"/docs/fr/commands/query-selection-by-formula"}}'),s=r("785893"),i=r("250065");let c={id:"query-selection-by-attribute",title:"QUERY SELECTION BY ATTRIBUTE",slug:"/commands/query-selection-by-attribute",displayed_sidebar:"docs"},l=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," ( {",(0,s.jsx)(n.em,{children:"laTable"}),"}{;}{",(0,s.jsx)(n.em,{children:"opConj"})," ;} ",(0,s.jsx)(n.em,{children:"champObjet"})," ; ",(0,s.jsx)(n.em,{children:"cheminAttribut"})," ; ",(0,s.jsx)(n.em,{children:"opRecherche"})," ; ",(0,s.jsx)(n.em,{children:"valeur"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"laTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table dans laquelle la s\xe9lection est cr\xe9\xe9e ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"opConj"}),(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur \xe0 utiliser pour combiner plusieurs requ\xeates (le cas \xe9ch\xe9ant)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"champObjet"}),(0,s.jsx)(n.td,{children:"Field"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Champ objet dont les attributs sont \xe0 utiliser pour la recherche"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cheminAttribut"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom ou chemin d'attribut"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"opRecherche"}),(0,s.jsx)(n.td,{children:"*, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur de recherche (comparateur)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valeur"}),(0,s.jsx)(n.td,{children:"Text, Number, Date, Time"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Valeur \xe0 comparer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Attente d'ex\xe9cution de la recherche"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," fonctionne de la m\xeame fa\xe7on et ex\xe9cute les m\xeames actions que la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"}),". La diff\xe9rence entre ces deux commandes est la port\xe9e de la recherche :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})," recherche les enregistrements sur la totalit\xe9 des enregistrements de la table."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," recherche les enregistrements dans la s\xe9lection courante de la table."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," recherche des enregistrements dans ",(0,s.jsx)(n.em,{children:"laTable"}),". La commande ",(0,s.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," change la s\xe9lection courante de l",(0,s.jsx)(n.em,{children:"aTable"})," pour le process courant et le premier enregistrement de la s\xe9lection devient l'enregistrement courant."]}),"\n",(0,s.jsxs)(n.p,{children:["Pour plus d'information, voir la description de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," est utile lorsqu'une recherche ne peut pas \xeatre d\xe9finie en utilisant la combinaison de plusieurs ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})," (voire de plusieurs ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/query",children:"QUERY"}),") appel\xe9es conjointement avec le param\xe8tre *. C'est typiquement le cas lorsque vous recherchez dans une s\xe9lection courante qui ne r\xe9sulte pas d'une recherche mais d'une commande telle que ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/use-set",children:"USE SET"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez trouver les personnes \xe2g\xe9es entre 20 et 30 ans parmi les enregistrements s\xe9lectionn\xe9s par l'utilisateur :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0USE SET("UserSet")\xa0// cr\xe9e une nouvelle s\xe9lection courante\n\xa0QUERY SELECTION BY ATTRIBUTE([People];[People]OB_Info;"age";>;20;*)\n\xa0QUERY SELECTION BY ATTRIBUTE([People];&;[People]OB_Info;"age";<;30)\xa0//d\xe9clenche la recherche\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1424"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifie les variables"}),(0,s.jsx)(n.td,{children:"OK"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Change l'enregistrement courant"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Change la s\xe9lection courante"}),(0,s.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return c}});var t=r(667294);let s={},i=t.createContext(s);function c(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);