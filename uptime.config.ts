import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "果园服务状态监控",
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
    { link: 'https://blog.lyc8503.net/', label: '博客' },
    { link: 'mailto:me@lyc8503.net', label: '联系我', highlight: true },
  ],
  // 按地理位置分组
  group: {
    '🌏 上海节点': ['orchard_website_sh', 'orchard_tv_sh', 'cloudflare_sh', 'cat_sh', 'cdn00_sh', 'cdn01_sh', 'cdn02_sh'],
    '🇭🇰 香港节点': ['orchard_website_hk', 'orchard_tv_hk', 'cloudflare_hk', 'cat_hk', 'cdn00_hk', 'cdn01_hk', 'cdn02_hk']
  }
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    // 上海节点监控配置
    // 果园官网 - 上海
    {
      id: 'orchard_website_sh',
      name: '果园官网 (上海)',
      method: 'GET',
      target: 'https://guoyuangzs.dpdns.org',
      tooltip: '果园的新域名官方网站 - 上海节点',
      statusPageLink: 'https://guoyuangzs.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // 果园影视站 - 上海
    {
      id: 'orchard_tv_sh',
      name: '果园影视 (上海)',
      method: 'GET',
      target: 'https://tv.guoyuangzs.dpdns.org',
      tooltip: '小黄云部署的影视网站 - 上海节点',
      statusPageLink: 'https://tv.guoyuangzs.dpdns.org',
      expectedCodes: [200],
      timeout: 15000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // 小黄云状态 - 上海
    {
      id: 'cloudflare_sh',
      name: '小黄云状态 (上海)',
      method: 'GET',
      target: 'https://www.cloudflare.com',
      tooltip: 'Cloudflare全球服务状态 - 上海节点',
      statusPageLink: 'https://www.cloudflare.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // 小猫状态 - 上海
    {
      id: 'cat_sh',
      name: '小猫服务 (上海)',
      method: 'GET',
      target: 'https://github.com',
      tooltip: '小猫服务 - 上海节点',
      statusPageLink: 'https://github.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // CDN00状态 - 上海
    {
      id: 'cdn00_sh',
      name: 'CDN00状态 (上海)',
      method: 'GET',
      target: '172.67.148.172',
      tooltip: '移动电信联通服务 - 上海节点',
      statusPageLink: '',
      expectedCodes: [200],
      timeout: 5000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // CDN01状态 - 上海
    {
      id: 'cdn01_sh',
      name: 'CDN01状态 (上海)',
      method: 'GET',
      target: '104.16.160.78',
      tooltip: '电信联通服务 - 上海节点',
      statusPageLink: '',
      expectedCodes: [200],
      timeout: 5000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // CDN02状态 - 上海
    {
      id: 'cdn02_sh',
      name: 'CDN02状态 (上海)',
      method: 'GET',
      target: '104.16.160.91',
      tooltip: '联通电信服务 - 上海节点',
      statusPageLink: '',
      expectedCodes: [200],
      timeout: 5000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },

    // 香港节点监控配置
    // 果园官网 - 香港
    {
      id: 'orchard_website_hk',
      name: '果园官网 (香港)',
      method: 'GET',
      target: 'https://guoyuangzs.dpdns.org',
      tooltip: '果园的新域名官方网站 - 香港节点',
      statusPageLink: 'https://guoyuangzs.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // 果园影视站 - 香港
    {
      id: 'orchard_tv_hk',
      name: '果园影视 (香港)',
      method: 'GET',
      target: 'https://tv.guoyuangzs.dpdns.org',
      tooltip: '小黄云部署的影视网站 - 香港节点',
      statusPageLink: 'https://tv.guoyuangzs.dpdns.org',
      expectedCodes: [200],
      timeout: 15000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // 小黄云状态 - 香港
    {
      id: 'cloudflare_hk',
      name: '小黄云状态 (香港)',
      method: 'GET',
      target: 'https://www.cloudflare.com',
      tooltip: 'Cloudflare全球服务状态 - 香港节点',
      statusPageLink: 'https://www.cloudflare.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // 小猫状态 - 香港
    {
      id: 'cat_hk',
      name: '小猫服务 (香港)',
      method: 'GET',
      target: 'https://github.com',
      tooltip: '小猫服务 - 香港节点',
      statusPageLink: 'https://github.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // CDN00状态 - 香港
    {
      id: 'cdn00_hk',
      name: 'CDN00状态 (香港)',
      method: 'GET',
      target: '172.67.148.172',
      tooltip: '移动电信联通服务 - 香港节点',
      statusPageLink: '',
      expectedCodes: [200],
      timeout: 5000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // CDN01状态 - 香港
    {
      id: 'cdn01_hk',
      name: 'CDN01状态 (香港)',
      method: 'GET',
      target: '104.16.160.78',
      tooltip: '电信联通服务 - 香港节点',
      statusPageLink: '',
      expectedCodes: [200],
      timeout: 5000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // CDN02状态 - 香港
    {
      id: 'cdn02_hk',
      name: 'CDN02状态 (香港)',
      method: 'GET',
      target: '104.16.160.91',
      tooltip: '联通电信服务 - 香港节点',
      statusPageLink: '',
      expectedCodes: [200],
      timeout: 5000,
      headers: { 'User-Agent': 'Uptimeflare' }
    }
  ],
  notification: {
    timeZone: 'Asia/Shanghai',
    // 如需通知请取消以下注释并填写真实信息
    // appriseApiServer: '你的通知服务器地址',
    // recipientUrl: '你的通知渠道URL'
  },
  callbacks: {
    onStatusChange: async (env, monitor, isUp, timeIncidentStart, timeNow, reason) => {
      // 状态变更时的自定义逻辑（可选）
    },
    onIncident: async (env, monitor, timeIncidentStart, timeNow, reason) => {
      // 故障持续时的自定义逻辑（可选）
    }
  }
}

// 维护计划配置（示例）
const maintenances: MaintenanceConfig[] = [
  // {
  //   monitors: ['orchard_website_sh'],
  //   title: '官网维护',
  //   body: '服务器升级维护',
  //   start: '2024-06-01T00:00:00+08:00',
  //   end: '2024-06-01T02:00:00+08:00'
  // }
]

export { pageConfig, workerConfig, maintenances }
