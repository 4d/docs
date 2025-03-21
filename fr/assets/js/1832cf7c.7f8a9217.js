"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60937"],{666131:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>h,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/get-field-properties","title":"GET FIELD PROPERTIES","description":"GET FIELD PROPERTIES ( ptrChp\xa0|\xa0numTable {; numChamp}; champType {; champLong {; index\xe9 {; unique {; invisible}}}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-field-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-field-properties","permalink":"/docs/fr/20-R7/commands/get-field-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-field-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-field-properties","title":"GET FIELD PROPERTIES","slug":"/commands/get-field-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET FIELD ENTRY PROPERTIES","permalink":"/docs/fr/20-R7/commands/get-field-entry-properties"},"next":{"title":"GET MISSING TABLE NAMES","permalink":"/docs/fr/20-R7/commands/get-missing-table-names"}}'),i=s("785893"),d=s("250065");let l={id:"get-field-properties",title:"GET FIELD PROPERTIES",slug:"/commands/get-field-properties",displayed_sidebar:"docs"},t=void 0,c={},h=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GET FIELD PROPERTIES"})," ( ptrChp\xa0|\xa0numTable {; ",(0,i.jsx)(n.em,{children:"numChamp"}),"}; ",(0,i.jsx)(n.em,{children:"champType"})," {; ",(0,i.jsx)(n.em,{children:"champLong"})," {; ",(0,i.jsx)(n.em,{children:"index\xe9"})," {; ",(0,i.jsx)(n.em,{children:"unique"})," {; ",(0,i.jsx)(n.em,{children:"invisible"}),"}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ptrChp\xa0|\xa0numTable"}),(0,i.jsx)(n.td,{children:"Pointeur, Entier long"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Pointeur de champ ou Num\xe9ro de table"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"numChamp"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de champ si un num\xe9ro de table est pass\xe9 en premier param\xe8tre"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"champType"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Type de champ"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"champLong"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Longueur du champ (si alphanum\xe9rique)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"index\xe9"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Vrai = Index\xe9, Faux = Non index\xe9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"unique"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Vrai = Unique, Faux = Non unique"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"invisible"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Vrai = Invisible, Faux = Visible"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"GET FIELD PROPERTIES"})," retourne des informations sur le champ d\xe9sign\xe9 par ",(0,i.jsx)(n.em,{children:"numTable"})," et ",(0,i.jsx)(n.em,{children:"numChamp"})," ou par ",(0,i.jsx)(n.em,{children:"ptrChp"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Vous pouvez soit passer :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["les num\xe9ros de table et de champ dans ",(0,i.jsx)(n.em,{children:"numTable"})," et ",(0,i.jsx)(n.em,{children:"numChamp"})]}),"\n",(0,i.jsxs)(n.li,{children:["ou un pointeur vers le champ dans ",(0,i.jsx)(n.em,{children:"ptrChp"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Apr\xe8s l'appel :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"champType"})," retourne le type du champ. Le param\xe8tre variable ",(0,i.jsx)(n.em,{children:"champType"})," re\xe7oit l'une des valeurs pr\xe9d\xe9finies par les constantes de 4D (th\xe8me ",(0,i.jsx)(n.em,{children:"Types champs et variables"}),") :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeur"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Is alpha field"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Is BLOB"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"30"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Is Boolean"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"6"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Is date"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Is float"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"35"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Is integer"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Is integer 64 bits"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"25"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Is longint"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Is object"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"38"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Is picture"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Is real"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Is subtable"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"7"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Is text"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Is time"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"champLong"})," retourne la longueur du champ si celui-ci est de type Alpha (ce qui signifie que vous obtenez *champType=*Is alpha field). La valeur de ",(0,i.jsx)(n.em,{children:"champLong"})," n'est pas significative pour les autres types de champ."]}),"\n",(0,i.jsxs)(n.li,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"index\xe9"})," retourne Vrai si le champ est index\xe9, Faux sinon. La valeur de ",(0,i.jsx)(n.em,{children:"index\xe9"})," est significative pour les champs de type Alphanum\xe9rique, Entier, Entier long, R\xe9el, Date, Heure et Bool\xe9en."]}),"\n",(0,i.jsxs)(n.li,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"unique"})," retourne Vrai si le champ dispose de l\u2019attribut \u201CUnique\u201D, Faux sinon."]}),"\n",(0,i.jsxs)(n.li,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"invisible"})," retourne Vrai si le champ dispose de l\u2019attribut \u201CInvisible\u201D, Faux sinon. L\u2019attribut Invisible permet de masquer le champ dans les \xe9diteurs standard de 4D (\xe9tiquettes, graphes...)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsxs)(n.p,{children:["Dans l'exemple suivant, les variables ",(0,i.jsx)(n.em,{children:"vType"}),", ",(0,i.jsx)(n.em,{children:"vLong"}),", ",(0,i.jsx)(n.em,{children:"vIndex"}),", ",(0,i.jsx)(n.em,{children:"vUnique"})," et ",(0,i.jsx)(n.em,{children:"vInvisible"})," prennent pour valeur les propri\xe9t\xe9s du troisi\xe8me champ de la premi\xe8re table :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0GET FIELD PROPERTIES(1;3;vType;vLong;vIndex;vUnique;vInvisible)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsxs)(n.p,{children:["L'exemple suivant r\xe9cup\xe8re dans les variables ",(0,i.jsx)(n.em,{children:"vType"}),", ",(0,i.jsx)(n.em,{children:"vLong"}),", ",(0,i.jsx)(n.em,{children:"vIndex"}),", ",(0,i.jsx)(n.em,{children:"vUnique"})," et ",(0,i.jsx)(n.em,{children:"vInvisible"})," les propri\xe9t\xe9s du champ [Table3]Champ2 :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0GET FIELD PROPERTIES(->[Table3]Champ2;vType;vLong;vIndex;vUnique;vInvisible)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/field",children:"Field"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/field-name",children:"Field name"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-index",children:"SET INDEX"})]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"258"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return l}});var r=s(667294);let i={},d=r.createContext(i);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);