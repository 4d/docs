---
id: get-text-resource
title: Get text resource
slug: /commands/get-text-resource
displayed_sidebar: docs
---

<!--REF #_command_.Get text resource.Syntax-->**Get text resource** ( *resNum* {; *resArquivo*} ) : Text<!-- END REF-->
<!--REF #_command_.Get text resource.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| resNum | Integer | &#8594;  | Número de resource |
| resArquivo | Time | &#8594;  | Número de referência do arquivo Resource, ou todos os arquivos de referência abertos, se omitido |
| Resultado | Text | &#8592; | Conteúdos do resource TEXT |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get text resource.Summary-->O comando Get text resource retorna o texto guardado no recurso texto (“TEXT”) cujo número de identificação é passado em *resNum*.<!-- END REF-->  
  
Se o recurso não for encontrado, um texto vazio é retornado e a variável Sistema OK assume o valor 0 (zero).  
  
Se passa um número de referência de arquivo de recursos válido em *resArquivo*, o recurso é pesquisado apenas nesse arquivo. Se não passa *resArquivo*, será retornada a primeira ocorrência do recurso encontrada na fila de arquivos de recursos.  
  
**Nota**: um recurso texto pode conter até 32 000 caracteres.

#### Exemplo 

O exemplo a seguir mostra o conteúdo do recurso texto de ID=20800, que deve estar localizado em pelo menos um dos arquivos de recursos que estejam abertos:

```4d
 ALERT(Get text resource(20800))
```

#### Variáveis e conjuntos do sistema 

Se o recurso for encontrado, OK assume o valor 1\. Do contrário, assume o valor 0 (zero).

#### Ver também 

[Get indexed string](get-indexed-string.md)  
[Get string resource](get-string-resource.md)  
[STRING LIST TO ARRAY](string-list-to-array.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 504 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


