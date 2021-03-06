Challenge #2

We need to write code that will query the meta data of an instance within AWS and provide a json formatted output. The choice of language and implementation is up to you. Bonus Points The code allows for a particular data key to be retrieved individually

-------------------------------------------------------------------------------
Azure Instance Metadata Service (IMDS) provides information about currently running virtual machine instances. Below is the Code to retrieve all metadata for an instance.

Invoke-RestMethod -Headers @{"Metadata"="true"} -Method GET -NoProxy -Uri "http://169.254.169.254/metadata/instance?api-version=2021-02-01" | ConvertTo-Json -Depth 64

---------------------------------------------------------------------------------------
