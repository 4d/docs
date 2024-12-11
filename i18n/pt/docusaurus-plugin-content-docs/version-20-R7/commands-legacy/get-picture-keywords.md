---
id: get-picture-keywords
title: GET PICTURE KEYWORDS
slug: /commands/get-picture-keywords
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE KEYWORDS.Syntax-->**GET PICTURE KEYWORDS** ( *imagem* ; *arrayPalavrasChaves* {; *} )<!-- END REF-->
<!--REF #_command_.GET PICTURE KEYWORDS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| imagem | Picture, Picture | &#8594;  | Imagem para à qual obter as palavras chaves associadas |
| arrayPalavrasChaves | Text array | &#8592; | Array com as palavras chaves extraídas |
| * | Operador | &#8594;  | Se passado = usar valores diferentes |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET PICTURE KEYWORDS.Summary-->O comando **GET PICTURE KEYWORDS** devolve no array *arrayPalavrasChaves*, a lista de palavras-chaves associadas à imagem passada como parâmetro.<!-- END REF-->  
  
Somente se deve ter em conta as palavras-chaves definidas via metadados **IPTC/Keywords**. Outros tipos de metadados são ignorados pelo comando. O comando funciona unicamente com os tipos de imagens que suportam este tipo de metadados (JPEG, TIFF, etc.).  
  
**Nota**: os metadados de tipo IPTC/Keywords agora são indexáveis em 4D (ver o manual de *Desenho*).   
  
Se passado o parâmetro *\**, o método só devolve os "valores diferentes" de palavras-chaves, ou seja uma lista sem duplicados.  
  
Caso a imagem não contém palavras-chaves ou metadados IPTC/Keywords, o comando devolve um array vazio, não é gerado nenhum erro.  
  
**Nota**: os resultados devolvidos por este comando podem diferir em função do valor atual da propriedade da base "Considerar unicamente caracteres não alfanuméricos para as palavras-chaves" (ver o parágrafo [DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md)).

#### Ver também 

[GET PICTURE METADATA](get-picture-metadata.md)  
[SET PICTURE METADATA](set-picture-metadata.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1142 |
| Thread-seguro | &check; |
| Proibido no servidor ||


