"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6994"],{902986:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>i,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/get-application-color-scheme","title":"Get application color scheme","description":"Get application color scheme {( * )} : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-application-color-scheme.md","sourceDirName":"commands-legacy","slug":"/commands/get-application-color-scheme","permalink":"/docs/fr/commands/get-application-color-scheme","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-application-color-scheme.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-application-color-scheme","title":"Get application color scheme","slug":"/commands/get-application-color-scheme","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Focus object","permalink":"/docs/fr/commands/focus-object"},"next":{"title":"GET FIELD TITLES","permalink":"/docs/fr/commands/get-field-titles"}}'),c=s("785893"),r=s("250065");let l={id:"get-application-color-scheme",title:"Get application color scheme",slug:"/commands/get-application-color-scheme",displayed_sidebar:"docs"},o=void 0,i={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function d(e){let n={a:"a",br:"br",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Get application color scheme"})," {( * )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Param\xe8tre"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"*"}),(0,c.jsx)(n.td,{children:"Op\xe9rateur"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Retourne le sch\xe9ma couleur de la base h\xf4te"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"R\xe9sultat"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2190"}),(0,c.jsx)(n.td,{children:"Sch\xe9ma de couleur de l'application courante"})]})]})]}),"\n",(0,c.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(n.p,{children:["La commande ",(0,c.jsx)(n.strong,{children:"Get application color scheme"})," retourne le nom du sch\xe9ma de couleur utilis\xe9 dans l'application."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Note :"}),' Sous Windows, cette command retourne toujours "light".']}),"\n",(0,c.jsx)(n.p,{children:"Le sch\xe9ma de couleur est d\xe9fini :"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["via un appel \xe0 la commande ",(0,c.jsx)(n.a,{href:"/docs/fr/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"}),";"]}),"\n",(0,c.jsxs)(n.li,{children:["si la commande ",(0,c.jsx)(n.a,{href:"/docs/fr/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"})," n'a pas \xe9t\xe9 appel\xe9 ou si elle a \xe9t\xe9 appel\xe9e avec une valeur de param\xe8tre \"inherited\", les Param\xe8tres (param\xe8tres de la base h\xf4te dans le cas d'un composant);"]}),"\n",(0,c.jsx)(n.li,{children:'si les param\xe8tres sont d\xe9finis sur "inherited", les pr\xe9f\xe9rences de utilisateur du syst\xe8me d\'exploitation.'}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Le param\xe8tre * est utile lorsque la commande est appel\xe9e \xe0 partir d'un composant : lorsqu'elle est pass\xe9e, la commande retourne le sch\xe9ma de couleurs de la base h\xf4te."}),"\n",(0,c.jsxs)(n.p,{children:["Pour plus de d\xe9tails sur les noms des sch\xe9mas de couleur, veuillez vous reporter \xe0 la description de la commande ",(0,c.jsx)(n.a,{href:"/docs/fr/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"}),"."]}),"\n",(0,c.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:"\xa0var $colorScheme : Text\n\xa0\n\xa0\xa0// R\xe9cup\xe8re le schemaCouleur de la base h\xf4te\n\xa0$colorScheme:=Get application color scheme(*)\n"})}),"\n",(0,c.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/fr/commands/form-get-color-scheme",children:"FORM Get color scheme"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/fr/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"})]}),"\n",(0,c.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,c.jsx)(n.td,{children:"1763"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Thread safe"}),(0,c.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(667294);let c={},r=t.createContext(c);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);