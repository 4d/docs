---
id: type
title: Type
slug: /commands/type
displayed_sidebar: docs
---

<!--REF #_command_.Type.Syntax-->**Type** ( *campVar* ) : Integer<!-- END REF-->
<!--REF #_command_.Type.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campVar | Field, Variable | &#8594;  | Campo ou Variável a ser testada |
| Resultado | Integer | &#8592; | Número de tipo de dados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Type.Summary-->O comando Type devolve um valor numérico que indica o tipo do campo ou da variável que passa em *campVar*.<!-- END REF-->

4D ofere as constantes pré-definidas abaixo encontradas no tema *Tipos de campos e variáveis*:

| Constante          | Tipo          | Valor |
| ------------------ | ------------- | ----- |
| Array 2D           | Inteiro longo | 13    |
| Blob array         | Inteiro longo | 31    |
| Boolean array      | Inteiro longo | 22    |
| Date array         | Inteiro longo | 17    |
| Integer array      | Inteiro longo | 15    |
| Is alpha field     | Inteiro longo | 0     |
| Is BLOB            | Inteiro longo | 30    |
| Is Boolean         | Inteiro longo | 6     |
| Is collection      | Inteiro longo | 42    |
| Is date            | Inteiro longo | 4     |
| Is integer         | Inteiro longo | 8     |
| Is integer 64 bits | Inteiro longo | 25    |
| Is longint         | Inteiro longo | 9     |
| Is null            | Inteiro longo | 255   |
| Is object          | Inteiro longo | 38    |
| Is picture         | Inteiro longo | 3     |
| Is pointer         | Inteiro longo | 23    |
| Is real            | Inteiro longo | 1     |
| Is string var      | Inteiro longo | 24    |
| Is subtable        | Inteiro longo | 7     |
| Is text            | Inteiro longo | 2     |
| Is time            | Inteiro longo | 11    |
| Is undefined       | Inteiro longo | 5     |
| Is variant         | Inteiro longo | 12    |
| LongInt array      | Inteiro longo | 16    |
| Object array       | Inteiro longo | 39    |
| Picture array      | Inteiro longo | 19    |
| Pointer array      | Inteiro longo | 20    |
| Real array         | Inteiro longo | 14    |
| String array       | Inteiro longo | 21    |
| Text array         | Inteiro longo | 18    |
| Time array         | Inteiro longo | 32    |

Se pode aplicar a função Type a campos, variáveis interprocesso, variáveis processo, variáveis locais e ponteiros sem referência para esses tipos de objetos. Pode aplicar **Type** aos parâmetros *($1, $2 ... ${...})* de um método de projeto ou ao resultado da função *($0)*.

**Nota:** 

* Não se pode aplicar a função **Type** a expressões escalares tais como propriedades de objeto (*emp.name*) ou itens coleção (*myColl\[5\]*). Para fazer isso, deve usar o comando [Value type](value-type.md)
* Em modo compilado, chamar **Type** em um parâmetro método ($0, $1...) declarado como [C\_VARIANT](c-variant.md) não retorna Is variante sim o tipo de dados (mesma coisa que chamar [Value type](value-type.md))

#### Exemplo 1 

O método de projeto a seguir apaga uma parte ou a totalidade dos campos do registro atual da tabela a qual aponta o ponteiro passado como parâmetro. Faz isto sem apagar ou modificar o registro atual: 

```4d
  // Método de projeto APAGAR REGISTRO
  // APAGAR REGISTRO ( Ponteiro {; Inteiro longo } )
  // APAGAR REGISTRO ( -> [Tabela] { ; Tipo de valores } )
 var $1 : Pointer
 var $2;$vlTipoVal : Integer
 If(Count parameters>=2)
    $vlTipoVal:=$2
 Else
    $vlTipoVal:=0xFFFFFFFF
 End if
 For($vlCampo;1;Count fields($1))
    $vpCampo:=Field(Table($1);$vlCampo)
    $vlTipoCampo:=Type($vpCampo->)
    If($vlTipoVal??$vlTipoCampo )
       Case of
          :(($vlTipoCampo =Is alpha field)|($vlTipoCampo =Is text))
             $vpCampo->:=""
          :(($vlTipoCampo =Is real)|($vlTipoCampo=Is integer)|($vlTipoCampo =Is longint))
             $vpCampo->:=0
          :($vlTipoCampo =Is date)
             $vpCampo->:=!00/00/00!
          :($vlTipoCampo =Is time)
             $vpCampo->:=?00:00:00?
          :($vlTipoCampo =Is Boolean)
             $vpCampo->:=False
          :($vlTipoCampo =Is picture)
             var $vgImagemVaxia : Picture
             $vpCampo->:=$vgImagemVazia
          :($vlTipoCampo =Is subtable)
             Repeat
                ALL SUBRECORDS($vpCampo->)
                DELETE SUBRECORD($vpCampo->)
             Until(Records in subselection($vpCampo->)=0)
          :($vlTipoCampo =Is BLOB)
             SET BLOB SIZE($vpCampo->;0)
       End case
    End if
 End for
```

Depois de implementar este método de projeto em seu banco de dados, pode escrever:

```4d
  // Apagar todo o registro atual da tabela [Coisas a fazer]
 APAGAR REGISTRO(->[Coisas a fazer])
  // Apagar os campos de tipo Texto, BLOB e Imagem do registro atual da tabela [Coisas a fazer]
 APAGAR REGISTRO(->[Coisas a fazer];0?+Is text?+Is BLOB?+Is picture)
  // Apagar a totalidade do registro atual da tabela [Coisas a fazer] exceto os campos Alfa
 APAGAR REGISTRO(->[Coisas a fazer];-1?-Is alpha field)
```

#### Exemplo 2 

Em alguns casos, por exemplo quando se escreve código genérico, pode necessitar saber se um array é um array normal independente ou uma "fila" de um array 2D. Neste caso, pode utilizar o código a seguir:  

```4d
 ptrmeuArr:=->meuArr{6} // É meuArr{6} a fila de um array 2D?
 RESOLVE POINTER(ptrmeuArr;varNome;numTabela;numCamp)
 If(varNome#"")
    $ptr:=Get pointer(varNome)
    $eltipo:=Type($ptr->)
  // Se meuArr{6} é uma fila de um array 2D, $otipo é igual a 13
 End if
```

#### Exemplo 3 

Ver exemplo do comando [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD").

#### Ver também 

[Is a variable](is-a-variable.md)  
[Undefined](undefined.md)  
[Value type](value-type.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 295 |
| Thread-seguro | &check; |
| Proibido no servidor ||


