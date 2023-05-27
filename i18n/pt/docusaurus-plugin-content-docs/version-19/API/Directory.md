---
id: Directory
title: Directory Class
---


<!-- REF directory.creationDate.Desc -->
## .creationDate

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.creationDate.Syntax -->**.creationDate** : Date<!-- END REF -->

#### Descrição

A propriedade `.aceita a transação` devolve <!-- REF #directory.creationDate.Summary -->a data de criação da pasta<!-- END REF -->.

Essa propriedade é **apenas leitura**.
<!-- END REF -->

<!-- REF directory.creationTime.Desc -->

## .creationTime

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.creationTime.Syntax -->**.creationTime** : Time<!-- END REF -->

#### Descrição

A propriedade `.creationTime` devolve <!-- REF #directory.creationTime.Summary -->a hora da criação da pasta<!-- END REF --> (expresso como um número de segundos a partir das 00:00).

Essa propriedade é **apenas leitura**.

<!-- END REF -->

---

<!-- REF directory.exists.Desc -->
## .exists

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.exists.Syntax -->**.exists** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.exists` devolve <!-- REF #directory.exists.Summary -->true se a pasta existir no disco<!-- END REF -->e false de outra forma.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

---

<!-- REF directory.extension.Desc -->
## .extension

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.extension.Syntax -->**.extension** : Text<!-- END REF -->

#### Descrição

A propriedade `.extension` <!-- REF #directory.extension.Summary -->devolve a extensão do nome da pasta (se houver)<!-- END REF -->. Uma extensão sempre começa com ".". Uma extensão sempre começa com "." A propriedade devolve uma string vazia se o nome da pasta não tiver extensão.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

---


<!-- REF directory.fullName.Desc -->
## .fullName

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.fullName.Syntax -->**.fullName** : Text<!-- END REF -->

#### Descrição

A propriedade `.fullName` <!-- REF #directory.fullName.Summary -->devolve o nome completo da pasta, incluindo a sua extensão (se houver)<!-- END REF -->.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

---

<!-- REF directory.hidden.Desc -->
## .hidden

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.hidden.Syntax -->**.hidden** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.size` devolve <!-- REF #directory.hidden.Summary --> true se a pasta for definida como "escondida" ao nível do sistema<!-- END REF -->e false de outra forma.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

---

<!-- REF directory.isAlias.Desc -->
## .isAlias

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.isAlias.Syntax -->**.isAlias** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.isAlias` devolve <!-- REF #directory.isAlias.Summary -->sempre **false** para um objecto `Folder`<!-- END REF -->.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

---

<!-- REF directory.isFile.Desc -->
## .isFile

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.isFile.Syntax -->**.isFile** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.isFile` devolve <!-- REF #directory.isFile.Summary -->sempre **false** para uma pasta<!-- END REF -->.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

---

<!-- REF directory.isFolder.Desc -->
## .isFolder

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.isFolder.Syntax -->**.isFolder** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.isFolder` devolve <!-- REF #directory.isFolder.Summary -->sempre**true** para uma pasta<!-- END REF -->.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

---

<!-- REF directory.isPackage.Desc -->
## .isPackage

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.isPackage.Syntax -->**.isPackage** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.isPackage` devolve <!-- REF #directory.isPackage.Summary -->true se a pasta for um pacote em macOS (e existir em disco)<!-- END REF -->. .

Em Windows, `.isPackage` sempre devolve **false**.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

---

<!-- REF directory.modificationDate.Desc -->
## .modificationDate

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.modificationDate.Syntax -->**.modificationDate** : Date<!-- END REF -->

#### Descrição

A propriedade `.modificationDate` devolve <!-- REF #directory.modificationDate.Summary --> a data da última modificação da pasta<!-- END REF -->.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

---

<!-- REF directory.modificationTime.Desc -->
## .modificationTime

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.modificationTime.Syntax -->**.modificationTime** : Time<!-- END REF -->

#### Descrição

A propriedade `.modificationTime` devolve <!-- REF #directory.modificationTime.Summary -->a hora da última modificação da pasta<!-- END REF --> (expresso como um número de segundos a partir das 00:00).

Essa propriedade é **apenas leitura**.

<!-- END REF -->

---

<!-- REF directory.name.Desc -->
## .name

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descrição

A propriedade `.name` devolve <!-- REF #directory.name.Summary --> o nome da pasta, sem extensão (se houver)<!-- END REF -->.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

---

<!-- REF directory.original.Desc -->
## .original

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.original.Syntax -->**.original** : 4D. Folder<!-- END REF -->

#### Descrição

A propriedade `.original` devolve <!-- REF #directory.original.Summary -->o mesmo objecto Folder que a pasta<!-- END REF -->.

Essa propriedade é **apenas leitura**.
> Esta propriedade está disponible nas pastas para permitir que o código genérico processe pastas ou arquivos.

<!-- END REF -->

---

<!-- REF directory.parent.Desc -->
## .parent

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.parent.Syntax -->**.parent** : 4D. Folder<!-- END REF -->

#### Descrição

A propriedade `.parent` devolve <!-- REF #directory.parent.Summary -->o objecto Folder pai da pasta<!-- END REF -->. .

Se a pasta não tiver um pai (raiz), é devolvido o valor nulo.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

---

<!-- REF directory.path.Desc -->
## .path

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descrição

A propriedade `.path` devolve <!-- REF #directory.path.Summary -->o caminho POSIX da pasta<!-- END REF -->. .

Essa propriedade é **apenas leitura**.

<!-- END REF -->

---

<!-- REF directory.platformPath.Desc -->
## .platformPath

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### Descrição

A propriedade `.platformPath` devolve <!-- REF #directory.platformPath.Summary -->o caminho da pasta expresso com a sintaxe da plataforma actual<!-- END REF -->.

Essa propriedade é **apenas leitura**.

<!-- END REF -->

---

<!-- REF directory.copyTo().Desc -->
## .copyTo()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.copyTo().Syntax -->**.copyTo**( *destinationFolder* : 4D. Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D. Folder<!-- END REF -->


<!-- REF #directory.copyTo().Params -->
| Parâmetro         | Tipo       |    | Descrição                                              |
| ----------------- | ---------- |:--:| ------------------------------------------------------ |
| destinationFolder | 4D. Folder | -> | Pasta de destino                                       |
| newName           | Text       | -> | Nome para a copia                                      |
| overwrite         | Integer    | -> | `fk overwrite` para substituir os elementos existentes |
| Resultados        | 4D. Folder | <- | Pasta ou arquivo copiado|<!-- END REF -->

|

#### Descrição

A função `.copyTo()` <!-- REF #directory.copyTo().Summary -->copia o objecto `Folder` para o objecto especificado *destinationFolder*<!-- END REF -->.

A *destinationFolder* deve existir em disco, senão um erro é gerado.

Como padrão, a pasta é copiada com o nome da pasta original. Se quiser renomear a cópia, passe o novo nome no parâmetro *newName* . O novo nome deve cumprir com as regras de nomenclatura (por exemplo, não deve conter caracteres como ":", "/", etc.), do contrário se devolve um erro.

Se já existir uma pasta com o mesmo nome em *destinationFolder*, por padrão 4D gera um erro. Pode passar a constante `fk overwrite` no parâmetro *overwrite* para ignorar e sobrescriber o arquivo existente

| Parâmetros     | Valor | Comentário                                      |
| -------------- | ----- | ----------------------------------------------- |
| `fk overwrite` | 4     | Sobrescrever os elementos existentes, se houver |

**Valor retornado**

O objeto `Folder` copiado.

#### Exemplo

Se quiser copiar uma *pasta* Imágens da pasta de documentos do usuário a pasta da Database:

```4d
var $userImages; $copiedImages : 4D. Folder
$userImages:=Folder(fk documents folder+"/Pictures/")
$copiedImages:=$userImages.copyTo(Folder(fk database folder);fk overwrite)
```

<!-- END REF -->

---

<!-- REF directory.file().Desc -->
## .file()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.file().Syntax -->**.file**( *path* : Text ) : 4D. File<!-- END REF -->


<!-- REF #directory.file().Params -->
| Parâmetro  | Tipo     |    | Descrição                                                                |
| ---------- | -------- | -- | ------------------------------------------------------------------------ |
| path       | Text     | -> | Rota POSIX relativa                                                      |
| Resultados | 4D. File | <- | Objeto `File` (null se a rota não for válida)|<!-- END REF -->

|

#### Descrição

A função `.file()` cria <!-- REF #directory.file().Summary -->a objecto `File` dentro do objecto `Folder` e devolve a sua referência<!-- END REF -->.

Em *path*, passe uma rota relativa POSIX para designar o arquivo a devolver. A rota se avaliará a partir da pasta pai como raíz.

**Valor retornado**

Um objeto `File` ou null se *path* não for válido.

#### Exemplo

```4d
var $myPDF : 4D. File
$myPDF:=Folder(fk documents folder).file("Pictures/info.pdf")
```

<!-- END REF -->

---

<!-- REF directory.files().Desc -->
## .files()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.files().Syntax -->**.files**( { *options* : Integer } ) : Collection<!-- END REF -->


<!-- REF #directory.files().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                      |
| ---------- | ---------- | -- | -------------------------------------------------------------- |
| options    | Integer    | -> | Opções da lista de arquivos                                    |
| Resultados | Collection | <- | Coleção de objetos de arquivo filho|<!-- END REF -->

|

#### Descrição

A função `.files()` devolve <!-- REF #directory.files().Summary -->uma colecção dos objectos `File` contidos na pasta<!-- END REF -->.
> Os apelidos ou links simbolicos não são resolvidos.

Como padrão, se omitir o parâmetro *options*, só se devolvem na coleção os arquivos de primeiro nivel da pasta, assim como os arquivos ou pastas invisíveis. Pode modificar isso passando, no parâmetro *options*, uma ou várias das constantes abaixo:

| Parâmetros            | Valor | Comentário                                                       |
| --------------------- | ----- | ---------------------------------------------------------------- |
| `fk recursive`        | 1     | A coleção contém arquivos da pasta especificada e suas subpastas |
| `fk ignore invisible` | 8     | Arquivos invisíveis não estão listados                           |

**Valor retornado**

Coleção de objetos `File`.

#### Exemplo 1

Se quiser saber se há arquivos invisíveis na pasta Database:

```4d
 var $all; $noInvisible : Collection
 $all:=Folder(fk database folder).files()
 $noInvisible:=Folder(fk database folder).files(fk ignore invisible)
 If($all.length#$noInvisible.length)
    ALERT("Database folder contains hidden files.")
 End if
 End if
 End if
```

#### Exemplo 2

Se quiser obter todos os arquivos que não são invisíveis na pasta Documents:

```4d
 var $recursive : Collection
 $recursive:=Folder(fk documents folder).files(fk recursive+fk ignore invisible)
```

<!-- END REF -->

---

<!-- REF directory.folder().Desc -->
## .folder()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.folder().Syntax -->**.folder**( *path* : Text ) : 4D. Folder<!-- END REF -->


<!-- REF #directory.folder().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                     |
| ---------- | ---------- | -- | ----------------------------------------------------------------------------- |
| path       | Text       | -> | Rota POSIX relativa                                                           |
| Resultados | 4D. Folder | <- | Objeto pasta criado (null se *path*não for válido)|<!-- END REF -->

|

#### Descrição

A função `.folder()` <!-- REF #directory.folder().Summary -->cria um objecto `Folder` dentro do objecto pai `Folder` e devolve a sua referência<!-- END REF -->.

Em *path*, passe uma rota relativa POSIX para designar a pasta a devolver. A rota se avaliará a partir da pasta pai como raíz.

**Valor retornado**

Um objeto `Folder` ou null se *path* não for válido.

#### Exemplo

```4d
 var $mypicts : 4D. Folder
 $mypicts:=Folder(fk documents folder).folder("Pictures")
```

<!-- END REF -->

---

<!-- REF directory.folders().Desc -->
## .folders()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF #directory.folders().Syntax -->**.folders**( { *options* : Integer } ) : Collection<!-- END REF -->


<!-- REF #directory.folders().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                    |
| ---------- | ---------- | -- | ------------------------------------------------------------ |
| options    | Integer    | -> | Opções da lista de pasta                                     |
| Resultados | Collection | <- | Coleção de objetos de pasta filho|<!-- END REF -->

|

#### Descrição

A função `.folders()` <!-- REF #directory.folders().Summary -->devolve uma colecção dos objetos `Folder` contidos na pasta pai<!-- END REF -->.

Como padrão, se omitir o parâmetro *options*, só se devolvem as pastas no primeiro nível da pasta. Pode modificar isso passando, no parâmetro *options*, uma ou várias das constantes abaixo:

| Parâmetros            | Valor | Comentário                                                     |
| --------------------- | ----- | -------------------------------------------------------------- |
| `fk recursive`        | 1     | A coleção contém pastas da pasta especificada e suas subpastas |
| `fk ignore invisible` | 8     | Pastas invisíveis não estão listados                           |

**Valor retornado**

Coleção de objetos `Folder`.

#### Exemplo

Se quiser a coleção de todas as pastas e subpastas da pasta database:

```4d
 var $allFolders : Collection
 $allFolders:=Folder("/PACKAGE").folders(fk recursive)
```

<!-- END REF -->

---

<!-- REF directory.getIcon().Desc -->
## .getIcon()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.getIcon().Syntax -->**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->


<!-- REF #directory.getIcon().Params -->
| Parâmetro  | Tipo    |    | Descrição                                       |
| ---------- | ------- | -- | ----------------------------------------------- |
| size       | Integer | -> | Longitude de lado da imagem devolvida (píxeles) |
| Resultados | Imagem  | <- | Ícone|<!-- END REF -->

|

#### Descrição

A função `.getIcon()` <!-- REF #directory.getIcon().Summary -->devolve o ícone da pasta<!-- END REF -->.

O parâmetro opcional *size* especifica as dimensões em píxels do icone devolvido. Este valor representa em realidade a longitude do lado do quadrado que contém o icone. Icones são geralmente definidos como 32x32 píxels ('icones grandes') ou 16x16 ('icones pequenos'). Se passar 0 ou omitir este parâmetro, se devolve a versão 'icone grande'

Se a pasta não existir no disco, se devolve um icone vazio como padrão.

**Valor retornado**

[Imagen](Concepts/dt_picture.md) do icone da pasta.

<!-- END REF -->
