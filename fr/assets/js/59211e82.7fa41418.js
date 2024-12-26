"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24852"],{652447:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>m,assets:()=>a,toc:()=>l,frontMatter:()=>c});var r=JSON.parse('{"id":"commands-legacy/write-picture-file","title":"WRITE PICTURE FILE","description":"WRITE PICTURE FILE ( nomFichier ; image {; codec} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/write-picture-file.md","sourceDirName":"commands-legacy","slug":"/commands/write-picture-file","permalink":"/docs/fr/commands/write-picture-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwrite-picture-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"write-picture-file","title":"WRITE PICTURE FILE","slug":"/commands/write-picture-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"TRANSFORM PICTURE","permalink":"/docs/fr/commands/transform-picture"},"next":{"title":"Printing","permalink":"/docs/fr/category/printing"}}'),s=i("785893"),t=i("250065");let c={id:"write-picture-file",title:"WRITE PICTURE FILE",slug:"/commands/write-picture-file",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WRITE PICTURE FILE"})," ( ",(0,s.jsx)(n.em,{children:"nomFichier"})," ; ",(0,s.jsx)(n.em,{children:"image"})," {; ",(0,s.jsx)(n.em,{children:"codec"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomFichier"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom ou chemin d\u2019acc\xe8s complet du fichier \xe0 \xe9crire, ou cha\xeene vide"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"image"}),(0,s.jsx)(n.td,{children:"Picture"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Champ ou variable image \xe0 \xe9crire"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"codec"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Identifiant de codec d'image"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"WRITE PICTURE FILE"})," vous permet de sauvegarder dans un fichier sur disque l\u2019image pass\xe9e dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"image"}),", au format d\xe9fini par ",(0,s.jsx)(n.em,{children:"codec"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,s.jsx)(n.em,{children:"nomFichier"})," le chemin d\u2019acc\xe8s complet du fichier \xe0 cr\xe9er, ou uniquement le nom du fichier \u2014 auquel cas le fichier sera cr\xe9\xe9 \xe0 c\xf4t\xe9 du fichier de structure de la base. Vous devez \xe9galement passer l\u2019extension du fichier \xe0 cr\xe9er.",(0,s.jsx)(n.br,{}),'\nSi vous passez une cha\xeene vide ("") dans ',(0,s.jsx)(n.em,{children:"nomFichier"}),", la bo\xeete de dialogue standard d\u2019enregistrement de fichier appara\xeet, permettant \xe0 l\u2019utilisateur de d\xe9signer le nom, l\u2019emplacement et le format du fichier \xe0 cr\xe9er. Si un nom par d\xe9faut a \xe9t\xe9 associ\xe9 au champ image, il est propos\xe9 dans la bo\xeete de dialogue (cf. commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/set-picture-file-name",children:"SET PICTURE FILE NAME"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"image"})," la variable ou le champ image contenant l\u2019image \xe0 stocker sur le disque."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"codec"})," vous permet de d\xe9finir le format dans lequel l\u2019image doit \xeatre sauvegard\xe9e. Un codec peut \xeatre une extension (par exemple \u201C.gif\u201D) ou un type Mime (par exemple \u201Cimage/jpg\u201D). Vous pouvez obtenir la liste des codecs disponibles via la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous omettez le param\xe8tre ",(0,s.jsx)(n.em,{children:"codec"}),", la commande tentera de d\xe9terminer le codec sur la base de l\u2019extension du nom de fichier pass\xe9 dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"nomFichier"}),". Par exemple, si vous passez l\u2019instruction :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0WRITE PICTURE FILE("c:\\dossier\\photo.jpg";maphoto)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["... la commande utilisera le codec JPEG pour stocker l\u2019image.",(0,s.jsx)(n.br,{}),"\nSi l\u2019extension utilis\xe9e ne correspond \xe0 aucun codec disponible, le fichier n\u2019est pas enregistr\xe9 et la variable syst\xe8me OK prend la valeur 0. Si vous ne passez ni ",(0,s.jsx)(n.em,{children:"codec"})," ni extension de fichier, le fichier image est enregistr\xe9 au format PICT."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Si le format d'\xe9criture de l'",(0,s.jsx)(n.em,{children:"image"})," (indiqu\xe9 via l'extension de ",(0,s.jsx)(n.em,{children:"nomFichier"})," ou le param\xe8tre ",(0,s.jsx)(n.em,{children:"codec"}),") est \xe9gal \xe0 son type d'origine et si aucune op\xe9ration de transformation ne lui a \xe9t\xe9 appliqu\xe9e, l'image est \xe9crite telle quelle, sans aucune modification."]}),"\n",(0,s.jsx)(n.p,{children:"Si l\u2019ex\xe9cution de la commande est correcte, la variable syst\xe8me Document contient le chemin d\u2019acc\xe8s complet du fichier cr\xe9\xe9 et la variable syst\xe8me OK prend la valeur 1. En cas d\u2019\xe9chec, OK prend la valeur 0."}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Introduction aux images"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/picture-to-blob",children:"PICTURE TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/read-picture-file",children:"READ PICTURE FILE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/set-picture-file-name",children:"SET PICTURE FILE NAME"})]}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"680"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifie les variables"}),(0,s.jsx)(n.td,{children:"OK, Document"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return c}});var r=i(667294);let s={},t=r.createContext(s);function c(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);