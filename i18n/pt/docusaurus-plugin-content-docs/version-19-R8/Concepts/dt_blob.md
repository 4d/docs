---
id: blob
title: BLOB
---

Um campo, variável ou expressão BLOB (Binary Large OBject) é uma série contígua de bytes que podem ser tratados como um objeto inteiro, ou cujos bytes podem ser abordados individualmente.

Um BLOB é carregado totalmente na memória. Uma variável BLOB é mantida e existe apenas na memória. Um campo BLOB é carregado na memória desde o disco, como o resto do registro ao que pertence.

Como os outros tipos de campo que podem reter uma grande quantidade de dados (tais como tipo de campo Imagem), os campos BLOB não são duplicados na memória quando um registro for modificado. Consequentemente o resultado devolvido pelos comandos `Old` e `Modified` não é significativo quando for aplicado a um campo BLOB.

## Tipos de Blob

Usando a linguagem 4D, há duas maneiras de lidar com um blob:

- **como um valor escalar**: um blob pode ser armazenado numa variável ou campo Blob e alterado.
- **as an object (`4D. Blob`)**: a `4D. Blob` is a blob object. Pode encapsular um blob ou parte dele num `4D.Blob` sem alterar o blob original. Este método chama-se [boxing](https://en.wikipedia.org/wiki/Object_type_(object-oriented_programming)#Boxing). Para mais informações sobre como instanciar um `4D.Blob`, ver [Blob Class](../API/BlobClass.md).

Cada tipo de blob tem as suas vantagens. Utilize a tabela seguinte para determinar qual se adequa às suas necessidades:

|                                     | Blob | 4D.Blob |
| ----------------------------------- |:----:|:-------:|
| Editável                            | Sim  |   Não   |
| Partilhável em objectos e colecções | Não  |   Sim   |
| Passado por referência\*          | Não  |   Sim   |
| Desempenho ao acessar aos bytes     |  +   |    -    |
| Tamanho máximo                      | 2GB  | Memory  |

\*Diferente dos comandos 4D concebidos para tomar uma bolha escalar como parâmetro, passar um blob escalar para um método duplica-o na memória. Ao trabalhar com métodos, a utilização de objectos blob (`4D.Blob`) é mais eficiente, uma vez que são passados por referência.

> Como padrão, 4D estabelece o tamanho blob máximo para 2GB mas esse limite de tamanho pode ser menor dependendo de seu SO e de quanto espaço estiver disponível.

You cannot use operators on blobs.

## Checking if a variable holds a scalar blob or a `4D. Blob`

Use the [Value type](https://doc.4d.com/4dv19R/help/command/en/page1509.html) command to determine if a value is of type Blob or Object. To check that an object is a blob object (`4D. Blob`), use [OB instance of](https://doc.4d.com/4dv19R/help/command/en/page1731.html):

```4d
var $myBlob: Blob
var $myBlobObject: 4D. Blob
$myBlobObject:=4D. Blob.new()

$type:= Value type($myblobObject) // 38 (object)
$is4DBlob:= OB Instance of($myblobObject; 4D. Blob)  //True
```

## Passing blobs as parameters

Scalar blobs and blob objects can be passed as parameters to 4D commands or plug-in routines that expect blob parameters.

### Passing blobs and blob objects to 4D commands

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

### Passing blobs and blob objects to methods

You can pass blobs and blob objects (`4D. Blob`) to methods. Keep in mind that unlike blob objects, which are passed by reference, scalar blobs are duplicated in memory when passed to methods.

### Passing a scalar blob by reference using a pointer

To pass a scalar blob to your own methods without duplicating it in memory, define a pointer to the variable that stores it and pass the pointer as a parameter.

**Exemplos:**

```4d
// Declare a variable of type Blob
var $myBlobVar: Blob
// Pass the blob as parameter to a 4D command
 SET BLOB SIZE($myBlobVar;1024*1024)
```

```4d
// Pass the blob as parameter to an external routine
 $errCode:=Do Something With This blob($myBlobVar)
```

```4d
// Pass the blob as a parameter to a method that returns a blob
 var $retrieveBlob: Blob
 retrieveBlob:=Fill_Blob($myBlobVar)
```

```4d
// Pass a pointer to the blob as a parameter to your own method, COMPUTE BLOB(->$myBlobVar)
```

**Nota para  desenvolvedores de plugins:** um parâmetro BLOB se declara como "&O" (a letra "O", não o número "0").

## Atribuição de uma variável blob a outra

You can assign a Blob variable to another:

**Exemplo:**

```4d
// Declare two variables of type Blob
 var $vBlobA; $vBlobB : Blob
// Set the size of the first blob to 10K
 SET BLOB SIZE($vBlobA;10*1024)
// Assign the first blob to the second one
 $vBlobB:=$vBlobA
```

## Automatic conversion of blob type

4D automatically converts scalar blobs to blob objects, and vice versa, when they're assigned to each other. Por exemplo:

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

Unlike blob objects, scalar blobs can be altered. Por exemplo:

```4d
var $myBlob : Blob SET BLOB SIZE ($myBlob ; 16*1024)
```

## Individually accessing bytes in a blob

#### Accessing a scalar blob's bytes

You can access individual bytes of a scalar blob using curly brackets `{}`. Within a blob, bytes are numbered from 0 to N-1, where N is the size of the BLOB:

```4d
  // Declare a variable of type Blob
 var $vBlob : Blob
  // Set the size of the blob to 256 bytes
 SET BLOB SIZE($vBlob;256)
  // The following code loops through the blob to set each byte to zero
 For(vByte;0;BLOB size($vBlob)-1)
    $vBlob{vByte}:=0
 End for
```

Since you can address all the bytes of a blob individually, you can store whatever you want in a Blob variable or field.

#### Accessing a `4D. Blob`'s bytes

Use square brackets `[]` to directly access a specific byte in a `4D. Blob`

```4d
var $myBlob: 4D. Blob CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$myText:= BLOB to text ( $myBlob ; UTF8 text without length )
$byte:=$myBlob[5]
```

Since a `4D. Blob` cannot be altered, you can read the bytes of a `4D. Blob` using this syntax, but not modify them.
