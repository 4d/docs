"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90030"],{786258:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/get-subrecord-key","title":"Get subrecord key","description":"Get subrecord key ( champID ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-subrecord-key.md","sourceDirName":"commands-legacy","slug":"/commands/get-subrecord-key","permalink":"/docs/fr/20-R8/commands/get-subrecord-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-subrecord-key.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-subrecord-key","title":"Get subrecord key","slug":"/commands/get-subrecord-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Sous-enregistrements","permalink":"/docs/fr/20-R8/commands/theme/Subrecords"},"next":{"title":"Documents syst\xe8me","permalink":"/docs/fr/20-R8/commands/theme/System-Documents"}}'),r=s("785893"),o=s("250065");let a={id:"get-subrecord-key",title:"Get subrecord key",slug:"/commands/get-subrecord-key",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Affecter le champ id_added_by_converter",id:"affecter-le-champ-id_added_by_converter",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Get subrecord key"})," ( ",(0,r.jsx)(n.em,{children:"champID"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"champID"}),(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:'Champ de type "Lien sous-table" ou de type "Entier long" d\u2019une ancienne relation sous-table'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Cl\xe9 interne du lien"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Get subrecord key"})," est destin\xe9e \xe0 faciliter la migration du code 4D utilisant des sous-tables converties vers le code standard de manipulation des tables.Les sous-tables ne sont plus prises en charge \xe0 compter de la version 11 de 4D. Lors de la conversion d\u2019une ancienne base, les sous-tables existantes sont automatiquement transform\xe9es en tables standard reli\xe9es aux tables d\u2019origine par un lien automatique. La sous-table devient une table \u201CN\u201D et la table d\u2019origine la table \u201C1\u201D. Dans la table 1, l\u2019ex-champ de type sous-table est transform\xe9 en champ sp\xe9cial de type \u201CLien sous-table\u201D et dans la table N, un champ sp\xe9cial, \xe9galement de type \u201CLien sous-table\u201D est ajout\xe9. Il est nomm\xe9 \u201Cid_added_by_converter\u201D."]}),"\n",(0,r.jsx)(n.p,{children:"Ce principe permet de pr\xe9server le fonctionnement des bases de donn\xe9es converties, mais il est fortement conseill\xe9 de remplacer les m\xe9canismes des sous-tables par ceux des tables standard."}),"\n",(0,r.jsxs)(n.p,{children:["La premi\xe8re \xe9tape de ce processus consiste \xe0 supprimer le lien automatique sp\xe9cial, ce qui d\xe9sactive d\xe9finitivement les m\xe9canismes h\xe9rit\xe9s des sous-tables. Cette op\xe9ration n\xe9cessite ensuite de r\xe9\xe9crire le code associ\xe9. La commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/get-subrecord-key",children:"Get subrecord key"})," accompagne cette r\xe9\xe9criture en renvoyant l\u2019identifiant interne utilis\xe9 par le lien. Elle permet de s\u2019affranchir du lien et donc de travailler avec la s\xe9lection de l\u2019ancienne sous-table, que le lien soit pr\xe9sent ou non."]}),"\n",(0,r.jsx)(n.p,{children:"Examinons par exemple la structure (convertie) suivante :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(452491).Z+"",width:"399",height:"310"})}),"\n",(0,r.jsx)(n.p,{children:"Dans 4D, le code suivant continue de fonctionner mais il doit \xeatre mis \xe0 jour :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ALL SUBRECORDS([Employ\xe9s]Enfants)\n\xa0$total:=Records in subselection([Employ\xe9s]Enfants)\n\xa0vPrenoms:=""\n\xa0For($i;1;$total)\n\xa0\xa0\xa0\xa0vPrenoms:=vPrenoms+[Employ\xe9s]Enfants\'Pr\xe9nom+" "\n\xa0\xa0\xa0\xa0NEXT SUBRECORD([Employ\xe9s]Enfants)\n\xa0End for\n'})}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez d\xe9sormais remplacer ce code par :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Employ\xe9s_Enfants];[Employ\xe9s_Enfants]id_added_by_converter=Get subrecord key([Employ\xe9s]Enfants))\n\xa0$total:=Records in selection([Employ\xe9s_Enfants])\n\xa0vPrenoms:=""\n\xa0For($i;1;$total)\n\xa0\xa0\xa0\xa0vPrenoms:=vPrenoms+[Employ\xe9s_Enfants]Pr\xe9nom+" "\n\xa0\xa0\xa0\xa0NEXT RECORD(Employ\xe9s_Enfants)\n\xa0End for\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," S\u2019il n\u2019y a pas d\u2019enregistrement courant charg\xe9 au moment de son ex\xe9cution, ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/get-subrecord-key",children:"Get subrecord key"})," retourne 0."]}),"\n",(0,r.jsx)(n.p,{children:"Le second code pr\xe9sente le double avantage d\u2019utiliser des commandes standard de 4D et de fonctionner de mani\xe8re identique, que le lien soit pr\xe9sent ou non. Lorsque vous supprimerez le lien, la commande retournera simplement la valeur cl\xe9 stock\xe9e dans le champ Entier long."}),"\n",(0,r.jsxs)(n.p,{children:["La commande accepte dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"champ_ID"})," soit un champ de type Lien sous-table (lien existant) soit de type Entier long (lien supprim\xe9). Dans tous les autres cas, une erreur est g\xe9n\xe9r\xe9e."]}),"\n",(0,r.jsx)(n.p,{children:"Ce principe permet d\u2019\xe9crire du code de transition. Lors de la derni\xe8re \xe9tape de la mise \xe0 niveau de l\u2019application, vous pourrez supprimer les appels \xe0 cette commande."}),"\n",(0,r.jsx)(n.h2,{id:"affecter-le-champ-id_added_by_converter",children:"Affecter le champ id_added_by_converter"}),"\n",(0,r.jsxs)(n.p,{children:['A compter de 4D v14 R3, vous pouvez affecter la valeur du champ "id_added_by_converter". Jusqu\'alors, cette valeur pouvait uniquement \xeatre affect\xe9e par 4D, ce qui obligeait les d\xe9veloppeurs \xe0 utiliser des commandes obsol\xe8tes telles que ',(0,r.jsx)(n.em,{children:"_o_CREATE SUBRECORD"})," pour pouvoir ajouter des enregistrements dans les sous-tables converties."]}),"\n",(0,r.jsx)(n.p,{children:"Avec cette possibilit\xe9, vous pouvez convertir vos anciennes bases comportant des sous-tables d'une mani\xe8re progressive : vous pouvez conserver le lien sp\xe9cial \"Lien sous-table\", tout en ajoutant ou en modifiant des enregistrements li\xe9s comme s'ils \xe9taient standard. Une fois que toutes vos m\xe9thodes auront \xe9t\xe9 mises \xe0 jour, vous pourrez remplacer le lien sp\xe9cial par un lien normal sans changer votre code."}),"\n",(0,r.jsx)(n.p,{children:"Par exemple, vous pouvez \xe9crire avec la structure pr\xe9c\xe9dente :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE RECORD([Employ\xe9s])\n\xa0[Employ\xe9s]Nom:="Jones"\n\xa0CREATE RECORD([Employ\xe9s_Enfants])\n\xa0[Employ\xe9s_Enfants]Pr\xe9nom:="Natacha"\n\xa0[Employ\xe9s_Enfants]DateNaissance:=!12/24/2013!\n\xa0[Employ\xe9s_Enfants]id_added_by_converter:=Get subrecord key([Employ\xe9s]Enfants)\n\xa0SAVE RECORD([Employ\xe9s_Enfants])\n\xa0SAVE RECORD([Employ\xe9s]\n'})}),"\n",(0,r.jsx)(n.p,{children:"Ce code fonctionnera indiff\xe9remment avec un lien sp\xe9cial ou standard."}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1137"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},452491:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict473713.fr-240e3deefea0227cdbe9da6ae65c3b65.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var t=s(667294);let r={},o=t.createContext(r);function a(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);