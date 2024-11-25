"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97071"],{586141:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>d,toc:()=>A,frontMatter:()=>l});var s=JSON.parse('{"id":"commands-legacy/form-set-size","title":"FORM SET SIZE","description":"FORM SET SIZE ( {objet ;} horizontal ; vertical {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-set-size.md","sourceDirName":"commands-legacy","slug":"/commands/form-set-size","permalink":"/docs/fr/commands/form-set-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-set-size.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-set-size","title":"FORM SET SIZE","slug":"/commands/form-set-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM SET OUTPUT","permalink":"/docs/fr/commands/form-set-output"},"next":{"title":"FORM SET VERTICAL RESIZING","permalink":"/docs/fr/commands/form-set-vertical-resizing"}}'),i=r("785893"),t=r("250065");let l={id:"form-set-size",title:"FORM SET SIZE",slug:"/commands/form-set-size",displayed_sidebar:"docs"},a=void 0,d={},A=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FORM SET SIZE"})," ( {",(0,i.jsx)(n.em,{children:"objet"})," ;} ",(0,i.jsx)(n.em,{children:"horizontal"})," ; ",(0,i.jsx)(n.em,{children:"vertical"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom d\u2019objet indiquant les limites du formulaire"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"horizontal"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si * pass\xe9 : marge horizontale (pixels)Si * omis : largeur (pixels)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vertical"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si * pass\xe9 : marge verticale (pixels)Si * omis : hauteur (pixels)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u2022 Si pass\xe9, utiliser horizontal et vertical comme marges du formulaire\u2022 Si omis, utiliser horizontal et vertical comme largeur et hauteur du formulaireCe param\xe8tre ne peut pas \xeatre pass\xe9 si objet est pass\xe9"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"FORM SET SIZE"})," permet de modifier par programmation la taille du formulaire courant. La nouvelle taille est d\xe9finie pour le process courant, elle n\u2019est pas stock\xe9e avec le formulaire."]}),"\n",(0,i.jsx)(n.p,{children:"Comme en mode D\xe9veloppement, cette commande permet de d\xe9finir la taille d\u2019un formulaire de trois mani\xe8res :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"automatiquement \u2014 4D d\xe9termine la taille du formulaire sur le principe que tous les objets doivent \xeatre visibles \u2014 en ajoutant \xe9ventuellement une marge horizontale et une marge verticale,"}),"\n",(0,i.jsx)(n.li,{children:"sur la base de l\u2019emplacement d\u2019un objet du formulaire auquel s\u2019ajoutent \xe9ventuellement une marge horizontale et une marge verticale,"}),"\n",(0,i.jsxs)(n.li,{children:["en saisissant des dimensions \u201Cabsolues\u201D (largeur et hauteur).",(0,i.jsx)(n.br,{}),"\nPour plus d\u2019informations sur les possibilit\xe9s de dimensionnement des formulaires, reportez-vous au manuel Mode D\xe9veloppement de 4D."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Taille automatique"}),(0,i.jsx)(n.br,{}),"\nPour que le formulaire ait une taille automatique, vous devez utiliser la syntaxe suivante :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0FORM SET SIZE(horizontal;vertical;*)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Dans ce cas, vous devez passer dans ",(0,i.jsx)(n.em,{children:"horizontal"})," et ",(0,i.jsx)(n.em,{children:"vertical"})," les marges (en pixels) que vous souhaitez ajouter \xe0 droite et en bas du formulaire."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Taille bas\xe9e sur un objet"}),(0,i.jsx)(n.br,{}),"\nPour que la taille du formulaire soit bas\xe9e sur un objet, vous devez utiliser la syntaxe suivante :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0FORM SET SIZE(objet;horizontal;vertical)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Dans ce cas, vous devez passer dans ",(0,i.jsx)(n.em,{children:"horizontal"})," et ",(0,i.jsx)(n.em,{children:"vertical"})," les marges (en pixels) que vous souhaitez ajouter \xe0 droite et en bas de l\u2019objet. Il n'est pas possible de passer le param\xe8tre ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Taille en valeur absolue"}),(0,i.jsx)(n.br,{}),"\nPour passer une taille de formulaire absolue, vous devez utiliser la syntaxe suivante :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0FORM SET SIZE(horizontal;vertical)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Dans ce cas, vous devez passer dans ",(0,i.jsx)(n.em,{children:"horizontal"})," et ",(0,i.jsx)(n.em,{children:"vertical"})," la largeur et la hauteur (en pixels) du formulaire."]}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"FORM SET SIZE"})," modifie la taille du formulaire mais tient compte de ses propri\xe9t\xe9s de redimensionnement. Par exemple, si la largeur minimale du formulaire est de 500 pixels et si la commande d\xe9finit une largeur de 400 pixels, la nouvelle largeur du formulaire sera de 500 pixels."]}),"\n",(0,i.jsxs)(n.p,{children:["A noter \xe9galement que cette commande ne modifie pas la taille de la fen\xeatre du formulaire (il est possible de redimensionner un formulaire sans que la taille de la fen\xeatre soit modifi\xe9e, et inversement). Pour modifier la taille de la fen\xeatre d\u2019un formulaire, reportez-vous \xe0 la description de la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/resize-form-window",children:"RESIZE FORM WINDOW"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"Voici un exemple de mise en place d\u2019une fen\xeatre de type Explorateur. Le formulaire suivant est d\xe9fini en mode D\xe9veloppement :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(996771).Z+"",width:"574",height:"201"})}),"\n",(0,i.jsx)(n.p,{children:"La taille du formulaire est \u201Cautomatique\u201D."}),"\n",(0,i.jsx)(n.p,{children:"La fen\xeatre est affich\xe9e via l\u2019instruction suivante :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$ref:=Open form window([Table 1];"Form1";Form fen\xeatre standard;Centr\xe9e horizontalement;Centr\xe9e verticalement;*)\n\xa0DIALOG([Table 1];"Form1")\n\xa0CLOSE WINDOW\n'})}),"\n",(0,i.jsx)(n.p,{children:"La partie droite de la fen\xeatre peut \xeatre affich\xe9e ou masqu\xe9e via un clic sur l\u2019option d\u2019agrandissement/r\xe9duction :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(347170).Z+"",width:"576",height:"255"})}),"\n",(0,i.jsx)(n.p,{children:"La m\xe9thode objet associ\xe9e \xe0 ce bouton est la suivante :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event.code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var b1;<>contract\xe9 : Boolean\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var marge : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0marge:=15\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0b1:=<>contract\xe9\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(<>contract\xe9)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET HORIZONTAL RESIZING(False)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET SIZE("b1";marge;marge)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET HORIZONTAL RESIZING(True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET SIZE("onglet";marge;marge)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event.code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0<>contract\xe9:=b1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(b1)\n\xa0\xa0//contract\xe9\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET COORDINATES(*;"b1";$g;$h;$d;$b)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET WINDOW RECT($gf;$hf;$df;$bf;Current form window)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW RECT($gf;$hf;$gf+$d+marge;$hf+$b+marge;Current form window)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET HORIZONTAL RESIZING(False)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET SIZE("b1";marge;marge)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0//d\xe9ploy\xe9\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET COORDINATES(*;"onglet";$g;$h;$d;$b)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET WINDOW RECT($gf;$hf;$df;$bf;Current form window)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW RECT($gf;$hf;$gf+$d+marge;$hf+$b+marge;Current form window)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET HORIZONTAL RESIZING(True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET SIZE("onglet";marge;marge)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0End case\n'})}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/form-set-horizontal-resizing",children:"FORM SET HORIZONTAL RESIZING"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/form-set-vertical-resizing",children:"FORM SET VERTICAL RESIZING"})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},996771:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict21945.fr-755bf787098e653ce99ca58981d73795.png"},347170:function(e,n,r){r.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return l}});var s=r(667294);let i={},t=s.createContext(i);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);