---
id: blob
title: BLOB
---

Para passar um BLOB a seus próprios métodos, pode também definir um ponteiro ao BLOB e passar o ponteiro como um parâmetro.

Um BLOB é carregado totalmente na memória. Uma variável BLOB é mantida e existe apenas na memória. Um campo BLOB é carregado na memória desde o disco, como o resto do registro ao que pertence.

Como os outros tipos de campo que podem reter uma grande quantidade de dados (tais como tipo de campo Imagem), os campos BLOB não são duplicados na memória quando um registro for modificado. Por consiguiente, el resultado devuelto por los comandos `Old` y `Modified` no es significativo cuando se aplica a un campo blob.

## Tipos de Blob

Usando a linguagem 4D, há duas maneiras de lidar com um blob:

- **como un valor escalar**: un blob puede ser almacenado en una variable o un campo Blob y puede ser modificado.
- **como un objeto (`4D.Blob`)**: un `4D.Blob` es un objeto blob. Puede encapsular un blob o una parte de él en un `4D.Blob` sin alterar el bloque original. Este método se chama [boxing](https://en.wikipedia.org/wiki/Object_type_\(object-oriented_programming\)#Boxing). Para más información sobre cómo instanciar un `4D.Blob`, vea [Blob Class](../API/BlobClass.md).

Cada tipo de blob tem as suas vantagens. Utilize a tabela seguinte para determinar qual se adequa às suas necessidades:

|                                     | Blob | 4D. Blob |
| ----------------------------------- | :--: | :----------------------: |
| Editável                            |  Sim |            Não           |
| Partilhável em objectos e colecções |  Não |            Sim           |
| Passado por referência\*            |  Não |            Sim           |
| Desempenho ao acessar aos bytes     |   +  |             -            |
| Tamanho máximo                      |  2GB |          Memória         |

\*Diferente dos comandos 4D concebidos para tomar uma bolha escalar como parâmetro, passar um blob escalar para um método duplica-o na memória. Puede pasar blobs y objetos blob (`4D.Blob`) a los métodos.

> Como padrão, 4D estabelece o tamanho blob máximo para 2GB mas esse limite de tamanho pode ser menor dependendo de seu SO e de quanto espaço está disponível.

Entretanto, nenhum operador pode ser aplicado aos BLOBs.

## Verificar si una variable contiene un blob escalar o un `4D.Blob`

Utilice el comando [Value type](https://doc.4d.com/4dv20/help/command/en/page1509.html) para determinar si un valor es de tipo Blob u Objeto.
Para verificar que un objeto es un objeto blob (`4D.Blob`), utilice [instancia OB de](https://doc.4d.com/4dv20/help/command/en/page1731.html):

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
 COMPUTE BLOB(-&gt;anyBlobVar)
```

## Passagem de blobs como parâmetros

Os BLOBs em 4D podem ser passados como parâmetros aos comandos 4D ou às rotinas dos plugins que esperam parâmetros BLOB.

### Passagem de blobs e objectos blob para comandos 4D

Puede pasar un blob escalar o un `4D.Blob` a todo comando 4D que tome un blob como parámetro:

```4d
var $myBlob: 4D. Blob CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$myText:= BLOB to text( $myBlob ; UTF8 text without length )
```

Algunos comandos 4D modifican el blob, y por lo tanto no soportan el tipo `4D.Blob`:

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

Al trabajar con métodos, usar objetos blob (`4D.Blob`) es más eficiente, ya que son pasados por referencia. Tenha em mente que, ao contrário dos objectos blob, que são passados por referência, as blobs escalares são duplicadas na memória quando são passadas para métodos.

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
// Pasa un puntero al blob como parámetro a su propio método,
COMPUTE BLOB(->$myBlobVar)
```

**Nota para los desarrolladores de plugins:** un parámetro BLOB se declara como "&O" (la letra "O", no el dígito "0").

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

> Al convertir un `4D.Blob` a un blob escalar, si el tamaño del `4D.Blob` excede el tamaño máximo para los blobs escalares, el blob escalar resultante está vacío.
> Por ejemplo, cuando el tamaño máximo para los blobs escalares es 2GB, si convierte un `4D.Blob` de 2,5GB a un blob, obtiene un blob vacío.

## Modificação de um blob escalar

Ao contrário dos objectos com blobs, as blobs escalares podem ser alteradas. Por exemplo:

```4d
var $myBlob : Blob SET BLOB SIZE ($myBlob ; 16*1024)
```

## Acesso individual a bytes num blob

#### Acesso aos bytes de um blob escalar

Puede acceder a los bytes individuales de un blob escalar utilizando las llaves `{}`. Dentro de um BLOB, os bytes são numerados de 0 a N-1, onde N é o tamanho do BLOB.

```4d
  // Declara uma variável do tipo Blob
 var $vBlob : Blob
  // Define o tamanho do blob para 256 bytes
 SET BLOB SIZE($vBlob;256)
  // O código a seguir percorre o blob para definir cada byte como zero
  For(vByte;0;BLOB size($vBlob)-1)
    $vBlob{vByte}:=0
 End for
```

Como todos os bytes de um BLOB podem ser direcionados de forma individual, é possível armazenar o que quiser em um campo ou variável BLOB.

#### Acceder a los bytes de un `4D.Blob`

Utilice los corchetes `[]` para acceder directamente a un byte específico en un `4D.Blob`

```4d
var $myBlob: 4D. Blob CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$myText:= BLOB to text ( $myBlob ; UTF8 text without length )
$byte:=$myBlob[5]
```

Dado que un `4D.Blob` no puede ser modificado, puede leer los bytes de un `4D.Blob` utilizando esta sintaxis, pero no modificarlos.
