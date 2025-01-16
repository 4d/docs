"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57329"],{151545:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"FormObjects/propertiesHeaders","title":"En-t\xeates","description":"Afficher en-t\xeates","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/FormObjects/properties_Headers.md","sourceDirName":"FormObjects","slug":"/FormObjects/propertiesHeaders","permalink":"/docs/fr/20-R7/FormObjects/propertiesHeaders","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Headers.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"propertiesHeaders","title":"En-t\xeates"},"sidebar":"docs","previous":{"title":"Quadrillage","permalink":"/docs/fr/20-R7/FormObjects/propertiesGridlines"},"next":{"title":"Aide","permalink":"/docs/fr/20-R7/FormObjects/propertiesHelp"}}'),r=s("785893"),i=s("250065");let l={id:"propertiesHeaders",title:"En-t\xeates"},d=void 0,a={},o=[{value:"Afficher en-t\xeates",id:"afficher-en-t\xeates",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge",level:4},{value:"Hauteur",id:"hauteur",level:2},{value:"Exemple JSON",id:"exemple-json",level:4},{value:"Grammaire JSON",id:"grammaire-json-1",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-1",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"afficher-en-t\xeates",children:"Afficher en-t\xeates"}),"\n",(0,r.jsxs)(n.p,{children:["Cette propri\xe9t\xe9 est utilis\xe9e pour afficher ou masquer ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/listboxOverview#list-box-headers",children:"les en-t\xeates de colonne listbox"}),". Il existe un en-t\xeate par colonne; chaque en-t\xeate est configur\xe9 s\xe9par\xe9ment."]}),"\n",(0,r.jsx)(n.h4,{id:"grammaire-json",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nom"}),(0,r.jsx)(n.th,{children:"Type de donn\xe9es"}),(0,r.jsx)(n.th,{children:"Valeurs possibles"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"showHeaders"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"true, false"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"objets-pris-en-charge",children:"Objets pris en charge"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"hauteur",children:"Hauteur"}),"\n",(0,r.jsxs)(n.p,{children:["Cette propri\xe9t\xe9 sert \xe0 d\xe9finir la hauteur de ligne d'un en-t\xeate de list box en ",(0,r.jsx)(n.strong,{children:"pixels"})," ou en ",(0,r.jsx)(n.strong,{children:"lignes de texte"})," (lorsqu'elle est affich\xe9e). Les deux types d'unit\xe9s peuvent \xeatre utilis\xe9s dans la m\xeame list box :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Pixel"})," - la valeur de hauteur est appliqu\xe9e directement \xe0 la ligne concern\xe9e, quelle que soit la taille de la police contenue dans les colonnes. Si une police est trop grande, le texte est tronqu\xe9. De plus, les images sont tronqu\xe9es ou redimensionn\xe9es selon leur format."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Ligne"})," - la hauteur est calcul\xe9e en tenant compte de la taille de police de la ligne concern\xe9e."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Si plus d'une taille est d\xe9finie, 4D utilise la plus grande. Par exemple, si une ligne contient \xabVerdana 18\xbb, \xabGeneva 12\xbb et \xabArial 9\xbb, 4D utilise \xabVerdana 18\xbb pour d\xe9terminer la hauteur de ligne (par exemple, 25 pixels). Cette hauteur est ensuite multipli\xe9e par le nombre de lignes d\xe9finies."}),"\n",(0,r.jsx)(n.li,{children:"Ce calcul ne prend pas en compte la taille des images ni les styles appliqu\xe9s aux polices."}),"\n",(0,r.jsx)(n.li,{children:"Sous macOS, la hauteur de ligne peut \xeatre incorrecte si l'utilisateur saisit des caract\xe8res qui ne sont pas disponibles dans la police s\xe9lectionn\xe9e. Lorsque cela se produit, une police de remplacement est utilis\xe9e, ce qui peut entra\xeener des variations de taille."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Cette propri\xe9t\xe9 peut \xeatre \xe9galement d\xe9finie dynamiquement \xe0 l'aide de la commande ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-SET-HEADERS-HEIGHT.301-4311129.en.html",children:"LISTBOX SET HEADERS HEIGHT"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'Conversion d\'unit\xe9s : lorsque vous passez d\'une unit\xe9 \xe0 l\'autre, 4D les convertit automatiquement et affiche le r\xe9sultat dans la liste des propri\xe9t\xe9s. Par exemple, si la police utilis\xe9e est "Lucida grande 24", une hauteur de "1 ligne" est convertie en "30 pixels" et une hauteur de "60 pixels" est convertie en "2 lignes".'}),"\n",(0,r.jsx)(n.p,{children:"A noter que la conversion en va-et-vient peut conduire \xe0 un r\xe9sultat final diff\xe9rent de la valeur de d\xe9part en raison des calculs automatiques effectu\xe9s par 4D. Ceci est illustr\xe9 dans les s\xe9quences suivantes :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"(font Arial 18)*: 52 pixels -> 2 lines -> 40 pixels"}),"\n",(0,r.jsx)(n.li,{children:"(font Arial 12)*: 3 pixels -> 0.4 line rounded up to 1 line -> 19 pixels"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-json",children:"Exemple JSON"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:' "List Box": {\n  "type": "listbox",\n  "showHeaders": true,\n  "headerHeight": "22px",  \n  ...\n  }\n'})}),"\n",(0,r.jsx)(n.h4,{id:"grammaire-json-1",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nom"}),(0,r.jsx)(n.th,{children:"Type de donn\xe9es"}),(0,r.jsx)(n.th,{children:"Valeurs possibles"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"headerHeight"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"d\xe9cimales positives +px | em"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"objets-pris-en-charge-1",children:"Objets pris en charge"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/propertiesFooters",children:"Pieds"})," - ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/listboxOverview#list-box-headers",children:"En-t\xeates List box"})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);