#!/usr/bin/env python3
"""
Script to generate class IDs from markdown files in specified directories.
Extracts the 'id' field from markdown frontmatter.
"""

import os
import sys
import json
import argparse
import re
from pathlib import Path
from typing import List, Optional


def extract_id_from_markdown(file_path: str) -> Optional[str]:
    """
    Extract the 'id' field from markdown frontmatter.
    
    Args:
        file_path: Path to the markdown file‡
        
    Returns:
        The ID from frontmatter, or None if not found
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
            
        # Check if file starts with frontmatter (---)
        if not content.startswith('---'):
            return None
            
        # Extract frontmatter between the first two --- markers
        frontmatter_match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
        if not frontmatter_match:
            return None
            
        frontmatter = frontmatter_match.group(1)
        
        # Look for 'id:' field in frontmatter
        id_match = re.search(r'^id:\s*(.+)$', frontmatter, re.MULTILINE)
        if id_match:
            return id_match.group(1).strip()
            
        return None
        
    except Exception as e:
        print(f"Error reading file {file_path}: {e}", file=sys.stderr)
        return None


def generate_class_ids(base_dir: str, folders: List[str], recursive: bool = False, verbose: bool = False) -> List[str]:
    """
    Generate class IDs from markdown files in specified folders.
    
    Args:
        base_dir: Base directory (e.g., 'docs')
        folders: List of folder paths relative to base_dir (e.g., ['aikit/Classes'])
        recursive: If True, search recursively in subdirectories
        verbose: If True, display detailed processing information
        
    Returns:
        List of class IDs with their relative paths
    """
    class_ids = []
    
    for folder in folders:
        # Remove 'docs/' prefix if present to avoid double base directory
        if folder.startswith('docs/'):
            folder = folder[5:]  # Remove 'docs/' (5 characters)
        
        folder_path = Path(base_dir) / folder
        
        if not folder_path.exists():
            print(f"Warning: Directory {folder_path} does not exist", file=sys.stderr)
            continue
            
        if not folder_path.is_dir():
            print(f"Warning: {folder_path} is not a directory", file=sys.stderr)
            continue
            
        if verbose:
            print(f"Processing directory: {folder_path}")
        
        # Find all markdown files in the directory (recursively or not)
        if recursive:
            md_files = list(folder_path.rglob('*.md'))
        else:
            md_files = list(folder_path.glob('*.md'))
        
        for md_file in sorted(md_files):
            # Extract ID from markdown frontmatter
            extracted_id = extract_id_from_markdown(str(md_file))
            
            if extracted_id:
                # Create the full ID path: folder/extracted_id
                # For recursive mode, we need to include the relative path from the base folder
                if recursive:
                    # Get the relative path from the base folder to the file's directory
                    relative_to_folder = md_file.parent.relative_to(folder_path)
                    if str(relative_to_folder) == '.':
                        full_id = f"{folder}/{extracted_id}"
                    else:
                        full_id = f"{folder}/{relative_to_folder}/{extracted_id}"
                else:
                    full_id = f"{folder}/{extracted_id}"
                class_ids.append(full_id)
                if verbose:
                    print(f"  Found ID: {extracted_id} -> {full_id}")
            else:
                print(f"  Warning: No ID found in {md_file.name}", file=sys.stderr)
    
    return class_ids


def update_sidebars_js(class_ids: List[str], base_dir: str, folders: List[str], recursive: bool = False, verbose: bool = False) -> bool:
    """
    Update the sidebars.js file with new class IDs by finding and replacing similar existing items.
    
    Args:
        class_ids: List of class IDs to update
        base_dir: Base directory (e.g., 'docs')
        folders: List of folder paths that were processed
        recursive: If True, was run with recursive option
        verbose: If True, display detailed processing information
        
    Returns:
        True if file was updated successfully, False otherwise
    """
    sidebars_path = 'sidebars.js'
    
    try:
        # Read the current sidebars.js file
        with open(sidebars_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Group class IDs by their exact folder path structure
        folder_groups = {}
        for class_id in class_ids:
            # For "aikit/Classes/openai" -> group by "aikit/Classes"
            # For "API/BlobClass" -> group by "API"
            # For "aikit/overview" -> group by "aikit"
            parts = class_id.split('/')
            if len(parts) >= 3:
                # Like "aikit/Classes/openai" -> group by "aikit/Classes"
                folder_key = '/'.join(parts[:2])
            else:
                # Like "API/BlobClass" or "aikit/overview" -> group by first part
                folder_key = parts[0]
            
            if folder_key not in folder_groups:
                folder_groups[folder_key] = []
            folder_groups[folder_key].append(class_id)
        
        # Process groups in a specific order to avoid conflicts
        # Process deeper paths first (e.g., "aikit/Classes" before "aikit")
        sorted_folder_keys = sorted(folder_groups.keys(), key=lambda x: (x.count('/'), x), reverse=True)
        
        updated = False
        lines = content.split('\n')
        
        for folder_key in sorted_folder_keys:
            ids = folder_groups[folder_key]
            if verbose:
                print(f"Updating {folder_key} section with {len(ids)} items")
            
            # Find existing items from the same folder structure
            existing_items = []
            
            # When in recursive mode with both top-level and nested items,
            # we need to be more careful about identifying replacement ranges
            if recursive and folder_key in ['aikit'] and any(id.count('/') > 1 for id in ids):
                # This is a mixed situation - we have both top-level and nested items
                # We need to identify and update each section separately
                
                # Separate the items by their level
                top_level_items = [id for id in ids if id.count('/') == 1]  # like "aikit/overview"
                nested_items = [id for id in ids if id.count('/') > 1]       # like "aikit/Classes/openai"
                
                if verbose:
                    print(f"  Recursive mode: {len(top_level_items)} top-level, {len(nested_items)} nested items")
                
                # Update top-level items first (find the range that excludes nested structure)
                if top_level_items:
                    existing_top_items = []
                    for i, line in enumerate(lines):
                        stripped_line = line.strip()
                        if f'"{pattern_prefix}' in stripped_line and (stripped_line.endswith('",') or stripped_line.endswith('"')):
                            match = re.search(r'"([^"]+)"', stripped_line)
                            if match:
                                full_id = match.group(1)
                                if full_id.count('/') == 1 and full_id.startswith(pattern_prefix):
                                    # This is a top-level item
                                    existing_top_items.append({
                                        'line_index': i,
                                        'line_content': line,
                                        'id': full_id
                                    })
                    
                    if existing_top_items:
                        if verbose:
                            print(f"  Updating top-level {folder_key} items: {len(existing_top_items)} existing -> {len(top_level_items)} new")
                        
                        first_line = existing_top_items[0]['line_index']
                        last_line = existing_top_items[-1]['line_index']
                        
                        # Create replacement lines for top-level items
                        first_item_line = existing_top_items[0]['line_content']
                        indentation = len(first_item_line) - len(first_item_line.lstrip())
                        indent_str = ' ' * indentation
                        
                        new_lines = []
                        for i, class_id in enumerate(sorted(top_level_items)):
                            if i == len(top_level_items) - 1:
                                # Last item - need to check what comes after
                                next_line_index = last_line + 1
                                if next_line_index < len(lines):
                                    next_line = lines[next_line_index].strip()
                                    if next_line.startswith('{'):
                                        new_lines.append(f'{indent_str}"{class_id}",')
                                    else:
                                        new_lines.append(f'{indent_str}"{class_id}"')
                                else:
                                    new_lines.append(f'{indent_str}"{class_id}"')
                            else:
                                new_lines.append(f'{indent_str}"{class_id}",')
                        
                        # Replace the top-level lines
                        updated_lines = lines[:first_line] + new_lines + lines[last_line + 1:]
                        lines = updated_lines
                        content = '\n'.join(updated_lines)
                        updated = True
                
                # Skip further processing for this folder_key since we handled it specially
                continue
            
            # Generic pattern matching based on folder structure
            pattern_prefix = folder_key + "/"
            
            for i, line in enumerate(lines):
                stripped_line = line.strip()
                
                # Check if this line contains a reference to our specific folder pattern
                if f'"{pattern_prefix}' in stripped_line and (stripped_line.endswith('",') or stripped_line.endswith('"')):
                    # Extract the full ID from the line
                    match = re.search(r'"([^"]+)"', stripped_line)
                    if match:
                        full_id = match.group(1)
                        
                        # Skip structural elements - only include actual ID references
                        # Skip if this line contains structural keywords
                        if any(keyword in line for keyword in ['type:', 'label:', 'link:', 'slug:', 'title:', 'keywords:', 'image:']):
                            continue
                        
                        # Determine what level we're working with
                        folder_parts = folder_key.split('/')
                        id_parts = full_id.split('/')
                        
                        # Check if this ID matches our target level
                        should_include = False
                        
                        if recursive:
                            # In recursive mode, include anything that starts with our folder prefix
                            if full_id.startswith(pattern_prefix):
                                should_include = True
                        else:
                            # In non-recursive mode, be more selective
                            if len(folder_parts) >= 2:
                                # For multi-level folders like "aikit/Classes", match exactly
                                if full_id.startswith(pattern_prefix):
                                    should_include = True
                            elif len(folder_parts) == 1:
                                # For single-level folders like "API" or "aikit"
                                if full_id.startswith(pattern_prefix):
                                    # For top-level items, exclude deeper nested structures
                                    remaining_path = full_id[len(pattern_prefix):]
                                    if '/' not in remaining_path:
                                        should_include = True
                        
                        if should_include:
                            existing_items.append({
                                'line_index': i,
                                'line_content': line,
                                'id': full_id
                            })
            
            if existing_items:
                if verbose:
                    print(f"  Found {len(existing_items)} existing {folder_key} items to replace")
                
                # Find the range of lines to replace
                first_line = existing_items[0]['line_index']
                last_line = existing_items[-1]['line_index']
                
                # Determine the indentation from the first existing item
                first_item_line = existing_items[0]['line_content']
                indentation = len(first_item_line) - len(first_item_line.lstrip())
                indent_str = ' ' * indentation
                
                # Create the new lines with proper indentation
                new_lines = []
                for i, class_id in enumerate(sorted(ids)):
                    if i == len(ids) - 1:
                        # Last item - check if we need a comma by looking at what comes after
                        next_line_index = last_line + 1
                        if next_line_index < len(lines):
                            next_line = lines[next_line_index].strip()
                            # If next line starts with a quote or brace, we need a comma
                            if next_line.startswith('"') or next_line.startswith('{'):
                                new_lines.append(f'{indent_str}"{class_id}",')
                            else:
                                new_lines.append(f'{indent_str}"{class_id}"')
                        else:
                            new_lines.append(f'{indent_str}"{class_id}"')
                    else:
                        new_lines.append(f'{indent_str}"{class_id}",')
                
                # Replace the lines
                updated_lines = lines[:first_line] + new_lines + lines[last_line + 1:]
                content = '\n'.join(updated_lines)
                lines = updated_lines  # Update lines for next iteration
                updated = True
                
                if verbose:
                    print(f"  Replaced lines {first_line + 1}-{last_line + 1} with {len(new_lines)} new items")
            else:
                if verbose:
                    print(f"  Warning: No existing {folder_key} items found in sidebars.js to replace")
        
        if updated:
            # Write the updated content back to the file
            with open(sidebars_path, 'w', encoding='utf-8') as file:
                file.write(content)
            if verbose:
                print("sidebars.js file updated successfully")
            return True
        else:
            if verbose:
                print("No updates were made to sidebars.js")
            return False
            
    except Exception as e:
        print(f"Error updating sidebars.js: {e}", file=sys.stderr)
        return False


def main():
    parser = argparse.ArgumentParser(
        description="Generate class IDs from markdown files",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=f"""
Examples:
  # Generate IDs for aikit Classes folder
  python {os.path.basename(sys.argv[0])} aikit/Classes
  
  # Generate IDs for multiple folders recursively with verbose output
  python {os.path.basename(sys.argv[0])} -R -v aikit/Classes API ORDA
  
  # Generate IDs and update sidebars.js file
  python {os.path.basename(sys.argv[0])} --output sidebars.js -v API
  
  # Specify custom base directory with recursive search
  python {os.path.basename(sys.argv[0])} --base-dir custom_docs -R aikit/Classes
        """
    )
    
    parser.add_argument(
        'folders',
        nargs='+',
        help='Folders to process (relative to base directory)'
    )
    
    parser.add_argument(
        '--base-dir',
        default='docs',
        help='Base directory containing the folders (default: docs)'
    )
    
    parser.add_argument(
        '--output',
        choices=['json', 'list', 'sidebars.js'],
        default='json',
        help='Output format: json (JSON array), list (one per line), sidebars.js (JSON + update sidebars.js file) (default: json)'
    )
    
    parser.add_argument(
        '-R', '--recursive',
        action='store_true',
        help='Search recursively in subdirectories'
    )
    
    parser.add_argument(
        '-v', '--verbose',
        action='store_true',
        help='Display detailed processing information'
    )
    
    args = parser.parse_args()
    
    # Ensure base directory exists
    base_path = Path(args.base_dir)
    if not base_path.exists():
        print(f"Error: Base directory '{args.base_dir}' does not exist", file=sys.stderr)
        sys.exit(1)
    
    try:
        # Generate class IDs
        class_ids = generate_class_ids(args.base_dir, args.folders, args.recursive, args.verbose)
        
        if not class_ids:
            print("No class IDs found")
            return
        
        # Output results
        if args.verbose:
            print(f"\nGenerated {len(class_ids)} class IDs:")
        
        if args.output == 'json':
            print(json.dumps(class_ids, indent=2))
        elif args.output == 'list':
            for class_id in class_ids:
                print(class_id)
        elif args.output == 'sidebars.js':
            # Print JSON output first
            print(json.dumps(class_ids, indent=2))
            # Then update sidebars.js file
            if args.verbose:
                print("\nUpdating sidebars.js file...")
            update_sidebars_js(class_ids, args.base_dir, args.folders, args.recursive, args.verbose)
                
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == '__main__':
    main()
