---
id: convert-to-text
title: Convert to text
slug: /commands/convert-to-text
displayed_sidebar: docs
---

<!--REF #_command_.Convert to text.Syntax-->**Convert to text** ( *BLOB* ; *conjuntoCaracteres* ) : Text<!-- END REF-->
<!--REF #_command_.Convert to text.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | Blob que contém texto expresso num conjunto de caracteres específico |
| conjuntoCaracteres | Text, Integer | &#8594;  | Nome ou número do conjunto de caracteres do BLOB |
| Resultado | Text | &#8592; | Conteúdos do BLOB expressos em conjunto de caracteres 4D |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Convert to text.Summary-->O comando Convert to text converte o texto contido no parâmetro *blob* e o devolve em texto expresso no conjunto de caracteres de 4D.<!-- END REF--> 4D utiliza como padrão o conjunto de caracteres UTF-16.  
  
 Em*conjunto* *Caracteres*, passe o conjunto de caracteres do texto contido no *blob*, o qual será utilizado para a conversão.   
Se o BLOB contém texto copiado desde 4D, o texto do BLOB será provavelmente UTF-16\. Pode passar uma cadeia com o nome padrão do conjunto de caracteres, ou com seus apelidos (por exemplo, “ISO-8859-1” ou “UTF-8”), ou seu identificador (inteiro longo). Para maior informação, consulte a descrição do comando [CONVERT FROM TEXT](convert-from-text.md "CONVERT FROM TEXT").  
  
Convert to text é compatível com BOMs (Byte Order Marks). Se o conjunto de caracteres especificado é de tipo Unicode (UTF-8, UTF-16 ou UTF-32), 4D tenta identificar um BOM entre os primeiros bytes recebidos. Se o detectar, ele é filtrado do resultado e 4D utiliza o conjunto de caracteres definido ao invés do conjunto de caracteres especificado. 

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável OK assume o valor 1\. Do contrário, assume o valor 0.

#### Ver também 

[CONVERT FROM TEXT](convert-from-text.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1012 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


