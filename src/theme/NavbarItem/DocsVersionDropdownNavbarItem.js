/**
 * Swizzled DocsVersionDropdownNavbarItem
 *
 * Reason: Docusaurus matches alternate version docs by `doc.id` only.
 * When a doc file is moved/renamed across versions (different id but same slug),
 * the version dropdown can't find the equivalent page in other versions.
 *
 * Fix: after the standard id-based lookup, fall back to matching by path suffix
 * (the slug portion of the URL after stripping the version path prefix).
 */

import React from 'react';
import { useLocation } from '@docusaurus/router';
import {
  useVersions,
  useActiveDocContext,
  useDocsVersionCandidates,
  useDocsPreferredVersion,
} from '@docusaurus/plugin-content-docs/client';
import { translate } from '@docusaurus/Translate';
import { useHistorySelector } from '@docusaurus/theme-common';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';

function getVersionItems(versions, configs) {
  if (configs) {
    const versionMap = new Map(
      versions.map((version) => [version.name, version]),
    );
    const toVersionItem = (name, config) => {
      const version = versionMap.get(name);
      if (!version) {
        throw new Error(
          `No docs version exist for name '${name}', please verify your 'docsVersionDropdown' navbar item versions config.\nAvailable version names:\n- ${versions.map((v) => `${v.name}`).join('\n- ')}`,
        );
      }
      return { version, label: config?.label ?? version.label };
    };
    if (Array.isArray(configs)) {
      return configs.map((name) => toVersionItem(name, undefined));
    } else {
      return Object.entries(configs).map(([name, config]) =>
        toVersionItem(name, config),
      );
    }
  } else {
    return versions.map((version) => ({ version, label: version.label }));
  }
}

function useVersionItems({ docsPluginId, configs }) {
  const versions = useVersions(docsPluginId);
  return getVersionItems(versions, configs);
}

function getVersionMainDoc(version) {
  return version.docs.find((doc) => doc.id === version.mainDocId);
}

/**
 * Extract the slug portion of a doc path by stripping the version path prefix.
 * e.g. doc.path="/docs/20/commands/foo", version.path="/docs/20" => "/commands/foo"
 */
function getDocSlug(doc, version) {
  let slug = doc.path;
  if (slug.startsWith(version.path)) {
    slug = slug.slice(version.path.length);
  }
  // Normalize: strip leading slash for consistent comparison
  // (version.path may or may not have a trailing slash)
  return slug.replace(/^\//, '');
}

/**
 * Enhanced version of getVersionTargetDoc that adds a path-suffix fallback.
 * 1. First tries the standard id-based alternateDocVersions lookup
 * 2. If not found, computes the current doc's slug (path minus version prefix)
 *    and searches for a doc with the same slug in the target version
 * 3. Falls back to the version's main doc
 */
function getVersionTargetDoc(version, activeDocContext, versions, pathname) {
  const activeDoc = activeDocContext.activeDoc;
  const activeVersion = activeDocContext.activeVersion;

  // Standard id-based match (original Docusaurus behavior)
  const idMatch = activeDocContext.alternateDocVersions[version.name];
  if (idMatch) {
    return idMatch;
  }

  // Path-suffix fallback for moved/renamed docs
  // Compute slug from activeDoc if available, otherwise from pathname
  let currentSlug;
  if (activeDoc && activeVersion) {
    currentSlug = getDocSlug(activeDoc, activeVersion);
  } else if (activeVersion) {
    // activeDoc is missing but we know the version — extract slug from pathname
    currentSlug = pathname.startsWith(activeVersion.path)
      ? pathname.slice(activeVersion.path.length).replace(/^\//, '')
      : pathname.replace(/^\//, '');
  }

  if (currentSlug) {
    const slugMatch = version.docs.find(
      (doc) => getDocSlug(doc, version) === currentSlug,
    );
    if (slugMatch) {
      return slugMatch;
    }
  }

  // Ultimate fallback: main doc of the version
  return getVersionMainDoc(version);
}

/**
 * Check whether the current page exists in the given version
 * (by id or slug match — without falling back to mainDoc).
 */
function hasDocInVersion(version, activeDocContext, pathname) {
  const activeDoc = activeDocContext.activeDoc;
  const activeVersion = activeDocContext.activeVersion;

  // id-based match
  if (activeDocContext.alternateDocVersions[version.name]) {
    return true;
  }

  // slug-based match
  let currentSlug;
  if (activeDoc && activeVersion) {
    currentSlug = getDocSlug(activeDoc, activeVersion);
  } else if (activeVersion) {
    currentSlug = pathname.startsWith(activeVersion.path)
      ? pathname.slice(activeVersion.path.length).replace(/^\//, '')
      : pathname.replace(/^\//, '');
  }
  if (currentSlug) {
    return version.docs.some(
      (doc) => getDocSlug(doc, version) === currentSlug,
    );
  }

  return false;
}

function useDisplayedVersionItem({ docsPluginId, versionItems }) {
  const candidates = useDocsVersionCandidates(docsPluginId);
  const candidateItems = candidates
    .map((candidate) => versionItems.find((vi) => vi.version === candidate))
    .filter((vi) => vi !== undefined);
  return candidateItems[0] ?? versionItems[0];
}

export default function DocsVersionDropdownNavbarItem({
  mobile,
  docsPluginId,
  dropdownActiveClassDisabled,
  dropdownItemsBefore,
  dropdownItemsAfter,
  versions: configs,
  ...props
}) {
  const { pathname } = useLocation();
  const search = useHistorySelector((history) => history.location.search);
  const hash = useHistorySelector((history) => history.location.hash);
  const activeDocContext = useActiveDocContext(docsPluginId);
  const { savePreferredVersionName } = useDocsPreferredVersion(docsPluginId);
  const versionItems = useVersionItems({ docsPluginId, configs });
  const allVersions = useVersions(docsPluginId);
  const displayedVersionItem = useDisplayedVersionItem({
    docsPluginId,
    versionItems,
  });

  const notAvailableTooltip = translate({
    id: 'theme.docs.versionDropdown.notAvailable',
    message: 'This page is not available in this version',
    description: 'Tooltip for version dropdown items where the current page does not exist',
  });

  function versionItemToLink({ version, label }) {
    const targetDoc = getVersionTargetDoc(version, activeDocContext, allVersions, pathname);
    // On root / main doc pages, skip unavailable styling — every version has a main doc
    const activeDoc = activeDocContext.activeDoc;
    const isMainDoc = !activeDoc || (activeDocContext.activeVersion &&
      activeDoc.id === activeDocContext.activeVersion.mainDocId);
    const available = isMainDoc || hasDocInVersion(version, activeDocContext, pathname);
    return {
      label,
      // preserve ?search#hash suffix on version switches
      to: `${targetDoc.path}${search}${hash}`,
      isActive: () => version === activeDocContext.activeVersion,
      onClick: () => savePreferredVersionName(version.name),
      className: available ? undefined : 'version-unavailable',
      title: available ? undefined : notAvailableTooltip,
      _available: available,
    };
  }

  const versionLinks = versionItems.map(versionItemToLink);
  const availableLinks = versionLinks.filter((l) => l._available);
  const unavailableLinks = versionLinks.filter((l) => !l._available);

  const separator =
    availableLinks.length > 0 && unavailableLinks.length > 0
      ? [{ type: 'html', value: '<hr class="version-separator">' }]
      : [];

  const items = [
    ...dropdownItemsBefore,
    ...availableLinks,
    ...separator,
    ...unavailableLinks,
    ...dropdownItemsAfter,
  ];

  const dropdownLabel =
    mobile && items.length > 1
      ? translate({
        id: 'theme.navbar.mobileVersionsDropdown.label',
        message: 'Versions',
        description:
          'The label for the navbar versions dropdown on mobile view',
      })
      : displayedVersionItem.label;
  const dropdownTo =
    mobile && items.length > 1
      ? undefined
      : getVersionTargetDoc(
        displayedVersionItem.version,
        activeDocContext,
        allVersions,
        pathname,
      ).path;

  if (items.length <= 1) {
    return (
      <DefaultNavbarItem
        {...props}
        mobile={mobile}
        label={dropdownLabel}
        to={dropdownTo}
        isActive={dropdownActiveClassDisabled ? () => false : undefined}
      />
    );
  }
  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={dropdownLabel}
      to={dropdownTo}
      items={items}
      isActive={dropdownActiveClassDisabled ? () => false : undefined}
    />
  );
}
