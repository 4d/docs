---
id: versioning
title: Versioning keys
sidebar_label: Versioning
sidebar_position: 5
description: "BuildApplication XML keys of the Versioning node: version number, copyright and file information of built applications."
keywords: ["BuildApplication", "XML key", "Versioning", "version", "copyright"]
---

These keys define the version number and the file information of the built applications. They are located under the `<Versioning>` node, in one of the following sub-nodes:

| Sub-node | Key prefix | Applies to | Default value if omitted |
|---|---|---|---|
| `<Common>` | Common | All built applications | Value of the 4D application |
| `<RuntimeVL>` | RuntimeVL | Single-user applications (4D Volume Desktop) | `Common...` key, then value of 4D Volume Desktop |
| `<Client>` | Client | Client applications (4D Volume Desktop) | `Common...` key, then value of 4D Volume Desktop |
| `<Server>` | Server | Server applications (4D Server) | `Common...` key, then value of 4D Server |

Each sub-node accepts the same ten keys, named *prefix* + *information* (for example `CommonVersion`, `ClientVersion`, `ServerVersion`, `RuntimeVLVersion`). When both a specific key and the corresponding `Common...` key are defined, the specific key is used.

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

## Keys

| Information | Keys | Platform | Values | Updated field |
|---|---|---|---|---|
| <a name="version"></a>Version | CommonVersion, RuntimeVLVersion, ClientVersion, ServerVersion | Windows, macOS | Version number (x.x.x) | Windows: Product version<br/>macOS: `CFBundleShortVersionString` and `CFBundleVersion` in info.plist |
| <a name="copyright"></a>Copyright | CommonCopyright, RuntimeVLCopyright, ClientCopyright, ServerCopyright | Windows, macOS | Text | Windows: Copyright<br/>macOS: `NSHumanReadableCopyright` in info.plist |
| <a name="creator"></a>Creator | CommonCreator, RuntimeVLCreator, ClientCreator, ServerCreator | macOS | 4 characters max | Creator code of the application |
| <a name="comment"></a>Comment | CommonComment, RuntimeVLComment, ClientComment, ServerComment | Windows | 31 characters max | Comment |
| <a name="companyname"></a>CompanyName | CommonCompanyName, RuntimeVLCompanyName, ClientCompanyName, ServerCompanyName | Windows | 31 characters max | Company name |
| <a name="filedescription"></a>FileDescription | CommonFileDescription, RuntimeVLFileDescription, ClientFileDescription, ServerFileDescription | Windows | 31 characters max | File description |
| <a name="internalname"></a>InternalName | CommonInternalName, RuntimeVLInternalName, ClientInternalName, ServerInternalName | Windows | 31 characters max | Internal name |
| <a name="legaltrademark"></a>LegalTrademark | CommonLegalTrademark, RuntimeVLLegalTrademark, ClientLegalTrademark, ServerLegalTrademark | Windows | 31 characters max | Legal trademarks |
| <a name="privatebuild"></a>PrivateBuild | CommonPrivateBuild, RuntimeVLPrivateBuild, ClientPrivateBuild, ServerPrivateBuild | Windows | 31 characters max | Private build |
| <a name="specialbuild"></a>SpecialBuild | CommonSpecialBuild, RuntimeVLSpecialBuild, ClientSpecialBuild, ServerSpecialBuild | Windows | 31 characters max | Special build |

On Windows, the updated fields are displayed in the **Properties** window of the application file. Keys that apply to one platform only are ignored on the other platform.

See also [Generated files](../Desktop/building.md#generated-files) for the macOS info.plist file.
