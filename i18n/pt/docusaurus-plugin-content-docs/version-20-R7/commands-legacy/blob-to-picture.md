---
id: blob-to-picture
title: BLOB TO PICTURE
slug: /commands/blob-to-picture
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO PICTURE.Syntax-->**BLOB TO PICTURE** ( *imagemBlob* ; *imagem* {; *codec*} )<!-- END REF-->
<!--REF #_command_.BLOB TO PICTURE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| imagemBlob | Blob | &#8594;  | Blob que contém uma imagem |
| imagem | Picture | &#8592; | Imagem do BLOB |
| codec | Text | &#8594;  | Codec de identificação de Imagem |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BLOB TO PICTURE.Summary-->O comando BLOB TO PICTURE insere uma imagem armazenada em um BLOB em um campo ou variável imagem 4D, sem importar seu formato original.<!-- END REF-->

Este comando es similar ao comando [READ PICTURE FILE](read-picture-file.md), simplesmente se aplica a um BLOB ao invés de um arquivo. Isto permite mostrar imagens armazenadas em formato nativo nos BLOBs. Pode carregar uma imagem em um BLOB utilizando, por exemplo, o comando [DOCUMENT TO BLOB](document-to-blob.md) ou [PICTURE TO BLOB](picture-to-blob.md).

No parâmetro *imagemBlob* se passa o campo ou imagem BLOB que contém a imagem. A imagem pode estar em qualquer formato compatível nativamente por 4D ou compatível com QuickTime. Pode obter a lista de formatos disponíveis utilizando o comando [PICTURE CODEC LIST](picture-codec-list.md). Se passa o parâmetro opcional *codec*, 4D utilizará o valor neste parâmetro para decodificar o BLOB (ver o funcionamento específico do comando com este terceiro parâmetro a continuação).

Passe no parâmetro *imagem* a variável ou o campo 4D de tipo imagem o qual deve mostrar a imagem. 

**Nota:** O formato interno da imagem se conserva dentro da variável ou campo 4D. 

Depois da execução do comando, *imagem* contém a imagem a mostrar em 4D.

O parâmetro opcional *codec* lhe permite especificar o codec a utilizar para a decodificação do BLOB.

Se passar em *codec* um codec reconhecido por 4D (devolvido pelo comando [PICTURE CODEC LIST](picture-codec-list.md) ), se aplica ao BLOB e a imagem se devolve no campo ou variável imagem. 

Se passar em *codec* um codec não reconhecido por 4D, um novo codec se registra dinamicamente com o identificador passado no parâmetro. 4D devolve uma imagem que encapsula o BLOB e a variável OK toma o valor 1\. Neste caso, para recuperar o BLOB deverá utilizar o comando [PICTURE TO BLOB](picture-to-blob.md) com o mesmo identificador personalizado. Este mecanismo em particular pode ser utilizado para cumprir com duas necessidades específicas: 

* encapsulado de um BLOB (que não é uma imagem) em uma imagem,
* carrega uma imagem sem utilizar um codec.

A implementação destes mecanismos permite, mais especificamente, a criação de "arrays de BLOBs " via arrays de imagem. Esta técnica deve ser utilizada com precaução porque como os arrays são carregados completamente na memória, trabalhar com BLOBs de grande tamanho pode afetar o funcionamento da aplicação. 

**Nota**: Um BLOB criado pelo comando [VARIABLE TO BLOB](variable-to-blob.md) se administra automaticamente; não é necessário passar um codec para encapsulá-lo já que o BLOB está "assinado". Neste caso, para a operação contrária, deverá passar ".4DVarBlog" como identificador de codec ao comando [PICTURE TO BLOB](picture-to-blob.md). 

#### Variáveis e conjuntos do sistema 

Se o comando se executa corretamente, a variável sistema OK toma o valor 1\. Se a conversão falhar (QuickTime não está instalado, o BLOB não contiver uma imagem legível, parâmetro codec reconhecido mas não validado pelo BLOB , etc.), OK toma o valor 0 e o campo ou variável imagem 4D é devolvido vazio.

#### Ver também 

[PICTURE CODEC LIST](picture-codec-list.md)  
[PICTURE TO BLOB](picture-to-blob.md)  
[READ PICTURE FILE](read-picture-file.md)  