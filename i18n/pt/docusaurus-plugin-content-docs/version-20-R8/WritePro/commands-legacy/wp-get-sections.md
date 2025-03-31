---
id: wp-get-sections
title: WP Get sections
slug: /WritePro/commands/wp-get-sections
displayed_sidebar: docs
---

<!--REF #_command_.WP Get sections.Syntax-->**WP Get sections** ( *alvoObj* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get sections.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| alvoObj | Object | &#8594;  | Range ou documento 4D Write Pro |
| Resultado | Collection | &#8592; | Coleção de todas as seções (principais) encontrados em alvoObj |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Get sections.Summary-->O comando **WP Get sections** devolve uma coleção de todas as seções definidas no parâmetro *targetObj*.<!-- END REF-->

No parâmetro *targetObj*, pode passar:

* um range, ou
* um elemento (tabela/ linha/ parágrafo/ corpo / cabeçalho / rodapé /caixa de texto / imagem) ou
* um documento 4D Write Pro

Si el rango o elemento pertenece a un encabezado o pie de página, **WP Get sections** devuelve la sección a la que está anclado el encabezado o pie de página.

Para caixas de texto e imagens ancoradas, **WP Get sections** devolve: 

* uma coleção que contém uma única seção se o elemento estiver ancorado a uma seção,
* uma coleção com todas as seções se o elemento estiver ancorado a todas as seções,
* uma coleção vazia se o elemento estiver ancorado à vista aninhada ou a um número de página.

Para saber mais sobre os objetos de seção, consulte o comando *Gerenciar cabeçalhos, rodapés e seções*

#### Exemplo 

Se quiser mudar um atributo para a última seção da área 4D Write Pro:

```4d
 var $colSections : Collection
 $colSections:=WP Get sections(wpDoc)
 WP SET ATTRIBUTES($colSections[$colSections.length-1];wk column count;3)
```

#### Ver também 

[WP Get section](wp-get-section.md)  