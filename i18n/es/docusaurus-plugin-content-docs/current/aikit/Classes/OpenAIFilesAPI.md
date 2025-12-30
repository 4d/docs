---
id: openaifilesapi
title: OpenAIFilesAPI
---

# OpenAIFilesAPI

La clase `OpenAIFilesAPI` ofrece funcionalidades para gestionar archivos utilizando la API de OpenAI. Los archivos pueden cargarse y utilizarse en varios puntos finales, como el procesamiento [Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning), [Batch](https://platform.openai.com/docs/api-reference/batch) y Vision.

> **Nota:** esta API sólo es compatible con OpenAI. Otros proveedores listados en la documentación de [proveedores compatibles](../compatible-openai.md) no soportan operaciones de gestión de archivos.

Referencia API: <https://platform.openai.com/docs/api-reference/files>

## Límites de tamaño de los archivos

- **Archivos individuales:** hasta 512 MB por archivo
- **Total de la organización:** hasta 1 TB (tamaño acumulado de todos los archivos cargados por su [organización](https://platform.openai.com/docs/guides/production-best-practices/setting-up-your-organization))

## Funciones

### create()

**create**(*file* : 4D.File | 4D.Blob; *purpose* : Text; *parameters* : cs.OpenAIFileParameters) : cs.OpenAIFileResult

Cargar un archivo que pueda utilizarse en varios puntos de terminación.

**Endpoint:** `POST https://api.openai.com/v1/files`

| Parámetros   | Tipo                                                                                                                                            | Descripción                                                                                                |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `file`       | [4D.File](https://developer.4d.com/docs/API/FileClass) o [4D.Blob](https://developer.4d.com/docs/API/BlobClass) | El objeto Archivo o Blob (no el nombre del archivo) que se va a cargar. |
| `purpose`    | Text                                                                                                                                            | **Requerido.** el propósito previsto del archivo subido.                   |
| `parámetros` | [OpenAIFileParameters](OpenAIFileParameters.md)                                                                                                 | Parámetros opcionales, incluida la política de expiración.                                 |
| Resultado    | [OpenAIFileResult](OpenAIFileResult.md)                                                                                                         | El resultado del archivo                                                                                   |

**Arroja:** un error si `file` no es un 4D.File o 4D.Blob, o si `purpose` está vacío.

#### Propósitos soportados

- `assistants`: utilizado en la API Assistants (⚠️ [obsoleto por OpenAI](https://platform.openai.com/docs/assistants/whats-new))
- `batch`: utilizado en la [API Batch](https://platform.openai.com/docs/api-reference/batch) (caduca a los 30 días por defecto)
- `fine-tune`: utilizado para [ajuste fino](https://platform.openai.com/docs/api-reference/fine-tuning)
- `vision`: imágenes utilizadas para afinar la visión
- `user_data`: tipo de archivo flexible para cualquier propósito
- `evals`: se utiliza para evaluar conjuntos de datos

#### Formatos de archivos requeridos

- **API Fine-tuning:** solo admite archivos `.jsonl` con formatos específicos requeridos
- **API Batch:** solo soporta archivos `.jsonl` de hasta 200 MB con formato específico requerido
- **API de Asistentes:** soporta tipos de archivo específicos (ver Guía de herramientas de asistentes)
- **API de finalización de chat:** sólo se admiten archivos PDF

#### Ejemplo sincrónico

```4d
var $file:=File("/RESOURCES/training-data.jsonl")

var $params:=cs.AIKit.OpenAIFileParameters.new()
$params.expires_after:={}
$params.expires_after.anchor:="created_at"
$params.expires_after.seconds:=2592000  // 30 days

var $result:=$client.files.create($file; "fine-tune"; $params)

If ($result.success)
    var $uploadedFile:=$result.file
    // $uploadedFile.id -> "file-abc123"
    // $uploadedFile.filename -> "training-data.jsonl"
    // $uploadedFile.bytes -> 120000
End if
```

#### Ejemplo asincrónico

Dado que las subidas de archivos pueden ser operaciones largas (especialmente para archivos grandes de hasta 512 MB), se recomienda utilizar llamadas asíncronas para evitar el bloqueo de la aplicación. Ver [llamada asincrónica](../asynchronous-call.md) para más detalles.

```4d
var $file:=File("/RESOURCES/large-training-data.jsonl")

var $params:=cs.AIKit.OpenAIFileParameters.new()
$params.onTerminate:=Formula(MyFileUploadCallback($1))

// Esta llamada devuelve inmediatamente sin bloquear
$client.files.create($file; "ajuste fino"; $params)
```

La función de retrollamada recibe un [OpenAIFileResult](OpenAIFileResult.md):

```4d
// MyFileUploadCallback
#DECLARE($result: cs.AIKit.OpenAIFileResult)

If ($result.success)
    var $uploadedFile:=$result.file
    
      ALERT("Archivo cargado correctamente: "+$uploadedFile.filename)
    // Almacena el ID del archivo para su uso posterior
    Form.uploadedFileId:=$uploadedFile.id
Else
    ALERT("Upload failed: "+Formula(JSON Stringify($result.errors)))
End if
```

### retrieve()

**retrieve**(*fileId* : Text; *parameters* : cs.OpenAIParameters) : cs.OpenAIFileResult

Devuelve información sobre un archivo específico.

**Endpoint:** `GET https://api.openai.com/v1/files/{file_id}`

| Parámetros   | Tipo                                    | Descripción                                                                   |
| ------------ | --------------------------------------- | ----------------------------------------------------------------------------- |
| `fileId`     | Text                                    | **Requerido.** El ID del archivo a recuperar. |
| `parámetros` | [OpenAIParameters](OpenAIParameters.md) | Parámetros opcionales para la solicitud.                      |
| Resultado    | [OpenAIFileResult](OpenAIFileResult.md) | El resultado del archivo                                                      |

**Arroja:** un error si `fileId` está vacío.

#### Ejemplo

```4d
var $result:=$client.files.retrieve("file-abc123")

If ($result.success)
    var $file:=$result.file
    // $file.filename -> "mydata.jsonl"
    // $file.bytes -> 120000
    // $file.purpose -> "fine-tune"
End if
```

### lista()

**list**(*parameters* : cs.OpenAIFileListParameters) : cs.OpenAIFileListResult

Devuelve una lista de archivos que pertenecen a la organización del usuario.

**Endpoint:** `GET https://api.openai.com/v1/files`

| Parámetros   | Tipo                                                    | Descripción                                                             |
| ------------ | ------------------------------------------------------- | ----------------------------------------------------------------------- |
| `parámetros` | [OpenAIFileListParameters](OpenAIFileListParameters.md) | Parámetros opcionales para el filtrado y la paginación. |
| Resultado    | [OpenAIFileListResult](OpenAIFileListResult.md)         | Lista de los archivos                                                   |

#### Ejemplo

```4d
var $params:=cs.AIKit.OpenAIFileListParameters.new()
$params.purpose:="assistants"
$params.limit:=50
$params.order:="desc"

var $result:=$client.files.list($params)

If ($result.success)
    var $files:=$result.files
    // $files.length -> 2
    
    For each ($file; $files)
        // $file.filename -> "salesOverview.pdf", "puppy.jsonl", etc.
    End for each
End if
```

### delete()

**delete**(*fileId* : Text; *parameters* : cs.OpenAIParameters) : cs.OpenAIFileDeletedResult

Eliminar un archivo.

**Endpoint:** `DELETE https://api.openai.com/v1/files/{file_id}`

| Parámetros   | Tipo                                                  | Descripción                                                                |
| ------------ | ----------------------------------------------------- | -------------------------------------------------------------------------- |
| `fileId`     | Text                                                  | **Requerido.** el ID del archivo a borrar. |
| `parámetros` | [OpenAIParameters](OpenAIParameters.md)               | Parámetros opcionales para la solicitud.                   |
| Resultado    | [OpenAIFileDeletedResult](OpenAIFileDeletedResult.md) | El resultado de la eliminación del archivo                                 |

**Arroja:** un error si `fileId` está vacío.

#### Ejemplo

```4d
var $result:=$client.files.delete("file-abc123")

If ($result.success)
    var $status:=$result.deleted
    
    If ($status.deleted)
        ALERT("File deleted successfully")
    End if
End if
```

## Ver también

- [OpenAIFile](OpenAIFile.md)
- [OpenAIFileParameters](OpenAIFileParameters.md)
- [OpenAIFileListParameters](OpenAIFileListParameters.md)
- [OpenAIFileResult](OpenAIFileResult.md)
- [OpenAIFileListResult](OpenAIFileListResult.md)
- [OpenAIFileDeletedResult](OpenAIFileDeletedResult.md)
