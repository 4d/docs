"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66409"],{416930:function(e,r,o){o.r(r),o.d(r,{default:()=>l,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>n});var s=JSON.parse('{"id":"FormObjects/inputOverview","title":"Entrada","description":"As entradas permitem que voc\xea adicione express\xf5es digit\xe1veis ou n\xe3o digit\xe1veis, como campos e vari\xe1veis do banco de dados aos seus formul\xe1rios. As entradas podem manipular dados baseados em caracteres (texto, datas, n\xfameros...) ou imagens:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/FormObjects/input_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/inputOverview","permalink":"/docs/pt/FormObjects/inputOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Finput_overview.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"inputOverview","title":"Entrada"},"sidebar":"docs","previous":{"title":"\xc1rea de grupo","permalink":"/docs/pt/FormObjects/groupBox"},"next":{"title":"Lista hier\xe1rquica","permalink":"/docs/pt/FormObjects/listOverview"}}'),t=o("785893"),i=o("250065");let a={id:"inputOverview",title:"Entrada"},n=void 0,d={},c=[{value:"Exemplo JSON:",id:"exemplo-json",level:3},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2},{value:"Alternativas",id:"alternativas",level:2}];function p(e){let r={a:"a",code:"code",details:"details",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["As entradas permitem que voc\xea adicione express\xf5es digit\xe1veis ou n\xe3o digit\xe1veis, como ",(0,t.jsx)(r.a,{href:"/docs/pt/Concepts/identifiers#fields",children:"campos"})," e ",(0,t.jsx)(r.a,{href:"/docs/pt/Concepts/variables",children:"vari\xe1veis"})," do banco de dados aos seus formul\xe1rios. As entradas podem manipular dados baseados em caracteres (texto, datas, n\xfameros...) ou imagens:"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:o(506481).Z+"",width:"279",height:"175"})}),"\n",(0,t.jsxs)(r.p,{children:["As entradas podem conter ",(0,t.jsx)(r.a,{href:"/docs/pt/Concepts/quick-tour#assignable-vs-non-assignable-expressions",children:"express\xf5es atribu\xedveis ou n\xe3o atribu\xedveis"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Al\xe9m disso, as entradas podem ser ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesEntry#enterable",children:"inser\xedvel ou n\xe3o inser\xedvel"}),". Uma entrada digit\xe1vel aceita dados. Pode definir controles de entrada de dados para o objecto. Uma entrada n\xe3o centraliz\xe1vel s\xf3 pode exibir valores mas n\xe3o pode ser editada pelo utilizador."]}),"\n",(0,t.jsxs)(r.p,{children:["Voc\xea pode gerenciar os dados com os ",(0,t.jsx)(r.a,{href:"/docs/pt/Concepts/methods",children:"m\xe9todos"})," objeto ou formul\xe1rio."]}),"\n",(0,t.jsx)(r.h3,{id:"exemplo-json",children:"Exemplo JSON:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'	"myText": {\n		"type": "input", //defina o tipo de objeto\n		"spellcheck": true, //ative a verifica\xe7\xe3o ortogr\xe1fica\n		"left": 60, //posi\xe7\xe3o esquerda no formul\xe1rio  \n		"top": 160, //posi\xe7\xe3o superior no formul\xe1rio \n		"width": 100, //largura do objeto\n		"height": 20 //altura do objeto\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,t.jsxs)(r.details,{children:[(0,t.jsx)(r.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Release"}),(0,t.jsx)(r.th,{children:"Mudan\xe7as"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"18 R6"}),(0,t.jsx)(r.td,{children:"Suporte da propriedade Raio de canto"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#allow-fontcolor-picker",children:"Permitir seletor de fonte/cor"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDisplay#alpha-format",children:"Formato alfa"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesEntry#auto-spellcheck",children:"Verifica\xe7\xe3o ortogr\xe1fica autom\xe1tica"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Cor de fundo"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#bold",children:"Negrito"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDisplay#text-when-falsetext-when-true",children:"Formato booleano"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Fundo"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDataSource#choice-list",children:"Lista de op\xe7\xf5es"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesEntry#context-menu",children:"Menu de contexto"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#corner-radius",children:"Raio do canto"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDisplay#date-format",children:"Formato da data"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesRangeOfValues#default-value",children:"Valor padr\xe3o"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesAction#draggable",children:"Arrast\xe1vel"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesAction#droppable",children:"Derrub\xe1vel"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesEntry#enterable",children:"Entr\xe1vel"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesEntry#entry-filter",children:"Filtro de entrada"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesRangeOfValues#excluded-list",children:"Lista de exclu\xeddos"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#expression-type",children:"Tipo de express\xe3o"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Cor de preenchimento"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#font",children:"Fonte"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#font-color",children:"Cor da fonte"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#font-size",children:"Tamanho da fonte"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Ocultar ret\xe2ngulo de foco"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#horizontal-alignment",children:"Alinhamento horizontal"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Barra de rolagem horizontal"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionamento horizontal"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#italic",children:"It\xe1lico"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#left",children:"Esquerda"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesEntry#multiline",children:"Multilinha"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#multi-style",children:"Multi-estilo"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDisplay#number-format",children:"Formato num\xe9rico"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#object-name",children:"Nome do objeto"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#orientation",children:"Orienta\xe7\xe3o"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDisplay#picture-format",children:"Formato de imagem"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesEntry#placeholder",children:"Marcador"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesPrint#print-frame",children:"Quadro de impress\xe3o"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesRangeOfValues#required-list",children:"Lista obrigat\xf3ria"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#direita",children:"Direito"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesEntry#selection-always-visible",children:"Sele\xe7\xe3o sempre vis\xedvel"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#store-with-default-style-tags",children:"Armazenar com tags de estilo padr\xe3o"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDisplay#text-when-falsetext-when-true",children:"Texto quando false/Texto quando true"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDisplay#time-format",children:"Formato de hora"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#top",children:"Topo"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#underline",children:"Sublinhado"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#variable-or-expression",children:"Vari\xe1vel ou express\xe3o"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"Barra de rolagem vertical"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dimensionamento vertical"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDisplay#visibility",children:"Visibilidade"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largura"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDisplay#wordwrap",children:"Wordwrap"})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"alternativas",children:"Alternativas"}),"\n",(0,t.jsx)(r.p,{children:"Tamb\xe9m pode representar express\xf5es de campo e vari\xe1veis nos seus formul\xe1rios utilizando objectos alternativos, mais particularmente:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Voc\xea pode exibir e inserir dados dos campos do banco de dados diretamente nas colunas das ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"List boxes do tipo de sele\xe7\xe3o"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Voc\xea pode representar um campo de lista ou vari\xe1vel diretamente em um formul\xe1rio usando objetos ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/dropdownListOverview",children:"Popup Menus/Listas suspensas"})," e ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/comboBoxOverview",children:"Combo Boxes"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Voc\xea pode representar uma express\xe3o booleana como um ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/checkboxOverview",children:"objeto de sele\xe7\xe3o"})," ou como um ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/radiobuttonOverview",children:"bot\xe3o de op\xe7\xe3o"}),"."]}),"\n"]})]})}function l(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},506481:function(e,r,o){o.d(r,{Z:function(){return s}});let s=o.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"},250065:function(e,r,o){o.d(r,{Z:function(){return n},a:function(){return a}});var s=o(667294);let t={},i=s.createContext(t);function a(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);