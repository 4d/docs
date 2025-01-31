---
id: http-set-certificates-folder
title: HTTP SET CERTIFICATES FOLDER
slug: /commands/http-set-certificates-folder
displayed_sidebar: docs
---

<!--REF #_command_.HTTP SET CERTIFICATES FOLDER.Syntax-->**HTTP SET CERTIFICATES FOLDER** ( *pastaCertificados* )<!-- END REF-->
<!--REF #_command_.HTTP SET CERTIFICATES FOLDER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| pastaCertificados | Text | &#8594;  | Caminho e nome da pasta de certificados do cliente |

<!-- END REF-->

:::info Compatibilidade

Esse comando é mantido apenas por motivos de compatibilidade. Agora é recomendável usar [`4D.HTTPRequest class`](../API/HTTPRequestClass.md).

:::

#### Descrição 

<!--REF #_command_.HTTP SET CERTIFICATES FOLDER.Summary-->O comando **HTTP SET CERTIFICATES FOLDER** permite modificar a pasta de certificados cliente ativa para o conjunto dos processos na sessão atual.<!-- END REF-->

A pasta de certificados cliente é na qual 4D busca os arquivos de certificados cliente que são requeridos pelos servidores web. Por padrão, sempre e quando o comando **HTTP SET CERTIFICATES FOLDER** não se execute, 4D utiliza uma pasta chamada "ClientCertificatesFolder " que é criado junto ao arquivo de estrutura. Esta pasta é criada unicamente quando é necessário.  
  
Em 4D v14, agora é possível utilizar vários certificados clientes.  
  
Em *pastaCertificados*, passe a rota de acesso da pasta personalizada que contém os certificados clientes. Pode passar uma rota de acesso relativa ao arquivo de estrutura da aplicação, ou uma rota de acesso absoluta. A rota deve ser expressada com a sintaxe do sistema, por exemplo:

* (OS X): Disk:Applications:myserv:folder
* (Windows): C:\\Applications\\myserv\\folder

Uma vez executado este comando, a nova rota é levada em conta imediatamente (não é necessário reiniciar a aplicação). Se utiliza em todos os processos da base.

Se a pasta especificada não existe na localização definida, ou se a rota de acesso passada em *pastaCertificados* não é válida, é gerado um erro. Pode interceptar este erro utilizando um método de gestão de erros instalado pelo comando [ON ERR CALL](on-err-call.md).

#### Sobre certificados SSL 

[Como descrito nesta página](../Admin/tls.md), certificados SSL gerenciado por 4D deve ser no **PEM format**. Se seu provedor de certificado (por exemplo, [startssl](https://www.startssl.com/)) enviar para você um certificado que esteja no formato binário, como .crt, .pfx ou .p12 (o formato também depende de seu navegador), você terá que converter o formato para o PEM format antes de poder utilizã-lo. Há web sites como *sslshopper* onde se pode fazer essa conversão on-line.

#### Exemplo 

Você quer mudar temporalmente a pasta de certificados:

```4d
 var $certifFolder : Text
 $certifFolder :=HTTP Get certificates folder //guardar pasta atual
 HTTP SET CERTIFICATES FOLDER("C:/temp/certifTempo/")
 ... // Execução de petições específicas
 HTTP SET CERTIFICATES FOLDER($certifFolder) //restabelecer a pasta anterior
```

#### Ver também 

[GENERATE CERTIFICATE REQUEST](generate-certificate-request.md)  
[HTTP Get certificates folder](http-get-certificates-folder.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1306 |
| Thread-seguro | &check; |


