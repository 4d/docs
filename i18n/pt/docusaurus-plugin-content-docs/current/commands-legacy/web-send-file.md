---
id: web-send-file
title: WEB SEND FILE
slug: /commands/web-send-file
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND FILE.Syntax-->**WEB SEND FILE** ( *htmlArquivo* )<!-- END REF-->
<!--REF #_command_.WEB SEND FILE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| htmlArquivo | Text | &#8594;  | Rota do arquivo HTML ou string vazia para terminar SEND HTML FILE |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB SEND FILE.Summary-->O comando **WEB SEND FILE** envia ao navegador web a página HTML ou o arquivo web armazenado no documento cuja rota se passa em *arquivohtml*.<!-- END REF-->  

Por padrão, 4D busca o documento HTML no interior da pasta raiz, definida nas Propriedades do banco.

Este comando aceita como parâmetro uma rota de acesso expressa em sintaxe Posix (nomes de diretórios ou de pastas separados por uma barra oblíqua "/") ou em sintaxe sistema.  
Se passar uma rota de acesso inválida, se gera um erro asociado à gestão dos arquivos de seu sistema operativo. Pode interceptar este erro utilizando um método instalado pelo comando [ON ERR CALL](on-err-call.md). Se o método mostra uma caixa de diálogo de alerta ou de mensagem, aparecerá na máquina do navegador.  
Quando tiver executada a instrução **WEB SEND FILE**, a variável sistema OK se atualiza: se o arquivo a enviar existir e se o timeout não for passado, OK toma o valor 1\. Do contrário, toma o valor 0.  
  
**Nota**: se chama **WEB SEND FILE** desde um processo que não é um processo web, o comando não faz nada. Não se retorna nenhum erro e a chamada simplesmente é ignorada.  
  
As referências às variáveis 4D e a as etiquetas de tipo *4DSCRIPT* na página sempre se analizam quando o tipo de documento o permite (documento baseado em texto).

#### Exemplo 

A pasta raiz do banco de dados é a pasta WebDocs. Contém os elementos abaixo:

```4d
 ..\WebDocs\HTM\MyPage.HTM
```

Enviar a página web *"MinhaPagina.HTM"* pode ser efetuada da seguinte maneira :

```4d
 WEB SEND FILE("HTM/MinhaPagina.HTM")
```

#### Variáveis e conjuntos do sistema 

Se o arquivo a ser enviado existir e o timeout não tiver passado, OK é estabelecido a 1\. Senão, é igual a 0.

#### Ver também 

[WEB SEND BLOB](web-send-blob.md)  