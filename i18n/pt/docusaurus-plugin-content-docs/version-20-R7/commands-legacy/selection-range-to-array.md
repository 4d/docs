---
id: selection-range-to-array
title: SELECTION RANGE TO ARRAY
slug: /commands/selection-range-to-array
displayed_sidebar: docs
---

<!--REF #_command_.SELECTION RANGE TO ARRAY.Syntax-->**SELECTION RANGE TO ARRAY** ( *inicio* ; *fim* {; umCampo | umaTabela ; *array*} {; umCampo | umaTabela2 ; *array2* ; ... ; umCampo | umaTabelaN ; *arrayN*} )<!-- END REF-->
<!--REF #_command_.SELECTION RANGE TO ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| inicio | Integer | &#8594;  | Número do registro selecionado onde a recuperação de dados começa |
| fim | Integer | &#8594;  | Número de registro selecionado onde termina a recuperação de dados |
| umCampo &#124; umaTabela | Campo, Tabela | &#8594;  | Campo usado para pedir dados ou Tabela usada para pedir números de registros |
| array | Array | &#8592; | Array para receber dados do campo ou número de registros |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SELECTION RANGE TO ARRAY.Summary-->**SELECTION RANGE TO ARRAY** cria um ou mais arrays e copia os dados dos campos ou números de registro da seleção atual para os arrays.<!-- END REF--> 

Ao contrário [SELECTION TO ARRAY](selection-to-array.md), que se aplica à seleção atual em sua totalidade, **SELECTION RANGE TO ARRAY** só se aplica ao conjunto de registros selecionados especificado por parâmetros *início* e *fim*.

O comando espera que você passe no início e no final os números de registros selecionados em conformidade com a fórmula *1 <= inicio <= fim <= Records in selection (\[...\]).*. 

Se você passar *1 <= início = fim< Records in selection (\[...\])*, você vai carregar campos ou obter o número do registro cujo registro selecionado é *início = fim*.

Se você passar números incorretos de registros selecionados, o comando faz o seguinte:

* Se *fim > Records in selection (\[...\])*, a seleção retorna valores do registro selecionado especificado pelo *início* do último registro selecionado.
* Se *início > fim*, ele retorna valores do registro selecionado, cujo registro é *início*.
* Se ambos os parâmetros são incompatíveis com o tamanho da seleção, ele retorna arrays vazios.

Como [SELECTION TO ARRAY](selection-to-array.md), o comando **SELECTION RANGE TO ARRAY** aplica-se à seleção para o quadro especificado no primeiro parâmetro.

Também como [SELECTION TO ARRAY](selection-to-array.md), **SELECTION RANGE TO ARRAY** pode realizar o seguinte:

* Carregar os valores de um ou vários campos
* *Carregar número de registros utilizando a tabela ...;\[table\];Array;...*
* Carregar valores de campos relacionados, se houver uma relação automática de Muitos para Um entre as tabelas ou se você tiver chamado anteriormente [SET AUTOMATIC RELATIONS](set-automatic-relations.md) para mudar manualmente as relações Muito para um para automática. Em ambos os casos, os valores podem ser carregados a partir de tabelas com vários níveis de relações Muitos para Um.

Cada array é digitado de acordo com o tipo de campo. Há duas exceções:

 Quando aplica **SELECTION RANGE TO ARRAY** a um campo de tipo Hora, note que criará um array de tipo Hora unicamente se o array não foi definido como de outro tipo. Por exemplo, no seguinte contexto, o array *myArray* conservará o tipo Inteiro longo:  

```4d
 ARRAY LONGINT(myArray;0)
 SELECTION TO ARRAY([myTable]myTimeField;myArray)
```

Se você carregar um número de registros, eles são copiados para um array Inteiro longo.

**Nota:** Você pode chamar o comando **SELECTION RANGE TO ARRAY** apenas com os parâmetros *início* e *fim*. Esta sintaxe especial possa ser usado para lançar, em uma seleção limitada, a execução de uma série de comandos [SELECTION TO ARRAY](selection-to-array.md) usando o parâmetro *\** (ver exemplo 4\]). 

**4D Server:** **SELECTION RANGE TO ARRAY**é otimizado para 4D Server. Cada array é criado no servidor e, em seguida, enviado, na sua totalidade, para a máquina cliente. 

**Atenção:** **SELECTION RANGE TO ARRAY** pode criar arrays de grande porte, dependendo da faixa que você especificar no início e fim, e sobre o tipo e o tamanho dos dados que você está carregando. Arrays residem na memória, então é uma boa idéia testar o resultado depois que o comando seja concluído. Para fazer isso, teste o tamanho de cada array resultante ou cubra a chamada para o comando, utilizando um método de projeto [ON ERR CALL](on-err-call.md).

Se o comando for bem sucedido, o tamanho de cada matriz resultante é igual a *(fim-inicio)+1*, exceto se o parâmetro *fim* excedeu o número de registros da seleção. Nesse caso, cada array resultante contém *(Registros em seleção(\[...\])-inicio)+1* elementos.

#### Exemplo 1 

O código a seguir endereça os 50 primeiros registros da seleção atual para a tabela *\[Faturas\].* Ele carrega os valores do campo *\[Faturas\]Fatura ID* e de *\[Clientes\]Cliente ID* do campo relacionado.

```4d
 SELECTION RANGE TO ARRAY(1;50;[Faturas]Faturas ID;alInvoID;[Clientes]Clientes ID;alCustID)
```

#### Exemplo 2 

O código a seguir endereça os últimos 50 registros da seleção atual para a tabela *\[Faturas\]*. Ele carrega os números de registro da tabela *\[Faturas\]*, bem como as do registros relacionados de *\[Clientes\]*:

```4d
 lSelTam:=Records in selection([Faturas])
 SELECTION RANGE TO ARRAY(lSelTam-49;lSelTam;[Faturas];alFacRegN;[Faturas];alCliRegN)
```

#### Exemplo 3 

O seguinte processo de código seqüencial divice em "pedaços" de 1.000 registros, uma seleção que não podia ser baixada na íntegra em arrays:

```4d
 lMaxPag:=1000
 lSelTam:=Records in selection([Diretorio Telefonico])
 For($lPage ;1;1+((lSelTam-1)\lMaxPag))
  // Carregar os valores e/ou os números de registros
    SELECTION RANGE TO ARRAY(1+(lMaxPag*($lPag-1));lMaxPag*$lPag;...;...;...;...;...;...)
  // Fazer algo com os arrays
 End for
```

#### Exemplo 4 

Use os 50 primeiros registros atuais da tabela \[facturas\] para carregar vários arrays, em execução diferida:

```4d
  // Instruções diferidas
 SELECTION TO ARRAY([facturas]InvoiceRef;arrLInvRef;*)
 SELECTION TO ARRAY([facturas]Date;arrDInvDate;*)
 SELECTION TO ARRAY([Clients]ClientRef;arrLClientRef;*)
  // Execução de instruções diferidas
 SELECTION RANGE TO ARRAY(1;50)
```

#### Ver também 

[ON ERR CALL](on-err-call.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 368 |
| Thread-seguro | &check; |


