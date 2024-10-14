"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90095],{692076:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=t(474848),o=t(28453);const s={id:"vp-export-to-object",title:"VP Export to object"},i=void 0,d={id:"ViewPro/commands/vp-export-to-object",title:"VP Export to object",description:"VP Export to object ( vpAreaName Object} ) : Object",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-export-to-object.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-export-to-object",permalink:"/docs/fr/ViewPro/commands/vp-export-to-object",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-export-to-object.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-export-to-object",title:"VP Export to object"},sidebar:"docs",previous:{title:"VP EXPORT TO BLOB",permalink:"/docs/fr/ViewPro/commands/vp-export-to-blob"},next:{title:"F",permalink:"/docs/fr/commands/F"}},c={},l=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Export to object"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,r.jsx)(n.em,{children:"options"})," : Object} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Options d'export"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objet 4D View Pro"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.code,{children:"VP Export to object"}),"  retourne l'objet 4D View Pro attach\xe9 \xe0 la zone 4D View Pro ",(0,r.jsx)(n.em,{children:"vpAreaName"}),". Vous pouvez utiliser cette commande par exemple pour stocker la zone 4D View Pro dans un champ objet de la base de donn\xe9es 4D."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"options"}),", vous pouvez passer les options d'exportation suivantes, si n\xe9cessaire :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeFormatInfo"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["True (d\xe9faut) pour inclure les informations de formatage, sinon False. Les informations de formatage sont utiles dans certains cas, par exemple pour un export en SVG. D'un autre c\xf4t\xe9, mettre cette propri\xe9t\xe9 \xe0 ",(0,r.jsx)(n.strong,{"x-id":"1",children:"false"})," permet de r\xe9duire la dur\xe9e de l'export."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeBindingSource"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"True (par d\xe9faut) pour exporter les valeurs du contexte de donn\xe9es courant en tant que valeurs de cellule dans l'objet export\xe9 (les contextes de donn\xe9es eux-m\xeames ne sont pas export\xe9s). Sinon Faux. La liaison de cellule est toujours export\xe9e."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Pour plus d'informations sur les objets 4D View Pro, veuillez vous r\xe9f\xe9rer au paragraphe ",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/configuring#4d-view-pro-objet",children:"Objet 4D View Pro"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:'Vous souhaitez lire la propri\xe9t\xe9 "version" de la zone 4D View Pro courante :'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $vpAreaObj : Object\nvar $vpVersion : Number\n$vpAreaObj:=VP Export to object("vpArea")\n // $vpVersion:=OB Get($vpAreaObj;"version")\n$vpVersion:=$vpAreaObj.version\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez exporter la zone, en excluant les informations de formatage :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $vpObj : Object\n$vpObj:=VP Export to object("vpArea";New object("includeFormatInfo";False))\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-convert-to-picture",children:"VP Convert to picture"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-import-from-object",children:"VP IMPORT FROM OBJECT"})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(296540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);