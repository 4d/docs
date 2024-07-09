/*! For license information please see c2aecd56.1bd9aac2.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29814],{742858:(n,e,d)=>{d.r(e),d.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>x});var s=d(474848),r=d(28453);const t={id:"date-time-formats",title:"Formatos Fecha y hora"},i=void 0,l={id:"Project/date-time-formats",title:"Formatos Fecha y hora",description:"A lo largo de sus proyectos 4D, es posible que necesite dar formato a los valores de fecha y/u hora en funci\xf3n de las especificidades de la aplicaci\xf3n, la plataforma o la interfaz.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R4/Project/date-time-formats.md",sourceDirName:"Project",slug:"/Project/date-time-formats",permalink:"/docs/es/20-R4/Project/date-time-formats",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Fdate-time-formats.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"date-time-formats",title:"Formatos Fecha y hora"},sidebar:"docs",previous:{title:"P\xe1gina de compatibilidad",permalink:"/docs/es/20-R4/settings/compatibility"},next:{title:"Documentar un proyecto",permalink:"/docs/es/20-R4/Project/documentation"}},c={},x=[{value:"Lista de patrones",id:"Lista-de-patrones",level:2},{value:"Explorar modelos",id:"Explorar-modelos",level:2},{value:"<code>y</code> vs <code>Y</code>",id:"y-vs-Y",level:3},{value:"<code>L</code> (monopuesto) vs <code>M</code>",id:"L-monopuesto-vs-M",level:3},{value:"<code>e</code> vs <code>c</code>",id:"e-vs-c",level:3},{value:"<code>E</code> vs <code>e</code>",id:"E-vs-e",level:3},{value:"Ceros a la izquierda",id:"Ceros-a-la-izquierda",level:3},{value:"Partes localizadas",id:"Partes-localizadas",level:3},{value:"Letras adicionales",id:"Letras-adicionales",level:3},{value:"Espacios iniciales y finales",id:"Espacios-iniciales-y-finales",level:3},{value:"Ejemplos",id:"Ejemplos",level:2},{value:"Ver tambi\xe9n",id:"Ver-tambi\xe9n",level:2}];function j(n){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"A lo largo de sus proyectos 4D, es posible que necesite dar formato a los valores de fecha y/u hora en funci\xf3n de las especificidades de la aplicaci\xf3n, la plataforma o la interfaz."}),"\n",(0,s.jsx)(e.p,{children:"4D incluye una lista completa de patrones que puede utilizar para crear y aplicar formatos personalizados de fecha y hora en sus aplicaciones, adem\xe1s de los formatos por defecto. Los patrones de formato personalizados son compatibles con las siguientes funciones:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["el comando ",(0,s.jsx)(e.a,{href:"https://doc.4d.com/4dv20R/help/command/en/page10.html",children:(0,s.jsx)(e.code,{children:"String"})}),","]}),"\n",(0,s.jsxs)(e.li,{children:["los comandos ",(0,s.jsx)(e.a,{href:"https://doc.4d.com/4dv20R/help/command/en/page236.html",children:(0,s.jsx)(e.code,{children:"OBJECT SET FORMAT"})})," y ",(0,s.jsx)(e.a,{href:"https://doc.4d.com/4dv20R/help/command/en/page894.html",children:(0,s.jsx)(e.code,{children:"OBJECT Get format"})}),","]}),"\n",(0,s.jsxs)(e.li,{children:["el formato de fecha y hora de las propiedades del objeto de formulario, disponibles en la lista de propiedades o en las propiedades JSON ",(0,s.jsx)(e.a,{href:"../FormObjects/properties_Display.md/#date-format",children:(0,s.jsx)(e.code,{children:"dateFormat"})})," y ",(0,s.jsx)(e.a,{href:"../FormObjects/properties_Display.md/#time-format",children:(0,s.jsx)(e.code,{children:"timeFormat"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"Lista-de-patrones",children:"Lista de patrones"}),"\n",(0,s.jsx)(e.p,{children:"La siguiente tabla muestra todos los patrones soportados para formatos de fecha y hora."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"S\xedmbolo"}),(0,s.jsx)(e.th,{children:"Significado"}),(0,s.jsx)(e.th,{children:"Modelo"}),(0,s.jsx)(e.th,{children:"Ejemplo de salida"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"G"}),(0,s.jsx)(e.td,{children:"designador de era"}),(0,s.jsx)(e.td,{children:"G, GG o GGG"}),(0,s.jsx)(e.td,{children:"AD"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"GGGG"}),(0,s.jsx)(e.td,{children:"Anno Domini"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"GGGGG"}),(0,s.jsx)(e.td,{children:"A"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"y"}),(0,s.jsx)(e.td,{children:"a\xf1o"}),(0,s.jsx)(e.td,{children:"yy"}),(0,s.jsx)(e.td,{children:"96"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"y o yyyy"}),(0,s.jsx)(e.td,{children:"1996"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Y"}),(0,s.jsx)(e.td,{children:'a\xf1o de "Semana del a\xf1o"'}),(0,s.jsx)(e.td,{children:"Y"}),(0,s.jsx)(e.td,{children:"1997"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"u"}),(0,s.jsx)(e.td,{children:"a\xf1o prolongado"}),(0,s.jsx)(e.td,{children:"u"}),(0,s.jsx)(e.td,{children:"4601"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q"}),(0,s.jsx)(e.td,{children:"trimestre"}),(0,s.jsx)(e.td,{children:"Q"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"QQ"}),(0,s.jsx)(e.td,{children:"02"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"QQQ"}),(0,s.jsx)(e.td,{children:"Q2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"QQQQ"}),(0,s.jsx)(e.td,{children:"2do trimestre"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"QQQQQ"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"q"}),(0,s.jsx)(e.td,{children:"trimestre independiente"}),(0,s.jsx)(e.td,{children:"q"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"qq"}),(0,s.jsx)(e.td,{children:"02"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"qqq"}),(0,s.jsx)(e.td,{children:"Q2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"qqqq"}),(0,s.jsx)(e.td,{children:"2do trimestre"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"qqqqq"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"M"}),(0,s.jsx)(e.td,{children:"mes en a\xf1o"}),(0,s.jsx)(e.td,{children:"M"}),(0,s.jsx)(e.td,{children:"9"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"MM"}),(0,s.jsx)(e.td,{children:"09"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"MMM"}),(0,s.jsx)(e.td,{children:"Sept"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"MMMM"}),(0,s.jsx)(e.td,{children:"Septiembre"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"MMMMM"}),(0,s.jsx)(e.td,{children:"S"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"L"}),(0,s.jsx)(e.td,{children:"mes independiente en a\xf1o"}),(0,s.jsx)(e.td,{children:"L"}),(0,s.jsx)(e.td,{children:"9"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"LL"}),(0,s.jsx)(e.td,{children:"09"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"LLL"}),(0,s.jsx)(e.td,{children:"Sept"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"LLLL"}),(0,s.jsx)(e.td,{children:"Septiembre"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"LLLLL"}),(0,s.jsx)(e.td,{children:"S"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"w"}),(0,s.jsx)(e.td,{children:"semana del a\xf1o"}),(0,s.jsx)(e.td,{children:"w"}),(0,s.jsx)(e.td,{children:"27"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"ww"}),(0,s.jsx)(e.td,{children:"27"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"d"}),(0,s.jsx)(e.td,{children:"d\xeda del mes"}),(0,s.jsx)(e.td,{children:"d"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"dd"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"D"}),(0,s.jsx)(e.td,{children:"d\xeda del a\xf1o"}),(0,s.jsx)(e.td,{children:"D"}),(0,s.jsx)(e.td,{children:"189"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"E"}),(0,s.jsx)(e.td,{children:"d\xeda de la semana"}),(0,s.jsx)(e.td,{children:"E, EE o EEE"}),(0,s.jsx)(e.td,{children:"Tue"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"EEEE"}),(0,s.jsx)(e.td,{children:"Tuesday"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"EEEEE"}),(0,s.jsx)(e.td,{children:"T"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"EEEEEE"}),(0,s.jsx)(e.td,{children:"Tu"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"e"}),(0,s.jsx)(e.td,{children:"d\xeda de la semana local"}),(0,s.jsx)(e.td,{children:"e"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"ee"}),(0,s.jsx)(e.td,{children:"02"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"eee"}),(0,s.jsx)(e.td,{children:"Tue"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"eeee"}),(0,s.jsx)(e.td,{children:"Tuesday"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"eeeee"}),(0,s.jsx)(e.td,{children:"T"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"eeeeee"}),(0,s.jsx)(e.td,{children:"Tu"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"c"}),(0,s.jsx)(e.td,{children:"stand-alone local day of week"}),(0,s.jsx)(e.td,{children:"c o cc"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"ccc"}),(0,s.jsx)(e.td,{children:"Tue"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"cccc"}),(0,s.jsx)(e.td,{children:"Tuesday"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"ccccc"}),(0,s.jsx)(e.td,{children:"T"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"cccccc"}),(0,s.jsx)(e.td,{children:"Tu"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"a"}),(0,s.jsx)(e.td,{children:"AM o PM"}),(0,s.jsx)(e.td,{children:"a, aa, o aaa"}),(0,s.jsx)(e.td,{children:"PM [abbrev]"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"aaaa"}),(0,s.jsx)(e.td,{children:"PM [wide]"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"aaaaa"}),(0,s.jsx)(e.td,{children:"p"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"b"}),(0,s.jsx)(e.td,{children:"AM, PM, mediod\xeda, medianoche"}),(0,s.jsx)(e.td,{children:"b, bb o bbb"}),(0,s.jsx)(e.td,{children:"mid."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"bbbb"}),(0,s.jsx)(e.td,{children:"medianoche"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"bbbbb"}),(0,s.jsx)(e.td,{children:"md"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"B"}),(0,s.jsx)(e.td,{children:"per\xedodos de d\xedas flexibles"}),(0,s.jsx)(e.td,{children:"B, BB o BBB"}),(0,s.jsx)(e.td,{children:"at night [abbrev]"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"BBBB"}),(0,s.jsx)(e.td,{children:"at night [wide]"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"BBBBB"}),(0,s.jsx)(e.td,{children:"at night [narrow]"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"h"}),(0,s.jsx)(e.td,{children:"hora en am/pm (1~12)"}),(0,s.jsx)(e.td,{children:"h"}),(0,s.jsx)(e.td,{children:"7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"hh"}),(0,s.jsx)(e.td,{children:"07"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"H"}),(0,s.jsx)(e.td,{children:"hora en d\xeda (0~23)"}),(0,s.jsx)(e.td,{children:"H"}),(0,s.jsx)(e.td,{children:"0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"HH"}),(0,s.jsx)(e.td,{children:"00"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"K"}),(0,s.jsx)(e.td,{children:"hora en am/pm (0~11)"}),(0,s.jsx)(e.td,{children:"K"}),(0,s.jsx)(e.td,{children:"0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"KK"}),(0,s.jsx)(e.td,{children:"00"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"k"}),(0,s.jsx)(e.td,{children:"hora en d\xeda (1~24)"}),(0,s.jsx)(e.td,{children:"k"}),(0,s.jsx)(e.td,{children:"24"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"kk"}),(0,s.jsx)(e.td,{children:"24"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"m"}),(0,s.jsx)(e.td,{children:"minuto en hora"}),(0,s.jsx)(e.td,{children:"m"}),(0,s.jsx)(e.td,{children:"4"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"mm"}),(0,s.jsx)(e.td,{children:"04"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"s"}),(0,s.jsx)(e.td,{children:"segundo en minuto"}),(0,s.jsx)(e.td,{children:"s"}),(0,s.jsx)(e.td,{children:"5"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"ss"}),(0,s.jsx)(e.td,{children:"05"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:"Time Zone: ISO8601 basic hm?, with Z for 0"}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:"-08, +0530, Z"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Zona horaria: ISO8601 hm b\xe1sico, con Z"}),(0,s.jsx)(e.td,{children:"XX"}),(0,s.jsx)(e.td,{children:"-0800, Z"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Zona horaria: ISO8601 extendido hm, con Z"}),(0,s.jsx)(e.td,{children:"XXX"}),(0,s.jsx)(e.td,{children:"-08:00, Z"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Zona horaria: ISO8601 hms b\xe1sico, con Z"}),(0,s.jsx)(e.td,{children:"XXXX"}),(0,s.jsx)(e.td,{children:"-0800, -075258, Z"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Zona horaria: ISO8601 hms extendido, con Z"}),(0,s.jsx)(e.td,{children:"XXXXX"}),(0,s.jsx)(e.td,{children:"-08:00, -07:52:58, Z"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"x"}),(0,s.jsx)(e.td,{children:"Zona horaria: ISO8601 hm b\xe1sico, sin Z para 0"}),(0,s.jsx)(e.td,{children:"x"}),(0,s.jsx)(e.td,{children:"-08, +0530"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Zona horaria: ISO8601 hm b\xe1sico, sin Z"}),(0,s.jsx)(e.td,{children:"xx"}),(0,s.jsx)(e.td,{children:"-0800, +0000"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Zona horaria: ISO8601 hm extendido, sin Z"}),(0,s.jsx)(e.td,{children:"xxx"}),(0,s.jsx)(e.td,{children:"-08:00"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Zona horaria: ISO8601 hms b\xe1sico, sin Z"}),(0,s.jsx)(e.td,{children:"xxxx"}),(0,s.jsx)(e.td,{children:"-0800, -075258"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Time Zone: ISO8601 extended hms?, without Z"}),(0,s.jsx)(e.td,{children:"xxxxx"}),(0,s.jsx)(e.td,{children:"-08:00, -07:52:58"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"O"}),(0,s.jsx)(e.td,{children:"Zona horaria: GMT localizada abreviada"}),(0,s.jsx)(e.td,{children:"O"}),(0,s.jsx)(e.td,{children:"GMT-8"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Time Zone: long localized GMT (=ZZZZ)"}),(0,s.jsx)(e.td,{children:"OOOO"}),(0,s.jsx)(e.td,{children:"GMT-08:00"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"z"}),(0,s.jsx)(e.td,{children:"Zona horaria: no espec\xedfica"}),(0,s.jsx)(e.td,{children:"z, zz, o zzz"}),(0,s.jsx)(e.td,{children:"-0800"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"zzzz"}),(0,s.jsx)(e.td,{children:"GMT-08:00"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"zzzzz"}),(0,s.jsx)(e.td,{children:"-08:00, -07:52:58, Z"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"'"}),(0,s.jsx)(e.td,{children:"escape para texto"}),(0,s.jsx)(e.td,{children:"'"}),(0,s.jsx)(e.td,{children:"'"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"' '"}),(0,s.jsx)(e.td,{children:"dos comillas simples producen una"}),(0,s.jsx)(e.td,{children:"' '"}),(0,s.jsx)(e.td,{children:"' '"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"Explorar-modelos",children:"Explorar modelos"}),"\n",(0,s.jsxs)(e.h3,{id:"y-vs-Y",children:[(0,s.jsx)(e.code,{children:"y"})," vs ",(0,s.jsx)(e.code,{children:"Y"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"y"})," es el a\xf1o calendario, mientras que ",(0,s.jsx)(e.code,{children:"Y"})," es el a\xf1o basado en el n\xfamero de semana. Por ejemplo, si los primeros d\xedas de enero de 2010 no son la semana #1, entonces y = 2010 pero Y = 2009 (hasta la fecha en la que comienza la primera semana de 2010)."]}),"\n",(0,s.jsxs)(e.h3,{id:"L-monopuesto-vs-M",children:[(0,s.jsx)(e.code,{children:"L"})," (monopuesto) vs ",(0,s.jsx)(e.code,{children:"M"})]}),"\n",(0,s.jsxs)(e.p,{children:['En algunos idiomas (ruso, eslovaco), el mes utilizado por s\xed solo es diferente al mes en una fecha. In "January 10, 2010", "January" is not spelled the same as in "',(0,s.jsx)(e.em,{children:"rendez-vous"}),' in January".']}),"\n",(0,s.jsxs)(e.h3,{id:"e-vs-c",children:[(0,s.jsx)(e.code,{children:"e"})," vs ",(0,s.jsx)(e.code,{children:"c"})]}),"\n",(0,s.jsxs)(e.p,{children:["Same remark as for ",(0,s.jsx)(e.code,{children:"L"})," and ",(0,s.jsx)(e.code,{children:"M"}),": ",(0,s.jsx)(e.code,{children:"c"}),' is for a day used alone "every tuesday") and ',(0,s.jsx)(e.code,{children:"e"}),' is for a day in a date ("Tuesday January 15, 1951").']}),"\n",(0,s.jsxs)(e.h3,{id:"E-vs-e",children:[(0,s.jsx)(e.code,{children:"E"})," vs ",(0,s.jsx)(e.code,{children:"e"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"e"}),' se basa en la configuraci\xf3n del sistema: si la semana est\xe1 definida en el sistema como que comienza un mi\xe9rcoles, entonces el mi\xe9rcoles tendr\xe1 el valor num\xe9rico "1" (o cero) mientras que "E" siempre devuelve el mismo valor (de 1 a 7 o de 0 a 6).']}),"\n",(0,s.jsx)(e.h3,{id:"Ceros-a-la-izquierda",children:"Ceros a la izquierda"}),"\n",(0,s.jsx)(e.p,{children:'En general, cuando el n\xfamero de letras de la cadena de formato es superior al esperado, se a\xf1aden ceros a la izquierda. Ej: "yyyyy" dar\xeda "001996".'}),"\n",(0,s.jsx)(e.h3,{id:"Partes-localizadas",children:"Partes localizadas"}),"\n",(0,s.jsx)(e.p,{children:'Algunas partes de las salidas, como "medianoche" o "martes" est\xe1n localizadas, seg\xfan la configuraci\xf3n regional.'}),"\n",(0,s.jsxs)(e.p,{children:["Por ejemplo, para la hora ",(0,s.jsx)(e.code,{children:"13:25:34"}),', "B" aparecer\xe1 ',(0,s.jsx)(e.em,{children:"in the afternoon"})," en un sistema estadounidense, y ",(0,s.jsx)(e.em,{children:"apr\xe8s-midi"})," en un sistema franc\xe9s."]}),"\n",(0,s.jsx)(e.h3,{id:"Letras-adicionales",children:"Letras adicionales"}),"\n",(0,s.jsx)(e.p,{children:'Las cadenas de formato pueden contener caracteres que no deben interpretarse como caracteres de formato: si est\xe1n entre "a" y "z" o "A" y "Z", deben ir entre comillas simples.'}),"\n",(0,s.jsx)(e.p,{children:"Por ejemplo:"}),"\n",(0,s.jsx)(e.p,{children:'"15:30:00" con el modelo "HH \'hours and\' mm \'minutes\'" produce "15 hours and 30 minutes".'}),"\n",(0,s.jsx)(e.h3,{id:"Espacios-iniciales-y-finales",children:"Espacios iniciales y finales"}),"\n",(0,s.jsx)(e.p,{children:"Los espacios iniciales y finales de los modelos se recortan autom\xe1ticamente en las salidas. Si desea a\xf1adir espacios antes o despu\xe9s de la cadena resultante, debe encerrarlos entre comillas simples."}),"\n",(0,s.jsx)(e.p,{children:"Por ejemplo:"}),"\n",(0,s.jsx)(e.p,{children:'" HH : mm : ss " ---\x3e "09 : 10 : 25" "\' \'HH : mm : ss\' \'" ---\x3e " 09 : 10 : 25 "'}),"\n",(0,s.jsx)(e.h2,{id:"Ejemplos",children:"Ejemplos"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Fecha u hora"}),(0,s.jsx)(e.th,{children:"Modelo"}),(0,s.jsx)(e.th,{children:"Result"}),(0,s.jsx)(e.th,{children:"Comentarios"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"15/06/2000"}),(0,s.jsx)(e.td,{children:'"QQQQ"'}),(0,s.jsx)(e.td,{children:'"2do trimestre"'}),(0,s.jsx)(e.td,{children:"localizado"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17/03/2001"}),(0,s.jsx)(e.td,{children:'"D"'}),(0,s.jsx)(e.td,{children:'"76"'}),(0,s.jsx)(e.td,{children:"76\xba d\xeda del a\xf1o"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17/03/1954"}),(0,s.jsx)(e.td,{children:'"w"'}),(0,s.jsx)(e.td,{children:'"11"'}),(0,s.jsx)(e.td,{children:"11\xaa semana del a\xf1o"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17/03/1954"}),(0,s.jsx)(e.td,{children:'"eeee"'}),(0,s.jsx)(e.td,{children:'"Mi\xe9rcoles"'}),(0,s.jsx)(e.td,{children:"localizado"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"15:00:00"}),(0,s.jsx)(e.td,{children:'"a"'}),(0,s.jsx)(e.td,{children:'"PM"'}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"18:00:00"}),(0,s.jsx)(e.td,{children:'"K a"'}),(0,s.jsx)(e.td,{children:'"6 PM"'}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"13:30:15"}),(0,s.jsx)(e.td,{children:'"hh:mm aa O"'}),(0,s.jsx)(e.td,{children:'"01:30 PM GMT+1"'}),(0,s.jsx)(e.td,{})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"Ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(e.p,{children:["Ver ",(0,s.jsx)(e.a,{href:"https://blog.4d.com/tailored-customization-for-dates-and-times",children:"este blogpost"})," para m\xe1s informaci\xf3n sobre los formatos personalizados de fecha y hora."]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(j,{...n})}):j(n)}},221020:(n,e,d)=>{var s=d(296540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function x(n,e,d){var s,t={},x=null,j=null;for(s in void 0!==d&&(x=""+d),void 0!==e.key&&(x=""+e.key),void 0!==e.ref&&(j=e.ref),e)i.call(e,s)&&!c.hasOwnProperty(s)&&(t[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===t[s]&&(t[s]=e[s]);return{$$typeof:r,type:n,key:x,ref:j,props:t,_owner:l.current}}e.Fragment=t,e.jsx=x,e.jsxs=x},474848:(n,e,d)=>{n.exports=d(221020)},28453:(n,e,d)=>{d.d(e,{R:()=>i,x:()=>l});var s=d(296540);const r={},t=s.createContext(r);function i(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);