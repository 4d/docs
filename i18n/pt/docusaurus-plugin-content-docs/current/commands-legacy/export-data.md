---
id: export-data
title: EXPORT DATA
slug: /commands/export-data
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT DATA.Syntax-->**EXPORT DATA** ( *nomeArquivo* {; *projeto* {; *}} )<!-- END REF-->
<!--REF #_command_.EXPORT DATA.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeArquivo | Text | &#8594;  | Rota de acesso do arquivo a exportar |
| projeto | Text, Blob | &#8594;  | Conteúdo do projeto de exportação |
| &#8592; | Novo conteúdo do projeto de exportação (se for passado o parâmetro *) |
| * | Operador | &#8594;  | Visualização da caixa de diálogo de exportação e atualização do projeto |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.EXPORT DATA.Summary-->O comando EXPORT DATA exporta dados no arquivo *nomArquivo*.<!-- END REF--> 4D pode exportar dados nos seguintes formatos: Texto, Texto de longitude fixa, XML, SYLK, DIF, DBF (dBase) e 4D. 

Se passa uma string vazia em *nomArquivo*, EXPORT DATA mostra a caixa de diálogo comum de guardar arquivos, permitindo ao usuário definir o nome, tipo e localização do arquivo de exportação. Quando aceitar a caixa de diálogo, a variável sistema Documento contém a rota de acesso e o nome do arquivo. Se o usuário clicar em **Cancelar**, é parado a execução do comando e a variável sistema OK toma o valor 0\. 

O parâmetro opcional *projeto* permite utilizar um projeto para exportar dados. Quando passa este parâmetro, a exportação é realizada diretamente, sem nenhuma intervenção (a menos que se utilize a opção \*, ver a continuação). Se não passa este parâmetro, aparece a caixa de diálogo de exportação. O usuário pode definir seus parâmetros de exportação ou carregar um projeto de exportação existente. 

Um projeto de exportação contém todos os parâmetros de exportação, tais como as tabelas e campos a exportar, os delimitadores, etc. No parâmetro *projeto* pode passar uma variable Texto com XML ou uma variable Texto com uma referência a um elemento DOM pre existente, ou um BLOB. Os projetos podem ser criados por programação (projetos de formato XML unicamente) ou carregando os parâmetros previamente definidos na caixa de diálogo de exportação. No último caso, há duas soluções disponíveis:

* Usar o comando EXPORT DATA com um parâmetro *projeto* vazio e o parâmetro opcional *\**, depois guardar o parâmetro *projeto* em um campo Texto ou BLOB (ver a continuação). Esta solução lhe permite guardar o projeto com o arquivo de dados.
* Guardar o projeto no disco, depois carregá-lo utilizando o comando DOM Parse XML source e passando sua referência no parâmetro *projeto*.
**Nota de compatibilidade**: a partir da versão 12 de 4D, os projetos de exportação são codificados em XML. 4D pode abrir os projetos de exportação gerados com as versões anteriores de 4D (formato BLOB), entretanto os projetos criados a partir da v12 não podem ser abertos com uma versão 11 ou anterior. Além disso é recomendado utilizar variáveis Texto para manipular os arquivos de exportação.   

O parâmetro opcional *\**, se for especificado, que apareça a caixa de diálogo de exportação com os parâmetros definidos em *projeto*. Esta característica lhe permite utilizar um projeto pré-definido, enquanto tem ainda a possibilidade de modificar um ou mais parâmetros. Além disso, o parâmetro *projeto* contém, depois de fechar a caixa de diálogo de exportação, os parâmetros do “novo” projeto. Então pode armazenar o novo projeto em um campo BLOB, em disco, etc. 

Se a exportação foi exitosa, a variável sistema OK é igual a 1.

#### Exemplo 1 

Este exemplo apresenta o uso do comando EXPORT DATA para exportar dados em formato binário.

* Este método faz um loop por todas as tabelas do banco e chama ao método ExportBinary:

```4d
 var $ExportPath : Text
 var $i : Integer
 $ExportPath:=Select folder("Por favor selecione a pasta de exportação:")
 If(Ok=1)
    For($i;1;Last table number)
       If(Is table number valid($i))
          ExportBinary(Table($i);$ExportPath+Table name($i);True)
       End if
    End for
 End if
```

* Este é o código do método ExportBinary:

```4d
 var $1 : Pointer //tabela
 var $2 : Text //rota do arquvo de destino
 var $3 : Boolean //exportar todos os registros
 var $i : Integer
 var $ref : Text
 $ref:=DOM Create XML Ref("settings-import-export")
  // Exportar a tabela "$1" em formato binário '4D', todos os registros ou unicamente a seleção atual
 DOM SET XML ATTRIBUTE($ref;"table_no";Table($1);"format";"4D";"all_records";$3)
  // Definição dos campos a exportar
 For($i;1;Last field number($1))
    If(Is field number valid($1;$i))
       $elt:=DOM Create XML element($ref;"field";"table_no";Table($1);"field_no";$i)
    End if
 End for
 EXPORT DATA($2;$ref)
 If(Ok=0)
    ALERT("Erro durante a exportação da tabela "+Table name($1))
 End if
 DOM CLOSE XML($ref)
```

#### Exemplo 2 

Este exemplo cria um projeto vazio e guarda os parâmetros definidos pelo usuário na caixa de diálogo de exportação: 

```4d
 var $exportParams : Text
 EXPORT DATA("DocExport.txt";$exportParams;*) // Visualização da caixa de diálogo de exportação
```

#### Variáveis e conjuntos do sistema 

Se o usuário clicar em **Cancelar** na caixa de diálogo padrão de abrir arquivos ou de exportação, a variável sistema OK toma o valor 0\. Se a exportação foi exitosa, a variável sistema OK toma o valor 1\. 

#### Ver também 

[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[IMPORT DATA](import-data.md)  