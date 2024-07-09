/*! For license information please see 5d64c04e.7f84f9e4.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56822],{442554:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=s(474848),t=s(28453);const i={id:"propertiesHeaders",title:"En-t\xeates"},l=void 0,o={id:"FormObjects/propertiesHeaders",title:"En-t\xeates",description:"Afficher en-t\xeates",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/FormObjects/properties_Headers.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesHeaders",permalink:"/docs/fr/18/FormObjects/propertiesHeaders",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Headers.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"propertiesHeaders",title:"En-t\xeates"},sidebar:"docs",previous:{title:"Quadrillage",permalink:"/docs/fr/18/FormObjects/propertiesGridlines"},next:{title:"Aide",permalink:"/docs/fr/18/FormObjects/propertiesHelp"}},d={},a=[{value:"Afficher en-t\xeates",id:"Afficher-en-t\xeates",level:2},{value:"Grammaire JSON",id:"Grammaire-JSON",level:4},{value:"Objets pris en charge",id:"Objets-pris-en-charge",level:4},{value:"Hauteur",id:"Hauteur",level:2},{value:"Exemple JSON",id:"Exemple-JSON",level:4},{value:"Grammaire JSON",id:"Grammaire-JSON-1",level:4},{value:"Objets pris en charge",id:"Objets-pris-en-charge-1",level:4},{value:"Voir \xe9galement",id:"Voir-\xe9galement",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"Afficher-en-t\xeates",children:"Afficher en-t\xeates"}),"\n",(0,r.jsxs)(n.p,{children:["Cette propri\xe9t\xe9 est utilis\xe9e pour afficher ou masquer ",(0,r.jsx)(n.a,{href:"/docs/fr/18/FormObjects/listboxOverview#list-box-headers",children:"les en-t\xeates de colonne listbox"}),". Il existe un en-t\xeate par colonne; chaque en-t\xeate est configur\xe9 s\xe9par\xe9ment."]}),"\n",(0,r.jsx)(n.h4,{id:"Grammaire-JSON",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nom"}),(0,r.jsx)(n.th,{children:"Type de donn\xe9es"}),(0,r.jsx)(n.th,{children:"Valeurs possibles"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"showHeaders"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"true, false"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"Objets-pris-en-charge",children:"Objets pris en charge"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"Hauteur",children:"Hauteur"}),"\n",(0,r.jsxs)(n.p,{children:["Cette propri\xe9t\xe9 sert \xe0 d\xe9finir la hauteur de ligne d'un en-t\xeate de list box en ",(0,r.jsx)(n.strong,{children:"pixels"})," ou en ",(0,r.jsx)(n.strong,{children:"lignes de texte"})," (lorsqu'elle est affich\xe9e). Les deux types d'unit\xe9s peuvent \xeatre utilis\xe9s dans la m\xeame list box :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Pixel"})," - la valeur de hauteur est appliqu\xe9e directement \xe0 la ligne concern\xe9e, quelle que soit la taille de la police contenue dans les colonnes. Si une police est trop grande, le texte est tronqu\xe9. De plus, les images sont tronqu\xe9es ou redimensionn\xe9es selon leur format."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Ligne"})," - la hauteur est calcul\xe9e en tenant compte de la taille de police de la ligne concern\xe9e."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Si plus d'une taille est d\xe9finie, 4D utilise la plus grande. Par exemple, si une ligne contient \xabVerdana 18\xbb, \xabGeneva 12\xbb et \xabArial 9\xbb, 4D utilise \xabVerdana 18\xbb pour d\xe9terminer la hauteur de ligne (par exemple, 25 pixels). Cette hauteur est ensuite multipli\xe9e par le nombre de lignes d\xe9finies."}),"\n",(0,r.jsx)(n.li,{children:"Ce calcul ne prend pas en compte la taille des images ni les styles appliqu\xe9s aux polices."}),"\n",(0,r.jsx)(n.li,{children:"Sous macOS, la hauteur de ligne peut \xeatre incorrecte si l'utilisateur saisit des caract\xe8res qui ne sont pas disponibles dans la police s\xe9lectionn\xe9e. Lorsque cela se produit, une police de remplacement est utilis\xe9e, ce qui peut entra\xeener des variations de taille."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Cette propri\xe9t\xe9 peut \xeatre \xe9galement d\xe9finie dynamiquement \xe0 l'aide de la commande ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-SET-HEADERS-HEIGHT.301-4311129.en.html",children:"LISTBOX SET HEADERS HEIGHT"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'Conversion d\'unit\xe9s : lorsque vous passez d\'une unit\xe9 \xe0 l\'autre, 4D les convertit automatiquement et affiche le r\xe9sultat dans la liste des propri\xe9t\xe9s. Par exemple, si la police utilis\xe9e est "Lucida grande 24", une hauteur de "1 ligne" est convertie en "30 pixels" et une hauteur de "60 pixels" est convertie en "2 lignes".'}),"\n",(0,r.jsx)(n.p,{children:"A noter que la conversion en va-et-vient peut conduire \xe0 un r\xe9sultat final diff\xe9rent de la valeur de d\xe9part en raison des calculs automatiques effectu\xe9s par 4D. Ceci est illustr\xe9 dans les s\xe9quences suivantes :"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"(font Arial 18)"}),": 52 pixels -> 2 lines -> 40 pixels ",(0,r.jsx)(n.em,{children:"(font Arial 12)"}),": 3 pixels -> 0.4 line rounded up to 1 line -> 19 pixels"]}),"\n",(0,r.jsx)(n.h4,{id:"Exemple-JSON",children:"Exemple JSON"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:' "List Box": {\n  "type": "listbox",\n  "showHeaders": true,\n  "headerHeight": "22px",  \n  ...\n  }\n'})}),"\n",(0,r.jsx)(n.h4,{id:"Grammaire-JSON-1",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nom"}),(0,r.jsx)(n.th,{children:"Type de donn\xe9es"}),(0,r.jsx)(n.th,{children:"Valeurs possibles"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"headerHeight"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"d\xe9cimales positives +px | em )"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"Objets-pris-en-charge-1",children:"Objets pris en charge"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/18/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,r.jsx)(n.h4,{id:"Voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/18/FormObjects/propertiesFooters",children:"Pieds"})," - ",(0,r.jsx)(n.a,{href:"/docs/fr/18/FormObjects/listboxOverview#list-box-headers",children:"En-t\xeates List box"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,n,s)=>{var r=s(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var r,i={},a=null,c=null;for(r in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,r)&&!d.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:a,ref:c,props:i,_owner:o.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(296540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);