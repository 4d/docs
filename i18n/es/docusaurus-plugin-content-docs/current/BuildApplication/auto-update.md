---
id: auto-update
title: AutoUpdate
sidebar_label: AutoUpdate
sidebar_position: 6
description: "Llaves XML BuildApplication del nodo AutoUpdate: elevar los privilegios de instalación del updater."
keywords: ["BuildApplication", "XML key", "AutoUpdate", "StartElevated", "updater"]
---

Estas llaves elevan los privilegios de instalación, para que el programa utilitario "updater" pueda instalar las [aplicaciones fusionadas actualizadas](../Desktop/managing-updates.md) en ubicaciones protegidas del sistema. Se encuentran bajo el nodo `<AutoUpdate>`.

Cuando una llave está en True y el updater tiene que actualizar una aplicación en una ubicación protegida, una caja de diálogo informa al usuario de que se requieren privilegios de administrador y le permite conectarse con una cuenta de administrador.

:::note

No se recomienda instalar aplicaciones fusionadas en la carpeta "Program Files" en Windows, ya que esta carpeta incluye mecanismos específicos incompatibles con las aplicaciones 4D.

:::

```xml
<Preferences4D>
  <BuildApp>
    <AutoUpdate>
      <CS>
        <Client>
          <StartElevated>True</StartElevated>
        </Client>
        <Server>
          <StartElevated>True</StartElevated>
        </Server>
      </CS>
    </AutoUpdate>
  </BuildApp>
</Preferences4D>
```

## StartElevated

**Valores**: True / False (por defecto)

Cuando es True, la actualización se realiza con los privilegios de administrador de la máquina. Cuando es False, la actualización se realiza sin elevar los privilegios.

| Ruta XML | Aplicación actualizada | Plataforma |
|---|---|---|
| `AutoUpdate/RuntimeVL/StartElevated` | Aplicación monopuesto | Sólo Windows (siempre False en macOS) |
| `AutoUpdate/CS/Server/StartElevated` | Aplicación servidor | Sólo Windows (siempre False en macOS) |
| `AutoUpdate/CS/Client/StartElevated` | Aplicación cliente | Sólo Windows (siempre False en macOS) |
| `AutoUpdate/CS/ClientUpdateWin/StartElevated` | Aplicación cliente Windows, generada en macOS | Sólo macOS (ignorada en Windows) |
