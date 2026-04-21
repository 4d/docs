---
id: last-table-number
title: Last table number
slug: /commands/last-table-number
displayed_sidebar: docs
---

<!--REF #_command_.Last table number.Syntax-->**Last table number**  : Integer<!-- END REF-->
<!--REF #_command_.Last table number.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado de função | Integer | &#8592; | Número de tabela mais alto no banco de dados |
</div>
<!-- END REF-->

## Descrição 

<!--REF #_command_.Last table number.Summary-->Last table number retorna o maior número de tabela entre as tabelas no banco.<!-- END REF--> As tabelas estão numeradas na ordem na qual foram criadas. Se nenhuma tabela tiver sido apagada do banco, o comando retorna o número de tabelas presentes no banco. No caso de loops iterativos sobre os números de tabelas do banco, deve utilizar o comando [Is table number valid](../commands/is-table-number-valid) para verificar que a tabela não tenha sido apagada.  

## Example 

O seguinte exemplo inicializa os elementos do array *arrayTabelas*, com os nomes das tabelas definidos no banco. Este array pode ser utilizado como lista drop down (ou abas, área de deslocamento, etc.), para mostrar em um formulário a lista de tabelas do banco

```4d
 ARRAY TEXT(arrayTabelas;Last table number)
 If(Last table number>0) //Se o banco de dados não tiver tabelas
    For($vlTabelas;Size of array(arrayTabelas);1;-1)
       If(Is table number valid($vlTabelas))
          arrayTabelas{$vlTabelas}:=Table name($vlTabelas)
       Else
          DELETE FROM ARRAY(asTabelas;$vlTabelas)
       End if
    End for
 End if
```

## Ver também 

[Last field number](../commands/last-field-number)  
[Is table number valid](../commands/is-table-number-valid)  
[Table name](../commands/table-name)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 254 |
| Thread-seguro | yes |


