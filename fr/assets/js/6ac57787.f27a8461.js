"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66875"],{839588:function(e,n,l){l.r(n),l.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"commands/formula","title":"Formula","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands/formula.md","sourceDirName":"commands","slug":"/commands/formula","permalink":"/docs/fr/commands/formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fformula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"formula","title":"Formula","slug":"/commands/formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXECUTE FORMULA","permalink":"/docs/fr/commands/execute-formula"},"next":{"title":"Formula from string","permalink":"/docs/fr/commands/formula-from-string"}}'),s=l("785893"),t=l("250065");let o={id:"formula",title:"Formula",slug:"/commands/formula",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"Exemple 6",id:"exemple-6",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function d(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Modifications"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"17 R6"}),(0,s.jsx)(n.td,{children:"Renomm\xe9e (New formula -> Formula)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"17 R3"}),(0,s.jsx)(n.td,{children:"Ajout"})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Formula"})," ( ",(0,s.jsx)(n.em,{children:"formulaExp"})," : Expression ) : 4D.Function"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formulaExp"}),(0,s.jsx)(n.td,{children:"Expression"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"Formule \xe0 retourner comme objet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"4D.Function"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,s.jsx)(n.td,{children:"Fonction native encapsulant la formule"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.code,{children:"Formula"})," cr\xe9e un objet ",(0,s.jsx)(n.code,{children:"4D Function"})," bas\xe9 sur l'expression ",(0,s.jsx)(n.em,{children:"formulaExp"}),". ."]}),"\n",(0,s.jsx)(n.p,{children:"Le fait d'avoir une formule en tant qu'objet permet de la passer en tant que param\xe8tre (champ calcul\xe9) \xe0 des commandes ou \xe0 des m\xe9thodes ou de l'ex\xe9cuter \xe0 partir de divers composants sans avoir \xe0 les d\xe9clarer comme \"partag\xe9s par les composants et la base de donn\xe9es h\xf4te\". Lorsqu'il est appel\xe9, l'objet formula est \xe9valu\xe9 dans le contexte de la base de donn\xe9es ou du composant qui l'a cr\xe9\xe9."}),"\n",(0,s.jsx)(n.p,{children:"La formule retourn\xe9e peut \xeatre appel\xe9e avec :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["les m\xe9thodes ",(0,s.jsx)(n.a,{href:"#call",children:(0,s.jsx)(n.code,{children:"call()"})})," ou ",(0,s.jsx)(n.a,{href:"#apply",children:(0,s.jsx)(n.code,{children:"apply()"})}),", ou"]}),"\n",(0,s.jsxs)(n.li,{children:["la syntaxe de la notation objet (voir ",(0,s.jsx)(n.a,{href:"#formula-object",children:"objet formula"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $f : 4D.Function\n $f:=Formula(1+2)\n $o:=New object("myFormula";$f)\n\n  //three different ways to call the formula\n $f.call($o) //retourne 3\n $f.apply($o) //retourne 3\n $o.myFormula() //retourne 3\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez passer des ",(0,s.jsx)(n.a,{href:"#passing-parameters",children:"param\xe8tres"})," \xe0 ",(0,s.jsx)(n.code,{children:"Formula"}),", comme le montre l'",(0,s.jsx)(n.a,{href:"#example-4",children:"exemple 4"})," ci-dessous."]}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez indiquer l'objet sur lequel la formule est ex\xe9cut\xe9e, comme le montre l'",(0,s.jsx)(n.a,{href:"#example-5",children:"exemple 5"}),". Les propri\xe9t\xe9s de l'objet sont alors accessibles via la commande ",(0,s.jsx)(n.code,{children:"This"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si ",(0,s.jsx)(n.em,{children:"formuleExp"})," utilise des variables locales, leurs valeurs sont copi\xe9es et stock\xe9es dans l'objet formule retourn\xe9 lors de sa cr\xe9ation. Lors de son ex\xe9cution, la formule utilise ces valeurs copi\xe9es plut\xf4t que la valeur courante des variables locales. A noter que l'utilisation de tableaux comme variables locales n'est pas prise en charge."]}),"\n",(0,s.jsxs)(n.p,{children:["L'objet cr\xe9\xe9 par ",(0,s.jsx)(n.code,{children:"Formula"})," peut \xeatre enregistr\xe9, par exemple, dans un champ de base de donn\xe9es ou dans un document blob."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:"Une formule simple :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $f : 4D.Function\n $f:=Formula(1+2)\n\n var $o : Object\n $o:=New object("f";$f)\n\n $result:=$o.f() // retourne 3\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:"Une formule utilisant des variables locales :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\n\n $value:=10\n $o:=New object("f";Formula($value))\n $value:=20\n\n $result:=$o.f() // returns 10\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,s.jsx)(n.p,{children:"Une formule simple utilisant des param\xe8tres :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' $o:=New object("f";Formula($1+$2))\n $result:=$o.f(10;20) //retourne 30\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,s.jsx)(n.p,{children:"Une formule simple utilisant des param\xe8tres :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' $o:=New object("f";Formula(myMethod))\n $result:=$o.f("param1";"param2") // \xe9quivalent \xe0 $result:=myMethod("param1";"param2")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,s.jsxs)(n.p,{children:["Avec l'utilisation de ",(0,s.jsx)(n.code,{children:"This"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))\n $o.firstName:="John"\n $o.lastName:="Smith"\n $result:=$o.fullName() //retourne "John Smith"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,s.jsx)(n.p,{children:"Appeler une formule \xe0 l'aide de la notation objet :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $feta; $robot : Object\n var $calc : 4D.Function\n $robot:=New object("name";"Robot";"price";543;"quantity";2)\n $feta:=New object("name";"Feta";"price";12.5;"quantity";5)\n\n $calc:=Formula(This.total:=This.price*This.quantity)\n\n  //affecte la formule aux propri\xe9t\xe9s d\'objet\n $feta.calc:=$calc\n $robot.calc:=$calc\n\n  //appel de la formule\n $feta.calc() // $feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object Formula]"}\n $robot.calc() // $robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object Formula]"}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://blog.4d.com/new-formula-more-power-behind-simplicity/",children:"4D Blog - Formula: More power behind simplicity"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://blog.4d.com/new-formula-think-outside-the-box/",children:"4D Blog - Formula: Think outside the box"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://blog.4d.com/write-your-own-methods-for-objects/",children:"4D Blog - Write your own methods for objects"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/formula-from-string",children:"Formula from string"})]}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1597"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;check;"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return a},a:function(){return o}});var r=l(667294);let s={},t=r.createContext(s);function o(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);