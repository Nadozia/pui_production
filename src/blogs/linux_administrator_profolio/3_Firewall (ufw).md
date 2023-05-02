
Checking if ufw is installed, if not:
```
sudo apt install ufw
```

For me, it is preinstalled.
![[Pasted image 20230217134723.png]]

```
ufw --version
```

Make sure the ssh is allowed after we enable the firewall, othervice we would not be able to use ssh remote connection.

```
ufw allow 22/tcp
```

80 and 81 should also be allowed as we are using them for our web servers.

```
ufw allow 80,81,443 proto tcp
```

After the configuration, we have to reload the firewall so that the configuration is effective.
```
ufw reload
```

## Advance settings

The default setting of ufw is place in /etc/default/ufw.
![[Pasted image 20230218010348.png]]

Allow or deny by service:

```
ufw allow ssh
ufw deny http
```

ufw will read the service in /etc/services

![[Pasted image 20230218012238.png]]