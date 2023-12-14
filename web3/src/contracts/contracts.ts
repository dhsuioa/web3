import { getContract } from 'viem';
import { gatedPosterABI, gatedPosterAddress, posterABI, posterAddress, tokenABI, tokenAddress } from '../types/abi';
import { publicClient, walletClient } from './init';
import { polygonMumbai } from 'viem/chains';

export const PosterContract = getContract({
    abi: posterABI,
    address: posterAddress[polygonMumbai.id],
    walletClient: walletClient,
    publicClient: publicClient,
});

export const GatedPosterContract = getContract({
    abi: gatedPosterABI,
    address: gatedPosterAddress[polygonMumbai.id],
    walletClient: walletClient,
    publicClient: publicClient,
});

export const TokenContract = getContract({
    abi: tokenABI,
    address: tokenAddress[polygonMumbai.id],
    walletClient: walletClient,
    publicClient: publicClient,
});
