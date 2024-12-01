Project Exection process 

step 1: Download zip File

step 2: install vs code.

note : you need to install exact version and packages otherwise project does not run.

D:\chatgpt-dapp\final-gpt-dapp>npm list --depth=0
chatapp@0.1.0 D:\chatgpt-dapp\final-gpt-dapp
├── @nomicfoundation/hardhat-toolbox@2.0.0
├── @openzeppelin/contracts@4.9.3
├── axios@1.7.7
├── ethers@5.7.2
├── hardhat@2.12.0
├── next@12.3.1
├── react-dom@18.2.0
├── react-icons@4.10.1
├── react@18.2.0
└── web3modal@1.9.9

step 3: Inside vs code opne your terminal install all packages 

npm install

step 4: cd server and again install 

npm install

step 5 : inside the terminal type :

npm run server

visit in microsoft edge only in url path type: localhost:4000

setp 6 : split the terminal and type :

npm run dev

open your microsoft edge 

visit in microsoft edge only in url path type: localhost:3000

step 7: In microsoft edge install metamask

split your terminal and type:

npx hardhat node

again split your terminal and type:

npx hardhat run --network localhost scripts/deploy.js

visit your metamask

1. Open MetaMask
Click on the MetaMask browser extension.
Unlock your wallet if it's locked.
2. Access the Network Settings
Click on the network dropdown at the top (e.g., "Ethereum Mainnet").
Select "Add network" or "Add a network manually".
3. Enter the Localhost Network Details
Field	Value
Network Name	Hardhat Localhost
New RPC URL	http://127.0.0.1:8545
Chain ID	31337
Currency Symbol	ETH
Block Explorer URL	(Leave empty or set to #)
4. Save the Network
Click Save to add the Hardhat network.
MetaMask will automatically switch to the newly added network.
5. Import Accounts from Hardhat
Hardhat provides several test accounts with private keys when running npx hardhat node.
To import these accounts into MetaMask:
Copy a private key from the Hardhat terminal.
In MetaMask, click on your account icon and select Import Account.
Paste the private key and click Import.
6. Test the Connection
Ensure your Hardhat node is running with npx hardhat node.
You should now see the test ETH balance of the imported accounts.



after  you vs code in context/index..js in line number 97 and 98 change to 
      
  const amount = 1;
  const MEMBERSHIP_NAME = "One Month";

  now come back to localhost:3000 click the top list_membership and then it will  automatically open the metamask and you click the confirm 

if transaction is completed 

again visit vs code in context/index..js in line number 97 and 98 change to 
      
  const amount = 3;
  const MEMBERSHIP_NAME = "Six Months";

  now come back to localhost:3000 click the top list_membership and then it will  automatically open the metamask and you click the confirm 

if transaction is completed 

again visit vs code in context/index..js in line number 97 and 98 change to 
      
  const amount = 5;
  const MEMBERSHIP_NAME = "One Year";

  now come back to localhost:3000 click the top list_membership and then it will  automatically open the metamask and you click the confirm 

if transaction is completed 



  





