
# **ChatGPT DApp**
## 🌐 Live Demo - DeepConverse AI

🚀 Check out the live deployed DeepConverse AI application here:  
👉 [DeepConverse AI Live](https://deepconverseai-sharath.onrender.com/)

## **Overview**

This project is a decentralized application (DApp) utilizing **React**, **Hardhat**, **ethers.js**, and **MetaMask** for wallet integration and smart contract interactions. It allows users to manage memberships and perform blockchain-based transactions using a custom-built API.

---


---

## **Features**

- **Decentralized Chatbot**: Interact with an AI-powered chatbot on the blockchain.
- **Membership Plans**: Flexible subscription options (One Month, Six Months, One Year).
- **Web3 Integration**: Connect and interact using MetaMask wallet.
- **Smart Contract Functionality**: Deployed on Hardhat's local blockchain.
- **Secure Transactions**: All payments and subscriptions handled through Ethereum smart contracts.
- **User-Friendly Interface**: Simple and intuitive UI for managing subscriptions and chatting.
- **Free Trial Option**: Users can try the chatbot before committing to a subscription.
- **Custom API Integration**: Utilizes a custom-built, free-to-use API.
- **Real-Time Updates**: Reflects membership status and chat interactions instantly.
- **Browser Compatibility**: Optimized for Microsoft Edge.

---


## **API**

We provide a custom-built API for this project, free to use for everyone.

---

## **Project Execution Process**

### **Step 1: Download the Project**

- Download the project as a ZIP file from [GitHub](https://github.com/your-repo-link).
- Extract the contents.

### **Step 2: Install Visual Studio Code**

- Download and install **Visual Studio Code (VS Code)** from [here](https://code.visualstudio.com/).

> **Note**: Ensure the exact versions of packages below are installed to avoid compatibility issues.

### **Dependencies List**

```bash
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
```

### **Step 3: Install Dependencies**

1. Open the terminal in VS Code.
2. Navigate to the project folder.
3. Run:

   ```bash
   npm install
   ```

### **Step 4: Install Server Dependencies**

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Run:

   ```bash
   npm install
   ```

### **Step 5: Start the Server**

In the terminal, run:

```bash
npm run server
```

- Open **Microsoft Edge**.
- Visit [http://localhost:4000](http://localhost:4000).

### **Step 6: Start the Frontend**

1. Split the terminal and run:

   ```bash
   npm run dev
   ```

2. Open **Microsoft Edge** and visit [http://localhost:3000](http://localhost:3000).

### **Step 7: Setup MetaMask and Hardhat**

1. **Install MetaMask** on **Microsoft Edge**.
2. **Run Hardhat Node**:

   ```bash
   npx hardhat node
   ```

3. **Deploy Smart Contract**:

   ```bash
   npx hardhat run --network localhost scripts/deploy.js
   ```

4. **Add Hardhat Localhost Network to MetaMask**:

| **Field**          | **Value**                |
|---------------------|--------------------------|
| Network Name        | Hardhat Localhost        |
| New RPC URL         | http://127.0.0.1:8545    |
| Chain ID            | 31337                    |
| Currency Symbol     | ETH                      |
| Block Explorer URL  | Leave empty              |

5. **Import Hardhat Test Accounts**:
   - Copy a private key from the Hardhat terminal.
   - In MetaMask, go to **Import Account**, paste the private key, and click **Import**.

### **Step 8: Modify Membership Details**

In `context/index.js`, update:

1. **One Month Membership**

   ```javascript
   const amount = 1;
   const MEMBERSHIP_NAME = "One Month";
   ```

   - Test in the browser by visiting [http://localhost:3000](http://localhost:3000).
   - Confirm the MetaMask transaction.

2. **Six Months Membership**

   ```javascript
   const amount = 3;
   const MEMBERSHIP_NAME = "Six Months";
   ```

   Repeat the same process.

3. **One Year Membership**

   ```javascript
   const amount = 5;
   const MEMBERSHIP_NAME = "One Year";
   ```

### **Step 9: Access Chat Feature**

- Open **Microsoft Edge**.
- Visit [http://localhost:3000/chat](http://localhost:3000/chat).
- Select a subscription plan, and confirm the transaction via MetaMask.

---

## **Screenshots**

Here are some screenshots of the application in action:

| Screenshot | Description |
|------------|-------------|
| ![Front Page 1](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(940).png) | Front page view |
| ![Membership Options](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(941).png) | Membership options |
| ![MetaMask Confirmation 1](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(942).png) | MetaMask transaction confirmation |
| ![Feature 1](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(943).png) | Feature screenshot |
| ![Feature 2](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(944).png) | Another feature screenshot |
| ![Feature 3](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(945).png) | Another feature screenshot |
| ![Feature 4](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(946).png) | Another feature screenshot |
| ![Feature 5](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(947).png) | Another feature screenshot |
| ![Feature 6](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(948).png) | Another feature screenshot |
| ![Feature 7](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(949).png) | Another feature screenshot |
| ![Feature 8](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(950).png) | Another feature screenshot |
| ![Feature 9](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(951).png) | Another feature screenshot |
| ![Feature 10](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(952).png) | Another feature screenshot |
| ![Feature 11](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(953).png) | Another feature screenshot |
| ![Feature 12](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(954).png) | Another feature screenshot |
| ![Feature 13](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(955).png) | Another feature screenshot |
| ![Feature 14](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(956).png) | Another feature screenshot |
| ![Feature 15](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(957).png) | Another feature screenshot |
| ![Feature 16](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(958).png) | Another feature screenshot |
| ![Feature 17](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(959).png) | Another feature screenshot |
| ![Feature 18](https://github.com/Sharathhk122/ChatBot/blob/main/Screenshot%20(960).png) | Another feature screenshot |

---


