VALID_KEYWORDS = ['author', 'title', 'year', 'doi', 'booktitle', 'location', 'journal', 'volumne', 'number', 'pages' ]

INDENT = ' '*4

parts = []
with open('biblio.bib') as fin:
    for line in fin.readlines():
        line = line.strip()
        if line[-1] == ',':
            line = line[:-1]

        if line[0] == '@':
            command, name = line.split('{')
            parts.append(f'{INDENT}"name": "{name}"')
            parts.append(f'{INDENT}"command": "{command}{{"')
            continue

        if '=' not in line:
            continue

        keyword, value = line.split('=')
        keyword = keyword.strip()
        value = value.strip()

        if keyword not in VALID_KEYWORDS:
            continue
        
        parts.append(f'{INDENT}"{keyword}": "{value}"')
        
print('"bibtex": {')
print(',\n'.join(parts))
print('}')

    
