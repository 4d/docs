---
id: get-last-field-number
title: Get last field number
slug: /commands/get-last-field-number
displayed_sidebar: docs
---

<!--REF #_command_.Get last field number.Syntax-->**Get last field number** ( numTabela|pontTabela ) -> Resultado de função<!-- END REF-->
<!--REF #_command_.Get last field number.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numTabela&#124;pontTabela | Inteiro longo, Ponteiro | &srarr; | Número da tabela ou ponteiro a tabela |
| Resultado de função | Inteiro longo | &larr; | Maior número de campo na tabela |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get last field number.Summary-->O comando Get last field number retorna o número de campo mais alto dos campos na tabela cujo número ou ponteiro se passa en *numTabela* ou *pontTabela*.<!-- END REF-->  
  
Os campos estão numerados na ordem na qual foram criados. Se nenhum campo foi apagado da tabela, este comando retorna o número de campos que a tabela contém. No caso de loops interativos sobre os números de campo da tabela, deve utilizar o comando [Is field number valid](is-field-number-valid.md) com o objetivo de verificar que o campo não tenha sido eliminado.

#### Exemplo 

 O seguinte método de projeto cria o array *arrayCampos*, com os nomes dos campos da tabela cujo ponteiro se recebe como primeiro parâmetro   
  
```4d
 $vlTabela:=Table($1)
 ARRAY STRING(31;arrayCampos;Get last field number($vlTabela))
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
[Get last table number](get-last-table-number.md)  
[Is field number valid](is-field-number-valid.md)  