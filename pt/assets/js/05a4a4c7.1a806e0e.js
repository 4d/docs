/*! For license information please see 05a4a4c7.1a806e0e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53280],{717195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(474848),d=t(28453);const r={id:"date",title:"Date"},a=void 0,o={id:"Concepts/date",title:"Date",description:"As vari\xe1veis, campos ou express\xf5es de tipo data podem ter um intervalo entre 1/1/100 e 31/12/32.767.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Concepts/dt_date.md",sourceDirName:"Concepts",slug:"/Concepts/date",permalink:"/docs/pt/20/Concepts/date",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_date.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"date",title:"Date"},sidebar:"docs",previous:{title:"Collection",permalink:"/docs/pt/20/Concepts/collection"},next:{title:"Null e indefinido",permalink:"/docs/pt/20/Concepts/null-undefined"}},i={},c=[{value:"Constantes literais de tipo hora",id:"constantes-literais-de-tipo-hora",level:2},{value:"Operadores de data",id:"operadores-de-data",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"As vari\xe1veis, campos ou express\xf5es de tipo data podem ter um intervalo entre 1/1/100 e 31/12/32.767."}),"\n",(0,s.jsx)(n.p,{children:"Apesar do modo de representa\xe7\xe3o de datas de C_DATE permitir trabalhar com datas at\xe9 o ano 32 767, certas opera\xe7\xf5es que passam pelo sistema imp\xf5e um limite inferior."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," No manual 4D Language Reference, par\xe2metros Data em descri\xe7\xf5es de comando s\xe3o  denominadas como Data, exceto quando marcadas de outra forma."]}),"\n",(0,s.jsx)(n.h2,{id:"constantes-literais-de-tipo-hora",children:"Constantes literais de tipo hora"}),"\n",(0,s.jsx)(n.p,{children:"Uma constante literal de tipo data est\xe1 cercada de sinais de exclama\xe7\xe3o (!...!). Uma data deve ser estruturada utilizando o formato ISO (!AAAA-MM-DD!). Uma data deve ser estruturada usando o formato ISO (!YYYY-MM-DD!) Estes s\xe3o alguns exemplos de constantes de datas: Estes s\xe3o alguns exemplos de constantes de datas: Estes s\xe3o alguns exemplos de constantes de datas:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"!1976-01-01!\n!2004-09-29!\n!2015-12-31!\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Uma data nula \xe9 especificada por ",(0,s.jsx)(n.em,{children:"!00-00-00!"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Dica:"})," O editor de m\xe9todos inclui um acesso direto para introduzir uma data nula. Para escrever uma data nula, introduza o caractere de exclama\xe7\xe3o (!) e aperte Enter.."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For compatibility reasons, 4D accepts date inputs using system format with two-digit years, such as !12/04/98!. Se pressup\xf5e que um ano com apenas dois digitos esteja no s\xe9culo XX ou XXI, dependendo se for maior ou menor de 30, a menos que mude essa configura\xe7\xe3o com o comando ",(0,s.jsx)(n.code,{children:"SET DEFAULT CENTURY"}),"."]}),"\n",(0,s.jsx)(n.li,{children:'Se marcou a op\xe7\xe3o "Utilizar a configura\xe7\xe3o regional del sistema" ( ver P\xe1gina M\xe9todos), deve utilizar o formato de data definido em seu sistema. Para sistemas dos Estados Unidos, datas s\xe3o digitadas no formato m\xeas/dia/ano, com uma barra "/" separando os valores.'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"operadores-de-data",children:"Operadores de data"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Opera\xe7\xe3o"}),(0,s.jsx)(n.th,{children:"Sintaxe"}),(0,s.jsx)(n.th,{children:"Retorna"}),(0,s.jsx)(n.th,{children:"Expression"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Diferen\xe7a de data"}),(0,s.jsx)(n.td,{children:"Date - Date"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"!2017-01-20! - !2017-01-01!"}),(0,s.jsx)(n.td,{children:"19"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Acr\xe9scimo de dia"}),(0,s.jsx)(n.td,{children:"Data + N\xfamero"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"!2017-01-20! !2017-01-20!"}),(0,s.jsx)(n.td,{children:"!2017-01-29!"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Subtrair dia"}),(0,s.jsx)(n.td,{children:"Data - N\xfamero"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"!2017-01-20! !2017-01-20!"}),(0,s.jsx)(n.td,{children:"!2017-01-11!"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Igual"}),(0,s.jsx)(n.td,{children:"Date = Date"}),(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsx)(n.td,{children:"!2017-01-20! = !2017-01-01!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-20! !2017-01-20!"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Desigualdade"}),(0,s.jsx)(n.td,{children:"Date # Date"}),(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsx)(n.td,{children:"!2017-01-20! !2017-01-20!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-20! !2017-01-20!"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Maior que"}),(0,s.jsx)(n.td,{children:"Date > Date"}),(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsx)(n.td,{children:"!2017-01-20! !2017-01-20!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-20! !2017-01-20!"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Menor que"}),(0,s.jsx)(n.td,{children:"Date < Date"}),(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsx)(n.td,{children:"!2017-01-20! !2017-01-20!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-20! !2017-01-20!"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Maior ou igual a"}),(0,s.jsx)(n.td,{children:"Date >= Date"}),(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsx)(n.td,{children:"!2017-01-20! !2017-01-20!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-01!>=!2017-01-20!"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Menor que ou igual a"}),(0,s.jsx)(n.td,{children:"Date <= Date"}),(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsx)(n.td,{children:"!2017-01-20! <= !2017-01-20!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-20! <= !2017-01-01!"}),(0,s.jsx)(n.td,{children:"False"})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var s=t(296540),d=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,r={},c=null,l=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,s)&&!i.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:d,type:e,key:c,ref:l,props:r,_owner:o.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(296540);const d={},r=s.createContext(d);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);