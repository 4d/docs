---
id: advanced-programming
title: Programação avançada com Javascript
---

Uma Área 4D View Pro é um [objeto de formulário do área web](../FormObjects/webArea_overview.md) que utiliza o [motor de renderização web embutido](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine). Como tal, ele se comporta como qualquer outra área Web, e você pode fazer com que execute o código Javascript chamando o comando 4D [`WA Evaluate Javascript`](https://doc.4d.com/4dv19/help/command/en/page1029.html).

Como 4D View Pro é alimentado pela [solução de planilha eletrônica SpreadJS](https://www.grapecity.com/spreadjs/docs/versions/v14/online/overview.html), você também pode chamar os métodos Javascript SpreadJS nas áreas 4D View Pro.

## Exemplo prático: Esconder a faixa de opções

Uma vez que 4D View Pro é uma área web, você pode selecionar um elemento da página da Web e modificar seu comportamento usando Javascript. O exemplo a seguir esconde o [Ribbon](./configuring.md#ribbon) spreadJS:

```4d
//Método objeto do botão

var $js; $answer : Text

$js:="document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');"

$js+="window.dispatchEvent(new Event('resize'));"

$answer:=WA Evaluate JavaScript(*; "ViewProArea"; $js)
```

## Chamar métodos Transcriptase do SpreadJS

Você pode tocar na biblioteca SpreadJS de métodos Javascript e chamá-los diretamente para controlar suas planilhas.

4D tem um U `integrado. Espalhe a propriedade` que dá acesso ao documento da planilha (também chamado de livro de trabalho) dentro da área 4D View Pro, tornando mais simples chamar os métodos SpreadJS [Workbook](https://www.grapecity.com/spreadjs/docs/latest/online/SpreadJS~GC.Spread.Sheets.Workbook.html).

#### Exemplo

O código seguinte anula a última ação na folha de cálculo:

```4d
WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")
```

## Repositório 4D View Pro Tips

[4D-View-Pro-Tips](https://github.com/4d-depot/4D-View-Pro-Tips) é um repositório GitHub que contém um projeto cheio de funções úteis, permitindo gerenciar imagens flutuantes, ordenar colunas ou linhas, criar uma cultura personalizada, e muito mais! Sinta-se à vontade para o clonar e experimentar com o projeto. 
