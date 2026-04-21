---
id: openaiimagesresult
title: OpenAIImagesResult
---

# OpenAIImagesResult

## Hereda

- [OpenAIResult](OpenAIResult.md)

## Propiedades calculadas

| Propiedad | Tipo                                       | Descripción                                                      |
| --------- | ------------------------------------------ | ---------------------------------------------------------------- |
| `images`  | Colección de [OpenAIImage](OpenAIImage.md) | Devuelve una colección de objetos OpenAIImage.   |
| `imagen`  | [OpenAIImage](OpenAIImage.md)              | Devuelve la primera OpenAIImage de la colección. |

## Funciones

### saveImagesToDisk()

**saveImagesToDisk**(*folder* : 4D.Folder; *prefix* : Text) : Boolean

| Parámetros | Tipo                      | Descripción                                                                      |
| ---------- | ------------------------- | -------------------------------------------------------------------------------- |
| *folder*   | 4D.Folder | La carpeta donde se guardarán las imágenes.                      |
| *prefix*   | Text                      | El prefijo para los nombres de los archivos de imagen guardados. |
| Resultado  | Boolean                   | Devuelve `True` si las imágenes se han guardado correctamente.   |

Guarda las imágenes en la carpeta de disco especificada.

## Ver también

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
