"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35148"],{535833:function(e,o,s){s.r(o),s.d(o,{default:()=>m,frontMatter:()=>a,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/listbox-set-row-color","title":"LISTBOX SET ROW COLOR","description":"LISTBOX SET ROW COLOR ( { ;} objeto ; fila ; cor {; tipoCor*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-set-row-color.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-row-color","permalink":"/docs/pt/commands/listbox-set-row-color","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-row-color.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-row-color","title":"LISTBOX SET ROW COLOR","slug":"/commands/listbox-set-row-color","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET PROPERTY","permalink":"/docs/pt/commands/listbox-set-property"},"next":{"title":"LISTBOX SET ROW FONT STYLE","permalink":"/docs/pt/commands/listbox-set-row-font-style"}}'),r=s("785893"),d=s("250065");let a={id:"listbox-set-row-color",title:"LISTBOX SET ROW COLOR",slug:"/commands/listbox-set-row-color",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"LISTBOX SET ROW COLOR"})," ( {* ;} ",(0,r.jsx)(o.em,{children:"objeto"})," ; ",(0,r.jsx)(o.em,{children:"fila"})," ; ",(0,r.jsx)(o.em,{children:"cor"})," {; ",(0,r.jsx)(o.em,{children:"tipoCor"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"*"}),(0,r.jsx)(o.td,{children:"Operador"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"objeto"}),(0,r.jsx)(o.td,{children:"any"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsxs)(o.td,{children:["Nome de objeto (se * for especificado) ou",(0,r.jsx)(o.br,{}),"Vari\xe1vel (se * for omitido)"]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"fila"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Numero de fila"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"cor"}),(0,r.jsx)(o.td,{children:"Text, Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Valor de cor RGB"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"tipoCor"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Cor de fonte do Listbox (por padr\xe3o) ou cor de fundo do Listbox"})]})]})]}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," Este comando s\xf3 funciona com listboxes de tipo array."]}),"\n",(0,r.jsxs)(o.p,{children:["O comando ",(0,r.jsx)(o.strong,{children:"LISTBOX SET ROW COLOR"})," define a cor de uma fila ou uma c\xe9lula no listbox de tipo array designado pelos par\xe2metros ",(0,r.jsx)(o.em,{children:"objeto"})," e ",(0,r.jsx)(o.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Se passar o par\xe2metro opcional ",(0,r.jsx)(o.em,{children:"*"})," indica que o par\xe2metro ",(0,r.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,r.jsx)(o.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de vari\xe1vel no lugar de uma cadeia."]}),"\n",(0,r.jsxs)(o.p,{children:["Pode designar um listbox ou uma coluna do listbox no par\xe2metro ",(0,r.jsx)(o.em,{children:"objeto"}),":"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Quando o ",(0,r.jsx)(o.em,{children:"objeto"})," designa um listbox, o comando se aplica a fila."]}),"\n",(0,r.jsxs)(o.li,{children:["Quando o ",(0,r.jsx)(o.em,{children:"objeto"})," designa uma coluna do listbox, o comando se aplica a c\xe9lula localizada na interse\xe7\xe3o de coluna/fila."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Em ",(0,r.jsx)(o.em,{children:"fila"}),", passe o n\xfamero da fila na que deseja aplicar a nova cor."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," O comando n\xe3o leva em conta nenhum estado oculto/vis\xedvel das filas do listbox."]}),"\n",(0,r.jsxs)(o.p,{children:["Em ",(0,r.jsx)(o.em,{children:"cor"}),", passe um valor de cor RGB. Para obter mais informa\xe7\xe3o sobre as cores RGB, consulte a descri\xe7\xe3o do comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"}),". Se deseja que a fila herde o conjunto de cores para o n\xedvel mais alto, voc\xea pode passar a constante lk inherited no par\xe2metro ",(0,r.jsx)(o.em,{children:"cor"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["No par\xe2metro ",(0,r.jsx)(o.em,{children:"tipoCor"}),", passe as constantes lk background color ou lk font color para indicar se deseja aplicar a cor para o fundo ou para a cor de fonte da fila. Se omitir este par\xe2metro, a cor se aplica para a cor de fonte."]}),"\n",(0,r.jsxs)(o.p,{children:["Este comando modifica os valores que se encontram no array de cores que podem ter sido definido para a coluna do listbox. Se estes acertos n\xe3o est\xe3o definidos, o comando cria de forma din\xe2mica arrays que podem acessar mediante o comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/listbox-get-array",children:"LISTBOX Get array"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Se os valores de cor em conflito se definem usando as propriedades para os listboxes ou colunas do listbox, se aplica uma ordem de prioridade. Para obter mais informa\xe7\xe3o, consulte o manual de ",(0,r.jsx)(o.em,{children:"Desenho"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(o.p,{children:"Em um array de tipo list box, queremos estabelecer as cores de uma fila e para uma c\xe9lula desta fila:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// Defini\xe7\xe3o de cor de fonte para c\xe9lula\n\xa0LISTBOX SET ROW COLOR(*;"Col5";3;"yellow")\n\xa0\n\xa0\xa0// Defini\xe7\xe3o de fundo e cor de fonte para a fila 3\n\xa0LISTBOX SET ROW COLOR(*;"ListBox";3;"red";lk background color)\n\xa0LISTBOX SET ROW COLOR(*;"ListBox";3;"blue")\n'})}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{src:s(564445).Z+"",width:"363",height:"122"})}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.em,{children:"List box"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/commands/listbox-get-row-color",children:"LISTBOX Get row color"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/commands/listbox-get-row-color-as-number",children:"LISTBOX Get row color as number"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/commands/listbox-set-row-font-style",children:"LISTBOX SET ROW FONT STYLE"})]}),"\n",(0,r.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero do comando"}),(0,r.jsx)(o.td,{children:"1270"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Thread-seguro"}),(0,r.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},564445:function(e,o,s){s.d(o,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWsAAAB6CAIAAAD22eWlAAAFsklEQVR42u3dMW7bVhzA4cfCJykSowh8AuYE1hBk8RWoNYfIAZTRPkKMAgEK0EPRqahPEHSIvGXIkMVbo6FQSUpWLDpyxWdZjzS+L4QiKgzwqxD8IT1Lr9n19fXvf/z54pefA0BHB4vfDg8PU5d0M5/PsyxLXaG5jzTv03KCHBwcpC7p5vz8/OTkJHWF5j7SvAez2ezr16/V3PgpdQkwYCYIEM8EAeKZIEA8EwSI15ogF+Ps5burLf9up4sfj2bNmpPxGgR4gOvr6/Nff5s3itWjRVmfTyf59/P6JJ9M68fLIuR53rp4v96/f69Zs+ZUzd++ffv8+fOXL1/WJsiia1G4dr8smnvVI1Xp4rZ1cbJnXLNmzfu3miCbP4p69eljuDx7nr1ZDrnXIRyflh+ybFS1Hyd5vfS/NGvWvF/3f5i96jztSejWNGvWvD+bV1KfHR6Fs7dr67wX41GoXkGF0fgidbdmzZp7YX0dpH5fVWuv4lSPTFarOKv1nLWLk71v1KxZc19WUgfj9jM+FJo1P5nm1QTxeRAgngkCxDNBgHgmCBAvu252Wp7/+0/qEmAwXr16tdjlcPmJsmHt0RgGuK+kZs1PqXk2my3ueBcDxDNBgHgmCBDPBAHimSBAPPukatasOZ7XIMAD2CdVs2bNXdknVbNmzfHsk9obmjUPudk+qX2gWfNQm+2TmppmzYNutk+qZs2au7JPqmbNPTK4ZvukAjtgggDxTBAgngkCxLNPKtDZap/Um5/FhDCso167Tt2guZ+H5j0cfhYD7IAJAsQzQYB4JggQzwQB4rUmSDEO03fb/t1OFz8ezZo3m4eQP87Fj2Vgz7PXIMAD3P48SPH9x71F89skX56WZcgnYZ6HvDkvQ5jm7YvT/Pxcs+ZNzfP5zVE2p/mtR6rTaZhPmjtFc791sef53uPOt/uXf1AUYTr5wf2y6a4eqf4zFretC9L9K9GseWNzMxHyO/eLm9kxv3XbutjzfO+xzSfKXnwMz96EeVYfx5fhKISz0xBGob7p67ZrmjVvsFjg+Kv5519lHjan4+Z0nLptowE8z/evg1yUIZsvj7PUqVvSrHmz7OYYpS7ZVt+f53smyN9H4fjt2tp0UQ3rsp7YZV/2aNSseUuXze1k/cHTZpqcpm7baAjPc+ubdTerSK1VnOqYrFZxptWvMJm2L072Xlez5k3N9bLoD1dSy1srqZPmfutiz/O9x6aV1MEcg/suo2bNT6nZd3OBHTBBgHgmCBDPBAHi2ScV6Gy1T+ry/7x9cnKSOqmb8/NzzZo1pzKbzRZ3vIsB4pkgQDwTBIhnggDxTBAgXmuCXIyzl++utvy7nS5+PJo1a07GaxDgAZbfzW0Uq0eLsj6fTvLv5/VJPpnWj5dFyPO8dfF+1d9l1KxZc6LmO9/uX6q7FoVr98uiuVc9UpUublsXJ3vGNWvWvH+rCXKw8cXJ1aeP4fLsefZmOeReh3B8Wn7IslHV3pM9GjVr1pzWwb1/WnWe9iR0a5o1a96fzSupzw6PwtnbtXXei/EoVK+gwmjclz0aNWvWnNb6Okj9vqrWXsWpHpmsVnFW6zlrFyd736hZs+a+rKQOxu1nfCg0a34yzfZJBXbABAHimSBAPBMEiGefVKAz+6Rq1twjg2u2TyqwAyYIEM8EAeKZIEA8EwSIZ59UzZo1x/MaBHgA+6Rq1qy5K/ukatasOZ59UntDs+YhN9sntQ80ax5qs31SU9OsedDN9knVrFlzV/ZJ1ay5RwbXbJ9UYAdMECCeCQLEM0GAePZJBTqzT6pmzT0yuGb7pAI7YIIA8UwQIJ4JAsQzQYB49knVrFlzPK9BgAewT6pmzZq7sk+qZs2a49kntTc0ax5ys31S+0Cz5qE22yc1Nc2aB91sn1TNmjV3ZZ9UzZp7ZHDN9kkFdsAEAeKZIEA8EwSIZ59UoLPVPqn/AZ9P6u3sGJB2AAAAAElFTkSuQmCC"},250065:function(e,o,s){s.d(o,{Z:function(){return t},a:function(){return a}});var n=s(667294);let r={},d=n.createContext(r);function a(e){let o=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(d.Provider,{value:o},e.children)}}}]);