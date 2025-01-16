"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59966"],{734567:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>l,assets:()=>i,toc:()=>c,contentTitle:()=>a});var l=JSON.parse('{"id":"commands-legacy/call-chain","title":"Call chain","description":"Call chain : Collection","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/call-chain.md","sourceDirName":"commands-legacy","slug":"/commands/call-chain","permalink":"/docs/fr/commands/call-chain","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcall-chain.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"call-chain","title":"Call chain","slug":"/commands/call-chain","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Action info","permalink":"/docs/fr/commands/action-info"},"next":{"title":"Command name","permalink":"/docs/fr/commands/command-name"}}'),d=t("785893"),r=t("250065");let s={id:"call-chain",title:"Call chain",slug:"/commands/call-chain",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Call chain"})," : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"R\xe9sultat"}),(0,d.jsx)(n.td,{children:"Collection"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Collection d'objets d\xe9crivant la cha\xeene d'appel d'une m\xe9thode dans un process"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"Call chain"})," retourne une collection d'objets d\xe9crivant chaque \xe9tape de la cha\xeene d'appel d'une m\xe9thode, dans le process courant. Elle fournit les m\xeames informations que celles qui sont affich\xe9es dans le d\xe9bogeur. Elle a l'avantage de pouvoir \xeatre ex\xe9cut\xe9e \xe0 partir de n'importe quel environnement 4D, y compris en mode compil\xe9."]}),"\n",(0,d.jsx)(n.p,{children:"La commande facilite le d\xe9bogage en permettant l'identification de la m\xe9thode qui est appel\xe9e, du composant qui l'a appel\xe9e et du num\xe9ro de ligne o\xf9 l'appel a \xe9t\xe9 effectu\xe9. Chaque objet de la collection retourn\xe9e contient les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Type"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Description"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Exemple"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"database"}),(0,d.jsx)(n.td,{children:"texte"}),(0,d.jsx)(n.td,{children:"Nom de la base de donn\xe9es appelant la m\xe9thode (pour distinguer les m\xe9thodes h\xf4tes des m\xe9thodes composant)"}),(0,d.jsx)(n.td,{children:'"database":"contactInfo"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"line"}),(0,d.jsx)(n.td,{children:"entier long"}),(0,d.jsx)(n.td,{children:"Num\xe9ro de ligne de l'appel \xe0 la m\xe9thode"}),(0,d.jsx)(n.td,{children:'"line":6'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"name"}),(0,d.jsx)(n.td,{children:"texte"}),(0,d.jsx)(n.td,{children:"Nom de la m\xe9thode appel\xe9e"}),(0,d.jsx)(n.td,{children:'"name":"On Load"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"type"}),(0,d.jsx)(n.td,{children:"texte"}),(0,d.jsxs)(n.td,{children:["Type de m\xe9thode : ",(0,d.jsx)(n.br,{}),'"projectMethod", "formObjectMethod", <li<"formmethod",< li=""> "databaseMethod", "triggerMethod", "executeOnServer" (si vous appelez une m\xe9thode projet \xe0 l\'aide de ',(0,d.jsx)(n.em,{children:"Attribut Ex\xe9cuter sur serveur"}),'.), "executeFormula" (si vous ex\xe9cutez une formule via ',(0,d.jsx)(n.a,{href:"/docs/fr/commands/process-4d-tags",children:"PROCESS 4D TAGS"}),' ou \xe9valuez une formule dans un document 4D Write Pro.)</li<"formmethod",<>']}),(0,d.jsx)(n.td,{children:'"type":"formMethod"'})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note :"})," Afin que cette commande soit op\xe9rationnelle en mode compil\xe9, le contr\xf4le d'ex\xe9cution ne doit pas \xeatre d\xe9sactiv\xe9. Veuillez vous reporter au paragraphe ",(0,d.jsx)(n.em,{children:"Contr\xf4le d\u2019ex\xe9cution"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(n.p,{children:"Le code suivant retourne une collection d'objets contenant des informations sur la cha\xeene d'appel d'une m\xe9thode :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0var $currentCallChain : Collection\n\xa0$currentCallChain:=Call chain\n"})}),"\n",(0,d.jsx)(n.p,{children:"Si une m\xe9thode projet est ex\xe9cut\xe9e, la cha\xeene d'appel peut contenir (par exemple) :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'[\xa0 \xa0{\xa0 \xa0 "type":"projectMethod",\xa0 \xa0 "name":"detailForm",\xa0 \xa0 "line":1,\xa0 \xa0 "database":"myDatabase"\xa0 \xa0}]\n'})}),"\n",(0,d.jsx)(n.p,{children:"Si une m\xe9thode formulaire est ex\xe9cut\xe9e, la cha\xeene d'appel peut contenir (par exemple) :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'[\xa0 \xa0{\xa0 \xa0 "type":"formObjectMethod",\xa0 \xa0 "name":"detailForm.Button",\xa0 \xa0 "line":1,\xa0 \xa0 "database":"myDatabase"\xa0 \xa0},\xa0 \xa0{\xa0 \xa0 "type":"formMethod",\xa0 \xa0 "name\u201D:"detailForm",\xa0 \xa0 "line":2,\xa0 \xa0 "database":"myDatabase"\xa0 \xa0},\xa0 \xa0{\xa0 \xa0 "type":"projectMethod",\xa0 \xa0 "name\u201D:"showDetailForm",\xa0 \xa0 "line":2,\xa0 \xa0 "database":"myDatabase\u201D\xa0 \xa0}]\n'})}),"\n",(0,d.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"1662"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var l=t(667294);let d={},r=l.createContext(d);function s(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);