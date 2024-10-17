---
id: get-last-table-number
title: Get last table number
slug: /commands/get-last-table-number
displayed_sidebar: docs
---

<!--REF #_command_.Get last table number.Syntax-->**Get last table number**  -> Resultado de função<!-- END REF-->
<!--REF #_command_.Get last table number.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado de função | Inteiro longo | &#8592; | Número de tabela mais alto no banco de dados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get last table number.Summary-->Get last table number retorna o maior número de tabela entre as tabelas no banco.<!-- END REF--> As tabelas estão numeradas na ordem na qual foram criadas. Se nenhuma tabela tiver sido apagada do banco, o comando retorna o número de tabelas presentes no banco. No caso de loops iterativos sobre os números de tabelas do banco, deve utilizar o comando [Is table number valid](is-table-number-valid.md) para verificar que a tabela não tenha sido apagada.  

#### Example 

O seguinte exemplo inicializa os elementos do array *arrayTabelas*, com os nomes das tabelas definidos no banco. Este array pode ser utilizado como lista drop down (ou abas, área de deslocamento, etc.), para mostrar em um formulário a lista de tabelas do banco

```4d
 ARRAY TEXT(arrayTabelas;Get last table number)
 If(Get last table number>0) //Se o banco de dados não tiver tabelas
    For($vlTabelas;Size of array(arrayTabelas);1;-1)
       If(Is table number valid($vlTabelas))
          arrayTabelas{$vlTabelas}:=Table name($vlTabelas)
       Else
          DELETE FROM ARRAY(asTabelas;$vlTabelas)
       End if
    End for
 End if
```

#### Ver também 

[Get last field number](get-last-field-number.md)  
[Is table number valid](is-table-number-valid.md)  
[Table name](table-name.md)  