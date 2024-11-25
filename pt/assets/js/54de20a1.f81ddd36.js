"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51101"],{885220:function(e,r,n){n.r(r),n.d(r,{metadata:()=>o,contentTitle:()=>i,default:()=>m,assets:()=>t,toc:()=>l,frontMatter:()=>d});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-export-document","title":"WP EXPORT DOCUMENT","description":"WP EXPORT DOCUMENT ( docWP ; rotaArquivo {; formato {; opcoes}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-export-document.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-export-document","permalink":"/docs/pt/WritePro/commands/wp-export-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-export-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-export-document","title":"WP EXPORT DOCUMENT","slug":"/WritePro/commands/wp-export-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP DELETE TEXT BOX","permalink":"/docs/pt/WritePro/commands/wp-delete-text-box"},"next":{"title":"WP EXPORT VARIABLE","permalink":"/docs/pt/WritePro/commands/wp-export-variable"}}'),s=n("785893"),a=n("250065");let d={id:"wp-export-document",title:"WP EXPORT DOCUMENT",slug:"/WritePro/commands/wp-export-document",displayed_sidebar:"docs"},i=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Par\xe2metro option",id:"par\xe2metro-option",level:5},{value:"wk files collection",id:"wk-files-collection",level:5},{value:"wk factur x object",id:"wk-factur-x-object",level:5},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Exemplo 5",id:"exemplo-5",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"WP EXPORT DOCUMENT"})," ( ",(0,s.jsx)(r.em,{children:"docWP"})," ; ",(0,s.jsx)(r.em,{children:"rotaArquivo"})," {; ",(0,s.jsx)(r.em,{children:"formato"})," {; ",(0,s.jsx)(r.em,{children:"opcoes"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"docWP"}),(0,s.jsx)(r.td,{children:"Object"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Vari\xe1vel 4D Write Pro"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"rotaArquivo"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Rota do arquivo exportado"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"formato"}),(0,s.jsx)(r.td,{children:"Integer"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Formato de sa\xedda do documento"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"opcoes"}),(0,s.jsx)(r.td,{children:"Object, Integer"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Op\xe7\xf5es de exportar"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(r.p,{children:["O comando ",(0,s.jsx)(r.strong,{children:"WP EXPORT DOCUMENT"})," exporta o objeto 4D Write Pro ",(0,s.jsx)(r.em,{children:"docWP"})," em um documento no disco segundo o par\xe2metro ",(0,s.jsx)(r.em,{children:"rotaArquivo"})," assim como os par\xe2metros opcionais."]}),"\n",(0,s.jsxs)(r.p,{children:["Em ",(0,s.jsx)(r.em,{children:"docWP"}),", passe o objeto 4D Write Pro que deseja exportar."]}),"\n",(0,s.jsxs)(r.p,{children:["Em ",(0,s.jsx)(r.em,{children:"rotaArquivo"}),", passe a rota de destino e o nome do documento a exportar. Se passar s\xf3 o nome do documento, ser\xe1 guardado no mesmo n\xedvel que o arquivo de estrutura de 4D. Por padr\xe3o, se omitido o par\xe2metro ",(0,s.jsx)(r.em,{children:"formato"}),", o comando utiliza a extens\xe3o do arquivo para determinar o formato do arquivo."]}),"\n",(0,s.jsxs)(r.p,{children:["Pode omitir o par\xe2metro formato, em cujo caso dever\xe1 especificar a extens\xe3o em rotaArquivo. Tamb\xe9m pode passar uma constante do tema ",(0,s.jsx)(r.em,{children:"Constantes 4D Write Pro"})," no par\xe2metro ",(0,s.jsx)(r.em,{children:"formato"}),". Neste caso, 4D adiciona a extens\xe3o correspondente ao nome de arquivo se for necess\xe1rio. O seguinte formato \xe9 suportado:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Constante"}),(0,s.jsx)(r.th,{children:"Valor"}),(0,s.jsx)(r.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk 4wp"}),(0,s.jsx)(r.td,{children:"4"}),(0,s.jsx)(r.td,{children:"O documento 4D Write Pro \xe9 salvado em um formato de arquivo nativo (HTML zipado e imagens salvadas em uma pasta separada). Etiquetas 4D espec\xedficas s\xe3o inclu\xeddas e express\xf5es 4D n\xe3o s\xe3o computadas. Este formato \xe9 particularmente adequado para salvar e arquivar documentos 4D Write Pro em disco sem nenhuma perda."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk docx"}),(0,s.jsx)(r.td,{children:"7"}),(0,s.jsxs)(r.td,{children:["a extens\xe3o .docx de documentos 4D Write Pro \xe9 salvada no formato Microsoft Word. Compatibilidade certificada para Microsoft Word 2016 ou mais novo, Entretanto, tamb\xe9m \xe9 compat\xedvel com qualquer vers\xe3o que seja compat\xedvel com formatos .docx (por exemplo, Microsoft Word 2007). ",(0,s.jsx)(r.br,{})," ",(0,s.jsx)(r.br,{}),"As partes do documento exportadas s\xe3o: ",(0,s.jsx)(r.br,{}),"Corpo/cabe\xe7alho/rodap\xe9s/se\xe7\xf5esP\xe1gina / configura\xe7\xf5es de impress\xe3o (margens, cor de fundo/i,agem/bordas/preenchimento/tamanho de papel/orienta\xe7\xf5es)Imagens - inline, ancorada, e padr\xe3o de imagem de fundo (definido com wk background image)Vari\xe1veis compat\xedveis e express\xf5es (n\xfamero de p\xe1gina, n\xfamero total de p\xe1ginas, datas, hora, metadata). Vari\xe1veis n\xe3o compat\xedveis e express\xf5es ser\xe3o avaliadas e congeladas antes de exportar.BookmarksNote que configura\xe7\xf5es 4D Write Pro podem n\xe3o estar dispon\xedveis ou podem se comportar diferente em Microsoft Word."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk mime html"}),(0,s.jsx)(r.td,{children:"1"}),(0,s.jsxs)(r.td,{children:["O documento 4D Write Pro se guardam como MIME HTML com documentos os documentos html e as imagens embebidas como partes MIME (codificado em base 64). As express\xf5es se calculam e as etiquetas 4D espec\xedficas se eliminam. Este formato \xe9 especialmente adequado para o envio de mensagens de email HTML com o comando .",(0,s.jsx)(r.br,{})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk pdf"}),(0,s.jsx)(r.td,{children:"5"}),(0,s.jsxs)(r.td,{children:["Extens\xe3o .pdf. O documento 4D Write Pro se guarda em formato PDF, em fun\xe7\xe3o do modo de vista P\xe1gina. Os seguintes metadados s\xe3o exportados em um documento PDF: T\xedtulo Autor Assunto Criador de conte\xfado ",(0,s.jsx)(r.strong,{children:"Notas"}),": As express\xf5s se congelam automaticamente quando se exporta o documento Os links aos m\xe9todos N\xc3O s\xe3o exportados"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk svg"}),(0,s.jsx)(r.td,{children:"8"}),(0,s.jsxs)(r.td,{children:["A p\xe1gina documento 4D Write Pro \xe9 salva em formato SVG, baseado em modo vista P\xe1gina. ",(0,s.jsx)(r.strong,{children:"Nota:"})," Quando exportar a SVG, pode exportar s\xf3 uma p\xe1gina por vez. Use wk page index para especificar que p\xe1gina a exportar."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk web page complete"}),(0,s.jsx)(r.td,{children:"2"}),(0,s.jsx)(r.td,{children:"Extens\xe3o .htm ou .html. O documento se guarda como HTML estandarte e seus recursos se guardam separadamente. As etiquetas 4D espec\xedficas se eliminam e as express\xf5es se calculam. Este formato \xe9 especialmente adequado quando se quer mostrar um documento 4D Write Pro em um navegador web."})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Notas:"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:'"Etiquetas 4D espec\xedficas" significa o XHTML 4D com namespace e estilos CSS 4D.'}),"\n",(0,s.jsxs)(r.li,{children:["Para saber mais sobre o formato 4D Write Pro, veja ",(0,s.jsx)(r.em,{children:"formato de documento .4wp"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["Para ver uma lista de diferen\xe7as e incompatibilidades conhecidas quando usar o formato .docx, veja ",(0,s.jsx)(r.em,{children:"Exportar em formato .docx"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h5,{id:"par\xe2metro-option",children:"Par\xe2metro option"}),"\n",(0,s.jsx)(r.p,{children:"Passe um objeto na op\xe7\xe3o que contenha os valores para definir as propriedades de documento exportado. As propiedades abaixo est\xe3o dispon\xedveis:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Constante"}),(0,s.jsx)(r.th,{children:"Valor"}),(0,s.jsx)(r.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk embedded pictures"}),(0,s.jsx)(r.td,{children:"embeddedPictures"}),(0,s.jsxs)(r.td,{children:["Apenas SVG Export. Estabelece se as imagens s\xe3o embebidas no arquivo .svg exportado quando chamar ",(0,s.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-export-document",children:"WP EXPORT DOCUMENT"}),'. Valores dispon\xedveis: true (padr\xe3o): Imagens s\xe3o embebidas no arquivo exportado .svg false: Imagens s\xe3o exportadas em uma pasta chamada "filename_images" no n\xedvel do arquivo exportado .svg, "nomearquivo" \xe9 o nome passado para o comando para o arquivo, sem extens\xe3o . As imagens n\xe3o s\xe3o embebidas, mas referenciadas no arquivo .svg. Note que: se a pasta j\xe1 existir, \xe9 esvaziada antes que o arquivo seja exportado se n\xe3o houver imagens na p\xe1gina exportada, a pasta \xe9 apagada']})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk google fonts tag"}),(0,s.jsx)(r.td,{children:"googleFontsTag"}),(0,s.jsxs)(r.td,{children:["Apenas para exportar SVG. Estabelece a regra de importa\xe7\xe3o para fontes googles em SVG exportado. Valores poss\xedveis: false (padr\xe3o): Nenhuma regra de importa\xe7\xe3o de fontes google \xe9 adicionada. true: Adiciona a regra @import para o arquivo exportado. \xdatil se quiser usar fontes que n\xe3o estejam dispon\xedveis como padr\xe3o em Windows ou macOS. ",(0,s.jsx)(r.strong,{children:"Nota:"})," Essa propriedade \xe9 estabelecida como falsa como padr\xe3o porque, quando ativado, fontes Google sobrepujam fontes nativa, e fontes nativas s\xe3o geralmente melhor renderizadas no navegador."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk HTML pretty print"}),(0,s.jsx)(r.td,{children:"htmlPrettyPrint"}),(0,s.jsx)(r.td,{children:"C\xf3digo HTML \xe9 formatado para ser mais f\xe1cil de ler."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk max picture DPI"}),(0,s.jsx)(r.td,{children:"maxPictureDPI"}),(0,s.jsx)(r.td,{children:"Se utiliza para voltar a reajustar (reduzir) as imagens \xe0 resolu\xe7\xe3o preferida. Para imagens SVG em Windows, utilizadas para rasteriza\xe7\xe3o (transformar uma imagem vetorial em p\xedxels). Valores pr\xe9-determinados: 300 (para wk optimized for = wk print) 192 (para wk optimized for = wk screen) Valor m\xe1ximo poss\xedvel: 1440"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk optimized for"}),(0,s.jsx)(r.td,{children:"optimizedFor"}),(0,s.jsx)(r.td,{children:"Define como se otimiza um documento exportado segundo seu suporte. Valores poss\xedveis: wk print (valor predeterminado para wk pdf) As im\xe1gens mapa de bits podem ser reduzidas utilizando o DPI definido por wk max picture DPI ou 300 (valor pr\xe9-determinado) e podem ser convertirdas a PNG se o c\xf3dec n\xe3o for compat\xedvel com o tipo de exporta\xe7\xe3o. As imagens vetoriales s\xe3o convertidas a PNG utilizando o DPI definido por wk max picture DPI ou 300 (Windows unicamente) Si una imagen contiene m\xe1s de un formato, se utiliza el mejor formato para imprimir (por ejemplo, .tiff o .jpg) wk screen (valor pr\xe9-determinado para wk web page complete e wk mime html) As imagens mapa de bits podem ser reduzidas utilizando o DPI definido por wk max picture DPI ou 192 (valor predeterminado) e podem ser convertidas a JPEG (imagens opacas) ou PNG (imagenes transparentes) se o c\xf3dec n\xe3o for compat\xedvel pelo tipo de exporta\xe7\xe3o As imagens vetoriais s\xe3o convertidas a PNG utilizando o DPI definido por wk max picture DPI ou 192 (Windows unicamente) Se uma imagem cont\xe9m mais de um formato, se utiliza o formato para o processamento de tela."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk page index"}),(0,s.jsx)(r.td,{children:"pageIndex"}),(0,s.jsxs)(r.td,{children:["Apenas para SVG exporte. \xcdndice da p\xe1gina a exportar para formato svg (padr\xe3o \xe9 1). Indice p\xe1gina come\xe7a em 1 para a primeira p\xe1gina do documento. ",(0,s.jsx)(r.strong,{children:"Nota:"}),"  \xedndice da p\xe1gina \xe9 independente da numera\xe7\xe3o das p\xe1ginas."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk pdfa version"}),(0,s.jsx)(r.td,{children:"pdfaVersion"}),(0,s.jsxs)(r.td,{children:["Exporta PDF conforme a uma versi\xf3n PDF/A. Para saber mais sobre as propriedades e vers\xf5es de PDF/A, consulte a ",(0,s.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/PDF/A",children:"p\xe1gina PDF/A em Wikipedia"}),'. Valores poss\xedveis: wk pdfa2: exporta \xe0 vers\xe3o "PDF/A-2" wk pdfa3: exporta \xe0 vers\xe3o "PDF/A-3" ',(0,s.jsx)(r.strong,{children:"Nota:"}),' em macOS, wk pdfa2 pode exportar a PDF/A-2 ou PDF/A-3 ou superior, dependendo da implementaci\xf3n da plataforma. Al\xe9m disso, wk pdfa3 significa "exporta ao menos a PDF/A-3". Em Windows, o arquivo PDF de saida sempre ser\xe1 igual a conformidade desejada.']})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk recompute formulas"}),(0,s.jsx)(r.td,{children:"recomputeFormulas"}),(0,s.jsx)(r.td,{children:"Define se as f\xf3rmulas devem ser recalculadas quando forem exportadas. Valores poss\xedveis: true - Valor padr\xe3o. Todas as f\xf3rmulas s\xe3o recalculadas false- N\xe3o recalcula as f\xf3rmulas"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk visible background and anchored elements"}),(0,s.jsx)(r.td,{children:"visibleBackground"}),(0,s.jsx)(r.td,{children:"Exibe tanto as imagens de fundo quanto a cor de fundo (efeito vis\xedvel apenas nos modos de P\xe1gina e Vista Embebida). Valores Poss\xedveis: True/False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk visible empty images"}),(0,s.jsx)(r.td,{children:"visibleEmptyImages"}),(0,s.jsx)(r.td,{children:"Mostra um ret\xe2ngulo negro como padr\xe3o para as imagens que n\xe3o podem ser carregadas ou calculadas (imagens vazias ou em um formato n\xe3o compat\xedvel). Valores poss\xedveis: True/False. Valor padr\xe3o: True Se o valor for False, os elementos imagem que faltem n\xe3o s\xe3o mostrados em absoluto mesmo que tenham bordas, largura, altura ou fundo; isso pode afetar o design da p\xe1gina para as imagens inline."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk visible footers"}),(0,s.jsx)(r.td,{children:"visibleFooters"}),(0,s.jsx)(r.td,{children:"Exibe os cabe\xe7alhos (efeito vis\xedvel apenas em modo P\xe1gina). Valores poss\xedveis: True/False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk visible headers"}),(0,s.jsx)(r.td,{children:"visibleHeaders"}),(0,s.jsx)(r.td,{children:"Exibe o cabe\xe7alho (efeito vis\xedvel apenas em modo P\xe1gina). Valores poss\xedveis: True/False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"wk visible references"}),(0,s.jsx)(r.td,{children:"visibleReferences"}),(0,s.jsx)(r.td,{children:"Exibe todas as express\xf5es 4D inseridas no documento como refer\xeancia. Valores poss\xedveis: True/False"})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"A tabela abaixo indica a op\xe7\xe3o dispon\xedvel por formato de exporta\xe7\xe3o"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"wk 4wp"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"wk docx"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"wk mime html"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"wk pdf"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"wk web page html 4D"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"wk svg"})}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["wk CID host domain name",(0,s.jsx)(r.br,{})]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["wk HTML pretty print",(0,s.jsx)(r.br,{})]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(60729).Z+"",width:"512",height:"512"})," (default: false)"]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: False)"]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: False)"]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: False)"]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: false)",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.br,{})})]}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["wk max picture DPI",(0,s.jsx)(r.br,{})]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"always 300"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: 300)"]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: 300)"]}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["wk optimized for",(0,s.jsx)(r.br,{})]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"always wk print"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: wk screen)"]}),(0,s.jsx)(r.td,{children:"always wk print"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: wk print)"]}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["wk recompute formulas",(0,s.jsx)(r.br,{})]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: true)"]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: true)"]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: true)"]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: true)"]}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["wk visible background and anchored elements",(0,s.jsx)(r.br,{})]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: true)"]}),(0,s.jsx)(r.td,{children:"always true"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: true)"]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: true)"]}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["wk visible footers",(0,s.jsx)(r.br,{})]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"always true"}),(0,s.jsx)(r.td,{children:"always false"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: true)"]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: true)"]}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["wk visible headers",(0,s.jsx)(r.br,{})]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"always true"}),(0,s.jsx)(r.td,{children:"always false"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: true)"]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: true)"]}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["wk visible empty images",(0,s.jsx)(r.br,{})]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: true)"]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: true)"]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: true)"]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: true)"]}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["wk visible references",(0,s.jsx)(r.br,{})]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: false)"]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: false)"]}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["wk pdfa version",(0,s.jsx)(r.br,{})]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["wk page index",(0,s.jsx)(r.br,{})]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: 1)"]}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["wk embedded pictures",(0,s.jsx)(r.br,{})]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: true)"]}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["wk google fonts tag",(0,s.jsx)(r.br,{})]}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsx)(r.td,{children:"-"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.img,{src:n(602236).Z+"",width:"512",height:"512"})," (default: false)"]}),(0,s.jsx)(r.td,{})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Nota de compatibilidade:"})," Passar um valor ",(0,s.jsx)(r.em,{children:"longint"})," em ",(0,s.jsx)(r.em,{children:"option"})," \xe9 suportado por raz\xf5es de compatibilidade, mas \xe9 recomendado usar o parametro object."]}),"\n",(0,s.jsx)(r.h5,{id:"wk-files-collection",children:"wk files collection"}),"\n",(0,s.jsxs)(r.p,{children:["A propriedade wk files permite ",(0,s.jsx)(r.a,{href:"https://blog.4d.com/4d-write-pro-export-to-pdf-with-enclosures",children:"exportar um PDF com arquivos adjuntos"}),". Esta propriedade deve conter uma cole\xe7\xe3o de objetos que descevam os arquivos que ser\xe3o adicionados no documento final. Cada objeto da cole\xe7\xe3o pode conter as propriedades abaixo:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Propriedade"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Tipo"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"name"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsxs)(r.td,{children:["Nome de arquivo. Opcional se utilizar a propriedade ",(0,s.jsx)(r.em,{children:"file"}),', em cujo caso o nome \xe9 inferido por padr\xe3o a partir do nome do arquivo. Obrigat\xf3rio se usar a propriedade data ((exceto para o primeiro arquivo de uma exporta\xe7\xe3o Factur-X, em que o nome do arquivo \xe9 automaticamente "factur-x.xml", ver abaixo).']})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"description"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:'Opcional. Se for omitido, o valor por padr\xe3o para o primeiro arquivo de exporta\xe7\xe3o a Factur-X \xe9 "Factur-X/Factura ZUGFeRD", caso contr\xe1rio estar\xe1 vazio.'})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"mimeType"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:'Opcional. Se for omitido, o valor predeterminado pode ser adivinhado normalmente a partir da extens\xe3o do arquivo, do contr\xe1rio, se utiliza "application/octet-stream". Se for passada, tenha certeza de usar um tipo mime ISO, do contr\xe1rio o arquiivo exportado poderia n\xe3o ser v\xe1lido.'})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"data"}),(0,s.jsx)(r.td,{children:"Text o BLOB"}),(0,s.jsxs)(r.td,{children:["Obrigatorio se faltar a propriedade ",(0,s.jsx)(r.em,{children:"file"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"file"}),(0,s.jsx)(r.td,{children:"Objeto 4D.File"}),(0,s.jsxs)(r.td,{children:["Obrigatorio se faltar a propriedade ",(0,s.jsx)(r.em,{children:"data"}),", ignorado em caso contr\xe1rio."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"relationship"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:'Opcional. Se for omitido, o valor predeterminado \xe9 "Data". Valores poss\xedveis para o primeiro arquivo Factur-X:para perfis BASIC, EN 16931 ou EXTENDED: "Alternative", "Source" ou "Data" ("Alternative" s\xf3 para fatura German )para perfis MINIMUM e BASIC WL: "Data" unicamente.para outros perfis: "Alternative", "Source" ou "Data" (con restri\xe7\xf5es, talvez dependendo do pa\xeds: consulte a especifica\xe7\xe3o do perfil para obter mais informa\xe7\xe3o sobre outros perfis (por exemplo, para o perfil RECHNUNG s\xf3 se permite "Alternative")para outros arquivos (exceto o arquivo xml de fatura Factur-X): "Alternative", "Source", "Data", "Supplement" ou "Unspecified"qualquer outro valor gera um erro.'})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["Se o par\xe2metro ",(0,s.jsx)(r.em,{children:"opcion"})," tamb\xe9m contiver uma propriedade wk factur x, ent\xe3o o primeiro elemento da cole\xe7\xe3o wk files deve ser o arquivo xml de fatura Factur-X (ZUGFeRD) (ver abaixo)."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Nota:"}),' os arquivos anexos em PDF s\xf3 s\xe3o compat\xedveis com a vers\xe3o PDF/A-3. Quando passar a propriedade wk files, a vers\xe3o "PDF/A-3" se utiliza automaticamente.']}),"\n",(0,s.jsx)(r.h5,{id:"wk-factur-x-object",children:"wk factur x object"}),"\n",(0,s.jsx)(r.p,{children:"A propriedade wk factur x \xe9 um objeto que pode conter at\xe9 duas propriedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Propriedade"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Tipo"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"profile"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsxs)(r.td,{children:["Opcional. Se for omitido, o perfil \xe9 determinado a partir do arquivo xml ou texto fornecido (que deve usar um perfil padr\xe3o). Se for passado, pode ser um nome de perfil n\xe3o pasdr\xe3o (para usar outros perfis, por exemplo RECHNUNG). ",(0,s.jsxs)(r.em,{children:[(0,s.jsx)(r.em,{children:"Nota:"})," os nomes de perfil padr\xe3o s\xe3o:: MINIMUM, BASIC WL, BASIC, EN 16931 (tamb\xe9m chamado de COMFORT que \xe9 um apelido), EXTENDED."]})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"version"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:'Opcional. O valor normal \xe9 "1.0"'})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Sobre documentos PDF Factur-X / ZUGFeRD PDF"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Factur-X / ZUGFeRD"})," \xe9 um padr\xe3o europeu para faturas eletr\xf4nicas h\xedbridas (PDF para usu\xe1rios e dados XML para automatiza\xe7\xe3o de processos). Para saber mais veja ",(0,s.jsx)(r.a,{href:"https://blog.4d.com/4d-write-pro-electronic-invoice-generation",children:"esta entrada de blog"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:['Para ativar uma exporta\xe7\xe3o PDF "Factur-X", passe as propriedades wk factur x e wk files no par\xe2metro ',(0,s.jsx)(r.em,{children:"opcion"})," (ver o Exemplo 5). Neste caso:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"se gera um PDF Factur-X (ZUGFeRD),"}),"\n",(0,s.jsx)(r.li,{children:"o primeiro elemento da cole\xe7\xe3o wk files se utiliza como arquivo xml de Factur-X,"}),"\n",(0,s.jsx)(r.li,{children:"se a propriedade wk files falta ou cont\xe9m uma cole\xe7\xe3o vazia ou se seu primeiro elemento n\xe3o for um arquivo xml se gera um erro."}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Nota:"})," para ver un exemplo detalhado da implementa\xe7\xe3o da exporta\xe7\xe3o Factur-X / ZUGFeRD, pode baixar ",(0,s.jsx)(r.a,{href:"https://github.com/4d-depot/HDI%5F4DWP%5FGenerateFacturX",children:"este projeto HDI 4D"}),"."]}),"\n",(0,s.jsx)(r.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsxs)(r.p,{children:["SE quiser exportar o conte\xfado do objeto ",(0,s.jsx)(r.em,{children:"myArea"})," 4D Write Pro em formato HTML e PDF:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0// export HTML\n\xa0var $option : Object\n\xa0$option:=New object\n\xa0\n\xa0$option[wk recompute formulas]:=False\n\xa0$option[wk HTML pretty print]:=False\n\xa0$option[wk optimized for]:=wk print\n\xa0$option[wk max picture DPI]:=600\xa0//substituir o valor pr\xe9-determinado para a impress\xe3o (300 DPI)\n\xa0\n\xa0WP EXPORT DOCUMENT(myArea;$path;wk web page complete;$option)\n\xa0\n\xa0\xa0//export PDF\n\xa0var $option : Object\n\xa0$option:=New object\n\xa0\n\xa0$option[wk visible headers]:=True\n\xa0$option[wk visible footers]:=True\n\xa0$option[wk visible background]:=True\n\xa0$option[wk max picture DPI]:=96\xa0//substituir o valor pr\xe9-determinado para a tela (192 DPI) para limitar o tamanho do documento\n\xa0$option[wk optimized for]:=wk screen\n\xa0$option[wk recompute formulas]:=True\n\xa0\n\xa0WP EXPORT DOCUMENT(myArea;$path;wk pdf;$option)\n"})}),"\n",(0,s.jsx)(r.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(r.p,{children:"Se quiser exportar os conte\xfados do objeto 4D Write Pro myarea no formato .4wp:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0var $path : Text\n\xa0var $docRef : Integer\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$path:=Get 4D folder(Database folder)+"Export"+Folder separator\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$path:=Select document($path;".4wp";" title";File name entry)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($path#"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP EXPORT DOCUMENT(myArea;document;wk 4wp)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,s.jsx)(r.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsx)(r.p,{children:"Para exportar a segunda p\xe1gina do documento como SV e exportar as imagens do documento:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0var $options : Object\n\xa0\n\xa0$options:=New object\n\xa0$options[wk embedded pictures]:=False\n\xa0$options[wk page index]:=2\n\xa0\n\xa0WP EXPORT DOCUMENT(WPArea;"my exported document";wk svg;$options)\n'})}),"\n",(0,s.jsx)(r.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,s.jsx)(r.p,{children:"Exportar um documento PDF com conformidade PDF/A-2:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0var $options: Object:={}\n\xa0$options[wk visible empty images] :=False\n\xa0$options[wk pdfa version]:=wk pdfa2\xa0// conformidade "PDF/A-2"\n\xa0WP EXPORT DOCUMENT(wpDoc;"invoice.pdf";wk pdf;$options)\n'})}),"\n",(0,s.jsx)(r.h4,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,s.jsx)(r.p,{children:"Exemplos de exporta\xe7\xf5es Factur-X PDF:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0//BASIC (perfil padr\xe3o)\n\xa0var $options;$fileInfo : Object\n\xa0$options:={}\n\xa0$options[wk factur x]:={}\n\xa0$options[wk factur x].profile:="BASIC"\n\xa0$options[wk factur x].version:="1.0"\n\xa0\n\xa0$fileInfo:={}\n\xa0$fileInfo.file:=$file \xa0//$file \xe9 um arquivo 4D.File com um arquivo .xml como objetivo\n\xa0$options[wk files]:=[$fileInfo]\n\xa0\n\xa0WP EXPORT DOCUMENT(wpDoc;"facturX_basic.pdf";wk pdf;$options)\n\xa0\n\xa0\xa0//RECHNUNG profile (custom profile)\n\xa0$options:={}\n\xa0$options[wk factur x]:={}\n\xa0$options[wk factur x].profile:="RECHNUNG"\n\xa0$options[wk factur x].version:="2.1"\xa0//\xfaltima versi\xf3n para RECHNUNG\n\xa0\n\xa0$fileInfo:={}\n\xa0$fileInfo.file:=$file \xa0//$file \xe9 um 4D.File com um arquivo .xml como objetivo\n\xa0$fileInfo.name:="rechnung.xml"\xa0//nome de arquivo obrigat\xf3rio em PDF para RECHNUNG\xa0\n\xa0$fileInfo.relationship:="Alternative"\xa0//obrigat\xf3rio para Alemanha\n\xa0$fileInfo.description:="ZUGFeRD Rechnung"\n\xa0$options[wk files]:=[$fileInfo]\n\xa0\n\xa0WP EXPORT DOCUMENT(wpDoc;"facturX_rechnung.pdf";wk pdf;$options)\n'})}),"\n",(0,s.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Exportar em formato .docx"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.em,{children:"Exportar para formato SVG"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.em,{children:"Exportar para formatos HTML e MIME HTMLS"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-export-variable",children:"WP EXPORT VARIABLE"})]})]})}function m(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},602236:function(e,r,n){n.d(r,{Z:function(){return o}});let o=n.p+"assets/images/pict5058606.en-1329aa3f2e263a17b6b35ee315d23136.png"},60729:function(e,r,n){n.d(r,{Z:function(){return o}});let o=n.p+"assets/images/pict5058606.pt-1329aa3f2e263a17b6b35ee315d23136.png"},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return d}});var o=n(667294);let s={},a=o.createContext(s);function d(e){let r=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);