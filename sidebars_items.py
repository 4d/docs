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
        choices=['json', 'list'],
        default='json',
        help='Output format (default: json)'
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
        else:
            for class_id in class_ids:
                print(class_id)
                
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == '__main__':
    main()
