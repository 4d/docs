"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28443"],{680908:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>a,toc:()=>d,contentTitle:()=>c});var n=JSON.parse('{"id":"commands-legacy/string-list-to-array","title":"STRING LIST TO ARRAY","description":"STRING LIST TO ARRAY ( resNum ; tabCha\xeenes {; resFichier} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/string-list-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/string-list-to-array","permalink":"/docs/fr/commands/string-list-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstring-list-to-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"string-list-to-array","title":"STRING LIST TO ARRAY","slug":"/commands/string-list-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESOURCE TYPE LIST","permalink":"/docs/fr/commands/resource-type-list"},"next":{"title":"SQL","permalink":"/docs/fr/commands/theme/SQL"}}'),t=r("785893"),i=r("250065");let l={id:"string-list-to-array",title:"STRING LIST TO ARRAY",slug:"/commands/string-list-to-array",displayed_sidebar:"docs"},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Compatibilit\xe9 avec l&#39;architecture XLIFF",id:"compatibilit\xe9-avec-larchitecture-xliff",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let s={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"STRING LIST TO ARRAY"})," ( ",(0,t.jsx)(s.em,{children:"resNum"})," ; ",(0,t.jsx)(s.em,{children:"tabCha\xeenes"})," {; ",(0,t.jsx)(s.em,{children:"resFichier"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resNum"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de ressource ou Attribut 'id' de l'\xe9l\xe9ment 'group' (XLIFF)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tabCha\xeenes"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Cha\xeenes de la ressource STR# ou Cha\xeenes de l'\xe9l\xe9ment 'group' (XLIFF)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resFichier"}),(0,t.jsx)(s.td,{children:"Time"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence de fichier de ressources Si omis : tous les fichiers XLIFF ou les fichiers de ressources ouverts"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"STRING LIST TO ARRAY"})," remplit le tableau ",(0,t.jsx)(s.em,{children:"cha\xeenes"})," avec :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:['soit les cha\xeenes stock\xe9es dans la ressource de type liste de cha\xeenes ("STR#") dont vous avez pass\xe9 le num\xe9ro d\'ID dans ',(0,t.jsx)(s.em,{children:"resNum"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["soit une cha\xeene stock\xe9e dans un fichier XLIFF ouvert dont vous avez pass\xe9 l'attribut 'id' de l'\xe9l\xe9ment 'group' dans ",(0,t.jsx)(s.em,{children:"resNum"}),' (cf. ci-dessous "Compatibilit\xe9 avec l\'architecture XLIFF").']}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Si la ressource n'est pas trouv\xe9e, le tableau ",(0,t.jsx)(s.em,{children:"cha\xeenes"})," reste inchang\xe9 et la variable syst\xe8me OK prend la valeur 0 (z\xe9ro)."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous passez un num\xe9ro de r\xe9f\xe9rence de fichier de ressources valide dans ",(0,t.jsx)(s.em,{children:"resFichier"}),", la ressource est recherch\xe9e dans ce fichier uniquement. Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(s.em,{children:"resFichier"}),", c'est la premi\xe8re occurrence de la ressource rencontr\xe9e dans la cha\xeene des fichiers de ressources qui sera retourn\xe9e."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous ne pr\xe9-d\xe9clarez pas le tableau ",(0,t.jsx)(s.em,{children:"cha\xeenes"})," avant d'appeler ",(0,t.jsx)(s.strong,{children:"STRING LIST TO ARRAY"}),", la commande cr\xe9e un tableau de type Texte. Si vous pr\xe9-d\xe9clarez le tableau, vous pouvez lui assigner le type Alpha ou Texte."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Chaque cha\xeene d'une ressource liste de cha\xeenes peut contenir jusqu'\xe0 255 caract\xe8res."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Conseil :"})," Lorsque vous utilisez des ressources listes de cha\xeenes, limitez-vous \xe0 des ressources de 32 Ko maximum et quelques centaines de cha\xeenes par ressource."]}),"\n",(0,t.jsx)(s.h2,{id:"compatibilit\xe9-avec-larchitecture-xliff",children:"Compatibilit\xe9 avec l'architecture XLIFF"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"STRING LIST TO ARRAY"})," est compatible avec l\u2019architecture XLIFF de 4D v11 : la commande recherche dans un premier temps la valeur correspondant \xe0 ",(0,t.jsx)(s.em,{children:"resNum"})," dans tous les fichiers XLIFF ouverts (si le param\xe8tre ",(0,t.jsx)(s.em,{children:"resFichier"})," est omis) et remplit le tableau ",(0,t.jsx)(s.em,{children:"cha\xeenes"})," avec les valeurs correspondantes. Dans ce cas, ",(0,t.jsx)(s.em,{children:"resNum"})," d\xe9signe l\u2019attribut ",(0,t.jsx)(s.strong,{children:"id"})," de l\u2019\xe9l\xe9ment ",(0,t.jsx)(s.strong,{children:"group"})," et le tableau ",(0,t.jsx)(s.em,{children:"cha\xeenes"})," contient toutes les cha\xeenes de l\u2019\xe9l\xe9ment. Si la valeur n\u2019est pas trouv\xe9e, la commande poursuit la recherche dans les fichiers de ressources ouverts.",(0,t.jsx)(s.br,{}),"\nPour plus d'informations sur l'architecture XLIFF dans 4D, reportez-vous au manuel Mode D\xe9veloppement."]}),"\n",(0,t.jsx)(s.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(s.p,{children:"La variable syst\xe8me OK prend la valeur 1 si la ressource est trouv\xe9e, sinon elle prend la valeur 0 (z\xe9ro)."}),"\n",(0,t.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-indexed-string",children:"Get indexed string"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-string-resource",children:"Get string resource"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-text-resource",children:"Get text resource"})]}),"\n",(0,t.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"511"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifie les variables"}),(0,t.jsx)(s.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return c},a:function(){return l}});var n=r(667294);let t={},i=n.createContext(t);function l(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);