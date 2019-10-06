(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    286: function(e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, '_frontmatter', function() {
          return c;
        }),
        t.d(a, 'default', function() {
          return i;
        });
      t(4), t(5), t(3), t(7), t(10), t(0);
      var s = t(51),
        n = t(183);
      var c = {},
        p = {_frontmatter: c},
        b = n.default;
      function i(e) {
        var a = e.components,
          t = (function(e, a) {
            if (null == e) return {};
            var t,
              s,
              n = {},
              c = Object.keys(e);
            for (s = 0; s < c.length; s++)
              (t = c[s]), a.indexOf(t) >= 0 || (n[t] = e[t]);
            return n;
          })(e, ['components']);
        return Object(s.b)(
          b,
          Object.assign({}, p, t, {components: a, mdxType: 'MDXLayout'}),
          Object(s.b)('p', null, 'The package is available on npm:'),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'bash'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-bash'}),
              Object(s.b)(
                'code',
                Object.assign(
                  {parentName: 'pre'},
                  {className: 'language-bash'},
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '# npm',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'npm',
                ),
                ' i tippy.js\n\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '# Yarn',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'yarn',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'add',
                ),
                ' tippy.js',
              ),
            ),
          ),
          Object(s.b)(
            'p',
            null,
            'In your application, import the ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'tippy',
            ),
            ' module, and the core CSS:',
          ),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(s.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' tippy ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'from',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js/dist/tippy.css',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(s.b)(
            'p',
            null,
            "This assumes you're using a module bundler like webpack, Rollup, or Parcel. If\nyou're getting an error message about ",
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'process',
            ),
            ' inside the browser,\n',
            Object(s.b)(
              'a',
              Object.assign(
                {parentName: 'p'},
                {
                  href:
                    '/tippyjs/faq/#im-getting-uncaught-referenceerror-process-is-not-defined',
                },
              ),
              'read the FAQ for help setting it up.',
            ),
          ),
          Object(s.b)('h3', null, 'Script tags via CDN'),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'html'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-html'}),
              Object(s.b)(
                'code',
                Object.assign(
                  {parentName: 'pre'},
                  {className: 'language-html'},
                ),
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'script',
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'src',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'https://unpkg.com/popper.js@1',
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token script'},
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'script',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'script',
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'src',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'https://unpkg.com/tippy.js@5',
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token script'},
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'script',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
              ),
            ),
          ),
          Object(s.b)(
            'p',
            null,
            'Place them at the very bottom of the ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '<body>',
            ),
            ', ensuring they are placed before\nyour own scripts. The version numbers after ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '@',
            ),
            " are important, make sure they\ndon't get removed.",
          ),
          Object(s.b)('h4', null, 'Development version'),
          Object(s.b)(
            'p',
            null,
            "While developing, it's recommended to use the development file which includes\nhelpful warnings and error messages when something goes wrong:",
          ),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'html'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-html'}),
              Object(s.b)(
                'code',
                Object.assign(
                  {parentName: 'pre'},
                  {className: 'language-html'},
                ),
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'script',
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'src',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'https://unpkg.com/popper.js@1',
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token script'},
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'script',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'script',
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'src',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'https://unpkg.com/tippy.js@5/dist/tippy-bundle.iife.js',
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token script'},
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'script',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
              ),
            ),
          ),
          Object(s.b)(
            'p',
            null,
            "When you're finished developing (or deploying for production), you can remove\neverything after ",
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '@5',
            ),
            ' (the production file as listed before).',
          ),
          Object(s.b)('h3', null, 'Node vs. Browser'),
          Object(s.b)(
            'p',
            null,
            'The ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'tippy.js',
            ),
            ' package is generally used via Node using a module bundler, or in\nthe browser using a CDN. This documentation defaults to module imports in all\nexamples, so be aware that the following import path using a module bundler in\nNode:',
          ),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(s.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js/dist/backdrop.css',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(s.b)(
            'p',
            null,
            'Is equivalent to this using a CDN in the browser:',
          ),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'html'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-html'}),
              Object(s.b)(
                'code',
                Object.assign(
                  {parentName: 'pre'},
                  {className: 'language-html'},
                ),
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'link',
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'rel',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'stylesheet',
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'href',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'https://unpkg.com/tippy.js@5/dist/backdrop.css',
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '/>',
                  ),
                ),
              ),
            ),
          ),
          Object(s.b)('h3', null, 'CSS'),
          Object(s.b)(
            'p',
            null,
            'Tippy includes a 600 B CSS stylesheet by default for the base tooltip styling,\nfade animation, CSS arrows, and other required CSS.',
          ),
          Object(s.b)(
            'p',
            null,
            'When including the script link above via CDN, the CSS stylesheet is injected\ninto its own ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '<style>',
            ),
            ' tag in ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '<head>',
            ),
            '. If you have CSP enabled, you should use\n',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'dist/tippy.iife.js',
            ),
            ' and link the stylesheet ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'dist/tippy.css',
            ),
            ' separately instead\nof relying on injection.',
          ),
          Object(s.b)(
            'p',
            null,
            Object(s.b)(
              'a',
              Object.assign(
                {parentName: 'p'},
                {href: 'https://unpkg.com/tippy.js@5/'},
              ),
              'View the package contents on unpkg',
            ),
          ),
          Object(s.b)(
            'ul',
            null,
            Object(s.b)(
              'li',
              {parentName: 'ul'},
              Object(s.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                'dist/tippy-bundle.js',
              ),
              ' = Core JS + Core CSS injected into ',
              Object(s.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                '<head>',
              ),
              ' (default\nfor IIFE CDN version)',
            ),
            Object(s.b)(
              'li',
              {parentName: 'ul'},
              Object(s.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                'dist/tippy.js',
              ),
              ' = Core JS (default for ESM/CJS versions)',
            ),
            Object(s.b)(
              'li',
              {parentName: 'ul'},
              Object(s.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                'dist/tippy.css',
              ),
              ' = Core CSS',
            ),
          ),
          Object(s.b)('h3', null, 'Frameworks'),
          Object(s.b)(
            'ul',
            null,
            Object(s.b)(
              'li',
              {parentName: 'ul'},
              'React: ',
              Object(s.b)(
                'a',
                Object.assign(
                  {parentName: 'li'},
                  {href: 'https://github.com/atomiks/tippy.js-react'},
                ),
                '@tippy.js/react',
              ),
            ),
          ),
          Object(s.b)('h3', null, 'JavaScript syntax'),
          Object(s.b)(
            'p',
            null,
            'This documentation is making use of new JavaScript features (ES6+) that old\nbrowsers like IE11 do not support. Although Tippy.js itself supports IE11, the\ncode written in these docs may need to be transpiled using a tool like Babel to\na compatible format if you want to copy and paste it.',
          ),
        );
      }
      i.isMDXComponent = !0;
    },
  },
]);
//# sourceMappingURL=component---src-pages-getting-started-mdx-23a094a1efb1425fedfb.js.map
