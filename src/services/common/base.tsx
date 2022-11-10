import queryClient from '../client'
import { QueryConfig } from './types'

export function poolFunctionWrapper<Param, SingleReturn>(
  func: (params: Param) => Promise<SingleReturn>,
  multiFunc: (params: Param[]) => Promise<SingleReturn[]>,
  waitTime: number
) {
  let queryPool: Param[] = []
  let timeout: number | undefined

  let batchResolver: (
    value: SingleReturn[] | PromiseLike<SingleReturn[]>
  ) => void
  let batchPromise = new Promise<SingleReturn[]>((resolve) => {
    batchResolver = resolve
  })

  const later = async function () {
    timeout = undefined
    let result: Promise<SingleReturn[]>
    if (multiFunc && queryPool.length > 1) {
      result = multiFunc(queryPool)
    } else {
      const queries = queryPool.map((singleParam) => {
        return func(singleParam)
      })
      result = Promise.all(queries)
    }
    const awaitedResult = await result
    queryPool = []
    batchResolver(awaitedResult)
  }

  return async function executedFunction(param: Param): Promise<SingleReturn> {
    let currentIndex = queryPool.length
    queryPool.push(param)
    window.clearTimeout(timeout)
    timeout = window.setTimeout(later, waitTime)

    const result = await batchPromise
    return result[currentIndex]
  }
}

export function generateQueryWrapper<ReturnOfPreQuery, CommonParams>(
  preQueryRun: (data: CommonParams) => Promise<ReturnOfPreQuery>
) {
  return <ReturnType, Params extends CommonParams, AdditionalParam>(
    func: (data: {
      params: Params
      additionalData: AdditionalParam
      preQueryData: ReturnOfPreQuery
    }) => Promise<ReturnType>,
    getAdditionalData: () => Promise<AdditionalParam>
  ) => {
    return async ({ queryKey }: any) => {
      const params = queryKey[1]
      const preQueryData = await preQueryRun(params)
      const additionalData = await getAdditionalData()
      return func({ params, additionalData, preQueryData })
    }
  }
}

export function mergeQueryConfig<T, V>(
  config?: QueryConfig<any, any>,
  defaultConfig?: QueryConfig<T, V>
): QueryConfig<T, V> {
  return {
    ...defaultConfig,
    ...config,
    enabled: (defaultConfig?.enabled ?? true) && (config?.enabled ?? true),
  }
}

export function createQueryInvalidation<Param>(key: string) {
  return (data: Param | null = null) => {
    queryClient.invalidateQueries([key, data])
  }
}

export function makeCombinedCallback(
  defaultConfig: any,
  config: any,
  attr: string
) {
  return (...data: any[]) => {
    defaultConfig && defaultConfig[attr] && defaultConfig[attr](...data)
    config && config[attr] && config[attr](...data)
  }
}

// export async function createTxAndSend<Param, OtherParams extends unknown[]>(
//   transactionGenerator: (
//     param: Param,
//     ...others: OtherParams
//   ) => Promise<{ tx: Transaction; summary: string }>,
//   param: Param,
//   currentWallet: WalletAccount,
//   setWallet: (newWallet: WalletAccount) => void,
//   networkRpc: string,
//   config?: MutationConfig<Param>,
//   defaultConfig?: MutationConfig<Param>,
//   ...otherParams: OtherParams
// ) {
//   let usedWallet = currentWallet
//   if (isEmptyObj(currentWallet.signer)) {
//     const newWallet = await activateWalletFromSavedAccount(currentWallet)
//     if (!newWallet) {
//       throw new Error("Can't connect to your wallet")
//     }
//     setWallet(newWallet)
//     usedWallet = newWallet
//   }

//   const { tx, summary } = await transactionGenerator(param, ...otherParams)
//   return sendTransaction(
//     tx,
//     usedWallet,
//     summary,
//     param,
//     networkRpc,
//     config,
//     defaultConfig
//   )
// }
// export function sendTransaction<Param>(
//   tx: Transaction,
//   wallet: WalletAccount,
//   summary: string,
//   param: Param,
//   networkRpc: string,
//   config?: MutationConfig<Param>,
//   defaultConfig?: MutationConfig<Param>
// ) {
//   return new Promise<Hash>(async (resolve, reject) => {
//     try {
//       const unsub = await tx.signAndSend(
//         wallet.address,
//         {
//           signer: wallet.signer as any,
//         },
//         async (result) => {
//           resolve(result.txHash as unknown as Hash)
//           if (result.status.isBroadcast) {
//             toast.info(`${summary}...`)
//           } else if (result.status.isInBlock) {
//             const blockHash = (result.status.toJSON() ?? ({} as any)).inBlock
//             const blockExplorerLink = (
//               <Link
//                 variant='primary'
//                 className={clsx('text-xs')}
//                 target='_blank'
//                 href={getBlockExplorerBlockInfoLink(networkRpc, blockHash)}
//               >
//                 See Detail
//               </Link>
//             )
//             if (
//               result.isError ||
//               result.dispatchError ||
//               result.internalError
//             ) {
//               toast.error(
//                 <div>
//                   <p>Error {summary}</p>
//                   <p className='text-text-secondary text-sm'>
//                     Error Code: {result.dispatchError?.toString()}
//                   </p>
//                   {blockExplorerLink}
//                 </div>
//               )
//             } else {
//               const onTxSuccess = makeCombinedCallback(
//                 defaultConfig,
//                 config,
//                 'onTxSuccess'
//               )
//               onTxSuccess(param, wallet.address)
//               toast.success(
//                 <div>
//                   <p>Success {summary}!</p>
//                   {blockExplorerLink}
//                 </div>
//               )
//             }
//             unsub()
//           }
//         }
//       )
//     } catch (e) {
//       toast.error((e as any).message)
//       reject(e)
//     }
//   })
// }
