#!/usr/bin/env node

/**
 * Helper script to run syntax generation for any version
 * Usage: 
 *   node tools/syntax-version.js --version=version-20-R11
 *   node tools/syntax-version.js --version=version-20-R11 --type=viewpro
 *   node tools/syntax-version.js version-20-R11 viewpro (legacy format)
 */

const { spawn } = require('child_process');
const path = require('path');

// Parse command line arguments
function parseArgs(args) {
    const parsed = {
        version: undefined,
        type: 'syntax'
    };
    
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        
        if (arg.startsWith('--version=')) {
            parsed.version = arg.split('=')[1];
        } else if (arg === '--version' && i + 1 < args.length) {
            parsed.version = args[++i];
        } else if (arg.startsWith('--type=')) {
            parsed.type = arg.split('=')[1];
        } else if (arg === '--type' && i + 1 < args.length) {
            parsed.type = args[++i];
        } else if (arg === '--help' || arg === '-h') {
            console.log(`
Usage:
  node tools/syntax-version.js [options]
  
Options:
  --version=<version>    Specify the version (e.g., version-20-R11)
  --type=<type>         Specify the type: 'syntax' or 'viewpro' (default: syntax)
  --help, -h            Show this help message

Examples:
  node tools/syntax-version.js --version=version-20-R11
  node tools/syntax-version.js --version=version-20-R11 --type=viewpro
  node tools/syntax-version.js version-20-R11 viewpro  (legacy format)
            `);
            process.exit(0);
        } else if (!arg.startsWith('--')) {
            // Legacy positional arguments
            if (i === 0 && !parsed.version) {
                parsed.version = arg;
            } else if (i === 1 && parsed.type === 'syntax') {
                parsed.type = arg;
            }
        }
    }
    
    return parsed;
}

// Get command line arguments
const args = process.argv.slice(2);
const { version, type } = parseArgs(args);

console.log(`Running ${type} generation for version: ${version || 'current'}`);

// Set up environment
const env = {
    ...process.env,
    PREPROCESSING_TARGET_SYNTAX: version
};

// Define the commands to run
const commands = [
    {
        name: 'Syntax Generation',
        npmScript: type === 'viewpro' ? 'syntaxViewPro:build' : 'syntax:build'
    },
    {
        name: 'Translation Generation',
        npmScript: type === 'viewpro' ? 'syntaxViewPro:build-translated' : 'syntax:build-translated'
    }
];

// Run all commands concurrently
const processes = commands.map((cmd, index) => {
    console.log(`Running: npm run ${cmd.npmScript}`);
    
    const child = spawn('npm', ['run', cmd.npmScript], {
        env,
        stdio: 'inherit',
        cwd: path.resolve(__dirname, '..'),
        shell: true
    });
    
    return {
        ...cmd,
        process: child,
        completed: false,
        exitCode: null
    };
});


function handleProcessCompletion() {
    const allCompleted = processes.every(p => p.completed);
    
    if (allCompleted) {
        const exitCodes = processes.map(p => p.exitCode);
        const maxExitCode = Math.max(...exitCodes);
        
        console.log(`\nAll processes completed:`);
        processes.forEach(p => {
            console.log(`  ${p.name}: exit code ${p.exitCode}`);
        });
        console.log(`Final exit code: ${maxExitCode}`);
        
        process.exit(maxExitCode);
    }
}

// Set up event handlers for each process
processes.forEach((proc, index) => {
    proc.process.on('close', (code) => {
        proc.completed = true;
        proc.exitCode = code;
        console.log(`${proc.name} completed with exit code: ${code}`);
        handleProcessCompletion();
    });
    
    proc.process.on('error', (err) => {
        console.error(`Error running ${proc.name}:`, err);
        process.exit(1);
    });
});
