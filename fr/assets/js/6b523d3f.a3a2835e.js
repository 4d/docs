"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97951"],{611477:function(e,r,A){A.r(r),A.d(r,{default:()=>c,frontMatter:()=>i,metadata:()=>s,assets:()=>u,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"settings/overview","title":"Propri\xe9t\xe9s","description":"Les Propri\xe9t\xe9s configurent le fonctionnement du projet en cours. Ces param\xe8tres peuvent \xeatre diff\xe9rents pour chaque projet. Ils comprennent les ports d\'\xe9coute, les configurations de sauvegarde, les options de s\xe9curit\xe9, les param\xe8tres Web, etc.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/settings/overview.md","sourceDirName":"settings","slug":"/settings/overview","permalink":"/docs/fr/20-R6/settings/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Foverview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"overview","title":"Propri\xe9t\xe9s"},"sidebar":"docs","previous":{"title":"Architecture d\'un projet","permalink":"/docs/fr/20-R6/Project/architecture"},"next":{"title":"Page G\xe9n\xe9ral","permalink":"/docs/fr/20-R6/settings/general"}}'),t=A("785893"),n=A("250065");let i={id:"overview",title:"Propri\xe9t\xe9s"},a=void 0,u={},o=[{value:"Acc\xe8s aux propri\xe9t\xe9s",id:"acc\xe8s-aux-propri\xe9t\xe9s",level:2},{value:"Informations sur le verrouillage",id:"informations-sur-le-verrouillage",level:3},{value:"Personnalisation des param\xe8tres",id:"personnalisation-des-param\xe8tres",level:2},{value:"R\xe9initialisation des param\xe8tres",id:"r\xe9initialisation-des-param\xe8tres",level:2}];function l(e){let r={a:"a",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Les Propri\xe9t\xe9s configurent le fonctionnement du projet en cours. Ces param\xe8tres peuvent \xeatre diff\xe9rents pour chaque projet. Ils comprennent les ports d'\xe9coute, les configurations de sauvegarde, les options de s\xe9curit\xe9, les param\xe8tres Web, etc."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:A(398855).Z+"",width:"863",height:"723"})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["4D fournit un autre ensemble de param\xe8tres, appel\xe9s ",(0,t.jsx)(r.strong,{children:"Pr\xe9f\xe9rences"}),", qui s'appliquent \xe0 l'application 4D IDE. Pour plus d'informations, reportez-vous \xe0 la section ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R6/Preferences/general",children:"Pr\xe9f\xe9rences"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"acc\xe8s-aux-propri\xe9t\xe9s",children:"Acc\xe8s aux propri\xe9t\xe9s"}),"\n",(0,t.jsx)(r.p,{children:"Vous pouvez acc\xe9der \xe0 la bo\xeete de dialogue Propri\xe9t\xe9s :"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["en utilisant l'option de menu ",(0,t.jsx)(r.strong,{children:"D\xe9veloppement > Propri\xe9t\xe9s..."})]}),"\n",(0,t.jsxs)(r.li,{children:["en cliquant sur ",(0,t.jsx)(r.strong,{children:"Propri\xe9t\xe9s"})," dans la barre d'outils 4D"]}),"\n",(0,t.jsxs)(r.li,{children:["sur 4D Server, via l'option de menu ",(0,t.jsx)(r.strong,{children:"Edition > Propri\xe9t\xe9s..."})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Lorsque le ",(0,t.jsxs)(r.a,{href:"/docs/fr/20-R6/Desktop/user-settings",children:[(0,t.jsx)(r.strong,{children:"mode Propri\xe9t\xe9s utilisateur"})," est activ\xe9"]}),", ",(0,t.jsx)(r.strong,{children:"Propri\xe9t\xe9s..."})," est renomm\xe9 ",(0,t.jsx)(r.strong,{children:"Propri\xe9t\xe9s de la structure..."})," et deux commandes de menu suppl\xe9mentaires sont disponibles \xe0 chaque emplacement :"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Propri\xe9t\xe9s utilisateur..."})," vous donne acc\xe8s aux param\xe8tres qui peuvent \xeatre stock\xe9s en externe dans un fichier utilisateur. Si ceux-ci sont modifi\xe9s, ils sont utilis\xe9s \xe0 la place des param\xe8tres de structure."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Proppri\xe9t\xe9s utilisateur pour le fichier de donn\xe9es..."})," vous donne acc\xe8s aux param\xe8tres qui peuvent \xeatre stock\xe9s en externe dans un fichier utilisateur rattach\xe9 au fichier de donn\xe9es courant. S'ils sont modifi\xe9s, ils sont utilis\xe9s \xe0 la place des param\xe8tres utilisateur ou des param\xe8tres de structure."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"informations-sur-le-verrouillage",children:"Informations sur le verrouillage"}),"\n",(0,t.jsx)(r.p,{children:"Le verrouillage peut se produire dans les modes Projet et Client/serveur lorsque :"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Le fichier ",(0,t.jsx)(r.em,{children:"settings.4DSettings"})," est en 'Lecture seule' (Projets uniquement). La modification d'un param\xe8tre affiche une alerte pour le d\xe9verrouiller, le cas \xe9ch\xe9ant."]}),"\n",(0,t.jsx)(r.li,{children:"Deux utilisateurs ou plus tentent de modifier les m\xeames param\xe8tres en m\xeame temps. Les param\xe8tres ne peuvent pas \xeatre utilis\xe9s jusqu'\xe0 ce que le premier utilisateur les lib\xe8re en fermant la fen\xeatre. (Client/serveur uniquement)"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Dans les deux cas, les param\xe8tres peuvent \xeatre ouverts en 'Lecture seule', mais ne peuvent pas \xeatre utilis\xe9s tant qu'ils sont verrouill\xe9s."}),"\n",(0,t.jsx)(r.h2,{id:"personnalisation-des-param\xe8tres",children:"Personnalisation des param\xe8tres"}),"\n",(0,t.jsxs)(r.p,{children:["Dans les bo\xeetes de dialogue des Propri\xe9t\xe9s, les param\xe8tres dont les valeurs ont \xe9t\xe9 modifi\xe9es apparaissent ",(0,t.jsx)(r.strong,{children:"en gras"})," :"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:A(603913).Z+"",width:"703",height:"192"})}),"\n",(0,t.jsx)(r.p,{children:"Les param\xe8tres indiqu\xe9s comme personnalis\xe9s peuvent avoir \xe9t\xe9 modifi\xe9s directement dans la bo\xeete de dialogue, ou avoir \xe9t\xe9 modifi\xe9s pr\xe9c\xe9demment dans le cas d'un projet converti."}),"\n",(0,t.jsx)(r.p,{children:"Un param\xe8tre appara\xeet toujours en gras m\xeame lorsque sa valeur est remplac\xe9e manuellement par ses valeurs par d\xe9faut. Ainsi, il est toujours possible d'identifier visuellement les param\xe8tres qui ont \xe9t\xe9 personnalis\xe9s."}),"\n",(0,t.jsx)(r.p,{children:"La plupart des param\xe8tres sont appliqu\xe9s imm\xe9diatement. Toutefois, certains d'entre eux (tels que le param\xe8tre de d\xe9marrage) ne prennent effet que lorsque la base de donn\xe9es est red\xe9marr\xe9e. Dans ce cas, une bo\xeete de dialogue appara\xeet pour vous informer que la modification prendra effet au prochain d\xe9marrage."}),"\n",(0,t.jsx)(r.h2,{id:"r\xe9initialisation-des-param\xe8tres",children:"R\xe9initialisation des param\xe8tres"}),"\n",(0,t.jsxs)(r.p,{children:["Pour r\xe9tablir les param\xe8tres \xe0 leurs valeurs par d\xe9faut et supprimer le style gras indiquant qu'ils ont \xe9t\xe9 personnalis\xe9s, cliquez sur ",(0,t.jsx)(r.strong,{children:"R\xe9tablir les param\xe8tres d'usine"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Ce bouton r\xe9initialise tous les param\xe8tres de la page courante. Il devient actif lorsqu'au moins un param\xe8tre a \xe9t\xe9 modifi\xe9 sur la page courante."})]})}function c(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},603913:function(e,r,A){A.d(r,{Z:function(){return s}});let s="data:image/png;base64,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"},398855:function(e,r,A){A.d(r,{Z:function(){return s}});let s=A.p+"assets/images/main-eb76fd922646d74ff2d364ba82524934.png"},250065:function(e,r,A){A.d(r,{Z:function(){return a},a:function(){return i}});var s=A(667294);let t={},n=s.createContext(t);function i(e){let r=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);