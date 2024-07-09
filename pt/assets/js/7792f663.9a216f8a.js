/*! For license information please see 7792f663.9a216f8a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11129],{263900:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var r=n(474848),t=n(28453);const s={id:"vp-flush-commands",title:"VP FLUSH COMMANDS"},d=void 0,a={id:"ViewPro/commands/vp-flush-commands",title:"VP FLUSH COMMANDS",description:"VP FLUSH COMMANDS (  vpAreaName : Text )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-flush-commands.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-flush-commands",permalink:"/docs/pt/ViewPro/commands/vp-flush-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-flush-commands.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-flush-commands",title:"VP FLUSH COMMANDS"},sidebar:"docs",previous:{title:"VP Find table",permalink:"/docs/pt/ViewPro/commands/vp-find-table"},next:{title:"VP Font to object",permalink:"/docs/pt/ViewPro/commands/vp-font-to-object"}},c={},i=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:4},{value:"Exemplo",id:"Exemplo",level:4}];function m(e){const o={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"VP FLUSH COMMANDS"})," (  ",(0,r.jsx)(o.em,{children:"vpAreaName"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(o.th,{})]})}),(0,r.jsx)(o.tbody,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"vpAreaName"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"->"}),(0,r.jsx)(o.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,r.jsx)(o.td,{})]})})]}),"\n",(0,r.jsx)(o.h4,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"VP FLUSH COMMANDS"})," command immediately executes stored commands and clears the command buffer."]}),"\n",(0,r.jsxs)(o.p,{children:["Em ",(0,r.jsx)(o.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,r.jsxs)(o.p,{children:["Para aumentar o desempenho e reduzir o n\xfamero de solicita\xe7\xf5es enviadas, os comandos do 4D View Pro chamados pelo desenvolvedor s\xe3o armazenados em um buffer de comando. Quando chamado, ",(0,r.jsx)(o.code,{children:"VP FLUSH COMMANDS"})," executa os comandos como um lote ao sair do m\xe9todo e esvazia o conte\xfado do buffer de comandos."]}),"\n",(0,r.jsx)(o.h4,{id:"Exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(o.p,{children:"Voc\xea deseja rastrear a execu\xe7\xe3o dos comandos e esvaziar o buffer de comandos:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\n VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")\n VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")\n VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")\n \n VP FLUSH COMMANDS(("ViewProArea1")\n TRACE\n'})})]})}function l(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},221020:(e,o,n)=>{var r=n(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,o,n){var r,s={},i=null,m=null;for(r in void 0!==n&&(i=""+n),void 0!==o.key&&(i=""+o.key),void 0!==o.ref&&(m=o.ref),o)d.call(o,r)&&!c.hasOwnProperty(r)&&(s[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===s[r]&&(s[r]=o[r]);return{$$typeof:t,type:e,key:i,ref:m,props:s,_owner:a.current}}o.Fragment=s,o.jsx=i,o.jsxs=i},474848:(e,o,n)=>{e.exports=n(221020)},28453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>a});var r=n(296540);const t={},s=r.createContext(t);function d(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);