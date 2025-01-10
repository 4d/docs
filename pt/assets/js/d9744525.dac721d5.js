"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98173"],{444249:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"REST/singleton","title":"$singleton","description":"Voc\xea pode chamar diretamente as [fun\xe7\xf5es de seus singletons compartilhados] expostas (../Concepts/classes.md#singleton-classes) por meio de REST.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/REST/$singleton.md","sourceDirName":"REST","slug":"/REST/singleton","permalink":"/docs/pt/REST/singleton","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24singleton.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"singleton","title":"$singleton"},"sidebar":"docs","previous":{"title":"$info","permalink":"/docs/pt/REST/info"},"next":{"title":"$upload","permalink":"/docs/pt/REST/upload"}}'),t=s("785893"),i=s("250065");let r={id:"singleton",title:"$singleton"},a=void 0,l={},c=[{value:"Chamadas fun\xe7\xf5es",id:"chamadas-fun\xe7\xf5es",level:2},{value:"POST request",id:"post-request",level:4},{value:"GET request",id:"get-request",level:4},{value:"Par\xe2metros",id:"par\xe2metros",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Resposta",id:"resposta",level:4}];function d(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Voc\xea pode chamar diretamente as [fun\xe7\xf5es de seus singletons compartilhados] expostas (../Concepts/classes.md#singleton-classes) por meio de REST."}),"\n",(0,t.jsxs)(n.p,{children:["Singleton functions are called in POST or GET requests with the ",(0,t.jsx)(n.code,{children:"$singleton"})," command and without ",(0,t.jsx)(n.code,{children:"()"}),". Por exemplo, se voc\xea tiver definido uma fun\xe7\xe3o ",(0,t.jsx)(n.code,{children:"buildVehicle()"})," na classe singleton compartilhada ",(0,t.jsx)(n.code,{children:"VehicleFactory"}),", poder\xe1 cham\xe1-la usando a seguinte solicita\xe7\xe3o:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"/rest/$singleton/VehicleFactory/buildVehicle\n"})}),"\n",(0,t.jsx)(n.p,{children:'com dados no corpo do pedido POST: ["truck"]'}),"\n",(0,t.jsx)(n.p,{children:"Na linguagem 4D, esta chamada \xe9 equivalente a:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$singleton:=cs.VehicleFactory.me.buildVehicle("truck")\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Tenha em mente que somente fun\xe7\xf5es com a ",(0,t.jsxs)(n.a,{href:"/docs/pt/ORDA/ordaClasses#exposed-vs-non-exposed-functions",children:["palavra-chave ",(0,t.jsx)(n.code,{children:"exposed"})]})," podem ser diretamente chamadas de solicita\xe7\xf5es REST."]})}),"\n",(0,t.jsx)(n.h2,{id:"chamadas-fun\xe7\xf5es",children:"Chamadas fun\xe7\xf5es"}),"\n",(0,t.jsxs)(n.p,{children:["Singleton functions can be called using REST ",(0,t.jsx)(n.strong,{children:"POST"})," or ",(0,t.jsx)(n.strong,{children:"GET"})," requests."]}),"\n",(0,t.jsx)(n.p,{children:"A sintaxe formal \xe9:"}),"\n",(0,t.jsx)(n.h4,{id:"post-request",children:"POST request"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"/rest/$singleton/SingletonClass/SingletonClassFunction"})}),"\n",(0,t.jsxs)(n.p,{children:["with data in the body of the POST request: ",(0,t.jsx)(n.code,{children:'["myparam"]'})]}),"\n",(0,t.jsx)(n.h4,{id:"get-request",children:"GET request"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"/rest/$singleton/SingletonClass/SingletonClassFunction?$params='[\"myparam\"]'"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SingletonClassFunction()"})," function must have been declared with the ",(0,t.jsx)(n.code,{children:"onHttpGet"})," keyword to be callable with ",(0,t.jsx)(n.code,{children:"GET"})," (see ",(0,t.jsx)(n.a,{href:"ClassFunctions#function-configuration",children:"Function configuration"}),")."]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["All 4D code called from REST requests ",(0,t.jsx)(n.strong,{children:"must be thread-safe"})," if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the ",(0,t.jsxs)(n.a,{href:"/docs/pt/WebServer/preemptiveWeb#enabling-the-preemptive-mode-for-the-web-server",children:[(0,t.jsx)(n.em,{children:"Use preemptive process"})," setting value"]})," is ignored by the REST Server)."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Voc\xea pode restringir chamadas a fun\xe7\xf5es singleton espec\xedficas configurando os privil\xe9gios apropriados no arquivo ",(0,t.jsx)(n.a,{href:"/docs/pt/ORDA/privileges#rolesjson-file",children:(0,t.jsx)(n.strong,{children:"roles.json"})}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"par\xe2metros",children:"Par\xe2metros"}),"\n",(0,t.jsxs)(n.p,{children:["Voc\xea pode enviar par\xe2metros para fun\xe7\xf5es singleton. Del lado del servidor, ser\xe1n recibidos en los ",(0,t.jsx)(n.a,{href:"/docs/pt/Concepts/parameters#declaring-parameters",children:"par\xe1metros declarados"})," de las funciones clase singleton."]}),"\n",(0,t.jsxs)(n.p,{children:["O envio de par\xe2metros para fun\xe7\xf5es singleton \xe9 exatamente igual ao envio de par\xe2metros para fun\xe7\xf5es de classe ORDA. Por favor, consulte ",(0,t.jsxs)(n.a,{href:"/docs/pt/REST/classFunctions#parameters",children:["o par\xe1grafo ",(0,t.jsx)(n.strong,{children:"Par\xe2metros"}),' da p\xe1gina "Chamando as fun\xe7\xf5es classe"']})," para uma descri\xe7\xe3o detalhada."]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Voc\xea criou um singleton compartilhado simples com uma fun\xe7\xe3o exposta:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'//class mySingleton\n\nshared singleton Class constructor()\n\nexposed Function sayHello ($value : Text)\n	return "Hello "+$value\n\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["A classe ",(0,t.jsx)(n.code,{children:"mySingleton"})," e a fun\xe7\xe3o ",(0,t.jsx)(n.code,{children:"sayHello"})," s\xe3o listadas quando voc\xea chama o comando ",(0,t.jsx)(n.a,{href:"/docs/pt/REST/catalog#singleton",children:(0,t.jsx)(n.code,{children:"$catalog"})}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"Pode ent\xe3o executar este pedido:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"POST"})," ",(0,t.jsx)(n.code,{children:"/rest/$singleton/mySingleton/sayHello"})]}),"\n",(0,t.jsx)(n.p,{children:'Corpo da solicita\xe7\xe3o: ["John"]'}),"\n",(0,t.jsx)(n.h4,{id:"resposta",children:"Resposta"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n	"result": "Hello John"\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var o=s(667294);let t={},i=o.createContext(t);function r(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);