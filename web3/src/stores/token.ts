import { defineStore } from 'pinia';
import { ref } from 'vue';
import { TokenContract } from '../contracts/contracts';
import { getAccount } from '../contracts/init';
import { bigintToStr } from '../utils/utils';
import { Address } from 'abitype';
import 'viem/window';

export const useTokenStore = defineStore('token', () => {
  const state = {
    balance: ref(0n),
    balanceStr: ref('0'),
    isTransferring: ref(false),
    isTokenLoading: ref(false),
    isOwner: ref(false),
  };

  async function updateBalance() {
    const address = await getAccount();
    if (!address) {
      return;
    }
    const balance = await TokenContract.read.balanceOf([address]);
    state.balance.value = balance;
    state.balanceStr.value = bigintToStr(balance);
  }

  async function transfer(amount: bigint, to: Address) {
    const address = await getAccount();
    if (!address) {
      throw new Error('No account');
    }

    if (state.balance.value < amount) {
      throw new Error('Not enough balance');
    }

    state.isTransferring.value = true;

    await TokenContract.write.transfer([to, amount], { account: address })
      .catch((e: any) => {
        throw e;
      })
      .finally(() => {
        state.isTransferring.value = false;
      });
  }

  async function mint(amount: bigint, to: Address) {
    const address = await getAccount();

    if (!address) {
      throw new Error('No account');
    }

    if (!to) {
      to = address;
    }

    state.isTransferring.value = true;

    await TokenContract.write.mint([to, amount], { account: address })
      .catch((e: any) => {
        throw e;
      })
      .finally(() => {
        state.isTransferring.value = false;
      });
  }

  async function listenTransactions() {
    const address = await getAccount();
    if (!address) {
      return;
    }

    TokenContract.watchEvent.Transfer(
      {},
      {
        onLogs: (logs: any) =>
          logs.map((log: any) => {
            const { from, to, value } = log.args;
            if (!from || !to || !value) {
              return;
            }

            if (address === from) {
              state.balance.value -= value;
              state.balanceStr.value = bigintToStr(state.balance.value);
            }

            if (address === to) {
              state.balance.value += value;
              state.balanceStr.value = bigintToStr(state.balance.value);
            }
          }),
      },
    );
  }

  async function setOwner() {
    const address = await getAccount();
    if (!address) {
      return;
    }

    const owner = await TokenContract.read.owner();
    state.isOwner.value = owner === address;
  }

  async function addDisplayToken() {
    if (!window.ethereum) {
      throw new Error('No ethereum provider');
    }

    await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: TokenContract.address,
          symbol: await TokenContract.read.symbol(),
          decimals: await TokenContract.read.decimals(),
        },
      },
    });
  }

  return {
    ...state,
    updateBalance,
    transfer,
    mint,
    listenTransactions,
    setOwner,
    addDisplayToken,
  };
});
