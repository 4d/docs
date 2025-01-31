---
id: get-indexed-string
title: Get indexed string
slug: /commands/get-indexed-string
displayed_sidebar: docs
---

<!--REF #_command_.Get indexed string.Syntax-->**Get indexed string** ( *resID* ; *cadeiaNum* {; *resArquivo*} ) : Text<!-- END REF-->
<!--REF #_command_.Get indexed string.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| resID | Integer | &#8594;  | Nº de recurso Id ou atributo "id" do elemento do "grupo" (XLIFF) |
| cadeiaNum | Integer | &#8594;  | Nº de Cadeia ou atributo de "id" ou elemento de "trans-unit" (XLIFF) |
| resArquivo | Time | &#8594;  | Arquivo de número de referencia de Resource se omitido: todos os arquivos XLIFF ou arquivos de resources abertos |
| Resultado | Text | &#8592; | Valor da cadeia indexada |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get indexed string.Summary-->O comando Get indexed string devolve:   

* Uma das cadeias guardadas no recurso lista de cadeias (“STR#”) cujo número de identificação for passada em *resNum*.<!-- END REF-->
* Uma cadeia guardada em um arquivo XLIFF aberto cujo atributo "id" do elemento "grupo" se passa em *resNum* (ver a continuação "Compatibilidade com a arquitetura XLIFF ). Passe o número da cadeia em *cadeiaNum*. As cadeias de um recurso lista de cadeias estão numeradas de 1 a N. Para recuperar todas as cadeias (e seus números) de um recurso lista de cadeias, utilize o comando [STRING LIST TO ARRAY](string-list-to-array.md "STRING LIST TO ARRAY"). Se o recurso não for encontrado, ou se a cadeia não estiver no interior do recurso, uma cadeia vazia é devolvida e a variável sistema OK toma o valor 0 (zero). Se passa um número de referência de arquivo de recursos válido em *resArquivo*, o recurso é procurado nesse arquivo apenas. Se não passa *resArquivo*, a primeira ocorrência do recurso encontrada na cadeia de arquivos de recursos.

**Nota:** uma cadeia de um recurso lista de cadeias pode conter até 255 caracteres.

##### Compatibilidade com arquitetura XLIFFO 

O comando Get indexed string é compatível com a arquitetura XLIFF de 4D a partir da versão 11: o comando pesquisa primeiro pelos valores correspondentes a *resNum* e *cadeiaNum* em todos os arquivos XLIFF abertos (se o parâmetro *resArquivo* for omitido). Neste caso, *resNum* especifica o atributo **id** do elemento **grupo** e*cadeiaNum* especifica o atributo **id** do elemento **trans-unit**. Se não for encontrado o valor, o comando continua a pesquisa nos arquivos de recursos abertos. Para maiores informações sobre a arquitetura XLIFF em 4D, consulte o Manual de Desenho.

#### Variáveis e conjuntos do sistema 

Se o recurso for encontrado, OK toma o valor 1, do contrário assume o valor 0 (zero).

#### Ver também 

[Get string resource](get-string-resource.md)  
[Get text resource](get-text-resource.md)  
[STRING LIST TO ARRAY](string-list-to-array.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 510 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


