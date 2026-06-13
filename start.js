#!/usr/bin/env node

const { spawn } = require('child_process');

const port = process.env.PORT || 8082;

console.log(`Starting Next.js on port ${port}...`);

const child = spawn('next', ['start', '-p', port], {
  stdio: 'inherit',
  shell: true
});

child.on('error', (error) => {
  console.error(`Error starting server: ${error.message}`);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code);
});
