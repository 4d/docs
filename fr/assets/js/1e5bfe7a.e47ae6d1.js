"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32539"],{995469:function(e,r,s){s.r(r),s.d(r,{default:()=>m,frontMatter:()=>c,metadata:()=>n,assets:()=>l,toc:()=>d,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/form-get-color-scheme","title":"FORM Get color scheme","description":"FORM Get color scheme  : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/form-get-color-scheme.md","sourceDirName":"commands-legacy","slug":"/commands/form-get-color-scheme","permalink":"/docs/fr/commands/form-get-color-scheme","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-get-color-scheme.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"form-get-color-scheme","title":"FORM Get color scheme","slug":"/commands/form-get-color-scheme","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM FIRST PAGE","permalink":"/docs/fr/commands/form-first-page"},"next":{"title":"FORM Get current page","permalink":"/docs/fr/commands/form-get-current-page"}}'),o=s("785893"),t=s("250065");let c={id:"form-get-color-scheme",title:"FORM Get color scheme",slug:"/commands/form-get-color-scheme",displayed_sidebar:"docs"},i=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"FORM Get color scheme"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Param\xe8tre"}),(0,o.jsx)(r.th,{children:"Type"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"R\xe9sultat"}),(0,o.jsx)(r.td,{children:"Text"}),(0,o.jsx)(r.td,{children:"\u2190"}),(0,o.jsx)(r.td,{children:'Sch\xe9ma de couleur du formulaire courant : "light" ou "dark"'})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(r.p,{children:["La commande ",(0,o.jsx)(r.strong,{children:"FORM Get color scheme"})," retourne le nom du sch\xe9ma de couleurs du formulaire actuellement affich\xe9 . S'il n'existe pas de formulaire courant, la commande retourne une cha\xeene vide."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Note"})," : sous Windows, cette commande retourne toujours \xablight\xbb."]}),"\n",(0,o.jsx)(r.p,{children:"Le sch\xe9ma de couleurs d'un formulaire est d\xe9fini :"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:['par la propri\xe9t\xe9 de formulaire "Color Scheme" (voir ',(0,o.jsx)(r.em,{children:"colorScheme"}),");"]}),"\n",(0,o.jsxs)(r.li,{children:['si "Color Scheme" est d\xe9fini sur "inherited", la commande ',(0,o.jsx)(r.a,{href:"/docs/fr/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"})," est appel\xe9e;"]}),"\n",(0,o.jsxs)(r.li,{children:["si ",(0,o.jsx)(r.a,{href:"/docs/fr/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"})," n'est pas appel\xe9e ou appel\xe9e avec une valeur de param\xe8tre \"inherited\", les Param\xe8tres (param\xe8tres de la base h\xf4te dans le cas d'un composant);"]}),"\n",(0,o.jsx)(r.li,{children:'si les Param\xe8tres sont d\xe9finis sur "inherited", les pr\xe9f\xe9rences utilisateur du syst\xe8me d\'exploitation.'}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Veuillez vous reporter \xe0 la commande ",(0,o.jsx)(r.a,{href:"/docs/fr/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"})," pour plus de d\xe9tails sur les noms de sch\xe9mas de couleurs."]}),"\n",(0,o.jsx)(r.h2,{id:"exemple",children:"Exemple"}),"\n",(0,o.jsx)(r.p,{children:"Vous souhaitez charger une image en fonction du sch\xe9ma courant du formulaire :"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'\xa0$txt_suffix:=Choose((FORM Get color scheme="dark");"_dark";"")\n\xa0READ PICTURE FILE(Get 4D folder(Current resources folder)+"myPict"+$txt_suffix+".png";$Pic_icon)\n'})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Note :"})," Il est recommand\xe9 d'utiliser ",(0,o.jsx)(r.em,{children:"css"})," pour adapter la conception des objets de formulaire au sch\xe9ma courant."]}),"\n",(0,o.jsx)(r.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/fr/commands/get-application-color-scheme",children:"Get Application color scheme"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/fr/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"})]}),"\n",(0,o.jsx)(r.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,o.jsx)(r.td,{children:"1761"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Thread safe"}),(0,o.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return i},a:function(){return c}});var n=s(667294);let o={},t=n.createContext(o);function c(e){let r=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);