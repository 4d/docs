"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92005"],{134410:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/list-item-position","title":"List item position","description":"List item position ( { ;} liste ; r\xe9fEl\xe9ment* ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/list-item-position.md","sourceDirName":"commands-legacy","slug":"/commands/list-item-position","permalink":"/docs/fr/commands/list-item-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flist-item-position.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"list-item-position","title":"List item position","slug":"/commands/list-item-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"List item parent","permalink":"/docs/fr/commands/list-item-parent"},"next":{"title":"LIST OF CHOICE LISTS","permalink":"/docs/fr/commands/list-of-choice-lists"}}'),i=t("785893"),r=t("250065");let l={id:"list-item-position",title:"List item position",slug:"/commands/list-item-position",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"List item position"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"liste"})," ; ",(0,i.jsx)(n.em,{children:"r\xe9fEl\xe9ment"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, liste est un nom d'objet (cha\xeene) Si omis, liste est une r\xe9f\xe9rence de liste"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"liste"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de liste (si * omis) ou Nom d'objet de type liste (si * pass\xe9)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"r\xe9fEl\xe9ment"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence d'\xe9l\xe9ment"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Position de l'\xe9l\xe9ment parmi la ou les liste(s) d\xe9ploy\xe9e(s)/contract\xe9e(s)"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"List item position"})," retourne la position de l'\xe9l\xe9ment dont vous avez pass\xe9 le num\xe9ro de r\xe9f\xe9rence dans ",(0,i.jsx)(n.em,{children:"r\xe9fEl\xe9ment"})," parmi la liste dont vous avez pass\xe9 le num\xe9ro de r\xe9f\xe9rence ou le nom d'objet dans ",(0,i.jsx)(n.em,{children:"liste"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"liste"})," est un nom d\u2019objet (cha\xeene) correspondant \xe0 une repr\xe9sentation de liste dans le formulaire. Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"liste"})," est une r\xe9f\xe9rence de liste hi\xe9rarchique (",(0,i.jsx)(n.a,{href:"#",title:"Expression de type Entier long identifiant de fa\xe7on unique une liste hi\xe9rarchique",children:"R\xe9fListe"}),"). Si vous utilisez une seule repr\xe9sentation de liste, vous pouvez utiliser indiff\xe9remment l\u2019une ou l\u2019autre syntaxe. En revanche, si vous utilisez plusieurs repr\xe9sentations d\u2019une m\xeame liste, la syntaxe bas\xe9e sur le nom d\u2019objet est requise car chaque repr\xe9sentation peut disposer de sa propre configuration d\xe9ploy\xe9e/contract\xe9e."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Si vous utilisez le caract\xe8re @ dans le nom d'objet de la liste et que le formulaire contient plusieurs listes r\xe9pondant \xe0 ce nom, la commande ",(0,i.jsx)(n.strong,{children:"List item position"})," s'appliquera au premier objet dont le nom correspond."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," A la diff\xe9rence des autres commandes de ce th\xe8me, cette commande ne permet pas de passer la valeur 0 dans ",(0,i.jsx)(n.em,{children:"r\xe9fEl\xe9ment"})," pour d\xe9signer le dernier \xe9l\xe9ment ajout\xe9."]}),"\n",(0,i.jsx)(n.p,{children:"La position est exprim\xe9e relativement \xe0 l'\xe9l\xe9ment sup\xe9rieur de la liste, en tenant compte de l'\xe9tat d\xe9ploy\xe9/contract\xe9 de la liste et de ses sous-listes."}),"\n",(0,i.jsxs)(n.p,{children:["Le r\xe9sultat est donc compris entre 1 et la valeur retourn\xe9e par ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/count-list-items",children:"Count list items"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si l'\xe9l\xe9ment n'est pas visible car il est inclus dans une liste contract\xe9e, ",(0,i.jsx)(n.strong,{children:"List item position"})," d\xe9ploie la liste correspondante de mani\xe8re \xe0 ce que l'\xe9l\xe9ment devienne visible."]}),"\n",(0,i.jsxs)(n.p,{children:["Si l'\xe9l\xe9ment n'existe pas, ",(0,i.jsx)(n.strong,{children:"List item position"})," retourne ",(0,i.jsx)(n.em,{children:"0"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/count-list-items",children:"Count list items"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/select-list-items-by-reference",children:"SELECT LIST ITEMS BY REFERENCE"})]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"629"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);