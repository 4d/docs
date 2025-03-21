"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48384"],{78234:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>o,assets:()=>c,toc:()=>a,contentTitle:()=>i});var o=JSON.parse('{"id":"REST/singleton","title":"$singleton","description":"Vous pouvez appeler directement les fonctions expos\xe9es de vos shared singletons via REST.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/REST/$singleton.md","sourceDirName":"REST","slug":"/REST/singleton","permalink":"/docs/fr/20-R7/REST/singleton","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24singleton.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"singleton","title":"$singleton"},"sidebar":"docs","previous":{"title":"$info","permalink":"/docs/fr/20-R7/REST/info"},"next":{"title":"$upload","permalink":"/docs/fr/20-R7/REST/upload"}}'),t=s("785893"),r=s("250065");let l={id:"singleton",title:"$singleton"},i=void 0,c={},a=[{value:"Appeler des fonctions",id:"appeler-des-fonctions",level:2},{value:"POST request",id:"post-request",level:4},{value:"GET request",id:"get-request",level:4},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple",id:"exemple",level:2},{value:"R\xe9ponse",id:"r\xe9ponse",level:4}];function d(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Vous pouvez appeler directement les ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/classes#singleton-classes",children:"fonctions expos\xe9es de vos shared singletons"})," via REST."]}),"\n",(0,t.jsxs)(n.p,{children:["Singleton functions are called in POST or GET requests with the ",(0,t.jsx)(n.code,{children:"$singleton"})," command and without ",(0,t.jsx)(n.code,{children:"()"}),". Par exemple, si vous avez d\xe9fini une fonction ",(0,t.jsx)(n.code,{children:"buildVehicle()"})," dans la classe singleton partag\xe9e ",(0,t.jsx)(n.code,{children:"VehicleFactory"}),", vous pouvez l'appeler \xe0 l'aide de la requ\xeate suivante :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"/rest/$singleton/VehicleFactory/buildVehicle\n"})}),"\n",(0,t.jsx)(n.p,{children:'avec les donn\xe9es dans le body de la requ\xeate POST : ["truck"]'}),"\n",(0,t.jsx)(n.p,{children:"En langage 4D, cet appel est \xe9quivalent \xe0 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$singleton:=cs.VehicleFactory.me.buildVehicle("truck")\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["N'oubliez pas que seules les fonctions avec le mot-cl\xe9 ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/ORDA/ordaClasses#exposed-vs-non-exposed-functions",children:(0,t.jsx)(n.code,{children:"exposed"})})," peuvent \xeatre directement appel\xe9es \xe0 partir de requ\xeates REST."]})}),"\n",(0,t.jsx)(n.h2,{id:"appeler-des-fonctions",children:"Appeler des fonctions"}),"\n",(0,t.jsxs)(n.p,{children:["Singleton functions can be called using REST ",(0,t.jsx)(n.strong,{children:"POST"})," or ",(0,t.jsx)(n.strong,{children:"GET"})," requests."]}),"\n",(0,t.jsx)(n.p,{children:"La syntaxe formelle est la suivante :"}),"\n",(0,t.jsx)(n.h4,{id:"post-request",children:"POST request"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"/rest/$singleton/SingletonClass/SingletonClassFunction"})}),"\n",(0,t.jsxs)(n.p,{children:["with data in the body of the POST request: ",(0,t.jsx)(n.code,{children:'["myparam"]'})]}),"\n",(0,t.jsx)(n.h4,{id:"get-request",children:"GET request"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"/rest/$singleton/SingletonClass/SingletonClassFunction?$params='[\"myparam\"]'"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SingletonClassFunction()"})," function must have been declared with the ",(0,t.jsx)(n.code,{children:"onHttpGet"})," keyword to be callable with ",(0,t.jsx)(n.code,{children:"GET"})," (see ",(0,t.jsx)(n.a,{href:"ClassFunctions#function-configuration",children:"Function configuration"}),")."]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["All 4D code called from REST requests ",(0,t.jsx)(n.strong,{children:"must be thread-safe"})," if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the ",(0,t.jsxs)(n.a,{href:"/docs/fr/20-R7/WebServer/webServerConfig#use-preemptive-processes",children:[(0,t.jsx)(n.em,{children:"Use preemptive process"})," setting value"]})," is ignored by the REST Server)."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Vous pouvez limiter les appels \xe0 des fonctions singleton sp\xe9cifiques en configurant les privil\xe8ges appropri\xe9s dans le fichier ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/ORDA/privileges#fichier-rolesjson",children:(0,t.jsx)(n.strong,{children:"roles.json"})}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez envoyer des param\xe8tres aux fonctions singleton. C\xf4t\xe9 serveur, ils seront re\xe7us dans les ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/parameters#declaration-des-parametres",children:"param\xe8tres d\xe9clar\xe9s"})," des fonctions de la classe singleton."]}),"\n",(0,t.jsxs)(n.p,{children:["L'envoi de param\xe8tres aux fonctions singleton est exactement le m\xeame que l'envoi de param\xe8tres aux fonctions de classe ORDA. Veuillez vous r\xe9f\xe9rer au ",(0,t.jsxs)(n.a,{href:"/docs/fr/20-R7/REST/classFunctions#parametres",children:["paragraphe ",(0,t.jsx)(n.strong,{children:"Param\xe8tres"}),' de la page "Appeler des fonctions de classe"']})," pour une description d\xe9taill\xe9e."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous avez cr\xe9\xe9 un singleton partag\xe9 simple avec une fonction expos\xe9e :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'//class mySingleton\n\nshared singleton Class constructor()\n\nexposed Function sayHello ($value : Text)\n	return "Hello "+$value\n\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"mySingleton"})," class and ",(0,t.jsx)(n.code,{children:"sayHello"})," function are listed when you call the ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/REST/catalog#singletons",children:(0,t.jsx)(n.code,{children:"$catalog"})})," command."]})}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez lancer cette requ\xeate :"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"POST"})," ",(0,t.jsx)(n.code,{children:"/rest/$singleton/mySingleton/sayHello"})]}),"\n",(0,t.jsx)(n.p,{children:'Body de la requ\xeate : ["John"]'}),"\n",(0,t.jsx)(n.h4,{id:"r\xe9ponse",children:"R\xe9ponse"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n	"result": "Hello John"\n}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var o=s(667294);let t={},r=o.createContext(t);function l(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);