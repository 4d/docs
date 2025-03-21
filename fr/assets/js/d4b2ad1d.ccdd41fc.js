"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78063"],{516008:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-table-theme","title":"VP Get table theme","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-get-table-theme.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-table-theme","permalink":"/docs/fr/ViewPro/commands/vp-get-table-theme","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-table-theme.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-get-table-theme","title":"VP Get table theme"},"sidebar":"docs","previous":{"title":"VP Get table range","permalink":"/docs/fr/ViewPro/commands/vp-get-table-range"},"next":{"title":"VP Get tables","permalink":"/docs/fr/ViewPro/commands/vp-get-tables"}}'),r=n("785893"),l=n("250065");let d={id:"vp-get-table-theme",title:"VP Get table theme"},a=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function o(e){let t={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.details,{children:[(0,r.jsx)(t.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Release"}),(0,r.jsx)(t.th,{children:"Modifications"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"19 R8"}),(0,r.jsx)(t.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"VP Get table theme"})," ( ",(0,r.jsx)(t.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(t.em,{children:"tableName"})," : Text {; ",(0,r.jsx)(t.em,{children:"sheet"})," : Integer } ) : cs.ViewPro.TableTheme"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param\xe8tres"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vpAreaName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tableName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Nom de table"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sheet"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"R\xe9sultat"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/fr/ViewPro/classes#tabletheme",children:"cs.ViewPro.TableTheme"})}),(0,r.jsx)(t.td,{children:"<-"}),(0,r.jsx)(t.td,{children:"Valeurs des propri\xe9t\xe9s du th\xe8me de la table actuelle"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["La commande ",(0,r.jsx)(t.code,{children:"VP Get table theme"})," retourne les valeurs des propri\xe9t\xe9s du th\xe8me actuel de la table ",(0,r.jsx)(t.em,{children:"tableName"}),". Un th\xe8me de table peut \xeatre d\xe9fini \xe0 l'aide des commandes ",(0,r.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-create-table",children:(0,r.jsx)(t.code,{children:"VP CREATE TABLE"})})," ou ",(0,r.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-set-table-theme",children:(0,r.jsx)(t.code,{children:"VP SET TABLE THEME"})}),", ou via l'interface."]}),"\n",(0,r.jsxs)(t.p,{children:["Dans ",(0,r.jsx)(t.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro et dans ",(0,r.jsx)(t.em,{children:"tableName"}),", le nom de la table."]}),"\n",(0,r.jsxs)(t.p,{children:["Dans ",(0,r.jsx)(t.em,{children:"sheet"}),", passez le num\xe9ro de la page cible. Si aucun num\xe9ro n'est sp\xe9cifi\xe9 ou si vous passez -1, la commande s'applique \xe0 la feuille courante."]}),"\n",(0,r.jsxs)(t.p,{children:["La commande retourne un objet de la classe ",(0,r.jsx)(t.a,{href:"/docs/fr/ViewPro/classes#tabletheme",children:"cs.ViewPro.TableTheme"})," avec des propri\xe9t\xe9s et des valeurs qui d\xe9crivent le th\xe8me de la table courante."]}),"\n",(0,r.jsx)(t.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(t.p,{children:["La commande retourne un objet de ",(0,r.jsx)(t.code,{children:"th\xe8me"})," complet m\xeame si un nom de ",(0,r.jsx)(t.a,{href:"https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes",children:"th\xe8me natif SpreadJS"})," a \xe9t\xe9 utilis\xe9 pour d\xe9finir le th\xe8me."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'var $param : cs.ViewPro.TableTheme\n$param:=cs.ViewPro.TableTheme.new()\n$param.theme:="dark10" //utilisation d\'un nom de th\xe8me natif\n\nVP SET TABLE THEME("ViewProArea"; "ContextTable"; $param)\n$vTheme:=VP Get table theme("ViewProArea"; "ContextTable")\n$result:=Asserted(Value type($vTheme.theme)=Is object) //vrai\n'})}),"\n",(0,r.jsx)(t.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-set-table-theme",children:"VP SET TABLE THEME"})]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return d}});var s=n(667294);let r={},l=s.createContext(r);function d(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);