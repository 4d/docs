"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35342"],{681981:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/method-set-code","title":"METHOD SET CODE","description":"METHOD SET CODE ( chemin ; code {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-set-code.md","sourceDirName":"commands-legacy","slug":"/commands/method-set-code","permalink":"/docs/fr/20-R7/commands/method-set-code","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-set-code.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-set-code","title":"METHOD SET CODE","slug":"/commands/method-set-code","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD SET ATTRIBUTES","permalink":"/docs/fr/20-R7/commands/method-set-attributes"},"next":{"title":"METHOD SET COMMENTS","permalink":"/docs/fr/20-R7/commands/method-set-comments"}}'),d=s("785893"),r=s("250065");let o={id:"method-set-code",title:"METHOD SET CODE",slug:"/commands/method-set-code",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD SET CODE"})," ( ",(0,d.jsx)(n.em,{children:"chemin"})," ; ",(0,d.jsx)(n.em,{children:"code"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"chemin"}),(0,d.jsx)(n.td,{children:"Text, Text array"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Texte ou Tableau texte contenant un ou plusieurs chemin(s) de m\xe9thode(s)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"code"}),(0,d.jsx)(n.td,{children:"Text, Text array"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Code de(s) m\xe9thode(s) d\xe9sign\xe9e(s)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Op\xe9rateur"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Si pass\xe9 = la commande s\u2019applique \xe0 la base h\xf4te lorsqu\u2019elle est ex\xe9cut\xe9e depuis un composant (param\xe8tre ignor\xe9 hors de ce contexte)"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"METHOD SET CODE"})," modifie le code de la ou des m\xe9thode(s) d\xe9sign\xe9e(s) par le param\xe8tre ",(0,d.jsx)(n.em,{children:"chemin"})," avec le contenu pass\xe9 dans le param\xe8tre ",(0,d.jsx)(n.em,{children:"code"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"La commande peut acc\xe9der au code existant de tous les types de m\xe9thodes : m\xe9thodes bases, d\xe9finitions de classes, triggers, m\xe9thodes projets, m\xe9thodes formulaires et m\xe9thodes objets."}),"\n",(0,d.jsx)(n.p,{children:"Si une m\xe9thode n\u2019existe pas, elle est cr\xe9\xe9e avec le contenu de code."}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Note pour les projets :"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"La cr\xe9ation d'une nouvelle m\xe9thode avec cette commande n'est possible que pour les m\xe9thodes base, les triggers et les m\xe9thodes projet."}),"\n",(0,d.jsxs)(n.li,{children:["Le code est enregistr\xe9 avec ou sans tokens dans les projets nouvellement cr\xe9\xe9s en fonction de l'option ",(0,d.jsx)(n.em,{children:"Inclure les tokens dans les fichiers sources du projet"})," dans les Pr\xe9f\xe9rences."]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Vous pouvez utiliser deux types de syntaxes, bas\xe9es soit sur des tableaux texte, soit sur des variables texte :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0var vTchemin : Text\xa0// variables texte\n\xa0var vTcode : Text\n\xa0METHOD SET CODE(vTchemin;vTcode)\xa0// code d\u2019une seule m\xe9thode\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(tabChemins;0)\xa0// tableaux texte\n\xa0ARRAY TEXT(tabCodes;0)\n\xa0METHOD SET CODE(tabChemins;tabCodes)\xa0// codes de plusieurs m\xe9thodes\n"})}),"\n",(0,d.jsx)(n.p,{children:"Il n\u2019est pas possible de mixer les deux syntaxes."}),"\n",(0,d.jsx)(n.p,{children:"Si un chemin d\u2019acc\xe8s pass\xe9 est invalide, la commande ne fait rien."}),"\n",(0,d.jsxs)(n.p,{children:["Lors de l'appel de ",(0,d.jsx)(n.strong,{children:"METHOD SET CODE"}),", par d\xe9faut les attributs des m\xe9thodes sont r\xe9initialis\xe9s. Cependant, si la premi\xe8re ligne du ",(0,d.jsx)(n.em,{children:"code"})," d\u2019une m\xe9thode contient des m\xe9tadonn\xe9es valides (exprim\xe9es en JSON), elles sont utilis\xe9es pour d\xe9finir les attributs de la m\xe9thode et la premi\xe8re ligne n\u2019est pas ins\xe9r\xe9e. Exemple de m\xe9tadonn\xe9es :"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// %attributes = {"invisible":true,"lang":"fr","folder":"Security"}\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note :"})," Ces m\xe9tadonn\xe9es sont g\xe9n\xe9r\xe9es automatiquement par la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/method-get-code",children:"METHOD GET CODE"}),". Pour plus d'informations sur les attributs pris en charge, reportez-vous \xe0 la description de la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/method-set-attributes",children:"METHOD SET ATTRIBUTES"}),"."]}),"\n",(0,d.jsx)(n.p,{children:'Concernant la propri\xe9t\xe9 "folder" des m\xe9tadonn\xe9es :'}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"si cette propri\xe9t\xe9 est pr\xe9sente et correspond \xe0 un dossier valide, la m\xe9thode sera plac\xe9e dans le dossier parent,"}),"\n",(0,d.jsx)(n.li,{children:"si cette propri\xe9t\xe9 n\u2019est pas pr\xe9sente ou si le dossier n\u2019existe pas, la commande ne change rien au niveau du dossier parent,"}),"\n",(0,d.jsx)(n.li,{children:"si cette propri\xe9t\xe9 est pr\xe9sente et contient une cha\xeene vide, la m\xe9thode sera plac\xe9e au niveau racine."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Vous pouvez ex\xe9cuter cette commande depuis un composant, mais dans ce cas vous devez passer le param\xe8tre ",(0,d.jsx)(n.em,{children:"*"})," car l\u2019acc\xe8s en \xe9criture au code du composant n\u2019est pas possible. Si vous omettez le param\xe8tre ",(0,d.jsx)(n.em,{children:"*"})," dans ce contexte, l\u2019erreur -9763 est g\xe9n\xe9r\xe9e."]}),"\n",(0,d.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(n.p,{children:"Cet exemple permet d\u2019exporter et d\u2019importer la totalit\xe9 des m\xe9thodes projet d\u2019une application :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0$root_t:=Get 4D folder(Database folder)+"methods"+Folder separator\n\xa0ARRAY TEXT($fileNames_at;0)\n\xa0CONFIRM("Import ou export des m\xe9thodes ?";"Import";"Export")\n\xa0\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0DOCUMENT LIST($root_t;$fileNames_at)\n\xa0\xa0\xa0\xa0For($loop_l;1;Size of array($fileNames_at))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$filename_t:=$fileNames_at{$loop_l}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DOCUMENT TO BLOB($root_t+$filename_t;$blob_x)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0METHOD SET CODE($filename_t;BLOB to text($blob_x;UTF8 text without length))\n\xa0\xa0\xa0\xa0End for\n\xa0Else\n\xa0\xa0\xa0\xa0If(Test path name($root_t)#Is a folder)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE FOLDER($root_t;*)\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0METHOD GET PATHS(Path project method;$fileNames_at)\n\xa0\xa0\xa0\xa0METHOD GET CODE($fileNames_at;$code_at)\n\xa0\xa0\xa0\xa0For($loop_l;1;Size of array($fileNames_at))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$filename_t:=$fileNames_at{$loop_l}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET BLOB SIZE($blob_x;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TEXT TO BLOB($code_at{$loop_l};$blob_x;UTF8 text without length)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT($root_t+$filename_t;$blob_x)\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n\xa0SHOW ON DISK($root_t)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/method-get-code",children:"METHOD GET CODE"})}),"\n",(0,d.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"1194"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var t=s(667294);let d={},r=t.createContext(d);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);