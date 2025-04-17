"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32772"],{169717:function(e,s,t){t.r(s),t.d(s,{default:()=>p,frontMatter:()=>a,metadata:()=>o,assets:()=>i,toc:()=>l,contentTitle:()=>d});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-is-font-style-supported","title":"WP Is font style supported","description":"WP Is font style supported  ( faixaObj ; wpEstiloFonte ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-is-font-style-supported.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-is-font-style-supported","permalink":"/docs/pt/20-R8/WritePro/commands/wp-is-font-style-supported","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-is-font-style-supported.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-is-font-style-supported","title":"WP Is font style supported","slug":"/WritePro/commands/wp-is-font-style-supported","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Insert table","permalink":"/docs/pt/20-R8/WritePro/commands/wp-insert-table"},"next":{"title":"WP New","permalink":"/docs/pt/20-R8/WritePro/commands/wp-new"}}'),n=t("785893"),r=t("250065");let a={id:"wp-is-font-style-supported",title:"WP Is font style supported",slug:"/WritePro/commands/wp-is-font-style-supported",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2}];function c(e){let s={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"WP Is font style supported"}),"  ( ",(0,n.jsx)(s.em,{children:"faixaObj"})," ; ",(0,n.jsx)(s.em,{children:"wpEstiloFonte"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Par\xe2metro"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"faixaObj"}),(0,n.jsx)(s.td,{children:"Object"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Faixa do Objeto parse"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wpEstiloFonte"}),(0,n.jsx)(s.td,{children:"Integer"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Constante de Estilo de Fonte wk font negrito wk font it\xe1lico wk texto subscrito, wk texto estilo linha atravessada"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Resultado"}),(0,n.jsx)(s.td,{children:"Boolean"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"True se qualquer parte de faixaObj suporta wpEstiloFonte, se n\xe3o False"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(s.p,{children:["O novo comando ",(0,n.jsx)(s.strong,{children:"WP Is font style supported"}),"  devolve True se o estilo ",(0,n.jsx)(s.em,{children:"estiloFonteWP"})," for suportado por alguma parte do texto em ",(0,n.jsx)(s.em,{children:"faixaObj"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Em ",(0,n.jsx)(s.em,{children:"ObjAlvo"}),", pode passar:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"uma faixa ou"}),"\n",(0,n.jsx)(s.li,{children:"um elemento (tabela / fila / par\xe1grafo / imagem inline / corpo / cabe\xe7alho / rodap\xe9)"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Em ",(0,n.jsx)(s.em,{children:"estiloFonteWP"}),', passe uma das seguintes constantes de estilo do tema de constantes "4D Write Pro":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Constante"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{children:"Valor"}),(0,n.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk font bold"}),(0,n.jsx)(s.td,{children:"Cadeia"}),(0,n.jsx)(s.td,{children:"fontBold"}),(0,n.jsxs)(s.td,{children:["Especifica a grossura do texto (depende dos estilos de fonte dispon\xedveis). Valores poss\xedveis:wk true para passar os caracteres selecionados em negrito; com o comando ",(0,n.jsx)(s.a,{href:"/docs/pt/20-R8/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),", wk true se devolve se ao menos um caractere selecionado suportar o estilo de fonte negrito.wk false (pr\xe9-determinado) para eliminar o estilo de fonte negrito dos caracteres selecionados se houver; com o comando ",(0,n.jsx)(s.a,{href:"/docs/pt/20-R8/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),", wk false \xe9 retornado sem nenhum dos caracteres selecionados suporta o estilo de fonte negrito."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk font italic"}),(0,n.jsx)(s.td,{children:"Cadeia"}),(0,n.jsx)(s.td,{children:"fontItalic"}),(0,n.jsxs)(s.td,{children:["Define o estilo it\xe1lico do texto (depende dos estilos de fonte dispon\xedveis). Valores poss\xedveis:wk true para passar a estilo it\xe1lica ou estilo obliquo os caracteres selecionados; com o comando",(0,n.jsx)(s.a,{href:"/docs/pt/20-R8/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),", wk true se devolve se ao menos um caractere selecionado suportar o estilo de fonte it\xe1lica ou obliqua.wk false (pr\xe9-determinado) para eliminar o estilo it\xe1lica ou oblicua dos caracteres selecionados se houver; com o comando ",(0,n.jsx)(s.a,{href:"/docs/pt/20-R8/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),", wk false se devolve se nenhum dos caracteres selecionados suportar o estilo de fonte it\xe1lico ou obl\xedquo."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk text linethrough style"}),(0,n.jsx)(s.td,{children:"Cadeia"}),(0,n.jsx)(s.td,{children:"textLinethroughStyle"}),(0,n.jsxs)(s.td,{children:["Define estilo de texto riscado (se houver). Valores poss\xedveis:",(0,n.jsx)(s.br,{}),"wk none (pr\xe9-determinado): sem efeito riscadowk solid: desenha uma linha s\xf3lida atravessando o texto selecionadowk dotted: desenha uma linha pontilhada atravessando o texto selecionadowk dashed:desenha uma linha tracejada atravessando o texto selecionadowk double: desenha uma linha dupla atravessando o texto selecionadowk semi transparent: linha semi transparente no texto selecionado. Pode ser combinado com outro estilo de linhawk word: desenha uma linha apenas em palavras (exclui espa\xe7os em branco). Pode ser combinado com outro estilo de linha."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk text underline style"}),(0,n.jsx)(s.td,{children:"Cadeia"}),(0,n.jsx)(s.td,{children:"textUnderlineStyle"}),(0,n.jsxs)(s.td,{children:["Define o estilo de sublinha (se houver). Valores poss\xedveis:",(0,n.jsx)(s.br,{}),"wk none (pr\xe9-determinado) sem sublinhawk solid: desenha uma sublinha s\xf3lidawk dotted: desenha uma sublinha pontilhadawk dashed: desenha uma sublinha tracejadawk double: desenha uma sublinha duplawk semi transparent: sublinha semi transparente. Pode ser combinada com outro estilo de linha.wk word: desenha uma sublinha para palavras apenas (exclui espa\xe7os em branco). Pode ser combinado com outro estilo de linha."]})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"Em geral, este comando se oferece para permitir aos desenvolvedores implementar objetos de interface personalizada, como un menu pop-up que oferece op\xe7\xf5es de estilo baseadas no texto selecionado."})]})}function p(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return d},a:function(){return a}});var o=t(667294);let n={},r=o.createContext(n);function a(e){let s=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);