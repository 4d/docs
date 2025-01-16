"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54080"],{842413:function(e,n,o){o.r(n),o.d(n,{default:()=>s,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/load-4d-view-document","title":"Load 4D View document","description":"Load 4D View document ( 4DViewDocumento ) : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/load-4d-view-document.md","sourceDirName":"commands-legacy","slug":"/commands/load-4d-view-document","permalink":"/docs/pt/20-R7/commands/load-4d-view-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-4d-view-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"load-4d-view-document","title":"Load 4D View document","slug":"/commands/load-4d-view-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LAUNCH EXTERNAL PROCESS","permalink":"/docs/pt/20-R7/commands/launch-external-process"},"next":{"title":"MOBILE APP REFRESH SESSIONS","permalink":"/docs/pt/20-R7/commands/mobile-app-refresh-sessions"}}'),t=o("785893"),a=o("250065");let l={id:"load-4d-view-document",title:"Load 4D View document",slug:"/commands/load-4d-view-document",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Propriedades",id:"propriedades",level:4}];function V(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Load 4D View document"})," ( ",(0,t.jsx)(n.em,{children:"4DViewDocumento"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4DViewDocumento"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Documento 4D View"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Representa\xe7\xe3o de objeto no documento 4D View"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"Load 4D View document"})," permite converter um documento 4D View \xe9 um objeto 4D."]}),"\n",(0,t.jsx)(n.p,{children:"Nem uma licen\xe7a v\xe1lida 4D View, nem uma inst\xe2ncia do plug-in 4D View herdado em seu ambiente s\xe3o necess\xe1rios para este comando."}),"\n",(0,t.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,t.jsx)(n.em,{children:"4DViewDocument"})," uma vari\xe1vel BLOB ou campo que contenha o documento 4D View a converter. O comando retorna um ",(0,t.jsx)(n.a,{href:"#",title:"Estruturas de dados como objetos 4D nativos",children:"objeto"})," 4D que descreve toda a informa\xe7\xe3o armazenada originalmente no documento 4D View, incluindo:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"estrutura do documento (n\xfamero de filas e colunas), tipo e informa\xe7\xe3o (vers\xe3o, t\xedtulo...)"}),"\n",(0,t.jsx)(n.li,{children:"atributos de c\xe9lula (tipo de c\xe9lula, valor, f\xf3rmula, nome, estilo, seguran\xe7a...)"}),"\n",(0,t.jsx)(n.li,{children:"atributos de coluna (largura, estilo, tipo, seguran\xe7a, visibilidade, ruptura...)"}),"\n",(0,t.jsx)(n.li,{children:"atributos de fila (altura, estilo, tipo, seguran\xe7a, visibilidade, ruptura...)"}),"\n",(0,t.jsx)(n.li,{children:"estilos, bordas e pain\xe9is"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Utilizando este comando, pode recuperar toda informa\xe7\xe3o armazenada em seus documentos 4D View e manej\xe1-los em um formato aberto."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": se necessitar converter documentos de 4D View a 4D View Pro, se recomenda utilizar o comando dedicado  que realiza uma convers\xe3o direta e transparente."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Se quiser carregar e converter um documento 4D View armazenado no disco:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $blob : Blob\n\xa0var $object : Object\n\xa0DOCUMENT TO BLOB("document.4PV";$blob)\n\xa0$object:=Load 4D View document($blob)\n\xa0ALERT("Document title is "+$object.title)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Por exemplo, se converter o documento abaixo:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(151687).Z+"",width:"398",height:"204"})}),"\n",(0,t.jsx)(n.p,{children:"Obter\xe1 o resultado abaixo (objeto stringified):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "version": 9,\n\xa0\xa0\xa0 "title": "4D View test",\n\xa0\xa0\xa0 "subject": "",\n\xa0\xa0\xa0 "author": "",\n\xa0\xa0\xa0 "company": "",\n\xa0\xa0\xa0 "note": "",\n\xa0\xa0\xa0 "creationDate": "2017-06-13",\n\xa0\xa0\xa0 "creationTime": 63230,\n\xa0\xa0\xa0 "modificationDate": "2017-06-13",\n\xa0\xa0\xa0 "modificationTime": 63295,\n\xa0\xa0\xa0 "columnCount": 2048,\n\xa0\xa0\xa0 "rowCount": 65535,\n\xa0\xa0\xa0 "columnHeaderHeight": 380,\n\xa0\xa0\xa0 "rowHeaderWidth": 1180,\n\xa0\xa0\xa0 "columnWidth": 2160,\n\xa0\xa0\xa0 "rowHeight": 320,\n\xa0\xa0\xa0 "noExternalCall": false,\n\xa0\xa0\xa0 "columns": [],\n\xa0\xa0\xa0 "rows": [],\n\xa0\xa0\xa0 "cells": [\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "kind": "value",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "value": "hello world",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "valueType": "string",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "column": 1,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "row": 1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "kind": "value",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "value": 42,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "valueType": "real",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "column": 1,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "row": 3\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "kind": "value",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "value": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "valueType": "bool",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "column": 1,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "row": 4\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 ],\n\xa0\xa0\xa0 "cellNames": [],\n\xa0\xa0\xa0 "customFormats": [],\n\xa0\xa0\xa0 "rowEdges": [\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "style": 13,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "color": 15597568,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "left": 2,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "top": 6,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "right": 3,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "bottom": 6\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "style": 13,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "color": 15597568,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "left": 2,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "top": 11,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "right": 3,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "bottom": 11\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 ],\n\xa0\xa0\xa0 "columnEdges": [\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "style": 13,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "color": 15597568,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "left": 2,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "top": 6,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "right": 2,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "bottom": 10\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "style": 13,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "color": 15597568,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "left": 4,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "top": 6,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "right": 4,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "bottom": 10\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 ],\n\xa0\xa0\xa0 "defaultStyle": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "locked": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "hidden": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "gridHidden": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "spellCheck": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "pictHeights": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "inputFilter": 0,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "backColorEven": 16777215,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "backColorOdd": 16777215,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "fontID": 2,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "fontSize": 11,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "fontBold": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "fontItalic": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "fontUnderline": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "fontOutline": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "fontShadow": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "fontCondensed": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "fontExtended": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "normalColorEven": 0,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "normalColorOdd": 0,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "zeroColorEven": 255,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "zeroColorOdd": 255,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "minusColorEven": 16711680,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "minusColorOdd": 16711680,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "hAlign": 0,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "vAlign": 0,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "rotation": 0,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "wordWrap": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "forceTextFormat": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "numericFormat": 0,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "stringFormat": 0,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "booleanFormat": 0,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "dateTimeFormat": 0,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "pictureFormat": 0\n\xa0\xa0\xa0 },\n\xa0\xa0\xa0 "exportRanges": [],\n\xa0\xa0\xa0 "fontNames": [\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "id": 2,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "name": "Lucida Grande" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 ],\n\xa0\xa0\xa0 "inputFilters": [],\n\xa0\xa0\xa0 "pictures": [\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "column": 3,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "row": 3,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "width": 920,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "height": 1000,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "drawingMode": 5,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "behind": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "fixedSize": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "locked": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "hOffset": 0,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "vOffset": 0,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "picture": "[object Picture]" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," para mais informa\xe7\xe3o sobre o formato do ",(0,t.jsx)(n.a,{href:"#",title:"Estruturas de dados como objetos 4D nativos",children:"objeto"}),", devolvido, contacte os servi\xe7os t\xe9cnicos de 4D."]}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"1528"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function s(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(V,{...e})}):V(e)}},151687:function(e,n,o){o.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return l}});var r=o(667294);let t={},a=r.createContext(t);function l(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);