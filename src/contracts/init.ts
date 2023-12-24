import { createPublicClient, createWalletClient, custom, http } from 'viem';
import { polygonMumbai } from 'viem/chains';
import 'viem/window';

// const infuraUrl = 'https://polygon-mumbai.infura.io/v3/';
// const infuraKey = import.meta.env.VITE_INFURA_API_KEY;

export const publicClient = createPublicClient({
    chain: polygonMumbai,
    transport: http(`https://polygon-mumbai.infura.io/v3/50f94c400c594af68edeec17133ab90d`),
});

export const walletClient = createWalletClient({
    chain: polygonMumbai,
    transport: window.ethereum ? custom(window.ethereum) : http(),
});

export const getAccount = async (): Promise<`0x${string}` | undefined> => {
    const [account] = await walletClient.getAddresses();
    return account ?? undefined;
};