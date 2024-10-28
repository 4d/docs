"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73595],{54754:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(474848),t=n(28453);const l={id:"vp-add-stylesheet",title:"VP ADD STYLESHEET"},d=void 0,i={id:"ViewPro/commands/vp-add-stylesheet",title:"VP ADD STYLESHEET",description:"VP ADD STYLESHEET ( vpAreaName Text ; styleObj Integer } )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-add-stylesheet.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-add-stylesheet",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-add-stylesheet",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-stylesheet.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-add-stylesheet",title:"VP ADD STYLESHEET"},sidebar:"docs",previous:{title:"VP ADD SPAN",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-add-span"},next:{title:"VP All",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-all"}},o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"VP ADD STYLESHEET"})," ( ",(0,r.jsx)(s.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(s.em,{children:"styleName"})," : Text ; ",(0,r.jsx)(s.em,{children:"styleObj"})," : Object { ; ",(0,r.jsx)(s.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tres"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"vpAreaName"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"->"}),(0,r.jsx)(s.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"styleName"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"->"}),(0,r.jsx)(s.td,{children:"Nom du style"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"styleObj"}),(0,r.jsx)(s.td,{children:"Object"}),(0,r.jsx)(s.td,{children:"->"}),(0,r.jsx)(s.td,{children:"Objet d\xe9finissant les propri\xe9t\xe9s de l'attribut"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sheet"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"->"}),(0,r.jsx)(s.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.code,{children:"VP ADD STYLESHEET"})," cr\xe9e ou modifie la feuille de style ",(0,r.jsx)(s.em,{children:"styleName"})," en fonction de la combinaison des propri\xe9t\xe9s sp\xe9cifi\xe9es dans ",(0,r.jsx)(s.em,{children:"styleObj"})," dans le document courant. Si une feuille de style ayant le m\xeame nom et le m\xeame index existe d\xe9j\xe0 dans le document, cette commande l'\xe9crasera et le remplacera avec les nouvelles valeurs."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Les feuilles de style cr\xe9\xe9es par cette commande sont sauvegard\xe9es avec le document."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Dans ",(0,r.jsx)(s.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,r.jsxs)(s.p,{children:["Le param\xe8tre ",(0,r.jsx)(s.em,{children:"styleName"})," vous permet de nommer la feuille de style. Si le nom existe d\xe9j\xe0 dans le m\xeame scope, la nouvelle feuille de style remplace la feuille existante. A noter que vous pouvez utiliser le m\xeame nom pour plusieurs scopes (ci-dessous)."]}),"\n",(0,r.jsxs)(s.p,{children:["Dans ",(0,r.jsx)(s.em,{children:"styleObj"}),", d\xe9finissez les propri\xe9t\xe9s de la feuille de style (ex : police, alignement, bordures, etc.). Pour consulter la liste compl\xe8te des propri\xe9t\xe9s de style, voir ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/ViewPro/configuring#style-object-properties",children:"Propri\xe9t\xe9s des objets de style"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Vous pouvez indiquer l'endroit o\xf9 d\xe9finir la feuille de style dans le param\xe8tre optionnel ",(0,r.jsx)(s.em,{children:"sheet"})," \xe0 l'aide de l'index de la feuille (l'indexation commence \xe0 0) ou \xe0 l'aide des constantes suivantes :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"vk current sheet"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Si une feuille de style ",(0,r.jsx)(s.em,{children:"styleName"})," est d\xe9finie au niveau du workbook ainsi qu'au niveau de la feuille, le niveau de la feuille est prioritaire sur celui du workbook lorsque la feuille de style est d\xe9finie."]}),"\n",(0,r.jsxs)(s.p,{children:["Pour appliquer la feuille de style, utilisez les commandes ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})," ou ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(s.p,{children:"Le code suivant :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'$styles:=New object\n$styles.backColor:="green"\n \n//Objet Bordure de ligne\n$borders:=New object("color";"green";"style";vk line style medium dash dot)\n \n$styles.borderBottom:=$borders\n$styles.borderLeft:=$borders\n$styles.borderRight:=$borders\n$styles.borderTop:=$borders\n \nVP ADD STYLESHEET("ViewProArea";"GreenDashDotStyle";$styles)\n \n//Pour appliquer le style\nVP SET CELL STYLE(VP Cells("ViewProArea";1;1;2;2);New object("name";"GreenDashDotStyle"))\n'})}),"\n",(0,r.jsxs)(s.p,{children:["cr\xe9era et appliquera l'objet de style suivant nomm\xe9 ",(0,r.jsx)(s.em,{children:"GreenDashDotStyle"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n backColor:green,\n borderBottom:{color:green,style:10},\n borderLeft:{color:green,style:10},\n borderRight:{color:green,style:10},\n borderTop:{color:green,style:10}\n}\n"})}),"\n",(0,r.jsx)(s.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/ViewPro/configuring#style-objects--style-sheets",children:"4D View Pro Style Objects and Style Sheets"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-get-stylesheets",children:"VP Get stylesheet"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-get-stylesheet",children:"VP Get stylesheets"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-remove-stylesheet",children:"VP REMOVE STYLESHEET"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})]})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>i});var r=n(296540);const t={},l=r.createContext(t);function d(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);