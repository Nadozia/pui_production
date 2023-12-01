# SSH (Secure Shell) Learning Note

## Introduction

SSH, or Secure Shell, is a cryptographic network protocol that provides a secure way to access and manage network devices and servers over an unsecured network. It encrypts the communication between the client and the server, ensuring confidentiality and integrity.

## Key Concepts

1. **Key Pair Authentication**

   SSH uses a key pair for authentication, consisting of a private key (stored on the client) and a public key (stored on the server). This method enhances security compared to traditional password-based authentication.

2. **Encryption**

   All data transmitted over an SSH connection is encrypted. This includes the authentication process, commands, and any data exchanged between the client and server. The encryption helps protect sensitive information from unauthorized access.

3. **Port 22**

   By default, SSH uses port 22 for communication. It's essential to ensure that the firewall allows traffic on this port for SSH connections to be established. However, for security reasons, some administrators choose to change the default port.

## Basic Usage

1. **Connecting to a Server**
	To connect to a remote server using SSH, use the following command:

```bash
$ ssh ${username}@${hostname}
```

2. **Specifying a Port**
	If the SSH server uses a port other than the default 22, specify it using the "-p" option:
```
$ ssh -p ${port_number} ${username}@${hostname}
```

3. **Key Pair Authentication**
	To use key pair authentication, generate a key pair on your local machine using the "ssh-keygen" command:
	```
	$ ssh-keygen -t rsa -b 2048
	```
	Follow the prompts to create the key pair. Then, copy the public key to the remote server:
	```
	$ ssh-copy-id ${username}@${hostname}
	```

4. ** Executing Commands Remotely**

	Execute commands on the remote server without logging in interactively:
	```
	$ ssh username@hostname 'command_to_execute'
	```
	