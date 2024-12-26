"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79509"],{926110:function(e,s,r){r.r(s),r.d(s,{metadata:()=>n,contentTitle:()=>d,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var n=JSON.parse('{"id":"commands-legacy/resource-list","title":"RESOURCE LIST","description":"RESOURCE LIST ( resType ; resNums ; resNoms {; resFichier} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/resource-list.md","sourceDirName":"commands-legacy","slug":"/commands/resource-list","permalink":"/docs/fr/commands/resource-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresource-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"resource-list","title":"RESOURCE LIST","slug":"/commands/resource-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Open resource file","permalink":"/docs/fr/commands/open-resource-file"},"next":{"title":"RESOURCE TYPE LIST","permalink":"/docs/fr/commands/resource-type-list"}}'),t=r("785893"),i=r("250065");let l={id:"resource-list",title:"RESOURCE LIST",slug:"/commands/resource-list",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"RESOURCE LIST"})," ( ",(0,t.jsx)(s.em,{children:"resType"})," ; ",(0,t.jsx)(s.em,{children:"resNums"})," ; ",(0,t.jsx)(s.em,{children:"resNoms"})," {; ",(0,t.jsx)(s.em,{children:"resFichier"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resType"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Type de ressource (4 caract\xe8res)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resNums"}),(0,t.jsx)(s.td,{children:"Integer array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Num\xe9ros des ressources de ce type"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resNoms"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Noms des ressources de ce type"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resFichier"}),(0,t.jsx)(s.td,{children:"Time"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence de fichier de ressources ou tous les fichiers de ressources ouverts si ce param\xe8tre est omis"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"RESOURCE LIST"})," remplit les tableaux ",(0,t.jsx)(s.em,{children:"resNums"})," et ",(0,t.jsx)(s.em,{children:"resNoms"})," avec les num\xe9ros et les noms des ressources dont vous avez pass\xe9 le type dans ",(0,t.jsx)(s.em,{children:"resType"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Important :"})," Vous devez passez dans ",(0,t.jsx)(s.em,{children:"resType"})," une cha\xeene de 4 caract\xe8res."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous passez un num\xe9ro de r\xe9f\xe9rence de fichier de ressources valide dans le param\xe8tre optionnel ",(0,t.jsx)(s.em,{children:"resFichier"}),", seules les ressources pr\xe9sentes dans ce fichier seront list\xe9es. Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(s.em,{children:"resFichier"}),", toutes les ressources de tous les fichiers de ressources ouverts seront list\xe9es."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous ne pr\xe9-d\xe9clarez pas les tableaux ",(0,t.jsx)(s.em,{children:"resNums"})," et ",(0,t.jsx)(s.em,{children:"resNoms"})," avant d'appeler ",(0,t.jsx)(s.strong,{children:"RESOURCE LIST"}),", la commande cr\xe9era par d\xe9faut le tableau ",(0,t.jsx)(s.em,{children:"resNums"})," avec le type Entier long et ",(0,t.jsx)(s.em,{children:"resNoms"})," avec le type Texte. Si vous pr\xe9-d\xe9clarez les tableaux, vous devez attribuer le type Entier long \xe0 ",(0,t.jsx)(s.em,{children:"resNums"}),", mais pouvez attribuer le type Alpha ou Texte \xe0 ",(0,t.jsx)(s.em,{children:"resNoms"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Apr\xe8s l'appel, vous pouvez tester le nombre de ressources qui ont \xe9t\xe9 trouv\xe9es en appliquant la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/size-of-array",children:"Size of array"})," au tableau ",(0,t.jsx)(s.em,{children:"resNums"})," ou ",(0,t.jsx)(s.em,{children:"resNoms"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(s.p,{children:["L'exemple suivant remplit les tableaux ",(0,t.jsx)(s.em,{children:"$alResNum"})," et ",(0,t.jsx)(s.em,{children:"$atResNom"})," avec les num\xe9ros et les noms des ressources de type Listes de cha\xeenes pr\xe9sentes dans le fichier de structure de la base :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0If(Sous Windows)\n\xa0\xa0\xa0\xa0$vhStructureResFile:=Open resource file(Replace string(Structure file;".4DB";".RSR"))\n\xa0Else\n\xa0\xa0\xa0\xa0$vhStructureResFile:=Open resource file(Structure file)\n\xa0End if\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0RESOURCE LIST("STR#";$alResNum;$atResNom;$vhStructureResFile)\n\xa0End if\n'})}),"\n",(0,t.jsx)(s.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(s.p,{children:"L'exemple suivant copie dans la biblioth\xe8que d'images de la base les ressources image pr\xe9sentes dans tous les fichiers de ressources ouverts :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0RESOURCE LIST("PICT";$alResNum;$atResNom)\n\xa0Open window(50;50;550;120;5;"Copie des ressources PICT...")\n\xa0For($vlElem;1;Size of array($alResNum))\n\xa0\xa0\xa0\xa0GET PICTURE RESOURCE($alResNum{$vlElem};$vgImage)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsNom:=$atResNom{$vlElem}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vsNom="")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsNom:="PICT resID="+String($alResNum{$vlElem})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ERASE WINDOW\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO XY(2;1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGE("Ajout de l\'image \u201C"+$vsNom+"\u201D \xe0 la biblioth\xe8que d\'images de la base.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET PICTURE TO LIBRARY($vgImage;$alResNum{$vlElem};$vsNom)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0CLOSE WINDOW\n'})}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/fr/commands/resource-type-list",children:"RESOURCE TYPE LIST"})}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"500"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return d},a:function(){return l}});var n=r(667294);let t={},i=n.createContext(t);function l(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);