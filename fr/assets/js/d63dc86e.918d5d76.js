"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5183"],{535437:function(n,e,d){d.r(e),d.d(e,{default:()=>j,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>h,contentTitle:()=>l});var t=JSON.parse('{"id":"Project/date-time-formats","title":"Date and Time Formats","description":"Throughout your 4D projects, you might need to format date and/or time values according to the specificities of the application, the platform, or the interface.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/Project/date-time-formats.md","sourceDirName":"Project","slug":"/Project/date-time-formats","permalink":"/docs/fr/20-R7/Project/date-time-formats","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Fdate-time-formats.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"date-time-formats","title":"Date and Time Formats"},"sidebar":"docs","previous":{"title":"Composants","permalink":"/docs/fr/20-R7/Project/components"},"next":{"title":"Documenter un projet","permalink":"/docs/fr/20-R7/Project/documentation"}}'),s=d("785893"),r=d("250065");let i={id:"date-time-formats",title:"Date and Time Formats"},l=void 0,c={},h=[{value:"Pattern list",id:"pattern-list",level:2},{value:"Exploring patterns",id:"exploring-patterns",level:2},{value:"<code>y</code> vs <code>Y</code>",id:"y-vs-y",level:3},{value:"<code>L</code> (stand-alone) vs <code>M</code>",id:"l-stand-alone-vs-m",level:3},{value:"<code>e</code> vs <code>c</code>",id:"e-vs-c",level:3},{value:"<code>E</code> vs <code>e</code>",id:"e-vs-e",level:3},{value:"Leading zeros",id:"leading-zeros",level:3},{value:"Localized parts",id:"localized-parts",level:3},{value:"Extra letters",id:"extra-letters",level:3},{value:"Starting and ending spaces",id:"starting-and-ending-spaces",level:3},{value:"Exemples",id:"exemples",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function x(n){let e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Throughout your 4D projects, you might need to format date and/or time values according to the specificities of the application, the platform, or the interface."}),"\n",(0,s.jsx)(e.p,{children:"4D includes a comprehensive list of patterns that you can use to create and apply customized date and time formats in your applications, in addition to default formats. Customized format patterns are supported by the following features:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["the ",(0,s.jsx)(e.a,{href:"https://doc.4d.com/4dv20R/help/command/en/page10.html",children:(0,s.jsx)(e.code,{children:"String"})})," command,"]}),"\n",(0,s.jsxs)(e.li,{children:["the ",(0,s.jsx)(e.a,{href:"https://doc.4d.com/4dv20R/help/command/en/page236.html",children:(0,s.jsx)(e.code,{children:"OBJECT SET FORMAT"})})," and ",(0,s.jsx)(e.a,{href:"https://doc.4d.com/4dv20R/help/command/en/page894.html",children:(0,s.jsx)(e.code,{children:"OBJECT Get format"})})," commands,"]}),"\n",(0,s.jsxs)(e.li,{children:["the date and time format form object properties, available from the Property list or the ",(0,s.jsx)(e.a,{href:"../FormObjects/properties_Display.md/#date-format",children:(0,s.jsx)(e.code,{children:"dateFormat"})})," and ",(0,s.jsx)(e.a,{href:"../FormObjects/properties_Display.md/#time-format",children:(0,s.jsx)(e.code,{children:"timeFormat"})})," JSON properties."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"pattern-list",children:"Pattern list"}),"\n",(0,s.jsx)(e.p,{children:"The following table lists all supported patterns for date and time formats."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Symbol"}),(0,s.jsx)(e.th,{children:"Description"}),(0,s.jsx)(e.th,{children:"Motif"}),(0,s.jsx)(e.th,{children:"Example Output"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"G"}),(0,s.jsx)(e.td,{children:"era designator"}),(0,s.jsx)(e.td,{children:"G, GG, or GGG"}),(0,s.jsx)(e.td,{children:"AD"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"GGGG"}),(0,s.jsx)(e.td,{children:"Anno Domini"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"GGGGG"}),(0,s.jsx)(e.td,{children:"A"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"y"}),(0,s.jsx)(e.td,{children:"year"}),(0,s.jsx)(e.td,{children:"yy"}),(0,s.jsx)(e.td,{children:"96"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"y or yyyy"}),(0,s.jsx)(e.td,{children:"1996"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Y"}),(0,s.jsx)(e.td,{children:'year of "Week of Year"'}),(0,s.jsx)(e.td,{children:"Y"}),(0,s.jsx)(e.td,{children:"1997"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"u"}),(0,s.jsx)(e.td,{children:"extended year"}),(0,s.jsx)(e.td,{children:"u"}),(0,s.jsx)(e.td,{children:"4601"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Q"}),(0,s.jsx)(e.td,{children:"quarter"}),(0,s.jsx)(e.td,{children:"Q"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"QQ"}),(0,s.jsx)(e.td,{children:"02"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"QQQ"}),(0,s.jsx)(e.td,{children:"Q2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"QQQQ"}),(0,s.jsx)(e.td,{children:"2nd quarter"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"QQQQQ"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"q"}),(0,s.jsx)(e.td,{children:"stand-alone quarter"}),(0,s.jsx)(e.td,{children:"q"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"qq"}),(0,s.jsx)(e.td,{children:"02"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"qqq"}),(0,s.jsx)(e.td,{children:"Q2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"qqqq"}),(0,s.jsx)(e.td,{children:"2nd quarter"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"qqqqq"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"M"}),(0,s.jsx)(e.td,{children:"month in year"}),(0,s.jsx)(e.td,{children:"M"}),(0,s.jsx)(e.td,{children:"9"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"MM"}),(0,s.jsx)(e.td,{children:"09"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"MMM"}),(0,s.jsx)(e.td,{children:"Sep"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"MMMM"}),(0,s.jsx)(e.td,{children:"September"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"MMMMM"}),(0,s.jsx)(e.td,{children:"S"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"L"}),(0,s.jsx)(e.td,{children:"stand-alone month in year"}),(0,s.jsx)(e.td,{children:"L"}),(0,s.jsx)(e.td,{children:"9"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"LL"}),(0,s.jsx)(e.td,{children:"09"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"LLL"}),(0,s.jsx)(e.td,{children:"Sep"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"LLLL"}),(0,s.jsx)(e.td,{children:"September"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"LLLLL"}),(0,s.jsx)(e.td,{children:"S"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"w"}),(0,s.jsx)(e.td,{children:"week of year"}),(0,s.jsx)(e.td,{children:"w"}),(0,s.jsx)(e.td,{children:"27"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"ww"}),(0,s.jsx)(e.td,{children:"27"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"d"}),(0,s.jsx)(e.td,{children:"day in month"}),(0,s.jsx)(e.td,{children:"d"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"dd"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"D"}),(0,s.jsx)(e.td,{children:"day of year"}),(0,s.jsx)(e.td,{children:"D"}),(0,s.jsx)(e.td,{children:"189"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"E"}),(0,s.jsx)(e.td,{children:"day of week"}),(0,s.jsx)(e.td,{children:"E, EE, or EEE"}),(0,s.jsx)(e.td,{children:"Tue"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"EEEE"}),(0,s.jsx)(e.td,{children:"Tuesday"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"EEEEE"}),(0,s.jsx)(e.td,{children:"T"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"EEEEEE"}),(0,s.jsx)(e.td,{children:"Tu"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"e"}),(0,s.jsx)(e.td,{children:"local day of week"}),(0,s.jsx)(e.td,{children:"e"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"ee"}),(0,s.jsx)(e.td,{children:"02"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"eee"}),(0,s.jsx)(e.td,{children:"Tue"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"eeee"}),(0,s.jsx)(e.td,{children:"Tuesday"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"eeeee"}),(0,s.jsx)(e.td,{children:"T"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"eeeeee"}),(0,s.jsx)(e.td,{children:"Tu"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"c"}),(0,s.jsx)(e.td,{children:"stand-alone local day of week"}),(0,s.jsx)(e.td,{children:"c or cc"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"ccc"}),(0,s.jsx)(e.td,{children:"Tue"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"cccc"}),(0,s.jsx)(e.td,{children:"Tuesday"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"ccccc"}),(0,s.jsx)(e.td,{children:"T"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"cccccc"}),(0,s.jsx)(e.td,{children:"Tu"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"a"}),(0,s.jsx)(e.td,{children:"AM or PM"}),(0,s.jsx)(e.td,{children:"a, aa, or aaa"}),(0,s.jsx)(e.td,{children:"PM [abbrev]"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"aaaa"}),(0,s.jsx)(e.td,{children:"PM [wide]"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"aaaaa"}),(0,s.jsx)(e.td,{children:"p"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"b"}),(0,s.jsx)(e.td,{children:"AM, PM, noon, midnight"}),(0,s.jsx)(e.td,{children:"b, bb, or bbb"}),(0,s.jsx)(e.td,{children:"mid."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"bbbb"}),(0,s.jsx)(e.td,{children:"midnight"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"bbbbb"}),(0,s.jsx)(e.td,{children:"md"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"B"}),(0,s.jsx)(e.td,{children:"flexible day periods"}),(0,s.jsx)(e.td,{children:"B, BB, or BBB"}),(0,s.jsx)(e.td,{children:"at night [abbrev]"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"BBBB"}),(0,s.jsx)(e.td,{children:"at night [wide]"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"BBBBB"}),(0,s.jsx)(e.td,{children:"at night [narrow]"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"h"}),(0,s.jsx)(e.td,{children:"hour in am/pm (1~12)"}),(0,s.jsx)(e.td,{children:"h"}),(0,s.jsx)(e.td,{children:"7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"hh"}),(0,s.jsx)(e.td,{children:"07"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"H"}),(0,s.jsx)(e.td,{children:"hour in day (0~23)"}),(0,s.jsx)(e.td,{children:"H"}),(0,s.jsx)(e.td,{children:"0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"HH"}),(0,s.jsx)(e.td,{children:"00"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"K"}),(0,s.jsx)(e.td,{children:"hour in am/pm (0~11)"}),(0,s.jsx)(e.td,{children:"K"}),(0,s.jsx)(e.td,{children:"0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"KK"}),(0,s.jsx)(e.td,{children:"00"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"k"}),(0,s.jsx)(e.td,{children:"hour in day (1~24)"}),(0,s.jsx)(e.td,{children:"k"}),(0,s.jsx)(e.td,{children:"24"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"kk"}),(0,s.jsx)(e.td,{children:"24"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"m"}),(0,s.jsx)(e.td,{children:"minute in hour"}),(0,s.jsx)(e.td,{children:"m"}),(0,s.jsx)(e.td,{children:"4"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"mm"}),(0,s.jsx)(e.td,{children:"04"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"s"}),(0,s.jsx)(e.td,{children:"second in minute"}),(0,s.jsx)(e.td,{children:"s"}),(0,s.jsx)(e.td,{children:"5"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"ss"}),(0,s.jsx)(e.td,{children:"05"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:"Time Zone: ISO8601 basic hm?, with Z for 0"}),(0,s.jsx)(e.td,{children:"X"}),(0,s.jsx)(e.td,{children:"-08, +0530, Z"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Time Zone: ISO8601 basic hm, with Z"}),(0,s.jsx)(e.td,{children:"XX"}),(0,s.jsx)(e.td,{children:"-0800, Z"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Time Zone: ISO8601 extended hm, with Z"}),(0,s.jsx)(e.td,{children:"XXX"}),(0,s.jsx)(e.td,{children:"-08:00, Z"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Time Zone: ISO8601 basic hms?, with Z"}),(0,s.jsx)(e.td,{children:"XXXX"}),(0,s.jsx)(e.td,{children:"-0800, -075258, Z"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Time Zone: ISO8601 extended hms?, with Z"}),(0,s.jsx)(e.td,{children:"XXXXX"}),(0,s.jsx)(e.td,{children:"-08:00, -07:52:58, Z"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"x"}),(0,s.jsx)(e.td,{children:"Time Zone: ISO8601 basic hm?, without Z for 0"}),(0,s.jsx)(e.td,{children:"x"}),(0,s.jsx)(e.td,{children:"-08, +0530"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Time Zone: ISO8601 basic hm, without Z"}),(0,s.jsx)(e.td,{children:"xx"}),(0,s.jsx)(e.td,{children:"-800"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Time Zone: ISO8601 extended hm, without Z"}),(0,s.jsx)(e.td,{children:"xxx"}),(0,s.jsx)(e.td,{children:"-08:00"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Time Zone: ISO8601 basic hms?, without Z"}),(0,s.jsx)(e.td,{children:"xxxx"}),(0,s.jsx)(e.td,{children:"-0800, -075258"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Time Zone: ISO8601 extended hms?, without Z"}),(0,s.jsx)(e.td,{children:"xxxxx"}),(0,s.jsx)(e.td,{children:"-08:00, -07:52:58"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"O"}),(0,s.jsx)(e.td,{children:"Time Zone: short localized GMT"}),(0,s.jsx)(e.td,{children:"O"}),(0,s.jsx)(e.td,{children:"GMT-8"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Time Zone: long localized GMT (=ZZZZ)"}),(0,s.jsx)(e.td,{children:"OOOO"}),(0,s.jsx)(e.td,{children:"GMT-08:00"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"z"}),(0,s.jsx)(e.td,{children:"Time Zone: specific non-location"}),(0,s.jsx)(e.td,{children:"z, zz, or zzz"}),(0,s.jsx)(e.td,{children:"-0800"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"zzzz"}),(0,s.jsx)(e.td,{children:"GMT-08:00"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"zzzzz"}),(0,s.jsx)(e.td,{children:"-08:00, -07:52:58, Z"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"'"}),(0,s.jsx)(e.td,{children:"escape for text"}),(0,s.jsx)(e.td,{children:"'"}),(0,s.jsx)(e.td,{children:"'"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"' '"}),(0,s.jsx)(e.td,{children:"two single quotes produce one"}),(0,s.jsx)(e.td,{children:"' '"}),(0,s.jsx)(e.td,{children:"' '"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"exploring-patterns",children:"Exploring patterns"}),"\n",(0,s.jsxs)(e.h3,{id:"y-vs-y",children:[(0,s.jsx)(e.code,{children:"y"})," vs ",(0,s.jsx)(e.code,{children:"Y"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"y"})," is the calendar year, while ",(0,s.jsx)(e.code,{children:"Y"})," is the year based on the week number. For example, if the first days of January 2010 are not week #1, then y = 2010 but Y = 2009 (until the date where the 1st week of 2010 begins)."]}),"\n",(0,s.jsxs)(e.h3,{id:"l-stand-alone-vs-m",children:[(0,s.jsx)(e.code,{children:"L"})," (stand-alone) vs ",(0,s.jsx)(e.code,{children:"M"})]}),"\n",(0,s.jsxs)(e.p,{children:['In some languages (Russian, Slovak), the month used alone is different from the month in a date. In "January 10, 2010", "January" is not spelled the same as in "',(0,s.jsx)(e.em,{children:"rendez-vous"}),' in January".']}),"\n",(0,s.jsxs)(e.h3,{id:"e-vs-c",children:[(0,s.jsx)(e.code,{children:"e"})," vs ",(0,s.jsx)(e.code,{children:"c"})]}),"\n",(0,s.jsxs)(e.p,{children:["Same remark as for ",(0,s.jsx)(e.code,{children:"L"})," and ",(0,s.jsx)(e.code,{children:"M"}),": ",(0,s.jsx)(e.code,{children:"c"}),' is for a day used alone "every tuesday") and ',(0,s.jsx)(e.code,{children:"e"}),' is for a day in a date ("Tuesday January 15, 1951").']}),"\n",(0,s.jsxs)(e.h3,{id:"e-vs-e",children:[(0,s.jsx)(e.code,{children:"E"})," vs ",(0,s.jsx)(e.code,{children:"e"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"e"}),' is based on system settings: if the week is defined in the system as starting on a Wednesday, then Wednesday will have the numerical value "1" (or zero) whereas "E" always returns the same value (from 1 to 7 or from 0 to 6).']}),"\n",(0,s.jsx)(e.h3,{id:"leading-zeros",children:"Leading zeros"}),"\n",(0,s.jsx)(e.p,{children:'In general, when the number of letters in the formatting string is higher than the expected number, leading zeros are added. Ex: "yyyyyy" would give "001996".'}),"\n",(0,s.jsx)(e.h3,{id:"localized-parts",children:"Localized parts"}),"\n",(0,s.jsx)(e.p,{children:'Some parts of the outputs, such as "midnight" or "Tuesday" are localized, according to regional settings.'}),"\n",(0,s.jsxs)(e.p,{children:["For example, for the time ",(0,s.jsx)(e.code,{children:"13:25:34"}),', "B" will display ',(0,s.jsx)(e.em,{children:"in the afternoon"})," on an US system, and ",(0,s.jsx)(e.em,{children:"apr\xe8s-midi"})," on a French system."]}),"\n",(0,s.jsx)(e.h3,{id:"extra-letters",children:"Extra letters"}),"\n",(0,s.jsx)(e.p,{children:'Formatting strings can contain characters not to be interpreted as formatting characters: if they are between "a" and "z" or "A" and "Z", they must be enclosed in single quotes.'}),"\n",(0,s.jsx)(e.p,{children:"Par exemple :"}),"\n",(0,s.jsx)(e.p,{children:'"15:30:00" with pattern "HH \'hours and\' mm \'minutes\'" produces "15 hours and 30 minutes".'}),"\n",(0,s.jsx)(e.h3,{id:"starting-and-ending-spaces",children:"Starting and ending spaces"}),"\n",(0,s.jsx)(e.p,{children:"Starting and ending spaces in patterns are automatically trimmed in outputs. If you want to add spaces before or after the resulting string, you must enclose them in single quotes."}),"\n",(0,s.jsx)(e.p,{children:"Par exemple :"}),"\n",(0,s.jsx)(e.p,{children:'" HH : mm : ss " ---\x3e "09 : 10 : 25"\n"\' \'HH : mm : ss\' \'" ---\x3e " 09 : 10 : 25 "'}),"\n",(0,s.jsx)(e.h2,{id:"exemples",children:"Exemples"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Date or time"}),(0,s.jsx)(e.th,{children:"Motif"}),(0,s.jsx)(e.th,{children:"R\xe9sultat"}),(0,s.jsx)(e.th,{children:"Commentaires"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"15/06/2000"}),(0,s.jsx)(e.td,{children:'"QQQQ"'}),(0,s.jsx)(e.td,{children:'"2nd quarter"'}),(0,s.jsx)(e.td,{children:"localis\xe9"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17/03/2001"}),(0,s.jsx)(e.td,{children:'"D"'}),(0,s.jsx)(e.td,{children:'"76"'}),(0,s.jsx)(e.td,{children:"76th day of the year"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17/03/1954"}),(0,s.jsx)(e.td,{children:'"w"'}),(0,s.jsx)(e.td,{children:'"11"'}),(0,s.jsx)(e.td,{children:"11th week of the year"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17/03/1954"}),(0,s.jsx)(e.td,{children:'"eeee"'}),(0,s.jsx)(e.td,{children:'"Wednesday"'}),(0,s.jsx)(e.td,{children:"localis\xe9"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"15:00:00"}),(0,s.jsx)(e.td,{children:'"a"'}),(0,s.jsx)(e.td,{children:'"PM"'}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"18:00:00"}),(0,s.jsx)(e.td,{children:'"K a"'}),(0,s.jsx)(e.td,{children:'"6 PM"'}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"13:30:15"}),(0,s.jsx)(e.td,{children:'"hh:mm aa O"'}),(0,s.jsx)(e.td,{children:'"01:30 PM GMT+1"'}),(0,s.jsx)(e.td,{})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(e.p,{children:["See ",(0,s.jsx)(e.a,{href:"https://blog.4d.com/tailored-customization-for-dates-and-times",children:"this blogpost"})," for more information on the custom date and time formats."]})]})}function j(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return l},a:function(){return i}});var t=d(667294);let s={},r=t.createContext(s);function i(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);