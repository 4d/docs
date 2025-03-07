module.exports =
{
  docs: [
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
        title: "Getting Started",
        slug: "/category/getting-started",
        keywords: [
          "start"
        ],
        image: "/img/docusaurus.png"
      },
      items: [
        "GettingStarted/installation",
        "GettingStarted/creating",
        "Notes/updates"
      ]
    },
    {
      type: "category",
      label: "Core Development",
      link: {
        type: "generated-index",
        title: "Core Development",
        slug: "/category/core-development",
        keywords: [
          "core"
        ],
        image: "/img/docusaurus.png"
      },
      items: [
        {
          type: "category",
          label: "Project Management",
          link: {
            type: "doc",
            id: "Project/overview"
          },
          items: [
            "Project/architecture",
            {
              type: "category",
              label: "Settings",
              link: {
                type: "doc",
                id: "settings/overview"
              },
              items: [
                "settings/general",
                "settings/interface",
                "settings/compiler",
                "settings/database",
                "settings/backup",
                "settings/client-server",
                "settings/web",
                "settings/sql",
                "settings/php",
                "settings/security",
                "settings/compatibility"
              ]
            },
            "Project/components",
            "Project/date-time-formats",
            "Project/documentation"
          ]
        },
        {
          type: "category",
          label: "Development Environment",
          items: [
            "Project/code-overview",
            "code-editor/write-class-method",
            "Project/compiler",
            {
              type: "category",
              label: "Debugging",
              link: {
                type: "doc",
                id: "Debugging/basics"
              },
              items: [
                "Debugging/debugger",
                "Debugging/breakpoints",
                "Debugging/debugging-remote"
              ]
            },
            "Debugging/debugLogFiles"
          ]
        },
        {
          type: "category",
          label: "ORDA",
          link: {
            type: "doc",
            id: "ORDA/overview"
          },
          items: [
            "ORDA/dsmapping",
            "ORDA/ordaClasses",
            "ORDA/entities",
            "ORDA/global-stamp",
            "ORDA/datastores",
            "ORDA/privileges",
            "ORDA/client-server-optimization",
            "ORDA/glossary"
          ]
        },
        {
          type: "category",
          label: "Processes",
          items: [
            "Develop/processes",
            "Develop/preemptive-processes"
          ]
        },
        "Tags/transformation-tags",
        {
          type: "category",
          label: "Preferences",
          link: {
            type: "doc",
            id: "Preferences/overview"
          },
          items: [
            "Preferences/general",
            "Preferences/structure",
            "Preferences/forms",
            "Preferences/methods",
            "Preferences/shortcuts"
          ]
        }
      ]
    },
    {
      type: "category",
      label: "4D Language",
      link: {
        type: "generated-index",
        title: "4D Language",
        slug: "/category/4d-language",
        keywords: [
          "language"
        ],
        image: "/img/docusaurus.png"
      },
      items: [
        {
          type: "category",
          label: "Concepts",
          items: [
            "Concepts/about",
            "Concepts/quick-tour",
            "Concepts/operators",
            {
              type: "category",
              label: "Data Types",
              link: {
                type: "doc",
                id: "Concepts/data-types"
              },
              items: [
                "Concepts/blob",
                "Concepts/boolean",
                "Concepts/collection",
                "Concepts/date",
                "Concepts/null-undefined",
                "Concepts/number",
                "Concepts/object",
                "Concepts/picture",
                "Concepts/pointer",
                "Concepts/string",
                "Concepts/time",
                "Concepts/variant"
              ]
            },
            "Concepts/variables",
            "Concepts/arrays",
            "Concepts/methods",
            "Concepts/parameters",
            "Concepts/shared",
            "Concepts/classes",
            "Concepts/control-flow",
            "Concepts/error-handling",
            "Concepts/interpreted-compiled",
            "Concepts/components",
            "Concepts/plug-ins",
            "Concepts/identifiers",
            "Concepts/paths"
          ]
        },
        {
          type: "category",
          label: "Commands",
          link: {
            type: "generated-index",
            title: "Commands",
            slug: "/category/commands",
            keywords: [
              "commands"
            ],
            image: "/img/docusaurus.png"
          },
          items: [
            "commands/command-index",
            {
              type: "category",
              label: "4D Environment",
              link: {
                type: "doc",
                id: "commands/theme/4D_Environment"
              },
              items: [
                "commands-legacy/application-file",
                "commands-legacy/application-info",
                "commands-legacy/application-type",
                "commands-legacy/application-version",
                "commands-legacy/build-application",
                "commands-legacy/compact-data-file",
                "commands-legacy/component-list",
                "commands-legacy/create-data-file",
                "commands/create-entity-selection",
                "commands-legacy/data-file",
                "commands-legacy/database-measures",
                "commands-legacy/drop-remote-user",
                "commands/ds",
                "commands-legacy/export-structure-file",
                "commands-legacy/get-4d-file",
                "commands-legacy/get-4d-folder",
                "commands-legacy/get-database-localization",
                "commands-legacy/get-database-parameter",
                "commands-legacy/last-update-log-path",
                "commands-legacy/is-compiled-mode",
                "commands-legacy/is-data-file-locked",
                "commands-legacy/notify-resources-folder-modification",
                "commands-legacy/open-administration-window",
                "commands-legacy/open-data-file",
                "commands-legacy/open-database",
                "commands/open-datastore",
                "commands-legacy/open-runtime-explorer",
                "commands-legacy/open-security-center",
                "commands-legacy/open-settings-window",
                "commands-legacy/plugin-list",
                "commands-legacy/quit-4d",
                "commands-legacy/reject-new-remote-connections",
                "commands-legacy/reload-project",
                "commands-legacy/restart-4d",
                "commands-legacy/send-message-to-remote-user",
                "commands-legacy/set-database-localization",
                "commands-legacy/set-database-parameter",
                "commands-legacy/set-update-folder",
                "commands-legacy/structure-file",
                "commands-legacy/table-fragmentation",
                "commands/use-entity-selection",
                "commands-legacy/verify-current-data-file",
                "commands-legacy/verify-data-file",
                "commands-legacy/version-type"
              ]
            },
            {
              type: "category",
              label: "Arrays",
              link: {
                type: "doc",
                id: "commands/theme/Arrays"
              },
              items: [
                "commands-legacy/append-to-array",
                "commands-legacy/array-blob",
                "commands-legacy/array-boolean",
                "commands-legacy/array-date",
                "commands-legacy/array-integer",
                "commands-legacy/array-longint",
                "commands-legacy/array-object",
                "commands-legacy/array-picture",
                "commands-legacy/array-pointer",
                "commands-legacy/array-real",
                "commands-legacy/array-text",
                "commands-legacy/array-time",
                "commands-legacy/array-to-list",
                "commands-legacy/array-to-selection",
                "commands-legacy/boolean-array-from-set",
                "commands-legacy/copy-array",
                "commands-legacy/count-in-array",
                "commands-legacy/delete-from-array",
                "commands-legacy/distinct-attribute-paths",
                "commands-legacy/distinct-attribute-values",
                "commands-legacy/distinct-values",
                "commands-legacy/find-in-array",
                "commands-legacy/find-in-sorted-array",
                "commands-legacy/insert-in-array",
                "commands-legacy/list-to-array",
                "commands-legacy/longint-array-from-selection",
                "commands-legacy/multi-sort-array",
                "commands-legacy/selection-range-to-array",
                "commands-legacy/selection-to-array",
                "commands-legacy/size-of-array",
                "commands-legacy/sort-array",
                "commands-legacy/text-to-array"
              ]
            },
            {
              type: "category",
              label: "Backup",
              link: {
                type: "doc",
                id: "commands/theme/Backup"
              },
              items: [
                "commands-legacy/backup",
                "commands-legacy/backup-info",
                "commands-legacy/check-log-file",
                "commands-legacy/integrate-mirror-log-file",
                "commands-legacy/log-file",
                "commands-legacy/log-file-to-json",
                "commands-legacy/new-log-file",
                "commands-legacy/restore",
                "commands-legacy/restore-info",
                "commands-legacy/select-log-file"
              ]
            },
            {
              type: "category",
              label: "BLOB",
              link: {
                type: "doc",
                id: "commands/theme/BLOB"
              },
              items: [
                "commands-legacy/blob-properties",
                "commands-legacy/blob-size",
                "commands-legacy/blob-to-document",
                "commands-legacy/blob-to-integer",
                "commands-legacy/blob-to-list",
                "commands-legacy/blob-to-longint",
                "commands-legacy/blob-to-real",
                "commands-legacy/blob-to-text",
                "commands-legacy/blob-to-variable",
                "commands-legacy/compress-blob",
                "commands-legacy/copy-blob",
                "commands-legacy/decrypt-blob",
                "commands-legacy/delete-from-blob",
                "commands-legacy/document-to-blob",
                "commands-legacy/encrypt-blob",
                "commands-legacy/expand-blob",
                "commands-legacy/insert-in-blob",
                "commands-legacy/integer-to-blob",
                "commands-legacy/list-to-blob",
                "commands-legacy/longint-to-blob",
                "commands-legacy/real-to-blob",
                "commands-legacy/set-blob-size",
                "commands-legacy/text-to-blob",
                "commands-legacy/variable-to-blob"
              ]
            },
            {
              type: "category",
              label: "Boolean",
              link: {
                type: "doc",
                id: "commands/theme/Boolean"
              },
              items: [
                "commands-legacy/bool",
                "commands-legacy/false",
                "commands-legacy/not",
                "commands-legacy/true"
              ]
            },
            {
              type: "category",
              label: "Cache Management",
              link: {
                type: "doc",
                id: "commands/theme/Cache_Management"
              },
              items: [
                "commands-legacy/adjust-blobs-cache-priority",
                "commands-legacy/adjust-index-cache-priority",
                "commands-legacy/adjust-table-cache-priority",
                "commands-legacy/cache-info",
                "commands-legacy/flush-cache",
                "commands-legacy/get-adjusted-blobs-cache-priority",
                "commands-legacy/get-adjusted-index-cache-priority",
                "commands-legacy/get-adjusted-table-cache-priority",
                "commands-legacy/get-cache-size",
                "commands-legacy/memory-statistics",
                "commands-legacy/set-blobs-cache-priority",
                "commands-legacy/set-cache-size",
                "commands-legacy/set-index-cache-priority",
                "commands-legacy/set-table-cache-priority"
              ]
            },
            {
              type: "category",
              label: "Collections",
              link: {
                type: "doc",
                id: "commands/theme/Collections"
              },
              items: [
                "commands-legacy/array-to-collection",
                "commands-legacy/collection-to-array",
                "commands/new-collection",
                "commands/new-shared-collection"
              ]
            },
            {
              type: "category",
              label: "Communications",
              link: {
                type: "doc",
                id: "commands/theme/Communications"
              },
              items: [
                "commands-legacy/get-serial-port-mapping",
                "commands-legacy/receive-buffer",
                "commands-legacy/receive-packet",
                "commands-legacy/receive-record",
                "commands-legacy/receive-variable",
                "commands-legacy/send-packet",
                "commands-legacy/send-record",
                "commands-legacy/send-variable",
                "commands-legacy/set-channel",
                "commands-legacy/set-timeout",
                "commands-legacy/use-character-set"
              ]
            },
            {
              type: "category",
              label: "Compiler",
              link: {
                type: "doc",
                id: "commands/theme/Compiler"
              },
              items: [
                "commands/compile-project",
                "commands-legacy/idle"
              ]
            },
            {
              type: "category",
              label: "Data Entry",
              link: {
                type: "doc",
                id: "commands/theme/Data_Entry"
              },
              items: [
                "commands-legacy/accept",
                "commands-legacy/add-record",
                "commands-legacy/cancel",
                "commands/dialog",
                "commands-legacy/modified",
                "commands-legacy/modify-record",
                "commands-legacy/old",
                "commands-legacy/reject"
              ]
            },
            {
              type: "category",
              label: "Data Security",
              link: {
                type: "doc",
                id: "commands/theme/Data_Security"
              },
              items: [
                "commands-legacy/data-file-encryption-status",
                "commands-legacy/decrypt-data-blob",
                "commands-legacy/discover-data-key",
                "commands-legacy/encrypt-data-blob",
                "commands-legacy/encrypt-data-file",
                "commands-legacy/new-data-key",
                "commands-legacy/register-data-key"
              ]
            },
            {
              type: "category",
              label: "Database Methods",
              link: {
                type: "doc",
                id: "commands/theme/Database_Methods"
              },
              items: [
                "commands-legacy/on-backup-shutdown-database-method",
                "commands-legacy/on-backup-startup-database-method",
                "commands-legacy/on-drop-database-method",
                "commands-legacy/on-exit-database-method",
                "commands-legacy/on-host-database-event-database-method",
                "commands-legacy/on-mobile-app-action-database-method",
                "commands-legacy/on-mobile-app-authentication-database-method",
                "commands-legacy/on-rest-authentication-database-method",
                "commands-legacy/on-server-close-connection-database-method",
                "commands-legacy/on-server-open-connection-database-method",
                "commands-legacy/on-server-shutdown-database-method",
                "commands-legacy/on-server-startup-database-method",
                "commands-legacy/on-sql-authentication-database-method",
                "commands-legacy/on-startup-database-method",
                "commands-legacy/on-system-event-database-method",
                "commands-legacy/on-web-authentication-database-method",
                "commands-legacy/on-web-connection-database-method",
                "commands-legacy/on-web-legacy-close-session-database-method"
              ]
            },
            {
              type: "category",
              label: "Date and Time",
              link: {
                type: "doc",
                id: "commands/theme/Date_and_Time"
              },
              items: [
                "commands-legacy/add-to-date",
                "commands-legacy/current-date",
                "commands-legacy/current-time",
                "commands-legacy/date",
                "commands-legacy/day-number",
                "commands-legacy/day-of",
                "commands-legacy/milliseconds",
                "commands-legacy/month-of",
                "commands-legacy/set-default-century",
                "commands-legacy/tickcount",
                "commands-legacy/time",
                "commands-legacy/time-string",
                "commands-legacy/timestamp",
                "commands-legacy/year-of"
              ]
            },
            {
              type: "category",
              label: "Design Object Access",
              link: {
                type: "doc",
                id: "commands/theme/Design_Object_Access"
              },
              items: [
                "commands-legacy/current-method-path",
                "commands/form-edit",
                "commands-legacy/form-get-names",
                "commands-legacy/method-get-attribute",
                "commands-legacy/method-get-attributes",
                "commands-legacy/method-get-code",
                "commands-legacy/method-get-comments",
                "commands-legacy/method-get-folders",
                "commands-legacy/method-get-modification-date",
                "commands-legacy/method-get-names",
                "commands-legacy/method-get-path",
                "commands-legacy/method-get-paths",
                "commands-legacy/method-get-paths-form",
                "commands-legacy/method-open-path",
                "commands-legacy/method-resolve-path",
                "commands-legacy/method-set-access-mode",
                "commands-legacy/method-set-attribute",
                "commands-legacy/method-set-attributes",
                "commands-legacy/method-set-code",
                "commands-legacy/method-set-comments"
              ]
            },
            {
              type: "category",
              label: "Drag and Drop",
              link: {
                type: "doc",
                id: "commands/theme/Drag_and_Drop"
              },
              items: [
                "commands-legacy/drop-position",
                "commands-legacy/set-drag-icon"
              ]
            },
            {
              type: "category",
              label: "Entry Control",
              link: {
                type: "doc",
                id: "commands/theme/Entry_Control"
              },
              items: [
                "commands-legacy/edit-item",
                "commands-legacy/filter-keystroke",
                "commands-legacy/get-edited-text",
                "commands-legacy/get-highlight",
                "commands-legacy/goto-object",
                "commands-legacy/highlight-text",
                "commands-legacy/is-editing-text",
                "commands-legacy/keystroke"
              ]
            },
            {
              type: "category",
              label: "File and Folder",
              link: {
                type: "doc",
                id: "commands/theme/File_and_Folder"
              },
              items: [
                "commands/file",
                "commands/folder",
                "commands/zip-create-archive",
                "commands/zip-read-archive"
              ]
            },
            {
              type: "category",
              label: "Form Events",
              link: {
                type: "doc",
                id: "commands/theme/Form_Events"
              },
              items: [
                "commands-legacy/activated",
                "commands-legacy/after",
                "commands-legacy/before",
                "commands-legacy/call-form",
                "commands-legacy/call-subform-container",
                "commands-legacy/clickcount",
                "commands-legacy/contextual-click",
                "commands-legacy/deactivated",
                "commands-legacy/execute-method-in-subform",
                "commands/form-event",
                "commands/form-event-code",
                "commands-legacy/in-break",
                "commands-legacy/in-footer",
                "commands-legacy/in-header",
                "commands-legacy/is-waiting-mouse-up",
                "commands-legacy/outside-call",
                "commands-legacy/post-outside-call",
                "commands-legacy/right-click",
                "commands-legacy/set-timer"
              ]
            },
            {
              type: "category",
              label: "Forms",
              link: {
                type: "doc",
                id: "commands/theme/Forms"
              },
              items: [
                "commands-legacy/current-form-name",
                "commands/form",
                "commands-legacy/form-convert-to-dynamic",
                "commands-legacy/form-first-page",
                "commands-legacy/form-get-color-scheme",
                "commands-legacy/form-get-current-page",
                "commands-legacy/form-get-entry-order",
                "commands-legacy/form-get-horizontal-resizing",
                "commands-legacy/form-get-objects",
                "commands-legacy/form-get-properties",
                "commands-legacy/form-get-vertical-resizing",
                "commands-legacy/form-goto-page",
                "commands-legacy/form-last-page",
                "commands/form-load",
                "commands-legacy/form-next-page",
                "commands-legacy/form-previous-page",
                "commands-legacy/form-screenshot",
                "commands-legacy/form-set-entry-order",
                "commands-legacy/form-set-horizontal-resizing",
                "commands-legacy/form-set-input",
                "commands-legacy/form-set-output",
                "commands-legacy/form-set-size",
                "commands-legacy/form-set-vertical-resizing",
                "commands-legacy/form-unload"
              ]
            },
            {
              type: "category",
              label: "Formulas",
              link: {
                type: "doc",
                id: "commands/theme/Formulas"
              },
              items: [
                "commands-legacy/edit-formula",
                "commands-legacy/execute-formula",
                "commands/formula",
                "commands/formula-from-string",
                "commands-legacy/get-allowed-methods",
                "commands-legacy/parse-formula",
                "commands/set-allowed-methods"
              ]
            },
            {
              type: "category",
              label: "Graphs",
              link: {
                type: "doc",
                id: "commands/theme/Graphs"
              },
              items: [
                "commands-legacy/graph",
                "commands-legacy/graph-settings"
              ]
            },
            {
              type: "category",
              label: "HTTP",
              link: {
                type: "doc",
                id: "commands/theme/HTTP"
              },
              items: [
                "commands-legacy/http-authenticate",
                "commands-legacy/http-get",
                "commands-legacy/http-get-certificates-folder",
                "commands-legacy/http-get-option",
                "commands/http-parse-message",
                "commands-legacy/http-request",
                "commands-legacy/http-set-certificates-folder",
                "commands-legacy/http-set-option"
              ]
            },
            {
              type: "category",
              label: "Hierarchical Lists",
              link: {
                type: "doc",
                id: "commands/theme/Hierarchical_Lists"
              },
              items: [
                "commands-legacy/append-to-list",
                "commands-legacy/clear-list",
                "commands-legacy/copy-list",
                "commands-legacy/count-list-items",
                "commands-legacy/delete-from-list",
                "commands-legacy/find-in-list",
                "commands-legacy/get-list-item",
                "commands-legacy/get-list-item-font",
                "commands-legacy/get-list-item-icon",
                "commands-legacy/get-list-item-parameter",
                "commands-legacy/get-list-item-parameter-arrays",
                "commands-legacy/get-list-item-properties",
                "commands-legacy/get-list-properties",
                "commands-legacy/insert-in-list",
                "commands-legacy/is-a-list",
                "commands-legacy/list-item-parent",
                "commands-legacy/list-item-position",
                "commands-legacy/list-of-choice-lists",
                "commands-legacy/load-list",
                "commands-legacy/new-list",
                "commands-legacy/save-list",
                "commands-legacy/select-list-items-by-position",
                "commands-legacy/select-list-items-by-reference",
                "commands-legacy/selected-list-items",
                "commands-legacy/set-list-item",
                "commands-legacy/set-list-item-font",
                "commands-legacy/set-list-item-icon",
                "commands-legacy/set-list-item-parameter",
                "commands-legacy/set-list-item-properties",
                "commands-legacy/set-list-properties",
                "commands-legacy/sort-list"
              ]
            },
            {
              type: "category",
              label: "Import and Export",
              link: {
                type: "doc",
                id: "commands/theme/Import_and_Export"
              },
              items: [
                "commands-legacy/export-data",
                "commands-legacy/export-dif",
                "commands-legacy/export-sylk",
                "commands-legacy/export-text",
                "commands-legacy/import-data",
                "commands-legacy/import-dif",
                "commands-legacy/import-sylk",
                "commands-legacy/import-text"
              ]
            },
            {
              type: "category",
              label: "Interruptions",
              link: {
                type: "doc",
                id: "commands/theme/Interruptions"
              },
              items: [
                "commands-legacy/abort",
                "commands-legacy/assert",
                "commands-legacy/asserted",
                "commands-legacy/filter-event",
                "commands-legacy/get-assert-enabled",
                "commands-legacy/last-errors",
                "commands-legacy/method-called-on-error",
                "commands-legacy/method-called-on-event",
                "commands-legacy/on-err-call",
                "commands-legacy/on-event-call",
                "commands-legacy/set-assert-enabled",
                "commands-legacy/throw"
              ]
            },
            {
              type: "category",
              label: "JSON",
              link: {
                type: "doc",
                id: "commands/theme/JSON"
              },
              items: [
                "commands-legacy/json-parse",
                "commands-legacy/json-parse-array",
                "commands-legacy/json-resolve-pointers",
                "commands-legacy/json-stringify",
                "commands-legacy/json-stringify-array",
                "commands-legacy/json-to-selection",
                "commands-legacy/json-validate",
                "commands-legacy/selection-to-json"
              ]
            },
            {
              type: "category",
              label: "LDAP",
              link: {
                type: "doc",
                id: "commands/theme/LDAP"
              },
              items: [
                "commands-legacy/ldap-login",
                "commands-legacy/ldap-logout",
                "commands-legacy/ldap-search",
                "commands-legacy/ldap-search-all"
              ]
            },
            {
              type: "category",
              label: "Language",
              link: {
                type: "doc",
                id: "commands/theme/Language"
              },
              items: [
                "commands/4d",
                "commands-legacy/action-info",
                "commands-legacy/call-chain",
                "commands-legacy/command-name",
                "commands-legacy/copy-parameters",
                "commands-legacy/count-parameters",
                "commands/cs",
                "commands-legacy/current-method-name",
                "commands-legacy/execute-method",
                "commands-legacy/get-pointer",
                "commands-legacy/invoke-action",
                "commands-legacy/is-a-variable",
                "commands-legacy/is-nil-pointer",
                "commands-legacy/null",
                "commands-legacy/resolve-pointer",
                "commands-legacy/self",
                "commands/super",
                "commands/this",
                "commands-legacy/trace",
                "commands-legacy/type",
                "commands-legacy/undefined",
                "commands-legacy/value-type"
              ]
            },
            {
              type: "category",
              label: "Licenses",
              link: {
                type: "doc",
                id: "commands/theme/Licenses"
              },
              items: [
                "commands-legacy/change-licenses",
                "commands-legacy/create-deployment-license",
                "commands-legacy/is-license-available",
                "commands/license-info",
                "commands-legacy/license-usage",
                "commands-legacy/refresh-license"
              ]
            },
            {
              type: "category",
              label: "List Box",
              link: {
                type: "doc",
                id: "commands/theme/List_Box"
              },
              items: [
                "commands-legacy/listbox-collapse",
                "commands-legacy/listbox-delete-column",
                "commands-legacy/listbox-delete-rows",
                "commands-legacy/listbox-duplicate-column",
                "commands-legacy/listbox-expand",
                "commands-legacy/listbox-get-array",
                "commands-legacy/listbox-get-arrays",
                "commands-legacy/listbox-get-auto-row-height",
                "commands-legacy/listbox-get-cell-coordinates",
                "commands-legacy/listbox-get-cell-position",
                "commands-legacy/listbox-get-column-formula",
                "commands-legacy/listbox-get-column-width",
                "commands-legacy/listbox-get-footer-calculation",
                "commands-legacy/listbox-get-footers-height",
                "commands-legacy/listbox-get-grid",
                "commands-legacy/listbox-get-grid-colors",
                "commands-legacy/listbox-get-headers-height",
                "commands-legacy/listbox-get-hierarchy",
                "commands-legacy/listbox-get-locked-columns",
                "commands-legacy/listbox-get-number-of-columns",
                "commands-legacy/listbox-get-number-of-rows",
                "commands-legacy/listbox-get-objects",
                "commands-legacy/listbox-get-print-information",
                "commands-legacy/listbox-get-property",
                "commands-legacy/listbox-get-row-color",
                "commands-legacy/listbox-get-row-color-as-number",
                "commands-legacy/listbox-get-row-font-style",
                "commands-legacy/listbox-get-row-height",
                "commands-legacy/listbox-get-rows-height",
                "commands-legacy/listbox-get-static-columns",
                "commands-legacy/listbox-get-table-source",
                "commands-legacy/listbox-insert-column",
                "commands-legacy/listbox-insert-column-formula",
                "commands-legacy/listbox-insert-rows",
                "commands-legacy/listbox-move-column",
                "commands-legacy/listbox-moved-column-number",
                "commands-legacy/listbox-moved-row-number",
                "commands-legacy/listbox-select-break",
                "commands-legacy/listbox-select-row",
                "commands-legacy/listbox-select-rows",
                "commands-legacy/listbox-set-array",
                "commands-legacy/listbox-set-auto-row-height",
                "commands-legacy/listbox-set-column-formula",
                "commands-legacy/listbox-set-column-width",
                "commands-legacy/listbox-set-footer-calculation",
                "commands-legacy/listbox-set-footers-height",
                "commands-legacy/listbox-set-grid",
                "commands-legacy/listbox-set-grid-color",
                "commands-legacy/listbox-set-headers-height",
                "commands-legacy/listbox-set-hierarchy",
                "commands-legacy/listbox-set-locked-columns",
                "commands-legacy/listbox-set-property",
                "commands-legacy/listbox-set-row-color",
                "commands-legacy/listbox-set-row-font-style",
                "commands-legacy/listbox-set-row-height",
                "commands-legacy/listbox-set-rows-height",
                "commands-legacy/listbox-set-static-columns",
                "commands-legacy/listbox-set-table-source",
                "commands-legacy/listbox-sort-columns"
              ]
            },
            {
              type: "category",
              label: "Mail",
              link: {
                type: "doc",
                id: "commands/theme/Mail"
              },
              items: [
                "commands/imap-new-transporter",
                "commands/mail-convert-from-mime",
                "commands/mail-convert-to-mime",
                "commands/mail-new-attachment",
                "commands/pop3-new-transporter",
                "commands/smtp-new-transporter"
              ]
            },
            {
              type: "category",
              label: "Math",
              link: {
                type: "doc",
                id: "commands/theme/Math"
              },
              items: [
                "commands-legacy/abs",
                "commands-legacy/arctan",
                "commands-legacy/cos",
                "commands-legacy/dec",
                "commands-legacy/euro-converter",
                "commands-legacy/exp",
                "commands-legacy/int",
                "commands-legacy/log",
                "commands-legacy/mod",
                "commands-legacy/random",
                "commands-legacy/round",
                "commands-legacy/set-real-comparison-level",
                "commands-legacy/sin",
                "commands-legacy/square-root",
                "commands-legacy/tan",
                "commands-legacy/trunc"
              ]
            },
            {
              type: "category",
              label: "Menus",
              link: {
                type: "doc",
                id: "commands/theme/Menus"
              },
              items: [
                "commands-legacy/append-menu-item",
                "commands-legacy/count-menu-items",
                "commands-legacy/count-menus",
                "commands-legacy/create-menu",
                "commands-legacy/delete-menu-item",
                "commands-legacy/disable-menu-item",
                "commands-legacy/dynamic-pop-up-menu",
                "commands-legacy/enable-menu-item",
                "commands-legacy/get-menu-bar-reference",
                "commands-legacy/get-menu-item",
                "commands-legacy/get-menu-item-icon",
                "commands-legacy/get-menu-item-key",
                "commands-legacy/get-menu-item-mark",
                "commands-legacy/get-menu-item-method",
                "commands-legacy/get-menu-item-modifiers",
                "commands-legacy/get-menu-item-parameter",
                "commands-legacy/get-menu-item-property",
                "commands-legacy/get-menu-item-style",
                "commands-legacy/get-menu-items",
                "commands-legacy/get-menu-title",
                "commands-legacy/get-selected-menu-item-parameter",
                "commands-legacy/insert-menu-item",
                "commands-legacy/menu-selected",
                "commands-legacy/release-menu",
                "commands-legacy/set-help-menu",
                "commands-legacy/set-menu-bar",
                "commands-legacy/set-menu-item",
                "commands-legacy/set-menu-item-icon",
                "commands-legacy/set-menu-item-mark",
                "commands-legacy/set-menu-item-method",
                "commands-legacy/set-menu-item-parameter",
                "commands-legacy/set-menu-item-property",
                "commands-legacy/set-menu-item-shortcut",
                "commands-legacy/set-menu-item-style"
              ]
            },
            {
              type: "category",
              label: "Messages",
              link: {
                type: "doc",
                id: "commands/theme/Messages"
              },
              items: [
                "commands-legacy/alert",
                "commands-legacy/confirm",
                "commands-legacy/display-notification",
                "commands-legacy/goto-xy",
                "commands-legacy/message",
                "commands-legacy/messages-off",
                "commands-legacy/messages-on",
                "commands-legacy/request"
              ]
            },
            {
              type: "category",
              label: "Named Selections",
              link: {
                type: "doc",
                id: "commands/theme/Named_Selections"
              },
              items: [
                "commands-legacy/clear-named-selection",
                "commands-legacy/copy-named-selection",
                "commands-legacy/cut-named-selection",
                "commands-legacy/use-named-selection"
              ]
            },
            {
              type: "category",
              label: "Objects (Forms)",
              link: {
                type: "doc",
                id: "commands/theme/Objects_Forms"
              },
              items: [
                "commands-legacy/get-style-sheet-info",
                "commands-legacy/list-of-style-sheets",
                "commands-legacy/object-duplicate",
                "commands-legacy/object-get-action",
                "commands-legacy/object-get-auto-spellcheck",
                "commands-legacy/object-get-best-size",
                "commands-legacy/object-get-border-style",
                "commands-legacy/object-get-context-menu",
                "commands-legacy/object-get-coordinates",
                "commands-legacy/object-get-corner-radius",
                "commands-legacy/object-get-data-source",
                "commands-legacy/object-get-drag-and-drop-options",
                "commands-legacy/object-get-enabled",
                "commands-legacy/object-get-enterable",
                "commands-legacy/object-get-events",
                "commands-legacy/object-get-filter",
                "commands-legacy/object-get-focus-rectangle-invisible",
                "commands-legacy/object-get-font",
                "commands-legacy/object-get-font-size",
                "commands-legacy/object-get-font-style",
                "commands-legacy/object-get-format",
                "commands-legacy/object-get-help-tip",
                "commands-legacy/object-get-horizontal-alignment",
                "commands-legacy/object-get-indicator-type",
                "commands-legacy/object-get-keyboard-layout",
                "commands-legacy/object-get-list-name",
                "commands-legacy/object-get-list-reference",
                "commands-legacy/object-get-maximum-value",
                "commands-legacy/object-get-minimum-value",
                "commands-legacy/object-get-multiline",
                "commands-legacy/object-get-name",
                "commands-legacy/object-get-placeholder",
                "commands-legacy/object-get-pointer",
                "commands-legacy/object-get-print-variable-frame",
                "commands-legacy/object-get-resizing-options",
                "commands-legacy/object-get-rgb-colors",
                "commands-legacy/object-get-scroll-position",
                "commands-legacy/object-get-scrollbar",
                "commands-legacy/object-get-shortcut",
                "commands-legacy/object-get-style-sheet",
                "commands-legacy/object-get-subform",
                "commands-legacy/object-get-subform-container-size",
                "commands-legacy/object-get-subform-container-value",
                "commands-legacy/object-get-text-orientation",
                "commands-legacy/object-get-three-states-checkbox",
                "commands-legacy/object-get-title",
                "commands-legacy/object-get-type",
                "commands-legacy/object-get-value",
                "commands-legacy/object-get-vertical-alignment",
                "commands-legacy/object-get-visible",
                "commands-legacy/object-is-styled-text",
                "commands-legacy/object-move",
                "commands-legacy/object-set-action",
                "commands-legacy/object-set-auto-spellcheck",
                "commands-legacy/object-set-border-style",
                "commands-legacy/object-set-context-menu",
                "commands-legacy/object-set-coordinates",
                "commands-legacy/object-set-corner-radius",
                "commands-legacy/object-set-data-source",
                "commands-legacy/object-set-drag-and-drop-options",
                "commands-legacy/object-set-enabled",
                "commands-legacy/object-set-enterable",
                "commands-legacy/object-set-events",
                "commands-legacy/object-set-filter",
                "commands-legacy/object-set-focus-rectangle-invisible",
                "commands-legacy/object-set-font",
                "commands-legacy/object-set-font-size",
                "commands-legacy/object-set-font-style",
                "commands-legacy/object-set-format",
                "commands-legacy/object-set-help-tip",
                "commands-legacy/object-set-horizontal-alignment",
                "commands-legacy/object-set-indicator-type",
                "commands-legacy/object-set-keyboard-layout",
                "commands-legacy/object-set-list-by-name",
                "commands-legacy/object-set-list-by-reference",
                "commands-legacy/object-set-maximum-value",
                "commands-legacy/object-set-minimum-value",
                "commands-legacy/object-set-multiline",
                "commands-legacy/object-set-placeholder",
                "commands-legacy/object-set-print-variable-frame",
                "commands-legacy/object-set-resizing-options",
                "commands-legacy/object-set-rgb-colors",
                "commands-legacy/object-set-scroll-position",
                "commands-legacy/object-set-scrollbar",
                "commands-legacy/object-set-shortcut",
                "commands-legacy/object-set-style-sheet",
                "commands-legacy/object-set-subform",
                "commands-legacy/object-set-subform-container-value",
                "commands-legacy/object-set-text-orientation",
                "commands-legacy/object-set-three-states-checkbox",
                "commands-legacy/object-set-title",
                "commands-legacy/object-set-value",
                "commands-legacy/object-set-vertical-alignment",
                "commands-legacy/object-set-visible"
              ]
            },
            {
              type: "category",
              label: "Objects (Language)",
              link: {
                type: "doc",
                id: "commands/theme/Objects_Language"
              },
              items: [
                "commands-legacy/new-object",
                "commands-legacy/new-shared-object",
                "commands-legacy/ob-class",
                "commands-legacy/ob-copy",
                "commands-legacy/ob-entries",
                "commands-legacy/ob-get",
                "commands-legacy/ob-get-array",
                "commands-legacy/ob-get-property-names",
                "commands-legacy/ob-get-type",
                "commands-legacy/ob-instance-of",
                "commands-legacy/ob-is-defined",
                "commands-legacy/ob-is-empty",
                "commands-legacy/ob-is-shared",
                "commands-legacy/ob-keys",
                "commands-legacy/ob-remove",
                "commands-legacy/ob-set",
                "commands-legacy/ob-set-array",
                "commands-legacy/ob-set-null",
                "commands-legacy/ob-values",
                "commands-legacy/storage"
              ]
            },
            {
              type: "category",
              label: "On a Series",
              link: {
                type: "doc",
                id: "commands/theme/On_a_Series"
              },
              items: [
                "commands-legacy/average",
                "commands-legacy/max",
                "commands-legacy/min",
                "commands-legacy/std-deviation",
                "commands-legacy/sum",
                "commands-legacy/sum-squares",
                "commands-legacy/variance"
              ]
            },
            {
              type: "category",
              label: "PHP",
              link: {
                type: "doc",
                id: "commands/theme/PHP"
              },
              items: [
                "commands-legacy/php-execute",
                "commands-legacy/php-get-full-response",
                "commands-legacy/php-get-option",
                "commands-legacy/php-set-option"
              ]
            },
            {
              type: "category",
              label: "Pasteboard",
              link: {
                type: "doc",
                id: "commands/theme/Pasteboard"
              },
              items: [
                "commands-legacy/append-data-to-pasteboard",
                "commands-legacy/clear-pasteboard",
                "commands-legacy/get-file-from-pasteboard",
                "commands-legacy/get-pasteboard-data",
                "commands-legacy/get-pasteboard-data-type",
                "commands-legacy/get-picture-from-pasteboard",
                "commands-legacy/get-text-from-pasteboard",
                "commands-legacy/pasteboard-data-size",
                "commands-legacy/set-file-to-pasteboard",
                "commands-legacy/set-picture-to-pasteboard",
                "commands-legacy/set-text-to-pasteboard"
              ]
            },
            {
              type: "category",
              label: "Pictures",
              link: {
                type: "doc",
                id: "commands/theme/Pictures"
              },
              items: [
                "commands-legacy/blob-to-picture",
                "commands-legacy/combine-pictures",
                "commands-legacy/convert-picture",
                "commands-legacy/create-thumbnail",
                "commands-legacy/equal-pictures",
                "commands-legacy/get-picture-file-name",
                "commands-legacy/get-picture-formats",
                "commands-legacy/get-picture-from-library",
                "commands-legacy/get-picture-keywords",
                "commands-legacy/get-picture-metadata",
                "commands-legacy/is-picture-file",
                "commands-legacy/picture-codec-list",
                "commands-legacy/picture-library-list",
                "commands-legacy/picture-properties",
                "commands-legacy/picture-size",
                "commands-legacy/picture-to-blob",
                "commands-legacy/read-picture-file",
                "commands-legacy/remove-picture-from-library",
                "commands-legacy/set-picture-file-name",
                "commands-legacy/set-picture-metadata",
                "commands-legacy/set-picture-to-library",
                "commands-legacy/transform-picture",
                "commands-legacy/write-picture-file"
              ]
            },
            {
              type: "category",
              label: "Printing",
              link: {
                type: "doc",
                id: "commands/theme/Printing"
              },
              items: [
                "commands-legacy/accumulate",
                "commands-legacy/blob-to-print-settings",
                "commands-legacy/break-level",
                "commands-legacy/close-printing-job",
                "commands-legacy/get-current-printer",
                "commands-legacy/get-print-marker",
                "commands-legacy/get-print-option",
                "commands-legacy/get-print-preview",
                "commands-legacy/get-printable-area",
                "commands-legacy/get-printable-margin",
                "commands-legacy/get-printed-height",
                "commands-legacy/is-in-print-preview",
                "commands-legacy/level",
                "commands-legacy/open-printing-job",
                "commands-legacy/page-break",
                "commands/print-form",
                "commands-legacy/print-label",
                "commands-legacy/print-object",
                "commands-legacy/print-option-values",
                "commands-legacy/print-record",
                "commands-legacy/print-selection",
                "commands-legacy/print-settings",
                "commands-legacy/print-settings-to-blob",
                "commands-legacy/printers-list",
                "commands-legacy/printing-page",
                "commands-legacy/set-current-printer",
                "commands-legacy/set-print-marker",
                "commands-legacy/set-print-option",
                "commands-legacy/set-print-preview",
                "commands-legacy/set-printable-margin",
                "commands-legacy/subtotal"
              ]
            },
            {
              type: "category",
              label: "Process (Communications)",
              link: {
                type: "doc",
                id: "commands/theme/Process_Communications"
              },
              items: [
                "commands-legacy/call-worker",
                "commands-legacy/clear-semaphore",
                "commands-legacy/get-process-variable",
                "commands-legacy/kill-worker",
                "commands/new-signal",
                "commands-legacy/semaphore",
                "commands-legacy/set-process-variable",
                "commands-legacy/test-semaphore",
                "commands-legacy/variable-to-variable"
              ]
            },
            {
              type: "category",
              label: "Process (User Interface)",
              link: {
                type: "doc",
                id: "commands/theme/Process_User_Interface"
              },
              items: [
                "commands-legacy/bring-to-front",
                "commands-legacy/frontmost-process",
                "commands-legacy/hide-process",
                "commands-legacy/show-process"
              ]
            },
            {
              type: "category",
              label: "Processes",
              link: {
                type: "doc",
                id: "commands/theme/Processes"
              },
              items: [
                "commands-legacy/abort-process-by-id",
                "commands-legacy/count-tasks",
                "commands-legacy/count-user-processes",
                "commands-legacy/count-users",
                "commands-legacy/current-process",
                "commands-legacy/current-process-name",
                "commands-legacy/delay-process",
                "commands-legacy/execute-on-client",
                "commands-legacy/execute-on-server",
                "commands-legacy/get-registered-clients",
                "commands-legacy/new-process",
                "commands-legacy/pause-process",
                "commands-legacy/process-aborted",
                "commands/process-activity",
                "commands/process-info",
                "commands/process-number",
                "commands-legacy/process-state",
                "commands-legacy/register-client",
                "commands-legacy/resume-process",
                "commands/session",
                "commands/session-info",
                "commands/session-storage",
                "commands-legacy/unregister-client"
              ]
            },
            {
              type: "category",
              label: "Queries",
              link: {
                type: "doc",
                id: "commands/theme/Queries"
              },
              items: [
                "commands-legacy/describe-query-execution",
                "commands-legacy/find-in-field",
                "commands-legacy/get-query-destination",
                "commands-legacy/get-query-limit",
                "commands-legacy/last-query-path",
                "commands-legacy/last-query-plan",
                "commands-legacy/order-by",
                "commands-legacy/order-by-attribute",
                "commands-legacy/order-by-formula",
                "commands-legacy/query",
                "commands-legacy/query-by-attribute",
                "commands-legacy/query-by-example",
                "commands-legacy/query-by-formula",
                "commands-legacy/query-selection",
                "commands-legacy/query-selection-by-attribute",
                "commands-legacy/query-selection-by-formula",
                "commands-legacy/query-selection-with-array",
                "commands-legacy/query-with-array",
                "commands-legacy/set-query-and-lock",
                "commands-legacy/set-query-destination",
                "commands-legacy/set-query-limit"
              ]
            },
            {
              type: "category",
              label: "Quick Report",
              link: {
                type: "doc",
                id: "commands/theme/Quick_Report"
              },
              items: [
                "commands-legacy/qr-blob-to-report",
                "commands-legacy/qr-count-columns",
                "commands-legacy/qr-delete-column",
                "commands-legacy/qr-delete-offscreen-area",
                "commands-legacy/qr-execute-command",
                "commands-legacy/qr-find-column",
                "commands-legacy/qr-get-area-property",
                "commands-legacy/qr-get-borders",
                "commands-legacy/qr-get-command-status",
                "commands-legacy/qr-get-destination",
                "commands-legacy/qr-get-document-property",
                "commands-legacy/qr-get-drop-column",
                "commands-legacy/qr-get-header-and-footer",
                "commands-legacy/qr-get-html-template",
                "commands-legacy/qr-get-info-column",
                "commands-legacy/qr-get-info-row",
                "commands-legacy/qr-get-report-kind",
                "commands-legacy/qr-get-report-table",
                "commands-legacy/qr-get-selection",
                "commands-legacy/qr-get-sorts",
                "commands-legacy/qr-get-text-property",
                "commands-legacy/qr-get-totals-data",
                "commands-legacy/qr-get-totals-spacing",
                "commands-legacy/qr-insert-column",
                "commands-legacy/qr-move-column",
                "commands-legacy/qr-new-area",
                "commands-legacy/qr-new-offscreen-area",
                "commands-legacy/qr-on-command",
                "commands-legacy/qr-report",
                "commands-legacy/qr-report-to-blob",
                "commands-legacy/qr-run",
                "commands-legacy/qr-set-area-property",
                "commands-legacy/qr-set-borders",
                "commands-legacy/qr-set-destination",
                "commands-legacy/qr-set-document-property",
                "commands-legacy/qr-set-header-and-footer",
                "commands-legacy/qr-set-html-template",
                "commands-legacy/qr-set-info-column",
                "commands-legacy/qr-set-info-row",
                "commands-legacy/qr-set-report-kind",
                "commands-legacy/qr-set-report-table",
                "commands-legacy/qr-set-selection",
                "commands-legacy/qr-set-sorts",
                "commands-legacy/qr-set-text-property",
                "commands-legacy/qr-set-totals-data",
                "commands-legacy/qr-set-totals-spacing"
              ]
            },
            {
              type: "category",
              label: "Record Locking",
              link: {
                type: "doc",
                id: "commands/theme/Record_Locking"
              },
              items: [
                "commands-legacy/load-record",
                "commands-legacy/locked",
                "commands-legacy/locked-by",
                "commands-legacy/locked-records-info",
                "commands-legacy/read-only",
                "commands-legacy/read-only-state",
                "commands-legacy/read-write",
                "commands-legacy/unload-record"
              ]
            },
            {
              type: "category",
              label: "Records",
              link: {
                type: "doc",
                id: "commands/theme/Records"
              },
              items: [
                "commands-legacy/create-record",
                "commands-legacy/delete-record",
                "commands-legacy/display-record",
                "commands-legacy/duplicate-record",
                "commands-legacy/goto-record",
                "commands-legacy/is-new-record",
                "commands-legacy/is-record-loaded",
                "commands-legacy/modified-record",
                "commands-legacy/pop-record",
                "commands-legacy/push-record",
                "commands-legacy/record-number",
                "commands-legacy/records-in-table",
                "commands-legacy/save-record",
                "commands-legacy/sequence-number"
              ]
            },
            {
              type: "category",
              label: "Relations",
              link: {
                type: "doc",
                id: "commands/theme/Relations"
              },
              items: [
                "commands-legacy/create-related-one",
                "commands-legacy/get-automatic-relations",
                "commands-legacy/get-field-relation",
                "commands-legacy/old-related-many",
                "commands-legacy/old-related-one",
                "commands-legacy/relate-many",
                "commands-legacy/relate-many-selection",
                "commands-legacy/relate-one",
                "commands-legacy/relate-one-selection",
                "commands-legacy/save-related-one",
                "commands-legacy/set-automatic-relations",
                "commands-legacy/set-field-relation"
              ]
            },
            {
              type: "category",
              label: "Resources",
              link: {
                type: "doc",
                id: "commands/theme/Resources"
              },
              items: [
                "commands-legacy/close-resource-file",
                "commands-legacy/get-indexed-string",
                "commands-legacy/get-picture-resource",
                "commands-legacy/get-resource",
                "commands-legacy/get-resource-name",
                "commands-legacy/get-resource-properties",
                "commands-legacy/get-string-resource",
                "commands-legacy/get-text-resource",
                "commands-legacy/open-resource-file",
                "commands-legacy/resource-list",
                "commands-legacy/resource-type-list",
                "commands-legacy/string-list-to-array"
              ]
            },
            {
              type: "category",
              label: "SQL",
              link: {
                type: "doc",
                id: "commands/theme/SQL"
              },
              items: [
                "commands-legacy/begin-sql",
                "commands-legacy/end-sql",
                "commands-legacy/is-field-value-null",
                "commands-legacy/query-by-sql",
                "commands-legacy/set-field-value-null",
                "commands-legacy/sql-cancel-load",
                "commands-legacy/sql-end-selection",
                "commands-legacy/sql-execute",
                "commands-legacy/sql-execute-script",
                "commands-legacy/sql-export-database",
                "commands-legacy/sql-export-selection",
                "commands-legacy/sql-get-current-data-source",
                "commands-legacy/sql-get-data-source-list",
                "commands-legacy/sql-get-last-error",
                "commands-legacy/sql-get-option",
                "commands-legacy/sql-load-record",
                "commands-legacy/sql-login",
                "commands-legacy/sql-logout",
                "commands-legacy/sql-set-option",
                "commands-legacy/sql-set-parameter",
                "commands-legacy/start-sql-server",
                "commands-legacy/stop-sql-server"
              ]
            },
            {
              type: "category",
              label: "SVG",
              link: {
                type: "doc",
                id: "commands/theme/SVG"
              },
              items: [
                "commands-legacy/svg-export-to-picture",
                "commands-legacy/svg-find-element-id-by-coordinates",
                "commands-legacy/svg-find-element-ids-by-rect",
                "commands-legacy/svg-get-attribute",
                "commands-legacy/svg-set-attribute",
                "commands-legacy/svg-show-element"
              ]
            },
            {
              type: "category",
              label: "Secured Protocol",
              link: {
                type: "doc",
                id: "commands/theme/Secured_Protocol"
              },
              items: [
                "commands-legacy/generate-certificate-request",
                "commands-legacy/generate-encryption-keypair"
              ]
            },
            {
              type: "category",
              label: "Selection",
              link: {
                type: "doc",
                id: "commands/theme/Selection"
              },
              items: [
                "commands-legacy/all-records",
                "commands-legacy/apply-to-selection",
                "commands-legacy/before-selection",
                "commands-legacy/create-selection-from-array",
                "commands-legacy/delete-selection",
                "commands-legacy/display-selection",
                "commands-legacy/displayed-line-number",
                "commands-legacy/end-selection",
                "commands-legacy/first-record",
                "commands-legacy/get-highlighted-records",
                "commands-legacy/goto-selected-record",
                "commands-legacy/highlight-records",
                "commands-legacy/last-record",
                "commands-legacy/modify-selection",
                "commands-legacy/next-record",
                "commands-legacy/one-record-select",
                "commands-legacy/previous-record",
                "commands-legacy/records-in-selection",
                "commands-legacy/reduce-selection",
                "commands-legacy/scan-index",
                "commands-legacy/selected-record-number",
                "commands-legacy/truncate-table"
              ]
            },
            {
              type: "category",
              label: "Sets",
              link: {
                type: "doc",
                id: "commands/theme/Sets"
              },
              items: [
                "commands-legacy/add-to-set",
                "commands-legacy/clear-set",
                "commands-legacy/copy-set",
                "commands-legacy/create-empty-set",
                "commands-legacy/create-set",
                "commands-legacy/create-set-from-array",
                "commands-legacy/difference",
                "commands-legacy/intersection",
                "commands-legacy/is-in-set",
                "commands-legacy/load-set",
                "commands-legacy/records-in-set",
                "commands-legacy/remove-from-set",
                "commands-legacy/save-set",
                "commands-legacy/union",
                "commands-legacy/use-set"
              ]
            },
            {
              type: "category",
              label: "Spell Checker",
              link: {
                type: "doc",
                id: "commands/theme/Spell_Checker"
              },
              items: [
                "commands-legacy/spell-add-to-user-dictionary",
                "commands-legacy/spell-check-text",
                "commands-legacy/spell-checking",
                "commands-legacy/spell-get-current-dictionary",
                "commands-legacy/spell-get-dictionary-list",
                "commands-legacy/spell-set-current-dictionary"
              ]
            },
            {
              type: "category",
              label: "String",
              link: {
                type: "doc",
                id: "commands/theme/String"
              },
              items: [
                "commands-legacy/change-string",
                "commands-legacy/char",
                "commands-legacy/character-code",
                "commands-legacy/compare-strings",
                "commands-legacy/convert-from-text",
                "commands-legacy/convert-to-text",
                "commands-legacy/delete-string",
                "commands-legacy/get-text-keywords",
                "commands-legacy/insert-string",
                "commands-legacy/length",
                "commands-legacy/localized-string",
                "commands-legacy/lowercase",
                "commands-legacy/match-regex",
                "commands-legacy/num",
                "commands-legacy/position",
                "commands-legacy/replace-string",
                "commands-legacy/split-string",
                "commands-legacy/string",
                "commands-legacy/substring",
                "commands-legacy/uppercase"
              ]
            },
            {
              type: "category",
              label: "Structure Access",
              link: {
                type: "doc",
                id: "commands/theme/Structure_Access"
              },
              items: [
                "commands-legacy/create-index",
                "commands-legacy/delete-index",
                "commands-legacy/export-structure",
                "commands-legacy/field",
                "commands-legacy/field-name",
                "commands-legacy/get-external-data-path",
                "commands-legacy/get-field-entry-properties",
                "commands-legacy/get-field-properties",
                "commands-legacy/get-missing-table-names",
                "commands-legacy/get-relation-properties",
                "commands-legacy/get-table-properties",
                "commands-legacy/import-structure",
                "commands-legacy/is-field-number-valid",
                "commands-legacy/is-table-number-valid",
                "commands-legacy/last-field-number",
                "commands-legacy/last-table-number",
                "commands-legacy/pause-indexes",
                "commands-legacy/regenerate-missing-table",
                "commands-legacy/reload-external-data",
                "commands-legacy/resume-indexes",
                "commands-legacy/set-external-data-path",
                "commands-legacy/set-index",
                "commands-legacy/table",
                "commands-legacy/table-name"
              ]
            },
            {
              type: "category",
              label: "Styled Text",
              link: {
                type: "doc",
                id: "commands/theme/Styled_Text"
              },
              items: [
                "commands-legacy/st-compute-expressions",
                "commands-legacy/st-freeze-expressions",
                "commands-legacy/st-get-attributes",
                "commands-legacy/st-get-content-type",
                "commands-legacy/st-get-expression",
                "commands-legacy/st-get-options",
                "commands-legacy/st-get-plain-text",
                "commands-legacy/st-get-text",
                "commands-legacy/st-get-url",
                "commands-legacy/st-insert-expression",
                "commands-legacy/st-insert-url",
                "commands-legacy/st-set-attributes",
                "commands-legacy/st-set-options",
                "commands-legacy/st-set-plain-text",
                "commands-legacy/st-set-text"
              ]
            },
            {
              type: "category",
              label: "Subrecords",
              link: {
                type: "doc",
                id: "commands/theme/Subrecords"
              },
              items: [
                "commands-legacy/get-subrecord-key"
              ]
            },
            {
              type: "category",
              label: "System Documents",
              link: {
                type: "doc",
                id: "commands/theme/System_Documents"
              },
              items: [
                "commands-legacy/append-document",
                "commands-legacy/close-document",
                "commands-legacy/convert-path-posix-to-system",
                "commands-legacy/convert-path-system-to-posix",
                "commands-legacy/copy-document",
                "commands-legacy/create-alias",
                "commands-legacy/create-document",
                "commands-legacy/create-folder",
                "commands-legacy/delete-document",
                "commands-legacy/delete-folder",
                "commands-legacy/document-list",
                "commands-legacy/document-to-text",
                "commands-legacy/folder-list",
                "commands-legacy/get-document-icon",
                "commands-legacy/get-document-position",
                "commands-legacy/get-document-properties",
                "commands-legacy/get-document-size",
                "commands-legacy/localized-document-path",
                "commands-legacy/move-document",
                "commands-legacy/object-to-path",
                "commands-legacy/open-document",
                "commands-legacy/path-to-object",
                "commands-legacy/resolve-alias",
                "commands-legacy/select-document",
                "commands-legacy/select-folder",
                "commands-legacy/set-document-position",
                "commands-legacy/set-document-properties",
                "commands-legacy/set-document-size",
                "commands-legacy/show-on-disk",
                "commands-legacy/test-path-name",
                "commands-legacy/text-to-document",
                "commands-legacy/volume-attributes",
                "commands-legacy/volume-list"
              ]
            },
            {
              type: "category",
              label: "System Environment",
              link: {
                type: "doc",
                id: "commands/theme/System_Environment"
              },
              items: [
                "commands-legacy/count-screens",
                "commands-legacy/current-client-authentication",
                "commands-legacy/current-machine",
                "commands-legacy/current-system-user",
                "commands-legacy/font-file",
                "commands-legacy/font-list",
                "commands-legacy/font-style-list",
                "commands-legacy/get-system-format",
                "commands-legacy/is-macos",
                "commands-legacy/is-windows",
                "commands-legacy/log-event",
                "commands-legacy/menu-bar-height",
                "commands-legacy/menu-bar-screen",
                "commands-legacy/open-color-picker",
                "commands-legacy/open-font-picker",
                "commands-legacy/screen-coordinates",
                "commands-legacy/screen-depth",
                "commands-legacy/screen-height",
                "commands-legacy/screen-width",
                "commands-legacy/select-rgb-color",
                "commands-legacy/set-recent-fonts",
                "commands-legacy/system-folder",
                "commands-legacy/system-info",
                "commands-legacy/temporary-folder"
              ]
            },
            {
              type: "category",
              label: "Table",
              link: {
                type: "doc",
                id: "commands/theme/Table"
              },
              items: [
                "commands-legacy/current-default-table",
                "commands-legacy/current-form-table",
                "commands-legacy/default-table",
                "commands-legacy/no-default-table"
              ]
            },
            {
              type: "category",
              label: "Tools",
              link: {
                type: "doc",
                id: "commands/theme/Tools"
              },
              items: [
                "commands-legacy/activity-snapshot",
                "commands-legacy/base64-decode",
                "commands-legacy/base64-encode",
                "commands-legacy/choose",
                "commands-legacy/generate-digest",
                "commands-legacy/generate-password-hash",
                "commands-legacy/generate-uuid",
                "commands-legacy/get-macro-parameter",
                "commands-legacy/launch-external-process",
                "commands-legacy/load-4d-view-document",
                "commands-legacy/mobile-app-refresh-sessions",
                "commands-legacy/monitored-activity",
                "commands-legacy/open-url",
                "commands-legacy/process-4d-tags",
                "commands-legacy/set-environment-variable",
                "commands-legacy/set-macro-parameter",
                "commands-legacy/start-monitoring-activity",
                "commands-legacy/stop-monitoring-activity",
                "commands-legacy/verify-password-hash"
              ]
            },
            {
              type: "category",
              label: "Transactions",
              link: {
                type: "doc",
                id: "commands/theme/Transactions"
              },
              items: [
                "commands-legacy/active-transaction",
                "commands-legacy/cancel-transaction",
                "commands-legacy/in-transaction",
                "commands-legacy/resume-transaction",
                "commands-legacy/start-transaction",
                "commands-legacy/suspend-transaction",
                "commands-legacy/transaction-level",
                "commands-legacy/validate-transaction"
              ]
            },
            {
              type: "category",
              label: "Triggers",
              link: {
                type: "doc",
                id: "commands/theme/Triggers"
              },
              items: [
                "commands-legacy/trigger-event",
                "commands-legacy/trigger-level",
                "commands-legacy/trigger-properties"
              ]
            },
            {
              type: "category",
              label: "User Interface",
              link: {
                type: "doc",
                id: "commands/theme/User_Interface"
              },
              items: [
                "commands-legacy/beep",
                "commands-legacy/caps-lock-down",
                "commands-legacy/focus-object",
                "commands-legacy/get-application-color-scheme",
                "commands-legacy/get-field-titles",
                "commands-legacy/get-table-titles",
                "commands-legacy/hide-menu-bar",
                "commands-legacy/macintosh-command-down",
                "commands-legacy/macintosh-control-down",
                "commands-legacy/macintosh-option-down",
                "commands-legacy/mouse-position",
                "commands-legacy/play",
                "commands-legacy/pop-up-menu",
                "commands-legacy/post-click",
                "commands-legacy/post-event",
                "commands-legacy/post-key",
                "commands-legacy/redraw",
                "commands-legacy/set-about",
                "commands-legacy/set-application-color-scheme",
                "commands-legacy/set-cursor",
                "commands-legacy/set-field-titles",
                "commands-legacy/set-table-titles",
                "commands-legacy/shift-down",
                "commands-legacy/show-menu-bar",
                "commands-legacy/windows-alt-down",
                "commands-legacy/windows-ctrl-down"
              ]
            },
            {
              type: "category",
              label: "Users and Groups",
              link: {
                type: "doc",
                id: "commands/theme/Users_and_Groups"
              },
              items: [
                "commands-legacy/blob-to-users",
                "commands-legacy/change-current-user",
                "commands-legacy/change-password",
                "commands-legacy/current-user",
                "commands-legacy/delete-user",
                "commands-legacy/edit-access",
                "commands-legacy/get-default-user",
                "commands-legacy/get-group-access",
                "commands-legacy/get-group-list",
                "commands-legacy/get-group-properties",
                "commands-legacy/get-plugin-access",
                "commands-legacy/get-user-list",
                "commands-legacy/get-user-properties",
                "commands-legacy/is-user-deleted",
                "commands-legacy/set-group-access",
                "commands-legacy/set-group-properties",
                "commands-legacy/set-plugin-access",
                "commands-legacy/set-user-alias",
                "commands-legacy/set-user-properties",
                "commands-legacy/user-in-group",
                "commands-legacy/users-to-blob",
                "commands-legacy/validate-password"
              ]
            },
            {
              type: "category",
              label: "Variables",
              link: {
                type: "doc",
                id: "commands/theme/Variables"
              },
              items: [
                "commands-legacy/clear-variable",
                "commands-legacy/load-variables",
                "commands-legacy/save-variables"
              ]
            },
            {
              type: "category",
              label: "Web Area",
              link: {
                type: "doc",
                id: "commands/theme/Web_Area"
              },
              items: [
                "commands-legacy/wa-back-url-available",
                "commands-legacy/wa-create-url-history-menu",
                "commands-legacy/wa-evaluate-javascript",
                "commands-legacy/wa-execute-javascript-function",
                "commands-legacy/wa-forward-url-available",
                "commands-legacy/wa-get-current-url",
                "commands-legacy/wa-get-external-links-filters",
                "commands-legacy/wa-get-last-filtered-url",
                "commands-legacy/wa-get-last-url-error",
                "commands-legacy/wa-get-page-content",
                "commands-legacy/wa-get-page-title",
                "commands-legacy/wa-get-preference",
                "commands-legacy/wa-get-url-filters",
                "commands-legacy/wa-get-url-history",
                "commands-legacy/wa-open-back-url",
                "commands-legacy/wa-open-forward-url",
                "commands-legacy/wa-open-url",
                "commands-legacy/wa-open-web-inspector",
                "commands-legacy/wa-refresh-current-url",
                "commands-legacy/wa-run-offscreen-area",
                "commands-legacy/wa-set-external-links-filters",
                "commands-legacy/wa-set-page-content",
                "commands-legacy/wa-set-preference",
                "commands-legacy/wa-set-url-filters",
                "commands-legacy/wa-stop-loading-url",
                "commands-legacy/wa-zoom-in",
                "commands-legacy/wa-zoom-out"
              ]
            },
            {
              type: "category",
              label: "Web Server",
              link: {
                type: "doc",
                id: "commands/theme/Web_Server"
              },
              items: [
                "commands-legacy/web-get-body-part",
                "commands-legacy/web-get-body-part-count",
                "commands-legacy/web-get-current-session-id",
                "commands-legacy/web-get-http-body",
                "commands-legacy/web-get-http-header",
                "commands-legacy/web-get-option",
                "commands-legacy/web-get-server-info",
                "commands-legacy/web-get-statistics",
                "commands-legacy/web-get-variables",
                "commands-legacy/web-is-secured-connection",
                "commands-legacy/web-is-server-running",
                "commands-legacy/web-legacy-close-session",
                "commands-legacy/web-legacy-get-session-expiration",
                "commands-legacy/web-send-blob",
                "commands-legacy/web-send-file",
                "commands-legacy/web-send-http-redirect",
                "commands-legacy/web-send-raw-data",
                "commands-legacy/web-send-text",
                "commands/web-server",
                "commands/web-server-list",
                "commands-legacy/web-set-home-page",
                "commands-legacy/web-set-http-header",
                "commands-legacy/web-set-option",
                "commands-legacy/web-set-root-folder",
                "commands-legacy/web-start-server",
                "commands-legacy/web-stop-server",
                "commands-legacy/web-validate-digest"
              ]
            },
            {
              type: "category",
              label: "Web Services (Client)",
              link: {
                type: "doc",
                id: "commands/theme/Web_Services_Client"
              },
              items: [
                "commands-legacy/web-service-authenticate",
                "commands-legacy/web-service-call",
                "commands-legacy/web-service-get-info",
                "commands-legacy/web-service-get-result",
                "commands-legacy/web-service-set-option",
                "commands-legacy/web-service-set-parameter"
              ]
            },
            {
              type: "category",
              label: "Web Services (Server)",
              link: {
                type: "doc",
                id: "commands/theme/Web_Services_Server"
              },
              items: [
                "commands-legacy/soap-declaration",
                "commands-legacy/soap-get-info",
                "commands-legacy/soap-reject-new-requests",
                "commands-legacy/soap-request",
                "commands-legacy/soap-send-fault"
              ]
            },
            {
              type: "category",
              label: "Windows",
              link: {
                type: "doc",
                id: "commands/theme/Windows"
              },
              items: [
                "commands-legacy/close-window",
                "commands-legacy/convert-coordinates",
                "commands-legacy/current-form-window",
                "commands-legacy/drag-window",
                "commands-legacy/erase-window",
                "commands-legacy/find-window",
                "commands-legacy/frontmost-window",
                "commands-legacy/get-window-rect",
                "commands-legacy/get-window-title",
                "commands-legacy/hide-tool-bar",
                "commands-legacy/hide-window",
                "commands-legacy/is-window-maximized",
                "commands-legacy/is-window-reduced",
                "commands-legacy/maximize-window",
                "commands-legacy/minimize-window",
                "commands-legacy/next-window",
                "commands-legacy/open-form-window",
                "commands-legacy/open-window",
                "commands-legacy/redraw-window",
                "commands-legacy/reduce-restore-window",
                "commands-legacy/resize-form-window",
                "commands/set-window-document-icon",
                "commands-legacy/set-window-rect",
                "commands-legacy/set-window-title",
                "commands-legacy/show-tool-bar",
                "commands-legacy/show-window",
                "commands-legacy/tool-bar-height",
                "commands-legacy/window-kind",
                "commands-legacy/window-list",
                "commands-legacy/window-process"
              ]
            },
            {
              type: "category",
              label: "XML DOM",
              link: {
                type: "doc",
                id: "commands/theme/XML_DOM"
              },
              items: [
                "commands-legacy/dom-append-xml-child-node",
                "commands-legacy/dom-append-xml-element",
                "commands-legacy/dom-close-xml",
                "commands-legacy/dom-count-xml-attributes",
                "commands-legacy/dom-count-xml-elements",
                "commands-legacy/dom-create-xml-element",
                "commands-legacy/dom-create-xml-element-arrays",
                "commands-legacy/dom-create-xml-ref",
                "commands-legacy/dom-export-to-file",
                "commands-legacy/dom-export-to-var",
                "commands-legacy/dom-find-xml-element",
                "commands-legacy/dom-find-xml-element-by-id",
                "commands-legacy/dom-get-first-child-xml-element",
                "commands-legacy/dom-get-last-child-xml-element",
                "commands-legacy/dom-get-next-sibling-xml-element",
                "commands-legacy/dom-get-parent-xml-element",
                "commands-legacy/dom-get-previous-sibling-xml-element",
                "commands-legacy/dom-get-root-xml-element",
                "commands-legacy/dom-get-xml-attribute-by-index",
                "commands-legacy/dom-get-xml-attribute-by-name",
                "commands-legacy/dom-get-xml-child-nodes",
                "commands-legacy/dom-get-xml-document-ref",
                "commands-legacy/dom-get-xml-element",
                "commands-legacy/dom-get-xml-element-name",
                "commands-legacy/dom-get-xml-element-value",
                "commands-legacy/dom-get-xml-information",
                "commands-legacy/dom-insert-xml-element",
                "commands-legacy/dom-parse-xml-source",
                "commands-legacy/dom-parse-xml-variable",
                "commands-legacy/dom-remove-xml-attribute",
                "commands-legacy/dom-remove-xml-element",
                "commands-legacy/dom-set-xml-attribute",
                "commands-legacy/dom-set-xml-declaration",
                "commands-legacy/dom-set-xml-element-name",
                "commands-legacy/dom-set-xml-element-value"
              ]
            },
            {
              type: "category",
              label: "XML SAX",
              link: {
                type: "doc",
                id: "commands/theme/XML_SAX"
              },
              items: [
                "commands-legacy/sax-add-processing-instruction",
                "commands-legacy/sax-add-xml-cdata",
                "commands-legacy/sax-add-xml-comment",
                "commands-legacy/sax-add-xml-doctype",
                "commands-legacy/sax-add-xml-element-value",
                "commands-legacy/sax-close-xml-element",
                "commands-legacy/sax-get-xml-cdata",
                "commands-legacy/sax-get-xml-comment",
                "commands-legacy/sax-get-xml-document-values",
                "commands-legacy/sax-get-xml-element",
                "commands-legacy/sax-get-xml-element-value",
                "commands-legacy/sax-get-xml-entity",
                "commands-legacy/sax-get-xml-node",
                "commands-legacy/sax-get-xml-processing-instruction",
                "commands-legacy/sax-open-xml-element",
                "commands-legacy/sax-open-xml-element-arrays",
                "commands-legacy/sax-set-xml-declaration"
              ]
            },
            {
              type: "category",
              label: "XML",
              link: {
                type: "doc",
                id: "commands/theme/XML"
              },
              items: [
                "commands-legacy/xml-decode",
                "commands-legacy/xml-get-error",
                "commands-legacy/xml-get-options",
                "commands-legacy/xml-set-options"
              ]
            }
          ]
        },
        {
          type: "category",
          label: "Classes",
          items: [
            "API/overview",
            "API/BlobClass",
            "API/ClassClass",
            "API/CollectionClass",
            "API/CryptoKeyClass",
            "API/DataClassClass",
            "API/DataStoreClass",
            "API/EmailObjectClass",
            "API/EntityClass",
            "API/EntitySelectionClass",
            "API/FileClass",
            "API/FileHandleClass",
            "API/FolderClass",
            "API/FunctionClass",
            "API/HTTPAgentClass",
            "API/HTTPRequestClass",
            "API/IMAPTransporterClass",
            "API/IncomingMessageClass",
            "API/MailAttachmentClass",
            "API/OutgoingMessageClass",
            "API/POP3TransporterClass",
            "API/SessionClass",
            "API/SignalClass",
            "API/SMTPTransporterClass",
            "API/SystemWorkerClass",
            "API/TCPConnectionClass",
            "API/TCPEventClass",
            "API/WebFormClass",
            "API/WebFormItemClass",
            "API/WebServerClass",
            "API/WebSocketClass",
            "API/WebSocketConnectionClass",
            "API/WebSocketServerClass",
            "API/ZipArchiveClass",
            "API/ZipFileClass",
            "API/ZipFolderClass"
          ],
          link: {
            type: "generated-index",
            title: "Class Functions",
            description: "List of built-in 4D classes",
            slug: "/category/class-API-reference",
            keywords: [
              "class"
            ],
            image: "/img/docusaurus.png"
          }
        }
      ]
    },
    {
      type: "category",
      label: "Administration",
      link: {
        type: "generated-index",
        title: "Administration",
        description: "How to monitor your 4D applications",
        keywords: [
          "administration"
        ],
        image: "/img/docusaurus.png"
      },
      items: [
        {
          type: "category",
          label: "4D Server Administration Window",
          link: {
            type: "doc",
            id: "ServerWindow/overview"
          },
          items: [
            "ServerWindow/monitor",
            "ServerWindow/users",
            "ServerWindow/processes",
            "ServerWindow/maintenance",
            "ServerWindow/application-server",
            "ServerWindow/sql-server",
            "ServerWindow/http-server",
            "ServerWindow/real-time-monitor",
            "ServerWindow/remote-admin"
          ]
        },
        {
          type: "category",
          label: "Web Administration",
          link: {
            type: "generated-index",
            title: "Web Administration",
            description: "4D web tools for administrating and monitoring your applications.",
            slug: "/category/web-administration",
            keywords: [
              "web administration"
            ],
            image: "/img/docusaurus.png"
          },
          items: [
            "Admin/webAdmin",
            "Admin/dataExplorer"
          ]
        },
        {
          type: "doc",
          label: "Command Line Interface",
          id: "Admin/cli"
        },
        {
          type: "doc",
          label: "TLS Protocol",
          id: "Admin/tls"
        },
        {
          type: "doc",
          label: "Managing 4D Licenses",
          id: "Admin/licenses"
        },
        {
          type: "category",
          label: "MSC",
          link: {
            type: "doc",
            id: "MSC/overview"
          },
          items: [
            "MSC/information",
            "MSC/analysis",
            "MSC/verify",
            "MSC/backup",
            "MSC/compact",
            "MSC/rollback",
            "MSC/restore",
            "MSC/repair",
            "MSC/encrypt"
          ]
        },
        {
          type: "category",
          label: "Backup and Restore",
          link: {
            type: "doc",
            id: "Backup/overview"
          },
          items: [
            "Backup/backup",
            "Backup/settings",
            "Backup/log",
            "Backup/restore"
          ]
        },
        {
          type: "doc",
          label: "Data Collection",
          id: "Admin/data-collect"
        }
      ]
    },
    {
      type: "category",
      label: "Extensions",
      link: {
        type: "doc",
        id: "Extensions/overview"
      },
      items: [
        {
          type: "category",
          label: "4D View Pro",
          link: {
            type: "generated-index",
            title: "4D View Pro",
            slug: "/category/4d-view-pro",
            keywords: [
              "4D View Pro"
            ],
            image: "/img/docusaurus.png"
          },
          items: [
            "ViewPro/getting-started",
            "ViewPro/configuring",
            "ViewPro/formulas",
            "ViewPro/classes",
            "ViewPro/advanced-programming",
            {
              type: "category",
              label: "Commands",
              link: {
                type: "doc",
                id: "ViewPro/commands"
              },
              items: [
                {
                  type: "category",
                  label: "A",
                  link: {
                    type: "generated-index",
                    title: "A",
                    slug: "/commands-legacy/A"
                  },
                  items: [
                    "ViewPro/commands/vp-add-formula-name",
                    "ViewPro/commands/vp-add-range-name",
                    "ViewPro/commands/vp-add-selection",
                    "ViewPro/commands/vp-add-sheet",
                    "ViewPro/commands/vp-add-span",
                    "ViewPro/commands/vp-add-stylesheet",
                    "ViewPro/commands/vp-all"
                  ]
                },
                {
                  type: "category",
                  label: "C",
                  link: {
                    type: "generated-index",
                    title: "C",
                    slug: "/commands-legacy/C"
                  },
                  items: [
                    "ViewPro/commands/vp-cell",
                    "ViewPro/commands/vp-cells",
                    "ViewPro/commands/vp-column",
                    "ViewPro/commands/vp-column-autofit",
                    "ViewPro/commands/vp-combine-ranges",
                    "ViewPro/commands/vp-convert-from-4d-view",
                    "ViewPro/commands/vp-convert-to-picture",
                    "ViewPro/commands/vp-copy-to-object",
                    "ViewPro/commands/vp-create-table"
                  ]
                },
                {
                  type: "category",
                  label: "D",
                  link: {
                    type: "generated-index",
                    title: "D",
                    slug: "/commands-legacy/D"
                  },
                  items: [
                    "ViewPro/commands/vp-delete-columns",
                    "ViewPro/commands/vp-delete-rows"
                  ]
                },
                {
                  type: "category",
                  label: "E",
                  link: {
                    type: "generated-index",
                    title: "E",
                    slug: "/commands-legacy/E"
                  },
                  items: [
                    "ViewPro/commands/vp-export-document",
                    "ViewPro/commands/vp-export-to-blob",
                    "ViewPro/commands/vp-export-to-object"
                  ]
                },
                {
                  type: "category",
                  label: "F",
                  link: {
                    type: "generated-index",
                    title: "F",
                    slug: "/commands-legacy/F"
                  },
                  items: [
                    "ViewPro/commands/vp-find",
                    "ViewPro/commands/vp-find-table",
                    "ViewPro/commands/vp-flush-commands",
                    "ViewPro/commands/vp-font-to-object"
                  ]
                },
                {
                  type: "category",
                  label: "G",
                  link: {
                    type: "generated-index",
                    title: "G",
                    slug: "/commands-legacy/G"
                  },
                  items: [
                    "ViewPro/commands/vp-get-active-cell",
                    "ViewPro/commands/vp-get-binding-path",
                    "ViewPro/commands/vp-get-cell-style",
                    "ViewPro/commands/vp-get-column-attributes",
                    "ViewPro/commands/vp-get-column-count",
                    "ViewPro/commands/vp-get-current-sheet",
                    "ViewPro/commands/vp-get-data-context",
                    "ViewPro/commands/vp-get-default-style",
                    "ViewPro/commands/vp-get-formula",
                    "ViewPro/commands/vp-get-formula-by-name",
                    "ViewPro/commands/vp-get-formulas",
                    "ViewPro/commands/vp-get-frozen-panes",
                    "ViewPro/commands/vp-get-names",
                    "ViewPro/commands/vp-get-print-info",
                    "ViewPro/commands/vp-get-row-attributes",
                    "ViewPro/commands/vp-get-row-count",
                    "ViewPro/commands/vp-get-selection",
                    "ViewPro/commands/vp-get-sheet-count",
                    "ViewPro/commands/vp-get-sheet-index",
                    "ViewPro/commands/vp-get-sheet-name",
                    "ViewPro/commands/vp-get-sheet-options",
                    "ViewPro/commands/vp-get-show-print-lines",
                    "ViewPro/commands/vp-get-spans",
                    "ViewPro/commands/vp-get-stylesheet",
                    "ViewPro/commands/vp-get-stylesheets",
                    "ViewPro/commands/vp-get-table-column-attributes",
                    "ViewPro/commands/vp-get-table-column-index",
                    "ViewPro/commands/vp-get-table-dirty-rows",
                    "ViewPro/commands/vp-get-table-range",
                    "ViewPro/commands/vp-get-table-theme",
                    "ViewPro/commands/vp-get-tables",
                    "ViewPro/commands/vp-get-value",
                    "ViewPro/commands/vp-get-values",
                    "ViewPro/commands/vp-get-workbook-options"
                  ]
                },
                {
                  type: "category",
                  label: "I",
                  link: {
                    type: "generated-index",
                    title: "I",
                    slug: "/commands-legacy/I"
                  },
                  items: [
                    "ViewPro/commands/vp-import-document",
                    "ViewPro/commands/vp-import-from-blob",
                    "ViewPro/commands/vp-import-from-object",
                    "ViewPro/commands/vp-insert-columns",
                    "ViewPro/commands/vp-insert-rows",
                    "ViewPro/commands/vp-insert-table-columns",
                    "ViewPro/commands/vp-insert-table-rows"
                  ]
                },
                {
                  type: "category",
                  label: "M",
                  link: {
                    type: "generated-index",
                    title: "M",
                    slug: "/commands-legacy/M"
                  },
                  items: [
                    "ViewPro/commands/vp-move-cells"
                  ]
                },
                {
                  type: "category",
                  label: "N",
                  link: {
                    type: "generated-index",
                    title: "N",
                    slug: "/commands-legacy/N"
                  },
                  items: [
                    "ViewPro/commands/vp-name",
                    "ViewPro/commands/vp-new-document"
                  ]
                },
                {
                  type: "category",
                  label: "O",
                  link: {
                    type: "generated-index",
                    title: "O",
                    slug: "/commands-legacy/O"
                  },
                  items: [
                    "ViewPro/commands/vp-object-to-font"
                  ]
                },
                {
                  type: "category",
                  label: "P",
                  link: {
                    type: "generated-index",
                    title: "P",
                    slug: "/commands-legacy/P"
                  },
                  items: [
                    "ViewPro/commands/vp-paste-from-object",
                    "ViewPro/commands/vp-print"
                  ]
                },
                {
                  type: "category",
                  label: "R",
                  link: {
                    type: "generated-index",
                    title: "R",
                    slug: "/commands-legacy/R"
                  },
                  items: [
                    "ViewPro/commands/vp-recompute-formulas",
                    "ViewPro/commands/vp-remove-name",
                    "ViewPro/commands/vp-remove-sheet",
                    "ViewPro/commands/vp-remove-span",
                    "ViewPro/commands/vp-remove-stylesheet",
                    "ViewPro/commands/vp-remove-table",
                    "ViewPro/commands/vp-remove-table-columns",
                    "ViewPro/commands/vp-remove-table-rows",
                    "ViewPro/commands/vp-reset-selection",
                    "ViewPro/commands/vp-resize-table",
                    "ViewPro/commands/vp-resume-computing",
                    "ViewPro/commands/vp-row",
                    "ViewPro/commands/vp-row-autofit",
                    "ViewPro/commands/vp-run-offscreen-area"
                  ]
                },
                {
                  type: "category",
                  label: "S",
                  link: {
                    type: "generated-index",
                    title: "S",
                    slug: "/commands-legacy/S"
                  },
                  items: [
                    "ViewPro/commands/vp-set-active-cell",
                    "ViewPro/commands/vp-set-allowed-methods",
                    "ViewPro/commands/vp-set-binding-path",
                    "ViewPro/commands/vp-set-boolean-value",
                    "ViewPro/commands/vp-set-border",
                    "ViewPro/commands/vp-set-cell-style",
                    "ViewPro/commands/vp-set-column-attributes",
                    "ViewPro/commands/vp-set-column-count",
                    "ViewPro/commands/vp-set-current-sheet",
                    "ViewPro/commands/vp-set-custom-functions",
                    "ViewPro/commands/vp-set-data-context",
                    "ViewPro/commands/vp-set-date-time-value",
                    "ViewPro/commands/vp-set-date-value",
                    "ViewPro/commands/vp-set-default-style",
                    "ViewPro/commands/vp-set-field",
                    "ViewPro/commands/vp-set-formula",
                    "ViewPro/commands/vp-set-formulas",
                    "ViewPro/commands/vp-set-frozen-panes",
                    "ViewPro/commands/vp-set-num-value",
                    "ViewPro/commands/vp-set-print-info",
                    "ViewPro/commands/vp-set-row-attributes",
                    "ViewPro/commands/vp-set-row-count",
                    "ViewPro/commands/vp-set-selection",
                    "ViewPro/commands/vp-set-sheet-count",
                    "ViewPro/commands/vp-set-sheet-name",
                    "ViewPro/commands/vp-set-sheet-options",
                    "ViewPro/commands/vp-set-show-print-lines",
                    "ViewPro/commands/vp-set-table-column-attributes",
                    "ViewPro/commands/vp-set-table-theme",
                    "ViewPro/commands/vp-set-text-value",
                    "ViewPro/commands/vp-set-time-value",
                    "ViewPro/commands/vp-set-value",
                    "ViewPro/commands/vp-set-values",
                    "ViewPro/commands/vp-set-workbook-options",
                    "ViewPro/commands/vp-show-cell",
                    "ViewPro/commands/vp-suspend-computing"
                  ]
                }
              ]
            }
          ]
        },
        {
          type: "category",
          label: "4D Write Pro",
          link: {
            type: "generated-index",
            title: "4D Write Pro",
            slug: "/category/4d-write-pro",
            keywords: [
              "4D Write Pro"
            ],
            image: "/img/docusaurus.png"
          },
          items: [
            "WritePro/writeprointerface",
            "WritePro/managing-formulas",
            "WritePro/commands-legacy/4d-write-pro-attributes",
            {
              type: "category",
              label: "Commands",
              link: {
                type: "doc",
                id: "WritePro/commands/command-index"
              },
              items: [
                "WritePro/commands/wp-add-picture",
                "WritePro/commands-legacy/wp-bookmark-range",
                "WritePro/commands-legacy/wp-compute-formulas",
                "WritePro/commands-legacy/wp-delete-bookmark",
                "WritePro/commands-legacy/wp-delete-footer",
                "WritePro/commands-legacy/wp-delete-header",
                "WritePro/commands-legacy/wp-delete-picture",
                "WritePro/commands/wp-delete-section",
                "WritePro/commands-legacy/wp-delete-style-sheet",
                "WritePro/commands/wp-delete-subsection",
                "WritePro/commands-legacy/wp-delete-text-box",
                "WritePro/commands/wp-export-document",
                "WritePro/commands/wp-export-variable",
                "WritePro/commands-legacy/wp-find-all",
                "WritePro/commands-legacy/wp-find-next",
                "WritePro/commands-legacy/wp-find-previous",
                "WritePro/commands-legacy/wp-freeze-formulas",
                "WritePro/commands/wp-get-attributes",
                "WritePro/commands-legacy/wp-get-body",
                "WritePro/commands-legacy/wp-get-bookmarks",
                "WritePro/commands-legacy/wp-get-breaks",
                "WritePro/commands-legacy/wp-get-data-context",
                "WritePro/commands-legacy/wp-get-element-by-id",
                "WritePro/commands-legacy/wp-get-elements",
                "WritePro/commands-legacy/wp-get-footer",
                "WritePro/commands-legacy/wp-get-formulas",
                "WritePro/commands-legacy/wp-get-frame",
                "WritePro/commands-legacy/wp-get-header",
                "WritePro/commands-legacy/wp-get-links",
                "WritePro/commands-legacy/wp-get-page-count",
                "WritePro/commands-legacy/wp-get-position",
                "WritePro/commands-legacy/wp-get-section",
                "WritePro/commands-legacy/wp-get-sections",
                "WritePro/commands-legacy/wp-get-style-sheet",
                "WritePro/commands-legacy/wp-get-style-sheets",
                "WritePro/commands-legacy/wp-get-subsection",
                "WritePro/commands-legacy/wp-get-text",
                "WritePro/commands-legacy/wp-get-view-properties",
                "WritePro/commands/wp-import-document",
                "WritePro/commands-legacy/wp-import-style-sheets",
                "WritePro/commands/wp-insert-break",
                "WritePro/commands/wp-insert-document-body",
                "WritePro/commands/wp-insert-formula",
                "WritePro/commands/wp-insert-picture",
                "WritePro/commands-legacy/wp-insert-table",
                "WritePro/commands-legacy/wp-is-font-style-supported",
                "WritePro/commands-legacy/wp-new",
                "WritePro/commands-legacy/wp-new-bookmark",
                "WritePro/commands-legacy/wp-new-footer",
                "WritePro/commands-legacy/wp-new-header",
                "WritePro/commands-legacy/wp-new-style-sheet",
                "WritePro/commands-legacy/wp-new-subsection",
                "WritePro/commands-legacy/wp-new-text-box",
                "WritePro/commands-legacy/wp-paragraph-range",
                "WritePro/commands-legacy/wp-picture-range",
                "WritePro/commands-legacy/wp-print",
                "WritePro/commands/wp-reset-attributes",
                "WritePro/commands-legacy/wp-select",
                "WritePro/commands-legacy/wp-selection-range",
                "WritePro/commands/wp-set-attributes",
                "WritePro/commands-legacy/wp-set-data-context",
                "WritePro/commands-legacy/wp-set-frame",
                "WritePro/commands-legacy/wp-set-link",
                "WritePro/commands-legacy/wp-set-text",
                "WritePro/commands-legacy/wp-set-view-properties",
                "WritePro/commands/wp-table-append-row",
                "WritePro/commands-legacy/wp-table-delete-columns",
                "WritePro/commands-legacy/wp-table-delete-rows",
                "WritePro/commands-legacy/wp-table-get-cells",
                "WritePro/commands-legacy/wp-table-get-columns",
                "WritePro/commands-legacy/wp-table-get-rows",
                "WritePro/commands-legacy/wp-table-insert-columns",
                "WritePro/commands-legacy/wp-table-insert-rows",
                "WritePro/commands-legacy/wp-table-merge-cells",
                "WritePro/commands-legacy/wp-table-range",
                "WritePro/commands-legacy/wp-table-split-cells",
                "WritePro/commands-legacy/wp-text-range",
                "WritePro/commands-legacy/wp-use-page-setup"
              ]
            }
          ]
        },
        {
          type: "link",
          label: "4D Mobile App Server",
          href: "https://github.com/4d-go-mobile/4D-Mobile-App-Server"
        },
        {
          type: "link",
          label: "4D NetKit",
          href: "https://developer.4d.com/4D-NetKit"
        },
        {
          type: "link",
          label: "4D Progress",
          href: "https://doc.4d.com/4Dv20R8/4D/20-R8/4D-Progress.100-7476284.en.html"
        },
        {
          type: "link",
          label: "4D SVG",
          href: "https://doc.4d.com/4Dv20R8/4D/20-R8/4D-SVG-Component.100-7477155.en.html"
        },
        {
          type: "link",
          label: "4D Widgets",
          href: "https://doc.4d.com/4Dv20R8/4D/20-R8/4D-Widgets.100-7477804.en.html"
        },
        "Extensions/develop-components",
        "Extensions/develop-plug-ins"
      ]
    },
    {
      type: "category",
      label: "Web Applications",
      link: {
        type: "generated-index",
        title: "Web Applications",
        description: "Guides for developing Web applications with 4D",
        keywords: [
          "web applications"
        ],
        image: "/img/docusaurus.png"
      },
      items: [
        {
          type: "category",
          label: "Web Server",
          link: {
            type: "doc",
            id: "WebServer/webServer"
          },
          items: [
            "WebServer/webServerConfig",
            "WebServer/webServerAdmin",
            "WebServer/webServerObject"
          ]
        },
        {
          type: "category",
          label: "Web Development",
          link: {
            type: "doc",
            id: "WebServer/gettingStarted"
          },
          items: [
            "WebServer/templates",
            "WebServer/httpRequests",
            "WebServer/http-request-handler",
            "WebServer/allowProject",
            "WebServer/errorPages",
            "WebServer/authentication",
            "WebServer/sessions",
            "WebServer/preemptiveWeb"
          ]
        },
        {
          type: "category",
          label: "Qodly Studio",
          link: {
            type: "generated-index",
            title: "Qodly Studio",
            description: "Using Qodly Studio to build powerful web interfaces.",
            slug: "/category/qodly-studio-in-4d",
            keywords: [
              "Qodly Studio"
            ],
            image: "/img/docusaurus.png"
          },
          items: [
            "WebServer/qodly-studio",
            "WebServer/from-qodlyscript-to-4d"
          ]
        },
        {
          type: "category",
          label: "REST API",
          link: {
            type: "generated-index",
            title: "REST API",
            description: "Exposing your datastore to REST and using the REST API.",
            keywords: [
              "REST server"
            ],
            image: "/img/docusaurus.png"
          },
          items: [
            {
              type: "category",
              label: "Exposing your datastore in REST",
              link: {
                type: "generated-index",
                title: "Exposing your datastore in REST",
                description: "Configure your datastore for REST access",
                keywords: [
                  "REST access"
                ],
                image: "/img/docusaurus.png"
              },
              items: [
                "REST/gettingStarted",
                "REST/configuration",
                "REST/authUsers",
                "REST/genInfo",
                "REST/manData",
                "REST/classFunctions",
                "REST/REST_requests"
              ]
            },
            {
              type: "category",
              label: "API (general)",
              link: {
                type: "generated-index",
                title: "API (general)",
                description: "REST API for global information",
                keywords: [
                  "REST API"
                ],
                image: "/img/docusaurus.png"
              },
              items: [
                "REST/catalog",
                "REST/info",
                "REST/singleton",
                "REST/upload"
              ]
            },
            {
              type: "category",
              label: "API (dataClass)",
              link: {
                type: "generated-index",
                title: "API (dataClass)",
                description: "REST API for dataClass.",
                keywords: [
                  "REST API"
                ],
                image: "/img/docusaurus.png"
              },
              items: [
                "REST/dataClass",
                "REST/asArray",
                "REST/atomic_$atonce",
                "REST/attributes",
                "REST/binary",
                "REST/clean",
                "REST/compute",
                "REST/distinct",
                "REST/entityset",
                "REST/expand",
                "REST/filter",
                "REST/format",
                "REST/imageformat",
                "REST/lock",
                "REST/method",
                "REST/orderby",
                "REST/querypath",
                "REST/queryplan",
                "REST/savedfilter",
                "REST/savedorderby",
                "REST/skip",
                "REST/timeout",
                "REST/top_$limit",
                "REST/version"
              ]
            }
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Desktop Applications",
      link: {
        type: "generated-index",
        title: "Desktop Applications",
        description: "Guides for developing Desktop applications with 4D",
        keywords: [
          "desktop applications"
        ],
        image: "/img/docusaurus.png"
      },
      items: [
        {
          type: "doc",
          label: "Client/Server",
          id: "Desktop/clientServer"
        },
        {
          type: "category",
          label: "Access Rights",
          link: {
            type: "generated-index",
            title: "Access Rights",
            description: "Access control and user privileges for desktop applications.",
            slug: "/category/access-rights",
            keywords: [
              "access rights"
            ],
            image: "/img/docusaurus.png"
          },
          items: [
            "Users/overview",
            "Users/editing"
          ]
        },
        {
          type: "category",
          label: "Forms",
          link: {
            type: "doc",
            id: "FormEditor/forms"
          },
          items: [
            "FormEditor/stylesheets",
            "FormEditor/pictures",
            {
              type: "category",
              label: "Form Editor",
              link: {
                type: "doc",
                id: "FormEditor/formEditor"
              },
              items: [
                "FormEditor/macros",
                "FormEditor/objectLibrary"
              ]
            },
            {
              type: "category",
              label: "Form Properties",
              link: {
                type: "doc",
                id: "FormEditor/jsonReference"
              },
              items: [
                "FormEditor/action",
                "FormEditor/propertiesForm",
                "FormEditor/formSize",
                "FormEditor/markers",
                "FormEditor/menu",
                "FormEditor/print",
                "FormEditor/windowSize"
              ]
            },
            {
              type: "category",
              label: "Form Objects",
              link: {
                type: "doc",
                id: "FormObjects/formObjectsOverview"
              },
              items: [
                "FormObjects/buttonOverview",
                "FormObjects/buttonGridOverview",
                "FormObjects/checkboxOverview",
                "FormObjects/comboBoxOverview",
                "FormObjects/dropdownListOverview",
                "FormObjects/groupBox",
                "FormObjects/inputOverview",
                "FormObjects/listOverview",
                "FormObjects/listboxOverview",
                "FormObjects/pictureButtonOverview",
                "FormObjects/picturePopupMenuOverview",
                "FormObjects/pluginAreaOverview",
                "FormObjects/progressIndicator",
                "FormObjects/radiobuttonOverview",
                "FormObjects/ruler",
                "FormObjects/shapesOverview",
                "FormObjects/spinner",
                "FormObjects/splitters",
                "FormObjects/staticPicture",
                "FormObjects/stepper",
                "FormObjects/subformOverview",
                "FormObjects/tabControl",
                "FormObjects/text",
                "FormObjects/webAreaOverview",
                "FormObjects/viewProAreaOverview",
                "FormObjects/writeProAreaOverview"
              ]
            },
            {
              type: "category",
              label: "Form Object Properties",
              link: {
                type: "doc",
                id: "FormObjects/propertiesReference"
              },
              items: [
                "FormObjects/propertiesAction",
                "FormObjects/propertiesAnimation",
                "FormObjects/propertiesAppearance",
                "FormObjects/propertiesBackgroundAndBorder",
                "FormObjects/propertiesCoordinatesAndSizing",
                "FormObjects/propertiesCrop",
                "FormObjects/propertiesDataSource",
                "FormObjects/propertiesDisplay",
                "FormObjects/propertiesEntry",
                "FormObjects/propertiesFooters",
                "FormObjects/propertiesGridlines",
                "FormObjects/propertiesHeaders",
                "FormObjects/propertiesHelp",
                "FormObjects/propertiesHierarchy",
                "FormObjects/propertiesListBox",
                "FormObjects/propertiesObject",
                "FormObjects/propertiesPicture",
                "FormObjects/propertiesPlugIns",
                "FormObjects/propertiesPrint",
                "FormObjects/propertiesRangeOfValues",
                "FormObjects/propertiesResizingOptions",
                "FormObjects/propertiesScale",
                "FormObjects/propertiesSubform",
                "FormObjects/propertiesText",
                "FormObjects/propertiesTextAndPicture",
                "FormObjects/propertiesWebArea"
              ]
            },
            {
              type: "category",
              label: "Form Events",
              link: {
                type: "doc",
                id: "Events/overview"
              },
              items: [
                "Events/onActivate",
                "Events/onAfterEdit",
                "Events/onAfterKeystroke",
                "Events/onAfterSort",
                "Events/onAlternativeClick",
                "Events/onBeforeDataEntry",
                "Events/onBeforeKeystroke",
                "Events/onBeginDragOver",
                "Events/onBeginUrlLoading",
                "Events/onBoundVariableChange",
                "Events/onClicked",
                "Events/onCloseBox",
                "Events/onCloseDetail",
                "Events/onCollapse",
                "Events/onColumnMoved",
                "Events/onColumnResize",
                "Events/onDataChange",
                "Events/onDeactivate",
                "Events/onDeleteAction",
                "Events/onDisplayDetail",
                "Events/onDoubleClicked",
                "Events/onDragOver",
                "Events/onDrop",
                "Events/onEndUrlLoading",
                "Events/onExpand",
                "Events/onFooterClick",
                "Events/onGettingFocus",
                "Events/onHeader",
                "Events/onHeaderClick",
                "Events/onLoad",
                "Events/onLoadRecord",
                "Events/onLongClick",
                "Events/onLosingFocus",
                "Events/onMenuSelected",
                "Events/onMouseEnter",
                "Events/onMouseLeave",
                "Events/onMouseMove",
                "Events/onMouseUp",
                "Events/onOpenDetail",
                "Events/onOpenExternalLink",
                "Events/onOutsideCall",
                "Events/onPageChange",
                "Events/onPlugInArea",
                "Events/onPrintingBreak",
                "Events/onPrintingDetail",
                "Events/onPrintingFooter",
                "Events/onResize",
                "Events/onRowMoved",
                "Events/onRowResize",
                "Events/onScroll",
                "Events/onSelectionChange",
                "Events/onTimer",
                "Events/onUnload",
                "Events/onUrlFiltering",
                "Events/onUrlLoadingError",
                "Events/onUrlResourceLoading",
                "Events/onValidate",
                "Events/onVpRangeChanged",
                "Events/onVpReady",
                "Events/onWindowOpeningDenied"
              ]
            }
          ]
        },
        {
          type: "category",
          label: "Menus",
          link: {
            type: "doc",
            id: "Menus/overview"
          },
          items: [
            "Menus/creating",
            "Menus/properties",
            "Menus/bars",
            "Menus/sdi"
          ]
        },
        {
          type: "doc",
          label: "User Settings",
          id: "Desktop/user-settings"
        },
        {
          type: "doc",
          label: "Build Application",
          id: "Desktop/building"
        },
        {
          type: "doc",
          label: "Labels",
          id: "Desktop/labels"
        }
      ]
    },
    {
      type: "category",
      label: "Mobile Applications",
      items: [
        {
          type: "link",
          label: "Go Mobile",
          href: "https://developer.4d.com/go-mobile/"
        },
        {
          type: "link",
          label: "4D for iOS (archive)",
          href: "https://developer.4d.com/4d-for-ios"
        }
      ]
    }
  ]
}
