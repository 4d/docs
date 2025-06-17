---
id: wp-delete-subsection
title: WP DELETE SUBSECTION
slug: /WritePro/commands/wp-delete-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE SUBSECTION.Syntax-->**WP DELETE SUBSECTION** ( *wpSection* ; *subSectionType* )<br/>**WP DELETE SUBSECTION** ( *subSection* )<!-- END REF-->

<!--REF #_command_.WP DELETE SUBSECTION.Params-->

| Parâmetro      | Tipo    |                             | Descrição                                                                          |
| -------------- | ------- | --------------------------- | ---------------------------------------------------------------------------------- |
| wpSection      | Object  | &#8594; | Seção 4D Write Pro                                                                 |
| subSectionType | Integer | &#8594; | Tipo de subseção (wk first page, wk left page ou wk right page) |
| subSection     | Object  | &#8594; | Subseção 4D Write Pro                                                              |

<!-- END REF-->

## Descrição

The **WP DELETE SUBSECTION** command <!--REF #_command_.WP DELETE SUBSECTION.Summary-->removes the *subSectionType* subsection elements from the *wpSection* 4D Write Pro section, or it directly removes the passed *subSection*<!-- END REF-->. Subsection elements include headers, footers, columns, anchored pictures, etc. Note that the body of the document is left untouched.

Na *wpSection*, passe a seção da qual você deseja remover os elementos da subseção. The section can be obtained using the [WP Get sections](../commands-legacy/wp-get-sections.md) or [WP Get section](../commands-legacy/wp-get-section.md) commands.

O parâmetro *subSectionType* especifica a subseção a ser excluída. You can pass one of the following constants:

| Parâmetros    | Tipo    | Valor |
| ------------- | ------- | ----- |
| wk first page | Integer | 1     |
| wk left page  | Integer | 2     |
| wk right page | Integer | 3     |

:::note

Deleting a left page or right page subsection will automatically delete the opposite subsection. For example, if you delete a right page subsection, the left page subsection is automatically deleted.

:::

If the *subSectionType* does not exist, the command does nothing (no error is generated).

:::note

When a subsection is deleted, the header and footer are removed, as well as anchored pictures and textboxes but the body remains untouched.

:::

## Exemplo 1

You want to delete the first page subsection of the first section:

```4d
 var $section;$subsection : Object
  // obter a primeira seção
 $section:=WP Get section(wpDoc;1)
  // Excluir a subseção
 WP DELETE SUBSECTION($section;wk first page)
```

## Exemplo 2

You want to delete the right page subsection of section 3:

```4d

$subSection:=WP Get subsection(WP Get section($document;3);wk right page)
 WP DELETE SUBSECTION($subSection)
 
```

## Veja também

[WP Get subsection](../commands-legacy/wp-get-subsection.md)\
[WP New subsection](../commands-legacy/wp-new-subsection.md)