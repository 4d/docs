---
id: set-picture-file-name
title: SET PICTURE FILE NAME
slug: /commands/set-picture-file-name
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE FILE NAME.Syntax-->**SET PICTURE FILE NAME** ( *imagem* ; *nomArquivo* )<!-- END REF-->
<!--REF #_command_.SET PICTURE FILE NAME.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| imagem | Picture, Picture | &#8594;  | Imagem para à qual definir o nome por padrão |
| nomArquivo | Text | &#8594;  | Nome da imagem por padrão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET PICTURE FILE NAME.Summary-->O comando **SET PICTURE FILE NAME** define ou modifica o nome do arquivo por defeito da imagem passada como parâmetro.<!-- END REF-->  
  
Este nome pode ser definido automaticamente a partir do nome de origem do arquivo imagem importado no campo ou variável imagem ou durante uma chamada previa a **SET PICTURE FILE NAME**.  
  
O nome por defeito se utiliza como nome de arquivo quando a imagem se exporta em um arquivo disco. Caso o conteúdo do campo seja copiado em uma variável ou em outro campo, o nome por defeito também será copiado. Para maior informação, consulte o Manual de *Desenho*.

#### Ver também 

[Get picture file name](get-picture-file-name.md)  
[WRITE PICTURE FILE](write-picture-file.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1172 |
| Thread-seguro | &check; |


