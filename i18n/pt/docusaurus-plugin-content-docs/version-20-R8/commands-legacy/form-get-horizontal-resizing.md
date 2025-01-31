---
id: form-get-horizontal-resizing
title: FORM GET HORIZONTAL RESIZING
slug: /commands/form-get-horizontal-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Syntax-->**FORM GET HORIZONTAL RESIZING** ( *resize* {; *larguraMin* {; *larguraMax*}} )<!-- END REF-->
<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| resize | Boolean | &#8592; | True: Form can be resized horizontally<br/>False: Form cannot be resized horizontally |
| larguraMin | Integer | &#8592; | Smallest form width allowed (pixels) |
| larguraMax | Integer | &#8592; | Largest form width allowed (pixels) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Summary-->O comando FORM GET HORIZONTAL RESIZING retorna as propriedades de redimensionamento horizontal do formulário atual nas variáveis *redimension*, *larguraMin* e *larguraMax*.<!-- END REF--> Estas propriedades podem ser definidas para o formulário no editor de formulários em modo Desenho ou para o proceso atual através do comando [FORM SET HORIZONTAL RESIZING](form-set-horizontal-resizing.md "FORM SET HORIZONTAL RESIZING").

#### Ver também 

[FORM SET HORIZONTAL RESIZING](form-set-horizontal-resizing.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1077 |
| Thread-seguro | &cross; |


