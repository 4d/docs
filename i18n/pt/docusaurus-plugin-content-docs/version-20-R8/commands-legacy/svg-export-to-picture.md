---
id: svg-export-to-picture
title: SVG EXPORT TO PICTURE
slug: /commands/svg-export-to-picture
displayed_sidebar: docs
---

<!--REF #_command_.SVG EXPORT TO PICTURE.Syntax-->**SVG EXPORT TO PICTURE** ( *refElemento* ; *varImagem* {; *tipoExport*} )<!-- END REF-->
<!--REF #_command_.SVG EXPORT TO PICTURE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência do elemento Root XMLK |
| varPicture | Picture | &#8594;  | Variável de imagem que recebe a árvore XML (Imagem SVG) |
| tipoExport | Integer | &#8594;  | 0= Não armazenar fonte de dados, 1 = Copiar fonte de dados (padrão), 2 = Fonte de dados própria |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SVG EXPORT TO PICTURE.Summary-->O comando SVG EXPORT TO PICTURE permite guardar na variável ou campo imagem indicado pelo parâmetro *varImag* uma imagem em formato SVG contida em uma árvore XML.<!-- END REF--> 
  
Passe em *refElemento* a referência do elemento XML raiz que contenha a imagem SVG.  
  
Passe em *varImagem* o nome da variável imagem ou do campo imagem 4D que conterá a imagem SVG. A imagem é exportada em seu formato nativo (descrição XML) e é redesenhada através do motor de renderização SVG no momento da visualização.  
  
O parâmetro opcional *tipoExport* permite definir a maneira como a fonte de dados XML deve ser manejada pelo comando. Pode passar uma das seguintes constantes, que são encontradas no tema “*XML*”, neste parâmetro:  
  
| Constante            | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                         |
| -------------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Copy XML data source | Inteiro longo | 1     | 4D mantém uma cópia da árvore DOM com a imagem, o que significa que a imagem pode ser salva em um campo imagem do banco de dados e então reexibida ou exportada a qualquer momento. Este é o modo padrão de exportação quando o parâmetro *exportTipo* for omitido |
| Get XML data source  | Inteiro longo | 0     | 4D só lê a fonte de dados XML; não se conserva com a imagem. Isto acelera notavelmente a execução de comando; entretanto, como a árvore DOM não se conserva, não é possível salvar ou exportar a imagem.                                                           |
| Own XML data source  | Inteiro longo | 2     | 4D exporta a árvore DOM com a imagem. A imagem pode ser armazenada ou exportada e a execução do comando é rápida. Entretanto, a referência XML *elementRef* não pode mais ser usada por outros comandos 4D.                                                        |

.

#### Exemplo 

O exemplo abaixo pode ser utilizado para mostrar “Hello World” em uma imagem 4D:

```4d
 var vpict : Picture
 $svg:=DOM Create XML Ref("svg";"http://www.w3.org/2000/svg")
 $ref:=DOM Create XML element($svg;"text";"font-size";26;"fill";"red")
 DOM SET XML ATTRIBUTE($ref;"y";"1em")
 DOM SET XML ELEMENT VALUE($ref;"Hello World")
 SVG EXPORT TO PICTURE($svg;vpict;Copy XML data source)
 DOM CLOSE XML($svg)
```

![](../assets/en/commands/pict14520.en.png)

#### Ver também 

[DOM EXPORT TO FILE](dom-export-to-file.md)  
[DOM EXPORT TO VAR](dom-export-to-var.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1017 |
| Thread-seguro | &check; |


