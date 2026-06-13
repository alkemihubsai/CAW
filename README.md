# 🌙 CAW Frontend 

<p align="center">
  <a href="https://caw.is">
      <img src="public/assets/tokens/caw.png" height="128">
  </a>  
<br>
<br>
</p>

# About CAW - A Hunters Dream

CAW is a fully decentralized, censorship-resistant on-chain messaging protocol built on top of the Ethereum network for the Future of Decentralized Social Media.

## 📦 Environments

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- A Web3 wallet (MetaMask, Phantom, Trust wallet, Coinbase Wallet, or Rainbow Wallet) 

## Getting Started

### 1. Clone the Repository

```bash
git clone https://gitlab.com/hubsai-group/social-fi.git
cd social-fi
```

### 2. Install Dependencies

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory (this file is not tracked by git) and add the following environment variables:

```bash
# Required: Blockchain API Keys
ALCHEMY_API_KEY=your-alchemy-api-key
INFURA_API_KEY=your-infura-api-key

# Required: Network Configuration
NETWORK=goerli
JSON_RPC_URL=https://rpc.builder0x69.io

# Optional: Contract Addresses (if different from defaults)
CAW_CONTRACT=0x...
CAW_NAME_CONTRACT=0x...
CAW_NAME_MINTER_CONTRACT=0x...
MINTABLE_CAW_CONTRACT=0x...
```

> **Note on API Keys:**
> - **INFURA_API_KEY**: Create a WEB3 API (Formerly Ethereum) project on [Infura](https://infura.io/) and add your API key
> - **ALCHEMY_API_KEY**: Create a project on [Alchemy](https://www.alchemy.com/) and add your API key
> - Both API keys are used as fallback providers for better reliability

### 4. Run the Development Server

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will start on **http://localhost:8082**

> **Note:** The development server runs on port 8082 by default. 

### 5. Build for Production

```bash
npm run build
npm start
```

or with yarn:

```bash
yarn build
yarn start
```

## Available Scripts

- `npm run dev` - Starts the development server on port 8082 (runs ESLint first)
- `npm run build` - Creates an optimized production build
- `npm start` - Starts the production server on port 8082
- `npm run lint` - Runs Next.js linter
- `npm run lint:es` - Runs ESLint on all `.ts` and `.tsx` files

## Project Structure

```
social-fi/
├── src/
│   ├── pages/          # Next.js pages and API routes
│   ├── components/     # Reusable React components
│   ├── context/        # React context providers
│   ├── hooks/          # Custom React hooks
│   ├── config/         # Configuration files and ABIs
│   ├── locales/        # i18n translation files
│   ├── theme/          # Chakra UI theme configuration
│   ├── utils/          # Utility functions
│   └── styles/         # Global styles
├── public/             # Static assets
├── docs/               # Documentation
└── next.config.js      # Next.js configuration
```

## Features

- 🔐 **Web3 Integration**: Connect with MetaMask, Phantom, Trust wallet, Coinbase Wallet, Rainbow Wallet, and more
- 🌍 **Multi-language Support**: i18n with support for English, Spanish, German, and Polish
- 🎨 **Modern UI**: Built with Chakra UI and Framer Motion
- ⚡ **Fast Performance**: Next.js 13 with SWC minification
- 🔒 **Type Safety**: Full TypeScript support
- 📱 **Responsive Design**: Works on all devices

## Built with

- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Next.js](https://nextjs.org/) - React framework
- [Chakra UI](https://chakra-ui.com/) - Component library
- [Ethers.js](https://docs.ethers.io/v5/) - Ethereum library
- [Wagmi](https://wagmi.sh/) - React Hooks for Ethereum
- [RainbowKit](https://www.rainbowkit.com/) - Wallet connection UI
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [i18next](https://www.i18next.com/) - Internationalization

## Contributing

Would you like to contribute to this project?

This project is open source and welcomes contributions. We focus later on the CAW Manifesto. We are in the early stages of a Social Clearing house; read more about it [here](https://caw.is/).

We are looking for people who want to contribute to the project, not just the code. Join us on [Telegram](https://t.me/cawbuilders)

Regarding the code, we invite you to read this project's [CONTRIBUTING](docs/CONTRIBUTING.md) guidelines.

## Recommended VS Code Extensions

- [BetterComments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) - Better comment highlighting
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - Git supercharged
- [ENV](https://marketplace.visualstudio.com/items?itemName=IronGeek.vscode-env) - .env file support

## Troubleshooting

### Port Already in Use

If port 8082 is already in use, you can change it by modifying the scripts in `package.json`:

```json
"dev": "npm run lint:es && next dev -p <your-port>"
```

### Module Not Found Errors

If you encounter module resolution errors, try:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Ensure all environment variables are set correctly in your `.env` file. Check the console for specific error messages.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, join our [Telegram community](https://t.me/cawbuilders) or visit [caw.is](https://caw.is)

---

Made with ❤️ by [Teh CAWMmunity](https://caw.is)
