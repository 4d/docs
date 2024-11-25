"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5274"],{345057:function(e,s,n){n.r(s),n.d(s,{metadata:()=>i,contentTitle:()=>d,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>l});var i=JSON.parse('{"id":"commands-legacy/set-list-properties","title":"SET LIST PROPERTIES","description":"SET LIST PROPERTIES ( liste ; apparence {; ic\xf4ne {; hauteurLigne {; doubleClic {; multiS\xe9lection {; modifiable}}}}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-list-properties.md","sourceDirName":"commands-legacy","slug":"/commands/set-list-properties","permalink":"/docs/fr/commands/set-list-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-list-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-list-properties","title":"SET LIST PROPERTIES","slug":"/commands/set-list-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET LIST ITEM PROPERTIES","permalink":"/docs/fr/commands/set-list-item-properties"},"next":{"title":"SORT LIST","permalink":"/docs/fr/commands/sort-list"}}'),t=n("785893"),r=n("250065");let l={id:"set-list-properties",title:"SET LIST PROPERTIES",slug:"/commands/set-list-properties",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"SET LIST PROPERTIES"})," ( ",(0,t.jsx)(s.em,{children:"liste"})," ; ",(0,t.jsx)(s.em,{children:"apparence"})," {; ",(0,t.jsx)(s.em,{children:"ic\xf4ne"})," {; ",(0,t.jsx)(s.em,{children:"hauteurLigne"})," {; ",(0,t.jsx)(s.em,{children:"doubleClic"})," {; ",(0,t.jsx)(s.em,{children:"multiS\xe9lection"})," {; ",(0,t.jsx)(s.em,{children:"modifiable"}),"}}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"liste"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence de la liste"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"apparence"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"*** param\xe8tre obsol\xe8te, toujours passer 0 ***"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ic\xf4ne"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"*** Param\xe8tre obsol\xe8te, toujours passer 0 ***"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"hauteurLigne"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Hauteur minimale de la ligne (pixels)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"doubleClic"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"D\xe9ploiement/contraction sur double-clic 0 = autoriser, 1= emp\xeacher"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"multiS\xe9lection"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"S\xe9lections multiples 0 = interdire (d\xe9faut), 1 = autoriser"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"modifiable"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Enum\xe9ration modifiable 0 = non, 1 = oui (d\xe9faut)"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"SET LIST PROPERTIES"})," d\xe9finit la hauteur de ligne et le fonctionnement de la liste hi\xe9rarchique dont la r\xe9f\xe9rence est pass\xe9e dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"liste"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note de compatibilit\xe9 :"})," Les param\xe8tres ",(0,t.jsx)(s.em,{children:"apparence"})," et ",(0,t.jsx)(s.em,{children:"ic\xf4ne"})," sont obsol\xe8tes, ils doivent toujours prendre la valeur 0."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Si vous voulez personnaliser l'ic\xf4ne de chaque \xe9l\xe9ment d'une liste hi\xe9rarchique, utilisez la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(s.em,{children:"hauteurLigne"}),", la hauteur de ligne d'une liste hi\xe9rarchique sera d\xe9termin\xe9e par la police et la taille de police utilis\xe9es pour l'objet. Vous pouvez \xe9galement passer dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"hauteurLigne"})," la hauteur minimale des lignes de la liste hi\xe9rarchique. Si la valeur que vous passez est sup\xe9rieure \xe0 la hauteur des lignes d\xe9finie par la police et la taille de police, elle sera utilis\xe9e pour fixer la hauteur des lignes. Passez 0 pour utiliser la hauteur par d\xe9faut."]}),"\n",(0,t.jsxs)(s.p,{children:["Le param\xe8tre facultatif ",(0,t.jsx)(s.em,{children:"doubleClic"})," permet d\u2019emp\xeacher que le double-clic sur un \xe9l\xe9ment de la liste ne provoque le d\xe9ploiement ou la contraction de sa sous-liste.",(0,t.jsx)(s.br,{}),"\nPar d\xe9faut, une sous-liste est d\xe9ploy\xe9e ou contract\xe9e en cas de double-clic sur l\u2019\xe9l\xe9ment parent. Certains types d\u2019interfaces peuvent toutefois n\xe9cessiter une d\xe9sactivation de ce m\xe9canisme. Pour cela, passez 1 dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"doubleClic"}),". A noter que seul le double-clic sera d\xe9sactiv\xe9. Les sous-listes pourront toujours \xeatre d\xe9ploy\xe9es ou contract\xe9es par un clic sur l\u2019ic\xf4ne de d\xe9ploiement.",(0,t.jsx)(s.br,{}),"\nSi vous passez 0 ou omettez ce param\xe8tre, le fonctionnement par d\xe9faut est appliqu\xe9."]}),"\n",(0,t.jsxs)(s.p,{children:["Le param\xe8tre facultatif ",(0,t.jsx)(s.em,{children:"multiS\xe9lection"})," permet d\u2019indiquer si la liste doit accepter les s\xe9lections multiples.",(0,t.jsx)(s.br,{}),"\nPar d\xe9faut, il n\u2019est pas possible de s\xe9lectionner simultan\xe9ment plusieurs \xe9l\xe9ments d\u2019une liste hi\xe9rarchique. Si vous souhaitez que cette fonction soit disponible pour la liste, passez la valeur 1 dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"multiS\xe9lection"}),". Dans ce cas, les s\xe9lections multiples peuvent \xeatre effectu\xe9es :",(0,t.jsx)(s.br,{}),"\n- manuellement, \xe0 l\u2019aide des combinaisons de touches ",(0,t.jsx)(s.strong,{children:"Maj"}),"+",(0,t.jsx)(s.strong,{children:"clic"})," pour une s\xe9lection continue ou ",(0,t.jsx)(s.strong,{children:"Ctrl"}),"+",(0,t.jsx)(s.strong,{children:"clic"})," (Windows) / ",(0,t.jsx)(s.strong,{children:"Commande"}),"+",(0,t.jsx)(s.strong,{children:"clic"})," (Mac OS) pour une s\xe9lection discontinue,",(0,t.jsx)(s.br,{}),"\n- par programmation, \xe0 l\u2019aide des commandes ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/select-list-items-by-position",children:"SELECT LIST ITEMS BY POSITION"})," et ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/select-list-items-by-reference",children:"SELECT LIST ITEMS BY REFERENCE"}),".",(0,t.jsx)(s.br,{}),"\nSi vous passez 0 ou omettez le param\xe8tre ",(0,t.jsx)(s.em,{children:"multiS\xe9lection"}),", le fonctionnement par d\xe9faut est appliqu\xe9."]}),"\n",(0,t.jsxs)(s.p,{children:["Le param\xe8tre facultatif ",(0,t.jsx)(s.em,{children:"modifiable"})," permet d\u2019indiquer si la liste sera modifiable par l\u2019utilisateur lorsqu\u2019elle sera affich\xe9e sous forme d\u2019\xe9num\xe9ration associ\xe9e \xe0 un champ ou une variable en saisie. Lorsque l\u2019\xe9num\xe9ration est modifiable, un bouton ",(0,t.jsx)(s.strong,{children:"Modifier"})," est ins\xe9r\xe9 dans la fen\xeatre d\u2019\xe9num\xe9ration et l\u2019utilisateur peut ajouter, supprimer et trier les valeurs via un \xe9diteur sp\xe9cifique.",(0,t.jsx)(s.br,{}),"\nSi vous passez 1 ou omettez le param\xe8tre ",(0,t.jsx)(s.em,{children:"modifiable"}),", l\u2019\xe9num\xe9ration sera modifiable par l\u2019utilisateur ; si vous passez 0, elle ne sera pas modifiable."]}),"\n",(0,t.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"Vous souhaitez interdire le d\xe9ploiement/contraction sur double-clic. Vous pouvez \xe9crire dans la m\xe9thode du formulaire :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0hlVilles:=Load list(\"Villes\")\xa0//charger l'\xe9num\xe9ration Villes dans l'objet hlVilles\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET LIST PROPERTIES(hlVilles;0;0;0;1)\xa0//pas de d\xe9ploiement sur double-clic\n\xa0End case\n"})}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-list-item-properties",children:"GET LIST ITEM PROPERTIES"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-list-properties",children:"GET LIST PROPERTIES"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})]})]})}function u(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return l}});var i=n(667294);let t={},r=i.createContext(t);function l(e){let s=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);