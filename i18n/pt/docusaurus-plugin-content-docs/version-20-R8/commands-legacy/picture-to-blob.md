---
id: picture-to-blob
title: PICTURE TO BLOB
slug: /commands/picture-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE TO BLOB.Syntax-->**PICTURE TO BLOB** ( *imagem* ; *imagemBlob* ; *codec* )<!-- END REF-->
<!--REF #_command_.PICTURE TO BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| imagem | Picture | &#8594;  | Campo ou variável tipo Imagem |
| imagemBlob | Blob | &#8592; | BLOB para receber a imagem convertida |
| codec | Text | &#8594;  | Codec de identificação de Imagem |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PICTURE TO BLOB.Summary-->O comando PICTURE TO BLOB converte uma imagem armazenada em uma variável ou em um campo 4D em outro formato e localiza a imagem resultante em um BLOB.<!-- END REF-->

Você deve passar no parâmetro *imagem* uma variável ou um campo 4D de tipo imagem e no parâmetro *ImagemBlob* a variável ou o campo BLOB o qual deve conter a imagem convertida. 

Passe no parâmetro *codec* uma cadeia indicando o formato de conversão. 

Um Codec pode ser uma extensão (por exemplo, "gif") ou um tipo Mime (por exemplo "image/jpg). Pode obter a lista de códigos disponíveis via o comando [PICTURE CODEC LIST](picture-codec-list.md).

Quando o comando tiver sido executado, *ImagemBlob* contém a imagem no formato especificado.

Se a conversão tiver êxito, a variável sistema OK toma o valor 1\. Se a conversão falha (conversor não está disponível), OK toma o valor 0 e o BLOB é gerado vazio (0 byte).

#### Exemplo 

Se quiser converter uma imagem de um formato proprietário a formato GIF e mostrá-lo em uma página web estática. Pode utilizar um código como:

```4d
 var $picture : Picture
 var $BLOB : Blob
 var $path : Text
 
 $path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+"Sunrise.psd" //encontrar a imagem na pasta Imagens da pasta Recursos
 READ PICTURE FILE($path;$picture) //por a imagem na variável imagem
 
 PICTURE TO BLOB($picture;$BLOB;".gif") //converter a imagem ao formato ".gif"
 WEB SEND BLOB($BLOB;"image/gif")
```

#### Ver também 

[BLOB TO PICTURE](blob-to-picture.md)  
[PICTURE CODEC LIST](picture-codec-list.md)  
[WRITE PICTURE FILE](write-picture-file.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 692 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


