---
id: last-field-number
title: Last field number
slug: /commands/last-field-number
displayed_sidebar: docs
---

<!--REF #_command_.Last field number.Syntax-->**Last field number** ( numTabela|pontTabela ) : Integer<!-- END REF-->
<!--REF #_command_.Last field number.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numTabela&#124;pontTabela | Inteiro longo, Ponteiro | &#8594;  | Número da tabela ou ponteiro a tabela |
| Resultado de função | Integer | &#8592; | Maior número de campo na tabela |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Last field number.Summary-->O comando Last field number retorna o número de campo mais alto dos campos na tabela cujo número ou ponteiro se passa en *numTabela* ou *pontTabela*.<!-- END REF-->  
  
Os campos estão numerados na ordem na qual foram criados. Se nenhum campo foi apagado da tabela, este comando retorna o número de campos que a tabela contém. No caso de loops interativos sobre os números de campo da tabela, deve utilizar o comando [Is field number valid](is-field-number-valid.md) com o objetivo de verificar que o campo não tenha sido eliminado.

#### Exemplo 

 O seguinte método de projeto cria o array *arrayCampos*, com os nomes dos campos da tabela cujo ponteiro se recebe como primeiro parâmetro   
  
```4d
 $vlTabela:=Table($1)
 ARRAY STRING(31;arrayCampos;Last field number($vlTabela))
 For($vlCampo;Size of array(asCampos);1;-1)
    If(Is field number valid($vlTabela;$vlCampo)
       arrayCampos{$vlCampo}:=Field name($vlTabela;$vlCampo)
    Else
       DELETE FROM ARRAY(arrayCampos;$vlCampo)
    End if
 End for
```

#### Ver também 

[Field name](field-name.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[Last table number](last-table-number.md)  
[Is field number valid](is-field-number-valid.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 255 |
| Thread-seguro | &check; |


