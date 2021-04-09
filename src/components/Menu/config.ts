import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.demeterfi.com/#/swap?inputCurrency=BNB&outputCurrency=0x82378845b58f0a1406C34Ecf754b75A36C2fE1Bb',
        newTab: true,
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.demeterfi.com/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x82378845b58f0a1406C34Ecf754b75A36C2fE1Bb',
        newTab: true,
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Silos',
    icon: 'PoolIcon',
    href: '/silos',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0x8e8538c75f273ab2df6adeecd3622a9c314fccf3',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/demeter-finance',
  //     },
  //   ],
  // },
  // {
  //   label: 'Listing',
  //   icon: 'LayerIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://demeterfi-swap.firebaseapp.com/#/swap?inputCurrency=BNB&outputCurrency=0x82378845b58f0a1406C34Ecf754b75A36C2fE1Bb',
  //       newTab: true,
  //     },
  //     // {
  //     //   label: 'Resfinex',
  //     //   href: 'https://trade.resfinex.com/trade/DMTR_USDT',
  //     //   newTab: true,
  //     // },
  //     // {
  //     //   label: 'CoinGecko',
  //     //   href: 'https://www.coingecko.com/en/coins/demeter-finance',
  //     //   newTab: true,
  //     // },
  //     // {
  //     //   label: 'Coinpaprika',
  //     //   href: 'https://coinpaprika.com/coin/sishi-sishi-token/',
  //     //   newTab: true,
  //     // },
  //   ],
  // },
  // {
  //   label: 'Audit',
  //   icon: 'AuditIcon',
  //   href:'https://docs.demeterfi.com/security/audit',
  //   newTab: true,
  // },
  // {
  //   label: 'Governance',
  //   icon: 'GroupsIcon',
  //   href:'https://snapshot.org/#/sishi.eth',
  //   newTab: true,
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/demeter-finance/',
        newTab: true,
      },
      {
        label: 'Docs',
        href: 'https://docs.demeterfi.com',
        newTab: true,
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@DemeterFi',
        newTab: true,
      },
      // {
      //   label: 'Publish0x',
      //   href: 'https://www.publish0x.com/demeter-finance',
      //   newTab: true,
      // },
    ],
  },
]

export const configCNLang: MenuEntry[] = [
  {
    label: '主页',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: '交易',
    icon: 'TradeIcon',
    items: [
      {
        label: '币币交易',
        href: 'https://exchange.demeterfi.com/#/swap?inputCurrency=BNB&outputCurrency=0x82378845b58f0a1406C34Ecf754b75A36C2fE1Bb',
        newTab: true,
      },
      {
        label: '流动性池',
        href: 'https://exchange.demeterfi.com/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x82378845b58f0a1406C34Ecf754b75A36C2fE1Bb',
        newTab: true,
      },
    ],
  },
  {
    label: '农场',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: '筒仓',
    icon: 'PoolIcon',
    href: '/silos',
  },
  {
    label: '更多',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/demeter-finance/',
        newTab: true,
      },
      {
        label: '文档',
        href: 'https://docs.demeterfi.com',
        newTab: true,
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@DemeterFi',
        newTab: true,
      },
    ],
  },
]

export default config
