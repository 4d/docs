---
id: versioning
title: Llaves de versiones
sidebar_label: Versiones
sidebar_position: 5
description: "Llaves XML BuildApplication del nodo Versioning: número de versión, copyright e información de archivo de las aplicaciones generadas."
keywords: ["BuildApplication", "XML key", "Versioning", "version", "copyright"]
---

Estas llaves definen el número de versión y la información de archivo de las aplicaciones generadas. Se encuentran bajo el nodo `<Versioning>`, en uno de los siguientes subnodos:

| Subnodo | Prefijo de llave | Se aplica a | Valor por defecto si se omite |
|---|---|---|---|
| `<Common>` | Common | Todas las aplicaciones generadas | Valor de la aplicación 4D |
| `<RuntimeVL>` | RuntimeVL | Aplicaciones monopuesto (4D Volume Desktop) | Llave `Common...` y luego valor de 4D Volume Desktop |
| `<Client>` | Client | Aplicaciones cliente (4D Volume Desktop) | Llave `Common...` y luego valor de 4D Volume Desktop |
| `<Server>` | Server | Aplicaciones servidor (4D Server) | Llave `Common...` y luego valor de 4D Server |

Cada subnodo acepta las mismas diez llaves, llamadas *prefijo* + *información* (por ejemplo `CommonVersion`, `ClientVersion`, `ServerVersion`, `RuntimeVLVersion`). Cuando se definen a la vez una llave específica y la llave `Common...` correspondiente, se utiliza la llave específica.

```xml
<Preferences4D>
  <BuildApp>
    <Versioning>
      <Common>
        <CommonVersion>1.0.5</CommonVersion>
        <CommonCopyright>© 2026 My Company</CommonCopyright>
        <CommonCompanyName>My Company</CommonCompanyName>
      </Common>
      <Server>
        <ServerFileDescription>My Application Server</ServerFileDescription>
      </Server>
    </Versioning>
  </BuildApp>
</Preferences4D>
```

## Llaves

| Información | Llaves | Plataforma | Valores | Campo actualizado |
|---|---|---|---|---|
| <a name="version"></a>Version | CommonVersion, RuntimeVLVersion, ClientVersion, ServerVersion | Windows, macOS | Número de versión (x.x.x) | Windows: Versión del producto<br/>macOS: `CFBundleShortVersionString` y `CFBundleVersion` en info.plist |
| <a name="copyright"></a>Copyright | CommonCopyright, RuntimeVLCopyright, ClientCopyright, ServerCopyright | Windows, macOS | Texto | Windows: Copyright<br/>macOS: `NSHumanReadableCopyright` en info.plist |
| <a name="creator"></a>Creator | CommonCreator, RuntimeVLCreator, ClientCreator, ServerCreator | macOS | 4 caracteres máx. | Código creador de la aplicación |
| <a name="comment"></a>Comment | CommonComment, RuntimeVLComment, ClientComment, ServerComment | Windows | 31 caracteres máx. | Comentario |
| <a name="companyname"></a>CompanyName | CommonCompanyName, RuntimeVLCompanyName, ClientCompanyName, ServerCompanyName | Windows | 31 caracteres máx. | Nombre de la empresa |
| <a name="filedescription"></a>FileDescription | CommonFileDescription, RuntimeVLFileDescription, ClientFileDescription, ServerFileDescription | Windows | 31 caracteres máx. | Descripción del archivo |
| <a name="internalname"></a>InternalName | CommonInternalName, RuntimeVLInternalName, ClientInternalName, ServerInternalName | Windows | 31 caracteres máx. | Nombre interno |
| <a name="legaltrademark"></a>LegalTrademark | CommonLegalTrademark, RuntimeVLLegalTrademark, ClientLegalTrademark, ServerLegalTrademark | Windows | 31 caracteres máx. | Marcas comerciales |
| <a name="privatebuild"></a>PrivateBuild | CommonPrivateBuild, RuntimeVLPrivateBuild, ClientPrivateBuild, ServerPrivateBuild | Windows | 31 caracteres máx. | Compilación privada |
| <a name="specialbuild"></a>SpecialBuild | CommonSpecialBuild, RuntimeVLSpecialBuild, ClientSpecialBuild, ServerSpecialBuild | Windows | 31 caracteres máx. | Compilación especial |

En Windows, los campos actualizados se muestran en la ventana **Propiedades** del archivo de la aplicación. Las llaves que sólo se aplican a una plataforma se ignoran en la otra plataforma.

Ver también [Archivos generados](../Desktop/building.md#generated-files) para el archivo info.plist de macOS.
