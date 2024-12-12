---
id: form-get-vertical-resizing
title: FORM GET VERTICAL RESIZING
slug: /commands/form-get-vertical-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET VERTICAL RESIZING.Syntax-->**FORM GET VERTICAL RESIZING** ( *redimensao* {; *alturaMin* {; *alturaMax*}} )<!-- END REF-->
<!--REF #_command_.FORM GET VERTICAL RESIZING.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| redimensao | Boolean | &#8592; | True: Form can be resized vertically<br/>False: Form cannot be resized vertically |
| alturaMin | Integer | &#8592; | Smallest form height allowed (pixels) |
| alturaMax | Integer | &#8592; | Largest form height allowed (pixels) |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.FORM GET VERTICAL RESIZING.Summary-->O comando FORM GET VERTICAL RESIZING retorna as propriedades de redimensionamento vertical do formulário atual nas variáveis *redimension*, *alturaMin* e *alturaMax*.<!-- END REF--> Estas propriedades podem ser definidas para o formulário no editor de formulários em modo Desenho ou para o processo atual através do comando [FORM SET VERTICAL RESIZING](form-set-vertical-resizing.md "FORM SET VERTICAL RESIZING").

#### Ver também 

[FORM SET VERTICAL RESIZING](form-set-vertical-resizing.md)  