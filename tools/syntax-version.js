#!/usr/bin/env node

/**
 * Helper script to run syntax generation for any version
 * Usage: node tools/syntax-version.js version-20-R11
 * Usage: node tools/syntax-version.js version-20-R11 viewpro
 */

const { spawn } = require('child_process');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);
const version = args[0] || undefined;
const type = args[1] || 'syntax';

console.log(`Running ${type} generation for version: ${version}`);

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
