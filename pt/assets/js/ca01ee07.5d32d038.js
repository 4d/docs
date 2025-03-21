"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14900"],{471225:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/copy-parameters","title":"Copy parameters","description":"Copy parameters {( inicioDesde )} : Collection","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/copy-parameters.md","sourceDirName":"commands-legacy","slug":"/commands/copy-parameters","permalink":"/docs/pt/20-R7/commands/copy-parameters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcopy-parameters.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"copy-parameters","title":"Copy parameters","slug":"/commands/copy-parameters","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Command name","permalink":"/docs/pt/20-R7/commands/command-name"},"next":{"title":"Count parameters","permalink":"/docs/pt/20-R7/commands/count-parameters"}}'),s=o("785893"),a=o("250065");let t={id:"copy-parameters",title:"Copy parameters",slug:"/commands/copy-parameters",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Copy parameters"})," {( ",(0,s.jsx)(n.em,{children:"inicioDesde"})," )} : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inicioDesde"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Indice inicio (incluido)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nova cole\xe7\xe3o contendo par\xe2metros realmente passados"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(n.p,{children:"O comando Copy parameters devolve uma nova cole\xe7\xe3o que cont\xe9m todos os par\xe2metros realmente passados a um m\xe9todo ou uma fun\xe7\xe3o. Este comando \xe9 \xfatil quando se necessita reenviar um n\xfamero variado de par\xe2metros de um m\xe9todo ou fun\xe7\xe3o a outro m\xe9todo ou fun\xe7\xe3o."}),"\n",(0,s.jsxs)(n.p,{children:["No par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"inicioDesde"}),", pode passar o \xedndice do par\xe2metro desde o qual vai come\xe7ar a recolher os par\xe2metros a reenviar. O pr\xf3prio par\xe2metro ",(0,s.jsx)(n.em,{children:"inicioDesde"})," est\xe1 incluido."]}),"\n",(0,s.jsxs)(n.p,{children:["Quando chamar dentro de uma f\xf3rmula, ",(0,s.jsx)(n.strong,{children:"Copy parameters"})," devolve os par\xe2metros passados expl\xedcitamente utilizando ",(0,s.jsx)(n.em,{children:"apply()"})," ou ",(0,s.jsx)(n.em,{children:"call()"})," (e n\xe3o os passados ao m\xe9todo pai ou fun\xe7\xe3o)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Copy parameters"})," devolve uma cole\xe7\xe3o vazia se:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"n\xe3o chamar em um m\xe9todo ou fun\xe7\xe3o que tenha sido chamado por outro m\xe9todo ou fun\xe7\xe3o,"}),"\n",(0,s.jsx)(n.li,{children:"n\xe3o for passado nenhum par\xe2metro ao m\xe9todo pai ou fun\xe7\xe3o."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Chamando a uma fun\xe7\xe3o diferente dependendo do primeiro par\xe2metro e passando outros par\xe2metros a esta fun\xe7\xe3o:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Function selectTask($task Text)\n\xa0Case of\n\xa0\xa0\xa0\xa0:($task="Task1")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0This.task1(Copy parameters(2))\n\xa0\xa0\xa0\xa0:($task="Task2")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0This.task2(Copy parameters(2))\n\xa0End case\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Ou, chamando a outra fun\xe7\xe3o em outro objeto com ",(0,s.jsx)(n.strong,{children:"apply()"})," e passar os par\xe2metros:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0Function doSomething($param Text;$extraParameters Variant)\n\xa0This.delegate.doSomething.apply(This.delegate;Copy parameters)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsxs)(n.p,{children:["Como o comando devolve uma cole\xe7\xe3o, pode ser utilizada com ",(0,s.jsx)(n.strong,{children:".join()"})," para criar, por exemplo, uma lista html:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Classe\n\xa0\n\xa0Function list($typeText)->Text\n\xa0\xa0//tipo de lista \xe9 "u" ou "o"\n\xa0var $value : Collection\n\xa0$value:=Copy parameters(2)\n\xa0$html:="<"+$type+"l>\n* "  \n\xa0$html+=$value.join("\n* ")  \n\xa0$html+="\n"\n\xa0return$html\n\xa0\n\xa0\xa0// M\xe9todo\n\xa0\n\xa0$htmlList:=$c.list("u";"Alpha";"Bravo";"Charlie")\n\xa0\xa0// $htmlList = \n* Alpha\n* Bravo\n* Charlie\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/count-parameters",children:"Count parameters"})}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"1790"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return t}});var r=o(667294);let s={},a=r.createContext(s);function t(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);