---
id: table-name
title: Table name
slug: /commands/table-name
displayed_sidebar: docs
---

<!--REF #_command_.Table name.Syntax-->**Table name** ( numTabela|pontTabela ) : Text<!-- END REF-->
<!--REF #_command_.Table name.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numTabela&#124;pontTabela | Inteiro longo, Ponteiro | &#8594;  | Número da tabela ou ponteiro a tabela |
| Resultado | Text | &#8592; | Nome da tabela |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Table name.Summary-->O comando Table name retorna o nome da tabela cujo número ou ponteiro é passado em *numTabela* ou *pontTabela*.<!-- END REF-->

#### Exemplo 

O seguinte é um exemplo de um método genérico que mostra os registros de uma tabela. A referência à tabela é passada como um ponteiro para a tabela. O comando Table name é utilizado para incluir o nome da tabela na barra de títulos da janela: 

```4d
  // Método de projeto SHOW CURRENT SELECTION
  // SHOW CURRENT SELECTION ( Ponteiro )
  // SHOW CURRENT SELECTION (->[Tabela])
 
 SET WINDOW TITLE("Registros para "+Table name($1)) // Fixar o título da janela
 DISPLAY SELECTION($1->) // Mostrar a seleção
```

#### Ver também 

[Field name](field-name.md)  
[Last table number](last-table-number.md)  
[SET FIELD TITLES](set-field-titles.md)  
[SET TABLE TITLES](set-table-titles.md)  
[Table](table.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 256 |
| Thread-seguro | &check; |


