"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19017"],{451525:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>r});var l=JSON.parse('{"id":"ViewPro/commands/vp-create-table","title":"VP CREATE TABLE","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-create-table.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-create-table","permalink":"/docs/fr/20-R6/ViewPro/commands/vp-create-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-create-table.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-create-table","title":"VP CREATE TABLE"},"sidebar":"docs","previous":{"title":"VP Copy to object","permalink":"/docs/fr/20-R6/ViewPro/commands/vp-copy-to-object"},"next":{"title":"D","permalink":"/docs/fr/20-R6/commands/D"}}'),t=s("785893"),i=s("250065");let r={id:"vp-create-table",title:"VP CREATE TABLE"},o=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function d(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Modifications"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19 R8"}),(0,t.jsxs)(n.td,{children:["Support of theme options: ",(0,t.jsx)(n.code,{children:"bandColumns"}),", ",(0,t.jsx)(n.code,{children:"bandRows"}),", ",(0,t.jsx)(n.code,{children:"highlightFirstColumn"}),", ",(0,t.jsx)(n.code,{children:"highlightLastColumn"}),", ",(0,t.jsx)(n.code,{children:"theme"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19 R7"}),(0,t.jsxs)(n.td,{children:["Support of ",(0,t.jsx)(n.code,{children:"allowAutoExpand"})," option"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19 R6"}),(0,t.jsx)(n.td,{children:"Ajout"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP CREATE TABLE"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,t.jsx)(n.em,{children:"tableName"})," : Text {; ",(0,t.jsx)(n.em,{children:"source"})," : Text} {; ",(0,t.jsx)(n.em,{children:"options"})," : cs.ViewPro.TableOptions} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objet plage"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tableName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nom de la table"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"source"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nom de la propri\xe9t\xe9 du Data context \xe0 afficher dans la table"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/classes#tableoptions",children:"cs.ViewPro.TableOptions"})}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Options suppl\xe9mentaires"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.code,{children:"VP CREATE TABLE"})," cr\xe9e une table dans la plage sp\xe9cifi\xe9e. Vous pouvez cr\xe9er une table dans une plage de cellules pour faciliter la gestion et l'analyse d'un groupe de donn\xe9es connexes. Une table contient g\xe9n\xe9ralement des donn\xe9es connexes en lignes et en colonnes, et tire parti d'un ",(0,t.jsx)(n.a,{href:"vp-set-data-context",children:"contexte de donn\xe9es"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(318145).Z+"",width:"1078",height:"324"})}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"rangeObj"}),", passez la plage de cellules o\xf9 la table sera cr\xe9\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"tableName"}),", passez un nom pour la table. Le nom doit :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\xeatre unique dans la feuille"}),"\n",(0,t.jsx)(n.li,{children:"inclure au moins 5 caract\xe8res"}),"\n",(0,t.jsx)(n.li,{children:"ne pas inclure d'espaces ou commencer par un nombre"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"source"}),", vous pouvez passer un nom de propri\xe9t\xe9 d'un [data context] (vp-set-data-context.md) pour afficher ses donn\xe9es dans le tableau. This binds the table to the data context. When the data context is updated, the data displayed in the table is updated accordingly. La propri\xe9t\xe9 ",(0,t.jsx)(n.em,{children:"source"})," doit contenir une collection d'objets et chaque \xe9l\xe9ment repr\xe9sente une ligne."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si vous ne sp\xe9cifiez pas de ",(0,t.jsx)(n.em,{children:"source"}),", la commande cr\xe9e une table vide avec la taille d\xe9finie dans ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Si la ",(0,t.jsx)(n.em,{children:"source"})," sp\xe9cifi\xe9e ne peut pas \xeatre enti\xe8rement affich\xe9e dans le document, aucune table n'est cr\xe9\xe9e."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"options"}),", passez un objet de la ",(0,t.jsxs)(n.a,{href:"/docs/fr/20-R6/ViewPro/classes#tableoptions",children:["classe",(0,t.jsx)(n.code,{children:"cs.ViewPro.TableOptions"})]})," qui contient les propri\xe9t\xe9s de la table \xe0 d\xe9finir."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans l'objet ",(0,t.jsx)(n.em,{children:"options"}),", la collection ",(0,t.jsx)(n.em,{children:"tableColumns"})," d\xe9termine la structure des colonnes de la table. La longueur de la collection ",(0,t.jsx)(n.em,{children:"tableColumns"})," doit \xeatre \xe9gale au nombre de colonnes de la plage :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Lorsque le nombre de colonnes dans ",(0,t.jsx)(n.em,{children:"rangeObj"})," d\xe9passe le nombre de colonnes dans ",(0,t.jsx)(n.em,{children:"tableColumns"}),", la table est remplie avec des colonnes vides suppl\xe9mentaires."]}),"\n",(0,t.jsxs)(n.li,{children:["Lorsque le nombre de colonnes dans ",(0,t.jsx)(n.em,{children:"rangeObj"})," est inf\xe9rieur au nombre de ",(0,t.jsx)(n.em,{children:"tableColumns"}),", le tableau affiche un nombre de colonnes correspondant au nombre de colonnes de la plage."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez une option ",(0,t.jsx)(n.em,{children:"source"})," mais pas une option ",(0,t.jsx)(n.em,{children:"tableColumn"}),", la commande g\xe9n\xe8re automatiquement des colonnes. Dans ce cas, ",(0,t.jsx)(n.em,{children:"rangeObj"})," doit \xeatre une plage de cellules. Otherwise, the first cell of the range is used. When generating columns automatically, the following rules apply:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the data passed to the command is a collection of objects, the property names are used as column titles. Par exemple :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'([{ LastName: \\"Freehafer\\", FirstName: \\"Nancy\\"},{ LastName: \\"John\\", FirstName: \\"Doe\\"})\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Ici, les titres des colonnes seraient ",(0,t.jsx)(n.code,{children:"LastName"})," et ",(0,t.jsx)(n.code,{children:"FirstName"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the data passed to the command is a collection of scalar values, it must contain a collection of subcollections:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La collection de premier niveau contient des sous-collections de valeurs. Chaque sous-collection d\xe9finit une ligne. Passez une collection vide pour sauter une ligne. The number of values in the first subcollection determines how many columns are created."}),"\n",(0,t.jsx)(n.li,{children:"The subcollections' indices are used as column titles."}),"\n",(0,t.jsxs)(n.li,{children:["Chaque sous-collection d\xe9finit les valeurs des cellules de la ligne. Les valeurs peuvent \xeatre ",(0,t.jsx)(n.code,{children:"Integer"}),", ",(0,t.jsx)(n.code,{children:"Real"}),", ",(0,t.jsx)(n.code,{children:"Boolean"}),", ",(0,t.jsx)(n.code,{children:"Text"}),", ",(0,t.jsx)(n.code,{children:"Date"}),", ",(0,t.jsx)(n.code,{children:"Null"}),", ",(0,t.jsx)(n.code,{children:"Time"})," ou ",(0,t.jsx)(n.code,{children:"Picture"}),". Une valeur ",(0,t.jsx)(n.code,{children:"Time"})," doit \xeatre un objet contenant un attribut time, comme d\xe9crit dans ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-value",children:"VP SET VALUE"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["This only works when generating columns automatically. Vous ne pouvez pas utiliser une collection de donn\xe9es scalaires avec l'option ",(0,t.jsx)(n.em,{children:"tableColumns"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Pour cr\xe9er une table en utilisant un contexte de donn\xe9es :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'// D\xe9finir un contexte de donn\xe9es\nvar $data : Object\n\n$data:=New object()\n$data.people:=New collection()\n$data.people.push(New object("firstName"; "John"; "lastName"; "Smith"; "email"; "johnsmith@gmail.com"))\n$data.people.push(New object("firstName"; "Mary"; "lastName"; "Poppins"; "email"; "marypoppins@gmail.com"))\n\n\nVP SET DATA CONTEXT("ViewProArea"; $data)\n\n// D\xe9finir les colonnes de la table\nvar $options : cs.ViewPro.TableOptions\n\n$options:=cs.ViewPro.TableOptions.new()\n$options.tableColumns:=New collection()\n$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "First name"; "dataField"; "firstName"))\n$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "Last name"; "dataField"; "lastName"))\n$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "Email"; "dataField"; "email"))\n\n// Cr\xe9er une table \xe0 partir de la collection "people"\nVP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; $options.tableColumns.length; 1); "ContextTable"; "people"; $options)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Voici le r\xe9sultat :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(318145).Z+"",width:"1078",height:"324"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-find-table",children:"VP Find table"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-get-table-column-attributes",children:"VP Get table column attributes"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-get-table-column-index",children:"VP Get table column index"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-insert-table-columns",children:"VP INSERT TABLE COLUMNS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-insert-table-rows",children:"VP INSERT TABLE ROWS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-remove-table",children:"VP REMOVE TABLE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-resize-table",children:"VP RESIZE TABLE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-data-context",children:"VP SET DATA CONTEXT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-table-theme",children:"VP SET TABLE THEME"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},318145:function(e,n,s){s.d(n,{Z:function(){return l}});let l=s.p+"assets/images/vp-create-table-58d4f5dc15eb48b9682accf08d7b8926.png"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return r}});var l=s(667294);let t={},i=l.createContext(t);function r(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);