---
id: imageformat
title: $imageformat
---

Define qué formato de imagen utilizar para recuperar imágenes (por ejemplo, `$imageformat=png`)

## Descrição

Definir o formato a utilizar para mostrar imagens. Pode utilizar um dos seguintes formatos (são suportadas extensões, tipos mime e OsType Mac):

| Tipo                                    | Descrição                         |
| --------------------------------------- | --------------------------------- |
| "best"                                  | Melhor formato com base na imagem |
| ".gif" ou "image/gif"   | Formato GIF                       |
| ".png" ou "image/png"   | Formato PNG                       |
| ".jpeg" or "image/jpeg" | Formato JPEG                      |
| ".tiff" ou "image/tiff" | Formato TIFF                      |

Once you have defined the format, you must pass the image attribute to [`$expand`]($expand.md) to load the photo completely.

Se não houver nenhuma imagem a carregar ou se o formato não permitir que a imagem seja carregada, a resposta será um objeto vazio `{}`.

## Exemplo

O exemplo seguinte define o formato de imagem como JPEG, independentemente do tipo real da fotografia, e passa o número de versão real enviado pelo servidor:

`GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo`
