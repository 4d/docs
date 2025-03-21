"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13804"],{207:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-table-theme","title":"VP SET TABLE THEME","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-set-table-theme.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-table-theme","permalink":"/docs/fr/ViewPro/commands/vp-set-table-theme","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-table-theme.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-table-theme","title":"VP SET TABLE THEME"},"sidebar":"docs","previous":{"title":"VP SET TABLE COLUMN ATTRIBUTES","permalink":"/docs/fr/ViewPro/commands/vp-set-table-column-attributes"},"next":{"title":"VP SET TEXT VALUE","permalink":"/docs/fr/ViewPro/commands/vp-set-text-value"}}'),s=t("785893"),l=t("250065");let i={id:"vp-set-table-theme",title:"VP SET TABLE THEME"},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function c(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Modifications"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R8"}),(0,s.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET TABLE THEME"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,s.jsx)(n.em,{children:"options"})," : cs.ViewPro.TableTheme {; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom de table"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/classes#tabletheme",children:"cs.ViewPro.TableTheme"})}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Propri\xe9t\xe9s du th\xe8me de la table \xe0 modifier"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP SET TABLE THEME"})," command modifies the current theme of the ",(0,s.jsx)(n.em,{children:"tableName"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area and in ",(0,s.jsx)(n.em,{children:"tableName"}),", the name of the table to modify."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"options"})," parameter, pass an object of the ",(0,s.jsxs)(n.a,{href:"/docs/fr/ViewPro/classes#tabletheme",children:[(0,s.jsx)(n.code,{children:"cs.ViewPro.TableTheme"})," class"]})," that contains the theme properties to modify."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans ",(0,s.jsx)(n.em,{children:"sheet"}),", passez le num\xe9ro de la page cible. Si aucun num\xe9ro n'est sp\xe9cifi\xe9 ou si vous passez -1, la commande s'applique \xe0 la feuille courante."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez d\xe9finir un th\xe8me pr\xe9d\xe9fini pour une table :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $param : cs.ViewPro.TableTheme\n$param:=cs.ViewPro.TableTheme.new()\n$param.theme:="medium2"\nVP SET TABLE THEME("ViewProArea"; "myTable"; $param)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez obtenir ce rendu de colonne altern\xe9 :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(804594).Z+"",width:"647",height:"202"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $param : cs.ViewPro.TableTheme\n$param:=cs.ViewPro.TableTheme.new()\n\n// Activer le rendu bandColumn\n$param.bandColumns:=True\n$param.bandRows:=False\n\n// Cr\xe9er l\'objet th\xe8me avec les styles d\'en-t\xeate et de colonne\n$param.theme:=cs.ViewPro.TableThemeOptions.new()\n\nvar $styleHeader; $styleColumn; $styleColumn2 : cs.ViewPro.TableStyle\n\n$styleHeader:=cs.ViewPro.TableStyle.new()\n$styleHeader.backColor:="Gold"\n$styleHeader.foreColor:="#03045E"\n$param.theme.headerRowStyle:=$styleHeader\n\n$styleColumn1:=cs.ViewPro.TableStyle.new()\n$styleColumn1.backColor:="SkyBlue"\n$styleColumn1.foreColor:="#03045E"\n$param.theme.firstColumnStripStyle:=$styleColumn1\n\n$styleColumn2:=cs.ViewPro.TableStyle.new()\n$styleColumn2.backColor:="LightCyan"\n$styleColumn2.foreColor:="#03045E"\n$param.theme.secondColumnStripStyle:=$styleColumn2\n\nVP SET TABLE THEME("ViewProArea" ; "myTable" ; $param)\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-table-theme",children:"VP Get table theme"})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},804594:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/col-bandering-f0c15f4b037ddc2207b496243af3ba28.png"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var r=t(667294);let s={},l=r.createContext(s);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);