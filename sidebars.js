module.exports =
{
	docs: [
		{
			type: "category",
			label: "Getting Started",
			link: {
				type: 'generated-index',
				title: 'Getting Started',
				slug: '/category/getting-started',
				keywords: ['start'],
				image: '/img/docusaurus.png',
				},
			items: [
				"GettingStarted/installation",
				"GettingStarted/creating",
				"Notes/updates"
			],
		},
		{
			type: "category",
			label: "Core Development",
			link: {
				type: 'generated-index',
				title: 'Core Development',
				slug: '/category/core-development',
				keywords: ['core'],
				image: '/img/docusaurus.png',
				},
			items:
			[
				{
					type: "category",
					label: "Project Management",
					link: {
						type: 'doc',
						id: 'Project/overview',
					},
					items: [
						"Project/architecture",
						{
							type: "category",
							label: "Settings",
							link: {
								type: 'doc',
								id: 'settings/overview',
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
							],
						},
						"Project/components",
						"Project/date-time-formats",
						"Project/documentation",
					],
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
								type: 'doc',
								id: 'Debugging/basics',
							},
							items: [
								"Debugging/debugger",
								"Debugging/breakpoints",
								"Debugging/debugging-remote",
							]
						},
						"Debugging/debugLogFiles",
					]
				},

				{
					type: "category",
					label: "ORDA",
					link: {
						type: 'doc',
						id: 'ORDA/overview',
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
					],
				},
				{
					type: "category",
					label: "Language",
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
													type: 'doc',
													id: "Concepts/data-types",
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
												"Concepts/variant",
											],
										},
										"Concepts/variables",
										"Concepts/arrays",
										"Concepts/methods",
										"Concepts/parameters",
										"Concepts/shared",
										"Concepts/classes",
										"Concepts/commands",
										"Concepts/control-flow",
										"Concepts/error-handling",
										"Concepts/interpreted-compiled",
										"Concepts/components",
										"Concepts/plug-ins",
										"Concepts/identifiers",
										"Concepts/paths"
									],
						},
						{
							type: 'link',
							label: 'Command List (doc center)', //
							href: 'https://doc.4d.com/4Dv20R6/4D/20-R6/4D-Language-Reference.100-6957482.en.html',
						},
						{
							type: "category",
							label: "Commands",
							items: [
								  "commands/command-index",
								  {
									"type": "category",
									"label": "Arrays",
									"items": [
									  "commands/append-to-array",
									  "commands/array-blob",
									  "commands/array-boolean",
									  "commands/array-date",
									  "commands/array-integer",
									  "commands/array-longint",
									  "commands/array-object",
									  "commands/array-picture",
									  "commands/array-pointer",
									  "commands/array-real",
									  "commands/array-text",
									  "commands/array-time",
									  "commands/array-to-list",
									  "commands/array-to-selection",
									  "commands/boolean-array-from-set",
									  "commands/copy-array",
									  "commands/count-in-array",
									  "commands/delete-from-array",
									  "commands/distinct-attribute-paths",
									  "commands/distinct-attribute-values",
									  "commands/distinct-values",
									  "commands/find-in-array",
									  "commands/find-in-sorted-array",
									  "commands/insert-in-array",
									  "commands/list-to-array",
									  "commands/longint-array-from-selection",
									  "commands/multi-sort-array",
									  "commands/selection-range-to-array",
									  "commands/selection-to-array",
									  "commands/size-of-array",
									  "commands/sort-array",
									  "commands/text-to-array"
									]
								  },
								  {
									"type": "category",
									"label": "BLOB",
									"items": [
									  "commands/blob-properties",
									  "commands/blob-size",
									  "commands/blob-to-document",
									  "commands/blob-to-integer",
									  "commands/blob-to-list",
									  "commands/blob-to-longint",
									  "commands/blob-to-real",
									  "commands/blob-to-text",
									  "commands/blob-to-variable",
									  "commands/compress-blob",
									  "commands/copy-blob",
									  "commands/decrypt-blob",
									  "commands/delete-from-blob",
									  "commands/document-to-blob",
									  "commands/encrypt-blob",
									  "commands/expand-blob",
									  "commands/insert-in-blob",
									  "commands/integer-to-blob",
									  "commands/list-to-blob",
									  "commands/longint-to-blob",
									  "commands/real-to-blob",
									  "commands/set-blob-size",
									  "commands/text-to-blob",
									  "commands/variable-to-blob"
									]
								  },
								  {
									"type": "category",
									"label": "Backup",
									"items": [
									  "commands/backup",
									  "commands/check-log-file",
									  "commands/get-backup-information",
									  "commands/get-restore-information",
									  "commands/integrate-mirror-log-file",
									  "commands/log-file",
									  "commands/log-file-to-json",
									  "commands/new-log-file",
									  "commands/restore",
									  "commands/select-log-file"
									]
								  },
								  {
									"type": "category",
									"label": "Boolean",
									"items": [
									  "commands/bool",
									  "commands/false",
									  "commands/not",
									  "commands/true"
									]
								  },
								  {
									"type": "category",
									"label": "Cache Management",
									"items": [
									  "commands/adjust-blobs-cache-priority",
									  "commands/adjust-index-cache-priority",
									  "commands/adjust-table-cache-priority",
									  "commands/cache-info",
									  "commands/flush-cache",
									  "commands/get-adjusted-blobs-cache-priority",
									  "commands/get-adjusted-index-cache-priority",
									  "commands/get-adjusted-table-cache-priority",
									  "commands/get-cache-size",
									  "commands/get-memory-statistics",
									  "commands/set-blobs-cache-priority",
									  "commands/set-cache-size",
									  "commands/set-index-cache-priority",
									  "commands/set-table-cache-priority"
									]
								  },
								  {
									"type": "category",
									"label": "Collections",
									"items": [
									  "commands/array-to-collection",
									  "commands/collection-to-array",
									  "commands/new-collection",
									  "commands/new-shared-collection"
									]
								  },
								  {
									"type": "category",
									"label": "Communications",
									"items": [
									  "commands/get-serial-port-mapping",
									  "commands/receive-buffer",
									  "commands/receive-packet",
									  "commands/receive-record",
									  "commands/receive-variable",
									  "commands/send-packet",
									  "commands/send-record",
									  "commands/send-variable",
									  "commands/set-channel",
									  "commands/set-timeout",
									  "commands/use-character-set"
									]
								  },
								  {
									"type": "category",
									"label": "Compiler",
									"items": [
									  "commands/c-blob",
									  "commands/c-boolean",
									  "commands/c-collection",
									  "commands/c-date",
									  "commands/c-longint",
									  "commands/c-object",
									  "commands/c-picture",
									  "commands/c-pointer",
									  "commands/c-real",
									  "commands/c-text",
									  "commands/c-time",
									  "commands/c-variant",
									  "commands/compile-project",
									  "commands/idle"
									]
								  },
								  {
									"type": "category",
									"label": "Data Entry",
									"items": [
									  "commands/accept",
									  "commands/add-record",
									  "commands/cancel",
									  "commands/dialog",
									  "commands/modified",
									  "commands/modify-record",
									  "commands/old",
									  "commands/reject"
									]
								  },
								  {
									"type": "category",
									"label": "Data Security",
									"items": [
									  "commands/data-file-encryption-status",
									  "commands/decrypt-data-blob",
									  "commands/discover-data-key",
									  "commands/encrypt-data-blob",
									  "commands/encrypt-data-file",
									  "commands/new-data-key",
									  "commands/register-data-key"
									]
								  },
								  {
									"type": "category",
									"label": "Database Methods",
									"items": [
									  "commands/on-backup-shutdown-database-method",
									  "commands/on-backup-startup-database-method",
									  "commands/on-drop-database-method",
									  "commands/on-exit-database-method",
									  "commands/on-host-database-event-database-method",
									  "commands/on-mobile-app-action-database-method",
									  "commands/on-mobile-app-authentication-database-method",
									  "commands/on-rest-authentication-database-method",
									  "commands/on-server-close-connection-database-method",
									  "commands/on-server-open-connection-database-method",
									  "commands/on-server-shutdown-database-method",
									  "commands/on-server-startup-database-method",
									  "commands/on-sql-authentication-database-method",
									  "commands/on-startup-database-method",
									  "commands/on-system-event-database-method",
									  "commands/on-web-authentication-database-method",
									  "commands/on-web-connection-database-method",
									  "commands/on-web-legacy-close-session-database-method"
									]
								  },
								  {
									"type": "category",
									"label": "Date and Time",
									"items": [
									  "commands/add-to-date",
									  "commands/current-date",
									  "commands/current-time",
									  "commands/date",
									  "commands/day-number",
									  "commands/day-of",
									  "commands/milliseconds",
									  "commands/month-of",
									  "commands/set-default-century",
									  "commands/tickcount",
									  "commands/time",
									  "commands/time-string",
									  "commands/timestamp",
									  "commands/year-of"
									]
								  },
								  {
									"type": "category",
									"label": "Deprecated Commands",
									"items": [
									  "commands/o-web-get-session-process-count"
									]
								  },
								  {
									"type": "category",
									"label": "Design Object Access",
									"items": [
									  "commands/current-method-path",
									  "commands/form-edit",
									  "commands/form-get-names",
									  "commands/method-get-attribute",
									  "commands/method-get-attributes",
									  "commands/method-get-code",
									  "commands/method-get-comments",
									  "commands/method-get-folders",
									  "commands/method-get-modification-date",
									  "commands/method-get-names",
									  "commands/method-get-path",
									  "commands/method-get-paths",
									  "commands/method-get-paths-form",
									  "commands/method-open-path",
									  "commands/method-resolve-path",
									  "commands/method-set-access-mode",
									  "commands/method-set-attribute",
									  "commands/method-set-attributes",
									  "commands/method-set-code",
									  "commands/method-set-comments"
									]
								  },
								  {
									"type": "category",
									"label": "Drag and Drop",
									"items": [
									  "commands/drop-position",
									  "commands/set-drag-icon"
									]
								  },
								  {
									"type": "category",
									"label": "Entry Control",
									"items": [
									  "commands/edit-item",
									  "commands/filter-keystroke",
									  "commands/get-edited-text",
									  "commands/get-highlight",
									  "commands/goto-object",
									  "commands/highlight-text",
									  "commands/is-editing-text",
									  "commands/keystroke"
									]
								  },
								  {
									"type": "category",
									"label": "File and Folder",
									"items": [
									  "commands-n/file",
									  "commands-n/folder",
									  "commands/zip-create-archive",
									  "commands/zip-read-archive"
									]
								  },
								  {
									"type": "category",
									"label": "Form Events",
									"items": [
									  "commands/activated",
									  "commands/after",
									  "commands/before",
									  "commands/call-form",
									  "commands/call-subform-container",
									  "commands/clickcount",
									  "commands/contextual-click",
									  "commands/deactivated",
									  "commands/execute-method-in-subform",
									  "commands/form-event",
									  "commands/form-event-code",
									  "commands/in-break",
									  "commands/in-footer",
									  "commands/in-header",
									  "commands/is-waiting-mouse-up",
									  "commands/outside-call",
									  "commands/post-outside-call",
									  "commands/right-click",
									  "commands/set-timer"
									]
								  },
								  {
									"type": "category",
									"label": "Forms",
									"items": [
									  "commands/current-form-name",
									  "commands/form",
									  "commands/form-convert-to-dynamic",
									  "commands/form-first-page",
									  "commands/form-get-color-scheme",
									  "commands/form-get-current-page",
									  "commands/form-get-entry-order",
									  "commands/form-get-horizontal-resizing",
									  "commands/form-get-objects",
									  "commands/form-get-properties",
									  "commands/form-get-vertical-resizing",
									  "commands/form-goto-page",
									  "commands/form-last-page",
									  "commands/form-load",
									  "commands/form-next-page",
									  "commands/form-previous-page",
									  "commands/form-screenshot",
									  "commands/form-set-entry-order",
									  "commands/form-set-horizontal-resizing",
									  "commands/form-set-input",
									  "commands/form-set-output",
									  "commands/form-set-size",
									  "commands/form-set-vertical-resizing",
									  "commands/form-unload"
									]
								  },
								  {
									"type": "category",
									"label": "Formulas",
									"items": [
									  "commands/edit-formula",
									  "commands/execute-formula",
									  "commands/formula",
									  "commands/formula-from-string",
									  "commands/get-allowed-methods",
									  "commands/parse-formula",
									  "commands/set-allowed-methods"
									]
								  },
								  {
									"type": "category",
									"label": "Graphs",
									"items": [
									  "commands/graph",
									  "commands/graph-settings"
									]
								  },
								  {
									"type": "category",
									"label": "HTTP",
									"items": [
									  "commands/http-authenticate",
									  "commands/http-get",
									  "commands/http-get-certificates-folder",
									  "commands/http-get-option",
									  "commands/http-parse-message",
									  "commands/http-request",
									  "commands/http-set-certificates-folder",
									  "commands/http-set-option"
									]
								  },
								  {
									"type": "category",
									"label": "Hierarchical Lists",
									"items": [
									  "commands/append-to-list",
									  "commands/clear-list",
									  "commands/copy-list",
									  "commands/count-list-items",
									  "commands/delete-from-list",
									  "commands/find-in-list",
									  "commands/get-list-item",
									  "commands/get-list-item-font",
									  "commands/get-list-item-icon",
									  "commands/get-list-item-parameter",
									  "commands/get-list-item-parameter-arrays",
									  "commands/get-list-item-properties",
									  "commands/get-list-properties",
									  "commands/insert-in-list",
									  "commands/is-a-list",
									  "commands/list-item-parent",
									  "commands/list-item-position",
									  "commands/list-of-choice-lists",
									  "commands/load-list",
									  "commands/new-list",
									  "commands/save-list",
									  "commands/select-list-items-by-position",
									  "commands/select-list-items-by-reference",
									  "commands/selected-list-items",
									  "commands/set-list-item",
									  "commands/set-list-item-font",
									  "commands/set-list-item-icon",
									  "commands/set-list-item-parameter",
									  "commands/set-list-item-properties",
									  "commands/set-list-properties",
									  "commands/sort-list"
									]
								  },
								  {
									"type": "category",
									"label": "Import and Export",
									"items": [
									  "commands/export-data",
									  "commands/export-dif",
									  "commands/export-sylk",
									  "commands/export-text",
									  "commands/import-data",
									  "commands/import-dif",
									  "commands/import-sylk",
									  "commands/import-text"
									]
								  },
								  {
									"type": "category",
									"label": "Interruptions",
									"items": [
									  "commands/abort",
									  "commands/assert",
									  "commands/asserted",
									  "commands/filter-event",
									  "commands/get-assert-enabled",
									  "commands/get-last-error-stack",
									  "commands/last-errors",
									  "commands/method-called-on-error",
									  "commands/method-called-on-event",
									  "commands/on-err-call",
									  "commands/on-event-call",
									  "commands/set-assert-enabled",
									  "commands/throw"
									]
								  },
								  {
									"type": "category",
									"label": "JSON",
									"items": [
									  "commands/json-parse",
									  "commands/json-parse-array",
									  "commands/json-resolve-pointers",
									  "commands/json-stringify",
									  "commands/json-stringify-array",
									  "commands/json-to-selection",
									  "commands/json-validate",
									  "commands/selection-to-json"
									]
								  },
								  {
									"type": "category",
									"label": "LDAP",
									"items": [
									  "commands/ldap-login",
									  "commands/ldap-logout",
									  "commands/ldap-search",
									  "commands/ldap-search-all"
									]
								  },
								  {
									"type": "category",
									"label": "Language",
									"items": [
									  "commands/4d",
									  "commands/command-name",
									  "commands/copy-parameters",
									  "commands/count-parameters",
									  "commands/cs",
									  "commands/current-method-name",
									  "commands/execute-method",
									  "commands/get-action-info",
									  "commands/get-call-chain",
									  "commands/get-pointer",
									  "commands/invoke-action",
									  "commands/is-a-variable",
									  "commands/is-nil-pointer",
									  "commands/null",
									  "commands/resolve-pointer",
									  "commands/self",
									  "commands/super",
									  "commands/this",
									  "commands/trace",
									  "commands/type",
									  "commands/undefined",
									  "commands/value-type"
									]
								  },
								  {
									"type": "category",
									"label": "Licenses",
									"items": [
									  "commands/change-licenses",
									  "commands/create-deployment-license",
									  "commands/get-license-info",
									  "commands/get-license-usage",
									  "commands/get-serial-information",
									  "commands/is-license-available",
									  "commands/refresh-license"
									]
								  },
								  {
									"type": "category",
									"label": "List Box",
									"items": [
									  "commands/listbox-collapse",
									  "commands/listbox-delete-column",
									  "commands/listbox-delete-rows",
									  "commands/listbox-duplicate-column",
									  "commands/listbox-expand",
									  "commands/listbox-get-array",
									  "commands/listbox-get-arrays",
									  "commands/listbox-get-auto-row-height",
									  "commands/listbox-get-cell-coordinates",
									  "commands/listbox-get-cell-position",
									  "commands/listbox-get-column-formula",
									  "commands/listbox-get-column-width",
									  "commands/listbox-get-footer-calculation",
									  "commands/listbox-get-footers-height",
									  "commands/listbox-get-grid",
									  "commands/listbox-get-grid-colors",
									  "commands/listbox-get-headers-height",
									  "commands/listbox-get-hierarchy",
									  "commands/listbox-get-locked-columns",
									  "commands/listbox-get-number-of-columns",
									  "commands/listbox-get-number-of-rows",
									  "commands/listbox-get-objects",
									  "commands/listbox-get-print-information",
									  "commands/listbox-get-property",
									  "commands/listbox-get-row-color",
									  "commands/listbox-get-row-color-as-number",
									  "commands/listbox-get-row-font-style",
									  "commands/listbox-get-row-height",
									  "commands/listbox-get-rows-height",
									  "commands/listbox-get-static-columns",
									  "commands/listbox-get-table-source",
									  "commands/listbox-insert-column",
									  "commands/listbox-insert-column-formula",
									  "commands/listbox-insert-rows",
									  "commands/listbox-move-column",
									  "commands/listbox-moved-column-number",
									  "commands/listbox-moved-row-number",
									  "commands/listbox-select-break",
									  "commands/listbox-select-row",
									  "commands/listbox-select-rows",
									  "commands/listbox-set-array",
									  "commands/listbox-set-auto-row-height",
									  "commands/listbox-set-column-formula",
									  "commands/listbox-set-column-width",
									  "commands/listbox-set-footer-calculation",
									  "commands/listbox-set-footers-height",
									  "commands/listbox-set-grid",
									  "commands/listbox-set-grid-color",
									  "commands/listbox-set-headers-height",
									  "commands/listbox-set-hierarchy",
									  "commands/listbox-set-locked-columns",
									  "commands/listbox-set-property",
									  "commands/listbox-set-row-color",
									  "commands/listbox-set-row-font-style",
									  "commands/listbox-set-row-height",
									  "commands/listbox-set-rows-height",
									  "commands/listbox-set-static-columns",
									  "commands/listbox-set-table-source",
									  "commands/listbox-sort-columns"
									]
								  },
								  {
									"type": "category",
									"label": "Mail",
									"items": [
									  "commands/imap-new-transporter",
									  "commands/mail-convert-from-mime",
									  "commands/mail-convert-to-mime",
									  "commands/mail-new-attachment",
									  "commands/pop3-new-transporter",
									  "commands/smtp-new-transporter"
									]
								  },
								  {
									"type": "category",
									"label": "Math",
									"items": [
									  "commands/abs",
									  "commands/arctan",
									  "commands/cos",
									  "commands/dec",
									  "commands/euro-converter",
									  "commands/exp",
									  "commands/int",
									  "commands/log",
									  "commands/mod",
									  "commands/random",
									  "commands/round",
									  "commands/set-real-comparison-level",
									  "commands/sin",
									  "commands/square-root",
									  "commands/tan",
									  "commands/trunc"
									]
								  },
								  {
									"type": "category",
									"label": "Menus",
									"items": [
									  "commands/append-menu-item",
									  "commands/count-menu-items",
									  "commands/count-menus",
									  "commands/create-menu",
									  "commands/delete-menu-item",
									  "commands/disable-menu-item",
									  "commands/dynamic-pop-up-menu",
									  "commands/enable-menu-item",
									  "commands/get-menu-bar-reference",
									  "commands/get-menu-item",
									  "commands/get-menu-item-icon",
									  "commands/get-menu-item-key",
									  "commands/get-menu-item-mark",
									  "commands/get-menu-item-method",
									  "commands/get-menu-item-modifiers",
									  "commands/get-menu-item-parameter",
									  "commands/get-menu-item-property",
									  "commands/get-menu-item-style",
									  "commands/get-menu-items",
									  "commands/get-menu-title",
									  "commands/get-selected-menu-item-parameter",
									  "commands/insert-menu-item",
									  "commands/menu-selected",
									  "commands/release-menu",
									  "commands/set-help-menu",
									  "commands/set-menu-bar",
									  "commands/set-menu-item",
									  "commands/set-menu-item-icon",
									  "commands/set-menu-item-mark",
									  "commands/set-menu-item-method",
									  "commands/set-menu-item-parameter",
									  "commands/set-menu-item-property",
									  "commands/set-menu-item-shortcut",
									  "commands/set-menu-item-style"
									]
								  },
								  {
									"type": "category",
									"label": "Messages",
									"items": [
									  "commands/alert",
									  "commands/confirm",
									  "commands/display-notification",
									  "commands/goto-xy",
									  "commands/message",
									  "commands/messages-off",
									  "commands/messages-on",
									  "commands/request"
									]
								  },
								  {
									"type": "category",
									"label": "Named Selections",
									"items": [
									  "commands/clear-named-selection",
									  "commands/copy-named-selection",
									  "commands/cut-named-selection",
									  "commands/use-named-selection"
									]
								  },
								  {
									"type": "category",
									"label": "ORDA - DataStore",
									"items": [
									  "commands/ds",
									  "commands/open-datastore"
									]
								  },
								  {
									"type": "category",
									"label": "ORDA - EntitySelection",
									"items": [
									  "commands/create-entity-selection",
									  "commands/use-entity-selection"
									]
								  },
								  {
									"type": "category",
									"label": "Objects (Forms)",
									"items": [
									  "commands/get-style-sheet-info",
									  "commands/list-of-style-sheets",
									  "commands/object-duplicate",
									  "commands/object-get-action",
									  "commands/object-get-auto-spellcheck",
									  "commands/object-get-best-size",
									  "commands/object-get-border-style",
									  "commands/object-get-context-menu",
									  "commands/object-get-coordinates",
									  "commands/object-get-corner-radius",
									  "commands/object-get-data-source",
									  "commands/object-get-drag-and-drop-options",
									  "commands/object-get-enabled",
									  "commands/object-get-enterable",
									  "commands/object-get-events",
									  "commands/object-get-filter",
									  "commands/object-get-focus-rectangle-invisible",
									  "commands/object-get-font",
									  "commands/object-get-font-size",
									  "commands/object-get-font-style",
									  "commands/object-get-format",
									  "commands/object-get-help-tip",
									  "commands/object-get-horizontal-alignment",
									  "commands/object-get-indicator-type",
									  "commands/object-get-keyboard-layout",
									  "commands/object-get-list-name",
									  "commands/object-get-list-reference",
									  "commands/object-get-maximum-value",
									  "commands/object-get-minimum-value",
									  "commands/object-get-multiline",
									  "commands/object-get-name",
									  "commands/object-get-placeholder",
									  "commands/object-get-pointer",
									  "commands/object-get-print-variable-frame",
									  "commands/object-get-resizing-options",
									  "commands/object-get-rgb-colors",
									  "commands/object-get-scroll-position",
									  "commands/object-get-scrollbar",
									  "commands/object-get-shortcut",
									  "commands/object-get-style-sheet",
									  "commands/object-get-subform",
									  "commands/object-get-subform-container-size",
									  "commands/object-get-subform-container-value",
									  "commands/object-get-text-orientation",
									  "commands/object-get-three-states-checkbox",
									  "commands/object-get-title",
									  "commands/object-get-type",
									  "commands/object-get-value",
									  "commands/object-get-vertical-alignment",
									  "commands/object-get-visible",
									  "commands/object-is-styled-text",
									  "commands/object-move",
									  "commands/object-set-action",
									  "commands/object-set-auto-spellcheck",
									  "commands/object-set-border-style",
									  "commands/object-set-context-menu",
									  "commands/object-set-coordinates",
									  "commands/object-set-corner-radius",
									  "commands/object-set-data-source",
									  "commands/object-set-drag-and-drop-options",
									  "commands/object-set-enabled",
									  "commands/object-set-enterable",
									  "commands/object-set-events",
									  "commands/object-set-filter",
									  "commands/object-set-focus-rectangle-invisible",
									  "commands/object-set-font",
									  "commands/object-set-font-size",
									  "commands/object-set-font-style",
									  "commands/object-set-format",
									  "commands/object-set-help-tip",
									  "commands/object-set-horizontal-alignment",
									  "commands/object-set-indicator-type",
									  "commands/object-set-keyboard-layout",
									  "commands/object-set-list-by-name",
									  "commands/object-set-list-by-reference",
									  "commands/object-set-maximum-value",
									  "commands/object-set-minimum-value",
									  "commands/object-set-multiline",
									  "commands/object-set-placeholder",
									  "commands/object-set-print-variable-frame",
									  "commands/object-set-resizing-options",
									  "commands/object-set-rgb-colors",
									  "commands/object-set-scroll-position",
									  "commands/object-set-scrollbar",
									  "commands/object-set-shortcut",
									  "commands/object-set-style-sheet",
									  "commands/object-set-subform",
									  "commands/object-set-subform-container-value",
									  "commands/object-set-text-orientation",
									  "commands/object-set-three-states-checkbox",
									  "commands/object-set-title",
									  "commands/object-set-value",
									  "commands/object-set-vertical-alignment",
									  "commands/object-set-visible"
									]
								  },
								  {
									"type": "category",
									"label": "Objects (Language)",
									"items": [
									  "commands/new-object",
									  "commands/new-shared-object",
									  "commands/ob-class",
									  "commands/ob-copy",
									  "commands/ob-entries",
									  "commands/ob-get",
									  "commands/ob-get-array",
									  "commands/ob-get-property-names",
									  "commands/ob-get-type",
									  "commands/ob-instance-of",
									  "commands/ob-is-defined",
									  "commands/ob-is-empty",
									  "commands/ob-is-shared",
									  "commands/ob-keys",
									  "commands/ob-remove",
									  "commands/ob-set",
									  "commands/ob-set-array",
									  "commands/ob-set-null",
									  "commands/ob-values",
									  "commands/storage"
									]
								  },
								  {
									"type": "category",
									"label": "On a Series",
									"items": [
									  "commands/average",
									  "commands/max",
									  "commands/min",
									  "commands/std-deviation",
									  "commands/sum",
									  "commands/sum-squares",
									  "commands/variance"
									]
								  },
								  {
									"type": "category",
									"label": "PHP",
									"items": [
									  "commands/php-execute",
									  "commands/php-get-full-response",
									  "commands/php-get-option",
									  "commands/php-set-option"
									]
								  },
								  {
									"type": "category",
									"label": "Pasteboard",
									"items": [
									  "commands/append-data-to-pasteboard",
									  "commands/clear-pasteboard",
									  "commands/get-file-from-pasteboard",
									  "commands/get-pasteboard-data",
									  "commands/get-pasteboard-data-type",
									  "commands/get-picture-from-pasteboard",
									  "commands/get-text-from-pasteboard",
									  "commands/pasteboard-data-size",
									  "commands/set-file-to-pasteboard",
									  "commands/set-picture-to-pasteboard",
									  "commands/set-text-to-pasteboard"
									]
								  },
								  {
									"type": "category",
									"label": "Pictures",
									"items": [
									  "commands/blob-to-picture",
									  "commands/combine-pictures",
									  "commands/convert-picture",
									  "commands/create-thumbnail",
									  "commands/equal-pictures",
									  "commands/get-picture-file-name",
									  "commands/get-picture-formats",
									  "commands/get-picture-from-library",
									  "commands/get-picture-keywords",
									  "commands/get-picture-metadata",
									  "commands/is-picture-file",
									  "commands/picture-codec-list",
									  "commands/picture-library-list",
									  "commands/picture-properties",
									  "commands/picture-size",
									  "commands/picture-to-blob",
									  "commands/read-picture-file",
									  "commands/remove-picture-from-library",
									  "commands/set-picture-file-name",
									  "commands/set-picture-metadata",
									  "commands/set-picture-to-library",
									  "commands/transform-picture",
									  "commands/write-picture-file"
									]
								  },
								  {
									"type": "category",
									"label": "Printing",
									"items": [
									  "commands/accumulate",
									  "commands/blob-to-print-settings",
									  "commands/break-level",
									  "commands/close-printing-job",
									  "commands/get-current-printer",
									  "commands/get-print-marker",
									  "commands/get-print-option",
									  "commands/get-print-preview",
									  "commands/get-printable-area",
									  "commands/get-printable-margin",
									  "commands/get-printed-height",
									  "commands/is-in-print-preview",
									  "commands/level",
									  "commands/open-printing-job",
									  "commands/page-break",
									  "commands/print-form",
									  "commands/print-label",
									  "commands/print-object",
									  "commands/print-option-values",
									  "commands/print-record",
									  "commands/print-selection",
									  "commands/print-settings",
									  "commands/print-settings-to-blob",
									  "commands/printers-list",
									  "commands/printing-page",
									  "commands/set-current-printer",
									  "commands/set-print-marker",
									  "commands/set-print-option",
									  "commands/set-print-preview",
									  "commands/set-printable-margin",
									  "commands/subtotal"
									]
								  },

								  {
									"type": "category",
									"label": "Process (Communications)",
									"items": [
									  "commands/call-worker",
									  "commands/clear-semaphore",
									  "commands/get-process-variable",
									  "commands/kill-worker",
									  "commands/new-signal",
									  "commands/semaphore",
									  "commands/set-process-variable",
									  "commands/test-semaphore",
									  "commands/variable-to-variable"
									]
								  },
								  {
									"type": "category",
									"label": "Process (User Interface)",
									"items": [
									  "commands/bring-to-front",
									  "commands/frontmost-process",
									  "commands/hide-process",
									  "commands/show-process"
									]
								  },
								  {
									"type": "category",
									"label": "Processes",
									"items": [
									  "commands/abort-process-by-id",
									  "commands/count-tasks",
									  "commands/count-user-processes",
									  "commands/count-users",
									  "commands/current-process",
									  "commands/current-process-name",
									  "commands/delay-process",
									  "commands/execute-on-client",
									  "commands/execute-on-server",
									  "commands/get-process-activity",
									  "commands/get-registered-clients",
									  "commands/new-process",
									  "commands/pause-process",
									  "commands/process-aborted",
									  "commands/process-number",
									  "commands/process-properties",
									  "commands/process-state",
									  "commands/register-client",
									  "commands/resume-process",
									  "commands/session",
									  "commands/session-storage-by-id",
									  "commands/unregister-client"
									]
								  },
								  {
									"type": "category",
									"label": "Queries",
									"items": [
									  "commands/describe-query-execution",
									  "commands/find-in-field",
									  "commands/get-last-query-path",
									  "commands/get-last-query-plan",
									  "commands/get-query-destination",
									  "commands/get-query-limit",
									  "commands/order-by",
									  "commands/order-by-attribute",
									  "commands/order-by-formula",
									  "commands/query",
									  "commands/query-by-attribute",
									  "commands/query-by-example",
									  "commands/query-by-formula",
									  "commands/query-selection",
									  "commands/query-selection-by-attribute",
									  "commands/query-selection-by-formula",
									  "commands/query-selection-with-array",
									  "commands/query-with-array",
									  "commands/set-query-and-lock",
									  "commands/set-query-destination",
									  "commands/set-query-limit"
									]
								  },
								  {
									"type": "category",
									"label": "Quick Report",
									"items": [
									  "commands/qr-blob-to-report",
									  "commands/qr-count-columns",
									  "commands/qr-delete-column",
									  "commands/qr-delete-offscreen-area",
									  "commands/qr-execute-command",
									  "commands/qr-find-column",
									  "commands/qr-get-area-property",
									  "commands/qr-get-borders",
									  "commands/qr-get-command-status",
									  "commands/qr-get-destination",
									  "commands/qr-get-document-property",
									  "commands/qr-get-drop-column",
									  "commands/qr-get-header-and-footer",
									  "commands/qr-get-html-template",
									  "commands/qr-get-info-column",
									  "commands/qr-get-info-row",
									  "commands/qr-get-report-kind",
									  "commands/qr-get-report-table",
									  "commands/qr-get-selection",
									  "commands/qr-get-sorts",
									  "commands/qr-get-text-property",
									  "commands/qr-get-totals-data",
									  "commands/qr-get-totals-spacing",
									  "commands/qr-insert-column",
									  "commands/qr-move-column",
									  "commands/qr-new-area",
									  "commands/qr-new-offscreen-area",
									  "commands/qr-on-command",
									  "commands/qr-report",
									  "commands/qr-report-to-blob",
									  "commands/qr-run",
									  "commands/qr-set-area-property",
									  "commands/qr-set-borders",
									  "commands/qr-set-destination",
									  "commands/qr-set-document-property",
									  "commands/qr-set-header-and-footer",
									  "commands/qr-set-html-template",
									  "commands/qr-set-info-column",
									  "commands/qr-set-info-row",
									  "commands/qr-set-report-kind",
									  "commands/qr-set-report-table",
									  "commands/qr-set-selection",
									  "commands/qr-set-sorts",
									  "commands/qr-set-text-property",
									  "commands/qr-set-totals-data",
									  "commands/qr-set-totals-spacing"
									]
								  },
								  {
									"type": "category",
									"label": "Record Locking",
									"items": [
									  "commands/get-locked-records-info",
									  "commands/load-record",
									  "commands/locked",
									  "commands/locked-by",
									  "commands/read-only",
									  "commands/read-only-state",
									  "commands/read-write",
									  "commands/unload-record"
									]
								  },
								  {
									"type": "category",
									"label": "Records",
									"items": [
									  "commands/create-record",
									  "commands/delete-record",
									  "commands/display-record",
									  "commands/duplicate-record",
									  "commands/goto-record",
									  "commands/is-new-record",
									  "commands/is-record-loaded",
									  "commands/modified-record",
									  "commands/pop-record",
									  "commands/push-record",
									  "commands/record-number",
									  "commands/records-in-table",
									  "commands/save-record",
									  "commands/sequence-number"
									]
								  },
								  {
									"type": "category",
									"label": "Relations",
									"items": [
									  "commands/create-related-one",
									  "commands/get-automatic-relations",
									  "commands/get-field-relation",
									  "commands/old-related-many",
									  "commands/old-related-one",
									  "commands/relate-many",
									  "commands/relate-many-selection",
									  "commands/relate-one",
									  "commands/relate-one-selection",
									  "commands/save-related-one",
									  "commands/set-automatic-relations",
									  "commands/set-field-relation"
									]
								  },
								  {
									"type": "category",
									"label": "Resources",
									"items": [
									  "commands/close-resource-file",
									  "commands/get-indexed-string",
									  "commands/get-picture-resource",
									  "commands/get-resource",
									  "commands/get-resource-name",
									  "commands/get-resource-properties",
									  "commands/get-string-resource",
									  "commands/get-text-resource",
									  "commands/open-resource-file",
									  "commands/resource-list",
									  "commands/resource-type-list",
									  "commands/string-list-to-array"
									]
								  },
								  {
									"type": "category",
									"label": "SQL",
									"items": [
									  "commands/begin-sql",
									  "commands/end-sql",
									  "commands/is-field-value-null",
									  "commands/query-by-sql",
									  "commands/set-field-value-null",
									  "commands/sql-cancel-load",
									  "commands/sql-end-selection",
									  "commands/sql-execute",
									  "commands/sql-execute-script",
									  "commands/sql-export-database",
									  "commands/sql-export-selection",
									  "commands/sql-get-current-data-source",
									  "commands/sql-get-data-source-list",
									  "commands/sql-get-last-error",
									  "commands/sql-get-option",
									  "commands/sql-load-record",
									  "commands/sql-login",
									  "commands/sql-logout",
									  "commands/sql-set-option",
									  "commands/sql-set-parameter",
									  "commands/start-sql-server",
									  "commands/stop-sql-server"
									]
								  },
								  {
									"type": "category",
									"label": "SVG",
									"items": [
									  "commands/svg-export-to-picture",
									  "commands/svg-find-element-id-by-coordinates",
									  "commands/svg-find-element-ids-by-rect",
									  "commands/svg-get-attribute",
									  "commands/svg-set-attribute",
									  "commands/svg-show-element"
									]
								  },
								  {
									"type": "category",
									"label": "Secured Protocol",
									"items": [
									  "commands/generate-certificate-request",
									  "commands/generate-encryption-keypair"
									]
								  },
								  {
									"type": "category",
									"label": "Selection",
									"items": [
									  "commands/all-records",
									  "commands/apply-to-selection",
									  "commands/before-selection",
									  "commands/create-selection-from-array",
									  "commands/delete-selection",
									  "commands/display-selection",
									  "commands/displayed-line-number",
									  "commands/end-selection",
									  "commands/first-record",
									  "commands/get-highlighted-records",
									  "commands/goto-selected-record",
									  "commands/highlight-records",
									  "commands/last-record",
									  "commands/modify-selection",
									  "commands/next-record",
									  "commands/one-record-select",
									  "commands/previous-record",
									  "commands/records-in-selection",
									  "commands/reduce-selection",
									  "commands/scan-index",
									  "commands/selected-record-number",
									  "commands/truncate-table"
									]
								  },
								  {
									"type": "category",
									"label": "Sets",
									"items": [
									  "commands/add-to-set",
									  "commands/clear-set",
									  "commands/copy-set",
									  "commands/create-empty-set",
									  "commands/create-set",
									  "commands/create-set-from-array",
									  "commands/difference",
									  "commands/intersection",
									  "commands/is-in-set",
									  "commands/load-set",
									  "commands/records-in-set",
									  "commands/remove-from-set",
									  "commands/save-set",
									  "commands/union",
									  "commands/use-set"
									]
								  },
								  {
									"type": "category",
									"label": "Spell Checker",
									"items": [
									  "commands/spell-add-to-user-dictionary",
									  "commands/spell-check-text",
									  "commands/spell-checking",
									  "commands/spell-get-current-dictionary",
									  "commands/spell-get-dictionary-list",
									  "commands/spell-set-current-dictionary"
									]
								  },
								  {
									"type": "category",
									"label": "String",
									"items": [
									  "commands/change-string",
									  "commands/char",
									  "commands/character-code",
									  "commands/compare-strings",
									  "commands/convert-from-text",
									  "commands/convert-to-text",
									  "commands/delete-string",
									  "commands/get-localized-string",
									  "commands/get-text-keywords",
									  "commands/insert-string",
									  "commands/length",
									  "commands/lowercase",
									  "commands/match-regex",
									  "commands/num",
									  "commands/position",
									  "commands/replace-string",
									  "commands/split-string",
									  "commands/string",
									  "commands/substring",
									  "commands/uppercase"
									]
								  },
								  {
									"type": "category",
									"label": "Structure Access",
									"items": [
									  "commands/create-index",
									  "commands/delete-index",
									  "commands/export-structure",
									  "commands/field",
									  "commands/field-name",
									  "commands/get-external-data-path",
									  "commands/get-field-entry-properties",
									  "commands/get-field-properties",
									  "commands/get-last-field-number",
									  "commands/get-last-table-number",
									  "commands/get-missing-table-names",
									  "commands/get-relation-properties",
									  "commands/get-table-properties",
									  "commands/import-structure",
									  "commands/is-field-number-valid",
									  "commands/is-table-number-valid",
									  "commands/pause-indexes",
									  "commands/regenerate-missing-table",
									  "commands/reload-external-data",
									  "commands/resume-indexes",
									  "commands/set-external-data-path",
									  "commands/set-index",
									  "commands/table",
									  "commands/table-name"
									]
								  },
								  {
									"type": "category",
									"label": "Styled Text",
									"items": [
									  "commands/st-compute-expressions",
									  "commands/st-freeze-expressions",
									  "commands/st-get-attributes",
									  "commands/st-get-content-type",
									  "commands/st-get-expression",
									  "commands/st-get-options",
									  "commands/st-get-plain-text",
									  "commands/st-get-text",
									  "commands/st-get-url",
									  "commands/st-insert-expression",
									  "commands/st-insert-url",
									  "commands/st-set-attributes",
									  "commands/st-set-options",
									  "commands/st-set-plain-text",
									  "commands/st-set-text"
									]
								  },
								  {
									"type": "category",
									"label": "Subrecords",
									"items": [
									  "commands/get-subrecord-key"
									]
								  },
								  {
									"type": "category",
									"label": "System Documents",
									"items": [
									  "commands/append-document",
									  "commands/close-document",
									  "commands/convert-path-posix-to-system",
									  "commands/convert-path-system-to-posix",
									  "commands/copy-document",
									  "commands/create-alias",
									  "commands/create-document",
									  "commands/create-folder",
									  "commands/delete-document",
									  "commands/delete-folder",
									  "commands/document-list",
									  "commands/document-to-text",
									  "commands/folder-list",
									  "commands/get-document-icon",
									  "commands/get-document-position",
									  "commands/get-document-properties",
									  "commands/get-document-size",
									  "commands/get-localized-document-path",
									  "commands/move-document",
									  "commands/object-to-path",
									  "commands/open-document",
									  "commands/path-to-object",
									  "commands/resolve-alias",
									  "commands/select-document",
									  "commands/select-folder",
									  "commands/set-document-position",
									  "commands/set-document-properties",
									  "commands/set-document-size",
									  "commands/show-on-disk",
									  "commands/test-path-name",
									  "commands/text-to-document",
									  "commands/volume-attributes",
									  "commands/volume-list"
									]
								  },
								  {
									"type": "category",
									"label": "System Environment",
									"items": [
									  "commands/count-screens",
									  "commands/current-client-authentication",
									  "commands/current-machine",
									  "commands/current-system-user",
									  "commands/font-file",
									  "commands/font-list",
									  "commands/font-style-list",
									  "commands/get-system-format",
									  "commands/get-system-info",
									  "commands/is-macos",
									  "commands/is-windows",
									  "commands/log-event",
									  "commands/menu-bar-height",
									  "commands/menu-bar-screen",
									  "commands/open-color-picker",
									  "commands/open-font-picker",
									  "commands/screen-coordinates",
									  "commands/screen-depth",
									  "commands/screen-height",
									  "commands/screen-width",
									  "commands/select-rgb-color",
									  "commands/set-recent-fonts",
									  "commands/set-screen-depth",
									  "commands/system-folder",
									  "commands/temporary-folder"
									]
								  },
								  {
									"type": "category",
									"label": "Table",
									"items": [
									  "commands/current-default-table",
									  "commands/current-form-table",
									  "commands/default-table",
									  "commands/no-default-table"
									]
								  },
								  {
									"type": "category",
									"label": "Tools",
									"items": [
									  "commands/base64-decode",
									  "commands/base64-encode",
									  "commands/choose",
									  "commands/generate-digest",
									  "commands/generate-password-hash",
									  "commands/generate-uuid",
									  "commands/get-activity-snapshot",
									  "commands/get-macro-parameter",
									  "commands/get-monitored-activity",
									  "commands/launch-external-process",
									  "commands/load-4d-view-document",
									  "commands/mobile-app-refresh-sessions",
									  "commands/open-url",
									  "commands/process-4d-tags",
									  "commands/set-environment-variable",
									  "commands/set-macro-parameter",
									  "commands/start-monitoring-activity",
									  "commands/stop-monitoring-activity",
									  "commands/verify-password-hash"
									]
								  },
								  {
									"type": "category",
									"label": "Transactions",
									"items": [
									  "commands/active-transaction",
									  "commands/cancel-transaction",
									  "commands/in-transaction",
									  "commands/resume-transaction",
									  "commands/start-transaction",
									  "commands/suspend-transaction",
									  "commands/transaction-level",
									  "commands/validate-transaction"
									]
								  },
								  {
									"type": "category",
									"label": "Triggers",
									"items": [
									  "commands/trigger-event",
									  "commands/trigger-level",
									  "commands/trigger-properties"
									]
								  },
								  {
									"type": "category",
									"label": "User Interface",
									"items": [
									  "commands/beep",
									  "commands/caps-lock-down",
									  "commands/focus-object",
									  "commands/get-application-color-scheme",
									  "commands/get-field-titles",
									  "commands/get-mouse",
									  "commands/get-table-titles",
									  "commands/hide-menu-bar",
									  "commands/macintosh-command-down",
									  "commands/macintosh-control-down",
									  "commands/macintosh-option-down",
									  "commands/play",
									  "commands/pop-up-menu",
									  "commands/post-click",
									  "commands/post-event",
									  "commands/post-key",
									  "commands/redraw",
									  "commands/set-about",
									  "commands/set-application-color-scheme",
									  "commands/set-cursor",
									  "commands/set-field-titles",
									  "commands/set-table-titles",
									  "commands/shift-down",
									  "commands/show-menu-bar",
									  "commands/windows-alt-down",
									  "commands/windows-ctrl-down"
									]
								  },
								  {
									"type": "category",
									"label": "Users and Groups",
									"items": [
									  "commands/blob-to-users",
									  "commands/change-current-user",
									  "commands/change-password",
									  "commands/current-user",
									  "commands/delete-user",
									  "commands/edit-access",
									  "commands/get-default-user",
									  "commands/get-group-access",
									  "commands/get-group-list",
									  "commands/get-group-properties",
									  "commands/get-plugin-access",
									  "commands/get-user-list",
									  "commands/get-user-properties",
									  "commands/is-user-deleted",
									  "commands/set-group-access",
									  "commands/set-group-properties",
									  "commands/set-plugin-access",
									  "commands/set-user-alias",
									  "commands/set-user-properties",
									  "commands/user-in-group",
									  "commands/users-to-blob",
									  "commands/validate-password"
									]
								  },
								  {
									"type": "category",
									"label": "Variables",
									"items": [
									  "commands/clear-variable",
									  "commands/load-variables",
									  "commands/save-variables"
									]
								  },
								  {
									"type": "category",
									"label": "Web Area",
									"items": [
									  "commands/wa-back-url-available",
									  "commands/wa-create-url-history-menu",
									  "commands/wa-evaluate-javascript",
									  "commands/wa-execute-javascript-function",
									  "commands/wa-forward-url-available",
									  "commands/wa-get-current-url",
									  "commands/wa-get-external-links-filters",
									  "commands/wa-get-last-filtered-url",
									  "commands/wa-get-last-url-error",
									  "commands/wa-get-page-content",
									  "commands/wa-get-page-title",
									  "commands/wa-get-preference",
									  "commands/wa-get-url-filters",
									  "commands/wa-get-url-history",
									  "commands/wa-open-back-url",
									  "commands/wa-open-forward-url",
									  "commands/wa-open-url",
									  "commands/wa-open-web-inspector",
									  "commands/wa-refresh-current-url",
									  "commands/wa-run-offscreen-area",
									  "commands/wa-set-external-links-filters",
									  "commands/wa-set-page-content",
									  "commands/wa-set-preference",
									  "commands/wa-set-url-filters",
									  "commands/wa-stop-loading-url",
									  "commands/wa-zoom-in",
									  "commands/wa-zoom-out"
									]
								  },
								  {
									"type": "category",
									"label": "Web Server",
									"items": [
									  "commands/web-get-body-part",
									  "commands/web-get-body-part-count",
									  "commands/web-get-current-session-id",
									  "commands/web-get-http-body",
									  "commands/web-get-http-header",
									  "commands/web-get-option",
									  "commands/web-get-server-info",
									  "commands/web-get-statistics",
									  "commands/web-get-variables",
									  "commands/web-is-secured-connection",
									  "commands/web-is-server-running",
									  "commands/web-legacy-close-session",
									  "commands/web-legacy-get-session-expiration",
									  "commands/web-send-blob",
									  "commands/web-send-file",
									  "commands/web-send-http-redirect",
									  "commands/web-send-raw-data",
									  "commands/web-send-text",
									  "commands/web-server",
									  "commands/web-server-list",
									  "commands/web-set-home-page",
									  "commands/web-set-http-header",
									  "commands/web-set-option",
									  "commands/web-set-root-folder",
									  "commands/web-start-server",
									  "commands/web-stop-server",
									  "commands/web-validate-digest"
									]
								  },
								  {
									"type": "category",
									"label": "Web Services (Client)",
									"items": [
									  "commands/web-service-authenticate",
									  "commands/web-service-call",
									  "commands/web-service-get-info",
									  "commands/web-service-get-result",
									  "commands/web-service-set-option",
									  "commands/web-service-set-parameter"
									]
								  },
								  {
									"type": "category",
									"label": "Web Services (Server)",
									"items": [
									  "commands/soap-declaration",
									  "commands/soap-get-info",
									  "commands/soap-reject-new-requests",
									  "commands/soap-request",
									  "commands/soap-send-fault"
									]
								  },
								  {
									"type": "category",
									"label": "Windows",
									"items": [
									  "commands/close-window",
									  "commands/convert-coordinates",
									  "commands/current-form-window",
									  "commands/drag-window",
									  "commands/erase-window",
									  "commands/find-window",
									  "commands/frontmost-window",
									  "commands/get-window-rect",
									  "commands/get-window-title",
									  "commands/hide-tool-bar",
									  "commands/hide-window",
									  "commands/is-window-maximized",
									  "commands/is-window-reduced",
									  "commands/maximize-window",
									  "commands/minimize-window",
									  "commands/next-window",
									  "commands/open-form-window",
									  "commands/open-window",
									  "commands/redraw-window",
									  "commands/reduce-restore-window",
									  "commands/resize-form-window",
									  "commands/set-window-rect",
									  "commands/set-window-title",
									  "commands/show-tool-bar",
									  "commands/show-window",
									  "commands/tool-bar-height",
									  "commands/window-kind",
									  "commands/window-list",
									  "commands/window-process"
									]
								  },
								  {
									"type": "category",
									"label": "XML DOM",
									"items": [
									  "commands/dom-append-xml-child-node",
									  "commands/dom-append-xml-element",
									  "commands/dom-close-xml",
									  "commands/dom-count-xml-attributes",
									  "commands/dom-count-xml-elements",
									  "commands/dom-create-xml-element",
									  "commands/dom-create-xml-element-arrays",
									  "commands/dom-create-xml-ref",
									  "commands/dom-export-to-file",
									  "commands/dom-export-to-var",
									  "commands/dom-find-xml-element",
									  "commands/dom-find-xml-element-by-id",
									  "commands/dom-get-first-child-xml-element",
									  "commands/dom-get-last-child-xml-element",
									  "commands/dom-get-next-sibling-xml-element",
									  "commands/dom-get-parent-xml-element",
									  "commands/dom-get-previous-sibling-xml-element",
									  "commands/dom-get-root-xml-element",
									  "commands/dom-get-xml-attribute-by-index",
									  "commands/dom-get-xml-attribute-by-name",
									  "commands/dom-get-xml-child-nodes",
									  "commands/dom-get-xml-document-ref",
									  "commands/dom-get-xml-element",
									  "commands/dom-get-xml-element-name",
									  "commands/dom-get-xml-element-value",
									  "commands/dom-get-xml-information",
									  "commands/dom-insert-xml-element",
									  "commands/dom-parse-xml-source",
									  "commands/dom-parse-xml-variable",
									  "commands/dom-remove-xml-attribute",
									  "commands/dom-remove-xml-element",
									  "commands/dom-set-xml-attribute",
									  "commands/dom-set-xml-declaration",
									  "commands/dom-set-xml-element-name",
									  "commands/dom-set-xml-element-value"
									]
								  },
								  {
									"type": "category",
									"label": "XML SAX",
									"items": [
									  "commands/sax-add-processing-instruction",
									  "commands/sax-add-xml-cdata",
									  "commands/sax-add-xml-comment",
									  "commands/sax-add-xml-doctype",
									  "commands/sax-add-xml-element-value",
									  "commands/sax-close-xml-element",
									  "commands/sax-get-xml-cdata",
									  "commands/sax-get-xml-comment",
									  "commands/sax-get-xml-document-values",
									  "commands/sax-get-xml-element",
									  "commands/sax-get-xml-element-value",
									  "commands/sax-get-xml-entity",
									  "commands/sax-get-xml-node",
									  "commands/sax-get-xml-processing-instruction",
									  "commands/sax-open-xml-element",
									  "commands/sax-open-xml-element-arrays",
									  "commands/sax-set-xml-declaration"
									]
								  },
								  {
									"type": "category",
									"label": "XML",
									"items": [
									  "commands/xml-decode",
									  "commands/xml-get-error",
									  "commands/xml-get-options",
									  "commands/xml-set-options"
									]
								  },
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
								"API/MailAttachmentClass",
								"API/POP3TransporterClass",
								"API/SessionClass",
								"API/SignalClass",
								"API/SMTPTransporterClass",
								"API/SystemWorkerClass",
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
								type: 'generated-index',
								title: 'Class Functions',
								description: 'List of built-in 4D classes',
								slug: '/category/class-API-reference',
								keywords: ['class'],
								image: '/img/docusaurus.png',
							},
						},
					],
				},
				{
					type: "category",
					label: "Processes",
					items: [
						"Develop/processes",
						"Develop/preemptive-processes",
					]
				},
				"Tags/transformation-tags",
				{
					type: "category",
					label: "Preferences",
					link: {
						type: 'doc',
						id: 'Preferences/overview',
					},
					items: [
						"Preferences/general",
						"Preferences/structure",
						"Preferences/forms",
						"Preferences/methods",
						"Preferences/shortcuts",
					]
				},
			],
		},
		{
			type: "category",
			label: "Administration",
			link: {
				type: 'generated-index',
				title: 'Administration',
				description: 'How to monitor your 4D applications',
				keywords: ['administration'],
				image: '/img/docusaurus.png',
				},
			items: [
				{
					type: "category",
					label: "4D Server Administration Window",
					link: {
						type: 'doc',
						id: 'ServerWindow/overview',
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
						"ServerWindow/remote-admin",
					],
				},
				{
					type: "category",
					label: "Web Administration",
					link: {
						type: 'generated-index',
						title: 'Web Administration',
						description: '4D web tools for administrating and monitoring your applications.',
						slug: '/category/web-administration',
						keywords: ['web administration'],
						image: '/img/docusaurus.png',
					},
					items: [
						"Admin/webAdmin",
						"Admin/dataExplorer",
					],
				},
				{
					type: "doc",
					label: "Command Line Interface",
					id: "Admin/cli",
				},
				{
					type: "doc",
					label: "TLS Protocol",
					id: "Admin/tls",
				},
				{
					type: "doc",
					label: "Managing 4D Licenses",
					id: "Admin/licenses",
				},
				{
					type: "category",
					label: "MSC",
					link: {
						type: 'doc',
						id: 'MSC/overview',
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
						"MSC/encrypt",
					],
				},
				{
					type: "category",
					label: "Backup and Restore",
					link: {
						type: 'doc',
						id: 'Backup/overview',
					},
					items: [
						"Backup/backup",
						"Backup/settings",
						"Backup/log",
						"Backup/restore",
					]
				},
				{
					type: "doc",
					label: "Data Collection",
					id: "Admin/data-collect",
				},
			],
		},
		{
			type: "category",
			label: "Extensions",
			link: {
					type: 'doc',
					id: 'Extensions/overview',
				},
			items: [
						{
							type: "category",
							label: "4D View Pro",
							link: {
								type: 'generated-index',
								title: '4D View Pro',
								slug: '/category/4d-view-pro',
								keywords: ['4D View Pro'],
								image: '/img/docusaurus.png',
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
										type: 'doc',
										id: 'ViewPro/commands'
										},
									items: [
										{
											type: "category",
											label: "A",
											link: {
												type: 'generated-index',
												title: 'A',
												slug: '/commands/A',
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
												type: 'generated-index',
												title: 'C',
												slug: '/commands/C',
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
												type: 'generated-index',
												title: 'D',
												slug: '/commands/D',
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
												type: 'generated-index',
												title: 'E',
												slug: '/commands/E',
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
												type: 'generated-index',
												title: 'F',
												slug: '/commands/F',
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
												type: 'generated-index',
												title: 'G',
												slug: '/commands/G',
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
												type: 'generated-index',
												title: 'I',
												slug: '/commands/I',
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
												type: 'generated-index',
												title: 'M',
												slug: '/commands/M',
												},
											items: [
												"ViewPro/commands/vp-move-cells"
												]
										},
										{
											type: "category",
											label: "N",
											link: {
												type: 'generated-index',
												title: 'N',
												slug: '/commands/N',
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
												type: 'generated-index',
												title: 'O',
												slug: '/commands/O',
												},
											items: [
												"ViewPro/commands/vp-object-to-font",
												]
										},
										{
											type: "category",
											label: "P",
											link: {
												type: 'generated-index',
												title: 'P',
												slug: '/commands/P',
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
												type: 'generated-index',
												title: 'R',
												slug: '/commands/R',
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
												type: 'generated-index',
												title: 'S',
												slug: '/commands/S',
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
									},

									]
							},
						{
						  type: 'link',
						  label: '4D Write Pro', // The link label
						  href: 'https://doc.4d.com/4Dv20R6/4D/20-R6/4D-Write-Pro-Reference.100-6993921.en.html',
						},
						{
						  type: 'doc',
						  label: '4D Write Pro Interface', // The link label
						  id: "WritePro/writeprointerface",
						},
						{
						  type: 'link',
						  label: '4D Mobile App Server', // The link label
						  href: 'https://github.com/4d-go-mobile/4D-Mobile-App-Server',
						},
						{
						  type: 'link',
						  label: '4D NetKit', // The link label
						  href: 'https://github.com/4d/4D-NetKit/tree/20R6',
						},
						{
						  type: 'link',
						  label: '4D Progress', // The link label
						  href: 'https://doc.4d.com/4Dv20R6/4D/20-R6/4D-Progress.100-7183762.en.html',
						},
						{
						  type: 'link',
						  label: '4D SVG', // The link label
						  href: 'https://doc.4d.com/4Dv20R6/4D/20-R6/4D-SVG-Component.100-7184636.en.html',
						},
						{
						  type: 'link',
						  label: '4D Widgets', // The link label
						  href: 'https://doc.4d.com/4Dv20R6/4D/20-R6/4D-Widgets.100-7185285.en.html',
						},
						"Extensions/develop-components",
						"Extensions/develop-plug-ins",

				]
			},
		{
			type: "category",
			label: "Web Applications",
			link: {
				type: 'generated-index',
				title: 'Web Applications',
				description: 'Guides for developing Web applications with 4D',
				keywords: ['web applications'],
				image: '/img/docusaurus.png',
				},
			items: [
				{
					type: "category",
					label: "Web Server",
					link: {
						type: 'doc',
						id: 'WebServer/webServer',
					},
					items: [
						"WebServer/webServerConfig",
						"WebServer/webServerAdmin",
						"WebServer/webServerObject",
					],
				},
				{
					type: "category",
					label: "Web Development",
					link: {
						type: 'doc',
						id: 'WebServer/gettingStarted',
					},
				items: [
						"WebServer/templates",
						"WebServer/httpRequests",
						"WebServer/allowProject",
						"WebServer/errorPages",
						"WebServer/authentication",
						"WebServer/sessions",
						"WebServer/preemptiveWeb"
					],
				},
		{
				 type: "category",
				 label: "Qodly Studio",
				 link: {
					type: 'generated-index',
					title: 'Qodly Studio',
					description: 'Using Qodly Studio to build powerful web interfaces.',
					slug: '/category/qodly-studio-in-4d',
					keywords: [
					  'Qodly Studio'
					],
					image: '/img/docusaurus.png'
				  },
				 items: [
					"WebServer/qodly-studio",
					"WebServer/from-qodlyscript-to-4d",
				  ],
				},
				{
					type: "category",
					label: "REST API",
					link: {
						type: 'generated-index',
						title: 'REST API',
						description: 'Exposing your datastore to REST and using the REST API.',
						keywords: ['REST server'],
						image: '/img/docusaurus.png',
					},
					items: [
						{
						type: "category",
						label: "Exposing your datastore in REST",
						link: {
								type: 'generated-index',
								title: 'Exposing your datastore in REST',
								description: 'Configure your datastore for REST access',
								keywords: ['REST access'],
								image: '/img/docusaurus.png',
							},
						items: [
								'REST/gettingStarted',
								"REST/configuration",
								"REST/authUsers",
								"REST/genInfo",
								"REST/manData",
								"REST/classFunctions",
								"REST/REST_requests",
							],
						},
						{
							type: "category",
							label: "API (general)",
							link: {
								type: 'generated-index',
								title: 'API (general)',
								description: 'REST API for global information',
								keywords: ['REST API'],
								image: '/img/docusaurus.png',
							},
							items: [
								"REST/catalog",
								"REST/info",
								"REST/singleton",
								"REST/upload",
							],
						},
						{
							type: "category",
							label: "API (dataClass)",
							link: {
								type: 'generated-index',
								title: 'API (dataClass)',
								description: 'REST API for dataClass.',
								keywords: ['REST API'],
								image: '/img/docusaurus.png',
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
								"REST/version",
							],
						},
					],
				},
				],
		},

		{
					type: "category",
					label: "Desktop Applications",
					link: {
						type: 'generated-index',
						title: 'Desktop Applications',
						description: 'Guides for developing Desktop applications with 4D',
						keywords: ['desktop applications'],
						image: '/img/docusaurus.png',
						},

					items: [
						{
							type: "doc",
							label: "Client/Server",
							id: "Desktop/clientServer",
						},
				{
					type: "category",
					label: "Access Rights",
					link: {
						type: 'generated-index',
						title: 'Access Rights',
						description: 'Access control and user privileges for desktop applications.',
						slug: '/category/access-rights',
						keywords: ['access rights'],
						image: '/img/docusaurus.png',
					},
					items: [
						"Users/overview",
						"Users/editing",
					],
				},

						{
							type: "category",
							label: "Forms",
						link: {
							type: 'doc',
							id: 'FormEditor/forms',
						},
						items: [
								"FormEditor/stylesheets",
								"FormEditor/pictures",
								{
									type: "category",
									label: "Form Editor",
									link: {
										type: 'doc',
										id: 'FormEditor/formEditor',
									},
									items: [
										"FormEditor/macros",
										"FormEditor/objectLibrary"	]
								},
								{
									type: "category",
									label: "Form Properties",
									link: {
										type: 'doc',
										id: 'FormEditor/jsonReference',
									},
									items: [
								"FormEditor/action",
								"FormEditor/propertiesForm",
								"FormEditor/formSize",
								"FormEditor/markers",
								"FormEditor/menu",
								"FormEditor/print",
								"FormEditor/windowSize"
									],
								},
								{
									type: "category",
									label: "Form Objects",
									link: {
										type: 'doc',
										id: 'FormObjects/formObjectsOverview',
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
									],
								},
								{
									type: "category",
									label: "Form Object Properties",
									link: {
										type: 'doc',
										id: 'FormObjects/propertiesReference',
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
									],
								},
								{
									type: "category",
									label: "Form Events",
									link: {
										type: 'doc',
										id: 'Events/overview',
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
									],
								},



							],
						},

						{
							type: "category",
							label: "Menus",
							link: {
								type: 'doc',
								id: 'Menus/overview',
							},
							items: [
								"Menus/creating",
								"Menus/properties",
								"Menus/bars",
								"Menus/sdi"
							],
						},
						{
							type: "doc",
							label: "User Settings",
							id: "Desktop/user-settings",
						},
						{
							type: "doc",
							label: "Build Application",
							id: "Desktop/building"
						}
					]
				},
				{
					type: "category",
					label: "Mobile Applications",
					items: [
						{
						  type: 'link',
						  label: 'Go Mobile', // The link label
						  href: 'https://developer.4d.com/go-mobile/', // The external URL
						},
						{
						  type: 'link',
						  label: '4D for iOS (archive)', // The link label
						  href: 'https://developer.4d.com/4d-for-ios', // The external URL
						}
					],
				},

	 ]
}
