"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75882"],{966942:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/method-set-attribute","title":"METHOD SET ATTRIBUTE","description":"METHOD SET ATTRIBUTE ( chemin ; typeAttribut ; valeurAttribut {; typeAttribut2 ; valeurAttribut2 ; ... ; typeAttributN ; valeurAttributN}{; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-set-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/method-set-attribute","permalink":"/docs/fr/commands/method-set-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-set-attribute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-set-attribute","title":"METHOD SET ATTRIBUTE","slug":"/commands/method-set-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD SET ACCESS MODE","permalink":"/docs/fr/commands/method-set-access-mode"},"next":{"title":"METHOD SET ATTRIBUTES","permalink":"/docs/fr/commands/method-set-attributes"}}'),s=n("785893"),i=n("250065");let d={id:"method-set-attribute",title:"METHOD SET ATTRIBUTE",slug:"/commands/method-set-attribute",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"METHOD SET ATTRIBUTE"})," ( ",(0,s.jsx)(t.em,{children:"chemin"})," ; ",(0,s.jsx)(t.em,{children:"typeAttribut"})," ; ",(0,s.jsx)(t.em,{children:"valeurAttribut"})," {; ",(0,s.jsx)(t.em,{children:"typeAttribut2"})," ; ",(0,s.jsx)(t.em,{children:"valeurAttribut2"})," ; ... ; ",(0,s.jsx)(t.em,{children:"typeAttributN"})," ; ",(0,s.jsx)(t.em,{children:"valeurAttributN"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tre"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"chemin"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Chemin de m\xe9thode projet"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"typeAttribut"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Type d\u2019attribut"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"valeurAttribut"}),(0,s.jsx)(t.td,{children:"Boolean, Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Vrai = s\xe9lectionner l\u2019attribut, Faux = d\xe9s\xe9lectionner l\u2019attribut ou Nom du dossier"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Op\xe9rateur"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Si pass\xe9 = la commande s\u2019applique \xe0 la base h\xf4te lorsqu\u2019elle est ex\xe9cut\xe9e depuis un composant (param\xe8tre ignor\xe9 hors de ce contexte)"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["La commande ",(0,s.jsx)(t.strong,{children:"METHOD SET ATTRIBUTE"})," permet de d\xe9finir la valeur d'un ou plusieurs attribut(s) ",(0,s.jsx)(t.em,{children:"typeAttribut"})," pour la m\xe9thode projet d\xe9sign\xe9e par le param\xe8tre ",(0,s.jsx)(t.em,{children:"chemin"}),". Cette commande ne fonctionne qu\u2019avec les m\xe9thodes projet. Si vous passez un ",(0,s.jsx)(t.em,{children:"chemin"})," invalide, une erreur est g\xe9n\xe9r\xe9e."]}),"\n",(0,s.jsxs)(t.p,{children:["Passez dans le param\xe8tre ",(0,s.jsx)(t.em,{children:"typeAttribut"})," une valeur indiquant le type d\u2019attribut \xe0 d\xe9finir. Vous pouvez utiliser les constantes suivantes, plac\xe9es dans le th\xe8me ",(0,s.jsx)(t.em,{children:"Acc\xe8s objets d\xe9veloppement"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constante"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Valeur"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute executed on server"}),(0,s.jsx)(t.td,{children:"Entier long"}),(0,s.jsx)(t.td,{children:"8"}),(0,s.jsx)(t.td,{children:'Correspond \xe0 l\u2019option "Ex\xe9cuter sur serveur"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute folder name"}),(0,s.jsx)(t.td,{children:"Entier long"}),(0,s.jsx)(t.td,{children:"1024"}),(0,s.jsxs)(t.td,{children:['Nom de dossier pour la m\xe9thode (attribut "folder"). Lorsque vous passez cette constante, vous devez passer un nom de dossier dans ',(0,s.jsx)(t.em,{children:"valeurAttribut"})," :",(0,s.jsx)(t.br,{}),"si le nom correspond \xe0 un dossier valide, la m\xe9thode sera plac\xe9e dans ce dossier parent,si le dossier n\u2019existe pas, la commande ne change rien au niveau du dossier parent,si vous passez une cha\xeene vide, la m\xe9thode sera plac\xe9e au niveau racine."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute invisible"}),(0,s.jsx)(t.td,{children:"Entier long"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:'Correspond \xe0 l\u2019option "Invisible"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute published SOAP"}),(0,s.jsx)(t.td,{children:"Entier long"}),(0,s.jsx)(t.td,{children:"3"}),(0,s.jsx)(t.td,{children:'Correspond \xe0 l\u2019option "Offerte comme Web Service"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute published SQL"}),(0,s.jsx)(t.td,{children:"Entier long"}),(0,s.jsx)(t.td,{children:"7"}),(0,s.jsx)(t.td,{children:'Correspond \xe0 l\u2019option "Disponible via SQL"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute published Web"}),(0,s.jsx)(t.td,{children:"Entier long"}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:'Correspond \xe0 l\u2019option "Disponible via les balises HTML et les URLs 4D (4DACTION...)"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute published WSDL"}),(0,s.jsx)(t.td,{children:"Entier long"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:'Correspond \xe0 l\u2019option "Publi\xe9e dans WSDL". N\'est prise en compte que si l\u2019option "Offerte comme Web Service" est activ\xe9e.'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute shared"}),(0,s.jsx)(t.td,{children:"Entier long"}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:'Correspond \xe0 l\u2019option "Partag\xe9e entre composants et base h\xf4te"'})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Passez dans le param\xe8tre ",(0,s.jsx)(t.em,{children:"valeurAttribut"})," soit :"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Vrai"})," pour s\xe9lectionner l\u2019option correspondante et ",(0,s.jsx)(t.strong,{children:"Faux"})," pour la d\xe9s\xe9lectionner,"]}),"\n",(0,s.jsxs)(t.li,{children:["une cha\xeene (nom du dossier) si vous avez utilis\xe9 la constante Attribute folder name dans ",(0,s.jsx)(t.em,{children:"typeAttribut"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Vous pouvez passer plusieurs paires ",(0,s.jsx)(t.em,{children:"typeAttribut"}),";",(0,s.jsx)(t.em,{children:"valeurAttribut"})," en un seul appel."]}),"\n",(0,s.jsxs)(t.p,{children:["Vous pouvez ex\xe9cuter cette commande depuis un composant, mais dans ce cas vous devez passer le param\xe8tre ",(0,s.jsx)(t.em,{children:"*"})," car l\u2019acc\xe8s en \xe9criture au code du composant n\u2019est pas possible. Si vous omettez le param\xe8tre ",(0,s.jsx)(t.em,{children:"*"})," dans ce contexte, l\u2019erreur -9763 est g\xe9n\xe9r\xe9e."]}),"\n",(0,s.jsx)(t.h5,{id:""}),"\n",(0,s.jsx)(t.p,{children:"Cette commande ne peut pas \xeatre ex\xe9cut\xe9e en mode compil\xe9. Dans ce mode, son appel g\xe9n\xe8re l'erreur -9762."}),"\n",(0,s.jsx)(t.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(t.p,{children:'S\xe9lection de la propri\xe9t\xe9 "Partag\xe9e entre composants et base h\xf4te" pour la m\xe9thode projet "Choix dialogue" :'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0METHOD SET ATTRIBUTE("Choix dialogue";Attribute shared;True)\n'})}),"\n",(0,s.jsx)(t.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(t.p,{children:"D\xe9finition de plusieurs paires attribut/valeur :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0METHOD SET ATTRIBUTE(vChemin;Attribute invisible;vInvisible;Attribute published Web;v4DAction;Attribute published SOAP;vSoap;Attribute published WSDL;vWSDL;Attribute shared;vExported;Attribute published SQL;vSQL;Attribute executed on server;vRemote;Attribute folder name;vDossier;*)\n"})}),"\n",(0,s.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Acc\xe8s objets d\xe9veloppement"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/commands/method-get-attribute",children:"METHOD Get attribute"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/commands/method-set-attributes",children:"METHOD SET ATTRIBUTES"})]}),"\n",(0,s.jsx)(t.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(t.td,{children:"1192"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return d}});var r=n(667294);let s={},i=r.createContext(s);function d(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);