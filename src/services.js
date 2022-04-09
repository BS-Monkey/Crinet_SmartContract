import blocknativeLogo from './asset/logo.png'
import blocknativeIcon from './asset/Crinet Logo_Icon_purpol.png'

import { init } from '@web3-onboard/react'
import injectedModule, {ProviderLabel} from '@web3-onboard/injected-wallets'
import ledgerModule from '@web3-onboard/ledger'
import walletConnectModule from '@web3-onboard/walletconnect'
import walletLinkModule from '@web3-onboard/walletlink'
import portisModule from '@web3-onboard/portis'
import fortmaticModule from '@web3-onboard/fortmatic'
import torusModule from '@web3-onboard/torus'
import keepkeyModule from '@web3-onboard/keepkey'
import gnosisModule from '@web3-onboard/gnosis'


const injected = injectedModule({
  filter: {
    [ProviderLabel.Coinbase]: false,
    [ProviderLabel.MetaMask]: true,
    [ProviderLabel.Binance]: true,
  }
})

const walletLink = walletLinkModule()
const walletConnect = walletConnectModule()

const portis = portisModule({
  apiKey: 'b2b7586f-2b1e-4c30-a7fb-c2d1533b153b'
})

const fortmatic = fortmaticModule({
  apiKey: 'pk_test_886ADCAB855632AA'
})

const torus = torusModule()
const ledger = ledgerModule()
const keepkey = keepkeyModule()
const gnosis = gnosisModule()

export const initWeb3Onboard = init({
  wallets: [
    injected,
    walletConnect,
    ledger,
    fortmatic,
    walletLink,
    gnosis,
    keepkey,
    portis,
    torus
  ],
  chains: [
    {
      id: '0x38',
      token: 'BNB',
      label: 'Binance Smart Chain',
      rpcUrl: 'https://bsc-dataseed.binance.org/'
    }
  ],
  appMetadata: {
    name: 'Crinet ICO Platform',
    icon: blocknativeIcon,
    logo: blocknativeLogo,
    description: 'Crinet ICO-Presale Platform',
    recommendedInjectedWallets: [
      { name: 'MetaMask', url: 'https://metamask.io' }
    ]
  }
})