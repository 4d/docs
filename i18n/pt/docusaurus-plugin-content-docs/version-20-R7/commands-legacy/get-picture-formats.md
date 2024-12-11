---
id: get-picture-formats
title: GET PICTURE FORMATS
slug: /commands/get-picture-formats
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE FORMATS.Syntax-->**GET PICTURE FORMATS** ( *imagem* ; *codecID* )<!-- END REF-->
<!--REF #_command_.GET PICTURE FORMATS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| imagem | Picture | &#8594;  | Imagem a analisar |
| codecID | Text array | &#8592; | ID de codec de imagem |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET PICTURE FORMATS.Summary-->**Tema:** Imagens

O comando **GET PICTURE FORMATS** devolve um array de todos os IDs codec contidos na *imagem* passada como parâmetro.<!-- END REF-->

No parâmetro *imagem*, se passa uma variável imagem cujos formatos deseja que sejam devolvidos no array *codecIDs*. 

Os identificadores codec devolvidos são definidos por 4D exatamente da mesma maneira que para o comando **PICTURE CODEC LIST**[PICTURE CODEC LIST](picture-codec-list.md). Podem ser devolvidos das seguintes formas:

* Como extensões (por exemplo, ".gif")
* Como tipos Mime (por exemplo, “image/jpeg”)
* Como códigos QuickTime de 4 caracteres

**Notas:** 

* Os seguintes codecs, manejados internamente por 4D, sempre são devolvidos como extensões: JPEG, PNG, TIFF, GIF, BMP, SVG, PDF, EMF.
* Os códigos QuickTime de 4 caracteres podem ser devolvidos nos bancos de dados onde a opção de compatibilidade QuickTime support tenha sido definida (utilizando o comando [SET DATABASE PARAMETER](set-database-parameter.md)). Entretanto, QuickTime já não é compatível com 4D e não é recomendado o uso de codecs QuickTime.

Para saber mais sobre os IDs codec imagen, consulte *Imagens* 

#### Exemplo 

Se quiser saber os formatos de imagem armazenados em um campo para o registro atual:

```4d
 ARRAY TEXT($aTPictureFormats;0)
  //Obter todos os formatos salvos
 GET PICTURE FORMATS([Employees]Photo;$aTPictureFormats)
```

#### Ver também 

  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1406 |
| Thread-seguro | &check; |
| Proibido no servidor ||


