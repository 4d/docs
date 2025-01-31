---
id: no-default-table
title: NO DEFAULT TABLE
slug: /commands/no-default-table
displayed_sidebar: docs
---

<!--REF #_command_.NO DEFAULT TABLE.Syntax-->**NO DEFAULT TABLE**<!-- END REF-->
<!--REF #_command_.NO DEFAULT TABLE.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.NO DEFAULT TABLE.Summary-->O comando NO DEFAULT TABLE permite cancelar o efeito do comando [DEFAULT TABLE](default-table.md).<!-- END REF--> Depois da execução deste comando, não há tabela padrão definida para o processo.  
Este comando não tenrá efeito se o comando [DEFAULT TABLE](default-table.md) não tiver sido chamado anteriormente.

Este comando está relacionado com o uso de formulários de projeto (formulários não associados a tabelas): a maioria dos comandos relacionados aos formulários (além dos formulários de usuário) aceitam um parâmetro opcional *Tabela* como primeiro parâmetro. Por exemplo, este é o caso dos comandos *\_o\_FORM GET PARAMETER*, [Open form window](open-form-window.md) ou [DIALOG](../commands/dialog.md). Como um formulário de projeto e um formulário de tabela podem ter o mesmo nome, este parâmetro pode ser utilizado para determinar o formulário a utilizar: passe o parâmetro *Tabela* quando queira apontar a um formulário tabela e omíta-o no caso de um formulário de projeto.

Em um banco que contiver um formulário de projeto chamado “MeuFormulário” e um formulário de tabela com o mesmo nome para a tabela \[Tabela1\]:  

```4d
 DIALOG([Tabela1];"MeuFormulário") //4D utiliza o formulário de tabela DIALOG("MeuFormulário") `4D utiliza o formulário de projeto
```
  
  
Entretanto, este principio é nulo e inválido se o comando [DEFAULT TABLE](default-table.md) for executado quando a banco contiver um formulário de projeto e um formulário de tabela com o mesmo nome. Na verdade, neste caso 4D utilizará o formulário de tabela por padrão, mesmo se não for passado o parâmetro *tabela*. Para garantir o uso de formulários de projeto, simplesmente utilize o comando NO DEFAULT TABLE .

#### Exemplo 

Em um banco que contenha um formulário de projeto chamado "oFormulário" e um formulário de tabela com o mesmo nome para a tabela \[Tabela1\]: 

```4d
 DEFAULT TABLE([Tabela1])
 DIALOG("oFormulário") //4D utiliza o formulário de tabela
 NO DEFAULT TABLE
 DIALOG("oFormulário") //4D utiliza o formulário de projeto
```

#### Ver também 

[DEFAULT TABLE](default-table.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 993 |
| Thread-seguro | &check; |


