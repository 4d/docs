---
id: string-list-to-array
title: STRING LIST TO ARRAY
slug: /commands/string-list-to-array
displayed_sidebar: docs
---

<!--REF #_command_.STRING LIST TO ARRAY.Syntax-->**STRING LIST TO ARRAY** ( *resNum* ; *cadeias* {; *resArquivo*} )<!-- END REF-->
<!--REF #_command_.STRING LIST TO ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| resNum | Integer | &#8594;  | Nº do recurso ou atributo "id" do elemento "group" (XLIFF) |
| cadeias | Text array | &#8592; | Strings do recurso STR# ou strings do elemento "group"(XLIFF) |
| resArquivo | Time | &#8594;  | Arquivo de número de referencia de Resource se omitido: todos os arquivos XLIFF ou arquivos de resources abertos |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.STRING LIST TO ARRAY.Summary-->O comando STRING LIST TO ARRAY preenche o array *cadeias* com:   

* As cadeias armazenadas no recurso de tipo lista de cadeias ("STR#") cujo número se passa em *resNum*.<!-- END REF-->
* Ou com una cadeia armazenada em um arquivo XLIFF aberto cujo atributo "id" do elemento "group" se passa em *resNum* (ver a continuação "Compatibilidade com arquitetura XLIFF").
Se o recurso não for encontrado, o array *cadeias* não muda e a variável OK assume o valor 0 (zero).  
  
Se passa um número de referência de arquivo de recursos válido em *resArquivo*, o recurso é pesquisado apenas nesse arquivo. Se não passa *resArquivo*, se devolverá a primeira ocorrência do recurso encontrado na fila de arquivos de recursos. Antes de chamar STRING LIST TO ARRAY, pode pré-declarar o array *cadeias* como una array de tipo cadeia ou texto. Se não pré-declara o array, o comando cria *cadeias* como um array de tipo Texto.  
  
**Nota:** Cada cadeia de um recurso lista de cadeias pode conter até 255 caracteres. 

**Dica:** Quando utilize os recursos listas de cadeias, limite-se a recursos de 32K, e a um máximo de umas centenas de cadeias por recurso.

#### Compatibilidade com arquitetura XLIFF 

O comando STRING LIST TO ARRAY é compatível com a arquitetura XLIFF de 4D a partir da versão 11: o comando busca primeiro pelos valores correspondentes a *resNum* e *cadeiaNum* em todos os arquivos XLIFF abertos (se o parâmetro *resArquivo* for omitido) e preenche o array *cadeias* com os valores correspondentes. Neste caso, *resNum* específica o atributo **id** do elemento **group** e o array *cadeias* contém todas as cadeias do elemento. Se não for encontrado o valor, o comando continua a pesquisa nos arquivos de recursos abertos. Para maior informação sobre a arquitetura XLIFF em 4D, consulte o Manual de Desenho.

#### Variáveis e conjuntos do sistema 

Se o recurso for encontrado, a variável sistema OK assume o valor 1, do contrário assume o valor 0 (zero).  
  

#### Ver também 

[Get indexed string](get-indexed-string.md)  
[Get string resource](get-string-resource.md)  
[Get text resource](get-text-resource.md)  