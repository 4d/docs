"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["661"],{552008:function(e,n,d){d.r(n),d.d(n,{metadata:()=>o,contentTitle:()=>i,default:()=>a,assets:()=>c,toc:()=>l,frontMatter:()=>t});var o=JSON.parse('{"id":"Events/overview","title":"Vis\xe3o Geral","description":"Eventos de formul\xe1rio s\xe3o eventos que podem levar \xe0 execu\xe7\xe3o do m\xe9todo de formul\xe1rio e/ou m\xe9todo(s) de objeto de formul\xe1rio. Os eventos de formul\xe1rio permitem que voc\xea controle o fluxo do aplicativo e escreva c\xf3digos que s\xe3o executados somente quando ocorre um evento espec\xedfico.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Events/overview.md","sourceDirName":"Events","slug":"/Events/overview","permalink":"/docs/pt/19/Events/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2Foverview.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"overview","title":"Vis\xe3o Geral"},"sidebar":"docs","previous":{"title":"\xc1rea Web","permalink":"/docs/pt/19/FormObjects/propertiesWebArea"},"next":{"title":"On Activate","permalink":"/docs/pt/19/Events/onActivate"}}'),s=d("785893"),r=d("250065");let t={id:"overview",title:"Vis\xe3o Geral"},i=void 0,c={},l=[{value:"Objecto evento",id:"objecto-evento",level:2},{value:"Eventos e m\xe9todos",id:"eventos-e-m\xe9todos",level:2},{value:"Tabela de chamadas",id:"tabela-de-chamadas",level:2}];function j(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Eventos de formul\xe1rio s\xe3o eventos que podem levar \xe0 execu\xe7\xe3o do m\xe9todo de formul\xe1rio e/ou m\xe9todo(s) de objeto de formul\xe1rio. Os eventos de formul\xe1rio permitem que voc\xea controle o fluxo do aplicativo e escreva c\xf3digos que s\xe3o executados somente quando ocorre um evento espec\xedfico."}),"\n",(0,s.jsxs)(n.p,{children:["Em seu c\xf3digo, voc\xea controla os eventos usando o comando ",(0,s.jsx)(n.code,{children:"FORM Event"}),", que retorna o evento acionado. Por exemplo:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"//c\xf3digo de um bot\xe3o\nIf(FORM Event.code=On Clicked) \n// fa\xe7a algo quando o bot\xe3o for clicado\nEnd if\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Cada formul\xe1rio e cada objeto ativo no formul\xe1rio podem ouvir um conjunto predefinido de eventos, mas somente os eventos que voc\xea ativou no n\xedvel do formul\xe1rio e/ou em cada n\xedvel de objeto ocorrer\xe3o de fato."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"objecto-evento",children:"Objecto evento"}),"\n",(0,s.jsxs)(n.p,{children:["Cada evento \xe9 retornado como um objeto pelo comando ",(0,s.jsx)(n.code,{children:"FORM Event"}),". Por padr\xe3o, ele cont\xe9m as seguintes propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propriedade"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Nome do objeto que aciona o evento - N\xe3o inclu\xeddo se o evento for acionado pelo formul\xe1rio"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Form event code|"}),' |description|text|Nome do evento do formul\xe1rio (por exemplo, "On After Edit")|.']}),"\n",(0,s.jsx)(n.p,{children:"Propriedades adicionais s\xe3o retornadas quando o evento ocorre em objetos espec\xedficos. Em particular:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/19/FormObjects/listboxOverview#supported-form-events",children:"caixas de listagem"})," e ",(0,s.jsx)(n.a,{href:"/docs/pt/19/FormObjects/listboxOverview#supported-form-events-1",children:"colunas de caixa de listagem"})," retornam ",(0,s.jsx)(n.a,{href:"/docs/pt/19/FormObjects/listboxOverview#additional-properties",children:"propriedades adicionais"}),", como ",(0,s.jsx)(n.code,{children:"columnName"})," ou ",(0,s.jsx)(n.code,{children:"isRowSelected"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/19/FormObjects/viewProAreaOverview",children:"As \xe1reas do 4D View Pro"})," retornam, por exemplo, ",(0,s.jsx)(n.code,{children:"sheetName"})," ou propriedades ",(0,s.jsx)(n.code,{children:"de a\xe7\xe3o"})," no objeto de evento ",(0,s.jsx)(n.a,{href:"/docs/pt/19/Events/onAfterEdit",children:"On After Edit"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"eventos-e-m\xe9todos",children:"Eventos e m\xe9todos"}),"\n",(0,s.jsx)(n.p,{children:"Quando um evento formul\xe1rio ocorre, 4D executa as seguintes a\xe7\xf5es:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Primeiro, ele pesquisa os objetos do formul\xe1rio e chama o m\xe9todo de objeto para qualquer objeto (envolvido no evento) cuja propriedade de evento de objeto correspondente tenha sido selecionada."}),"\n",(0,s.jsx)(n.li,{children:"Em segundo lugar, ele chama o m\xe9todo de formul\xe1rio se a propriedade de evento de formul\xe1rio correspondente tiver sido selecionada."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"N\xe3o presuma que os m\xe9todos do objeto, se houver, ser\xe3o chamados em uma ordem espec\xedfica. A regra geral \xe9 que os m\xe9todos de objeto sejam sempre chamados antes do m\xe9todo de formul\xe1rio. Se um objeto for um subformul\xe1rio, os m\xe9todos de objeto do formul\xe1rio de lista do subformul\xe1rio ser\xe3o chamados e, em seguida, o m\xe9todo de formul\xe1rio do formul\xe1rio de lista ser\xe1 chamado. 4D ent\xe3o continua a chamar os m\xe9todos objeto do formul\xe1rio pai. Em outras palavras, quando um objeto \xe9 um subformul\xe1rio, 4D usa a mesma regra pr\xe1tica para o objeto e os m\xe9todos do formul\xe1rio dentro do objeto do subformul\xe1rio."}),"\n",(0,s.jsxs)(n.p,{children:["Com exce\xe7\xe3o dos eventos ",(0,s.jsx)(n.a,{href:"/docs/pt/19/Events/onLoad",children:"On Load"})," e ",(0,s.jsx)(n.a,{href:"/docs/pt/19/Events/onUnload",children:"On Unload"})," (veja abaixo), se a propriedade de evento de formul\xe1rio n\xe3o estiver selecionada para um determinado evento, isso n\xe3o impedir\xe1 chamadas a m\xe9todos de objeto para os objetos cuja mesma propriedade de evento esteja selecionada. Em outras palavras, ativar ou desativar um evento no n\xedvel do formul\xe1rio n\xe3o tem efeito sobre as propriedades do evento do objeto."]}),"\n",(0,s.jsx)(n.p,{children:"O n\xfamero de objetos envolvidos em um evento depende da natureza do evento."}),"\n",(0,s.jsx)(n.h2,{id:"tabela-de-chamadas",children:"Tabela de chamadas"}),"\n",(0,s.jsx)(n.p,{children:"A tabela seguinte resume a forma como os m\xe9todos objeto e formul\xe1rio s\xe3o chamados para cada tipo de evento:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Evento"}),(0,s.jsx)(n.th,{children:"M\xe9todos objecto"}),(0,s.jsx)(n.th,{children:"M\xe9todo formul\xe1rio"}),(0,s.jsx)(n.th,{children:"Que objectos"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Load"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Todos os objectos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Unload"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Todos os objectos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Validate"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Todos os objectos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Clicked"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Double Clicked"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Before Keystroke"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On After Keystroke"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On After Edit"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Getting Focus"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Losing Focus"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Activate"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Nenhum"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Deactivate"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Nenhum"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Outside Call"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Nenhum"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Page Change"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Nenhum"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Begin Drag Over"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Drop"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Drag Over"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Mouse Enter"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Todos os objectos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Mouse Move"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Todos os objectos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Mouse Leave"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Todos os objectos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Mouse Up"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Menu Selected"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Nenhum"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Bound variable change"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Nenhum"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Data Change"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Plug in Area"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Header"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Todos os objectos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Printing Detail"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Todos os objectos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Printing Break"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Todos os objectos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Printing Footer"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Todos os objectos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Close Box"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Nenhum"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Display Detail"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Todos os objectos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Open Detail"}),(0,s.jsx)(n.td,{children:"Sim (List box)"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Nenhum, excepto List boxes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Close Detail"}),(0,s.jsx)(n.td,{children:"Sim (List box)"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Nenhum, excepto List boxes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Resize"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Nenhum"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Selection Change"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Load Record"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Nenhum"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Timer"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Nenhum"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Scroll"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Before Data Entry"}),(0,s.jsx)(n.td,{children:"Sim (List box)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Column Moved"}),(0,s.jsx)(n.td,{children:"Sim (List box)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Row Moved"}),(0,s.jsx)(n.td,{children:"Sim (List box)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Column Resize"}),(0,s.jsx)(n.td,{children:"Sim (List box e Area 4D View Pro)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Header Click"}),(0,s.jsx)(n.td,{children:"Sim (List box e Area 4D View Pro)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Footer Click"}),(0,s.jsx)(n.td,{children:"Sim (List box)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On After Sort"}),(0,s.jsx)(n.td,{children:"Sim (List box)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Long Click"}),(0,s.jsx)(n.td,{children:"Sim (Bot\xe3o)"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Alternative Click"}),(0,s.jsx)(n.td,{children:"Sim (bot\xe3o e List box)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Expand"}),(0,s.jsx)(n.td,{children:"Sim (Hier. lista e list box)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Collapse"}),(0,s.jsx)(n.td,{children:"Sim (Hier. lista e list box)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Delete Action"}),(0,s.jsx)(n.td,{children:"Sim (Hier. lista e list box)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On URL Resource Loading"}),(0,s.jsx)(n.td,{children:"Sim (\xc1rea Web)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Begin URL Loading"}),(0,s.jsx)(n.td,{children:"Sim (\xc1rea Web)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On URL Loading Error"}),(0,s.jsx)(n.td,{children:"Sim (\xc1rea Web)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On URL Filtering"}),(0,s.jsx)(n.td,{children:"Sim (\xc1rea Web)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On End URL Loading"}),(0,s.jsx)(n.td,{children:"Sim (\xc1rea Web)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Open External Link"}),(0,s.jsx)(n.td,{children:"Sim (\xc1rea Web)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Window Opening Denied"}),(0,s.jsx)(n.td,{children:"Sim (\xc1rea Web)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On VP Range Changed"}),(0,s.jsx)(n.td,{children:"Sim (\xc1rea 4D View Pro)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On VP Ready"}),(0,s.jsx)(n.td,{children:"Sim (\xc1rea 4D View Pro)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Row Resize"}),(0,s.jsx)(n.td,{children:"Sim (\xc1rea 4D View Pro)"}),(0,s.jsx)(n.td,{children:"Nunca"}),(0,s.jsx)(n.td,{children:"Apenas objecto envolvido"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Lembre-se sempre de que, para qualquer evento, o m\xe9todo de um formul\xe1rio ou de um objeto \xe9 chamado se a propriedade de evento correspondente estiver selecionada para o formul\xe1rio ou para os objetos. A vantagem de desativar os eventos no ambiente Design (usando a Lista de propriedades do editor de formul\xe1rios) \xe9 que voc\xea pode reduzir o n\xfamero de chamadas para m\xe9todos e, portanto, otimizar significativamente a velocidade de execu\xe7\xe3o dos formul\xe1rios."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["AVISO: Os eventos ",(0,s.jsx)(n.a,{href:"/docs/pt/19/Events/onLoad",children:"On Load"})," e ",(0,s.jsx)(n.a,{href:"/docs/pt/19/Events/onUnload",children:"On Unload"})," s\xe3o gerados para objetos se estiverem ativados tanto para os objetos quanto para o formul\xe1rio ao qual os objetos pertencem. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level."]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return i},a:function(){return t}});var o=d(667294);let s={},r=o.createContext(s);function t(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);