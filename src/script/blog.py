import os



cwd = os.getcwd()
dir_path = cwd + "/src/blogs/linux_administrator_profolio"
files = os.listdir(dir_path)

output = ""

for file in files:
  if file != "." and file != "..":
    output += "<div>" + file + "</div>"

print(output)