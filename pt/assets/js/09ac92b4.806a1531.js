"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80793"],{897106:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>t});var r=JSON.parse('{"id":"API/FunctionClass","title":"Function","description":"A 4D.Function object contains a piece of code that can be executed from an object, either using the () operator, or using the apply() and call() functions. 4D prop\xf5e tr\xeas tipos de objetos Function:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/API/FunctionClass.md","sourceDirName":"API","slug":"/API/FunctionClass","permalink":"/docs/pt/20-R7/API/FunctionClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FFunctionClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"FunctionClass","title":"Function"},"sidebar":"docs","previous":{"title":"Folder","permalink":"/docs/pt/20-R7/API/FolderClass"},"next":{"title":"HTTPAgent","permalink":"/docs/pt/20-R7/API/HTTPAgentClass"}}'),l=s("785893"),o=s("250065");let a={id:"FunctionClass",title:"Function"},t=void 0,c={},d=[{value:"Objetos de formul\xe1rios",id:"objetos-de-formul\xe1rios",level:3},{value:"Utiliza\xe7\xe3o de par\xe2metros",id:"utiliza\xe7\xe3o-de-par\xe2metros",level:4},{value:"Par\xe2metros a um \xfanico m\xe9todo",id:"par\xe2metros-a-um-\xfanico-m\xe9todo",level:4},{value:"Resumo",id:"resumo",level:3},{value:".apply()",id:"apply",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:".call()",id:"call",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:"Exemplo 1",id:"exemplo-1-1",level:4},{value:"Exemplo 2",id:"exemplo-2-1",level:4},{value:".source",id:"source",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:"Exemplo",id:"exemplo",level:4}];function i(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["A ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"4D.Function"})})," object contains a piece of code that can be executed from an object, either using the ",(0,l.jsx)(n.code,{children:"()"})," operator, or using the ",(0,l.jsx)(n.a,{href:"#apply",children:(0,l.jsx)(n.code,{children:"apply()"})})," and ",(0,l.jsx)(n.a,{href:"#call",children:(0,l.jsx)(n.code,{children:"call()"})})," functions. 4D prop\xf5e tr\xeas tipos de objetos ",(0,l.jsx)(n.code,{children:"Function"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"as fun\xe7\xf5es nativas"}),", ou seja, fun\xe7\xf5es incorporadas de v\xe1rias classes 4D, como ",(0,l.jsx)(n.code,{children:"collection.sort()"})," ou ",(0,l.jsx)(n.code,{children:"file.copyTo()"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"as fun\xe7\xf5es usu\xe1rio"}),", criadas nas [classes usu\xe1rio] (Concepts/classes.md) usando a palavra-chave ",(0,l.jsx)(n.a,{href:"/docs/pt/20-R7/Concepts/classes#function",children:"Function"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"fun\xe7\xf5es de f\xf3rmula"}),", ou seja, fun\xe7\xf5es que podem executar qualquer f\xf3rmula 4D."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"objetos-de-formul\xe1rios",children:"Objetos de formul\xe1rios"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.a,{href:"/docs/pt/20-R7/commands/formula",children:"Formula"})," and ",(0,l.jsx)(n.a,{href:"/docs/pt/20-R7/commands/formula-from-string",children:"Formula from string"})," commands allow you to create ",(0,l.jsxs)(n.a,{href:"#about-4dfunction-objects",children:[(0,l.jsx)(n.code,{children:"4D.Function"})," objects"]})," to execute any 4D expression or code expressed as text."]}),"\n",(0,l.jsx)(n.p,{children:"Objetos formul\xe1rio podem ser encapsulados em propriedades objeto:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $f : 4D. Function\n $f:=New object\n $f.message:=Formula(ALERT("Hello world"))\n'})}),"\n",(0,l.jsxs)(n.p,{children:['Essa propriedade \xe9 uma "fun\xe7\xe3o objeto" ou seja uma fun\xe7\xe3o que \xe9 restrita a seu objeto pai. Para executar uma fun\xe7\xe3o armazenada em uma propriedade objeto, use o operador ',(0,l.jsx)(n.strong,{children:"()"})," depois do nome propriedade, tal como:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $f.message() //exibe "Hello world"\n'})}),"\n",(0,l.jsx)(n.p,{children:"Tamb\xe9m se admite a sintaxe com par\xeanteses:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $f["message"]() //exibe "Hello world"\n'})}),"\n",(0,l.jsx)(n.p,{children:"Note que mesmo se n\xe3o tiver par\xeanteses (ver abaixo), uma fun\xe7\xe3o objeto a ser executada deve ser chamda com () par\xeanteses. Chamar s\xf3 a propriedade de objeto devolver\xe1 uma nova refer\xeancia \xe0 f\xf3rmula (e n\xe3o a executar\xe1):"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" $o:=$f.message //devolve o objeto f\xf3rmula em $o\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Voc\xea tamb\xe9m pode executar uma fun\xe7\xe3o usando as fun\xe7\xf5es ",(0,l.jsx)(n.a,{href:"#apply",children:(0,l.jsx)(n.code,{children:"apply()"})})," e ",(0,l.jsx)(n.a,{href:"#call",children:(0,l.jsx)(n.code,{children:"call()"})}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $f.message.apply() //exibe "Hello world"\n'})}),"\n",(0,l.jsx)(n.h4,{id:"utiliza\xe7\xe3o-de-par\xe2metros",children:"Utiliza\xe7\xe3o de par\xe2metros"}),"\n",(0,l.jsxs)(n.p,{children:["You can pass parameters to your formulas using the ",(0,l.jsx)(n.a,{href:"/docs/pt/20-R7/Concepts/parameters#sequential-parameters",children:"sequential parameter syntax"})," based upon $1, $2...$n. Por exemplo, pode escrever:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $f : Object\n $f:=New object\n $f.message:=Formula(ALERT("Hello "+$1))\n $f.message("John") //exibe "Hello John"\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Ou usando a fun\xe7\xe3o ",(0,l.jsx)(n.a,{href:"#call",children:".call()"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $f : Object\n $f:=Formula($1+" "+$2)\n $text:=$f.call(Null;"Hello";"World") //retorna "Hello World"\n $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) //retorna "Welcome to 2019" (por exemplo)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"par\xe2metros-a-um-\xfanico-m\xe9todo",children:"Par\xe2metros a um \xfanico m\xe9todo"}),"\n",(0,l.jsx)(n.p,{children:"Para mais conveni\xeancia, quando a f\xf3rmula \xe9 feita de um \xfanico m\xe9todo de projeto, par\xe2metros podem ser omitidos na inicializa\xe7\xe3o do objeto f\xf3rmula. Pode ser passado quando a f\xf3rmula for chamada. Por exemplo:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $f : 4D.Function\n\n $f:=Formula(myMethod)\n  //Writing Formula(myMethod($1;$2)) is not necessary\n $text:=$f.call(Null;"Hello";"World") //returns "Hello World"\n $text:=$f.call() //returns "How are you?"\n\n  //myMethod\n #DECLARE ($param1 : Text; $param2 : Text)->$return : Text\n If(Count parameters=2)\n    $return:=$param1+" "+$param2\n Else\n    $return:="How are you?"\n End if\n'})}),"\n",(0,l.jsx)(n.p,{children:"Par\xe2metros s\xe3o recebidos dentro do m\xe9todo, na ordem que s\xe3o especificados na chamada."}),"\n",(0,l.jsx)(n.h3,{id:"resumo",children:"Resumo"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsx)(n.tr,{children:(0,l.jsx)(n.th,{})})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsx)(n.tr,{children:(0,l.jsxs)(n.td,{children:[(0,l.jsxs)(n.a,{href:"#apply",children:[(0,l.jsx)(n.strong,{children:".apply"}),"() : any",(0,l.jsx)(n.br,{}),(0,l.jsx)(n.strong,{children:".apply"}),"( ",(0,l.jsx)(n.em,{children:"thisObj"})," : Object { ; ",(0,l.jsx)(n.em,{children:"formulaParams"})," : Collection } ) : any"]}),(0,l.jsx)(n.br,{}),"executes the ",(0,l.jsx)(n.code,{children:"formula"})," object to which it is applied and returns the resulting value"]})}),(0,l.jsx)(n.tr,{children:(0,l.jsxs)(n.td,{children:[(0,l.jsxs)(n.a,{href:"#call",children:[(0,l.jsx)(n.strong,{children:".call"}),"() : any",(0,l.jsx)(n.br,{}),(0,l.jsx)(n.strong,{children:".call"}),"( ",(0,l.jsx)(n.em,{children:"thisObj"})," : Object { ; ...",(0,l.jsx)(n.em,{children:"params"})," : any } ) : any"]}),(0,l.jsx)(n.br,{}),"executes the ",(0,l.jsx)(n.code,{children:"formula"})," object to which it is applied and returns the resulting value"]})}),(0,l.jsx)(n.tr,{children:(0,l.jsxs)(n.td,{children:[(0,l.jsxs)(n.a,{href:"#source",children:[(0,l.jsx)(n.strong,{children:".source"})," : Text "]}),(0,l.jsx)(n.br,{}),"contains the source expression of the ",(0,l.jsx)(n.code,{children:"formula"})," as text"]})})]})]}),"\n",(0,l.jsx)(n.h2,{id:"apply",children:".apply()"}),"\n",(0,l.jsxs)(n.details,{children:[(0,l.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Release"}),(0,l.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"17 R3"}),(0,l.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:".apply"}),"() : any",(0,l.jsx)(n.br,{}),(0,l.jsx)(n.strong,{children:".apply"}),"( ",(0,l.jsx)(n.em,{children:"thisObj"})," : Object { ; ",(0,l.jsx)(n.em,{children:"formulaParams"})," : Collection } ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe2metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{style:{textAlign:"center"}}),(0,l.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"thisObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,l.jsx)(n.td,{children:"Objeto a ser retornado pelo comando This na f\xf3rmula"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"formulaParams"}),(0,l.jsx)(n.td,{children:"Collection"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,l.jsxs)(n.td,{children:["Collection of values to be passed as $1...$n when ",(0,l.jsx)(n.code,{children:"formula"})," is executed"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Resultados"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,l.jsx)(n.td,{children:"Valores de execu\xe7\xe3o de f\xf3rmula"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:".apply()"})," function executes the ",(0,l.jsx)(n.code,{children:"formula"})," object to which it is applied and returns the resulting value. The formula object can be created using the ",(0,l.jsx)(n.code,{children:"Formula"})," or ",(0,l.jsx)(n.code,{children:"Formula from string"})," commands."]}),"\n",(0,l.jsxs)(n.p,{children:["In the ",(0,l.jsx)(n.em,{children:"thisObj"})," parameter, you can pass a reference to the object to be used as ",(0,l.jsx)(n.code,{children:"This"})," within the formula."]}),"\n",(0,l.jsxs)(n.p,{children:["You can also pass a collection to be used as $1...$n parameters in the formula using the optional ",(0,l.jsx)(n.em,{children:"formulaParams"})," parameter."]}),"\n",(0,l.jsxs)(n.p,{children:["Note que ",(0,l.jsx)(n.code,{children:".apply()"})," \xe9 similar a ",(0,l.jsx)(n.a,{href:"#call",children:(0,l.jsx)(n.code,{children:".call()"})})," exceto que os par\xe2metros s\xe3o passados como cole\xe7\xe3o. Isso pode ser \xfatil para passar resultados calculados. Isso pode ser \xfatil para passar resultados calculados."]}),"\n",(0,l.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" var $f : 4D. Function\n $f:=Formula($1+$2+$3)\n\n $c:=New collection(10;20;30)\n $result:=$f.apply(Null;$c) // retorna 60\n"})}),"\n",(0,l.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $calc : 4D. Function\n var $feta; $robot : Object\n $robot:=New object("name";"Robot";"price";543;"quantity";2)\n $feta:=New object("name";"Feta";"price";12.5;"quantity";5)\n\n $calc:=Formula(This.total:=This.price*This.quantity)\n\n $calc.apply($feta) // $feta={name:Feta,price:12.5,quantity:5,total:62.5}\n $calc.apply($robot) // $robot={name:Robot,price:543,quantity:2,total:1086}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"call",children:".call()"}),"\n",(0,l.jsxs)(n.details,{children:[(0,l.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Release"}),(0,l.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"17 R3"}),(0,l.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:".call"}),"() : any",(0,l.jsx)(n.br,{}),(0,l.jsx)(n.strong,{children:".call"}),"( ",(0,l.jsx)(n.em,{children:"thisObj"})," : Object { ; ...",(0,l.jsx)(n.em,{children:"params"})," : any } ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe2metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"thisObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Objeto a ser retornado pelo comando This na f\xf3rmula"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"params"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Valores a serem passados como $1...$n quando a f\xf3rmula for executada"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Resultados"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"<-"}),(0,l.jsx)(n.td,{children:"Valores de execu\xe7\xe3o de f\xf3rmula"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:".call()"})," function executes the ",(0,l.jsx)(n.code,{children:"formula"})," object to which it is applied and returns the resulting value. The formula object can be created using the ",(0,l.jsx)(n.code,{children:"Formula"})," or ",(0,l.jsx)(n.code,{children:"Formula from string"})," commands."]}),"\n",(0,l.jsxs)(n.p,{children:["In the ",(0,l.jsx)(n.em,{children:"thisObj"})," parameter, you can pass a reference to the object to be used as ",(0,l.jsx)(n.code,{children:"This"})," within the formula."]}),"\n",(0,l.jsxs)(n.p,{children:["Voc\xea tamb\xe9m pode passar valores para serem usados como par\xe2metros ",(0,l.jsx)(n.em,{children:"$1...$n"})," na f\xf3rmula usando os par\xe2metros ",(0,l.jsx)(n.em,{children:"params"})," opcionais."]}),"\n",(0,l.jsxs)(n.p,{children:["Observe que ",(0,l.jsx)(n.code,{children:".call()"})," \xe9 semelhante a ",(0,l.jsx)(n.a,{href:"#apply",children:(0,l.jsx)(n.code,{children:".apply()"})}),", exceto pelo fato de que os par\xe2metros s\xe3o passados diretamente."]}),"\n",(0,l.jsx)(n.h4,{id:"exemplo-1-1",children:"Exemplo 1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $f : 4D. Function\n $f:=Formula(Uppercase($1))\n $result:=$f.call(Null;"hello") // retorna "HELLO"\n'})}),"\n",(0,l.jsx)(n.h4,{id:"exemplo-2-1",children:"Exemplo 2"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $o:=New object("value";50)\n $f:=Formula(This.value*2)\n $result:=$f.call($o) // devolve 100\n'})}),"\n",(0,l.jsx)(n.h2,{id:"source",children:".source"}),"\n",(0,l.jsxs)(n.details,{children:[(0,l.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Release"}),(0,l.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"18 R2"}),(0,l.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:".source"})," : Text"]}),"\n",(0,l.jsx)(n.h4,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:".source"})," property contains the source expression of the ",(0,l.jsx)(n.code,{children:"formula"})," as text."]}),"\n",(0,l.jsxs)(n.p,{children:["Essa propriedade \xe9 ",(0,l.jsx)(n.strong,{children:"somente leitura"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $of : 4D.Function\n var $tf : Text\n $of:=Formula(String(Current time;HH MM AM PM))\n $tf:=$of.source //"String(Current time;HH MM AM PM)"\n'})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return a}});var r=s(667294);let l={},o=r.createContext(l);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);