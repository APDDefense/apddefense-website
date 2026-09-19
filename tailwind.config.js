/** Tailwind v3 config for APDDefense.com. Build with the standalone CLI (see tailwind.input.css header). */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0F14', panel: '#10161D', line: '#1F2A36', linestrong: '#2E3D4D',
        fg: '#E6EBF0', muted: '#A3AFBB', dim: '#8392A1', accent: '#5FD4A0', amber: '#E3B25A'
      },
      fontFamily: {
        sans: ['"Segoe UI Variable Display"', '"Segoe UI"', 'system-ui', '-apple-system', '"Helvetica Neue"', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', '"Cascadia Mono"', '"SF Mono"', '"JetBrains Mono"', 'Consolas', '"Liberation Mono"', 'Menlo', 'monospace']
      }
    }
  }
};
