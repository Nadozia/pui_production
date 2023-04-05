
We are going to follow this guide to set up a openvpn server.
https://www.digitalocean.com/community/tutorials/how-to-set-up-and-configure-an-openvpn-server-on-ubuntu-20-04


## Step 1 Installation

```
sudo apt update
sudo apt install openvpn easy-rsa
```

Create easy-rsa directory,
Create a symbolic link to the /usr/share/easy-rsa
```
mkdir ~/easy-rsa
ln -s /usr/share/easy-rsa/* ~/easy-rsa/
```

Change ownership and permission of the folder
```
sudo chown pui ~/easy-rsa
chmod 700 ~/easy-rsa
```

Now we got this:
![[Pasted image 20230326205652.png]]

## Step2 Create PKI ( Public Key Infrastructure)

```
cd ~/easy-rsa
nano vars
```

We have to paste the following lines into vars, which will ensure that the private key and certificate requests are configured to use modern ECC to generate keys and secure signatures for clients and server.
```
set_var EASYRSA_ALGO "ec"
set_var EASYRSA_DIGEST "sha512
```


after that,
```
./easyrsa init-pki
```

## Step 3 — Creating an OpenVPN Server Certificate Request and Private Key

```
./easyrsa gen-req server nopass
```
![[Pasted image 20230326210837.png]]

We got a esay-RSA error here, as there are two vars found, a simple fix will be removing one of them.

Now it works.
![[Pasted image 20230326210959.png]]

## Step4 -- Setup a CA server

Do step1-2 in the CA-server.
![[Pasted image 20230326234318.png]]


## Step 5 -- Signing requests
Send the request to the CA-server:
In Openvpn server:
```
scp pki/req/server.req pui-ca-admin@{CA-server-ip}:/tmp
```

In CA-server:
```
./easyrsa import-req /tmp/server.req server
./easyrsa sign-req server server
```

![[Pasted image 20230327003919.png]]

[Side Note]
We got the following ssh error:
![[Pasted image 20230327014254.png]]

scp is actually using a default private key, to specify, we have to use the -i flag.
![[Pasted image 20230327014354.png]]

In OpenVPN Server
```
sudo cp /tmp/{server.crt,ca.crt} /etc/openvpn/server
```

Setting up tls-crpt:
```
openvpn --genkey secret ta.key
sudo cp ta.key /etc/openvpn/server
```

