"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54029"],{841711:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>s});var r=JSON.parse('{"id":"commands-legacy/execute-method-in-subform","title":"EXECUTE METHOD IN SUBFORM","description":"EXECUTE METHOD IN SUBFORM ( objetoSubForm ; nomeMetodo {; retorno {; param} {; param2 ; ... ; paramN}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/execute-method-in-subform.md","sourceDirName":"commands-legacy","slug":"/commands/execute-method-in-subform","permalink":"/docs/pt/commands/execute-method-in-subform","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexecute-method-in-subform.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"execute-method-in-subform","title":"EXECUTE METHOD IN SUBFORM","slug":"/commands/execute-method-in-subform","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Deactivated","permalink":"/docs/pt/commands/deactivated"},"next":{"title":"FORM Event","permalink":"/docs/pt/commands/form-event"}}'),t=n("785893"),d=n("250065");let a={id:"execute-method-in-subform",title:"EXECUTE METHOD IN SUBFORM",slug:"/commands/execute-method-in-subform",displayed_sidebar:"docs"},s=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let o={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"EXECUTE METHOD IN SUBFORM"})," ( ",(0,t.jsx)(o.em,{children:"objetoSubForm"})," ; ",(0,t.jsx)(o.em,{children:"nomeMetodo"})," {; ",(0,t.jsx)(o.em,{children:"retorno"})," {; ",(0,t.jsx)(o.em,{children:"param"}),"} {; ",(0,t.jsx)(o.em,{children:"param2"})," ; ... ; ",(0,t.jsx)(o.em,{children:"paramN"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"objetoSubForm"}),(0,t.jsx)(o.td,{children:"Text"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Nome de objeto subformul\xe1rio"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"nomeMetodo"}),(0,t.jsx)(o.td,{children:"Object, Text"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Nome do projeto de m\xe9todo a ser executado"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"retorno"}),(0,t.jsx)(o.td,{children:"*, Variable"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"* Se m\xe9todo n\xe3o retornar um valor"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"\u2190"}),(0,t.jsx)(o.td,{children:"Valor retornado pelo m\xe9todo"}),(0,t.jsx)(o.td,{}),(0,t.jsx)(o.td,{})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"param"}),(0,t.jsx)(o.td,{children:"Expression"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Par\xe2metros a passar ao m\xe9todo"})]})]})]}),"\n",(0,t.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["O comando EXECUTE METHOD IN SUBFORM pode ser utilizado para executar o m\xe9todo de projeto ",(0,t.jsx)(o.em,{children:"nomeMetodo no"})," contexto do sub formul\xe1rio ",(0,t.jsx)(o.em,{children:"objetoSubform"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["O m\xe9todo de projeto chamado pode receber chamadas 1 a X par\xe2metros em ",(0,t.jsx)(o.em,{children:"param"})," e devolver um valor em ",(0,t.jsx)(o.em,{children:"retorno"}),". Passe ",(0,t.jsx)(o.em,{children:"*"})," no par\xe2metro ",(0,t.jsx)(o.em,{children:"retorno"})," se o m\xe9todo n\xe3o devolve par\xe2metros."]}),"\n",(0,t.jsxs)(o.p,{children:["Em ",(0,t.jsx)(o.em,{children:"formula"}),", determina o c\xf3digo 4D a ser executado no contexto de ",(0,t.jsx)(o.em,{children:"subformObject"}),". Pode passar:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["um ",(0,t.jsx)(o.strong,{children:"formula object"})," (ver ",(0,t.jsx)(o.em,{children:"Formula Objects"}),"). Objetos Formula podem encapsular qualquer express\xe3o execut\xe1vel, incluindo fun\xe7\xf5es e m\xe9todos projetos;"]}),"\n",(0,t.jsxs)(o.li,{children:["uma ",(0,t.jsx)(o.strong,{children:"string"})," contendo o nome de um m\xe9todo projeto."]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:'O contexto de execu\xe7\xe3o \xe9 conservado no m\xe9todo chamado, o que significa que o formul\xe1rio atual e o evento formul\xe1rio atual seguem definidos. Se o sub formul\xe1rio prov\xeam de um componente, o m\xe9todo deve pertencer ao componente e ter a propriedade "Compartilhado entre os componentes e o banco local".'}),"\n",(0,t.jsxs)(o.p,{children:["Este comando deve ser chamado no contexto do formul\xe1rio pai (cont\xe9m o objeto ",(0,t.jsx)(o.em,{children:"objetoSubForm"}),"), por exemplo via o m\xe9todo de formul\xe1rio."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Nota:"})," O m\xe9todo ",(0,t.jsx)(o.em,{children:"nomeMetodo"})," n\xe3o \xe9 executado se ",(0,t.jsx)(o.em,{children:"objetoSubForm"})," n\xe3o se encontra na p\xe1gina atual ou se n\xe3o foi instanciado."]}),"\n",(0,t.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(o.p,{children:'Dado o formul\xe1rio "ContactDetail" utilizado como subformul\xe1rio no formul\xe1rio pai "Empresa". O objeto subformul\xe1rio que cont\xe9m o formul\xe1rio ContactDetail \xe9 chamada "ContactSubform". Imagine que queremos modificar a apar\xeancia de certos elementos do subformul\xe1rio de acordo ao valor dos campos da empresa (por exemplo, "nomcontact" deve passar a vermelho quando [Empresa]Cidad="Nova York" e a azul quando [Empresa]Cidade="San Diego"). Este mecanismo \xe9 implementado atrav\xe9s do m\xe9todo SetToColor. Para poder obter este resultado, o m\xe9todo SetToColor n\xe3o pode ser chamado diretamente desde o processo do evento de formul\xe1rio "On Load" do formul\xe1rio pai Empresa porque o objeto "contactname" n\xe3o pertence ao formul\xe1rio atual, mas ao formul\xe1rio mostrado no objeto subformul\xe1rio "ContactSubform". O m\xe9todo deve portanto ser executado utilizando o comando EXECUTE METHOD IN SUBFORM para que funcione corretamente.'}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:([Company]City="New York")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$Color:=$Red\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:([Company]City="San Diego")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$Color:=$Blue\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$Color:=$Black\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0EXECUTE METHOD IN SUBFORM("ContactSubform";Formula(SetToColor);*;$Color)\n\xa0End case\n'})}),"\n",(0,t.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsxs)(o.p,{children:["Suponha que esteja desenvolvendo um banco que ser\xe1 utilizado como componente. Inclui um formul\xe1rio projeto compartilhado (chamado, por exemplo Calendar) que cont\xe9m ",(0,t.jsx)(o.em,{children:"vari\xe1veis din\xe2micas"})," al\xe9m de um m\xe9todo projeto p\xfablico que permite ajustar o calend\xe1rio: SetCalendarDate(varDate)."]}),"\n",(0,t.jsx)(o.p,{children:'Se este m\xe9todo foi utilizado diretamente no m\xe9todo do formul\xe1rio Calendar, pode chamar diretamente o evento "On Load":'}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:"\xa0SetCalendarDate(Current date)\n"})}),"\n",(0,t.jsx)(o.p,{children:'Mas, no contexto do banco local, imaginemos que um formul\xe1rio projeto cont\xe9m os dois subformul\xe1rios "Calendar", nos objetos subformul\xe1rio chamados "Cal1" e "Cal2". Deve definir a data de Cal1 em 01/01/10 e a data de Cal2 em 05/05/10. N\xe3o pode chamar diretamente a SetCalendarDate porque o m\xe9todo n\xe3o "sabe" que formul\xe1rios e vari\xe1veis aplicar. Portanto, deve cham\xe1-lo atrav\xe9s do seguinte c\xf3digo:'}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:'\xa0EXECUTE METHOD IN SUBFORM("Cal1";"SetCalendarDate";*;!01/01/20!)\n\xa0EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)\n'})}),"\n",(0,t.jsx)(o.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,t.jsx)(o.p,{children:"Se este comando \xe9 executado corretamente, a vari\xe1vel sistema OK toma o valor 1; do contr\xe1rio toma o valor 0."}),"\n",(0,t.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"N\xfamero do comando"}),(0,t.jsx)(o.td,{children:"1085"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Thread-seguro"}),(0,t.jsx)(o.td,{children:"\u2717"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return s},a:function(){return a}});var r=n(667294);let t={},d=r.createContext(t);function a(e){let o=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(d.Provider,{value:o},e.children)}}}]);