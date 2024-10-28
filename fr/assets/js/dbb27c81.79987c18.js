"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69678],{986674:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(474848),r=t(28453);const i={id:"object-set-text-orientation",title:"OBJECT SET TEXT ORIENTATION",slug:"/commands/object-set-text-orientation",displayed_sidebar:"docs"},o=void 0,a={id:"commands-legacy/object-set-text-orientation",title:"OBJECT SET TEXT ORIENTATION",description:"OBJECT SET TEXT ORIENTATION ( { ;} objet ; orientation* )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-text-orientation.md",sourceDirName:"commands-legacy",slug:"/commands/object-set-text-orientation",permalink:"/docs/fr/commands/object-set-text-orientation",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-text-orientation.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"object-set-text-orientation",title:"OBJECT SET TEXT ORIENTATION",slug:"/commands/object-set-text-orientation",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OBJECT SET SUBFORM CONTAINER VALUE",permalink:"/docs/fr/commands/object-set-subform-container-value"},next:{title:"OBJECT SET THREE STATES CHECKBOX",permalink:"/docs/fr/commands/object-set-three-states-checkbox"}},d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT SET TEXT ORIENTATION"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objet"})," ; ",(0,s.jsx)(n.em,{children:"orientation"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,s.jsx)(n.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objet"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,s.jsx)(n.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"orientation"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Valeur d\u2019orientation de l\u2019objet"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"OBJECT SET TEXT ORIENTATION"})," vous permet de modifier l\u2019orientation du contenu de l\u2019objet ou des objets d\xe9sign\xe9(s) par les param\xe8tres ",(0,s.jsx)(n.em,{children:"objet"})," et ",(0,s.jsx)(n.em,{children:"*"})," pour le process courant."]}),"\n",(0,s.jsxs)(n.p,{children:['La propri\xe9t\xe9 "Orientation", accessible dans l\u2019\xe9diteur de formulaires, permet d\u2019effectuer des rotations de zones de texte de fa\xe7on permanente. A la diff\xe9rence de cette propri\xe9t\xe9, la commande ',(0,s.jsx)(n.strong,{children:"OBJECT SET TEXT ORIENTATION"})," applique la rotation au contenu de l\u2019objet mais pas \xe0 l'objet lui-m\xeame. Pour plus d\u2019informations, reportez-vous au manuel ",(0,s.jsx)(n.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,s.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,s.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement).",(0,s.jsx)(n.br,{}),"\nSeuls les textes statiques ainsi que les variables et les champs non saisissables peuvent subir une rotation. Si vous appliquez la commande \xe0 un objet ne prenant pas en charge l\u2019orientation de texte, la commande ne fait rien."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"orientation"}),' l\u2019orientation absolue que vous souhaitez affecter \xe0 l\u2019objet. Vous devez passer une des constantes suivantes, plac\xe9es dans le th\xe8me "',(0,s.jsx)(n.em,{children:"Objets de formulaire (Propri\xe9t\xe9s)"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Orientation 0\xb0"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Pas de rotation (valeur par d\xe9faut)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Orientation 180\xb0"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"180"}),(0,s.jsx)(n.td,{children:"Orientation du texte \xe0 180\xb0 dans le sens horaire"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Orientation 90\xb0 left"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"270"}),(0,s.jsx)(n.td,{children:"Orientation du texte \xe0 90\xb0 dans le sens anti-horaire"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Orientation 90\xb0 right"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"90"}),(0,s.jsx)(n.td,{children:"Orientation du texte \xe0 90\xb0 dans le sens horaire"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Seuls les angles correspondant \xe0 ces valeurs sont pris en charge. Si vous passez une autre valeur, elle sera ignor\xe9e."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez appliquer une orientation de 270\xb0 \xe0 une variable de votre formulaire :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET ENTERABLE(*;"maVar";False)\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0//obligatoire si la variable est saisissable\n\xa0\xa0OBJECT SET TEXT ORIENTATION(*;"maVar";Orientation 90\xb0 gauche)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/object-get-text-orientation",children:"OBJECT Get text orientation"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(296540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);