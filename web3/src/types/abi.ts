
export const posterABI = [
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'user', type: 'address' },
        { indexed: false, internalType: 'string', name: 'content', type: 'string' },
        { indexed: true, internalType: 'string', name: 'tag', type: 'string' },
      ],
      name: 'NewPost',
      type: 'event',
    },
    {
      inputs: [
        { internalType: 'string', name: 'content', type: 'string' },
        { internalType: 'string', name: 'tag', type: 'string' },
      ],
      name: 'post',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ] as const;
  
  export const posterAddress = {
    80001: '0xCe3c8aD938cea87287A867d87e9Ea7328DbBadf0',
  } as const;
  
  export const tokenABI = [
    {
      inputs: [
        { internalType: 'string', name: '_name', type: 'string' },
        { internalType: 'string', name: '_symbol', type: 'string' },
        { internalType: 'uint256', name: '_totalSupply', type: 'uint256' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
        { indexed: true, internalType: 'address', name: 'spender', type: 'address' },
        { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
        { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'from', type: 'address' },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [
        { internalType: 'address', name: '_owner', type: 'address' },
        { internalType: 'address', name: '_spender', type: 'address' },
      ],
      name: 'allowance',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_spender', type: 'address' },
        { internalType: 'uint256', name: '_amount', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [
        { internalType: 'bool', name: '', type: 'bool' },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
      ],
      name: 'balanceOf',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        { internalType: 'uint8', name: '', type: 'uint8' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_account', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'mint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        { internalType: 'string', name: '', type: 'string' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        { internalType: 'address', name: '', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        { internalType: 'string', name: '', type: 'string' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'transfer',
      outputs: [
        { internalType: 'bool', name: '', type: 'bool' },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_from', type: 'address' },
        { internalType: 'address', name: '_to', type: 'address' },
        { internalType: 'uint256', name: '_amount', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [
        { internalType: 'bool', name: '', type: 'bool' },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_newOwner', type: 'address' },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ] as const;
  
  export const tokenAddress = {
    80001: '0xC5EaaC3805b0F2F93BB9B0cDd7387F0000838589',
  } as const;
  
  export const gatedPosterABI = [
    {
      inputs: [
        { internalType: 'address', name: '_tokenAddress', type: 'address' },
        { internalType: 'uint256', name: '_threshold', type: 'uint256' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'user', type: 'address' },
        { indexed: false, internalType: 'string', name: 'content', type: 'string' },
        { indexed: true, internalType: 'string', name: 'tag', type: 'string' },
      ],
      name: 'NewPost',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
        { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        { internalType: 'address', name: '', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'string', name: 'content', type: 'string' },
        { internalType: 'string', name: 'tag', type: 'string' },
      ],
      name: 'post',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_newThreshold', type: 'uint256' },
      ],
      name: 'setThreshold',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_newTokenAddress', type: 'address' },
      ],
      name: 'setTokenAddress',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'threshold',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'tokenAddress',
      outputs: [
        { internalType: 'address', name: '', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_newOwner', type: 'address' },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ] as const;
  
  export const gatedPosterAddress = {
    80001: '0xB0C2a2eF3F39Ad0CE75401849a35B826e6D58142',
  } as const;