Add inside <head>:

<!-- Best: SVG adapts automatically to light/dark browser theme -->
<link rel="icon" href="/favicon.svg" type="image/svg+xml">

<!-- Fallbacks for browsers without SVG favicon support -->
<link rel="icon" href="/favicon-light.ico" sizes="any" media="(prefers-color-scheme: light)">
<link rel="icon" href="/favicon-dark.ico" sizes="any" media="(prefers-color-scheme: dark)">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32-light.png" media="(prefers-color-scheme: light)">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32-dark.png" media="(prefers-color-scheme: dark)">

<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
