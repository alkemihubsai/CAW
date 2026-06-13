# Deployment Guide

## Environment Variables

Before deploying to Render or any other platform, you need to configure the following environment variables:

### Required Variables

```bash
NETWORK=mainnet
INFURA_API_KEY=your_infura_api_key
ALCHEMY_API_KEY=your_alchemy_api_key
CAW_CONTRACT=0x_contract_address
CAW_NAME_CONTRACT=0x_contract_address
CAW_NAME_MINTER_CONTRACT=0x_contract_address
MINTABLE_CAW_CONTRACT=0x_contract_address
```

## Render Deployment

1. Go to your Render dashboard
2. Select your web service
3. Navigate to "Environment" tab
4. Add all the environment variables listed above
5. **Important**: Render automatically sets the PORT environment variable to 10000. The app will use this automatically.
6. Click "Save Changes"
7. Trigger a new deploy

## Build Commands

```bash
# Install dependencies
yarn install

# Build the project
yarn build

# Start production server (uses PORT env var, defaults to 8082)
yarn start
```

## Troubleshooting

### Missing Environment Variables
If you see warnings about missing env variables, make sure all required variables are set in your Render environment settings.

### Type Errors
The build process includes TypeScript checking. Fix any type errors before deploying.

### Deprecated Packages
The warnings about deprecated packages (WalletConnect v1, eslint, etc.) are non-critical and won't prevent deployment. Consider upgrading these packages in the future.
