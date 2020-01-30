Get-WmiObject Win32_LogicalDisk | Where-Object { $_.DriveType -eq 3 } | Select-Object -Property DeviceID, DriveType, VolumeName, 
@{L='FreeSpaceGB';E={"{0:N2}" -f ($_.FreeSpace /1GB)}},
@{L="CapacityGB";E={"{0:N2}" -f ($_.Size/1GB)}}