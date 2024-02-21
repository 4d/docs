"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46071],{603905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(667294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),s=p(a),k=r,g=s["".concat(o,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},899306:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>m});a(667294);var n=a(603905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={id:"date-time-formats",title:"Date and Time Formats"},d=void 0,o={unversionedId:"Project/date-time-formats",id:"version-20-R4/Project/date-time-formats",title:"Date and Time Formats",description:"Throughout your 4D projects, you might need to format date and/or time values according to the specificities of the application, the platform, or the interface.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R4/Project/date-time-formats.md",sourceDirName:"Project",slug:"/Project/date-time-formats",permalink:"/docs/es/Project/date-time-formats",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Fdate-time-formats.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"date-time-formats",title:"Date and Time Formats"},sidebar:"docs",previous:{title:"P\xe1gina de compatibilidad",permalink:"/docs/es/settings/compatibility"},next:{title:"Documenting a project",permalink:"/docs/es/Project/documentation"}},p={},m=[{value:"Pattern list",id:"pattern-list",level:2},{value:"Exploring patterns",id:"exploring-patterns",level:2},{value:"<code>y</code> vs <code>Y</code>",id:"y-vs-y",level:3},{value:"<code>L</code> (stand-alone) vs <code>M</code>",id:"l-stand-alone-vs-m",level:3},{value:"<code>e</code> vs <code>c</code>",id:"e-vs-c",level:3},{value:"<code>E</code> vs <code>e</code>",id:"e-vs-e",level:3},{value:"Leading zeros",id:"leading-zeros",level:3},{value:"Localized parts",id:"localized-parts",level:3},{value:"Extra letters",id:"extra-letters",level:3},{value:"Starting and ending spaces",id:"starting-and-ending-spaces",level:3},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}],u={toc:m};function s(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Throughout your 4D projects, you might need to format date and/or time values according to the specificities of the application, the platform, or the interface."),(0,n.kt)("p",null,"4D includes a comprehensive list of patterns that you can use to create and apply customized date and time formats in your applications, in addition to default formats. Customized format patterns are supported by the following features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv20R/help/command/en/page10.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"String"))," command,"),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv20R/help/command/en/page236.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"OBJECT SET FORMAT"))," and ",(0,n.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv20R/help/command/en/page894.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"OBJECT Get format"))," commands,"),(0,n.kt)("li",{parentName:"ul"},"the date and time format form object properties, available from the Property list or the ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/FormObjects/propertiesDisplay/#date-format"}),(0,n.kt)("inlineCode",{parentName:"a"},"dateFormat"))," and ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/FormObjects/propertiesDisplay/#time-format"}),(0,n.kt)("inlineCode",{parentName:"a"},"timeFormat"))," JSON properties.")),(0,n.kt)("h2",r({},{id:"pattern-list"}),"Pattern list"),(0,n.kt)("p",null,"The following table lists all supported patterns for date and time formats."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Symbol"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Significado"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Pattern"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Example Output"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"G"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"era designator"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"G, GG, or GGG"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"AD")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"GGGG"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Anno Domini")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"GGGGG"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"year"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"yy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"96")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"y or yyyy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1996")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Y"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'year of "Week of Year"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Y"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1997")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"u"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"extended year"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"u"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4601")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Q"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"quarter"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Q"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"QQ"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"02")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"QQQ"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Q2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"QQQQ"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2nd quarter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"QQQQQ"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"q"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"stand-alone quarter"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"q"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"qq"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"02")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"qqq"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Q2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"qqqq"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2nd quarter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"qqqqq"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"M"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"month in year"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"M"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MM"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MMM"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sep")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MMMM"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"September")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MMMMM"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"L"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"stand-alone month in year"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"L"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LL"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LLL"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sep")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LLLL"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"September")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LLLLL"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"S")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"w"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"week of year"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"w"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"27")))),(0,n.kt)("h2",r({},{id:"exploring-patterns"}),"Exploring patterns"),(0,n.kt)("h3",r({},{id:"y-vs-y"}),(0,n.kt)("inlineCode",{parentName:"h3"},"y")," vs ",(0,n.kt)("inlineCode",{parentName:"h3"},"Y")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"y")," is the calendar year, while ",(0,n.kt)("inlineCode",{parentName:"p"},"Y")," is the year based on the week number. For example, if the first days of January 2010 are not week #1, then y = 2010 but Y = 2009 (until the date where the 1st week of 2010 begins)."),(0,n.kt)("h3",r({},{id:"l-stand-alone-vs-m"}),(0,n.kt)("inlineCode",{parentName:"h3"},"L")," (stand-alone) vs ",(0,n.kt)("inlineCode",{parentName:"h3"},"M")),(0,n.kt)("p",null,'In some languages (Russian, Slovak), the month used alone is different from the month in a date. In "January 10, 2010", "January" is not spelled the same as in "',(0,n.kt)("em",{parentName:"p"},"rendez-vous"),' in January".'),(0,n.kt)("h3",r({},{id:"e-vs-c"}),(0,n.kt)("inlineCode",{parentName:"h3"},"e")," vs ",(0,n.kt)("inlineCode",{parentName:"h3"},"c")),(0,n.kt)("p",null,"Same remark as for ",(0,n.kt)("inlineCode",{parentName:"p"},"L")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"M"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"c"),' is for a day used alone "every tuesday") and ',(0,n.kt)("inlineCode",{parentName:"p"},"e"),' is for a day in a date ("Tuesday January 15, 1951").'),(0,n.kt)("h3",r({},{id:"e-vs-e"}),(0,n.kt)("inlineCode",{parentName:"h3"},"E")," vs ",(0,n.kt)("inlineCode",{parentName:"h3"},"e")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"e"),' is based on system settings: if the week is defined in the system as starting on a Wednesday, then Wednesday will have the numerical value "1" (or zero) whereas "E" always returns the same value (from 1 to 7 or from 0 to 6).'),(0,n.kt)("h3",r({},{id:"leading-zeros"}),"Leading zeros"),(0,n.kt)("p",null,'In general, when the number of letters in the formatting string is higher than the expected number, leading zeros are added. Ex: "yyyyyy" would give "001996".'),(0,n.kt)("h3",r({},{id:"localized-parts"}),"Localized parts"),(0,n.kt)("p",null,'Some parts of the outputs, such as "midnight" or "Tuesday" are localized, according to regional settings.'),(0,n.kt)("p",null,"For example, for the time ",(0,n.kt)("inlineCode",{parentName:"p"},"13:25:34"),', "B" will display ',(0,n.kt)("em",{parentName:"p"},"in the afternoon")," on an US system, and ",(0,n.kt)("em",{parentName:"p"},"apr\xe8s-midi")," on a French system."),(0,n.kt)("h3",r({},{id:"extra-letters"}),"Extra letters"),(0,n.kt)("p",null,'Formatting strings can contain characters not to be interpreted as formatting characters: if they are between "a" and "z" or "A" and "Z", they must be enclosed in single quotes.'),(0,n.kt)("p",null,"Por ejemplo:"),(0,n.kt)("p",null,'"15:30:00" with pattern "HH \'hours and\' mm \'minutes\'" produces "15 hours and 30 minutes".'),(0,n.kt)("h3",r({},{id:"starting-and-ending-spaces"}),"Starting and ending spaces"),(0,n.kt)("p",null,"Starting and ending spaces in patterns are automatically trimmed in outputs. If you want to add spaces before or after the resulting string, you must enclose them in single quotes."),(0,n.kt)("p",null,"Por ejemplo:"),(0,n.kt)("p",null,'" HH : mm : ss " ---\x3e "09 : 10 : 25" "\' \'HH : mm : ss\' \'" ---\x3e " 09 : 10 : 25 "'),(0,n.kt)("h2",r({},{id:"ejemplos"}),"Ejemplos"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Date or time"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Pattern"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Comentarios"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"15/06/2000"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"QQQQ"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"2nd quarter"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"localized")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"17/03/2001"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"D"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"76"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"76th day of the year")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"17/03/1954"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"w"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"11"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"11th week of the year")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"17/03/1954"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"eeee"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"Wednesday"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"localized")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"15:00:00"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"a"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"PM"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"18:00:00"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"K a"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"6 PM"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"13:30:15"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"hh:mm aa O"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"01:30 PM GMT+1"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}))))),(0,n.kt)("h2",r({},{id:"ver-tambi\xe9n"}),"Ver tambi\xe9n"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",r({parentName:"p"},{href:"https://blog.4d.com/tailored-customization-for-dates-and-times"}),"this blogpost")," for more information on the custom date and time formats."))}s.isMDXComponent=!0}}]);