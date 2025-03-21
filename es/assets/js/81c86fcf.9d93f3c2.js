"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39376"],{8697:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>t,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/spell-get-dictionary-list","title":"SPELL GET DICTIONARY LIST","description":"SPELL GET DICTIONARY LIST ( lengID ; lengArchivos ; lengNoms )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/spell-get-dictionary-list.md","sourceDirName":"commands-legacy","slug":"/commands/spell-get-dictionary-list","permalink":"/docs/es/commands/spell-get-dictionary-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-get-dictionary-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"spell-get-dictionary-list","title":"SPELL GET DICTIONARY LIST","slug":"/commands/spell-get-dictionary-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SPELL Get current dictionary","permalink":"/docs/es/commands/spell-get-current-dictionary"},"next":{"title":"SPELL SET CURRENT DICTIONARY","permalink":"/docs/es/commands/spell-set-current-dictionary"}}'),l=s("785893"),i=s("250065");let d={id:"spell-get-dictionary-list",title:"SPELL GET DICTIONARY LIST",slug:"/commands/spell-get-dictionary-list",displayed_sidebar:"docs"},c=void 0,t={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"SPELL GET DICTIONARY LIST"})," ( ",(0,l.jsx)(n.em,{children:"lengID"})," ; ",(0,l.jsx)(n.em,{children:"lengArchivos"})," ; ",(0,l.jsx)(n.em,{children:"lengNoms"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lengID"}),(0,l.jsx)(n.td,{children:"Integer array"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"IDs \xfanicos de los lenguajes"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lengArchivos"}),(0,l.jsx)(n.td,{children:"Text array"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Nombres de los archivos de lenguaje instalados"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lengNoms"}),(0,l.jsx)(n.td,{children:"Text array"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Nombres locales de los lenguajes"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando ",(0,l.jsx)(n.strong,{children:"SPELL GET DICTIONARY LIST"})," devuelve en los arrays ",(0,l.jsx)(n.em,{children:"lengID"}),", ",(0,l.jsx)(n.em,{children:"lengArchivos"})," y ",(0,l.jsx)(n.em,{children:"lengNoms"}),", los IDs, los nombres de archivos y los nombres de lenguajes correspondientes a los archivos de diccionarios Hunspell instalados en el equipo."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Nota"}),": para mayor informaci\xf3n sobre los diccionarios Hunspell, consulte la secci\xf3n ",(0,l.jsx)(n.em,{children:"Correcci\xf3n ortogr\xe1fica"})," en el ",(0,l.jsx)(n.em,{children:"Manual de Dise\xf1o"}),"."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"lengID"})," recibe los n\xfameros de ID generados autom\xe1ticamente y utilizados con el comando ",(0,l.jsx)(n.a,{href:"/docs/es/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"}),".",(0,l.jsx)(n.br,{}),"\nNote que los IDs son \xfanicos y basados en los nombres de los archivos. Este comando es \xfatil principalmente en la fase de desarrollo; no tiene que regenerar los IDs cada vez que la base se ejecuta."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"lengArchivos"})," recibe los nombres de los archivos de diccionarios instalados en la m\xe1quina."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"lengNoms"}),' recibe los nombres de los lenguajes expresados en el lenguaje actual de la aplicaci\xf3n. Por ejemplo, para un diccionario franc\xe9s, el valor "fran\xe7ais (France)" ser\xe1 devuelto en una m\xe1quina configurada en franc\xe9s y "French (France)" en un sistema ingl\xe9s. El nombre del lenguaje es seguido por "- Hunspell". Este campo s\xf3lo es v\xe1lido para los archivos "conocidos" por 4D. Para los archivos no conocidos (por ejemplo, archivos personalizados), se devuelve el nombre "N/A - Hunspell". Este principio no le impide utilizar el diccionario (si el archivo correspondiente es v\xe1lido), el ID devuelto puede ser pasado al comando ',(0,l.jsx)(n.a,{href:"/docs/es/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,l.jsx)(n.p,{children:'Usted pone "fr-classic+reform1990.aff" y "fr-classic+reform1990.dic" como tambi\xe9n "fr-dentist.aff" y "fr-dentist.dic" en el directorio Hunspell:'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT($langID;0)\n\xa0ARRAY TEXT($dicName;0)\n\xa0ARRAY TEXT($langDesc;0)\n\xa0SPELL GET DICTIONARY LIST($langID;$dictName;$langDesc)\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"$langID"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"$dictName"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"$langDesc"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"65536"}),(0,l.jsx)(n.td,{children:"en_GB"}),(0,l.jsx)(n.td,{children:"English (UK)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"65792"}),(0,l.jsx)(n.td,{children:"en_US"}),(0,l.jsx)(n.td,{children:"English (USA)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"131072"}),(0,l.jsx)(n.td,{children:"de_DE"}),(0,l.jsx)(n.td,{children:"German (Germany)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"196608"}),(0,l.jsx)(n.td,{children:"es_ES"}),(0,l.jsx)(n.td,{children:"Spanish"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"262144"}),(0,l.jsx)(n.td,{children:"fr_FR"}),(0,l.jsx)(n.td,{children:"French (France)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"589824"}),(0,l.jsx)(n.td,{children:"nb_NO"}),(0,l.jsx)(n.td,{children:"Norwegian Bokmal (Norway)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1074036166"}),(0,l.jsx)(n.td,{children:"fr-classic+reform1990"}),(0,l.jsx)(n.td,{children:"French (France) - Hunspell"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1073901273"}),(0,l.jsx)(n.td,{children:"fr-dentist"}),(0,l.jsx)(n.td,{children:"No description - Hunspell"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/es/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"})}),"\n",(0,l.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"1204"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let l={},i=r.createContext(l);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);