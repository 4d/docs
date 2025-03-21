"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45759"],{463956:function(e,o,n){n.r(o),n.d(o,{default:()=>u,frontMatter:()=>t,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/object-get-corner-radius","title":"OBJECT Get corner radius","description":"OBJECT Get corner radius ( { ;} objeto* ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-get-corner-radius.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-corner-radius","permalink":"/docs/pt/commands/object-get-corner-radius","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-corner-radius.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-corner-radius","title":"OBJECT Get corner radius","slug":"/commands/object-get-corner-radius","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET COORDINATES","permalink":"/docs/pt/commands/object-get-coordinates"},"next":{"title":"OBJECT Get data source","permalink":"/docs/pt/commands/object-get-data-source"}}'),s=n("785893"),d=n("250065");let t={id:"object-get-corner-radius",title:"OBJECT Get corner radius",slug:"/commands/object-get-corner-radius",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"OBJECT Get corner radius"})," ( {* ;} ",(0,s.jsx)(o.em,{children:"objeto"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 uma vari\xe1vel ou um campo"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"objeto"}),(0,s.jsx)(o.td,{children:"any"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome de objeto (se especificado *) ou Campo ou vari\xe1vel (se omitido *)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Resultado"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"R\xe1dio de esquinas arredondadas (em p\xedxels)"})]})]})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"OBJECT Get corner radius"})," devolve o valor atual do r\xe1dio da esquina para o objeto ret\xe2ngulo arredondado cujo nome se passar no par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"}),". Este valor pode ter sido definido a n\xedvel do formul\xe1rio utilizando a lista de propriedades (ver ",(0,s.jsx)(o.em,{children:"R\xe1dio da esquina (ret\xe2ngulos)"}),"), ou para o processo atual com o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/object-set-corner-radius",children:"OBJECT SET CORNER RADIUS"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"O comando OBJECT Get corner radius pode ser utilizardo com os seguintes objetos de formul\xe1rio:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"ret\xe2ngulos"}),"\n",(0,s.jsx)(o.li,{children:"entradas (s\xf3 projetos 4D)"}),"\n",(0,s.jsx)(o.li,{children:"\xe1reas de texto (s\xf3 projetos 4D)"}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Ao passar o par\xe2metro opcional ",(0,s.jsx)(o.em,{children:"*"})," indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de campo ou vari\xe1vel em vez de uma cadeia (campo ou vari\xe1vel objeto unicamente)."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," na vers\xe3o atual de 4D, este comando s\xf3 se aplica aos ret\xe2ngulos arredondados (que s\xe3o objetos est\xe1ticos). Como resultado, s\xf3 a sintaxe baseada no nome de objeto (usando o par\xe2metro ",(0,s.jsx)(o.em,{children:"*"}),") \xe9 compat\xedvel."]}),"\n",(0,s.jsx)(o.p,{children:"Este comando devolve o r\xe1dio de esquinas arredondadas em p\xedxels. Por padr\xe3o, este valor \xe9 de 5 p\xedxels."}),"\n",(0,s.jsx)(o.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(o.p,{children:"O seguinte c\xf3digo pode ser adicionado a um m\xe9todo button:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0var $radius : Integer\n\xa0$radius:=OBJECT Get corner radius(*;"GreenRect")\xa0//obt\xe9m o valor atual\n\xa0OBJECT SET CORNER RADIUS(*;"GreenRect";$radius+1)\xa0//aumenta o r\xe1dio\n\xa0\xa0// O valor m\xe1ximo ser\xe1 gerenciado automaticamente: quando se alcance, button\n\xa0\xa0// n\xe3o far\xe1 nada\n'})}),"\n",(0,s.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/commands/object-set-corner-radius",children:"OBJECT SET CORNER RADIUS"})}),"\n",(0,s.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"1324"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return a},a:function(){return t}});var r=n(667294);let s={},d=r.createContext(s);function t(e){let o=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(d.Provider,{value:o},e.children)}}}]);