---
id: set-picture-metadata
title: SET PICTURE METADATA
slug: /commands/set-picture-metadata
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE METADATA.Syntax-->**SET PICTURE METADATA** ( *imagem* ; *nomeMeta* ; *conteudoMeta* {; *nomeMeta2* ; *conteudoMeta2* ; ... ; *nomeMetaN* ; *conteudoMetaN*} )<!-- END REF-->
<!--REF #_command_.SET PICTURE METADATA.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| imagem | Picture | &#8594;  | Imagem cujos metadados você deseja estabelecer |
| nomeMeta | Text | &#8594;  | Nome ou caminho do bloco a ser estabelecido |
| conteudoMeta | Variable | &#8594;  | Conteúdo do metadado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET PICTURE METADATA.Summary-->O comando SET PICTURE METADATA permite escrever ou modificar o conteúdo dos metadados (ou meta-etiquetas) presentes em *imagem* (campo ou variável imagem 4D).<!-- END REF--> 

Os metadados são informação adicional inserida nas imagens. 4D permite manipular quatro tipos de metadados padrão: EXIF, GPS, IPTC e TIFF. 

**Nota:** para uma descrição detalhada destes tipos de metadados, pode consultar os seguintes documentos: <http://www.iptc.org/std/IIM/4.1/specification/IIMV4.1.pdf> (IPTC) e <http://exif.org/Exif2-2.PDF> (TIFF, EXIF e GPS). 

No parâmetro *nomMeta*, passe uma string especificando o tipo de metadado a escrever ou modificar. Pode passar:

* uma das constantes do tema *Picture Metadata Names*. Este tema agrupa todas as etiquetas compatíveis com 4D. Cada constante contém uma rota de etiqueta (por exemplo, "TIFF/DateTime"),
* o nome de un bloco completo de metadados ("TIFF", "EXIF", "GPS" ou "IPTC"),
* uma string vazia ("").

Passe os novos valores do metadado no parâmetro *conteúdoMeta*:

* Se passa uma constante de rota de etiqueta em *nomMeta*, passe diretamente em *conteudoMeta* o valor a escrever ou uma das constantes do tema *Picture Metadata Values*. O valor pode ser de tipo Texto, Inteiro longo, Real, Data ou Hora, de acordo com o metadado especificado. Pode utilizar um array se o metadado contiver mais de um valor. Se passa uma string, deve ser formatada em XML (padrão XMP). Pode passar uma string vazia ("") para apagar todo metadado existente.
* Se passa um nome de bloco ou uma string vazia em *nomMeta*, passe em *conteúdoMeta* a referência XML DOM do elemento que contém os metadados a escrever. No caso de uma string vazia, todos os metadados serão modificados.

**Atenção:** certos metadados estão em modo só de leitura e portanto não podem ser modificados pelo comando **SET PICTURE METADATA**, por exemplo TIFF XResolution/TIFF YResolution, EXIF Color Space ou EXIF Pixel X Dimension/EXIF Pixel Y Dimension.

Em Windows, se ocorre um erro durante a execução do comando, a variável OK toma o valor 0\. Note que em Mac OS, por razões técnicas, os erros de escritura de metadados não são detectados. Portanto este comando não modifica a variável OK em MacOS.

**Notas:** 
  
* Só certos formatos de imagens (especificamente JPEG e TIFF) suportam os metadados. Pelo contrário, os formatos tais como GIF ou BMP não aceitam os metadados. Quando converte uma imagem com metadados a um formato que não os suporta, se perde a informação.
* Em OS X versão 10.7 (Lion), um bug do framework nativo utilizado para a codificação e decodificação dos metadados pode causar erros de precisão nas coordenadas de GPS. Neste caso, se recomenda uma atualização a OS X 10.8 (Mountain Lion) ou 10.9 (Maverick).

#### Exemplo 1 

Escritura do bloqueio GPS sob uma referência DOM:

```4d
 var $domMetas : Text
 $domMetas:=DOM Parse XML source("metas.xml")
 var $gpsRef : Text
 $gpsRef:=DOM Find XML element($domMetas;"Metadatas/GPS")
 If(OK=1)
    SET PICTURE METADATA(vImage;"GPS";$refGPS)
  //$gpsRef realmente aponta ao elemento GPS
    ...
 End if
 DOM CLOSE XML($domMetas)
```

#### Exemplo 2 

Escrita do bloco GPS via uma referência DOM:

```4d
 var $domMetas : Text
 $domMetas:=DOM Parse XML source("metas.xml")
 var $gpsRef : Text
 $gpsRef:=DOM Find XML element($domMetas;"Metadatas/GPS")
 If(OK=1)
    SET PICTURE METADATA(vImage;"GPS";$refGPS)
  //$gpsRef realmente aponta ao elemento GPS
    ...
 End if
 DOM CLOSE XML($domMetas)
```

#### Nota 

Quanto todos os metadados são manipulados via uma referência de elementos DOM, as etiquetas são guardadas como atributos associados a um elemento (filho do elemento referenciado) cujo nome for o nome do bloco (TIFF, IPTC, etc.). Quando se manipula um bloco de metadados específico, as etiquetas do bloco são armazenados como atributos diretamente associados ao elemento referenciado pelo comando. 

#### Ver também 

[GET PICTURE KEYWORDS](get-picture-keywords.md)  
[GET PICTURE METADATA](get-picture-metadata.md)  
*Picture Metadata Names*  
*Picture Metadata Values*  