"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56329"],{921291:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/object-set-title","title":"OBJECT SET TITLE","description":"OBJECT SET TITLE ( { ;} objet ; libell\xe9* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-title.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-title","permalink":"/docs/fr/commands/object-set-title","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-title.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-title","title":"OBJECT SET TITLE","slug":"/commands/object-set-title","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET THREE STATES CHECKBOX","permalink":"/docs/fr/commands/object-set-three-states-checkbox"},"next":{"title":"OBJECT SET VALUE","permalink":"/docs/fr/commands/object-set-value"}}'),r=s("785893"),i=s("250065");let l={id:"object-set-title",title:"OBJECT SET TITLE",slug:"/commands/object-set-title",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET TITLE"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," ; ",(0,r.jsx)(n.em,{children:"libell\xe9"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"libell\xe9"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nouveau libell\xe9 de l'objet"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"OBJECT SET TITLE"})," change le libell\xe9 du ou des objets(s) sp\xe9cifi\xe9(s) dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," et le remplace par la valeur d\xe9finie dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"libell\xe9"})," ",(0,r.jsx)(n.em,{children:"."})]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel *, vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d'objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable (variable objet uniquement). Pour plus d'informations sur les noms d'objets, reportez-vous \xe0 la section ",(0,r.jsx)(n.em,{children:"Objets de formulaires"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET TITLE"})," peut s'appliquer \xe0 tous les types d'objets simples contenant un libell\xe9 :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"boutons et boutons 3D,"}),"\n",(0,r.jsx)(n.li,{children:"cases \xe0 cocher et cases \xe0 cocher 3D,"}),"\n",(0,r.jsx)(n.li,{children:"boutons radio et boutons radio 3D,"}),"\n",(0,r.jsx)(n.li,{children:"en-t\xeates de list box,"}),"\n",(0,r.jsx)(n.li,{children:"textes statiques,"}),"\n",(0,r.jsx)(n.li,{children:"zones de groupe."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"G\xe9n\xe9ralement, cette commande s'applique \xe0 un objet \xe0 la fois. La zone de libell\xe9 de l'objet doit \xeatre assez grande pour pouvoir accueillir le texte ; sinon, le texte est tronqu\xe9."}),"\n",(0,r.jsxs)(n.p,{children:["N'utilisez pas de retours chariot dans ",(0,r.jsx)(n.em,{children:"libell\xe9"}),"."]}),"\n",(0,r.jsx)(n.p,{children:'Si vous souhaitez d\xe9finir un libell\xe9 sur plusieurs lignes, utilisez le caract\xe8re "\\" ("\\\\" dans l\'\xe9diteur de code) comme retour \xe0 la ligne. Cette possibilit\xe9 est permise pour les boutons 3D, cases \xe0 cocher 3D, boutons radio 3D et les en-t\xeates de list box.'}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"}),' Passez "\\\\\\" si vous souhaitez utiliser le caract\xe8re "\\" dans le libell\xe9.']}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsxs)(n.p,{children:["L'exemple suivant est la m\xe9thode objet d'un bouton de recherche situ\xe9 dans la zone de pied de page d'un formulaire sortie affich\xe9 par la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/modify-selection",children:"MODIFY SELECTION"}),". La m\xe9thode effectue une recherche dans une table et active ou inactive le bouton intitul\xe9 ",(0,r.jsx)(n.em,{children:"bSuppr"})," et change son titre, en fonction des r\xe9sultats de la recherche :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Personnes];[Personnes]Nom=vNom)\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Records in selection([Personnes])=0)\xa0// Personne n\'a \xe9t\xe9 trouv\xe9\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET TITLE(bSuppr;" Supprimer")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET ENABLED(bSuppr;False)\n\xa0\xa0\xa0\xa0:(Records in selection([Personnes])=1)\xa0// Une personne a \xe9t\xe9 trouv\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET TITLE(bSuppr;"Supprimer la personne")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET ENABLED(bSuppr;True)\n\xa0\xa0\xa0\xa0:(Records in selection([Personnes])>1)\xa0// Plusieurs personnes ont \xe9t\xe9 trouv\xe9es\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET TITLE(bSuppr;"Supprimer les personnes")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET ENABLED(bSuppr;True)\n\xa0End case\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez ins\xe9rer des libell\xe9s sur deux lignes :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET TITLE(*;"entete1";"Tri ascendant \\\\\\ \\\\Tri descendant")\n\xa0OBJECT SET TITLE(*;"bouton1";"Cliquez ici \\\\pour imprimer")\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(654690).Z+"",width:"367",height:"85"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/object-get-title",children:"OBJECT Get title"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"194"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},654690:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);