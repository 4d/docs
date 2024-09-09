/*! For license information please see fdf53828.0397393a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27193],{812272:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(474848),r=t(28453);const i={id:"compatibility",title:"Page Compatibilit\xe9"},o=void 0,a={id:"settings/compatibility",title:"Page Compatibilit\xe9",description:"La page Compatibilit\xe9 regroupe les param\xe8tres relatifs au maintien de la compatibilit\xe9 avec les versions pr\xe9c\xe9dentes de 4D.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/settings/compatibility.md",sourceDirName:"settings",slug:"/settings/compatibility",permalink:"/docs/fr/20-R5/settings/compatibility",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fcompatibility.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"compatibility",title:"Page Compatibilit\xe9"},sidebar:"docs",previous:{title:"Page s\xe9curit\xe9",permalink:"/docs/fr/20-R5/settings/security"},next:{title:"Composants",permalink:"/docs/fr/20-R5/Project/components"}},c={},l=[];function d(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"La page Compatibilit\xe9 regroupe les param\xe8tres relatifs au maintien de la compatibilit\xe9 avec les versions pr\xe9c\xe9dentes de 4D."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Le nombre d'options affich\xe9es d\xe9pend de la version de 4D avec laquelle la base de donn\xe9es/projet original a \xe9t\xe9 cr\xe9\xe9, ainsi que des param\xe9trages modifi\xe9s dans cette base/projet.",(0,n.jsx)(s.br,{}),"\nCette page r\xe9pertorie les options de compatibilit\xe9 disponibles pour les bases de donn\xe9es/projets convertis \xe0 partir de 4D 18 et suivants. For older compatibility options, refer to the ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Compatibility-page.300-6750362.en.html",children:"Compatibility page"})," on ",(0,n.jsx)(s.strong,{children:"doc.4d.com"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Utiliser l'ancienne couche r\xe9seau"})," : \xc0 partir de 4D v15, les applications 4D proposent une nouvelle couche r\xe9seau, nomm\xe9e ",(0,n.jsx)(s.em,{children:"ServerNet"}),", pour g\xe9rer les communications entre 4D Server et les postes 4D distants (clients). L'ancienne couche r\xe9seau devient obsol\xe8te, mais est conserv\xe9e pour assurer la compatibilit\xe9 des bases existantes. A l'aide de cette option, vous pouvez activer ou d\xe9sactiver \xe0 tout moment l'ancienne couche r\xe9seau dans vos applications 4D Server en fonction de vos besoins. ",(0,n.jsx)(s.em,{children:"ServerNet"})," est automatiquement utilis\xe9 pour les nouvelles bases de donn\xe9es et les bases de donn\xe9es converties depuis une version 15 ou ult\xe9rieure. A noter qu'en cas de modification de l'option, vous devez red\xe9marrer l'application pour que le changement soit pris en compte. Toute application cliente qui \xe9tait connect\xe9e doit \xe9galement \xeatre red\xe9marr\xe9e afin de se connecter avec la nouvelle couche r\xe9seau.\n",(0,n.jsx)(s.strong,{children:"Note :"})," Cette option peut \xe9galement \xeatre g\xe9r\xe9e par programmation en utilisant la commande ",(0,n.jsx)(s.code,{children:"SET DATABASE PARAMETER"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Utiliser XPath standard :"})," Par d\xe9faut, cette option est d\xe9s\xe9lectionn\xe9e pour les bases converties depuis une version de 4D ant\xe9rieure \xe0 la 18 R3, et est coch\xe9e pour les bases cr\xe9\xe9es sous une version 4D 18 R3 ou une version plus r\xe9cente. A partir de la version 18 R3, l'impl\xe9mentation de XPath dans 4D a \xe9t\xe9 modifi\xe9e pour une meilleure conformit\xe9 et pour la prise en charge d'un plus grand nombre de pr\xe9dicats. Par cons\xe9quent, les fonctionnalit\xe9s non standard de l'impl\xe9mentation ant\xe9rieure ne fonctionnent plus. Elles incluent :"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"le caract\xe8re \"/\" initial n'est pas seulement le noeud racine - l'utilisation du caract\xe8re / comme premier caract\xe8re d'une expression XPath ne d\xe9clare pas un chemin absolu \xe0 partir du noeud racine"}),"\n",(0,n.jsx)(s.li,{children:"pas de noeud courant implicite - le noeud courant doit \xeatre int\xe9gr\xe9 dans l'expression XPath"}),"\n",(0,n.jsx)(s.li,{children:"pas de requ\xeates r\xe9cursives dans les structures r\xe9p\xe9t\xe9es - seul le premier \xe9l\xe9ment est pars\xe9. \\"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["M\xeame si ces fonctionnalit\xe9s ne sont pas standard, vous pourriez vouloir continuer \xe0 les utiliser afin que votre code continue de fonctionner comme avant -- dans ce cas, il vous suffit de ",(0,n.jsx)(s.em,{children:"d\xe9s\xe9lectionner"})," l'option. Par contre, si votre code ne repose pas sur l'impl\xe9mentation non standard et si vous voulez b\xe9n\xe9ficier des fonctionnalit\xe9s XPath \xe9tendues dans vos bases de donn\xe9es (comme d\xe9crit dans la commande ",(0,n.jsx)(s.a,{href:"https://doc.dd.com/4dv20/help/command/fe/page864.html",children:(0,n.jsx)(s.code,{children:"DOM Find XML element"})}),", assurez-vous que l'option ",(0,n.jsx)(s.strong,{children:"Utiliser XPath standard"})," est ",(0,n.jsx)(s.em,{children:"coch\xe9e"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Utiliser LF comme caract\xe8re de fin de ligne sur macOS :"})," \xc0 partir de 4D 19 R2 (et 4D 19 R3 pour les fichiers XML), 4D \xe9crit les fichiers texte avec un saut de ligne (LF) comme caract\xe8re de fin de ligne (EOL) par d\xe9faut au lieu de Retour Chariot (CR) (CRLF pour xml SAX) sur macOS dans les nouveaux projets. Si vous souhaitez b\xe9n\xe9ficier de ce nouveau comportement dans les projets convertis \xe0 partir de versions ant\xe9rieures de 4D, cochez cette option. Voir ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/fe/page1237.html",children:(0,n.jsx)(s.code,{children:"TEXT TO DOCUMENT"})}),", ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/fe/page1236.html",children:(0,n.jsx)(s.code,{children:"Document to text"})}),", et ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/fe/page1090.html",children:"XML SET OPTIONS"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Ne pas ajouter de BOM lors de l'\xe9criture d'un fichier texte unicode par d\xe9faut :"}),' \xc0 partir de 4D 19 R2 (et 4D 19 R3 pour les fichiers XML), 4D \xe9crit des fichiers texte sans BOM ("Byte order mark") par d\xe9faut. Dans les versions ant\xe9rieures, les fichiers texte \xe9taient \xe9crits avec un BOM par d\xe9faut. S\xe9lectionnez cette option si vous souhaitez activer le nouveau comportement dans les projets convertis. Voir ',(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/fe/page1237.html",children:(0,n.jsx)(s.code,{children:"TEXT TO DOCUMENT"})}),", ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/fe/page1236.html",children:(0,n.jsx)(s.code,{children:"Document to text"})}),", et ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/fe/page1090.html",children:"XML SET OPTIONS"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Traduire les NULL en valeurs vides non coch\xe9e par d\xe9faut \xe0 la cr\xe9ation d'un champ"})," : Pour une meilleure conformit\xe9 avec les sp\xe9cifications ORDA, dans les bases de donn\xe9es cr\xe9\xe9es avec 4D 19 R4 et versions ult\xe9rieures, la propri\xe9t\xe9 de champ ",(0,n.jsx)(s.strong,{children:"Traduire les NULL en valeurs vides"})," est non coch\xe9e par d\xe9faut lors de la cr\xe9ation des champs. Vous pouvez appliquer ce comportement par d\xe9faut \xe0 vos bases de donn\xe9es converties en cochant cette option (il est recommand\xe9 de travailler avec des valeurs Null car elles sont enti\xe8rement prises en charge par ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/ORDA/overview",children:"ORDA"}),")."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Impression non-bloquante"})," : \xc0 partir de 4D 20 R4, chaque process a ses propres param\xe8tres d'impression (options d'impression, imprimante courante, etc.), ce qui vous permet d'ex\xe9cuter plusieurs t\xe2ches d'impression simultan\xe9ment. Cochez cette option si vous souhaitez b\xe9n\xe9ficier de cette nouvelle impl\xe9mentation dans vos projets 4D convertis ou dans les bases de donn\xe9es converties du mode binaire au mode projet. ",(0,n.jsx)(s.strong,{children:"Lorsque l'option n'est pas coch\xe9e"}),", l'impl\xe9mentation pr\xe9c\xe9dente est appliqu\xe9e : les param\xe8tres d'impression 4D courants sont appliqu\xe9s globalement, l'imprimante passe en mode \"occup\xe9\" lorsqu'un job d'impression est en cours, vous devez appeler ",(0,n.jsx)(s.code,{children:"CLOSE PRINTING JOB"})," pour que l'imprimante soit disponible pour le prochain job d'impression (consultez la documentation 4D pr\xe9c\xe9dente pour plus d'informations)."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Sauvegarder les couleurs et les coordonn\xe9es de la structure dans un fichier catalog_editor.json s\xe9par\xe9"})," : \xc0 partir de 4D 20 R5, les modifications apport\xe9es dans l'\xe9diteur de Structure concernant l'apparence graphique des tables et des champs (couleur, position, ordre...) sont sauvegard\xe9es dans un fichier s\xe9par\xe9 nomm\xe9 ",(0,n.jsx)(s.code,{children:"catalog_editor.json"}),", stock\xe9 dans le dossier ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/Project/architecture#sources",children:"Sources"})," du projet. Cette nouvelle architecture de fichiers facilite la gestion des conflits de fusion dans les applications de gestion de versions (VCS) car le fichier ",(0,n.jsx)(s.code,{children:"catalog.4DCatalog"})," ne contient d\xe9sormais que les modifications cruciales de la structure de la base de donn\xe9es. Pour des raisons de compatibilit\xe9, cette fonctionnalit\xe9 n'est pas activ\xe9e par d\xe9faut dans les projets convertis \xe0 partir des versions pr\xe9c\xe9dentes de 4D, vous devez cocher cette option. Lorsque la fonctionnalit\xe9 est activ\xe9e, le fichier ",(0,n.jsx)(s.code,{children:"catalog_editor.json"})," est cr\xe9\xe9 lors de la premi\xe8re modification dans l'\xe9diteur de structure."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,s,t)=>{var n=t(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,t){var n,i={},l=null,d=null;for(n in void 0!==t&&(l=""+t),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(d=s.ref),s)o.call(s,n)&&!c.hasOwnProperty(n)&&(i[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:r,type:e,key:l,ref:d,props:i,_owner:a.current}}s.Fragment=i,s.jsx=l,s.jsxs=l},474848:(e,s,t)=>{e.exports=t(221020)},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>a});var n=t(296540);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);