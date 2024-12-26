"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82062"],{611037:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>i,toc:()=>c,frontMatter:()=>t});var s=JSON.parse('{"id":"commands-legacy/web-set-http-header","title":"WEB SET HTTP HEADER","description":"WEB SET HTTP HEADER ( cabe\xe7alho|arrayCampo {; valorArray} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-set-http-header.md","sourceDirName":"commands-legacy","slug":"/commands/web-set-http-header","permalink":"/docs/pt/commands/web-set-http-header","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-set-http-header.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-set-http-header","title":"WEB SET HTTP HEADER","slug":"/commands/web-set-http-header","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SET HOME PAGE","permalink":"/docs/pt/commands/web-set-home-page"},"next":{"title":"WEB SET OPTION","permalink":"/docs/pt/commands/web-set-option"}}'),o=n("785893"),a=n("250065");let t={id:"web-set-http-header",title:"WEB SET HTTP HEADER",slug:"/commands/web-set-http-header",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",version:"version",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"WEB SET HTTP HEADER"})," ( cabe\xe7alho|arrayCampo {; ",(0,o.jsx)(r.em,{children:"valorArray"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"cabe\xe7alho|arrayCampo"}),(0,o.jsx)(r.td,{children:"Texto, Array texto"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Campo ou vari\xe1vel contendo o cabe\xe7alho HTTP requisitado ou campos cabe\xe7alho HTTP"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"valorArray"}),(0,o.jsx)(r.td,{children:"Text array"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Conte\xfado de campo de cabe\xe7alho HTTP"})]})]})]}),"\n",(0,o.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["O comando ",(0,o.jsx)(r.strong,{children:"WEB SET HTTP HEADER"})," permite definir os campos do cabe\xe7alho HTTP da resposta enviada ao navegador web por 4D. S\xf3 tem efeito em um processo web.",(0,o.jsx)(r.br,{}),"\nEste comando lhe permite administrar os \u201Ccookies\u201D."]}),"\n",(0,o.jsx)(r.p,{children:"H\xe1 duas sintaxes dispon\xedveis para este comando:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Primeira sintaxe: WEB SET HTTP HEADER (cabe\xe7alho)"}),(0,o.jsx)(r.br,{}),"\nPasse no par\xe2metro ",(0,o.jsx)(r.em,{children:"cabe\xe7alho"}),', de tipo vari\xe1vel ou campo texto, os campos do cabe\xe7alho HTTP que pretende definir. Esta sintaxe permite escrever tipos de cabe\xe7alhos tais como "HTTP/1.0 200 OK"+Char(13)+"Set-Cookie: C=HELLO". Os campos de cabe\xe7alho devem estar separados por um retorno de carro ou uma sequ\xeancia cr/lf (retorno de carro + retorno de linha), em Windows e Mac OS, 4D se encarrega do formato da resposta.']}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Este \xe9 um exemplo de uma \u201Ccookie\u201D personalizada:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'\xa0var $vTcookie : Text\n\xa0$vTcookie:="Set-Cookie: USER="+String(Abs(Random))+"; PATH=/"\n\xa0WEB SET HTTP HEADER($vTcookie)\n'})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Nota"}),": o comando n\xe3o aceitar\xe1 uma constante de tipo texto literal como par\xe2metro ",(0,o.jsx)(r.em,{children:"cabe\xe7alho"}),"; deve ser uma vari\xe1vel ou campo 4D."]}),"\n",(0,o.jsxs)(r.p,{children:["Para maior informa\xe7\xe3o sobre a sintaxe a aplicar, por favor consulte R.F.Cs (Request For Comments) que se encontra em: ",(0,o.jsx)(r.a,{href:"http://www.w3c.org/",children:"http://www.w3c.org"}),"."]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Segunda sintaxe ",(0,o.jsx)(r.strong,{children:"WEB SET HTTP HEADER"})," (arrayCampo; arrayValor)",(0,o.jsx)(r.br,{}),"\nO cabe\xe7alho HTTP foi definido atrav\xe9s de dois arrays de texto, ",(0,o.jsx)(r.em,{children:"campoArray e valorArray"}),". O cabe\xe7alho ser\xe1 escrito abaixo:"]}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'\xa0fieldArray{1}:="X-VERSION"\n\xa0fieldArray{2}:="X-STATUS"\n\xa0fieldArray{3}:="Set-Cookie"\n\xa0fieldArray{4}:="Server"\n\xa0\n\xa0valueArray{1}:="HTTP/1.0"*\n\xa0valueArray{2}:="200 OK"*\n\xa0valueArray{3}:="C=HELLO"\n\xa0valueArray{4}:="North_Carolina"\n'})}),"\n",(0,o.jsx)(r.p,{children:"* Os dois primeiros elementos s\xe3o a primeira linha da resposta. Quando s\xe3o introduzidos, deven ser os elementos 1 y 2 dos arrays. Contudo, \xe9 poss\xedvel omitir eles e escrever somente o seguinte (4D se encarregar\xe1 do formato do cabe\xe7alho):"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'\xa0fieldArray{1}:="Set-Cookie"\n\xa0valueArray{1}:="C=HELLO"\n'})}),"\n",(0,o.jsxs)(r.p,{children:["Se n\xe3o especificar um estado, automaticamente ser\xe1 HTTP/1.0 200 OK. O campo ",(0,o.jsx)(r.strong,{children:"Server"}),' \xe9 por padr\xe3o "4D/',(0,o.jsx)(r.version,{children:'".'})]}),"\n",(0,o.jsxs)(r.p,{children:["Os campos ",(0,o.jsx)(r.strong,{children:"Date"})," e ",(0,o.jsx)(r.strong,{children:"Content-Length"})," sempre s\xe3o definidos por padr\xe3o por 4D."]}),"\n",(0,o.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/docs/pt/commands/web-get-http-header",children:"WEB GET HTTP HEADER"})}),"\n",(0,o.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"N\xfamero do comando"}),(0,o.jsx)(r.td,{children:"660"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Thread-seguro"}),(0,o.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return t}});var s=n(667294);let o={},a=s.createContext(o);function t(e){let r=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);