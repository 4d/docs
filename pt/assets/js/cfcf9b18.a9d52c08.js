"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7511"],{238775:function(e,n,a){a.r(n),a.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>t,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"ViewPro/commands/vp-set-frozen-panes","title":"VP SET FROZEN PANES","description":"VP SET FROZEN PANES ( vpAreaName Object { ; sheet : Integer } )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-set-frozen-panes.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-frozen-panes","permalink":"/docs/pt/ViewPro/commands/vp-set-frozen-panes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-frozen-panes.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-frozen-panes","title":"VP SET FROZEN PANES"},"sidebar":"docs","previous":{"title":"VP SET FORMULAS","permalink":"/docs/pt/ViewPro/commands/vp-set-formulas"},"next":{"title":"VP SET NUM VALUE","permalink":"/docs/pt/ViewPro/commands/vp-set-num-value"}}'),r=a("785893"),o=a("250065");let i={id:"vp-set-frozen-panes",title:"VP SET FROZEN PANES"},d=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET FROZEN PANES"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"paneObj"})," : Object { ; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paneObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objeto que cont\xe9m as informa\xe7\xf5es sobre as colunas e linhas congeladas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP SET FROZEN PANES"})," command sets the frozen status of the columns and rows in the ",(0,r.jsx)(n.em,{children:"paneObj"})," so they are always displayed in the ",(0,r.jsx)(n.em,{children:"vpAreaName"}),". Colunas congeladas e linhas s\xe3o fixas no lugar e n\xe3o se movem quando o resto do documento for rolado. Uma linha s\xf3lida \xe9 exibida para indicar que as colunas e linhas est\xe3o congeladas. O local da linha depende de onde a coluna congelada ou a linha est\xe1 na folha:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Columns on the left or right"}),": For columns on the left of the sheet, the line is displayed on the right side of the last frozen column. Para colunas no lado direito da folha, a linha \xe9 exibida no lado esquerdo da primeira coluna congelada."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Linhas na parte superior ou inferior"}),": para linhas na parte superior da planilha, a linha \xe9 exibida abaixo da \xfaltima linha congelada. Para linhas na parte inferior da folha, a linha \xe9 exibida acima da primeira linha congelada."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,r.jsxs)(n.p,{children:["You can pass an object defining the columns and rows to freeze in the ",(0,r.jsx)(n.em,{children:"paneObj"})," parameter. Definindo o valor de qualquer uma das colunas ou das propriedades da linha igual a zero resets (descongelados) a propriedade. Se uma propriedade for definida para menos de zero, o comando n\xe3o far\xe1 nada. Pode passar:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"columnCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"O n\xfamero de colunas congeladas \xe0 esquerda da folha"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"trailingColumnCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"O n\xfamero de colunas congeladas \xe0 direita da folha"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rowCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"O n\xfamero de linhas congeladas na parte superior da folha"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"trailingRowCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"O n\xfamero de linhas congeladas na parte inferior da folha"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"sheet"}),", pode designar uma folha espec\xedfica onde o intervalo ser\xe1 definido (a contagem come\xe7a em 0). Se omitido, a planilha atual ser\xe1 utilizada por padr\xe3o. Voc\xea pode selecionar explicitamente a planilha atual com a seguinte constante:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Voc\xea deseja congelar as tr\xeas primeiras colunas \xe0 esquerda, duas colunas \xe0 direita e a primeira linha:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'C_OBJECT($panes)\n \n$panes:=New object\n$panes.columnCount:=3\n$panes.trailingColumnCount:=2\n$panes.rowCount:=1\n \nVP SET FROZEN PANES("ViewProArea";$panes)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:a(646993).Z+"",width:"897",height:"234"})}),"\n",(0,r.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-frozen-panes",children:"VP Get frozen panes"})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},646993:function(e,n,a){a.d(n,{Z:function(){return s}});let s=a.p+"assets/images/cmd_vpSetFrozenPanes-96df239cfd6abd118d629eff64976791.PNG"},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return i}});var s=a(667294);let r={},o=s.createContext(r);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);