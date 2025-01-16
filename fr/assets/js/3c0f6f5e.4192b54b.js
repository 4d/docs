"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62627"],{986014:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/spell-get-dictionary-list","title":"SPELL GET DICTIONARY LIST","description":"SPELL GET DICTIONARY LIST ( langID ; langFichiers ; langNoms )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/spell-get-dictionary-list.md","sourceDirName":"commands-legacy","slug":"/commands/spell-get-dictionary-list","permalink":"/docs/fr/20-R7/commands/spell-get-dictionary-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-get-dictionary-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"spell-get-dictionary-list","title":"SPELL GET DICTIONARY LIST","slug":"/commands/spell-get-dictionary-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SPELL Get current dictionary","permalink":"/docs/fr/20-R7/commands/spell-get-current-dictionary"},"next":{"title":"SPELL SET CURRENT DICTIONARY","permalink":"/docs/fr/20-R7/commands/spell-set-current-dictionary"}}'),i=s("785893"),l=s("250065");let t={id:"spell-get-dictionary-list",title:"SPELL GET DICTIONARY LIST",slug:"/commands/spell-get-dictionary-list",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SPELL GET DICTIONARY LIST"})," ( ",(0,i.jsx)(n.em,{children:"langID"})," ; ",(0,i.jsx)(n.em,{children:"langFichiers"})," ; ",(0,i.jsx)(n.em,{children:"langNoms"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"langID"}),(0,i.jsx)(n.td,{children:"Integer array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"ID uniques des langues"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"langFichiers"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Noms des fichiers de langue install\xe9s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"langNoms"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Noms locaux des langues"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"SPELL GET DICTIONARY LIST"})," retourne dans les tableaux ",(0,i.jsx)(n.em,{children:"langID"}),", ",(0,i.jsx)(n.em,{children:"langFichiers"})," et ",(0,i.jsx)(n.em,{children:"langNoms"})," les IDs, les noms de fichiers et les noms des langues correspondant aux fichiers de dictionnaires Hunspell install\xe9s sur la machine."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Pour plus d'informations sur les dictionnaires Hunspell, reportez-vous \xe0 la section ",(0,i.jsx)(n.em,{children:"Correction orthographique"})," dans le manuel ",(0,i.jsx)(n.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"langID"})," re\xe7oit les num\xe9ros d\u2019ID g\xe9n\xe9r\xe9s automatiquement et utilisables avec la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"}),".",(0,i.jsx)(n.br,{}),"\nA noter que les IDs sont uniques et bas\xe9s sur les noms de fichiers. Cette commande est donc principalement utile en phase de d\xe9veloppement, il n\u2019est pas n\xe9cessaire de reg\xe9n\xe9rer des IDs \xe0 chaque ex\xe9cution de la base."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"langFichiers"})," re\xe7oit les noms des fichiers de dictionnaires (sans extensions) install\xe9s sur le poste."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"langNoms"}),' re\xe7oit les noms des langues exprim\xe9s dans la langue courante de l\u2019application. Par exemple, pour un dictionnaire fran\xe7ais, la valeur "fran\xe7ais (France)" sera retourn\xe9e sur une machine configur\xe9e en fran\xe7ais et "French (France)" sur un syst\xe8me anglais. Le nom de la langue est suivi de "- Hunspell". Ce champ n\u2019est valide que pour les fichiers "connus" de 4D. Pour les fichiers non connus (par exemple les fichiers personnalis\xe9s), le nom "N/A - Hunspell" est retourn\xe9. Ce principe n\u2019emp\xeache pas d\u2019utiliser le dictionnaire (si le fichier concern\xe9 est valide), l\u2019ID retourn\xe9 pourra \xeatre pass\xe9 \xe0 la commande ',(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:'Vous avez plac\xe9 "fr-classique+reforme1990.aff" et "fr-classique+reforme1990.dic" ainsi que "fr-dentiste.aff" et "fr-dentiste.dic" dans le r\xe9pertoire Hunspell :'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT($langID;0)\n\xa0ARRAY TEXT($dicName;0)\n\xa0ARRAY TEXT($langDesc;0)\n\xa0SPELL GET DICTIONARY LIST($langID;$dicName;$langDesc)\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"$langID"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"$dicName"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"$langDesc"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"65536"}),(0,i.jsx)(n.td,{children:"en_GB"}),(0,i.jsx)(n.td,{children:"anglais (Royaume-Uni)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"65792"}),(0,i.jsx)(n.td,{children:"en_US"}),(0,i.jsx)(n.td,{children:"anglais (Etats-Unis)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"131072"}),(0,i.jsx)(n.td,{children:"de_DE"}),(0,i.jsx)(n.td,{children:"allemand (Allemagne)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"196608"}),(0,i.jsx)(n.td,{children:"es_ES"}),(0,i.jsx)(n.td,{children:"espagnol"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"262144"}),(0,i.jsx)(n.td,{children:"fr_FR"}),(0,i.jsx)(n.td,{children:"fran\xe7ais (France)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"589824"}),(0,i.jsx)(n.td,{children:"nb_NO"}),(0,i.jsx)(n.td,{children:"norv\xe9gien bokmal (Norvege)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1074036166"}),(0,i.jsx)(n.td,{children:"fr-classique+reforme1990"}),(0,i.jsx)(n.td,{children:"fran\xe7ais (France) - Hunspell"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1073901273"}),(0,i.jsx)(n.td,{children:"fr-dentiste"}),(0,i.jsx)(n.td,{children:"No description - Hunspell"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"})}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1204"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return t}});var r=s(667294);let i={},l=r.createContext(i);function t(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);