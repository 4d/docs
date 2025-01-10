"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83193"],{254427:function(e,r,a){a.r(r),a.d(r,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>t,toc:()=>i,contentTitle:()=>s});var n=JSON.parse('{"id":"commands-legacy/character-code","title":"Character code","description":"Character code ( caractere ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/character-code.md","sourceDirName":"commands-legacy","slug":"/commands/character-code","permalink":"/docs/pt/commands/character-code","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcharacter-code.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"character-code","title":"Character code","slug":"/commands/character-code","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Char","permalink":"/docs/pt/commands/char"},"next":{"title":"Compare strings","permalink":"/docs/pt/commands/compare-strings"}}'),c=a("785893"),d=a("250065");let o={id:"character-code",title:"Character code",slug:"/commands/character-code",displayed_sidebar:"docs"},s=void 0,t={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"Character code"})," ( ",(0,c.jsx)(r.em,{children:"caractere"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{children:"Par\xe2metro"}),(0,c.jsx)(r.th,{children:"Tipo"}),(0,c.jsx)(r.th,{}),(0,c.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"caractere"}),(0,c.jsx)(r.td,{children:"Text"}),(0,c.jsx)(r.td,{children:"\u2192"}),(0,c.jsx)(r.td,{children:"Caractere para o qual voc\xea quer conseguir o c\xf3digo"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"Resultado"}),(0,c.jsx)(r.td,{children:"Integer"}),(0,c.jsx)(r.td,{children:"\u2190"}),(0,c.jsx)(r.td,{children:"C\xf3digo dos caracteres"})]})]})]}),"\n",(0,c.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,c.jsxs)(r.p,{children:["O comando Character code devolve o c\xf3digo Unicode UTF-16 (inclu\xeddo entre 1 e 65535) de ",(0,c.jsx)(r.em,{children:"umCaractere"}),"."]}),"\n",(0,c.jsx)(r.p,{children:"Se houver mais de um caractere na cadeia, Character code devolve unicamente o c\xf3digo do primeiro caractere."}),"\n",(0,c.jsxs)(r.p,{children:["A fun\xe7\xe3o ",(0,c.jsx)(r.a,{href:"/docs/pt/commands/char",children:"Char"})," \xe9 a contraparte de Character code Devolve o caractere designado por um c\xf3digo UTF-16."]}),"\n",(0,c.jsx)(r.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,c.jsx)(r.p,{children:"Os caracteres em mai\xfasculas e min\xfasculas s\xe3o considerados iguais dentro de uma compara\xe7\xe3o. Pode utilizar Character code para diferenciar entre os caracteres em mai\xfasculas e em min\xfasculas. Portanto, esta linha devolve True:"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-4d",children:'\xa0("A"="a")\n'})}),"\n",(0,c.jsx)(r.p,{children:"Por outro lado, esta linha devolve False:"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-4d",children:'\xa0(Character code("A")=Character code("a"))\n'})}),"\n",(0,c.jsx)(r.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,c.jsx)(r.p,{children:'Este exemplo devolve o c\xf3digo do primeiro caractere da cadeia "ABC":'}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-4d",children:'\xa0RecupCod:=Character code("ABC")\xa0// RecupCod assume o valor 65, o c\xf3digo do caractere de A\n'})}),"\n",(0,c.jsx)(r.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,c.jsx)(r.p,{children:"O exemplo abaixo testa os retornos de carro e os tabuladores:"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-4d",children:"\xa0For($vlCar;1;Length(vtText))\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(vtText[[$vlCar]]=Char(Carriage return))\n\xa0\xa0// Fazer algo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(vtText[[$vlCar]]=Char(Tab))\n\xa0\xa0// Fazer outra coisa\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0End case\n\xa0End for\n"})}),"\n",(0,c.jsx)(r.p,{children:"Quando for executado muitas vezes em textos longos, se executar\xe1 mais r\xe1pido, quando for compilado, se for escrito desta forma:"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-4d",children:"\xa0For($vlCar;1;Length(vtText))\n\xa0\xa0\xa0\xa0$vlCode:=Character code(vtText[[$vlCar]])\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlCode=Carriage return)\n\xa0\xa0// Fazer algo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlCode=Tab)\n\xa0\xa0// Fazer outra coisa\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0End case\n\xa0End for\n"})}),"\n",(0,c.jsx)(r.p,{children:"O segundo c\xf3digo \xe9 executado mais r\xe1pido por duas raz\xf5es: apenas referencia um caractere por itera\xe7\xe3o e utiliza compara\xe7\xf5es de inteiros longos ao inv\xe9s de compara\xe7\xf5es de cadeias para testar os retornos de carro e as tabula\xe7\xf5es. Utilize esta t\xe9cnica quando trabalhe com c\xf3digos comuns tais como CR e TAB."}),"\n",(0,c.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.a,{href:"/docs/pt/commands/char",children:"Char"}),(0,c.jsx)(r.br,{}),"\n",(0,c.jsx)(r.em,{children:"S\xedmbolos de refer\xeancia de caracteres"})]}),"\n",(0,c.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{}),(0,c.jsx)(r.th,{})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"N\xfamero do comando"}),(0,c.jsx)(r.td,{children:"91"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"Thread-seguro"}),(0,c.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},250065:function(e,r,a){a.d(r,{Z:function(){return s},a:function(){return o}});var n=a(667294);let c={},d=n.createContext(c);function o(e){let r=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);