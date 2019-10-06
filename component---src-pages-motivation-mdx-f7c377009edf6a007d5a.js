(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    291: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return i;
        }),
        n.d(t, 'default', function() {
          return r;
        });
      n(4), n(5), n(3), n(7), n(10), n(0);
      var a = n(51),
        o = n(183);
      var i = {},
        s = {_frontmatter: i},
        l = o.default;
      function r(e) {
        var t = e.components,
          n = (function(e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++)
              (n = i[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, ['components']);
        return Object(a.b)(
          l,
          Object.assign({}, s, n, {components: t, mdxType: 'MDXLayout'}),
          Object(a.b)('h3', null, 'Why tooltips and popovers?'),
          Object(a.b)(
            'p',
            null,
            'Both are elements positioned near a "reference" element, and are hidden until\nthey are triggered. They help conserve space by hiding secondary information or\nfunctionality behind a hover or click. They are positioned outside the normal\nflow of the document so when they are triggered, they are overlayed on top of\nthe existing UI without disrupting the flow of content.',
          ),
          Object(a.b)(
            'p',
            null,
            'Tippy.js distinguishes them in the following way:',
          ),
          Object(a.b)(
            'ul',
            null,
            Object(a.b)(
              'li',
              {parentName: 'ul'},
              'A ',
              Object(a.b)('strong', {parentName: 'li'}, 'tooltip'),
              " is an element containing simple text content describing a\nparticular element. It's hidden until the user desires more information from\nthe element, e.g. before deciding to click a button.",
            ),
            Object(a.b)(
              'li',
              {parentName: 'ul'},
              'A ',
              Object(a.b)('strong', {parentName: 'li'}, 'popover'),
              ' is an interactive HTML tooltip. It can be a dropdown, menu, or\nany other kind of box that pops out from the normal flow of the document. This\ntype of element contains non-vital functionality and can be hidden behind a\nclick or hover to conserve space.',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Both of these are called a "tippy" when using Tippy.js!',
          ),
          Object(a.b)('h3', null, 'Tippy.js'),
          Object(a.b)(
            'p',
            null,
            Object(a.b)('strong', {parentName: 'p'}, 'Size: 5.5 KB (core)'),
            ' (including Popper: 12.8 KB)',
          ),
          Object(a.b)(
            'blockquote',
            null,
            Object(a.b)(
              'p',
              {parentName: 'blockquote'},
              '(core) means the core JS & CSS. If importing more themes, animations, plugins,\nor addons, the size will increase.',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Tippy is an abstraction over Popper and provides a set of features and defaults\nthat make creating tooltip and popover elements easy.',
          ),
          Object(a.b)(
            'p',
            null,
            'But, how does Tippy compare to other solutions?',
          ),
          Object(a.b)('h3', null, 'Comparison with Popper.js'),
          Object(a.b)(
            'p',
            null,
            Object(a.b)('strong', {parentName: 'p'}, 'Size: 7.3 KB'),
          ),
          Object(a.b)(
            'p',
            null,
            "Popper.js is a positioning engine, not a tooltip library. Popper's only goal is\nto position an absolutely positioned element (the tooltip) near another element\n(the reference).",
          ),
          Object(a.b)(
            'p',
            null,
            'Since the element is absolutely positioned, naively centering it above the\nreference element can cause it to:',
          ),
          Object(a.b)(
            'ul',
            null,
            Object(a.b)(
              'li',
              {parentName: 'ul'},
              Object(a.b)(
                'strong',
                {parentName: 'li'},
                'Overflow the boundary',
              ),
              ' (viewport, window, scrollParent) and therefore get\ncut off',
            ),
            Object(a.b)(
              'li',
              {parentName: 'ul'},
              Object(a.b)(
                'strong',
                {parentName: 'li'},
                'Overlap its reference element (due to overflow prevention)',
              ),
              ', so it should\nflip to the opposite side',
            ),
            Object(a.b)(
              'li',
              {parentName: 'ul'},
              Object(a.b)(
                'strong',
                {parentName: 'li'},
                'Detach from the reference element',
              ),
              ' if inside a scrolling container',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'Popper solves all of these problems. The expected logic to do this is very\ncomplex, so this is effectively a "baseline" library if you want to even use\npopper elements (tooltips, popovers, dropdowns) in your app in the first place\nwithout them having poor UX.',
          ),
          Object(a.b)(
            'p',
            null,
            'For people who want to build the appearance and behavior of their popper\nelements from scratch, this is a fantastic library. If you want "out of the box"\n(abstracted) behavior, then using Tippy might be better.',
          ),
          Object(a.b)(
            'p',
            null,
            'Tippy takes advantage of Popper as a dependency, so you can use them together\nwithout incurring additional cost:',
          ),
          Object(a.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(a.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(a.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(a.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(a.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token class class-name'},
                  ),
                  'Popper',
                ),
                ' ',
                Object(a.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'from',
                ),
                ' ',
                Object(a.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(a.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'popper.js',
                  Object(a.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(a.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(a.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' tippy ',
                Object(a.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'from',
                ),
                ' ',
                Object(a.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(a.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js',
                  Object(a.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(a.b)(
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
          Object(a.b)(
            'p',
            null,
            "If you're using the CDN, the ",
            Object(a.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'Popper',
            ),
            ' constructor will already be available.',
          ),
          Object(a.b)('h3', null, 'Comparison with Tooltip.js'),
          Object(a.b)(
            'p',
            null,
            Object(a.b)('strong', {parentName: 'p'}, 'Size: 2.3 KB'),
            ' (including Popper: 9.6 KB)',
          ),
          Object(a.b)(
            'p',
            null,
            'Tooltip.js is a small tooltip library built on top of Popper, much like Tippy\nis.',
          ),
          Object(a.b)(
            'p',
            null,
            'Unlike Tippy, however, it lacks certain features to be 3 KB smaller:',
          ),
          Object(a.b)(
            'ul',
            null,
            Object(a.b)(
              'li',
              {parentName: 'ul'},
              'Does not come with styling or animations',
            ),
            Object(a.b)(
              'li',
              {parentName: 'ul'},
              'Is less accessible out of the box',
            ),
            Object(a.b)(
              'li',
              {parentName: 'ul'},
              'Has no lifecycle hooks for AJAX or plugin extensibility',
            ),
            Object(a.b)(
              'li',
              {parentName: 'ul'},
              'Is more complex to set up, particularly using HTML',
            ),
            Object(a.b)(
              'li',
              {parentName: 'ul'},
              'Interactivity is not possible with a hover event',
            ),
            Object(a.b)(
              'li',
              {parentName: 'ul'},
              'Does not handle touch input adequately',
            ),
          ),
          Object(a.b)('h3', null, 'Comparison with Tooltipster'),
          Object(a.b)(
            'p',
            null,
            Object(a.b)('strong', {parentName: 'p'}, 'Size: 10 KB'),
            ' (including jQuery: 40 KB)',
          ),
          Object(a.b)(
            'p',
            null,
            "Tooltipster is a fantastic library with very similar functionality, but requires\na jQuery dependency, unlike Tippy. To many people these days, this is a\ndealbreaker! jQuery's minzipped size is about 30 KB, and Tooltipster including\nCSS is about 10 KB. To people using frameworks like React, Vue, or Angular, it\ncan be hard to deal with such a large dependency.",
          ),
          Object(a.b)(
            'p',
            null,
            'Tooltipster is also receiving less frequent updates than Tippy, its last version\nwas released over a year ago (as of Feb 2019).',
          ),
          Object(a.b)('h3', null, 'Comparison with Microtip and Balloon.css'),
          Object(a.b)(
            'p',
            null,
            Object(a.b)('strong', {parentName: 'p'}, 'Size: 1 KB'),
          ),
          Object(a.b)(
            'p',
            null,
            'Both of these are pure CSS tooltip libraries. CSS tooltips can be tiny in size,\nbut come with many drawbacks:',
          ),
          Object(a.b)(
            'ul',
            null,
            Object(a.b)(
              'li',
              {parentName: 'ul'},
              'Lack of positioning engine means overflow prevention & flipping are not\npossible',
            ),
            Object(a.b)('li', {parentName: 'ul'}, 'No interactivity'),
            Object(a.b)(
              'li',
              {parentName: 'ul'},
              'No dynamic arrow positioning',
            ),
            Object(a.b)(
              'li',
              {parentName: 'ul'},
              'Using HTML content within them (e.g. popovers) is cumbersome or not possible',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            "If you don't need the above, then a CSS tooltip library might better fit your\nneeds.",
          ),
        );
      }
      r.isMDXComponent = !0;
    },
  },
]);
//# sourceMappingURL=component---src-pages-motivation-mdx-f7c377009edf6a007d5a.js.map
