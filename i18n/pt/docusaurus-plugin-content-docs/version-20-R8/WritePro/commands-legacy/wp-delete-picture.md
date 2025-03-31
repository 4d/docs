---
id: wp-delete-picture
title: WP DELETE PICTURE
slug: /WritePro/commands/wp-delete-picture
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE PICTURE.Syntax-->**WP DELETE PICTURE**  ( *imgObj* )<!-- END REF-->
<!--REF #_command_.WP DELETE PICTURE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| imgObj | Object | &#8594;  | Objeto imagem (tipo inline ou ancorada) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP DELETE PICTURE.Summary-->O comando **WP DELETE PICTURE**  apaga a imagem definida pelo parâmetro *imgObj*.<!-- END REF-->

Se nenhuma imagem existir, o comando não faz nada.

#### Exemplo 

Para apagar uma imagem usando sua ID:

```4d
 var $myPicture : Object
 
  // obter imagem 
 $myPicture:=WP Get element by ID(myDoc;"Logo")
 
  // Apagar a imagem
 WP DELETE PICTURE($myPicture)
```

#### Ver também 

*Gerenciar Imagens*  
[WP Add picture](../commands/wp-add-picture.md)  