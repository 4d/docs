---
id: system-info
title: System info
slug: /commands/system-info
displayed_sidebar: docs
---

<!--REF #_command_.System info.Syntax-->**System info**  : Object<!-- END REF-->
<!--REF #_command_.System info.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Object | &#8592; | Informação do sistema |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.System info.Summary-->O comando **System info** devolve um objeto que contém informação sobre o sistema operativo e as características do hardware e software do sistema da máquina em que é executado.<!-- END REF-->

O comando devolve a informação abaixo:

| Propriedade       | |             | Tipo                         | Descrição                                                                                                                                                                                       | Exemplo                                                                         |
|-------------------|----------------|-------------|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| accountName       |                |             | string                       | O nome da conta para o usuário atual. Normalmente se usa para identificar uma conta no diretório.                                                                                               | "msmith"                                                                        |
| cores             |                |             | número                       | Número total de núcleos. No caso de máquinas virtuais, a quantidade total de núcleos assignados.                                                                                                | 4                                                                               |
| cpuThreads        |                |             | número                       | Número total de threads.                                                                                                                                                                        | 8                                                                               |
| machineName       |                |             | cadena                       | O nome da máquina como se define nos parâmetros de rede do sistema operativo.                                                                                                                   | "LAPTOP-M3BLHGSG"                                                               |
| model             |                |             | cadena                       | Nome do modelo do computador.                                                                                                                                                                   | "iMac12,2", "Dell", "Acer", "VMware", etc.                                      |
| networkInterfaces |                |             | coleção                      | Endereços de rede físicas e ativas apenas                                                                                                                                                       |                                                                                 |
|                   | ipAddresses    |             | coleção                      |                                                                                                                                                                                                 |                                                                                 |
|                   |                | ip          | cadena                       | O endereço da interface de rede                                                                                                                                                                 | "129.186.81.80"                                                                 |
|                   |                | type        | cadena                       | O tipo da interface de red                                                                                                                                                                      | "ipv4", "ipv6"                                                                  |
|                   | name           |             | cadena                       | O nome da interface..                                                                                                                                                                           | "Intel(R) 82574L Gigabit Network Connection"                                    |
|                   | type           |             | cadena                       | O tipo de interface.                                                                                                                                                                            | "wifi", "ethernet"                                                              |
| osVersion         |                |             | cadena                       | A versão do sistema operativo e o número de compilação (*).                                                                                                                                     | "Microsoft Windows 10 Professionnel 10.0.14393"                                 |
| osLanguage        |                |             | cadena                       | Idioma estabelecido pelo usuário atual de sistema. Expressado no padrão definido pelo RFC 3066. Ver Códigos da linguagem no manual de Desenho para obter uma lista completa.                    | "fr", "en", "ja", "de", etc.                                                    |
| physicalMemory    |                |             | número                       | O volume de armazenamento de memória (em kilobytes) disponível na máquina.                                                                                                                      | 16777216                                                                        |
| processor         |                |             | cadena                       | O nome, tipo e velocidade do processador.                                                                                                                                                       | "Intel(R) Core(TM) i7-2600 CPU @ 3.40GHz"                                       |
| uptime            |                |             | número                       | O tempo total (em segundos) desde que se iniciou a máquina.                                                                                                                                     | 3600                                                                            |
| userName          |                |             | cadena                       | O usuário atual na máquina. Normalmente se utiliza como o nome a mostrar (ou seja, ao iniciar sessão em seu computador).                                                                        | "Mary Smith"                                                                    |
| volumes           |                |             | collection                   |                                                                                                                                                                                                 |                                                                                 |
|                   | available      |             | número                       | O espaço restante que pode ser usado.                                                                                                                                                           | 524288                                                                          |
|                   | capacity       |             | número                       | Volume total possível (em kilobytes).                                                                                                                                                           | 1048576                                                                         |
|                   | disk           |             | objeto \| coleção (mac only) |                                                                                                                                                                                                 |                                                                                 |
|                   |                | description | cadena                       | Um breve resumo que descreve o disco.                                                                                                                                                           | "HP LOGICAL VOLUME SCSI Disk Device"                                            |
|                   |                | identifier  | cadena                       | ID de disco(s) (UUID em Mac e disco físico em Windows)                                                                                                                                          | Mac - "87547BDD-EA75-4F48-8BFA-9A7E393EEAB0", Windows - "\\\\.\\PHYSICALDRIVE0" |
|                   |                | size        | número                       | A capacidade total (em kilobytes) do disco                                                                                                                                                      | 104857600                                                                       |
|                   |                | interface   | cadena                       | O tipo de interface na máquina.                                                                                                                                                                 | "USB", "network", ,"SATA", "SCSI", "cd/dvd", "PCI"                              |
|                   | fileSystem     |             | cadena                       | O sistema de arquivos utilizado pelo sistema operativo para armazenar e recuperar arquivos no disco duro.                                                                                       | "NTFS", "Journaled HFS+", "GPFS", etc.                                          |
|                   | mountPoint     |             | cadena                       | O diretório no sistema de arquivos atualmente acessível no que está montado um sistema de arquivos adicional (ou seja, conectado lógicamente). Lembre que isso está em formato POSIX para Macs. | Mac -  "/Volumes/Free HD", Windows - "C:"                                       |
|                   | name           |             | cadena                       | só em Mac - nome do volume                                                                                                                                                                      | "iMac-27-Program6"                                                              |
|                   |                |             |                              |                                                                                                                                                                                                 |                                                                                 |

(\*) Para determinar só a plataforma que se utiliza, há dois comandos disponíveis: [Is macOS](is-macos.md) e [Is Windows](is-windows.md).

**Nota**: no caso das máquinas virtuais, a informação devolvida será a da máquina virtual.

#### Exemplo 

O código abaixo é numa máquina Windows:

```4d
 var $systemInfo : Object
 $systemInfo:=System info
```

devolve um objeto que contém a informação abaixo:

```json
{
   "machineName":"LAPTOP-M3BLHGSG",
   "osVersion":"Windows 10 Pro 1809 (17763.1577)",
   "osLanguage":"fr",
   "accountName":"msmith",
   "userName":"mary smith",
   "processor":"Intel(R) Core(TM) i7-2600 CPU @ 3.40GH 3.39GHz",
   "cores":4,
   "cpuThreads":8,
   "networkInterfaces":[
      {
         "type":"ethernet",
         "name":"Intel(R) 82574L Gigabit Network Connection",
         "ipAddresses":[
            {
               "type":"ipV4",
               "ip":"129.138.10.17"
            },
            {
               "type":"ipV6",
               "ip":"z1009:0yxw:0000:85v6:0000:0000:ut1s:8001"
            }
         ]
      },
      {
         "type":"wifi",
         "name":"Wi-Fi",
         "ipAddresses":[
            {
               "type":"ipV4",
               "ip":"129.138.50.8"
            },
            {
               "type":"ipV6",
               "ip":"a1002:0bc8:0000:85d6:0000:0000:ef1g:7001"
            }
         ]
      }
   ],
   "uptime":3600,
   "model":"HP",
   "macRosetta":false,
   "physicalMemory":16777216,
   "volumes":[
      {
         "mountPoint":"C:",
         "capacity":1048576,
         "available":524288,
         "fileSystem":"NTFS",
         "disk":{
            "identifier":"\\\\.\\PHYSICALDRIVE0",
            "interface":"SCSI",
            "size":157284382,
            "description":"Lecteur de disque"
         }
      },
      {
         "mountPoint":"E:",
         "capacity":51198972,
         "available":51025280,
         "fileSystem":"NTFS",
         "disk":{
            "identifier":"\\\\.\\PHYSICALDRIVE0",
            "interface":"SCSI",
            "size":157284382,
            "description":"Lecteur de disque"
         }
      }
   ]
}
```

#### Ver também 

[Application info](application-info.md)  
[Is macOS](is-macos.md)  
[Is Windows](is-windows.md)  