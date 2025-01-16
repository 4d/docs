"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8689"],{869099:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"ViewPro/commands/vp-add-range-name","title":"VP ADD RANGE NAME","description":"VP ADD RANGE NAME ( rangeObj Text { ; options : Object } )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-add-range-name.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-add-range-name","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-add-range-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-range-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-add-range-name","title":"VP ADD RANGE NAME"},"sidebar":"docs","previous":{"title":"VP ADD FORMULA NAME","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-add-formula-name"},"next":{"title":"VP ADD SELECTION","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-add-selection"}}'),t=s("785893"),d=s("250065");let o={id:"vp-add-range-name",title:"VP ADD RANGE NAME"},l=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP ADD RANGE NAME"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,t.jsx)(n.em,{children:"name"})," : Text { ; ",(0,t.jsx)(n.em,{children:"options"})," : Object } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objet plage"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nom de la formule"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Options de la formule nomm\xe9e"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.code,{children:"VP ADD RANGE NAME"})," cr\xe9e ou modifie une plage nomm\xe9e dans le document courant."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Les plages nomm\xe9es cr\xe9\xe9es par cette commande sont stock\xe9es dans le document."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"rangeObj"}),", passez la plage que vous souhaitez nommer et dans ",(0,t.jsx)(n.em,{children:"name"}),", passez le nouveau nom pour la plage. Si le nom est d\xe9j\xe0 utilis\xe9 dans le m\xeame scope, la nouvelle plage nomm\xe9e remplace la plage existante. A noter que vous pouvez utiliser le m\xeame nom pour plusieurs scopes (ci-dessous)."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez passer un objet avec des propri\xe9t\xe9s suppl\xe9mentaires pour la plage nomm\xe9e dans ",(0,t.jsx)(n.em,{children:"options"}),". Les propri\xe9t\xe9s suivantes sont prises en charge :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scope"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsxs)(n.td,{children:["Scope de la plage. Vous pouvez passer l'index de la feuille (la num\xe9rotation commence \xe0 z\xe9ro) ou utiliser les constantes suivantes: ",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk current sheet"})}),(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk workbook"})}),"Le scope d\xe9termine si le nom d'une plage est propre \xe0 une feuille (",(0,t.jsx)(n.em,{children:"scope"}),"=sheet index ou ",(0,t.jsx)(n.code,{children:"vk current sheet"}),"), ou s'il s'applique \xe0 l'ensemble du classeur (",(0,t.jsx)(n.em,{children:"scope"}),"=",(0,t.jsx)(n.code,{children:"vk workbook"}),")."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"comment"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Commentaire associ\xe9 \xe0 une plage nomm\xe9e"})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Une plage nomm\xe9e est en r\xe9alit\xe9 une formule nomm\xe9e contenant des coordonn\xe9es. La commande ",(0,t.jsx)(n.code,{children:"VP ADD RANGE NAME"})," facilite la cr\xe9ation de plages nomm\xe9es, mais vous pouvez \xe9galement utiliser la m\xe9thode ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-add-formula-name",children:(0,t.jsx)(n.code,{children:"VP ADD FORMULA NAME"})})," pour cr\xe9er des plages nomm\xe9es."]}),"\n",(0,t.jsxs)(n.li,{children:["Les formules d\xe9finissant des plages nomm\xe9es peuvent \xeatre r\xe9cup\xe9r\xe9es \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-get-formula-by-name",children:(0,t.jsx)(n.code,{children:"VP Get formula by name"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez cr\xe9er une plage nomm\xe9e \xe0 partir d'une plage contenant une cellule :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$range:=VP Cell("ViewProArea";2;10)\nVP ADD RANGE NAME($range;"Total1")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-get-names",children:"VP Get names"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-name",children:"VP Name"})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var r=s(667294);let t={},d=r.createContext(t);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);