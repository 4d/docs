"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20426"],{85319:function(e,s,r){r.r(s),r.d(s,{metadata:()=>n,contentTitle:()=>l,default:()=>m,assets:()=>a,toc:()=>c,frontMatter:()=>d});var n=JSON.parse('{"id":"commands-legacy/dom-export-to-file","title":"DOM EXPORT TO FILE","description":"DOM EXPORT TO FILE ( refEl\xe9ment ; cheminFichier )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-export-to-file.md","sourceDirName":"commands-legacy","slug":"/commands/dom-export-to-file","permalink":"/docs/fr/commands/dom-export-to-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-export-to-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-export-to-file","title":"DOM EXPORT TO FILE","slug":"/commands/dom-export-to-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Create XML Ref","permalink":"/docs/fr/commands/dom-create-xml-ref"},"next":{"title":"DOM EXPORT TO VAR","permalink":"/docs/fr/commands/dom-export-to-var"}}'),t=r("785893"),i=r("250065");let d={id:"dom-export-to-file",title:"DOM EXPORT TO FILE",slug:"/commands/dom-export-to-file",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Notes sur le traitement des caract\xe8res de fin de ligne et des BOM",id:"notes-sur-le-traitement-des-caract\xe8res-de-fin-de-ligne-et-des-bom",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"DOM EXPORT TO FILE"})," ( ",(0,t.jsx)(s.em,{children:"refEl\xe9ment"})," ; ",(0,t.jsx)(s.em,{children:"cheminFichier"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"refEl\xe9ment"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"R\xe9f\xe9rence d\u2019\xe9l\xe9ment XML racine"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cheminFichier"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Chemin d\u2019acc\xe8s complet du fichier"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"DOM EXPORT TO FILE"})," permet de sauvegarder un arbre XML dans un fichier sur disque."]}),"\n",(0,t.jsxs)(s.p,{children:["Passez dans ",(0,t.jsx)(s.em,{children:"refEl\xe9ment"})," la r\xe9f\xe9rence de l\u2019\xe9l\xe9ment racine \xe0 exporter.",(0,t.jsx)(s.br,{}),"\nPassez dans ",(0,t.jsx)(s.em,{children:"cheminFichier"})," le chemin d\u2019acc\xe8s complet du fichier d\u2019export \xe0 utiliser ou \xe0 cr\xe9er. Si le fichier n\u2019existe pas, il est cr\xe9\xe9.",(0,t.jsx)(s.br,{}),"\nSi vous passez uniquement un nom de fichier (sans chemin d\u2019acc\xe8s), le fichier sera recherch\xe9 ou cr\xe9\xe9 \xe0 c\xf4t\xe9 du fichier de structure.",(0,t.jsx)(s.br,{}),"\nSi vous passez une cha\xeene vide (",(0,t.jsx)(s.em,{children:'""'}),"), une bo\xeete de dialogue standard d\u2019ouverture et de cr\xe9ation de fichier appara\xeet."]}),"\n",(0,t.jsx)(s.h5,{id:"notes-sur-le-traitement-des-caract\xe8res-de-fin-de-ligne-et-des-bom",children:"Notes sur le traitement des caract\xe8res de fin de ligne et des BOM"}),"\n",(0,t.jsx)(s.p,{children:"En XML, les sauts de ligne ne sont pas significatifs, qu'ils soient pr\xe9sents \xe0 l'int\xe9rieur ou entre des \xe9l\xe9ments XML. En interne, le XML utilise des caract\xe8res normalis\xe9s LF comme s\xe9parateurs de lignes."}),"\n",(0,t.jsx)(s.p,{children:"Lors des op\xe9rations d'import et d'export, les caract\xe8res de saut de ligne peuvent \xeatre convertis. Lors d'un import, le parseur XML remplace les caract\xe8res CRLF (sauts de ligne standard sous Windows) par des caract\xe8res LF. Pendant l'export, les caract\xe8res LF sont remplac\xe9s par des caract\xe8res CRLF sous Windows (pas de remplacement sous macOS)."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"})," : Si vous souhaitez conserver les retours chariot, vous devez les inclure dans un \xe9l\xe9ment XML CDATA afin qu'ils ne soient pas trait\xe9s par l'analyseur XML. Vous pouvez \xe9galement utiliser le caract\xe8re \"",(0,t.jsx)(s.br,{}),'", qui est un retour chariot explicite qui ne sera pas trait\xe9 par le parseur en lieu et place des caract\xe8res CRLF.']}),"\n",(0,t.jsx)(s.p,{children:"Par d\xe9faut, les fichiers XML sont \xe9crits sans BOM (Byte order mask)."}),"\n",(0,t.jsxs)(s.p,{children:["Vous pouvez contr\xf4ler le traitement des fins de ligne XML et du BOM \xe0 l'aide de la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note de compatibilit\xe9"})," : Dans les bases /projets cr\xe9\xe9s avec des versions de 4D allant jusqu'\xe0 la v19.x, 4D utilise par d\xe9faut CR comme caract\xe8re de fin de ligne sur macOS et ainsi qu'un BOM. Pour activer les nouveaux param\xe8tres par d\xe9faut, v\xe9rifiez les param\xe8tres de compatibilit\xe9 (voir la page Compatibilit\xe9) ou utilisez la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(s.p,{children:["Cet exemple sauvegarde l\u2019arbre ",(0,t.jsx)(s.em,{children:"vRefElem"})," dans le fichier MonDoc.xml :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0DOM EXPORT TO FILE(vRefElem;"C:\\\\dossier\\MonDoc.xml")\n'})}),"\n",(0,t.jsx)(s.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(s.p,{children:"Si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,t.jsx)(s.h4,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsx)(s.p,{children:"Une erreur est g\xe9n\xe9r\xe9e lorsque :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"la r\xe9f\xe9rence de l\u2019\xe9l\xe9ment n\u2019est pas valide,"}),"\n",(0,t.jsx)(s.li,{children:"le chemin d\u2019acc\xe8s sp\xe9cifi\xe9 n\u2019est pas valide,"}),"\n",(0,t.jsx)(s.li,{children:"le volume de stockage retourne une erreur (disque plein, etc.)."}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/dom-export-to-var",children:"DOM EXPORT TO VAR"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/svg-export-to-picture",children:"SVG EXPORT TO PICTURE"})]})]})}function m(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return d}});var n=r(667294);let t={},i=n.createContext(t);function d(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);