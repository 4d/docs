---
id: wp-picture-range
title: WP Picture range
slug: /WritePro/commands/wp-picture-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Picture range.Syntax-->**WP Picture range** ( *faixaObj* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Picture range.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| faixaObj | Object | &#8594;  | Faixa do Objeto (range) do qual pegar as imagens |
| Resultado | Object | &#8592; | Faixa de objeto contendo apenas imagens |

<!-- END REF-->

#### Compatibilidade 

<!--REF #_command_.WP Picture range.Summary-->**WP Picture range** era chamado **WP Get pictures** em versões anteriores de 4D Write Pro.<!-- END REF--> Foi renomeado para ter mais claridade.. 

#### Descrição 

O novo comando **WP Picture range** devolve uma faixa de objeto específica que se refere unicamente as imagens contidas em *faixaObj*   
que foi passada como parâmetro. A gama de objetos imagem devolvida deve ser utilizado por [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) e [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) para manejar os atributos imagem unicamente.

Em *faixaObj*, pode passar:

* uma faixa, ou
* um elemento (tabela / fila / parágrafo / cabeçalho / rodapé / corpo/seção/subseção)

#### Exemplo 

Se quiser mudar apenas a cor da borda das imagens:

```4d
 $oPicts:=WP Picture range($oSelection)
 WP SET ATTRIBUTES($oPicts;wk border color;"blue")
```

#### Ver também 

*Gerenciar Imagens*  
*Utilizar os comandos do tema Texto com estilo*  
[WP Add picture](../commands/wp-add-picture.md)  
[WP INSERT PICTURE](../commands/wp-insert-picture.md)  
[WP Paragraph range](wp-paragraph-range.md)  
[WP Selection range](wp-selection-range.md)  
[WP Text range](wp-text-range.md)  