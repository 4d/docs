---
id: sax-add-xml-comment
title: SAX ADD XML COMMENT
slug: /commands/sax-add-xml-comment
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML COMMENT.Syntax-->**SAX ADD XML COMMENT** ( *documento* ; *comentario* )<!-- END REF-->
<!--REF #_command_.SAX ADD XML COMMENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referência do documento aberto |
| comentario | Text | &#8594;  | Comentário a ser adicionado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAX ADD XML COMMENT.Summary-->O comando SAX ADD XML COMMENT adiciona um *comentario* no documento XML referenciado por *documento*.<!-- END REF-->  

Um comentário XML é um texto cujo conteúdo não será analisado pelo intérprete XML. Os comentários XML devem estar entre os caracteres <!-- e -->.

#### Exemplo 

A instrução abaixo: 

```4d
 vComentario:="Criado por 4D"
 SAX ADD XML COMMENT($DocRef;vComentário)
```

... escreverá a seguinte linha no documento: 

```4d
 
```

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema Ok assume o valor 1\. Se ocorrer um erro, assume o valor 0.

#### Gestão de erros 

No caso de um erro, o comando devolve um erro que pode ser interceptado usando um método de gestão de erros.  

#### Ver também 

[SAX ADD XML DOCTYPE](sax-add-xml-doctype.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 852 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |


