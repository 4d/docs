---
id: wp-picture-range
title: WP Picture range
slug: /WritePro/commands/wp-picture-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Picture range.Syntax-->**WP Picture range** ( *faixaObj* : Object ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Picture range.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| faixaObj | Object | &#8594;  | Faixa do Objeto (range) do qual pegar as imagens |
| Resultado | Object | &#8592; | Faixa de objeto contendo apenas imagens |
</div>
<!-- END REF-->

## Descrição 

<!--REF #_command_.WP Picture range.Summary-->O comando **WP Picture range** devolve uma faixa de objeto específica que se refere unicamente as imagens contidas em *faixaObj* que foi passada como parâmetro.<!-- END REF--> A gama de objetos imagem devolvida deve ser utilizado por [WP GET ATTRIBUTES](../commands/wp-get-attributes) e [WP SET ATTRIBUTES](../commands/wp-set-attributes) para manejar os atributos imagem unicamente.

Em *faixaObj*, pode passar:

* uma faixa, ou
* um elemento (tabela / fila / parágrafo / cabeçalho / rodapé / corpo/seção/subseção)

## Exemplo 

Se quiser mudar apenas a cor da borda das imagens:

```4d
 $oPicts:=WP Picture range($oSelection)
 WP SET ATTRIBUTES($oPicts;wk border color;"blue")
```

## Ver também 

*Gerenciar Imagens*  
*Utilizar os comandos do tema Texto com estilo*  
[WP Add picture](../commands/wp-add-picture)  
[WP INSERT PICTURE](../commands/wp-insert-picture)  
[WP Paragraph range](../commands/wp-paragraph-range)  
[WP Selection range](../commands/wp-selection-range)  
[WP Text range](../commands/wp-text-range)  

