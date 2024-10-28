"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10201],{125221:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=t(474848),r=t(28453);const s={id:"no-default-table",title:"NO DEFAULT TABLE",slug:"/commands/no-default-table",displayed_sidebar:"docs"},l=void 0,o={id:"commands-legacy/no-default-table",title:"NO DEFAULT TABLE",description:"NO DEFAULT TABLE",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/no-default-table.md",sourceDirName:"commands-legacy",slug:"/commands/no-default-table",permalink:"/docs/fr/commands/no-default-table",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fno-default-table.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"no-default-table",title:"NO DEFAULT TABLE",slug:"/commands/no-default-table",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"DEFAULT TABLE",permalink:"/docs/fr/commands/default-table"},next:{title:"ACTIVITY SNAPSHOT",permalink:"/docs/fr/commands/activity-snapshot"}},i={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function m(e){const a={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"NO DEFAULT TABLE"})}),"\n\n\n\n\n\n\n\n",(0,n.jsx)(a.table,{children:(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Ne requiert pas de param\xe8tre"}),(0,n.jsx)(a.th,{})]})})}),"\n",(0,n.jsx)(a.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(a.p,{children:["La commande ",(0,n.jsx)(a.strong,{children:"NO DEFAULT TABLE"})," permet d\u2019annuler l\u2019effet de la commande ",(0,n.jsx)(a.a,{href:"/docs/fr/commands/default-table",children:"DEFAULT TABLE"}),". Apr\xe8s l\u2019ex\xe9cution de cette commande, il n\u2019y a plus de table par d\xe9faut d\xe9finie pour le process.",(0,n.jsx)(a.br,{}),"\nSi la commande ",(0,n.jsx)(a.a,{href:"/docs/fr/commands/default-table",children:"DEFAULT TABLE"})," n\u2019avait pas \xe9t\xe9 appel\xe9e au pr\xe9alable, cette commande ne fait rien."]}),"\n",(0,n.jsxs)(a.p,{children:["Cette commande est li\xe9e \xe0 l'utilisation de formulaires projets (formulaires non li\xe9s \xe0 des tables) : la plupart des commandes relatives aux formulaires (hors formulaires utilisateurs) acceptent un param\xe8tre facultatif de type table comme premier param\xe8tre. C\u2019est par exemple le cas des commandes ",(0,n.jsx)(a.em,{children:"_o_FORM GET PARAMETER"}),", ",(0,n.jsx)(a.a,{href:"/docs/fr/commands/open-form-window",children:"Open form window"})," ou ",(0,n.jsx)(a.a,{href:"/docs/fr/commands/dialog",children:"DIALOG"}),". Comme un formulaire projet et un formulaire table peuvent avoir le m\xeame nom, ce param\xe8tre permet de d\xe9terminer le formulaire \xe0 utiliser : passez le param\xe8tre lorsque vous souhaitez adresser un formulaire table et ne le passez pas dans le cas d\u2019un formulaire projet.",(0,n.jsx)(a.br,{}),"\nDans une base contenant un formulaire projet nomm\xe9 \u201cLeForm\u201d et un formulaire table du m\xeame nom pour la table [Table1] :"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0DIALOG([Table1];"LeForm")\xa0//4D utilise le formulaire table\n\xa0DIALOG("LeForm")\xa0//4D utilise le formulaire projet\n'})}),"\n",(0,n.jsxs)(a.p,{children:["Ce principe est toutefois caduc lorsque la commande ",(0,n.jsx)(a.a,{href:"/docs/fr/commands/default-table",children:"DEFAULT TABLE"})," a \xe9t\xe9 ex\xe9cut\xe9e et que la base contient un formulaire projet et un formulaire table du m\xeame nom. En effet, dans ce cas 4D utilisera le formulaire table de la table par d\xe9faut, m\xeame si le param\xe8tre ",(0,n.jsx)(a.em,{children:"laTable"})," n\u2019est pas pass\xe9. Dans ce cas, pour permettre l\u2019utilisation de formulaires projet, il suffit d\u2019ex\xe9cuter la commande ",(0,n.jsx)(a.strong,{children:"NO DEFAULT TABLE"}),"."]}),"\n",(0,n.jsx)(a.h4,{id:"exemple",children:"Exemple"}),"\n",(0,n.jsx)(a.p,{children:"Dans une base contenant un formulaire projet nomm\xe9 \u201cLeForm\u201d et un formulaire table du m\xeame nom pour la table [Table1] :"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0DEFAULT TABLE([Table1])\n\xa0DIALOG("LeForm")\xa0//4D utilise le formulaire table\n\xa0NO DEFAULT TABLE\n\xa0DIALOG("LeForm")\xa0//4D utilise le formulaire projet\n'})}),"\n",(0,n.jsx)(a.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"/docs/fr/commands/default-table",children:"DEFAULT TABLE"})})]})}function c(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>l,x:()=>o});var n=t(296540);const r={},s=n.createContext(r);function l(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);