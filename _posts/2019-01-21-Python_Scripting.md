---
layout: blogpost
title: Creating your Own Python Command Line Scripts
tags: [python commandline cli tutorial]
author: Marcus Crowder
category: [python scripting tutorial]
---

Hello!
Today we are going to leverage the power of Python to solve some very common problems.
One of the biggest powers of python is that is can be used as a scripting language and additionally it is used extensively by dev ops engineers (and lazy people like myself) who are tired of repeatedly typing the same commands over and over again.

Now the question becomes how Do I use python for making my own scripting files that i can execute directly from the terminal? Without prefixing it with <br>

```python
python3 <filename>
```

<br>
and finally how do we call these scripts from any directory not just the current directory we are in. By the end of reading this you will be able to call your python script from any directory in your bash terminal.

### Tutorial only meant for Linux and Mac users

# Step 1 - Create Python script

I will go through the usual way of calling python files before creating a script.
The first step would be to get out your text editor
and create a python file called script_test.py.

```python
print("Hello, World")
```

Let's keep things simple for now by just having our script display the famous "Hello, World" greeting <br>

We can then run this script with

```python
python3 script_test.py
```

# Step 2 - Add Shebang Line

The next important step in our process is to add a shebang line to the top of our script.
You might be wondering what a shebang line is..well in simple terms it tells our computer where to find our Interpreter in this case our shebang line will be

#!/usr/bin/env python3

This tells your computer to search your env for your python3 interpreter

append this to the top of your script_test.py file

the file now becomes

```
#!/usr/bin/env python3
print("Hello World")
```

while we are at it let's change the name of our cript_script_test.py file to simply script_test
you can use the <br>
mv script_test.py script_test
<br>
command for that.

# Step 3 - Make the file executable

To make your file executable go into your bash terminal and type in these commands

```python
chmod +x script_test
```

This will give the file executive permissions for all users another option would be the chmod 755 filename . Which gives full permissions to owner and read and execute permissions for everyone else.

now the fun part we can run our file from the terminal without prefixing it with the python command with <br>

```python
./script_test
```

Which should print "Hello, World" to the screen.

This is good so far but this script can be only run from this folder so we move to the last part of this tutorial.

# Step 4 - Place file within your path.

In our bash shell we can view our path by using the command

```python
printenv | grep PATH
```

the order of the Path is where Bash, Or zsh or whatever terminal you are using looks for commands and if they are not held in those locations will give an error. <br>

First check to see if your path has your homedirectory <br>
Your home directory can be accessed using
<code> cd ~ </code>

then print out that directory using

<code>pwd</code>
Check to see if that directory is prefixed to your Path if not you can add it to your path within your .bashrcfile <br>
At the bottom of your .bashrc or .zshrc add these lines

```pyhton
export PATH=$PATH:/home/[user]/.local/bin
```

Where [user] is equal to your user account.
now source your .bashrc or.zshrc file from your home directory to refresh it

```python
source .bashrc
```

While still in the user home directory if your .local/bin directory does not exist you can make it with

```python
mkdir ~/.local/bin
```

Lastly move the script_test file you have created previously to the ~/.local/bin directory

now we can just call our file with.

```code
script_test
```

and Boom now you have created your first python script now you can create scripts of your liking when you want.

You can even try make scripts of bash shell commands for practice just remember to use never names.
Another good option is learn how to make bash script to check the total amount of words in a file which will teach you about the
sys.argv python list.
