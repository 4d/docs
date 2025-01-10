"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61961"],{888505:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>i,metadata:()=>a,assets:()=>d,toc:()=>o,contentTitle:()=>l});var a=JSON.parse('{"id":"Concepts/variant","title":"Variant","description":"Variant est un type de variable qui permet d\'encapsuler des donn\xe9es de type valide et standard dans une variable. En r\xe8gle g\xe9n\xe9rale, ce type de variable peut \xeatre utilis\xe9 pour \xe9crire du code g\xe9n\xe9rique qui retourne ou re\xe7oit des valeurs dont le type n\'est pas connu. C\'est le cas par exemple du code traitant des attributs d\'objet.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/Concepts/dt_variant.md","sourceDirName":"Concepts","slug":"/Concepts/variant","permalink":"/docs/fr/20-R6/Concepts/variant","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_variant.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"variant","title":"Variant"},"sidebar":"docs","previous":{"title":"Time","permalink":"/docs/fr/20-R6/Concepts/time"},"next":{"title":"Variables","permalink":"/docs/fr/20-R6/Concepts/variables"}}'),r=t("785893"),s=t("250065");let i={id:"variant",title:"Variant"},l=void 0,d={},o=[];function u(e){let n={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Variant est un type de variable qui permet d'encapsuler des donn\xe9es de type valide et standard dans une variable. En r\xe8gle g\xe9n\xe9rale, ce type de variable peut \xeatre utilis\xe9 pour \xe9crire du code g\xe9n\xe9rique qui retourne ou re\xe7oit des valeurs dont le type n'est pas connu. C'est le cas par exemple du code traitant des attributs d'objet."}),"\n",(0,r.jsx)(n.p,{children:"Une variable de type variant peut contenir une valeur des types de donn\xe9es suivants :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"BLOB"}),"\n",(0,r.jsx)(n.li,{children:"boolean"}),"\n",(0,r.jsx)(n.li,{children:"collection"}),"\n",(0,r.jsx)(n.li,{children:"date"}),"\n",(0,r.jsx)(n.li,{children:"entier long"}),"\n",(0,r.jsx)(n.li,{children:"object"}),"\n",(0,r.jsx)(n.li,{children:"picture"}),"\n",(0,r.jsx)(n.li,{children:"pointer"}),"\n",(0,r.jsx)(n.li,{children:"r\xe9el"}),"\n",(0,r.jsx)(n.li,{children:"text"}),"\n",(0,r.jsx)(n.li,{children:"time"}),"\n",(0,r.jsx)(n.li,{children:"Null"}),"\n",(0,r.jsx)(n.li,{children:"undefined"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Les tableaux ne peuvent pas \xeatre stock\xe9s dans des variables de type variant."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"En modes interpr\xe9t\xe9 et compil\xe9, le m\xeame contenu peut \xeatre affect\xe9 \xe0 une m\xeame variable variant. Contrairement aux types de variable standard, le type de contenu des variable de type variant est diff\xe9rent du type de variable variant lui-m\xeame. Par exemple :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'C_VARIANT($variant)\n\n$variant:="hello world"\n$vtype:=Type($variant) // 12 (Is variant)\n$vtypeVal:=Value type($variant) // 2 (Is text)\n\n$variant:=42\n$vtype:=Type($variant) // 12 (Is variant)\n$vtypeVal:=Value type($variant) // 1 (Is real)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez utiliser des variables variant chaque fois qu'elles sont attendues. Vous devez simplement vous assurer que le type de donn\xe9es du contenu de la variable est du type attendu. Lorsque vous acc\xe9dez \xe0 des variables de type variant, seule leur valeur courante est prise en compte. Par exemple :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'C_VARIANT($v)\n$v:="hello world"\n$v2:=$v //assign variable to another variable\n\n$t:=Type($v) // 12 (Is variant)\n$t2:=Type($v2) // 2 (Is text)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Le type Variant peut \xeatre utilis\xe9 pour d\xe9clarer ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R6/Concepts/parameters",children:"des param\xe8tres de m\xe9thode"})," pouvant \xeatre de diff\xe9rents types. Dans ce cas, vous pouvez g\xe9n\xe9rer votre code en testant le type de valeur du param\xe8tre, par exemple :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"#DECLARE ($param : Variant)\nCase of\n: (Value type($param)=Is longint)\n...\n: (Value type($param)=Is text)\n...\nEnd case\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Lorsque des variables variant ne sont pas n\xe9cessaires (c'est-\xe0-dire lorsque le type de donn\xe9es est connu), il est recommand\xe9 d'utiliser des variables typ\xe9es standard. Les variables typ\xe9es standard fournissent de meilleures performances, un code plus clair et permettent au compilateur d'\xe9viter les bugs li\xe9s \xe0 des types de donn\xe9es pass\xe9s qui sont inattendus."}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var a=t(667294);let r={},s=a.createContext(r);function i(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);