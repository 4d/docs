---
id: BlobClass
title: Blob
---

A classe Blob permite que você crie e manipule [objetos blob](../Concepts/dt_blob.md#blob-types) (`4D.Blob`).

### Resumo

|                                                                                                  |
| ------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #4D.Blob.new().Syntax -->](#4dblobnew)<br/><!-- INCLUDE #4D.Blob.new().Summary --> |
| [<!-- INCLUDE #Blob.size.Syntax -->](#size)<br/><!-- INCLUDE #Blob.size.Summary -->              |
| [<!-- INCLUDE #Blob.slice().Syntax -->](#slice)<br/><!-- INCLUDE #Blob.slice().Summary -->       |

## 4D. Blob.new()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R2   | Adicionado |

</details>

<!-- REF #4D.Blob.new().Syntax -->**4D.Blob.new()** : 4D.Blob<br/>**4D.Blob.new**( *blobScal* : Blob ) : 4D.Blob<br/>**4D.Blob.new**( *blobObj* : 4D.Blob ) : 4D.Blob<!-- END REF -->

<!-- REF #4D.Blob.new().Params -->

| Parâmetro  | Tipo                             |                             | Descrição                    |
| ---------- | -------------------------------- | :-------------------------: | ---------------------------- |
| blob       | Blob or 4D. Blob |              ->             | Blob a copiar                |
| Resultados | 4D. Blob         | <- | Novo 4D.Blob |

<!-- END REF -->

#### Descrição

`4D.Blob.new` <!-- REF #4D.Blob.new().Summary -->cria um novo objeto `4D.Blob` que, opcionalmente, encapsula uma cópia dos dados de outro blob (blob escalar ou `4D.Blob`)<!-- END REF -->.

Se o parâmetro `blob` for omitido, o método retornará um 4D.Blob vazio.

## .size

<!-- REF #Blob.size.Syntax -->**.size** : Real<!-- END REF -->

#### Descrição

A propriedade `.size` <!-- REF #Blob.size.Summary -->retorna o tamanho de um `4D.Blob`, expresso em bytes.<!-- END REF -->

## .slice()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R2   | Adicionado |

</details>

<!-- REF #Blob.slice().Syntax -->**.slice()** : 4D.Blob<br/>**.slice**( *start* : Real ) : 4D.Blob<br/>**.slice**( *start* : Real; *end* : Real ) : 4D.Blob<!-- END REF -->

<!-- REF #Blob.slice().Params -->

| Parâmetro  | Tipo                     |                             | Descrição                                                                             |
| ---------- | ------------------------ | :-------------------------: | ------------------------------------------------------------------------------------- |
| start      | Real                     |              ->             | índice do primeiro byte a incluir no novo 4D. Blob\`. |
| end        | Real                     |              ->             | índice do primeiro byte que não será incluído no novo 4D. Blob\`      |
| Resultados | 4D. Blob | <- | Novo `4D.Blob`                                                                        |

<!-- END REF -->

#### Descrição

`.slice()` <!-- REF #Blob.slice().Summary --> cria e retorna um `4D.Blob` que faz referência a dados de um subconjunto do blob no qual é chamado. O blob original não é alterado.<!-- END REF -->

O parâmetro `start` é um índice no blob que indica o primeiro byte a ser incluído no novo `4D.Blob`. Se especificar um valor negativo, 4D trata-o como uma compensação desde o fim da bolha até ao início. Por exemplo, -10 seria o 10º do último byte na bolha. O valor predefinido é 0. Se você especificar um valor para start que seja maior do que o tamanho do blob de origem, o tamanho do `4D.Blob` retornado será 0 e não conterá dados.

O parâmetro end é um índice no blob indicando o primeiro byte que não será incluído no novo 4D. Blob (ou seja, o byte exactamente neste índice não está incluído). Se especificar um valor negativo, 4D trata-o como uma compensação desde o fim da bolha até ao início. Por exemplo, -10 seria o 10º do último byte na bolha. O valor por defeito é o tamanho do blob.

#### Exemplo

```4d
var $myBlob : 4D.Blob

// Armazene texto em um 4D.Blob
CONVERT FROM TEXT("Olá, Mundo!"; "UTF-8"; $myBlob)
$is4DBlob:=OB Instance of($myBlob; 4D.Blob);   //Verdadeiro

$myString:=Convert to text($myBlob; "UTF-8")
// $myString contém "Olá, Mundo!"

// Crie um novo 4D.Blob a partir de $myBlob
$myNewBlob:=$myBlob.slice(0; 5)

$myString:=Convert to text($myNewBlob; "UTF-8")
// $myString contém "Olá"
```
