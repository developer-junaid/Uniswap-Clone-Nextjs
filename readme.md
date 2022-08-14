## Uniswap Clone (Next.js + Sanity + Solidity)

### Steps

- Create folder and Navigate to it
- Run Command (This will create client folder with Next.js and Tailwind Template and all the dependencies will be installed)

```
yarn create next-app -e with-tailwindcss client
```

- Create two more folders on the root (studio and smart_contract)

## Setup Sanity

- Install Sanity cli globally `npm i -g @sanity/cli`
- Navigate to sanity directory `cd sanity`
- Initialize Sanity with CleverProgrammer (Shoutout) coupon

```
sanity init --coupon cleverprogrammer
```

- project name: YourChoice (Enter)
- Use default configuration: Y (Enter)
- Output path: (Enter)
- Select Project Template: Clean project with no predefined schemas (Enter)

- Create Schemas
- Run Sanity `sanity start`
