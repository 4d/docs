"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90782"],{26023:function(n,d,e){e.r(d),e.d(d,{default:()=>j,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>x,contentTitle:()=>c});var s=JSON.parse('{"id":"Project/date-time-formats","title":"Formatos data e hora","description":"Throughout your 4D projects, you might need to format date and/or time values according to the specificities of the application, the platform, or the interface.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Project/date-time-formats.md","sourceDirName":"Project","slug":"/Project/date-time-formats","permalink":"/docs/pt/Project/date-time-formats","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Fdate-time-formats.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"date-time-formats","title":"Formatos data e hora"},"sidebar":"docs","previous":{"title":"Componentes","permalink":"/docs/pt/Project/components"},"next":{"title":"Documentar um projecto","permalink":"/docs/pt/Project/documentation"}}'),t=e("785893"),r=e("250065");let i={id:"date-time-formats",title:"Formatos data e hora"},c=void 0,l={},x=[{value:"Lista de padr\xf5es",id:"lista-de-padr\xf5es",level:2},{value:"Explorando padr\xf5es",id:"explorando-padr\xf5es",level:2},{value:"<code>y</code> vs <code>Y</code>",id:"y-vs-y",level:3},{value:"<code>L</code> (monopuesto) vs <code>M</code>",id:"l-monopuesto-vs-m",level:3},{value:"<code>e</code> vs <code>c</code>",id:"e-vs-c",level:3},{value:"<code>E</code> vs <code>e</code>",id:"e-vs-e",level:3},{value:"Zeros \xe0 esquerda",id:"zeros-\xe0-esquerda",level:3},{value:"Pe\xe7as localizadas",id:"pe\xe7as-localizadas",level:3},{value:"Letras extras",id:"letras-extras",level:3},{value:"Espa\xe7os iniciais e finais",id:"espa\xe7os-iniciais-e-finais",level:3},{value:"Exemplos",id:"exemplos",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function h(n){let d={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.p,{children:"Throughout your 4D projects, you might need to format date and/or time values according to the specificities of the application, the platform, or the interface."}),"\n",(0,t.jsx)(d.p,{children:"4D includes a comprehensive list of patterns that you can use to create and apply customized date and time formats in your applications, in addition to default formats. Customized format patterns are supported by the following features:"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsxs)(d.li,{children:["o comando ",(0,t.jsx)(d.a,{href:"https://doc.4d.com/4dv20R/help/command/en/page10.html",children:(0,t.jsx)(d.code,{children:"String"})}),","]}),"\n",(0,t.jsxs)(d.li,{children:["the ",(0,t.jsx)(d.a,{href:"https://doc.4d.com/4dv20R/help/command/en/page236.html",children:(0,t.jsx)(d.code,{children:"OBJECT SET FORMAT"})})," and ",(0,t.jsx)(d.a,{href:"https://doc.4d.com/4dv20R/help/command/en/page894.html",children:(0,t.jsx)(d.code,{children:"OBJECT Get format"})})," commands,"]}),"\n",(0,t.jsxs)(d.li,{children:["the date and time format form object properties, available from the Property list or the ",(0,t.jsx)(d.a,{href:"../FormObjects/properties_Display.md/#date-format",children:(0,t.jsx)(d.code,{children:"dateFormat"})})," and ",(0,t.jsx)(d.a,{href:"../FormObjects/properties_Display.md/#time-format",children:(0,t.jsx)(d.code,{children:"timeFormat"})})," JSON properties."]}),"\n"]}),"\n",(0,t.jsx)(d.h2,{id:"lista-de-padr\xf5es",children:"Lista de padr\xf5es"}),"\n",(0,t.jsx)(d.p,{children:"The following table lists all supported patterns for date and time formats."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"S\xedmbolo"}),(0,t.jsx)(d.th,{children:"Significado"}),(0,t.jsx)(d.th,{children:"Padr\xe3o"}),(0,t.jsx)(d.th,{children:"Exemplo de sa\xedda"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"G"}),(0,t.jsx)(d.td,{children:"designador de era"}),(0,t.jsx)(d.td,{children:"G, GGG ou GGG"}),(0,t.jsx)(d.td,{children:"AD"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"GGGG"}),(0,t.jsx)(d.td,{children:"Anno Domini"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"GGGGG"}),(0,t.jsx)(d.td,{children:"A"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"y"}),(0,t.jsx)(d.td,{children:"ano"}),(0,t.jsx)(d.td,{children:"yy"}),(0,t.jsx)(d.td,{children:"96"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"y ou yyyy"}),(0,t.jsx)(d.td,{children:"1996"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Y"}),(0,t.jsx)(d.td,{children:'ano da "Semana do ano"'}),(0,t.jsx)(d.td,{children:"Y"}),(0,t.jsx)(d.td,{children:"1997"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"u"}),(0,t.jsx)(d.td,{children:"ano prolongado"}),(0,t.jsx)(d.td,{children:"u"}),(0,t.jsx)(d.td,{children:"4601"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Q"}),(0,t.jsx)(d.td,{children:"trimestre"}),(0,t.jsx)(d.td,{children:"Q"}),(0,t.jsx)(d.td,{children:"2"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"QQ"}),(0,t.jsx)(d.td,{children:"02"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"QQQ"}),(0,t.jsx)(d.td,{children:"Q2"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"QQQQ"}),(0,t.jsx)(d.td,{children:"2\xba trimestre"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"QQQQQ"}),(0,t.jsx)(d.td,{children:"2"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"q"}),(0,t.jsx)(d.td,{children:"trimestre aut\xf4nomo"}),(0,t.jsx)(d.td,{children:"q"}),(0,t.jsx)(d.td,{children:"2"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"qq"}),(0,t.jsx)(d.td,{children:"02"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"qqq"}),(0,t.jsx)(d.td,{children:"Q2"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"qqqq"}),(0,t.jsx)(d.td,{children:"2\xba trimestre"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"qqqqq"}),(0,t.jsx)(d.td,{children:"2"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"M"}),(0,t.jsx)(d.td,{children:"m\xeas no ano"}),(0,t.jsx)(d.td,{children:"M"}),(0,t.jsx)(d.td,{children:"9"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"MM"}),(0,t.jsx)(d.td,{children:"09"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"MMM"}),(0,t.jsx)(d.td,{children:"Set"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"MMMM"}),(0,t.jsx)(d.td,{children:"Setembro"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"MMMMM"}),(0,t.jsx)(d.td,{children:"S"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"L"}),(0,t.jsx)(d.td,{children:"m\xeas aut\xf4nomo no ano"}),(0,t.jsx)(d.td,{children:"L"}),(0,t.jsx)(d.td,{children:"9"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"LL"}),(0,t.jsx)(d.td,{children:"09"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"LLL"}),(0,t.jsx)(d.td,{children:"Set"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"LLLL"}),(0,t.jsx)(d.td,{children:"Setembro"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"LLLLL"}),(0,t.jsx)(d.td,{children:"S"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"w"}),(0,t.jsx)(d.td,{children:"semana do ano"}),(0,t.jsx)(d.td,{children:"w"}),(0,t.jsx)(d.td,{children:"27"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"ww"}),(0,t.jsx)(d.td,{children:"27"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"d"}),(0,t.jsx)(d.td,{children:"dia no m\xeas"}),(0,t.jsx)(d.td,{children:"d"}),(0,t.jsx)(d.td,{children:"2"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"dd"}),(0,t.jsx)(d.td,{children:"2"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"D"}),(0,t.jsx)(d.td,{children:"dia do ano"}),(0,t.jsx)(d.td,{children:"D"}),(0,t.jsx)(d.td,{children:"189"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"E"}),(0,t.jsx)(d.td,{children:"dia da semana"}),(0,t.jsx)(d.td,{children:"E, EE ou EEE"}),(0,t.jsx)(d.td,{children:"Tue"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"EEEE"}),(0,t.jsx)(d.td,{children:"Tuesday"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"EEEEE"}),(0,t.jsx)(d.td,{children:"T"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"EEEEEE"}),(0,t.jsx)(d.td,{children:"Tu"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"e"}),(0,t.jsx)(d.td,{children:"dia da semana local"}),(0,t.jsx)(d.td,{children:"e"}),(0,t.jsx)(d.td,{children:"2"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"ee"}),(0,t.jsx)(d.td,{children:"02"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"eee"}),(0,t.jsx)(d.td,{children:"Tue"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"eeee"}),(0,t.jsx)(d.td,{children:"Tuesday"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"eeeee"}),(0,t.jsx)(d.td,{children:"T"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"eeeeee"}),(0,t.jsx)(d.td,{children:"Tu"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"c"}),(0,t.jsx)(d.td,{children:"stand-alone local day of week"}),(0,t.jsx)(d.td,{children:"c ou cc"}),(0,t.jsx)(d.td,{children:"2"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"ccc"}),(0,t.jsx)(d.td,{children:"Tue"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"cccc"}),(0,t.jsx)(d.td,{children:"Tuesday"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"ccccc"}),(0,t.jsx)(d.td,{children:"T"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"cccccc"}),(0,t.jsx)(d.td,{children:"Tu"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"a"}),(0,t.jsx)(d.td,{children:"AM ou PM"}),(0,t.jsx)(d.td,{children:"a, aa, ou aaa"}),(0,t.jsx)(d.td,{children:"PM [abbrev]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"aaaa"}),(0,t.jsx)(d.td,{children:"PM [wide]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"aaaaa"}),(0,t.jsx)(d.td,{children:"p"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"b"}),(0,t.jsx)(d.td,{children:"AM, PM, meio-dia, meia-noite"}),(0,t.jsx)(d.td,{children:"b, bb ou bbb"}),(0,t.jsx)(d.td,{children:"mid."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"bbbb"}),(0,t.jsx)(d.td,{children:"meia-noite"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"bbbbb"}),(0,t.jsx)(d.td,{children:"md"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"B"}),(0,t.jsx)(d.td,{children:"flexible day periods"}),(0,t.jsx)(d.td,{children:"B, BB ou BBB"}),(0,t.jsx)(d.td,{children:"at night [abbrev]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"BBBB"}),(0,t.jsx)(d.td,{children:"at night [wide]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"BBBBB"}),(0,t.jsx)(d.td,{children:"at night [narrow]"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"h"}),(0,t.jsx)(d.td,{children:"hora em am/pm (1~12)"}),(0,t.jsx)(d.td,{children:"h"}),(0,t.jsx)(d.td,{children:"7"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"hh"}),(0,t.jsx)(d.td,{children:"07"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"H"}),(0,t.jsx)(d.td,{children:"hora no dia (0~23)"}),(0,t.jsx)(d.td,{children:"H"}),(0,t.jsx)(d.td,{children:"0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"HH"}),(0,t.jsx)(d.td,{children:"00"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"K"}),(0,t.jsx)(d.td,{children:"hora em am/pm (0~11)"}),(0,t.jsx)(d.td,{children:"K"}),(0,t.jsx)(d.td,{children:"0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"KK"}),(0,t.jsx)(d.td,{children:"00"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"k"}),(0,t.jsx)(d.td,{children:"hora no dia (1~24)"}),(0,t.jsx)(d.td,{children:"k"}),(0,t.jsx)(d.td,{children:"24"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"kk"}),(0,t.jsx)(d.td,{children:"24"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"m"}),(0,t.jsx)(d.td,{children:"minuto em hora"}),(0,t.jsx)(d.td,{children:"m"}),(0,t.jsx)(d.td,{children:"4"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"mm"}),(0,t.jsx)(d.td,{children:"04"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"s"}),(0,t.jsx)(d.td,{children:"segundo em minuto"}),(0,t.jsx)(d.td,{children:"s"}),(0,t.jsx)(d.td,{children:"5"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"ss"}),(0,t.jsx)(d.td,{children:"05"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"X"}),(0,t.jsx)(d.td,{children:"Time Zone: ISO8601 basic hm?, with Z for 0"}),(0,t.jsx)(d.td,{children:"X"}),(0,t.jsx)(d.td,{children:"-08, +0530, Z"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"Zona de tempo: ISO8601 hm, com Z"}),(0,t.jsx)(d.td,{children:"XX"}),(0,t.jsx)(d.td,{children:"-0800, Z"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"Time Zone: ISO8601 extended hm, with Z"}),(0,t.jsx)(d.td,{children:"XXX"}),(0,t.jsx)(d.td,{children:"-08:00, Z"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"Time Zone: ISO8601 basic hms?, with Z"}),(0,t.jsx)(d.td,{children:"XXXX"}),(0,t.jsx)(d.td,{children:"-0800, -075258, Z"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"Time Zone: ISO8601 extended hms?, with Z"}),(0,t.jsx)(d.td,{children:"XXXXX"}),(0,t.jsx)(d.td,{children:"-08:00, -07:52:58, Z"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"x"}),(0,t.jsx)(d.td,{children:"Time Zone: ISO8601 basic hm?, without Z for 0"}),(0,t.jsx)(d.td,{children:"x"}),(0,t.jsx)(d.td,{children:"-08, +0530"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"Time Zone: ISO8601 basic hm, without Z"}),(0,t.jsx)(d.td,{children:"xx"}),(0,t.jsx)(d.td,{children:"-800"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"Time Zone: ISO8601 extended hm, without Z"}),(0,t.jsx)(d.td,{children:"xxx"}),(0,t.jsx)(d.td,{children:"-08:00"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"Time Zone: ISO8601 basic hms?, without Z"}),(0,t.jsx)(d.td,{children:"xxxx"}),(0,t.jsx)(d.td,{children:"-0800, -075258"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"Time Zone: ISO8601 extended hms?, without Z"}),(0,t.jsx)(d.td,{children:"xxxxx"}),(0,t.jsx)(d.td,{children:"-08:00, -07:52:58"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"O"}),(0,t.jsx)(d.td,{children:"Fuso hor\xe1rio: GMT localizado curto"}),(0,t.jsx)(d.td,{children:"O"}),(0,t.jsx)(d.td,{children:"GMT-8"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"Time Zone: long localized GMT (=ZZZZ)"}),(0,t.jsx)(d.td,{children:"OOOO"}),(0,t.jsx)(d.td,{children:"GMT-08:00"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"z"}),(0,t.jsx)(d.td,{children:"Time Zone: specific non-location"}),(0,t.jsx)(d.td,{children:"z, zz ou zzz"}),(0,t.jsx)(d.td,{children:"-0800"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"zzzz"}),(0,t.jsx)(d.td,{children:"GMT-08:00"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"zzzzz"}),(0,t.jsx)(d.td,{children:"-08:00, -07:52:58, Z"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"'"}),(0,t.jsx)(d.td,{children:"escape for text"}),(0,t.jsx)(d.td,{children:"'"}),(0,t.jsx)(d.td,{children:"'"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"' '"}),(0,t.jsx)(d.td,{children:"duas aspas simples produzem uma"}),(0,t.jsx)(d.td,{children:"' '"}),(0,t.jsx)(d.td,{children:"' '"})]})]})]}),"\n",(0,t.jsx)(d.h2,{id:"explorando-padr\xf5es",children:"Explorando padr\xf5es"}),"\n",(0,t.jsxs)(d.h3,{id:"y-vs-y",children:[(0,t.jsx)(d.code,{children:"y"})," vs ",(0,t.jsx)(d.code,{children:"Y"})]}),"\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.code,{children:"y"})," es el a\xf1o calendario, mientras que ",(0,t.jsx)(d.code,{children:"Y"})," es el a\xf1o basado en el n\xfamero de semana. For example, if the first days of January 2010 are not week #1, then y = 2010 but Y = 2009 (until the date where the 1st week of 2010 begins)."]}),"\n",(0,t.jsxs)(d.h3,{id:"l-monopuesto-vs-m",children:[(0,t.jsx)(d.code,{children:"L"})," (monopuesto) vs ",(0,t.jsx)(d.code,{children:"M"})]}),"\n",(0,t.jsxs)(d.p,{children:['In some languages (Russian, Slovak), the month used alone is different from the month in a date. In "January 10, 2010", "January" is not spelled the same as in "',(0,t.jsx)(d.em,{children:"rendez-vous"}),' in January".']}),"\n",(0,t.jsxs)(d.h3,{id:"e-vs-c",children:[(0,t.jsx)(d.code,{children:"e"})," vs ",(0,t.jsx)(d.code,{children:"c"})]}),"\n",(0,t.jsxs)(d.p,{children:["Same remark as for ",(0,t.jsx)(d.code,{children:"L"})," and ",(0,t.jsx)(d.code,{children:"M"}),": ",(0,t.jsx)(d.code,{children:"c"}),' is for a day used alone "every tuesday") and ',(0,t.jsx)(d.code,{children:"e"}),' is for a day in a date ("Tuesday January 15, 1951").']}),"\n",(0,t.jsxs)(d.h3,{id:"e-vs-e",children:[(0,t.jsx)(d.code,{children:"E"})," vs ",(0,t.jsx)(d.code,{children:"e"})]}),"\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.code,{children:"e"}),' se basa en la configuraci\xf3n del sistema: si la semana est\xe1 definida en el sistema como que comienza un mi\xe9rcoles, entonces el mi\xe9rcoles tendr\xe1 el valor num\xe9rico "1" (o cero) mientras que "E" siempre devuelve el mismo valor (de 1 a 7 o de 0 a 6).']}),"\n",(0,t.jsx)(d.h3,{id:"zeros-\xe0-esquerda",children:"Zeros \xe0 esquerda"}),"\n",(0,t.jsx)(d.p,{children:'In general, when the number of letters in the formatting string is higher than the expected number, leading zeros are added. Ex: "yyyyyy" daria "001996".'}),"\n",(0,t.jsx)(d.h3,{id:"pe\xe7as-localizadas",children:"Pe\xe7as localizadas"}),"\n",(0,t.jsx)(d.p,{children:'Some parts of the outputs, such as "midnight" or "Tuesday" are localized, according to regional settings.'}),"\n",(0,t.jsxs)(d.p,{children:["Por ejemplo, para la hora ",(0,t.jsx)(d.code,{children:"13:25:34"}),', "B" aparecer\xe1 ',(0,t.jsx)(d.em,{children:"in the afternoon"})," en un sistema estadounidense, y ",(0,t.jsx)(d.em,{children:"apr\xe8s-midi"})," en un sistema franc\xe9s."]}),"\n",(0,t.jsx)(d.h3,{id:"letras-extras",children:"Letras extras"}),"\n",(0,t.jsx)(d.p,{children:'Formatting strings can contain characters not to be interpreted as formatting characters: if they are between "a" and "z" or "A" and "Z", they must be enclosed in single quotes.'}),"\n",(0,t.jsx)(d.p,{children:"Por exemplo:"}),"\n",(0,t.jsx)(d.p,{children:'"15:30:00" with pattern "HH \'hours and\' mm \'minutes\'" produces "15 hours and 30 minutes".'}),"\n",(0,t.jsx)(d.h3,{id:"espa\xe7os-iniciais-e-finais",children:"Espa\xe7os iniciais e finais"}),"\n",(0,t.jsx)(d.p,{children:"Starting and ending spaces in patterns are automatically trimmed in outputs. If you want to add spaces before or after the resulting string, you must enclose them in single quotes."}),"\n",(0,t.jsx)(d.p,{children:"Por exemplo:"}),"\n",(0,t.jsx)(d.p,{children:'" HH : mm : ss " ---\x3e "09 : 10 : 25"\n"\' \'HH : mm : ss\' \'" ---\x3e " 09 : 10 : 25 "'}),"\n",(0,t.jsx)(d.h2,{id:"exemplos",children:"Exemplos"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Data ou hora"}),(0,t.jsx)(d.th,{children:"Padr\xe3o"}),(0,t.jsx)(d.th,{children:"Resultados"}),(0,t.jsx)(d.th,{children:"Coment\xe1rios"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"15/06/2000"}),(0,t.jsx)(d.td,{children:'"QQQQ"'}),(0,t.jsx)(d.td,{children:'"2\xba trimestre"'}),(0,t.jsx)(d.td,{children:"localizado"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"17/03/2001"}),(0,t.jsx)(d.td,{children:'"D"'}),(0,t.jsx)(d.td,{children:'"76"'}),(0,t.jsx)(d.td,{children:"76\xba dia do ano"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"17/03/1954"}),(0,t.jsx)(d.td,{children:'"w"'}),(0,t.jsx)(d.td,{children:'"11"'}),(0,t.jsx)(d.td,{children:"11\xaa semana do ano"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"17/03/1954"}),(0,t.jsx)(d.td,{children:'"eeee"'}),(0,t.jsx)(d.td,{children:'"Quarta-feira"'}),(0,t.jsx)(d.td,{children:"localizado"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"15:00:00"}),(0,t.jsx)(d.td,{children:'"a"'}),(0,t.jsx)(d.td,{children:'"PM"'}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"18:00:00"}),(0,t.jsx)(d.td,{children:'"K a"'}),(0,t.jsx)(d.td,{children:'"6 PM"'}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"13:30:15"}),(0,t.jsx)(d.td,{children:'"hh:mm aa O"'}),(0,t.jsx)(d.td,{children:'"01:30 PM GMT+1"'}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(d.p,{children:["Ver ",(0,t.jsx)(d.a,{href:"https://blog.4d.com/tailored-customization-for-dates-and-times",children:"este blogpost"})," para m\xe1s informaci\xf3n sobre los formatos personalizados de fecha y hora."]})]})}function j(n={}){let{wrapper:d}={...(0,r.a)(),...n.components};return d?(0,t.jsx)(d,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},250065:function(n,d,e){e.d(d,{Z:function(){return c},a:function(){return i}});var s=e(667294);let t={},r=s.createContext(t);function i(n){let d=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(d):{...d,...n}},[d,n])}function c(n){let d;return d=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),s.createElement(r.Provider,{value:d},n.children)}}}]);