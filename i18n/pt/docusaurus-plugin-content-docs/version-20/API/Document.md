---
id: Document
title: Document Class
---

## Descrição

<!-- REF document.creationDate.Desc -->
## .creationDate

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.creationDate.Syntax -->**.creationDate** : Date<!-- END REF -->

#### Descrição

A propriedade `.aceita a transação` devolve <!-- REF #document.creationDate.Summary -->A propriedade `.modificationDate` devolve<!-- END REF -->.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

<!-- REF document.creationTime.Desc -->
## .creationTime

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.creationTime.Syntax -->**.creationTime** : Time<!-- END REF -->

#### Descrição

A propriedade `.creationTime` devolve <!-- REF #document.creationTime.Summary -->a hora da criação do arquivo<!-- END REF --> (expresso como um número de segundos a partir das 00:00).

Essa propriedade é **apenas leitura**.

<!-- END REF -->

<!-- REF document.exists.Desc -->
## .exists

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.exists.Syntax -->**.exists** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.exists` devolve <!-- REF #document.exists.Summary -->true se o ficheiro existir em disco<!-- END REF -->e false de outra forma.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

<!-- REF document.extension.Desc -->

## .extension

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.extension.Syntax -->**.extension** : Text<!-- END REF -->

#### Descrição

A propriedade `.extension` devolve <!-- REF #document.extension.Summary -->a extensão do nome do ficheiro (se existir)<!-- END REF -->. Uma extensão sempre começa com ".". Uma extensão sempre começa com "." A propriedade devolve uma string vazia se o nome do arquivo não tiver extensão.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

<!-- REF document.fullName.Desc -->
## .fullName

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.fullName.Syntax -->**.fullName** : Text<!-- END REF -->

#### Descrição

A propriedade `.fullName` devolve <!-- REF #document.fullName.Summary -->o nome completo do ficheiro, incluindo a sua extensão (se houver)<!-- END REF -->.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

<!-- REF document.hidden.Desc -->
## .hidden

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.hidden.Syntax -->**.hidden** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.size` devolve <!-- REF #document.hidden.Summary -->true se o arquivo for definido como "escondido" ao nível do sistema<!-- END REF -->e false de outra forma.

Esta propriedade é **read/write**.

<!-- END REF -->

<!-- REF document.isAlias.Desc -->
## .isAlias

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.isAlias.Syntax -->**.isAlias** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.isAlias` devolve <!-- REF #document.isAlias.Summary -->verdadeiro se o arquivo for um alias (apelido), um atalho, ou um link simbólico<!-- END REF -->e false de outra forma.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

<!-- REF document.isFile.Desc -->
## .isFile

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.isFile.Syntax -->**.isFile** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.isFile` devolve <!-- REF #document.isFile.Summary -->A função `.copyTo()`<!-- END REF -->.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

<!-- REF document.isFolder.Desc -->
## .isFolder

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.isFolder.Syntax -->**.isFolder** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.isFolder` devolve <!-- REF #document.isFolder.Summary -->A propriedade `.platformPath` devolve<!-- END REF -->.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

<!-- REF document.isWritable.Desc -->
## .isWritable

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.isWritable.Syntax -->**.isWritable** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.isWritable` devolve <!-- REF #document.isWritable.Summary -->verdadeiro se o arquivo existir em disco e for gravável<!-- END REF -->.
> A propriedade verifica a habilidade da aplicação 4D de escrever no disco (direitos de acesso), não depende apenas do atributo *writable* do arquivo.

Essa propriedade é **apenas leitura**.

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

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.modificationDate.Syntax -->**.modificationDate** : Date<!-- END REF -->

#### Descrição

A propriedade `.modificationDate` devolve <!-- REF #document.modificationDate.Summary -->A propriedade `.aceita a transação` devolve<!-- END REF -->.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

<!-- REF document.modificationTime.Desc -->
## .modificationTime

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.modificationTime.Syntax -->**.modificationTime** : Time<!-- END REF -->

##### Descrição

A propriedade `.modificationTime` devolve <!-- REF #document.modificationTime.Summary -->A propriedade `.modificationTime` devolve<!-- END REF --> (expresso como um número de segundos a partir das 00:00).

Essa propriedade é **apenas leitura**.

<!-- END REF -->

<!-- REF document.name.Desc -->
## .name

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descrição

A propriedade `.name` devolve <!-- REF #document.name.Summary -->A propriedade `.isFile` devolve<!-- END REF -->.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

<!-- REF document.original.Desc -->
## .original

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.original.Syntax -->|<!-- END REF -->

#### Descrição

A propriedade `.original` devolve <!-- REF #document.original.Summary -->o elemento alvo de um alias, um atalho, ou um arquivo de ligação simbólica<!-- END REF -->. O elemento alvo pode ser:

* um objeto File
* um objeto folder

Para arquivos não-alias, a propriedade retorna o mesmo objeto de arquivo que o arquivo.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

<!-- REF document.parent.Desc -->
## .parent

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.parent.Syntax -->**.parent** : 4D. Folder<!-- END REF -->

#### Descrição

A propriedade `.parent` devolve <!-- REF #document.parent.Summary -->A propriedade `.parent` devolve<!-- END REF -->. .

Essa propriedade é **apenas leitura**.

<!-- END REF -->

<!-- REF document.path.Desc -->
## .path

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descrição

A propriedade `.path` devolve <!-- REF #document.path.Summary -->A propriedade `.path` devolve<!-- END REF -->. .

Essa propriedade é **apenas leitura**.

<!-- END REF -->

<!-- REF document.platformPath.Desc -->
## .platformPath

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### Descrição

A propriedade `.platformPath` devolve <!-- REF #document.platformPath.Summary -->o caminho do ficheiro expresso com a sintaxe da plataforma actual<!-- END REF -->.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

<!-- REF document.size.Desc -->
## .size

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.size.Syntax -->**.size** : Real<!-- END REF -->

#### Descrição

A propriedade `.size` devolve <!-- REF #document.size.Summary -->o tamanho do arquivo expresso em bytes<!-- END REF -->. Se o arquivo não existir em disco, o tamanho é 0.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

<!-- REF document.copyTo().Desc -->
## .copyTo()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.copyTo().Syntax -->**.copyTo**( *destinationFolder* : 4D. Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D. File<!-- END REF -->


<!-- REF #document.copyTo().Params -->
| Parâmetro         | Tipo       |    | Descrição                                              |
| ----------------- | ---------- |:--:| ------------------------------------------------------ |
| destinationFolder | 4D. Folder | -> | Pasta de destino                                       |
| newName           | Text       | -> | Nome para a copia                                      |
| overwrite         | Integer    | -> | `fk overwrite` para substituir os elementos existentes |
| Resultados        | 4D. File   | <- | Arquivo copiado|<!-- END REF -->

|

#### Descrição

A função `.copyTo()` <!-- REF #document.copyTo().Summary -->A propriedade `.isFolder` devolve <!-- END REF -->.

A *destinationFolder* deve existir em disco, senão um erro é gerado.

Como padrão, o arquivo é copiado com o nome do arquivo original. Se quiser renomear a cópia, passe o novo nome no parâmetro *newName* . O novo nome deve cumprir com as regras de nomenclatura (por exemplo, não deve conter caracteres como ":", "/", etc.), do contrário se devolve um erro.

Se já existir um arquivo com o mesmo nome em *destinationFolder*, por padrão 4D gera um erro. Pode passar a constante `fk overwrite` no parâmetro *overwrite* para ignorar e sobrescriber o arquivo existente

| Parâmetros     | Valor | Comentário                                      |
| -------------- | ----- | ----------------------------------------------- |
| `fk overwrite` | 4     | Sobrescrever os elementos existentes, se houver |

**Valor retornado**

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

| Release | Mudanças         |
| ------- | ---------------- |
| 19 R2   | Returns 4D. Blob |
| 17 R5   | Adicionado       |
</details>

<!-- REF #document.getContent().Syntax -->**.getContent( )** : Blob<!-- END REF -->


<!-- REF #document.getContent().Params -->
| Parâmetro  | Tipo     |    | Descrição                                      |
| ---------- | -------- | -- | ---------------------------------------------- |
| Resultados | 4D. Blob | <- | Conteúdo do arquivo|<!-- END REF -->

|

#### Descrição

A função `.getContent()`  <!-- REF #document.getContent().Summary -->returns a `4D. Blob` object containing the entire content of a file<!-- END REF -->. Para informações sobre BLOBs, consultar a secção [BLOB](Concepts/dt_blob.md) .

**Valor retornado**

Um `Blob`.

#### Exemplo

Para salvar o conteúdo de um documento em um campo `BLOB`:

```4d
 var $vPath : Text
 $vPath:=Select document(""; "*"; "Select a document";0)
 If(OK=1) //Se tiver sido escolhido um documento
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
```

<!-- END REF -->

<!-- REF document.getIcon().Desc -->
## .getIcon()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.getIcon().Syntax -->**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->


<!-- REF #document.getIcon().Params -->
| Parâmetro  | Tipo    |    | Descrição                                       |
| ---------- | ------- | -- | ----------------------------------------------- |
| size       | Integer | -> | Longitude de lado da imagem devolvida (píxeles) |
| Resultados | Imagem  | <- | Ícone|<!-- END REF -->

|

#### Descrição

A função `.getIcon()` devolve <!-- REF #document.getIcon().Summary -->o ícone do ficheiro<!-- END REF -->.

O parâmetro opcional *size* especifica as dimensões em píxels do icone devolvido. Este valor representa em realidade a longitude do lado do quadrado que contém o icone. Icones são geralmente definidos como 32x32 píxels ('icones grandes') ou 16x16 ('icones pequenos'). Se passar 0 ou omitir este parâmetro, se devolve a versão 'icone grande'

Se o arquivo não existir no disco, um ícone em branco padrão será retornado.

**Valor retornado**

Ícone de arquivo [imagem](../Concepts/picture.html).

<!-- END REF -->

<!-- REF document.getText().Desc -->
## .getText()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |
</details>

<!-- REF #document.getText().Syntax -->**.getText**( { *charSetName* : Text { ; *breakMode* : Integer } } ) : Text<br/>**.getText**( { *charSetNum* : Integer { ; *breakMode* : Integer } } ) : Text<!-- END REF -->


<!-- REF #document.getText().Params -->
| Parâmetro   | Tipo    |    | Descrição                                     |
| ----------- | ------- | -- | --------------------------------------------- |
| charSetName | Text    | -> | Nome do conjunto de caracteres                |
| charSetNum  | Integer | -> | Número de conjuntos de caracteres             |
| breakMode   | Integer | -> | Modo de processamento para quebras de linha   |
| Resultados  | Text    | <- | Texto do documento|<!-- END REF -->

|

#### Descrição

A função `.getText()` <!-- REF #document.getText().Summary -->devolve o conteúdo do ficheiro como texto <!-- END REF -->.

Opcionalmente, você pode designar o conjunto de caracteres a ser usado na leitura do conteúdo. Você pode passar também:

* em *charSetName*, uma string que contém o nome padrão definido (por exemplo "ISO-8859-1" ou "UTF-8"),
* ou em *charSetNum*, o MIBEnum ID (número) do nome de configuração padrão.

> Para a lista de conjuntos de caracteres suportados por 4D, consulte a descrição do comando `CONVERT FROM TEXT`.

Se o documento contiver uma nota de ordem de byte (BOM), 4D usa o conjunto de caracteres que definiu em vez do especificado no *charSetName* ou *charSetNum* (este parâmetro é então ignorado). Se o documento não contiver uma LDM e se o *charSetName* ou *charSetNum* for omitido, por padrão 4D usa o conjunto de caracteres "UTF-8".

Em *breakMode*, você pode passar um número indicando o processamento a aplicar aos caracteres de fim de linha no documento. As seguintes constantes do tema "Documentos do Sistema" estão disponíveis:

| Parâmetros                    | Valor | Comentário                                                                                                                                                           |
| ----------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0     | Não processado                                                                                                                                                       |
| `Document with native format` | 1     | (Default) Line breaks are converted to the native format of the operating system: CR (carriage return) under macOS, CRLF (carriage return + line feed) under Windows |
| `Documento com CRLF`          | 2     | Quebras de linha são convertidas em formato Windows: CRLF (retorno de carro + quebra de linha)                                                                       |
| `Documento com CR`            | 3     | Line breaks are converted to macOS format: CR (carriage return)                                                                                                      |
| `Documento com LF`            | 4     | Quebras de linha são convertidas em formato Unix: LF (feed de linha)                                                                                                 |

Por padrão, ao omitir o parâmetro *breakMode* , as quebras de linha são processadas no modo nativo (1).

**Valor retornado**

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
 $myFile:=Folder(fk documents folder).file("Billing.txt") //UTF-8 por padrão
 $txt:=$myFile.getText()
```

|

"id\tname\tprice\tvat\r\n3\tthé\t1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"

com `\t` (tab) como separador e `\r\n` (CRLF) como delimitador de linha.

Aqui está outro exemplo com o mesmo arquivo, mas um delimitador de linha diferente:

```4d
 $txt:=$myFile.getText("UTF-8"; Document with LF)
```

Neste caso, o conteúdo de `$txt` é o seguinte:

"id\tname\tprice\tvat\n3\tthé\t1.06€\t19.6\n2\tcafé\t1.05€\t19.6"

Este tempo `\n` (LF) é usado como delimitador de linha.

<!-- END REF -->
