"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84202"],{834592:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/asserted","title":"Asserted","description":"Asserted ( expressionBool {; texteMessage} ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/asserted.md","sourceDirName":"commands-legacy","slug":"/commands/asserted","permalink":"/docs/fr/commands/asserted","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fasserted.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"asserted","title":"Asserted","slug":"/commands/asserted","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ASSERT","permalink":"/docs/fr/commands/assert"},"next":{"title":"FILTER EVENT","permalink":"/docs/fr/commands/filter-event"}}'),t=n("785893"),d=n("250065");let i={id:"asserted",title:"Asserted",slug:"/commands/asserted",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Asserted"})," ( ",(0,t.jsx)(s.em,{children:"expressionBool"})," {; ",(0,t.jsx)(s.em,{children:"texteMessage"}),"} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"expressionBool"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Expression bool\xe9enne"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"texteMessage"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Texte du message d\u2019erreur"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"R\xe9sultat"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"R\xe9sultat de l\u2019\xe9valuation d\u2019expressionBool"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"Asserted"})," a un fonctionnement semblable \xe0 celui de la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/assert",children:"ASSERT"}),", \xe0 la diff\xe9rence pr\xe8s qu\u2019elle retourne une valeur issue de l\u2019\xe9valuation du param\xe8tre ",(0,t.jsx)(s.em,{children:"expressionBool"}),". Elle permet donc d\u2019utiliser une assertion lors de l\u2019\xe9valuation d\u2019une condition (cf. exemple). Pour plus d\u2019informations sur le fonctionnement des assertions et sur les param\xe8tres de cette commande, reportez-vous \xe0 la description de la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/assert",children:"ASSERT"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Asserted"})," accepte une expression bool\xe9enne en param\xe8tre et retourne le r\xe9sultat de l\u2019\xe9valuation de cette expression. Si l\u2019expression est fausse et si les assertions sont activ\xe9es (cf. commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/set-assert-enabled",children:"SET ASSERT ENABLED"}),"), l\u2019erreur -10518 est g\xe9n\xe9r\xe9e, exactement comme pour la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/assert",children:"ASSERT"}),". Si les assertions sont inactiv\xe9es, ",(0,t.jsx)(s.strong,{children:"Asserted"})," retourne simplement le r\xe9sultat de l\u2019expression qui lui est pass\xe9e sans d\xe9clencher d\u2019erreur."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Comme la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/assert",children:"ASSERT"}),", ",(0,t.jsx)(s.strong,{children:"Asserted"})," fonctionne en mode interpr\xe9t\xe9 et en mode compil\xe9."]}),"\n",(0,t.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"Insertion d\u2019une assertion dans l\u2019\xe9valuation d\u2019une expression :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0READ WRITE([Table 1])\n\xa0LOAD RECORD([Table 1])\n\xa0If(Asserted(Not(Locked([Table 1]))))\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// Ce code d\xe9clenche l'erreur\xa0 -10518\xa0 si l'enregistrement est verrouill\xe9\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0End if\n"})}),"\n",(0,t.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/assert",children:"ASSERT"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-assert-enabled",children:"Get assert enabled"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/set-assert-enabled",children:"SET ASSERT ENABLED"})]}),"\n",(0,t.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"1132"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2713"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifie les variables"}),(0,t.jsx)(s.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return i}});var r=n(667294);let t={},d=r.createContext(t);function i(e){let s=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);