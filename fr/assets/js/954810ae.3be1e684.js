"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68762"],{461181:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/svg-find-element-id-by-coordinates","title":"SVG Find element ID by coordinates","description":"SVG Find element ID by coordinates ( { ;} objetImage ; x ; y* ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/svg-find-element-id-by-coordinates.md","sourceDirName":"commands-legacy","slug":"/commands/svg-find-element-id-by-coordinates","permalink":"/docs/fr/commands/svg-find-element-id-by-coordinates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsvg-find-element-id-by-coordinates.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"svg-find-element-id-by-coordinates","title":"SVG Find element ID by coordinates","slug":"/commands/svg-find-element-id-by-coordinates","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SVG EXPORT TO PICTURE","permalink":"/docs/fr/commands/svg-export-to-picture"},"next":{"title":"SVG Find element IDs by rect","permalink":"/docs/fr/commands/svg-find-element-ids-by-rect"}}'),i=s("785893"),r=s("250065");let d={id:"svg-find-element-id-by-coordinates",title:"SVG Find element ID by coordinates",slug:"/commands/svg-find-element-id-by-coordinates",displayed_sidebar:"docs"},o=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SVG Find element ID by coordinates"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objetImage"})," ; ",(0,i.jsx)(n.em,{children:"x"})," ; ",(0,i.jsx)(n.em,{children:"y"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objetImage est un nom d\u2019objet (cha\xeene) Si omis, objetImage est un champ ou une variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objetPicture"}),(0,i.jsx)(n.td,{children:"Picture"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom d\u2019objet (si * sp\xe9cifi\xe9) ou Champ ou Variable (si * omis)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"x"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Coordonn\xe9e X en pixels"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"y"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Coordonn\xe9e Y en pixels"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"ID de l\u2019\xe9l\xe9ment se trouvant \xe0 l\u2019emplacement x,y"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"SVG Find element ID by coordinates"}),' retourne l\u2019ID (attribut "id" ou "xml:id") de l\u2019\xe9l\xe9ment XML situ\xe9 \xe0 l\u2019emplacement d\xe9fini par les coordonn\xe9es (',(0,i.jsx)(n.em,{children:"x"}),",",(0,i.jsx)(n.em,{children:"y"}),") dans l\u2019image SVG d\xe9sign\xe9e par le param\xe8tre ",(0,i.jsx)(n.em,{children:"objetImage"}),". Cette commande permet notamment de cr\xe9er des interfaces graphiques interactives utilisant des objets SVG."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Pour plus d'informations sur le format SVG, reportez-vous \xe0 la section ",(0,i.jsx)(n.em,{children:"Pr\xe9sentation des commandes XML g\xe9n\xe9riques"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objetImage"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objetImage"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,i.jsx)(n.p,{children:'A noter qu\u2019il n\u2019est pas obligatoire que l\u2019image soit affich\xe9e dans un formulaire. Dans ce cas, la syntaxe de type "nom d\u2019objet" n\u2019est pas valide, vous devez passer un nom de champ ou de variable.'}),"\n",(0,i.jsxs)(n.p,{children:["Les coordonn\xe9es pass\xe9es dans les param\xe8tres ",(0,i.jsx)(n.em,{children:"x"})," et ",(0,i.jsx)(n.em,{children:"y"})," doivent \xeatre exprim\xe9es en pixels relativement \xe0 l\u2019angle sup\xe9rieur gauche de l\u2019image (0,0). Dans le contexte d\u2019une image affich\xe9e dans un formulaire, vous pouvez utiliser les valeurs retourn\xe9es par les ",(0,i.jsx)(n.em,{children:"variables syst\xe8me"})," MouseX et MouseY. Ces variables sont mises \xe0 jour dans les \xe9v\xe9nements formulaire On Clicked, On Double Clicked et On Mouse Up ainsi que On Mouse Enter et On Mouse Move."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Dans le syst\xe8me de coordonn\xe9es des images, MouseX et MouseY d\xe9finissent toujours le m\xeame point de l'image, quel que soit son format d\u2019affichage (hormis pour le format \"mosa\xefque\"), m\xeame si l'image a d\xe9fil\xe9 ou a \xe9t\xe9 zoom\xe9e."]}),"\n",(0,i.jsx)(n.p,{children:"Le point pris en compte est le premier point atteint. Par exemple, dans le cas ci-dessous, la commande retournera l\u2019ID du cercle si les coordonn\xe9es du point A sont pass\xe9es et celui du rectangle si les coordonn\xe9es du point B sont pass\xe9es :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(603490).Z+"",width:"200",height:"76"})}),"\n",(0,i.jsx)(n.p,{children:"Si les coordonn\xe9es correspondent \xe0 des objets superpos\xe9s ou composites, la commande retourne l\u2019ID du premier objet disposant d\u2019un attribut ID valide en remontant si n\xe9cessaire parmi les \xe9l\xe9ments parents."}),"\n",(0,i.jsx)(n.p,{children:"La commande retourne une cha\xeene vide si :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'la racine est atteinte sans qu\u2019un attribut "id" ait \xe9t\xe9 trouv\xe9,'}),"\n",(0,i.jsx)(n.li,{children:"le point de coordonn\xe9es n\u2019appartient \xe0 aucun objet,"}),"\n",(0,i.jsx)(n.li,{children:'l\u2019attribut "id" est une cha\xeene vide.'}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"}),' Cette commande ne permet pas de d\xe9tecter des objets dont la valeur d\'opacit\xe9 (attribut "fill-opacity") est inf\xe9rieure \xe0 0,01']}),"\n",(0,i.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,i.jsxs)(n.p,{children:["Si ",(0,i.jsx)(n.em,{children:"objetImage"})," ne contient pas une image SVG valide, la commande retourne une cha\xeene vide et la variable syst\xe8me OK prend la valeur 0. Sinon, si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1."]}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/commands/svg-find-element-ids-by-rect",children:"SVG Find element IDs by rect"})}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1054"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifie les variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},603490:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var t=s(667294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);