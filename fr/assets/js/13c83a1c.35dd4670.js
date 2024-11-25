"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89962"],{955483:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-values","title":"VP Get values","description":"VP Get values ( rangeObj Collection","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-get-values.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-values","permalink":"/docs/fr/ViewPro/commands/vp-get-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-values.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-get-values","title":"VP Get values"},"sidebar":"docs","previous":{"title":"VP Get value","permalink":"/docs/fr/ViewPro/commands/vp-get-value"},"next":{"title":"VP Get workbook options","permalink":"/docs/fr/ViewPro/commands/vp-get-workbook-options"}}'),l=t("785893"),r=t("250065");let i={id:"vp-get-values",title:"VP Get values"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"VP Get values"})," ( ",(0,l.jsx)(n.em,{children:"rangeObj"})," : Object ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tres"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"rangeObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Objet plage"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"R\xe9sultat"}),(0,l.jsx)(n.td,{children:"Collection"}),(0,l.jsx)(n.td,{children:"<-"}),(0,l.jsx)(n.td,{children:"Collection de valeurs"}),(0,l.jsx)(n.td,{})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.code,{children:"VP Get values"}),"  r\xe9cup\xe8re les valeurs du ",(0,l.jsx)(n.em,{children:"rangeObj"})," d\xe9sign\xe9."]}),"\n",(0,l.jsxs)(n.p,{children:["Dans ",(0,l.jsx)(n.em,{children:"rangeObj"}),", passez une plage dont vous souhaitez r\xe9cup\xe9rer les valeurs. Si ",(0,l.jsx)(n.em,{children:"rangeObj"})," comprend plusieurs plages, seule la premi\xe8re plage est utilis\xe9e."]}),"\n",(0,l.jsxs)(n.p,{children:["La collection retourn\xe9e par ",(0,l.jsx)(n.code,{children:"VP Get values"})," contient une collection bidimensionnelle:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Chaque \xe9l\xe9ment de la collection de premier niveau repr\xe9sente une ligne et contient une sous-collection de valeurs"}),"\n",(0,l.jsx)(n.li,{children:"Chaque sous-collection contient des valeurs des cellule de la ligne. Les valeurs peuvent \xeatre de type entier long, r\xe9el, bool\xe9en, texte, objet ou null. Si une valeur est de type date ou heure, elle est retourn\xe9e en un objet dont les propri\xe9t\xe9s sont les suivantes :"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value"}),(0,l.jsx)(n.td,{children:"Date"}),(0,l.jsx)(n.td,{children:"Valeur dans la cellule (sauf heure)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"time"}),(0,l.jsx)(n.td,{children:"Real"}),(0,l.jsx)(n.td,{children:"Valeur heure (en secondes) si la valeur est du type js"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"Les dates ou les heures sont consid\xe9r\xe9es comme un datetime et sont compl\xe9t\xe9es comme suit :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"valeur de type heure - la partie date est compl\xe9t\xe9e comme \xe9tant le 30 d\xe9cembre 1899"}),"\n",(0,l.jsx)(n.li,{children:"valeur de type date - la partie heure est compl\xe9t\xe9e comme \xe9tant minuit (00:00:00:000)"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:"Vous souhaitez lire les valeurs allant de C4 \xe0 G6 :"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(774).Z+"",width:"629",height:"221"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$result:=VP Get values(VP Cells("ViewProArea";2;3;5;3))\n// $result[0]=[4,5,null,hello,world]\n// $result[1]=[6,7,8,9,null]\n// $result[2]=[null,{time:42,value:2019-05-29T00:00:00.000Z},null,null,null]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-formulas",children:"VP Get formulas"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-value",children:"VP Get value"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},774:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/cmd_vpGetValues-260c1d0b895e13be413a70052a3d640e.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let l={},r=s.createContext(l);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);