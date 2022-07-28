---
id: Document
title: Document Class
---

## Descrição


<!-- REF document.creationDate.Desc -->
## .creationDate

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.creationDate.Syntax -->
**.creationDate** : Date<!-- END REF -->


#### Descrição

A propriedade `.creationDate` retorna<!-- REF #document.creationDate. Summary -->a data de criação do arquivo<!-- END REF -->.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->
 
 
 <!-- REF document.creationTime.Desc -->
## .creationTime

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.creationTime.Syntax -->
**.creationTime** : Time<!-- END REF -->


#### Descrição

A propriedade `.creationTime` retorna<!-- REF #document.creationTime. Summary -->a hora de criação do arquivo<!-- END REF --> (expresso como número de segundos a partir de 00:00).

Essa propriedade é**apenas leitura**. 

<!-- END REF -->




<!-- REF document.exists.Desc -->
## .exists

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.exists.Syntax -->
**.exists** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.exists` retorna<!-- REF #document.exists. Summary -->true se o arquivo existir no disco<!-- END REF -->, senão false.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->





<!-- REF document.extension.Desc -->

## .extension

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.extension.Syntax -->
**.extension** : Text<!-- END REF -->

#### Descrição

A propriedade `.extension` retorna<!-- REF #document.extension. Summary -->a extensão do nome do arquivo (se houver)<!-- END REF -->. An extension always starts with ".". The property returns an empty string if the file name does not have an extension.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->





<!-- REF document.fullName.Desc -->
## .fullName

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.fullName.Syntax -->
**.fullName** : Text<!-- END REF -->

#### Descrição

A propriedade `.fullName` retorna<!-- REF #document.fullName. Summary -->o nome completo do arquivo, incluindo a extensão (se houver)<!-- END REF -->.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->




<!-- REF document.hidden.Desc -->
## .hidden

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.hidden.Syntax -->
**.hidden** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.hidden` devolve <!-- REF #document.hidden.Summary -->true se a pasta estiver como "escondida" ao nível do sistema<!-- END REF -->, e falso em caso contrário.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->




<!-- REF document.isAlias.Desc -->
## .isAlias

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.isAlias.Syntax -->
**.isAlias** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.isAlias` devolve <!-- REF #document.isAlias.Summary -->true se o arquivo for um alias, um atalho ou um link simbólico<!-- END REF -->, e falso em caso contrário.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->



<!-- REF document.isFile.Desc -->
## .isFile

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.isFile.Syntax -->
**.isFile** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.isFile` retorna<!-- REF #document.isFile. Summary -->sempre true para um arquivo<!-- END REF -->.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->



<!-- REF document.isFolder.Desc -->
## .isFolder

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.isFolder.Syntax -->
**.isFolder** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.isFolder` retorna<!-- REF #document.isFolder. Summary -->sempre false para um arquivo<!-- END REF -->.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->




<!-- REF document.isWritable.Desc -->
## .isWritable

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.isWritable.Syntax -->
**.isWritable** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.isWritable` retorna <!-- REF #document.isWritable.Summary -->true se o arquivo existir em disco e é editável<!-- END REF -->.
> The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the *writable* attribute of the file.

Essa propriedade é**apenas leitura**.

**Exemplo**

```4d
 $myFile:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 If($myFile.isWritable)
    $myNewFile:=$myFile.setText("Added text")
 End if
```

<!-- END REF -->




<!-- REF document.modificationDate.Desc -->
## .modificationDate

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.modificationDate.Syntax -->
**.modificationDate** : Date<!-- END REF -->


#### Descrição

A propriedade `.modificationDate` retorna <!-- REF #document.modificationDate.Summary -->a data da última modificação do arquivo<!-- END REF -->.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->




<!-- REF document.modificationTime.Desc -->
## .modificationTime

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.modificationTime.Syntax -->
**.modificationTime** : Time<!-- END REF -->


##### Descrição

A propriedade `.modificationTime` retorna<!-- REF #document.modificationTime. Summary -->o tempo da última modificação do arquivo<!-- END REF --> (expresso como um número de segundos começando às 00:00).

Essa propriedade é**apenas leitura**. 

<!-- END REF -->



<!-- REF document.name.Desc -->
## .name

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.name.Syntax -->
**.name** : Text<!-- END REF -->


#### Descrição

A propriedade `.name` retorna <!-- REF #document.name.Summary -->o nome do arquivo sem extensão (se houver)<!-- END REF -->.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->


<!-- REF document.original.Desc -->
## .original

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.original.Syntax -->
**.original** : 4D. File<br>**.original** : 4D. Folder<!-- END REF -->


#### Descrição

A propriedade `.original` retorna <!-- REF #document.original.Summary -->o elemento de destino para um alias, um atalho, ou um arquivo de link simbólico<!-- END REF -->. The target element can be:

*   a file object
*   a folder object

For non-alias files, the property returns the same file object as the file.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->




<!-- REF document.parent.Desc -->
## .parent

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.parent.Syntax -->
Essa propriedade é**apenas leitura**.<!-- END REF -->


#### Descrição

A propriedade `.parent` retorna <!-- REF #document.parent.Summary -->o objeto da pasta pai do arquivo<!-- END REF -->. A função `.folder()`<!-- REF #directory.folder().</p>

Essa propriedade é**apenas leitura**. 

<!-- END REF --><!-- REF document.path.Desc -->
## .path

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.path.Syntax -->
**.path** : Text<!-- END REF -->


#### Descrição

A propriedade `.path` retorna <!-- REF #document.path.Summary -->o caminho POSIX do arquivo<!-- END REF -->. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->



<!-- REF document.platformPath.Desc -->
## .platformPath

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.platformPath.Syntax -->
**.platformPath** : Text<!-- END REF -->


#### Descrição

A propriedade `.platformPath` retorna <!-- REF #document.platformPath.Summary -->o caminho do arquivo expresso com a sintaxe atual da plataforma<!-- END REF -->.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->




<!-- REF document.size.Desc -->
## .size

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.size.Syntax -->
**.size** : Real<!-- END REF -->


#### Descrição

A propriedade `.size` retorna <!-- REF #document.size.Summary -->o tamanho do arquivo expresso em bytes<!-- END REF -->. If the file does not exist on disk, the size is 0.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->










<!-- REF document.copyTo().Desc -->
## .copyTo()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.copyTo().Syntax -->
**.copyTo**( *destinationFolder* : 4D. Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D. File<!-- END REF -->

<!-- REF #document.copyTo().Params -->
| Parameter         | Type       |    | Descrição                                              |
| ----------------- | ---------- |:--:| ------------------------------------------------------ |
| destinationFolder | 4D. Folder | -> | Pasta de destino                                       |
| newName           | Texto      | -> | Nome para a copia                                      |
| overwrite         | Integer    | -> | `fk overwrite` para substituir os elementos existentes |
| Resultado         | 4D. File   | <- | Arquivo copiado                                        |
<!-- END REF -->


#### Descrição

A função `.copyTo()` <!-- REF #document.copyTo().Summary -->copia o objeto do arquivo `` para o objeto de destino  especificado*destinationFolder* <!-- END REF -->.

A *destinationFolder* deve existir em disco, senão um erro é gerado.

Como padrão, o arquivo é copiado com o nome do arquivo original. Se quiser renomear a cópia, passe o novo nome no parâmetro *newName* . O novo nome deve cumprir com as regras de nomenclatura (por exemplo, não deve conter caracteres como ":", "/", etc.), do contrário se devolve um erro.

Se já existir um arquivo com o mesmo nome em *destinationFolder*, por padrão 4D gera um erro. Pode passar a constante `fk overwrite` no parâmetro *overwrite* para ignorar e sobrescriber o arquivo existente

| Constante      | Value | Comentário                          |
| -------------- | ----- | ----------------------------------- |
| `fk overwrite` | 4     | Overwrite existing elements, if any |


**Returned value**

O objeto `File` copiado.

#### Exemplo

Se quiser copiar um *arquivo* Imagem da pasta de documentos do usuário a pasta da aplicação:

```4d
var $source; $copy : Object
$source:=Folder(fk documents folder).file("Pictures/photo.png")
$copy:=$source.copyTo(Folder("/PACKAGE");fk overwrite)
```

 <!-- END REF -->



<!-- REF document.getContent().Desc -->
## .getContent()

<details><summary>Histórico</summary>
| Versão | Mudanças         |
| ------ | ---------------- |
| v19 R2 | Returns 4D. Blob |
| v17 R5 | Adicionado       |
</details>

<!-- REF #document.getContent().Syntax -->
**.getContent( )** : 4D. Blob<!-- END REF -->

<!-- REF #document.getContent().Params -->
| Parameter | Type     |    | Descrição           |
| --------- | -------- | -- | ------------------- |
| Resultado | 4D. Blob | <- | Conteúdo do arquivo |
<!-- END REF -->


#### Descrição

The `.getContent()` function<!-- REF #document.getContent(). Summary -->returns a `4D. Blob` object containing the entire content of a file<!-- END REF -->. Para informações sobre BLOBs, consultar a secção [BLOB](Concepts/dt_blob.md) .

**Returned value**

A `4D. Blob` object.

#### Exemplo

Para salvar o conteúdo de um documento em um campo `BLOB`:

```4d
 var $vPath : Text
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
```

<!-- END REF -->



<!-- REF document.getIcon().Desc -->
## .getIcon()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.getIcon().Syntax -->
**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->

<!-- REF #document.getIcon().Params -->
| Parameter | Type    |    | Descrição                                       |
| --------- | ------- | -- | ----------------------------------------------- |
| size      | Integer | -> | Longitude de lado da imagem devolvida (píxeles) |
| Resultado | Imagem  | <- | Ícone                                           |
<!-- END REF -->


#### Descrição

A função `.getIcon()` retorna <!-- REF #document.getIcon().Summary -->o ícone do arquivo<!-- END REF -->.

O parâmetro opcional *size* especifica as dimensões em píxels do icone devolvido. Este valor representa em realidade a longitude do lado do quadrado que contém o icone. Icones são geralmente definidos como 32x32 píxels ('icones grandes') ou 16x16 ('icones pequenos'). Se passar 0 ou omitir este parâmetro, se devolve a versão 'icone grande'

Se o arquivo não existir no disco, um ícone em branco padrão será retornado.

**Returned value**

Ícone de arquivo [imagem](../Concepts/picture.html).



<!-- END REF -->



<!-- REF document.getText().Desc -->
## .getText()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #document.getText().Syntax -->
**.getText**( { *charSetName* : Text { ; *breakMode* : Integer } } ) : Text<br>**.getText**( { *charSetNum* : Integer { ; *breakMode* : Integer } } ) : Text<!-- END REF -->


<!-- REF #document.getText().Params -->
| Parameter   | Type    |    | Descrição                                   |
| ----------- | ------- | -- | ------------------------------------------- |
| charSetName | Texto   | -> | Nome do conjunto de caracteres              |
| charSetNum  | Integer | -> | Número de conjuntos de caracteres           |
| breakMode   | Integer | -> | Modo de processamento para quebras de linha |
| Resultado   | Texto   | <- | Texto do documento                          |
<!-- END REF -->


#### Descrição
A função `.getText()` <!-- REF #document.getText().Summary -->retorna o conteúdo do arquivo como texto <!-- END REF -->.

Opcionalmente, você pode designar o conjunto de caracteres a ser usado na leitura do conteúdo. Você pode passar também:

- in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or "UTF-8"),
- or in *charSetNum*, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.

Se o documento contiver uma nota de ordem de byte (BOM), 4D usa o conjunto de caracteres que definiu em vez do especificado no *charSetName* ou *charSetNum* (este parâmetro é então ignorado). Se o documento não contiver uma LDM e se o *charSetName* ou *charSetNum* for omitido, por padrão 4D usa o conjunto de caracteres "UTF-8".

Em *breakMode*, você pode passar um número indicando o processamento a aplicar aos caracteres de fim de linha no documento. As seguintes constantes do tema "Documentos do Sistema" estão disponíveis:

| Constante                     | Value | Comentário                                                                                                                                                                     |
| ----------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Document unchanged`          | 0     | Não processado                                                                                                                                                                 |
| `Document with native format` | 1     | (Padrão) As quebras de linha são convertidas para o formato nativo do sistema operacional: CR (retorno de carro) sob OS X, CRLF (retorno do carro + salto de linha) em Windows |
| `Documento com CRLF`          | 2     | Quebras de linha são convertidas em formato Windows: CRLF (retorno de carro + quebra de linha)                                                                                 |
| `Documento com CR`            | 3     | Quebras de linha são convertidas para o formato OS X: CR (retorno de carro)                                                                                                    |
| `Documento com LF`            | 4     | Quebras de linha são convertidas em formato Unix: LF (feed de linha)                                                                                                           |

Por padrão, ao omitir o parâmetro *breakMode* , as quebras de linha são processadas no modo nativo (1).

**Returned value**

Texto do arquivo.

#### Exemplo

Dado o seguinte documento de texto (os campos são separados por tabulações):

```4d
id name price vat
3 thé 1.06€ 19.6
2 café 1.05€ 19.6
```

Quando você executar este código:


```4d
 $myFile:=Folder(fk documents folder).file("Billing.txt") //UTF-8 by default
 $txt:=$myFile.getText()
```
... you get the following for `$txt`:

"id\tname\tprice\tvat\r\n3\tthé\t1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"

with `\t` (tab) as separator and `\r\n` (CRLF) as line delimiter.

Here is another example with the same file, but a different line delimiter:

```4d
 $txt:=$myFile.getText("UTF-8", Document with LF)
```
In this case, the contents of `$txt` are as follows:

"id\tname\tprice\tvat\n3\tthé\t1.06€\t19.6\n2\tcafé\t1.05€\t19.6"

This time `\n` (LF) is used as line delimiter.



<!-- END REF -->
 
 



