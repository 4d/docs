"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44798"],{475094:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/copy-array","title":"COPY ARRAY","description":"COPY ARRAY ( source ; destination )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/copy-array.md","sourceDirName":"commands-legacy","slug":"/commands/copy-array","permalink":"/docs/fr/commands/copy-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcopy-array.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"copy-array","title":"COPY ARRAY","slug":"/commands/copy-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BOOLEAN ARRAY FROM SET","permalink":"/docs/fr/commands/boolean-array-from-set"},"next":{"title":"Count in array","permalink":"/docs/fr/commands/count-in-array"}}'),r=t("785893"),a=t("250065");let i={id:"copy-array",title:"COPY ARRAY",slug:"/commands/copy-array",displayed_sidebar:"docs"},l=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"COPY ARRAY"})," ( ",(0,r.jsx)(n.em,{children:"source"})," ; ",(0,r.jsx)(n.em,{children:"destination"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"source"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tableau \xe0 recopier"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"destination"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Tableau de destination"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"COPY ARRAY"})," cr\xe9e ou remplace le tableau ",(0,r.jsx)(n.em,{children:"destination"})," avec les m\xeames contenu, taille et type que le tableau ",(0,r.jsx)(n.em,{children:"source"}),".: Pour les tableaux num\xe9riques de diff\xe9rents types, le type du tableau de destination est conserv\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:["Les tableaux ",(0,r.jsx)(n.em,{children:"source"})," et ",(0,r.jsx)(n.em,{children:"destination"})," peuvent \xeatre des tableaux locaux, process ou interprocess. La port\xe9e du tableau n'a pas d'importance lors de la duplication des tableaux."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["En mode compil\xe9, le tableau ",(0,r.jsx)(n.em,{children:"destination"})," doit \xeatre du m\xeame type que le tableau ",(0,r.jsx)(n.em,{children:"source"}),". Ainsi, il est recommand\xe9 de toujours utiliser des tableaux du m\xeame type pour avoir un comportement similaire dans les modes interpr\xe9t\xe9 et compil\xe9."]}),"\n",(0,r.jsxs)(n.li,{children:["Lorsque vous copiez des tableaux d'objets, seules les r\xe9f\xe9rences des objets qu'ils contiennent sont dupliqu\xe9es, et non les objets eux-m\xeames. Une modification effectu\xe9e sur un objet d'un tableau affectera toutes les instances existantes de l'objet dans les tableaux copi\xe9s. Si vous voulez dupliquer des objets, vous devez utiliser la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/ob-copy",children:"OB Copy"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:'L\'exemple suivant remplit un tableau C. Un nouveau tableau, "D", est ensuite cr\xe9\xe9, contenant les m\xeames informations que le tableau C :'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([Contacts])\xa0// S\xe9lectionner tous les enregistrements dans la table\n\xa0SELECTION TO ARRAY([Contacts]Soci\xe9t\xe9;C)\xa0// Remplir le tableau C avec les donn\xe9es du champ\n\xa0COPY ARRAY(C;D)\xa0// Copier le tableau C dans le tableau D\n"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"226"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);