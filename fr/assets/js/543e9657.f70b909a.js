"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52269"],{619645:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/resource-type-list","title":"RESOURCE TYPE LIST","description":"RESOURCE TYPE LIST ( resTypes {; resFichier} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/resource-type-list.md","sourceDirName":"commands-legacy","slug":"/commands/resource-type-list","permalink":"/docs/fr/commands/resource-type-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresource-type-list.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"resource-type-list","title":"RESOURCE TYPE LIST","slug":"/commands/resource-type-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESOURCE LIST","permalink":"/docs/fr/commands/resource-list"},"next":{"title":"STRING LIST TO ARRAY","permalink":"/docs/fr/commands/string-list-to-array"}}'),t=r("785893"),i=r("250065");let l={id:"resource-type-list",title:"RESOURCE TYPE LIST",slug:"/commands/resource-type-list",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let s={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"RESOURCE TYPE LIST"})," ( ",(0,t.jsx)(s.em,{children:"resTypes"})," {; ",(0,t.jsx)(s.em,{children:"resFichier"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resTypes"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Liste des types de ressources disponibles"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resFichier"}),(0,t.jsx)(s.td,{children:"Time"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence de fichier de ressources ou tous les fichiers de ressources ouverts (si ce param\xe8tre est omis)"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"RESOURCE TYPE LIST"})," remplit le tableau ",(0,t.jsx)(s.em,{children:"resTypes"})," avec les types des ressources pr\xe9sentes dans le(s) fichier(s) de resources ouvert(s)."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous passez un num\xe9ro de r\xe9f\xe9rence de fichier de ressources valide dans le param\xe8tre optionnel ",(0,t.jsx)(s.em,{children:"resFichier"}),", seules les ressources pr\xe9sentes dans ce fichier seront list\xe9es. Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(s.em,{children:"resFichier"}),", toutes les ressources de tous les fichiers de ressources ouverts seront list\xe9es."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous ne pr\xe9-d\xe9clarez pas le tableau ",(0,t.jsx)(s.em,{children:"resTypes"})," avant d'appeler ",(0,t.jsx)(s.strong,{children:"RESOURCE TYPE LIST"}),", la commande cr\xe9era par d\xe9faut un tableau de type Texte. Si vous pr\xe9-d\xe9clarez le tableau, vous pouvez lui attribuer le type Alpha ou Texte."]}),"\n",(0,t.jsxs)(s.p,{children:["Apr\xe8s l'appel, vous pouvez tester le nombre de types de ressources diff\xe9rents qui ont \xe9t\xe9 trouv\xe9s en appliquant la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/size-of-array",children:"Size of array"})," au tableau ",(0,t.jsx)(s.em,{children:"resTypes"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(s.p,{children:["L'exemple suivant remplit le tableau ",(0,t.jsx)(s.em,{children:"atResType"})," avec les types de ressources pr\xe9sents dans tous les fichiers de ressource ouverts :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0RESOURCE TYPE LIST(atResType)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(s.p,{children:'L\'exemple suivant vous indique si le fichier de structure Mac OS que vous utilisez contient des plug-ins 4D "ancien mod\xe8le", qui devront \xeatre mis \xe0 jour si vous voulez exploiter la base sous Windows :'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0$vhResFile:=Open resource file(Structure file)\n\xa0RESOURCE TYPE LIST(atResType;$vhResFile)\n\xa0If(Find in array(atResType;"4DEX")>0)\n\xa0\xa0\xa0\xa0ALERT("Cette base contient des plug-ins 4D bas\xe9s sur l\'ancien syst\xe8me."+(Char(13)*2)+\n\xa0\xa0\xa0\xa0"Vous devrez les mettre \xe0 jour pour pouvoir utiliser la base sous Windows.")\n\xa0End if\n'})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"}),' Le fichier de structure n\'est pas le seul fichier dans lequel des plug-ins "ancien mod\xe8le" ont pu \xeatre install\xe9s. La base peut \xe9galement \xeatre associ\xe9e \xe0 un fichier "Routines Externes" ou "Proc.Ext".']}),"\n",(0,t.jsx)(s.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(s.p,{children:"La m\xe9thode projet suivante retourne le nombre de ressources pr\xe9sentes dans un fichier de ressources :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode projet Compter ressources\n\xa0\xa0// Compter ressources ( Heure ) -> Entier long\n\xa0\xa0// Compter ressources ( DocRef ) -> Nombre de ressources\n\xa0\n #DECLARE($doc : Time) -> $result : Integer\n\xa0$result:=0\n\xa0RESOURCE TYPE LIST($atResType;$doc)\n\xa0For($vlElem;1;Size of array($atResType))\n\xa0\xa0\xa0\xa0RESOURCE LIST($atResType{$vlElem};$alResID;$atResName;$doc)\n\xa0\xa0\xa0\xa0$result:=$result+Size of array($alResID)\n\xa0End for\n"})}),"\n",(0,t.jsx)(s.p,{children:"Une fois que cette m\xe9thode est impl\xe9ment\xe9e dans votre base, vous pouvez \xe9crire par exemple :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0$vhResFile:=Open resource file("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0ALERT("Le fichier \u201C"+Document+"\u201D contient "+String(Compter ressources($vhResFile))+\n\xa0\xa0\xa0\xa0" ressource(s).")\n\xa0\xa0\xa0\xa0CLOSE RESOURCE FILE($vhResFile)\n\xa0End if\n'})}),"\n",(0,t.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/fr/commands/resource-list",children:"RESOURCE LIST"})}),"\n",(0,t.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"499"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return d},a:function(){return l}});var n=r(667294);let t={},i=n.createContext(t);function l(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);