import { WalletAccount } from 'subsocial-query1'

export async function getWallet(): Promise<WalletAccount> {
  const appName = 'subsocial-react-query'
  // const { isWeb3Injected, web3Enable, web3Accounts } = await import(
  //   '@polkadot/extension-dapp'
  // )
  return {
    address: '',
  }
  // const injectedExtensions = await web3Enable(appName)
  // if (!isWeb3Injected) {
  //   throw Error(`Browser do not have any polkadot.js extension`)
  // }

  // if (!injectedExtensions.length) {
  //   throw Error(`Polkadot Extension have not authorized us to get accounts`)
  // }

  // const accounts = await web3Accounts()
  // const firstAcc = accounts[0]
  // if (!firstAcc) {
  //   throw Error('No account detected')
  // }

  // const signer = await web3FromAddress(firstAcc.address)
  // return {
  //   signer,
  //   address: firstAcc.address,
  // }
}
