(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    287: function(e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, '_frontmatter', function() {
          return p;
        }),
        t.d(a, 'default', function() {
          return O;
        });
      t(4), t(5), t(3), t(7), t(10), t(0);
      var n = t(51),
        s = t(183),
        c = t(146),
        b = t(150);
      var o,
        p = {},
        m =
          ((o = 'Demo'),
          function(e) {
            return (
              console.warn(
                'Component ' +
                  o +
                  ' was not imported, exported, or provided by MDXProvider as global scope',
              ),
              Object(n.b)('div', e)
            );
          }),
        i = {_frontmatter: p},
        j = s.default;
      function O(e) {
        var a = e.components,
          t = (function(e, a) {
            if (null == e) return {};
            var t,
              n,
              s = {},
              c = Object.keys(e);
            for (n = 0; n < c.length; n++)
              (t = c[n]), a.indexOf(t) >= 0 || (s[t] = e[t]);
            return s;
          })(e, ['components']);
        return Object(n.b)(
          j,
          Object.assign({}, i, t, {components: a, mdxType: 'MDXLayout'}),
          Object(n.b)(
            'p',
            null,
            'Tippy elements use a simple CSS ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'fade',
            ),
            ' transition by default.',
          ),
          Object(n.b)('h3', null, 'Included animations'),
          Object(n.b)(
            'p',
            null,
            'The ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'tippy.js',
            ),
            ' package comes with extra animations for you to use:',
          ),
          Object(n.b)(
            'ul',
            null,
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              Object(n.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                'shift-away',
              ),
            ),
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              Object(n.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                'shift-toward',
              ),
            ),
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              Object(n.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                'scale',
              ),
            ),
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              Object(n.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                'perspective',
              ),
            ),
          ),
          Object(n.b)('p', null, 'They need to be imported separately.'),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js/animations/scale.css',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
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
          Object(n.b)(
            'p',
            null,
            'Pass the animation name (string) as the ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'animation',
            ),
            ' prop:',
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'button',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'animation',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'scale',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
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
          Object(n.b)(
            'p',
            null,
            'Each of these 3 animations also has 3 variants (normal, subtle, and extreme).',
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js/animations/scale.css',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js/animations/scale-subtle.css',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js/animations/scale-extreme.css',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// `perspective` and `shift-toward` follow the same format as above',
                ),
              ),
            ),
          ),
          Object(n.b)('h3', null, 'Custom animations'),
          Object(n.b)(
            'p',
            null,
            "If the extra packaged animations don't suit your use case, you can create your\nown.",
          ),
          Object(n.b)('p', null, "You'll need to:"),
          Object(n.b)(
            'ul',
            null,
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              'Use your own animation name in the ',
              Object(n.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                '[data-animation]',
              ),
              ' attribute selector',
            ),
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              'Target the visibility state of the tippy: ',
              Object(n.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                '[data-state="hidden"]',
              ),
              ' or\n',
              Object(n.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                '[data-state="visible"]',
              ),
            ),
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              'Depending on the animation, target the placement of the tippy too: e.g.\n',
              Object(n.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                '[data-placement^="top"]',
              ),
            ),
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'css'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-css'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-css'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token selector'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-tooltip',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attribute'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '[',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token attribute'},
                      ),
                      'data-animation',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token operator'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token value'},
                      ),
                      "'my-animation'",
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      ']',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attribute'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '[',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token attribute'},
                      ),
                      'data-state',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token operator'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token value'},
                      ),
                      "'hidden'",
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      ']',
                    ),
                  ),
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token property'},
                  ),
                  'transform',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'rotate',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '90',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token unit'},
                  ),
                  'deg',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '}',
                ),
              ),
            ),
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'button',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'animation',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'my-animation',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
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
          Object(n.b)('h3', null, 'Inertia'),
          Object(n.b)(
            'p',
            null,
            "There's a prop named ",
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'inertia',
            ),
            ' that adds an elastic inertial effect to the\ntippy, which is a limited CSS-only way to mimic spring physics.',
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'button',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'inertia',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token boolean'},
                  ),
                  'true',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
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
          Object(n.b)('p', null, 'You can customize this prop in your CSS:'),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'css'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-css'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-css'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token selector'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-tooltip',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attribute'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '[',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token attribute'},
                      ),
                      'data-inertia',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      ']',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attribute'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '[',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token attribute'},
                      ),
                      'data-state',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token operator'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token value'},
                      ),
                      "'visible'",
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      ']',
                    ),
                  ),
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token property'},
                  ),
                  'transition-timing-function',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'cubic-bezier',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '...',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '}',
                ),
              ),
            ),
          ),
          Object(n.b)('h3', null, 'Material filling effect'),
          Object(n.b)(
            'p',
            null,
            'Import the ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'animateFill',
            ),
            ' plugin, plus ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'dist/backdrop.css',
            ),
            ' &\n',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'animations/shift-away.css',
            ),
            ' stylesheets.',
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' tippy',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                'animateFill',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'from',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js/dist/backdrop.css',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js/animations/shift-away.css',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'reference',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'animateFill',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token boolean'},
                  ),
                  'true',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '[',
                ),
                'animateFill',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ']',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
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
          Object(n.b)('h3', null, 'CSS animations'),
          Object(n.b)(
            'p',
            null,
            "Maybe plain transitions aren't enough for your use case. You can also use CSS\nanimations (e.g. ",
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'animate.css',
            ),
            '):',
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'button',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  "// 'fade' is just an opacity transition, which is a good base for most",
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// animations',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'animation',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'fade',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'onMount',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token parameter'},
                  ),
                  'instance',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'const',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token constant'},
                  ),
                  'tooltip',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'instance',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'popperChildren',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'requestAnimationFrame',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token arrow operator'},
                  ),
                  '=>',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'tooltip',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'classList',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token func method'},
                  ),
                  'add',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'animated',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'tooltip',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'classList',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token func method'},
                  ),
                  'add',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'wobble',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'onHidden',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token parameter'},
                  ),
                  'instance',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'const',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token constant'},
                  ),
                  'tooltip',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'instance',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'popperChildren',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'tooltip',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'classList',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token func method'},
                  ),
                  'remove',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'animated',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'tooltip',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'classList',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token func method'},
                  ),
                  'remove',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'wobble',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
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
          Object(n.b)(
            'p',
            null,
            'You can also use ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '@keyframes',
            ),
            ' and add the ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'animation',
            ),
            ' property to your animation\nselector too.',
          ),
          Object(n.b)('h3', null, 'Spring animations'),
          Object(n.b)(
            'p',
            null,
            'Maybe CSS is too limiting and want the full power of a JavaScript animation\nlibrary. ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'animejs',
            ),
            ' is a great library for creating realistic spring animations.',
          ),
          Object(n.b)('p', null, "Here's an example of how to integrate it:"),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'button',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'content',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'Hello world',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'duration',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '0',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// Required to not interfere',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'onShow',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token parameter'},
                  ),
                  'instance',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'const',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token constant'},
                  ),
                  'tooltip',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'instance',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'popperChildren',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'anime',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token func method'},
                  ),
                  'remove',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'tooltip',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'anime',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'targets',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' tooltip',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'scale',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '[',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '0.75',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '1',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ']',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'translateY',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '[',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '15',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '0',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ']',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'opacity',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '[',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '0',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '1',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ']',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'duration',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '1000',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'onHide',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token parameter'},
                  ),
                  'instance',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'const',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token constant'},
                  ),
                  'tooltip',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'instance',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'popperChildren',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// Prevent an infinite loop by using a state flag',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token control keyword'},
                  ),
                  'if',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'instance',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'state',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'hideCalledManually',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'instance',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'state',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'hideCalledManually',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token boolean'},
                  ),
                  'false',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token control keyword'},
                  ),
                  'return',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                '\n\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'anime',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token func method'},
                  ),
                  'remove',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'tooltip',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'anime',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'targets',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' tooltip',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'scale',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '[',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '1',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '0.75',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ']',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'opacity',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '[',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '1',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '0',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ']',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'translateY',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '[',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '0',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '15',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ']',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'duration',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '200',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'easing',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'easeInQuad',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'complete',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n        ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token control keyword'},
                  ),
                  'if',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '!',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'instance',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'state',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'isVisible',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n          ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'instance',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'state',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'hideCalledManually',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token boolean'},
                  ),
                  'true',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n          ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'instance',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token func method'},
                  ),
                  'hide',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n        ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  "// We're going to call `.hide()` ourselves - we need to wait for",
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// animejs to complete its animation. We can cancel the lifecycle',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// by returning `false`.',
                ),
                '\n\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// We also need to set the `isVisible` state flag to `false`',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// manually so the instance knows the tippy is currently hiding.',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'instance',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'state',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'isVisible',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token boolean'},
                  ),
                  'false',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token control keyword'},
                  ),
                  'return',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token boolean'},
                  ),
                  'false',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
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
          Object(n.b)('h3', null, 'Dimensions transition'),
          Object(n.b)(
            'p',
            null,
            'While a tippy is showing, the content inside of it may change. How do you\nsmoothly transition its dimensions? By default, it instantly changes size when\nthe content is updated. It turns out this is quite complex to do, but possible.',
          ),
          Object(n.b)('h4', null, 'Partially dynamic'),
          Object(n.b)(
            'p',
            null,
            'View the ',
            Object(n.b)(
              'a',
              Object.assign(
                {parentName: 'p'},
                {href: 'https://codepen.io/atomiks/pen/LgjMbW'},
              ),
              'CodePen demo',
            ),
            '.',
          ),
          Object(n.b)('h4', null, 'Fully dynamic'),
          Object(n.b)(
            m,
            {mdxType: 'Demo'},
            Object(n.b)(
              'span',
              null,
              Object(n.b)(c.a, {mdxType: 'ImageTransition'}),
            ),
            Object(n.b)(b.a, {mdxType: 'TextTransition'}),
          ),
          Object(n.b)(
            'p',
            null,
            "Code is still being developed and it is highly experimental at this stage. The\ndocumentation will be updated once it's ready.",
          ),
          Object(n.b)(
            'p',
            null,
            'For now, you can view WIP implementations:\n',
            Object(n.b)(
              'a',
              Object.assign(
                {parentName: 'p'},
                {
                  href:
                    'https://github.com/atomiks/tippyjs/blob/v5/demo/flip/index.js',
                },
              ),
              'vanilla',
            ),
            ' or\n',
            Object(n.b)(
              'a',
              Object.assign(
                {parentName: 'p'},
                {
                  href:
                    'https://github.com/atomiks/tippyjs/blob/v5/website/src/components/TippyTransition.js',
                },
              ),
              'React',
            ),
            '.',
          ),
        );
      }
      O.isMDXComponent = !0;
    },
  },
]);
//# sourceMappingURL=component---src-pages-animations-mdx-0b590873b789d0562e10.js.map
