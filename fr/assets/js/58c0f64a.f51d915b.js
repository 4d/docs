"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59936"],{374637:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/ob-instance-of","title":"OB Instance of","description":"OB Instance of ( objet ; classe ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/ob-instance-of.md","sourceDirName":"commands-legacy","slug":"/commands/ob-instance-of","permalink":"/docs/fr/20-R8/commands/ob-instance-of","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-instance-of.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ob-instance-of","title":"OB Instance of","slug":"/commands/ob-instance-of","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Get type","permalink":"/docs/fr/20-R8/commands/ob-get-type"},"next":{"title":"OB Is defined","permalink":"/docs/fr/20-R8/commands/ob-is-defined"}}'),i=s("785893"),r=s("250065");let c={id:"ob-instance-of",title:"OB Instance of",slug:"/commands/ob-instance-of",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OB Instance of"})," ( ",(0,i.jsx)(n.em,{children:"objet"})," ; ",(0,i.jsx)(n.em,{children:"classe"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Objet dont la classe doit \xeatre identifi\xe9e"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"classe"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Classe dont l'appartenance est \xe0 identifier"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Vrai si l'objet appartient \xe0 la classe ou classe enfant indiqu\xe9e, sinon faux"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"OB Instance of"})," retourne vrai si ",(0,i.jsx)(n.em,{children:"objet"})," appartient \xe0 ",(0,i.jsx)(n.em,{children:"classe"})," ou \xe0 l'une de ses classes enfant. Sinon, elle retourne faux."]}),"\n",(0,i.jsxs)(n.p,{children:["Si ",(0,i.jsx)(n.em,{children:"classe"})," n'est pas un objet de classe valide, l'erreur -10745 est retourn\xe9e."]}),"\n",(0,i.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"Vous avez cr\xe9\xe9 la classe Polygone :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Classe : Polygone\n Class constructor($width : Integer; $height : Integer)\n This.area:=$width*$height\n"})}),"\n",(0,i.jsx)(n.p,{children:"Puis, dans une m\xe9thode, vous pouvez saisir :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0var $poly : Object\n\xa0var $instance : Boolean\n\xa0$poly:=cs.Polygone.new(4;3)\n\xa0$instance:=OB Instance of($poly;cs.Polygone)\xa0// vrai\n\xa0$instance:=OB Instance of($poly;4D.Object)\xa0// vrai\n\xa0$instance:=OB Instance of($poly;cs.Circle)\xa0// faux\n"})}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/ob-class",children:"OB Class"})}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1731"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return c}});var t=s(667294);let i={},r=t.createContext(i);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);