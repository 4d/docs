---
id: get-string-resource
title: Get string resource
slug: /commands/get-string-resource
displayed_sidebar: docs
---

<!--REF #_command_.Get string resource.Syntax-->**Get string resource** ( *resNum* {; *resArquivo*} ) : Text<!-- END REF-->
<!--REF #_command_.Get string resource.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| resNum | Integer | &#8594;  | Número do resource |
| resArquivo | Time | &#8594;  | Número de referência do arquivo Resource, ou todos os arquivos de referência abertos, se omitido |
| Resultado | Text | &#8592; | Conteúdos do resource STR |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get string resource.Summary-->o comando Get string resource retorna a string armazenada no recurso string (“STR ”) cujo número de referência se passa em *resNum*.<!-- END REF-->  
  
Se o recurso não for encontrado, uma string vazia é retornada e a variável oK toma o valor 0 (zero).  
  
Se passa um número de referência de arquivo de recursos válido em *resArquivo*, o recurso é pesquisado apenas nesse arquivo. Se não passar *resArquivo*, se retorna a primeira ocorrência do recurso encontrada na fila de arquivos de recursos.  
  
**Nota**: um recurso string pode conter até 255 caracteres.

#### Exemplo 

O exemplo a seguir mostra os conteúdos do recurso string de ID=20911, que deve estar localizado em pelo menos um dos arquivos de recursos abertos.

```4d
 ALERT(Get string resource(20911))
```

#### Variáveis e conjuntos do sistema 

A variável sistema OK toma o valor 1 se for encontrado o recurso, do contrário assume o valor 0 (zero). 

#### Ver também 

[Get indexed string](get-indexed-string.md)  
[Get text resource](get-text-resource.md)  
[STRING LIST TO ARRAY](string-list-to-array.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 506 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


