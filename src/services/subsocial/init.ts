import { setSubsocialConfig, setupTxCallbacks } from 'subsocial-query1'

export default function initSubsocialConfig() {
  setSubsocialConfig('staging')
  // setSubsocialConfig('prod', {
  //   postConnectConfig: (api) => {
  //     const mnemonic = '' // CRUST MNEMONIC
  //     const authHeader = generateCrustAuthToken(mnemonic)
  //     api.ipfs.setWriteHeaders({
  //       authorization: 'Basic ' + authHeader,
  //     })
  //   },
  // })

  setupTxCallbacks({
    onSuccess: ({ explorerLink, summary }) => {
      console.log(`${summary} Success 🎉: You can see it here ${explorerLink}`)
    },
  })
}
