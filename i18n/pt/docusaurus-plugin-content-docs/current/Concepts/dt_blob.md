---
id: blob
title: BLOB
---

Para passar um BLOB a seus próprios métodos, pode também definir um ponteiro ao BLOB e passar o ponteiro como um parâmetro.

Um BLOB é carregado totalmente na memória. Uma variável BLOB é mantida e existe apenas na memória. Um campo BLOB é carregado na memória desde o disco, como o resto do registro ao que pertence.

Como os outros tipos de campo que podem reter uma grande quantidade de dados (tais como tipo de campo Imagem), os campos BLOB não são duplicados na memória quando um registro for modificado. Consequentemente o resultado devolvido pelos comandos `Old` e `Modified` não é significativo quando for aplicado a um campo BLOB.

## Tipos de Blob

Usando a linguagem 4D, há duas maneiras de lidar com um blob:

- **como um valor escalar**: um blob pode ser armazenado numa variável ou campo Blob e alterado.
- **as an object (`4D. Blob`)**: a `4D. Blob` is a blob object. Pode encapsular um blob ou parte dele num `4D. Blob` sem alterar o blob original. Este método chama-se [boxing](https://en.wikipedia.org/wiki/Object_type_(object-oriented_programming)#Boxing). Para mais informações sobre como instanciar um `4D. Blob`, ver [Blob Class](../API/BlobClass.md).

Cada tipo de blob tem as suas vantagens. Utilize a tabela seguinte para determinar qual se adequa às suas necessidades:

|                                     | Blob | 4D. Blob |
| ----------------------------------- |:----:|:--------:|
| Editável                            | Sim  |   Não    |
| Partilhável em objectos e colecções | Não  |   Sim    |
| Passado por referência\*          | Não  |   Sim    |
| Desempenho ao acessar aos bytes     |  +   |    -     |
| Tamanho máximo                      | 2GB  | Memória  |

\*Diferente dos comandos 4D concebidos para tomar uma bolha escalar como parâmetro, passar um blob escalar para um método duplica-o na memória. Ao trabalhar com métodos, a utilização de objectos blob (`4D. Blob`) é mais eficiente, uma vez que são passados por referência.

> Como padrão, 4D estabelece o tamanho blob máximo para 2GB mas esse limite de tamanho pode ser menor dependendo de seu SO e de quanto espaço está disponível.

Entretanto, nenhum operador pode ser aplicado aos BLOBs.

## Verificar se uma variável contém um blob escalar ou um `4D. Blob`

Utilizar o comando [Value type](https://doc.4d.com/4dv19R/help/command/en/page1509.html) para determinar se um valor é do tipo Blob ou Objeto. To check that an object is a blob object (`4D. Blob`), use [OB instance of](https://doc.4d.com/4dv19R/help/command/en/page1731.html):

```4d
` Declare a variable of type BLOB
 C_BLOB(anyBlobVar)
  ` The BLOB is passed as parameter to a 4D command
 SET BLOB SIZE(anyBlobVar;1024*1024)
  ` The BLOB is passed as parameter to an external routine
 $errCode:=Do Something With This BLOB(anyBlobVar)
  ` The BLOB is passed as a parameter to a method that returns a BLOB
 C_BLOB(retrieveBlob)
 retrieveBlob:=Fill_Blob(anyBlobVar)
  ` A pointer to the BLOB is passed as parameter to a user method
 COMPUTE BLOB(->anyBlobVar)
```

## Passagem de blobs como parâmetros

Os BLOBs em 4D podem ser passados como parâmetros aos comandos 4D ou às rotinas dos plugins que esperam parâmetros BLOB.

### Passagem de blobs e objectos blob para comandos 4D

You can pass a scalar blob or a `4D. Blob` to any 4D command that takes a blob as a parameter:

```4d
var $myBlob: 4D. Blob CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$myText:= BLOB to text( $myBlob ; UTF8 text without length )
```

Some 4D commands alter the original blob, and thus do not support the `4D. Blob` type:

- [DELETE FROM BLOB](https://doc.4d.com/4dv19/help/command/en/page560.html)
- [INSERT IN BLOB](https://doc.4d.com/4dv19/help/command/en/page559.html)
- [INTEGER TO BLOB](https://doc.4d.com/4dv19/help/command/en/page548.html)
- [LONGINT TO BLOB](https://doc.4d.com/4dv19/help/command/en/page550.html)
- [REAL TO BLOB](https://doc.4d.com/4dv19/help/command/en/page552.html)
- [SET BLOB SIZE](https://doc.4d.com/4dv19/help/command/en/page606.html)
- [TEXT TO BLOB](https://doc.4d.com/4dv19/help/command/en/page554.html)
- [VARIABLE TO BLOB](https://doc.4d.com/4dv19/help/command/en/page532.html)
- [LIST TO BLOB](https://doc.4d.com/4dv19/help/command/en/page556.html)
- [SOAP DECLARATION](https://doc.4d.com/4dv19/help/command/en/page782.html)
- [WEB SERVICE SET PARAMETER](https://doc.4d.com/4dv19/help/command/en/page777.html)

### Passagem de blobs e objectos blob para métodos

You can pass blobs and blob objects (`4D. Blob`) to methods. Tenha em mente que, ao contrário dos objectos blob, que são passados por referência, as blobs escalares são duplicadas na memória quando são passadas para métodos.

### Passar um blob escalar por referência usando um ponteiro

Para passar um blob escalar aos seus próprios métodos sem  duplicar na memória, defina um ponteiro para a variável que o armazena e passe o ponteiro como um parâmetro.

**Exemplos:**

```4d
` Declarar uma variável de tipo BLOB
 C_BLOB(vBlob)
  ` Estabelece o tamanho do BLOB para 256 bytes
 SET BLOB SIZE(vBlob;256)
  ` O loop abaixo inicia os 256 bytes do BLOB para zero
 For(vByte;0;BLOB size(vBlob)-1)
    vBlob{vByte}:=0
 End for
```

```4d
// Passar o blob como parâmetro para uma rotina externa
 $errCode:=Fazer algo com este blob($myBlobVar)
```

```4d
// Passe o blob como parâmetro para um método que devolve um blob
 var $retrieveBlob: Blob
 retrieveBlob:=Fill_Blob($myBlobVar)
```

```4d
// Passe um ponteiro para o blob como parâmetro do seu próprio método, COMPUTE BLOB(->$myBlobVar)
```

**Nota para  desenvolvedores de plugins:** um parâmetro BLOB se declara como "&O" (a letra "O", não o número "0").

## Atribuição de uma variável blob a outra

É possível atribuir uma variável Blob a outra:

**Exemplo:**

```4d
` Declara duas variáveis de tipo BLOB
 C_BLOB(vBlobA;vBlobB)
  ` Estabelece o tamanho do primeiro  BLOB a 10K
 SET BLOB SIZE(vBlobA;10*1024)
  ` Atribui o primeiro BLOB ao segundo
 vBlobB:=vBlobA
```

## Conversão automática do tipo blob

4D converte automaticamente as bolhas escalares em objectos de bolhas, e vice-versa, quando são atribuídas umas às outras. Por exemplo:

```4d
// Create a variable of type Blob and an object variable
var $myBlob: Blob
var $myObject : Object

// Assign that blob to a property of $myObject named "blob"
$myObject:=New object("blob"; $myBlob)

// The blob stored in $myBlob is automatically converted to a 4D. Blob
$type:= OB Instance of($myObject.blob; 4D. Blob)  //True

// Conversion from 4D. Blob to Blob
$myBlob:= $myObject.blob
$type:= Value type($myBlob) // Blob
```

> When converting a `4D. Blob` to a scalar blob, if the size of the `4D. Blob` exceeds the maximum size for scalar blobs, the resulting scalar blob is empty. For example, when the maximum size for scalar blobs is 2GB, if you convert a `4D. Blob` of 2.5GB to a scalar blob, you obtain an empty blob.

## Modificação de um blob escalar

Ao contrário dos objectos com blobs, as blobs escalares podem ser alteradas. Por exemplo:

```4d
var $myBlob : Blob SET BLOB SIZE ($myBlob ; 16*1024)
```

## Acesso individual a bytes num blob

#### Acesso aos bytes de um blob escalar

Cada byte de um BLOB pode ser dirigido individualmente utilizando os símbolos de colchetes {...}. Dentro de um BLOB, os bytes são numerados de 0 a N-1, onde N é o tamanho do BLOB.

```4d
  Pode atribuir BLOBS um para o outro.
```

Como todos os bytes de um BLOB podem ser direcionados de forma individual, é possível armazenar o que quiser em um campo ou variável BLOB.

#### Acesso a um `4D. Blob`'s bytes

Utilizar parênteses rectos `[]` para aceder directamente a um byte específico num `4D. Blob`

```4d
var $myBlob: 4D. Blob CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$myText:= BLOB to text ( $myBlob ; UTF8 text without length )
$byte:=$myBlob[5]
```

`4D.Blob` não pode ser alterado, pode-se ler os bytes de um `4D.Blob` usando esta sintaxe, mas não modificá-los.
