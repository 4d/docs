---
id: updates
title: Notas del lanzamiento
---

:::tip

Lea las [**novedades de 4D 19**](https://blog.4d.com/en-whats-new-in-4d-v19/), la entrada del blog que lista todas las nuevas funcionalidades y mejoras en 4D 19 LTS.

:::



## 4D 19.8 LTS

#### Lo más destacado

- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=19.8): lista de todos los bugs corregidos en 4D 19.8.


## 4D 19.7 LTS

#### Lo más destacado

:::advertencia Nota de Seguridad

Si sus aplicaciones 4D utilizan conexiones TLS, se recomienda actualizar a 4D 19.7 LTS build 288986 o superior. Para más información, consulte este [boletín de seguridad](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=19.7): lista de todos los bugs corregidos en 4D 19.7.


## 4D 19.6 LTS

#### Lo más destacado

- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=19.6): lista de todos los bugs corregidos en 4D 19.6.


## 4D 19.5 LTS

#### Lo más destacado

- 4D v19.5 está certificado en Windows 11 22H2
- 4D 19.5 está certificado en macOS Ventura (macOS 13)
- La versión SpreadJS ha sido actualizada (14.1.6).
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=19.5): lista de todos los bugs corregidos en 4D 19.5.


## 4D 19.x LTS

#### Lo más destacado

- [IMAPTransporter Class](../API/IMAPTransporterClass.md): funciones `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()` y `.unsubscribe()`.
- [Clase File](../API/FileClass.md): nuevas funciones `setAppInfo()` y `getAppInfo()`.
- Nueva etiqueta de transformación [4DEACH](../Tags/tags.md#4deach-and-4dendeach).
- Servidor Web: nuevo parámetro [cookie de sesión SameSite](../WebServer/webServerConfig.md#session-cookie-samesite).
- Soporte del esquema color oscuro y claro para los [formularios](../FormEditor/properties_FormProperties.md#color-scheme) y [hojas de estilo](../FormEditor/stylesheets#media-queries)
- Nuevos temas oscuros y claros por defecto en las [preferencias del editor de código](../Preferences/methods.md#theme-list).
- [Compilación nativa](../Project/compiler.md#compiler-methods-for) para procesadores Silicon.
- La propiedad [cálculo de variables](../FormObjects/properties_Object.md#variable-calculation) es ahora soportada por las columnas list box de la selección de entidades.
- Nueva página [CLI](../Admin/cli.md) completa.



### 4D 18 R6

- [Entity Selection Class](../API/EntitySelectionClass.md): las funciones `.average()`, `.max()` y `.min()` ahora devuelven *undefined* si la selección de entidades está vacía.
- [IMAP Mail](../API/IMAPTransporterClass.md), [POP3 Mail](../API/POP3TransporterClass.md) y [SMTP Mail](../API/SMTPTransporterClass.md): la propiedad `authenticationMode` habilita OAuth 2.0
- [IMAP Mail](../API/IMAPTransporterClass.md): nuevas funciones `.expunge()` y `.append()`
- Nuevo componente de servidor web [WebAdmin](../Admin/webAdmin.md)
- Nueva interfaz [DataExplorer](../Admin/dataExplorer.md)
- Nuevas [sesiones de usuario](../WebServer/sessions.md) web y [su API](../API/SessionClass.md).


## Lanzamientos anteriores


- Consulte las [**notas de la versión anterior**](https://doc.4d.com/4Dv19/4D/19.4/4D-v19x-Release-Notes.100-6044726.en.html) en doc.4d.com.


## Tabla de la librería


| Librería | Versión actual | Actualizado en 4D | Comentario                                                                                                    |
| -------- | -------------- | ----------------- | ------------------------------------------------------------------------------------------------------------- |
| OpenSSL  | 1.1.1s         | 19.6              |                                                                                                               |
| SpreadJS | 14.1.6         | 19.5              | Motor 4D View Pro                                                                                             |
| CEF      | 4324           | 19                | Chromium v88. Permite la compilación nativa en las plataformas Apple Silicon.                                 |
| webKit   | WKWebView      | 19                |                                                                                                               |
| ICU      | 68.1           | 18 R6             | Esta importante actualización obliga a reconstruir automáticamente los índices alfanuméricos, texto y objeto. |
| PHP      | 7.3.27         | 18 R6             |                                                                                                               |
| libldap  | 2.4.48         | 18 R2             |                                                                                                               |
