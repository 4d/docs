"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65520"],{602883:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/qr-set-info-row","title":"QR SET INFO ROW","description":"QR SET INFO ROW ( zone ; ligne ; cach\xe9e )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/qr-set-info-row.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-info-row","permalink":"/docs/fr/commands/qr-set-info-row","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-info-row.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"qr-set-info-row","title":"QR SET INFO ROW","slug":"/commands/qr-set-info-row","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET INFO COLUMN","permalink":"/docs/fr/commands/qr-set-info-column"},"next":{"title":"QR SET REPORT KIND","permalink":"/docs/fr/commands/qr-set-report-kind"}}'),i=r("785893"),t=r("250065");let d={id:"qr-set-info-row",title:"QR SET INFO ROW",slug:"/commands/qr-set-info-row",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"QR SET INFO ROW"})," ( ",(0,i.jsx)(n.em,{children:"zone"})," ; ",(0,i.jsx)(n.em,{children:"ligne"})," ; ",(0,i.jsx)(n.em,{children:"cach\xe9e"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zone"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ligne"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Ligne"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cach\xe9e"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"0 = Visible, 1 = Cach\xe9e"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"QR SET INFO ROW"})," permet d'afficher ou de masquer la ligne dont la r\xe9f\xe9rence est pass\xe9e dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"ligne"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"ligne"})," d\xe9signe la ligne \xe0 modifier. Vous pouvez passer soit :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"une valeur enti\xe8re positive pour d\xe9signer la ligne de sous-total correspondante,"}),"\n",(0,i.jsxs)(n.li,{children:["une des constantes suivantes du th\xe8me ",(0,i.jsx)(n.em,{children:"QR Lignes pour Propri\xe9t\xe9s"})," :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"qr detail"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"-2"}),(0,i.jsx)(n.td,{children:"Zone D\xe9tail de l'\xe9tat"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"qr grand total"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"-3"}),(0,i.jsx)(n.td,{children:"Zone Total g\xe9n\xe9ral"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"qr title"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"-1"}),(0,i.jsx)(n.td,{children:"Intitul\xe9 de l'\xe9tat"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"cach\xe9e"})," permet de sp\xe9cifier si le contenu de la ligne doit \xeatre affich\xe9 ou masqu\xe9 :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["si ",(0,i.jsx)(n.em,{children:"cach\xe9e"})," vaut 1, le contenu de la ligne est masqu\xe9 ;"]}),"\n",(0,i.jsxs)(n.li,{children:["si ",(0,i.jsx)(n.em,{children:"cach\xe9e"})," vaut 0, le contenu de la ligne est affich\xe9."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,i.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e.",(0,i.jsx)(n.br,{}),"\nSi le param\xe8tre ",(0,i.jsx)(n.em,{children:"ligne"})," est incorrect, l\u2019erreur -9852 est g\xe9n\xe9r\xe9e."]}),"\n",(0,i.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"L'instruction suivante masque le contenu de la ligne D\xe9tail :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0QR SET INFO ROW(maZone;qr detail;1)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/qr-get-info-column",children:"QR GET INFO COLUMN"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/qr-get-info-row",children:"QR Get info row"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/qr-set-info-column",children:"QR SET INFO COLUMN"})]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"763"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifie les variables"}),(0,i.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var s=r(667294);let i={},t=s.createContext(i);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);