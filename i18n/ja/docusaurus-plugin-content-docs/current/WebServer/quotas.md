---
id: quotas
title: Web server quotas
---

Web applications can receive requests from many different clients, generating varying levels of traffic and resource consumption. Without appropriate limits, excessive activity from one or more clients can affect Web server performance and availability.
Web server quotas let you control resource usage by limiting traffic, requests, active sessions, Guest sessions, and REST entity sets. Quotas can be configured at the web server global level (for all sessions combined), at the session default level (for each new session) or at the current REST session level.

## 要件

Quota configuration requires [scalable sessions](./sessions.md#enabling-web-sessions) to be enabled.

## How to configure quotas

### 開始時

At startup, you can configure quotas in the `quotas` property passed to [`WebServer.start()`](../API/WebServerClass.md#start) for the host Web server or a component Web server. For the host Web server only, you can also load quotas from a **QuotaManager.json** file stored in the [`Project/Sources`](../Project/architecture.md#sources) folder.

#### Using the `quotas` property

Quotas can be defined using the `quotas` property in the *settings* parameter passed to the [`start()`](../API/WebServerClass.md#start) function.

```4d

var $quotas:={}
$quotas.inBytesPerMin:=20000000

WEB Server().start({quotas: $quotas})
```

#### Using a QuotaManager.json file

For the host Web server, you can create a **QuotaManager.json** file and store it in the [`Project/Sources`](../Project/architecture.md#sources) folder. This file will loaded at startup by the host Web server. The file must contain a JSON object whose properties are [quota property names](../API/QuotaManagerClass.md):

```json title="/Project/Sources/QuotaManager.json"
{
    "inBytesPerHour": 100000000,
    "inBytesPerHourPerSession": 10000000,
    "nbRequestsPerMin": 1000,
    "nbRequestsPerMinPerSession": 100
}
```

If the **QuotaManager.json** file contains malformed JSON, the Web server does not start and returns error *551 - JSON malformed*.

If `settings.quotas` is provided when the Web server starts, **QuotaManager.json** is ignored.

### At runtime

For a running Web server, you can update quotas through the [`WebServer.quotas`](../API/WebServerClass.md#quotas) property. Changes are applied to subsequent Web server activity; session default quotas apply to new sessions created after the quota value is updated.

### Current REST session quotas

The [`Session.quotas`](../API/SessionClass.md#quotas) property configures quotas for the current REST session. It provides current usage values and lets you configure the session's REST entity-set limits and timeouts. These quotas are distinct from the session default quotas configured through [`WebServer.quotas`](../API/WebServerClass.md#quotas), which are applied when new Web sessions are created.

### 例題

The following example configures web server quotas at startup for an internal application used by approximately 20 people with occasional usage:

```4d

var $quotas:={}

// Maximum number of input bytes accepted in a one-minute time window on the web server
$quotas.inBytesPerMin:=20000000

// Maximum number of output bytes sent in a one-minute time window for a session
$quotas.outBytesPerMinPerSession:=10000000

// Maximum number of active sessions on the web server
$quotas.nbSessions:=50

// Maximum number of unauthenticated sessions on the web server
$quotas.nbGuestSessions:=10

// Maximum number of requests accepted in a one-minute time window on the web server
$quotas.nbRequestsPerMin:=500

// Maximum number of requests accepted in a one-hour time window on the web server
$quotas.nbRequestsPerHour:=20000

// We launch the Web server
WEB Server().start({quotas: $quotas})
```

## Quota enforcement

For each incoming request, the Web server checks quotas during preprocessing, before the [`On Web Connection`](./httpRequests.md#on-web-connection) database method is called (if defined):

1. If a session quota is configured, it is checked first.
2. If the request is accepted, the server global quota is checked.
3. If both checks pass, the request is processed.

If either quota is exceeded, the request is rejected with an **HTTP 429 Too Many Requests** response. No web process is created and [`On Web Connection`](./httpRequests.md#on-web-connection) is not called (if defined).

If an output byte quota is exceeded while a response is being sent, the current request is interrupted. The preprocessing rules above apply to the next request in the same time window.

### Rate limiting responses

Rate-limiting quotas use fixed time windows. When a quota is reached, subsequent requests are rejected until the current one-minute or one-hour window ends. The **HTTP 429 Too Many Requests** response includes a `Retry-After` header containing the time to wait before sending another request.

When one of concurrent quotas (`nbSessions`, `nbGuestSessions`, and `nbEntitySetsPerSession`) is reached, the response includes an empty `Retry-After` header until the quota is no longer reached.

The input byte quotas apply to all data received for a request, including its headers and body. The output byte quotas are evaluated against the uncompressed response size, regardless of the Web server compression settings.

## Quota values

Quota limits must be positive integers. An *Undefined* value means that the quota is not configured and is not enforced. Setting a quota value to zero or a negative number raises an error, and the existing quota value remains unchanged.

Quota counters are stored in memory for each 4D Server instance and are not shared between multiple server instances.

## Component Web servers

Quotas configured for a component Web server apply only to that server and are independent of the quotas configured for the host Web server or other component Web servers.

The [**QuotaManager.json**](#using-a-quotamanagerjson-file) configuration file applies only to the host Web server. Component Web servers must be configured with the Web server [`.quotas`](../API/WebServerClass.md#quotas) property and/or the session  [`.quotas`](../API/SessionClass.md#quotas) property.

## 参照

- [`WebServer.quotas`](../API/WebServerClass.md#quotas)
- [`WebServer.start()`](../API/WebServerClass.md#start)
- [`Session.quotas`](../API/SessionClass.md#quotas)
- [`4D.QuotaManager`](../API/QuotaManagerClass.md)