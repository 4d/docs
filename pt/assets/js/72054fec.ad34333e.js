"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21322"],{443172:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>a,toc:()=>c,contentTitle:()=>t});var o=JSON.parse('{"id":"commands-legacy/spell-set-current-dictionary","title":"SPELL SET CURRENT DICTIONARY","description":"SPELL SET CURRENT DICTIONARY ( dicion\xe1rio )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/spell-set-current-dictionary.md","sourceDirName":"commands-legacy","slug":"/commands/spell-set-current-dictionary","permalink":"/docs/pt/20-R8/commands/spell-set-current-dictionary","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-set-current-dictionary.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"spell-set-current-dictionary","title":"SPELL SET CURRENT DICTIONARY","slug":"/commands/spell-set-current-dictionary","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SPELL GET DICTIONARY LIST","permalink":"/docs/pt/20-R8/commands/spell-get-dictionary-list"},"next":{"title":"String","permalink":"/docs/pt/20-R8/commands/theme/String"}}'),r=i("785893"),s=i("250065");let d={id:"spell-set-current-dictionary",title:"SPELL SET CURRENT DICTIONARY",slug:"/commands/spell-set-current-dictionary",displayed_sidebar:"docs"},t=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SPELL SET CURRENT DICTIONARY"})," ( ",(0,r.jsx)(n.em,{children:"dicion\xe1rio"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dicion\xe1rio"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Dicion\xe1rio a ser usado para corre\xe7\xe3o ortogr\xe1fica"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando SPELL SET CURRENT DICTIONARYsubstitui o dicion\xe1rio atual pelo especificado no par\xe2metro ",(0,r.jsx)(n.em,{children:"dicionario"}),". O dicion\xe1rio atual \xe9 utilizado para a corre\xe7\xe3o ortogr\xe1fica integrada de 4D (para maior informa\xe7\xe3o, consulte o ",(0,r.jsx)(n.em,{children:"Manual de Desenho"})," de 4D), assim como tamb\xe9m de 4D Write. A modifica\xe7\xe3o do dicion\xe1rio atual repercute em todos os processos do banco para a sess\xe3o, assim como nas \xe1reas 4D Pro."]}),"\n",(0,r.jsx)(n.p,{children:"Por padr\xe3o, 4D utiliza o dicion\xe1rio:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Em Windows, o dicion\xe1rio Hunspell correspondente a linguagem da aplica\xe7\xe3o,"}),"\n",(0,r.jsx)(n.li,{children:"Em macOS, o corretor ortogr\xe1fico nativo."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": Para maior informa\xe7\xe3o sobre os dicion\xe1rios Hunspell, consulte ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," . Para saber mais, veja ",(0,r.jsx)(n.em,{children:"Configura\xe7\xe3o da corre\xe7\xe3o ortogr\xe1fica"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Pode utilizar o par\xe2metro ",(0,r.jsx)(n.em,{children:"dicionario"})," para mudar o dicion\xe1rio. Pode passar:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Um n\xfamero de identifica\xe7\xe3o de dicion\xe1rio Hunspell (devolvido pelo comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/spell-get-dictionary-list",children:"SPELL GET DICTIONARY LIST"}),"),"]}),"\n",(0,r.jsx)(n.li,{children:"Um nome de dicion\xe1rio Hunspell (que corresponde ao nome de arquivo do dicion\xe1rio Hunspell, com ou sem a extens\xe3o),"}),"\n",(0,r.jsx)(n.li,{children:'Um c\xf3digo de linguagem BCP 47, ISO 639-1 ou ISO 639-2. Por exemplo, com o c\xf3digo de linguagem BCP 47, "en-US" designa Ingl\xeas Americano e "en-GB" designa Ingl\xeas Brit\xe2nico. Estes c\xf3digos s\xe3o dirigidos internamente ao dicion\xe1rio atual correspondente (Hunspell ou nativo macOS).'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota de Compatibilidade:"}),' Em vers\xf5es anteriores de 4D, se suportaram os dicion\xe1rios "Cordial". Por compatibilidade, ainda \xe9 poss\xedvel passar um n\xfamero de dicion\xe1rio "Cordial" no par\xe2metro ',(0,r.jsx)(n.em,{children:"dicionario"}),' (valor ou constante do tema "',(0,r.jsx)(n.em,{children:"Dicion\xe1rios"}),'"). Neste caso, no entanto, o dicion\xe1rio se dirige internamente a um dicion\xe1rio Hunspell equivalente (ou o dicion\xe1rio nativo em macOS).']}),"\n",(0,r.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,r.jsxs)(n.p,{children:["Se o ",(0,r.jsx)(n.em,{children:"dicionario"})," for carregado corretamente, a vari\xe1vel sistema OK toma o valor 1; do contr\xe1rio, toma o valor 0 e devolve um erro."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:'Loading of the "fr-classic" dictionary found in the Hunspell folder:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SPELL SET CURRENT DICTIONARY("fr-classic")\n\xa0\xa0// SPELL SET CURRENT DICTIONARY ("FR-classic.dic") is valid\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/spell-checking",children:"SPELL CHECKING"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/spell-get-current-dictionary",children:"SPELL Get current dictionary"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/spell-get-dictionary-list",children:"SPELL GET DICTIONARY LIST"})]}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"904"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return d}});var o=i(667294);let r={},s=o.createContext(r);function d(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);