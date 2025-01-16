"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9656"],{214522:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/php-get-option","title":"PHP GET OPTION","description":"PHP GET OPTION ( option ; valeur )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/php-get-option.md","sourceDirName":"commands-legacy","slug":"/commands/php-get-option","permalink":"/docs/fr/20-R7/commands/php-get-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fphp-get-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"php-get-option","title":"PHP GET OPTION","slug":"/commands/php-get-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PHP GET FULL RESPONSE","permalink":"/docs/fr/20-R7/commands/php-get-full-response"},"next":{"title":"PHP SET OPTION","permalink":"/docs/fr/20-R7/commands/php-set-option"}}'),r=t("785893"),i=t("250065");let d={id:"php-get-option",title:"PHP GET OPTION",slug:"/commands/php-get-option",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PHP GET OPTION"})," ( ",(0,r.jsx)(n.em,{children:"option"})," ; ",(0,r.jsx)(n.em,{children:"valeur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"option"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Option \xe0 lire"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valeur"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeur courante de l\u2019option"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{title:"Compatibilit\xe9",type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PHP est obsol\xe8te dans 4D"}),". Il est d\xe9sormais recommand\xe9 d'utiliser la classe ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/API/SystemWorkerClass",children:(0,r.jsx)(n.code,{children:"4D.SystemWorker"})}),"."]})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"PHP GET OPTION"})," permet de conna\xeetre la valeur courante d\u2019une option relative \xe0 l\u2019\xe9x\xe9cution de scripts PHP."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"option"})," une constante du th\xe8me ",(0,r.jsx)(n.em,{children:"PHP"})," d\xe9signant l\u2019option \xe0 lire. La commande retourne dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"valeur"})," la valeur courante de l\u2019option. Vous pouvez passer une des constantes suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"_o_PHP privileges"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"**** S\xe9lecteur d\xe9sactiv\xe9 ****"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PHP raw result"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:["D\xe9finition du mode de traitement des en-t\xeates HTTP renvoy\xe9s par PHP dans le r\xe9sultat de l\u2019ex\xe9cution lorsque ce r\xe9sultat est de type texte (lorsque le r\xe9sultat est de type BLOB, les en-t\xeates sont toujours conserv\xe9s).",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Valeur(s) possible(s)"})," : Bool\xe9en. Faux (valeur par d\xe9faut) = supprimer les en-t\xeates HTTP du r\xe9sultat. Vrai = conserver les en-t\xeates HTTP."]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Seul le compte utilisateur est retourn\xe9 lorsque vous utilisez l'option PHP privileges avec la commande ",(0,r.jsx)(n.strong,{children:"PHP GET OPTION"})," (le mot de passe n'est pas retourn\xe9)."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/php-get-full-response",children:"PHP GET FULL RESPONSE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/php-set-option",children:"PHP SET OPTION"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1060"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);