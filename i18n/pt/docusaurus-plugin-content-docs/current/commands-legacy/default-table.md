---
id: default-table
title: DEFAULT TABLE
slug: /commands/default-table
displayed_sidebar: docs
---

<!--REF #_command_.DEFAULT TABLE.Syntax-->**DEFAULT TABLE** ( *tabela* )<!-- END REF-->
<!--REF #_command_.DEFAULT TABLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela a ser definida como padrão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DEFAULT TABLE.Summary-->**Dica**: ainda que utilizar DEFAULT TABLE e omitir o nome da tabela podem fazer o código mais fácil de ler, muitos programadores consideram que a utilização deste comando em realidade traz mais inconvenientes que vantagens.<!-- END REF--> Em particular, note que [DEFAULT TABLE](default-table.md) é prioritário quando utiliza por exemplo o comando [DIALOG](../commands/dialog.md) com um formulário projeto e há um formulário da tabela por padrão com o mesmo nome.  
  
DEFAULT TABLE define *tabela* como a tabela por padrão para o processo atual.

Um processo não tem tabela por padrão até que o comando DEFAULT TABLE tenha sido executada. Depois que seja definida uma tabela por padrão, qualquer comando que omita o parâmetro *tabela* funcionará sobre a tabela por padrão. Por exemplo, considere este comando:  

```4d
 FORM SET INPUT([Tabela];"formulário")
```

Se a tabela por padrão foi definida previamente como \[Tabela\], o mesmo comando poderia ser escrito desta forma:

```4d
 FORM SET INPUT("formulário")
```
  
  
Uma das razões para definir a tabela por padrão é criar código que não seja específico para uma tabela. Isso permite operar o mesmo código para diferentes tabelas. Também pode utilizar ponteiros para tabelas para escrever código que não seja específico a tabelas. Para maior informação sobre esta técnica, veja a descrição do comando [Table name](table-name.md). 

DEFAULT TABLE não permite a omissão de nomes de tabelas quando se refere aos campos. Por exemplo:  

```4d
 [MinhaTabela]Meu Campo:="Uma String" // Correto
```
  
  
não pode ser escrita como:  

```4d
 DEFAULT TABLE([Minha Tabela])
 Meu Campo:="Uma string" // INCORRETO
```

porque uma tabela por padrão foi definida. No entanto, pode omitir o nome da tabela quando se refira aos campos nos triggers, nos formulários, e nos objetos que pertencem a tabela.

Em 4D, todas as tabelas estão “abertas” e prontas para ser utilizadas. DEFAULT TABLE não abre uma tabela, define uma tabela atual, ou prepara a tabela para entrada ou saída. DEFAULT TABLE é simplemente uma facilidade de programação para facilitar a digitação e leitura do código.

#### Exemplo 

O exemplo abaixo apresenta primeiro o código sem o comando DEFAULT TABLE. Depois mostra o mesmo código, com DEFAULT TABLE. O código é um loop comumente utilizado para adicionar novos registros a um banco de dados. Os comandos [FORM SET INPUT](form-set-input.md) e [ADD RECORD](add-record.md) necesitam uma tabela como primeiro parámetro:

```4d
 FORM SET INPUT([Clientes];"Adicionar Registros")
 Repeat
    ADD RECORD([Clientes])
 Until(OK=0)
```

Neste código o resultado da tabela padrão:

```4d
 DEFAULT TABLE([Clientes])
 FORM SET INPUT("Adicionar Registros")
 Repeat
    ADD RECORD
 Until(OK=0)
```

#### Ver também 

[Current default table](current-default-table.md)  
[NO DEFAULT TABLE](no-default-table.md)  