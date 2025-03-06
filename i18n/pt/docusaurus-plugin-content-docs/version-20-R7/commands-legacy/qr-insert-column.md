---
id: qr-insert-column
title: QR INSERT COLUMN
slug: /commands/qr-insert-column
displayed_sidebar: docs
---

<!--REF #_command_.QR INSERT COLUMN.Syntax-->**QR INSERT COLUMN** ( *area* ; *numColuna* ; *objeto* )<!-- END REF-->
<!--REF #_command_.QR INSERT COLUMN.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| numColuna | Integer | &#8594;  | Número de Coluna |
| objeto | Field, Variable, Pointer | &#8594;  | Objeto a inserir na coluna |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR INSERT COLUMN.Summary-->O comando QR INSERT COLUMN insere ou cria uma coluna em una posição específica.<!-- END REF--> As colunas situadas à direita da coluna adicionada serão deslocadas em conseqüência disso.  

*numColuna* é o número da coluna, estabelecida de esquerda a direita.  
  
O título por padrão da coluna será o valor passado em *objeto*.  
  
Se passa um número de *area* inválido, se gera o erro -9850.

**Nota:** este comando não pode ser utilizado com um relatório tabela cruzada.

#### Exemplo 

A seguinte instrução insere (ou cria) uma primeira coluna na área MinhaArea, insere “Campo1” como título da coluna (comportamento por padrão) e preenche o conteúdo do corpo com os valores do Campo1.

```4d
 QR INSERT COLUMN(MinhaArea;1;->[Tabela 1]Campo1)
```

#### Ver também 

[QR DELETE COLUMN](qr-delete-column.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 748 |
| Thread-seguro | &cross; |
| Modificar variáveis | error |


