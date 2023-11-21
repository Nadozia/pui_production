import os
import json

cwd = os.getcwd()
dir_path = cwd + "/src/blogs/linux_administrator_profolio"

files = os.listdir(dir_path)

file_list = []

for file in files:
  if file != "." and file != "..":
    file_list.append(file)

output = json.dumps({"files": file_list})

print(output)