---
id: qr-set-sorts
title: QR SET SORTS
slug: /commands/qr-set-sorts
displayed_sidebar: docs
---

<!--REF #_command_.QR SET SORTS.Syntax-->**QR SET SORTS** ( *area* ; *aColunas* {; *aOrdem*} )<!-- END REF-->
<!--REF #_command_.QR SET SORTS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| aColunas | Real array | &#8594;  | Colunas |
| aOrdem | Real array | &#8594;  | Ordenar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR SET SORTS.Summary-->O comando QR SET SORTS permite definir o sentido de ordenação de cada coluna do relatório rápido cuja referência é passada em *area*.<!-- END REF-->  
  
*aColunas*: deve armazenar neste array o número de cada coluna para a qual deseja definir um sentido de ordenação.  
  
*aOrdem*: cada elemento deste array deve conter o sentido de ordenação para a coluna correspondente referenciada no array *aColunas*.  
  
 \* Se *aOrdem{$i}* é igual a 1, o sentido da ordenação é ascendente.  
 \* Se *aOrdem{$i}* é igual a - 1, o sentido da ordenação é descendente.

##### Tabela cruzada 

No caso deste tipo de relatórios, o array não pode ter mais de dois elementos. Unicamente pode ordenar as colunas (1) e as filas (2). Os dados (situados na intersecção das colunas e das linhas) não podem ser ordenados com este comando.  

  
Este é o código para ordenar só as linhas em caso de um relatório de tabelas cruzadas:

```4d
 ARRAY REAL($aColumnas;1)
 $aColunas{1}:=2
 ARRAY REAL($aOrdens;1)
 $aOrdem{1}:=-1 //Ordem alfabético das linhas
 QR SET SORTS(qr_area;$aColunas;$aOrdem)
```
  
  
Se passa um número de área *inválido*, se gera o erro -9850.  

#### Ver também 

[QR GET SORTS](qr-get-sorts.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 752 |
| Thread-seguro | &cross; |
| Modificar variáveis | error |


