---
id: FileHandleClass
title: FileHandle
---

A classe `FileHandle` tem funções que lhe permitem ler sequencialmente ou anexar conteúdos a um objeto aberto [`File`](FileClass) . O manuseamento de um arquivo pode acessar a qualquer parte de um documento.

Os objectos de manipulação de arquivos são criados com a função [`file.open()`](FileClass#open) .

> [Para ler ou escrever um documento inteiro de uma só vez, pode considerar a utilização das funções file.getText()](FileClass.md#gettext) e [file.setText()](FileClass.md#settext) .

Graças ao objecto padrão 4D *refcounting*, um handle de arquivo é automaticamente apagado quando deixa de ser referenciado e, por conseguinte, o objeto solicitado [`arquivo`](FileClass) é automaticamente fechado. Consequentemente, com os handles dos arquivos não precisa de se preocupar com o encerramento de documentos.

:::note

Os recursos de um objeto, como documentos, são liberados quando não existem mais referências na memória, que acontece, por exemplo, no final do método de execução das variáveis locais. Se você deseja "forçar" a liberação dos recursos do objeto a qualquer momento, você pode [anular suas referências](../Concepts/dt_object.md#resources).

:::

### Exemplo

```code4d
var $f : 4D. File
var $fhandle : 4D. FileHandle
$f:=Folder(Database folder).file("example.txt")

//Escrever linha por linha do início
$fhandle:=$f.open("write")
$text:="Hello World" For ($line; 1; 4)
    $fhandle.writeLine($text+String($line))
End for

//Escrever linha por linha do final
$fhandle:=$f.open("append")
$text:="Hello New World!"
For ($line; 1; 4)
    $fhandle.writeLine($text+String($line))
End for

//Leitura usando um carácter de paragem e um parâmetro objecto 
$o:=New object()
$o.mode:="read"
$o.charset:="UTF-8"
$o.breakModeRead:=Document with CRLF
$stopChar:="!"
$fhandle:=$f.open($o)
$text:=$fhandle.readText($stopChar)

//Leitura linha a linha
$lines:=New collection
$fhandle:=$f.open("read")
While (Not($fhandle.eof))
    $lines.push($fhandle.readLine())
End while

```

### Objeto FileHandle

Os objectos handle de arquivos não podem ser partilhados.

|                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #FileHandleClass.breakModeRead.Syntax -->](#breakmoderead)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.breakModeRead.Summary -->|
| [<!-- INCLUDE #FileHandleClass.breakModeWrite.Syntax -->](#breakmodewrite)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.breakModeWrite.Summary -->|
| [<!-- INCLUDE #FileHandleClass.charset.Syntax -->](#charset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.charset.Summary -->|
| [<!-- INCLUDE #FileHandleClass.eof.Syntax -->](#eof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.eof.Summary -->|
| [<!-- INCLUDE #FileHandleClass.file.Syntax -->](#file)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.file.Summary -->|
| [<!-- INCLUDE #FileHandleClass.getSize().Syntax -->](#getsize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.getSize().Summary -->|
| [<!-- INCLUDE #FileHandleClass.mode.Syntax -->](#mode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.mode.Summary -->|
| [<!-- INCLUDE #FileHandleClass.offset.Syntax -->](#offset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.offset.Summary -->|
| [<!-- INCLUDE #FileHandleClass.readBlob().Syntax -->](#readblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.readBlob().Summary -->|
| [<!-- INCLUDE #FileHandleClass.readLine().Syntax -->](#readline)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.readLine().Summary -->|
| [<!-- INCLUDE #FileHandleClass.readText().Syntax -->](#readtext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.readText().Summary -->|
| [<!-- INCLUDE #FileHandleClass.setSize().Syntax -->](#setsize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.setSize().Summary -->|
| [<!-- INCLUDE #FileHandleClass.writeBlob().Syntax -->](#writeblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.writeBlob().Summary -->|
| [<!-- INCLUDE #FileHandleClass.writeLine().Syntax -->](#writeline)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.writeLine().Summary -->|
| [<!-- INCLUDE #FileHandleClass.writeText().Syntax -->](#writetext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.writeText().Summary -->|



<!-- REF FileHandleClass.breakModeRead.Desc -->
## .breakModeRead

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |
</details>

<!-- REF #FileHandleClass.breakModeRead.Syntax -->**.breakModeRead** : Text<!-- END REF -->


#### Descrição

A propriedade `.breakModeRead` devolve <!-- REF #FileHandleClass.breakModeRead.Summary -->o modo de processamento para quebras de linha utilizado na leitura do arquivo<!-- END REF -->.


A propriedade `.breakModeWrite` pode ser definida na criação do handle com a função [`file.open()`](FileClass.md#open) (ver [a função `.open()` função](FileClass.md#open) para mais informações). O padrão é "nativo".

> A propriedade `.breakModeRead` contém sempre um valor de texto, mesmo que a opção `.open()` tenha sido definida usando um número (constante).


Essa propriedade é **apenas leitura**.

<!-- END REF -->


<!-- REF FileHandleClass.breakModeWrite.Desc -->
## .breakModeWrite

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |
</details>

<!-- REF #FileHandleClass.breakModeWrite.Syntax -->**.breakModeWrite** : Text<!-- END REF -->


#### Descrição

A propriedade `.breakModeWrite` devolve <!-- REF #FileHandleClass.breakModeWrite.Summary -->o modo de processamento para quebras de linha utilizado quando se escreve no arquivo<!-- END REF -->.

A propriedade `.breakModeRead` pode ser definida na criação do cabo com a função [`file.open()`](FileClass.md#open) (ver [o `.open()` function](FileClass.md#open) para mais informações). O padrão é "nativo".

> A propriedade `.breakModeWrite` contém sempre um valor de texto, mesmo que a opção `.open()` tenha sido definida utilizando um número (constante).


Essa propriedade é **apenas leitura**.

<!-- END REF -->



<!-- REF FileHandleClass.charset.Desc -->
## .charset

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |
</details>

<!-- REF #FileHandleClass.charset.Syntax -->**.charset** : Text<!-- END REF -->


#### Descrição

O `.charset` devolve propriedades <!-- REF #FileHandleClass.charset.Summary -->o charset utilizado na leitura ou na escrita do arquivo<!-- END REF -->.

O charset pode ser definido na criação do cabo com a função [`file.open()`](FileClass#open) . Por padrão é "UTF-8".

Essa propriedade é **apenas leitura**.

<!-- END REF -->


<!-- REF FileHandleClass.eof.Desc -->
## .eof

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |
</details>

<!-- REF #FileHandleClass.eof.Syntax -->**.eof** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.eof` devolve <!-- REF #FileHandleClass.eof.Summary -->Verdadeiro se `offset` chegou ao fim do arquivo, e Falso caso contrário<!-- END REF -->.

Essa propriedade é **apenas leitura**.

<!-- END REF -->


<!-- REF FileHandleClass.file.Desc -->
## .file

<!-- REF #FileHandleClass.file.Syntax -->**.file**: 4D.File<!-- END REF -->


#### Descrição

A propriedade `.file` devolve <!-- REF #FileHandleClass.file.Summary -->o objeto [4D.File](FileClass.md) no qual o identificador foi criado<!-- END REF -->.

Essa propriedade é **apenas leitura**.

<!-- END REF -->


<!-- REF FileHandleClass.getSize().Desc -->
## .getSize()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |
</details>

<!--REF #FileHandleClass.getSize().Syntax -->**.getSize()** : Real <!-- END REF -->


<!--REF #FileHandleClass.getSize().Params -->
| Parâmetro  | Tipo |    | Descrição                                                |
| ---------- | ---- | -- | -------------------------------------------------------- |
| Resultados | Real | <- | Tamanho do documento em bytes|<!-- END REF -->

|

#### Descrição

A função `.getSize()` <!-- REF #FileHandleClass.getSize().Summary -->devolve o tamanho atual do documento, expresso em bytes<!-- END REF -->.

> Esta função devolve o mesmo valor que a propriedade ([.size](FileClass#size)) da classe `File` .

#### Veja também

[.setSize()](#setsize), [file.size](FileClass#size)

<!-- END REF -->


<!-- REF FileHandleClass.mode.Desc -->
## .mode

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |
</details>

<!-- REF #FileHandleClass.mode.Syntax -->**.mode** : Text<!-- END REF -->


#### Descrição

A propriedade `.mode` devolve <!-- REF #FileHandleClass.mode.Summary -->o modo em que foi criado o tratamento do arquivo: "ler", "escrever", ou "anexar".<!-- END REF -->.

O modo pode ser definido na criação do punho com a função [`file.open()`](FileClass#open) . O padrão é "read".

Essa propriedade é **apenas leitura**.

<!-- END REF -->



<!-- REF FileHandleClass.offset.Desc -->
## .offset

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |
</details>

<!-- REF #FileHandleClass.offset.Syntax -->**.offset** : Real<!-- END REF -->


#### Descrição

A propriedade `.offset` devolve <!-- REF #FileHandleClass.offset.Summary -->o offset aual do fluxo de dados (posição no interior do documento)<!-- END REF -->. O valor do offset é automaticamente atualizado após as operações de leitura e escrita.

A modificação de `.offset` alterará seu valor atual no momento da próxima operação de leitura ou gravação.

- Se o valor passado for negativo, o arquivo `.offset` é definido para o início do arquivo (zero).
- Se o valor passado for superior ao tamanho do arquivo, o arquivo `.offset` é definido para o fim do arquivo (tamanho do ficheiro).

Esta propriedade é **read/write**.

:::caution

Quando um identificador de arquivo é criado, o valor `.offset` é um número de bytes. Entretanto, a unidade de medição de deslocamento (offset) difere de acordo com a função de leitura: com [`readBlob()`](#readblob)`.offset` é um número de bytes, enquanto que com [`readText()`](#readtext)/[`readLine()`](#readline) ele é um número de caracteres. Dependendo do conjunto de caracteres do arquivo, um caractere corresponde a um ou mais bytes. Então, se você começar a ler com `readBlob()` e então chamar `readText()`, a leitura do texto começará em uma posição inconsistente. Portanto, é essencial definir a propriedade `.offset` caso você altere de leitura/escrita de blob para leitura/escrita de texto no mesmo filehandle. Por exemplo:

```4d
  // Abra um arquivo texto europeu usando a codificação utf-16 (dois bytes por caractere)
  // Queremos ler os primeiros 10 caracteres como bytes, depois, o restante como texto.
$fh:=File("/RESOURCES/sample_utf_16.txt").open()
  // lê os 20 primeiros bytes (i.e. 10 caracteres)
$b:=$fh.readBlob(20) // $fh.offset=20
  // depois lê todo o texto saltando os primeiros 10 caracteres que acabámos de ler no blob anterior
  // porque agora estamos a ler texto em vez de bytes, o significado de 'offset' não é o mesmo.
  // Precisamos de o traduzir de bytes para caracteres.
$fh.offset:=10 // demande de sauter 10 caractères utf-16 (20 octets)
$s:=$fh.readText()
```

:::

<!-- END REF -->



<!-- REF FileHandleClass.readBlob().Desc -->
## .readBlob()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |
</details>

<!--REF #FileHandleClass.readBlob().Syntax -->**.readBlob**( *bytes* : Real ) : 4D.Blob <!-- END REF -->


<!--REF #FileHandleClass.readBlob().Params -->
| Parâmetro  | Tipo                  |    | Descrição                                         |
| ---------- | --------------------- | -- | ------------------------------------------------- |
| *bytes*    | Real                  | -> | Número de bytes a ler                             |
| Resultados | [4D. Blob](BlobClass) | <- | Bytes lidos do arquivo|<!-- END REF -->



|



#### Descrição

A função `.readBlob()` <!-- REF #FileHandleClass.readBlob().Summary -->devolve um blob a *bytes* tamanho do arquivo, a partir da posição atual <!-- END REF -->.

Quando esta função é executada, a posição atual ([.offset](#offset)) é atualizada após a leitura do último byte.

#### Veja também

[.writeBlob()](#writeblob)

<!-- END REF -->




<!-- REF FileHandleClass.readLine().Desc -->
## .readLine()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |
</details>

<!--REF #FileHandleClass.readLine().Syntax -->**.readLine()** : Text <!-- END REF -->


<!--REF #FileHandleClass.readLine().Params -->
| Parâmetro  | Tipo |    | Descrição                                 |
| ---------- | ---- | -- | ----------------------------------------- |
| Resultados | Text | <- | Linha de texto|<!-- END REF -->



|



#### Descrição

A função `.readLine()` <!-- REF #FileHandleClass.readLine().Summary -->devolve uma linha de texto da posição atual até ser encontrado um delimitador de fim de linha ou até ser alcançado o fim do documento<!-- END REF -->.

Quando esta função é executada, a posição atual ([.offset](#offset)) é atualizada.

:::caution Alerta

Essa função assume que a propriedade [`.offset`](#offset) é um número de caracteres, não um número de bytes. Para saber mais, veja a [descrição de .offset](#offset).

:::

> Quando esta função é executada pela primeira vez num handle de arquivo, todo o conteúdo do documento é carregado num buffer.


#### Veja também

[.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->


<!-- REF FileHandleClass.readText().Desc -->
## .readText()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |
</details>

<!--REF #FileHandleClass.readText().Syntax -->**.readText**( { *stopChar* : Text } ) : Text <!-- END REF -->


<!--REF #FileHandleClass.readText().Params -->
| Parâmetro  | Tipo |    | Descrição                                   |
| ---------- | ---- | -- | ------------------------------------------- |
| *stopChar* | Text | -> | Caracter no qual parar a leitura            |
| Resultados | Text | <- | Texto do arquivo|<!-- END REF -->


|


#### Descrição

A função `.readText()` <!-- REF #FileHandleClass.readText().Summary -->devolve texto do arquivo, a partir da posição atual até à primeira *stopChar* string ser encontrada (se passada) ou o fim do arquivo ser alcançado<!-- END REF -->.

A string de caracteres *stopChar* não está incluída no texto devolvido. Se omitir o parâmetro *stopChar* , todo o texto do documento é devolvido.

Quando esta função é executada, o ([.offset](#offset)) é colocado logo após a string *stopChar*.

:::caution Alerta

Essa função assume que a propriedade [`.offset`](#offset) é um número de caracteres, não um número de bytes. Para saber mais, veja a [descrição de .offset](#offset).

:::

Se o parâmetro *stopChar* for passado e não for encontrado, `.readText()` devolve uma string vazia e o [.offset](#offset) é deixado intocado.

> Quando esta função é executada pela primeira vez num handle de arquivo, todo o conteúdo do documento é carregado num buffer.

#### Veja também

[.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->


<!-- REF FileHandleClass.setSize().Desc -->
## .setSize()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |
</details>

<!--REF #FileHandleClass.setSize().Syntax -->**.setSize**( *size* : Real )<!-- END REF -->


<!--REF #FileHandleClass.setSize().Params -->
| Parâmetro | Tipo |    | Descrição                                                     |
| --------- | ---- | -- | ------------------------------------------------------------- |
| size      | Real | -> | Novo tamanho do documento em bytes|<!-- END REF -->


|


#### Descrição

A função `.setSize()` <!-- REF #FileHandleClass.setSize().Summary -->estabelece um novo tamanho ** em bytes para o documento<!-- END REF -->.

Se o tamanho ** for inferior ao tamanho atual do documento, o conteúdo do documento é truncado desde o início para obter o novo tamanho **.

#### Veja também

[.getSize()](#getsize), [file.size](FileClass#size)

<!-- END REF -->


<!-- REF FileHandleClass.writeBlob().Desc -->
## .writeBlob()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |
</details>

<!--REF #FileHandleClass.writeBlob().Syntax -->| <!-- END REF -->


<!--REF #FileHandleClass.writeBlob().Params -->
| Parâmetro | Tipo                  |    | Descrição                                                |
| --------- | --------------------- | -- | -------------------------------------------------------- |
| *blob*    | [4D. Blob](BlobClass) | -> | Blob para escrever no arquivo|<!-- END REF -->


|


#### Descrição

A função `.writeBlob()` <!-- REF #FileHandleClass.writeBlob().Summary -->escreve *blob* no arquivo, a partir da posição atual <!-- END REF -->.

Quando esta função é executada, a posição atual ([.offset](#offset)) é atualizada após o delimitador de fim de linha.

#### Veja também

[.readBlob()](#readblob)

<!-- END REF -->



<!-- REF FileHandleClass.writeLine().Desc -->
## .writeLine()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |
</details>

<!--REF #FileHandleClass.writeLine().Syntax -->**.writeLine**( *lineOfText* : Text ) <!-- END REF -->



<!--REF #FileHandleClass.writeLine().Params -->
| Parâmetro    | Tipo |    | Descrição                                    |
| ------------ | ---- | -- | -------------------------------------------- |
| *lineOfText* | Text | -> | Texto para string|<!-- END REF -->


|


#### Descrição

A função `.writeLine()` <!-- REF #FileHandleClass.writeLine().Summary -->escreve *lineOfText* conteúdo na posição atual e insere um delimitador de fim de linha<!-- END REF --> (ao contrário da função [.writeText()](#writetext)). Como padrão, é utilizado um delimitador nativo de fim de linha, mas pode definir outro delimitador quando [abrir o handle do arquivo](FileClass.md#open) definindo a propriedade [`.breakModeWrite`](#breakmodewrite) .

Quando esta função for executada, a posição atual ([.offset](#offset)) é atualizada depois do último byte escrito.

#### Veja também

[.breakModeWrite](#breakmodewrite), [.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->


<!-- REF FileHandleClass.writeText().Desc -->
## .writeText()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |
</details>

<!--REF #FileHandleClass.writeText().Syntax -->**.writeText**( *textToWrite* : Text )<!-- END REF -->


<!--REF #FileHandleClass.writeText().Params -->
| Parâmetro     | Tipo |    | Descrição                                    |
| ------------- | ---- | -- | -------------------------------------------- |
| *textToWrite* | Text | -> | Texto para string|<!-- END REF -->


|


#### Descrição

A função `.writeText()` <!-- REF #FileHandleClass.writeText().Summary -->escreve *textToWrite* conteúdo na posição atual e não insere um delimitador final de fim de linha<!-- END REF --> (ao contrário da função [.writeLine()](#writeline)). Esta função substitui todos os delimitadores de fim de linha originais.

Quando esta função for executada, a posição atual ([.offset](#offset)) é atualizada após o próximo delimitador de fim de linha.

#### Veja também

[.breakModeWrite](#breakmodewrite), [.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->
