"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75563"],{49034:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/set-macro-parameter","title":"SET MACRO PARAMETER","description":"SET MACRO PARAMETER ( s\xe9lecteur ; paramTexte )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-macro-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/set-macro-parameter","permalink":"/docs/fr/20-R7/commands/set-macro-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-macro-parameter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-macro-parameter","title":"SET MACRO PARAMETER","slug":"/commands/set-macro-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET ENVIRONMENT VARIABLE","permalink":"/docs/fr/20-R7/commands/set-environment-variable"},"next":{"title":"START MONITORING ACTIVITY","permalink":"/docs/fr/20-R7/commands/start-monitoring-activity"}}'),s=t("785893"),i=t("250065");let d={id:"set-macro-parameter",title:"SET MACRO PARAMETER",slug:"/commands/set-macro-parameter",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Note",id:"note",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET MACRO PARAMETER"})," ( ",(0,s.jsx)(n.em,{children:"s\xe9lecteur"})," ; ",(0,s.jsx)(n.em,{children:"paramTexte"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"s\xe9lecteur"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"S\xe9lection \xe0 utiliser"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"paramText"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Texte envoy\xe9"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"SET MACRO PARAMETER"})," ins\xe8re le texte ",(0,s.jsx)(n.em,{children:"paramTexte"})," dans la m\xe9thode depuis laquelle elle a \xe9t\xe9 appel\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["Si du texte \xe9tait s\xe9lectionn\xe9 dans la m\xe9thode, le param\xe8tre ",(0,s.jsx)(n.em,{children:"s\xe9lecteur"})," permet de d\xe9finir si le texte ",(0,s.jsx)(n.em,{children:"paramTexte"})," doit remplacer la totalit\xe9 de la m\xe9thode ou uniquement le texte s\xe9lectionn\xe9. Vous pouvez passer dans ",(0,s.jsx)(n.em,{children:"s\xe9lecteur"})," l\u2019une des constantes suivantes, plac\xe9es dans le th\xe8me \u201C",(0,s.jsx)(n.em,{children:"Environnement 4D"}),"\u201D :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Full method text"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Highlighted method text"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Si aucun texte n\u2019\xe9tait s\xe9lectionn\xe9, ",(0,s.jsx)(n.em,{children:"paramTexte"})," est ins\xe9r\xe9 dans la m\xe9thode."]}),"\n",(0,s.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,s.jsxs)(n.p,{children:["Pour que les commandes ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-macro-parameter",children:"GET MACRO PARAMETER"})," et ",(0,s.jsx)(n.strong,{children:"SET MACRO PARAMETER"})," fonctionnent correctement, l'attribut \u201Cversion\u201D doit \xeatre d\xe9clar\xe9 dans la macro elle-m\xeame, de la fa\xe7on suivante :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<macro name="MaMacro" version="2">\n--- Texte de la macro ---\n</macro>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Cette macro construit un nouveau texte qui sera retourn\xe9 \xe0 la m\xe9thode appelante"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $texte_entr\xe9e : Text\n\xa0var $texte_sortie : Text\n\xa0GET MACRO PARAMETER(Highlighted method text;$texte_entr\xe9e)\n\xa0\xa0//Supposons que le texte s\xe9lectionn\xe9 est une table, i.e. \u201C[Clients]\u201D\n\xa0$texte_sortie:=""\n\xa0$texte_sortie:=$texte_sortie+Command name(47)+"("+$texte_entr\xe9e+")"\xa0// Tout s\xe9lectionner ([Clients])\n\xa0$texte_sortie:=$texte_sortie+"$i:="+Command name(76)+"("+$texte_entr\xe9e+")"\xa0// $i:=Enregistrements trouves([Clients])\n\xa0SET MACRO PARAMETER(Highlighted method text;$texte_sortie)\n\xa0\xa0//On remplace le texte s\xe9lectionn\xe9 par le nouveau code\n'})}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-macro-parameter",children:"GET MACRO PARAMETER"})}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"998"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);