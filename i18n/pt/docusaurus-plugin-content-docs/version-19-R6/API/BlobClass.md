---
id: BlobClass
title: Blob
---

A classe Blob permite-lhe criar e manipular [objectos blob](../Concepts/dt_blob.md#blob-types) (`4D.Blob`).

### Resumo

|                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.Blob.new().Syntax -->](#4dblobnew)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.Blob.new().Summary -->|
| [<!-- INCLUDE #Blob.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #Blob.size.Summary -->|
| [<!-- INCLUDE #Blob.slice().Syntax -->](#slice)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #Blob.slice().Summary -->|

## 4D.Blob.new()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R2 | Adicionado |

</details>

<!-- REF #4D.Blob.new().Syntax -->

**4D.Blob.new()** : 4D.Blob<br/>**4D.Blob.new**( *blobScal* : Blob ) : 4D.Blob<br/>**4D.Blob.new**( *blobObj* : 4D.Blob ) : 4D.Blob<!-- END REF -->

<!-- REF #4D.Blob.new().Params -->

| Parâmetros | Tipo            |    | Descrição                                |
| ---------- | --------------- |:--:| ---------------------------------------- |
| blob       | Blob or 4D.Blob | -> | Blob a copiar                            |
| Resultados | 4D.Blob         | <- | Novo 4D.Blob |<!-- END REF -->

|

#### Descrição

`4D.Blob.new` <!-- REF #4D.Blob.new().Summary -->cria um novo objecto `4D.Blob` opcionalmente encapsulando uma cópia dos dados de outro blob (blob escalar ou `4D.Blob`)<!-- END REF -->.

Se o parâmetro `blob` for omitido, o método devolve um 4D.Blob vazio.

## .size

<!-- REF #Blob.size.Syntax -->

**.size** : Real<!-- END REF -->

#### Descrição

A propriedade `.size` <!-- REF #Blob.size.Summary -->devolve o tamanho de um `4D.Blob`, expresso em bytes.<!-- END REF -->

## .slice()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R2 | Adicionado |

</details>

<!-- REF #Blob.slice().Syntax -->

**.slice()** : 4D. Blob<br/>**.slice**( *start* : Real ) : 4D. Blob<br/>**.slice**( *start* : Real; *end* : Real ) : 4D. Blob<!-- END REF -->

<!-- REF #Blob.slice().Params -->
| Parâmetros | Tipo    |    | Descrição                                                       |
| ---------- | ------- |:--:| --------------------------------------------------------------- |
| start      | Real    | -> | índice do primeiro byte a incluir no novo `4D.Blob`.            |
| end        | Real    | -> | índice do primeiro byte que não será incluído no novo `4D.Blob` |
| Resultados | 4D.Blob | <- | Novo `4D.Blob`|<!-- END REF -->

|

#### Descrição

`.slice()` <!-- REF #Blob.slice().Summary --> cria e devolve um `4D.Blob` que refere dados de um subconjunto do blob sobre o qual é chamado. A bolha original não é alterada.<!-- END REF -->

O parâmetro `start` é um índice no blob indicando o primeiro byte a ser incluído no novo `4D.Blob`. Se especificar um valor negativo, 4D trata-o como uma compensação desde o fim da bolha até ao início. Por exemplo, -10 seria o 10º do último byte na bolha. Valor normal padrão é 0 Se especificar um valor para início maior do que o tamanho do blob da fonte, o tamanho do blob devolvido `4D.Blob`'s é 0, e não contém dados.

O parâmetro `end` é um índice no blob indicando o primeiro byte que não será incluído no novo `4D.Blob` (ou seja, o byte exactamente neste índice não está incluído). Se especificar um valor negativo, 4D trata-o como uma compensação desde o fim da bolha até ao início. Por exemplo, -10 seria o 10º do último byte na bolha. O valor por defeito é o tamanho do blob.

#### Exemplo

```4d
var $myBlob : 4D. Blob

// Store text in a 4D. Blob CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$is4DBlob:=OB Instance of($myBlob; 4D. Blob);   //True

$myString:=Convert to text($myBlob; "UTF-8")
// $myString contains "Hello, World!"

// Criar um novo 4D.Blob de $myBlob
$myNewBlob:=$myBlob.slice(0; 5)

$myString:=Converter para texto($myNewBlob; "UTF-8")
// $myString contém "Olá"
```
