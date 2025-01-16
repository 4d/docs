"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54126"],{926498:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/distinct-attribute-paths","title":"DISTINCT ATTRIBUTE PATHS","description":"DISTINCT ATTRIBUTE PATHS ( champObjet ; tabChemins )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/distinct-attribute-paths.md","sourceDirName":"commands-legacy","slug":"/commands/distinct-attribute-paths","permalink":"/docs/fr/commands/distinct-attribute-paths","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdistinct-attribute-paths.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"distinct-attribute-paths","title":"DISTINCT ATTRIBUTE PATHS","slug":"/commands/distinct-attribute-paths","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE FROM ARRAY","permalink":"/docs/fr/commands/delete-from-array"},"next":{"title":"DISTINCT ATTRIBUTE VALUES","permalink":"/docs/fr/commands/distinct-attribute-values"}}'),r=t("785893"),i=t("250065");let d={id:"distinct-attribute-paths",title:"DISTINCT ATTRIBUTE PATHS",slug:"/commands/distinct-attribute-paths",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function h(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DISTINCT ATTRIBUTE PATHS"})," ( ",(0,r.jsx)(n.em,{children:"champObjet"})," ; ",(0,r.jsx)(n.em,{children:"tabChemins"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"champObjet"}),(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Champ objet index\xe9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabChemins"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Tableau devant recevoir les chemins d'attributs du champ"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"DISTINCT ATTRIBUTE PATHS"})," retourne la liste des chemins d'attributs diff\xe9rents pr\xe9sents dans le champ objet index\xe9 pass\xe9 dans ",(0,r.jsx)(n.em,{children:"champObjet"})," et ce, pour la s\xe9lection courante de la table \xe0 laquelle le champ appartient."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous devez passer dans ",(0,r.jsx)(n.em,{children:"champObjet"})," un champ de type Objet index\xe9 ; sinon, une erreur est retourn\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["Apr\xe8s l'ex\xe9cution de la commande, la taille du tableau ",(0,r.jsx)(n.em,{children:"tabChemins"})," est \xe9gale au nombre de chemins diff\xe9rents trouv\xe9s dans la s\xe9lection. Les chemins des attributs imbriqu\xe9s sont retourn\xe9s avec la notation \xe0 points standard, par exemple \"soci\xe9t\xe9s.adresse.num\xe9ro\". Attention, gardez \xe0 l'esprit que les noms d'attributs d'objets tiennent compte de la casse des caract\xe8res."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"tabChemins"}),", la liste des chemins d'attributs distincts est retourn\xe9e dans l'ordre alphab\xe9tique (diacritique)."]}),"\n",(0,r.jsx)(n.p,{children:"La commande ne modifie pas la s\xe9lection courante ni l'enregistrement courant."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Les enregistrements pour lesquels la valeur de ",(0,r.jsx)(n.em,{children:"champObjet"})," est ind\xe9finie ne sont pas pris en compte."]}),"\n",(0,r.jsx)(n.li,{children:"Les chemins d'attributs cr\xe9\xe9s pendant une transaction sont pris en compte par la commande. Attention, ces chemins sont conserv\xe9s dans l'index du champ objet m\xeame si la transaction a \xe9t\xe9 annul\xe9e."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Votre base de donn\xe9es comporte un champ objet [Customer]full_Data avec 15 enregistrements. Le champ est index\xe9 :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(603579).Z+"",width:"892",height:"416"})}),"\n",(0,r.jsx)(n.p,{children:"Si vous ex\xe9cutez ce code :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(aTPaths;0)\n\xa0ALL RECORDS([Customer])\n\xa0DISTINCT ATTRIBUTE PATHS([Customer]full_Data;aTPaths)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Le tableau ",(0,r.jsx)(n.em,{children:"aTPaths"})," re\xe7oit les \xe9l\xe9ments suivants :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"El\xe9ment"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Valeur"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:'"age"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:'"Children"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:'"Children[]"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:'"Children[].age"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:'"Children[].Name"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:'"Children.length"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:'"client"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:'"FirstName"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"9"}),(0,r.jsx)(n.td,{children:'"LastName"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:'"Sex"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11"}),(0,r.jsx)(n.td,{children:'"telephone"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"12"}),(0,r.jsx)(n.td,{children:'"telephone[]"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"13"}),(0,r.jsx)(n.td,{children:'"telephone.length"'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"}),' "length" est une ',(0,r.jsx)(n.em,{children:"propri\xe9t\xe9 virtuelle"})," qui est disponible automatiquement pour tous les attributs de type tableau. Elle fournit la taille du tableau, c'est-\xe0-dire le nombre d'\xe9l\xe9ments, et peut \xeatre utilis\xe9e dans les requ\xeates. Pour plus d'informations, reportez-vous au paragraphe ",(0,r.jsx)(n.em,{children:"Using the .length virtual property"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/distinct-attribute-values",children:"DISTINCT ATTRIBUTE VALUES"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1395"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},603579:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict2994114.en-68a05af42526ae8a3e86ce9c6c663112.png"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);