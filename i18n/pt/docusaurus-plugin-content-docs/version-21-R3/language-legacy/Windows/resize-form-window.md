---
id: resize-form-window
title: RESIZE FORM WINDOW
slug: /commands/resize-form-window
displayed_sidebar: docs
---

<!--REF #_command_.RESIZE FORM WINDOW.Syntax-->**RESIZE FORM WINDOW** ( *largura* : Integer ; *altura* : Integer )<!-- END REF-->
<!--REF #_command_.RESIZE FORM WINDOW.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| largura | Integer | &#8594; | Pixels a adicionar ou remover da largura da janela do formulário atual |
| altura | Integer | &#8594; | Pixels a adicionar ou remover da altura da janela do formulário atual |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|2004|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.RESIZE FORM WINDOW.Summary-->O comando RESIZE FORM WINDOW permite modificar o tamanho da janela do formulário atual.<!-- END REF-->  

Passe o número de píxels que desejar adicionar ao tamanho da janela atual nos parâmetros *largura e altura*. Passe 0 no parâmetro que não queira modificar. Para reduzir o tamanho, passe um valor negativo nos parâmetros largura e altura.  
  
Este comando produce exactamente o mesmo resultado que um redimensionamento manual utilizando a casilla de redimensionamento (se o tipo de janela lo permite). Por conseguinte, o comando considera as propriedades de redimensionamento dos objetos e as limitações de tamanho definidas nas propriedades do formulário. Se, por exemplo, o comando redimensiona a janela a um tamanho superior ao máximo do formulário, o comando não tem efeito.  
  
Por favor note que este comportamento é diferente do comportamento do comando [SET WINDOW RECT](../commands/set-window-rect), o qual não considera as propriedades do formulário nem seu conteúdo quando redimensionar a janela. Igualmente, note que este comando não necessariamente modifica o tamanho do formulário. Para modificar o tamanho de um formulário por programação, por favor consulte a descrição do comando [FORM SET SIZE](../commands/form-set-size)

## Exemplo 

Dada a janela abaixo (os campos e o marco tem a propriedade de dimensionamento horizontal “Aumentar”): 

![](../../assets/en/commands/pict39548.en.png)

Depois da execução desta linha:

```4d
 RESIZE FORM WINDOW(25;0)
```

... a janela aparece assim:

![](../../assets/en/commands/pict39549.en.png)

## Ver também 

[FORM GET PROPERTIES](../commands/form-get-properties)  
[FORM SET SIZE](../commands/form-set-size)  
[SET WINDOW RECT](../commands/set-window-rect)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 890 |
| Thread-seguro | no |


