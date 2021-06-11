import string
letters_left = string.ascii_lowercase
d=['d','f']
for i in d:
    letters_left=letters_left.replace(i,'')
print(letters_left)