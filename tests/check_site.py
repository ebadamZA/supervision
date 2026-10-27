"""Build-free content and file checks. Optional browser smoke tests are external."""
from pathlib import Path
import re
p=Path(__file__).resolve().parents[1]
h=(p/'index.html').read_text(encoding='utf-8')
t=(p/'assets/topics.js').read_text(encoding='utf-8')
js=(p/'assets/app.js').read_text(encoding='utf-8')
css=(p/'assets/styles.css').read_text(encoding='utf-8')
assert len(re.findall(r'\bid:"[ABCE][1-4]"',t))==16
assert all(k in t for k in ['learning-analytics','gamification','computing-education','research-ai'])
assert 'educational-equity' not in t
assert '<section' in h and all(f'id="{x}"' in h for x in ['areas','topics','contact'])
assert all(f'id="{x}"' in h for x in ['theme-toggle','filter-area','filter-method','copy-enquiry','topic-dialog'])
assert not any(word in h.lower() for word in ['honours','pdda','faq-section'])
assert all(x in js for x in ['dataset.theme','localStorage','share-topic','search-topics'])
assert all(x in css for x in ['data-theme=dark','data-theme=light','@media'])
for f in ['.nojekyll','assets/favicon.svg']:
 assert (p/f).exists(), f'File missing: {f}'
print('PASS: 4 areas; 16 topics; theme toggle; filters; dialogue; proposal; local static assets')

assert h.count('<span class="brand-logo"><img src="assets/research-icon-blue-v2.svg"') == 1
assert '<span class="brand-logo">EA</span>' not in h
assert (p/'assets/research-icon-blue-v2-32.png').exists()
assert (p/'assets/research-icon-blue-v2-apple-touch.png').exists()
assert (p/'favicon.ico').exists()
assert 'assets/research-icon-blue-v2.svg' in h
assert '<div class="container footer-simple">' in h and 'Back to top ↑' in h
assert 'Supervision topics portal' in h
assert 'Open email draft' not in h and 'mailto:' not in h
assert 'email-enquiry' not in h and 'email-enquiry' not in js
assert 'At least two verified academic references' not in h
assert 'one page' in h and 'no more than 250 words' in h
assert 'institutional email or via Teams' in h
assert 'approximately 1–2 pages' not in js and '150–250 words' not in js
assert 'data-back-to-top' in h and 'window.scrollTo({ top: 0' in js
for removed in ['PERSONAL POSTGRADUATE SUPERVISION INTERESTS', 'Four directions.', 'Thoughtful beats lengthy.', 'No tracking', 'Where curiosity', 'Find a question worth asking.']:
 assert removed not in h, removed
assert 'mailto:' not in js and 'Template copied' in js
print("PASS: updated hero, 4 streams, 16 topics, copy-only contact, working top link, clean footer")
