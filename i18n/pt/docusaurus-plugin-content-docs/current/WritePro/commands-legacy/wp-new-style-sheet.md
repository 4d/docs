---
id: wp-new-style-sheet
title: WP New style sheet
slug: /WritePro/commands/wp-new-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP New style sheet.Syntax-->**WP New style sheet** ( *wpDoc* ; *tipoFolhaEstilo* ; *nomeFolhaEstilo* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP New style sheet.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| tipoFolhaEstilo | Integer | &#8594;  | Tipo de Folha de Estilo |
| nomeFolhaEstilo | Text | &#8594;  | Nome da folha de estilo |
| Resultado | Object | &#8592; | Objeto folha estilo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP New style sheet.Summary-->O comando **WP New style sheet** cria um novo objeto de folha de estilo (vazio) para o *wpDoc* designado.<!-- END REF-->

No parâmetro *wpDoc*, passe um documento 4D Write Pro.

O parâmetro *tipoFolhaEstilo* lhe permite designar o tipo de folha de estilo, ou seja, a parte de *wpDoc* que se verá afetada pela folha de estilo. Há dois tipos disponíveis:

* wk type character: aplica atributos de estilo aos caracteres.
* wk type paragraph: aplica atributos de estilo aos parágrafos.

Passe um nome para a folha de estilo no parâmetro *nomeFolhaEstilo*. O nome da folha de estilo se armazena com o documento e facilitar o reuso e modificação de estilo. Também pode ser usado com os comandos [WP Get style sheet](wp-get-style-sheet.md) e [WP DELETE STYLE SHEET](wp-delete-style-sheet.md). O nome de folha de estilo deve seguir as regras abaixo:

* deve começar com uma letra
* pode conter caracteres alfanuméricos, espaços, e caracteres "-" ou unicode >= 128
* dever ser único no documento independente do tipo
* não pode começar com "section", que é reservado
* "\_" é substituído por um espaço e espaços no final da linha são removidos.

Pode especificar os atributos da folha de estilo utilizando o comando [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) ou a notação de objetos (consulte *Atributos 4D Write Pro*). Para ver a lista de atributos disponíveis, consulte a seção *Style sheet attributes*.

**Notas**: 

* Uma folha de estilo só modifica a visualização de um caractere ou parágrafo, não como se armazena no documento. Se uma folha de estilo for eliminada, o texto voltará ao estilo predeterminado.
* Todo atributo de estilo não definido na nova folha de estilo utilizará automaticamente o estilo Normal. Para saber mais, consulte *Comandos folha de estilo*.

#### Exemplo 

O código abaixo cria e define uma folha de estilo de parágrafo:

```4d
 var $styleSheet : Object
 $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")
 
  //define a configuração da folha de estilo
 WP SET ATTRIBUTES($styleSheet;wk font family;"Papyrus")
 WP SET ATTRIBUTES($styleSheet;wk font size;"48pt")
 WP SET ATTRIBUTES($styleSheet;wk text color;"red")
 WP SET ATTRIBUTES($styleSheet;wk text align;wk left)
 
  //Aplica a folha de estilo ao primeiro parágrafo
 var $Paragraphs : Collection
 $Paragraphs:=WP Get elements(wpArea;wk type paragraph)
 If($Paragraphs.length>0)
    WP SET ATTRIBUTES($Paragraphs[0];wk style sheet;$styleSheet)
 End if
```

#### Ver também 

*Accessar texto e atributos de imagem por programação*  
[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  