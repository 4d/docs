---
id: _imageutils
title: _ImageUtils
---

# _ImageUtils

The `_ImageUtils` internal class provides utility functions for handling images, including converting images to blobs, encoding images to base64, and creating inline PNG representations.

## Funciones

### httpURLToBlob

Converts a URL to a Blob object by making an HTTP request.

| Argumento | Tipo | Descripción                                           |
| --------- | ---- | ----------------------------------------------------- |
| $url      | Text | The URL of the image to be converted. |

**Returns**: Blob or Null if the request fails.

```4d
var $blob:=cs._ImageUtils.me.httpURLToBlob("http://example.com/image.png")
```

### base64ToBlob

Converts a base64 encoded string to a Blob object.

| Argumento | Tipo | Descripción                                      |
| --------- | ---- | ------------------------------------------------ |
| $base64   | Text | The base64 encoded image string. |

**Devuelve**: Blob que representa la imagen decodificada.

```4d
var $blob:=cs._ImageUtils.me.base64ToBlob("iVBORw0KGgoAAAANSUhEUgAAAAUA...")
```

### toBlob

Converts various types of image representations to a Blob object.

| Argumento  | Tipo    | Descripción                                                                                     |
| ---------- | ------- | ----------------------------------------------------------------------------------------------- |
| $imageInfo | Variant | The image information, which can be a picture, a file object, a URL, or a text. |

**Devuelve**: Blob o Null si la entrada no es válida.

```4d
var $blob:=cs._ImageUtils.me.toBlob($image)
```

### toBase64

Converts an image to a base64 encoded string.

| Argumento  | Tipo    | Descripción                                                 |
| ---------- | ------- | ----------------------------------------------------------- |
| $imageInfo | Variant | The image information to convert to base64. |

**Returns**: Base64 encoded Text or an empty string if conversion fails.

```4d
var $base64:=cs._ImageUtils.me.toBase64($image)
```

### toInlinedPng

Generates an inline PNG data URI from the given image information.

| Argumento  | Tipo    | Descripción                                       |
| ---------- | ------- | ------------------------------------------------- |
| $imageInfo | Variant | The image information to convert. |

**Returns**: Text containing the inline PNG data URI or an empty string if conversion fails.

```4d
var $dataUri:=cs._ImageUtils.me.toInlinedPng($image)
```

### toFormData

Converts an image to a text format suitable for form data submission.

| Argumento  | Tipo    | Descripción                                       |
| ---------- | ------- | ------------------------------------------------- |
| $imageInfo | Variant | The image information to convert. |

**Returns**: Text representing the form data or an empty string if conversion fails.

```4d
var $formData:=cs._ImageUtils.me.toFormData($image)
```