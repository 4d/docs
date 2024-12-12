---
id: get-picture-file-name
title: Get picture file name
slug: /commands/get-picture-file-name
displayed_sidebar: docs
---

<!--REF #_command_.Get picture file name.Syntax-->**Get picture file name** ( *imagem* ) : Text<!-- END REF-->
<!--REF #_command_.Get picture file name.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| imagem | Picture, Picture | &#8594;  | Imagem para a qual obter o nome por defeito |
| Resultado | Text | &#8592; | Nome por defeito do arquivo imagem |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get picture file name.Summary-->O comando **Get picture file name** retorna o nome atual por defeito como padrão da imagem passada como parâmetro.<!-- END REF-->

O nome padrão é usado durante a exportação da imagem em um arquivo de disco. Você pode definir automaticamente com base no nome original do arquivo de imagem importada para o campo ou variável de imagens, ou usando o comando [SET PICTURE FILE NAME](set-picture-file-name.md). Para maior informação, consulte o manual de *Desenho*. 

Se a imagem nao tiver um nome por defeito, o comando devolve uma cadeia vazia.

#### Ver também 

[SET PICTURE FILE NAME](set-picture-file-name.md)  