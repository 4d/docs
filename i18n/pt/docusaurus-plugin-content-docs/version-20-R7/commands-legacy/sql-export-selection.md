---
id: sql-export-selection
title: SQL EXPORT SELECTION
slug: /commands/sql-export-selection
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXPORT SELECTION.Syntax-->**SQL EXPORT SELECTION** ( *tabela* ; *rotaPasta* {; *numArquivos* {; *tamMaxArquivos* {; *tamLimCampos*}}} )<!-- END REF-->
<!--REF #_command_.SQL EXPORT SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual vai exportar a seleção |
| rotaPasta | Text | &#8594;  | Nome da rota da pasta de exportação ou "" para exibir caixa de diálogo de seleção de pasta |
| numArquivos | Integer | &#8594;  | Máximo número de arquivos por pasta |
| tamMaxArquivos | Integer | &#8594;  | Tamanho máximo de arquivo Export.sql (em Kb) |
| tamLimCampos | Integer | &#8594;  | Tamanho limite (em bytes) abaixo do qual os conteúdos dos campos Texto, BLOB ou Imagem são incluídos no arquivo principal |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SQL EXPORT SELECTION.Summary-->O comando SQL EXPORT SELECTION exporta ao formato SQL os registros da seleção atual da tabela 4D especificada pelo parâmetro *Tabela*.<!-- END REF-->   
  
Este comando é quase idêntico ao comando [SQL EXPORT DATABASE](sql-export-database.md). O arquivo gerado pode ser utilizado diretamente pelo comando \[#cmd id="1089"/\] com o propósito de importar dados em outra base 4D. A única diferença entre estes dois comandos é que SQL EXPORT SELECTION apenas exporta a seleção de *Tabela* enquanto [SQL EXPORT DATABASE](sql-export-database.md) exporta o banco de dados inteiro. Além disso, diferente do comando [SQL EXPORT DATABASE](sql-export-database.md), este comando não funciona com as bancos SQL externos. Apenas pode ser utilizado com a banco principal.  
  
Consulte a descrição do comando [SQL EXPORT DATABASE](sql-export-database.md) para uma descrição detalhada do funcionamento e parâmetros destes comandos.

Se a seleção atual estiver vazia, o comando não faz nada. Note que neste caso, a pasta de destino não é esvaziado.   
  
Se a exportação for realizada corretamente, a variável OK assume o valor 1\. Do contrário, assume o valor 0.

##### 

**Nota:** Este comando não é compatível com campos tipo Objeto

#### Ver também 

[SQL EXPORT DATABASE](sql-export-database.md)  