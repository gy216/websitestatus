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
    '🌏 上海节点': [
      'orchard_website_sh', 
      'orchard_tv_sh', 
      'orchard_sub_sh', 
      'ai_server_sh', 
      'bing_wallpaper_sh', 
      'status_sh', 
      'cloudflare_sh', 
      'cat_sh', 
      'github_pages_sh'
    ],
    '🇭🇰 香港节点': [
      'orchard_website_hk', 
      'orchard_tv_hk', 
      'orchard_sub_hk', 
      'ai_server_hk', 
      'bing_wallpaper_hk', 
      'status_hk', 
      'cloudflare_hk', 
      'cat_hk', 
      'github_pages_hk'
    ]
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
    // 果园副网站 - 上海
    {
      id: 'orchard_sub_sh',
      name: '果园副站 (上海)',
      method: 'GET',
      target: 'https://guoyuancode.dpdns.org',
      tooltip: 'GZW副站 - 上海节点',
      statusPageLink: 'https://guoyuancode.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // AI服务器状态 - 上海
    {
      id: 'ai_server_sh',
      name: 'AI服务器状态 (上海)',
      method: 'GET',
      target: 'https://openrouter.ai/',
      tooltip: 'Openroute服务器状态 - 上海节点',
      statusPageLink: 'https://openrouter.ai/',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // Bing壁纸服务器状态 - 上海
    {
      id: 'bing_wallpaper_sh',
      name: 'Bing壁纸服务器状态 (上海)',
      method: 'GET',
      target: 'https://bing.ee123.net/img/rand',
      tooltip: '第三方壁纸服务器状态 - 上海节点',
      statusPageLink: 'https://bing.ee123.net/img/rand',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // 状态检查站状态 - 上海
    {
      id: 'status_sh',
      name: '状态检查站状态 (上海)',
      method: 'GET',
      target: 'https://status.guoyuangzs.dpdns.org/',
      tooltip: '本网站的服务器运行状态 - 上海节点',
      statusPageLink: 'https://status.guoyuangzs.dpdns.org/',
      expectedCodes: [200],
      timeout: 10000,
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
    // GitHub pages状态 - 上海
    {
      id: 'github_pages_sh',
      name: 'GitHub pages状态 (上海)',
      method: 'GET',
      target: 'https://github.io',
      tooltip: 'GitHub pages服务器 - 上海节点',
      statusPageLink: 'https://github.io',
      expectedCodes: [200],
      timeout: 10000,
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
    // 果园副网站 - 香港
    {
      id: 'orchard_sub_hk',
      name: '果园副站 (香港)',
      method: 'GET',
      target: 'https://guoyuancode.dpdns.org',
      tooltip: 'GZW副站 - 香港节点',
      statusPageLink: 'https://guoyuancode.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // AI服务器状态 - 香港
    {
      id: 'ai_server_hk',
      name: 'AI服务器状态 (香港)',
      method: 'GET',
      target: 'https://openrouter.ai/',
      tooltip: 'Openroute服务器状态 - 香港节点',
      statusPageLink: 'https://openrouter.ai/',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // Bing壁纸服务器状态 - 香港
    {
      id: 'bing_wallpaper_hk',
      name: 'Bing壁纸服务器状态 (香港)',
      method: 'GET',
      target: 'https://bing.ee123.net/img/rand',
      tooltip: '第三方壁纸服务器状态 - 香港节点',
      statusPageLink: 'https://bing.ee123.net/img/rand',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // 状态检查站状态 - 香港
    {
      id: 'status_hk',
      name: '状态检查站状态 (香港)',
      method: 'GET',
      target: 'https://status.guoyuangzs.dpdns.org/',
      tooltip: '本网站的服务器运行状态 - 香港节点',
      statusPageLink: 'https://status.guoyuangzs.dpdns.org/',
      expectedCodes: [200],
      timeout: 10000,
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
    // GitHub pages状态 - 香港
    {
      id: 'github_pages_hk',
      name: 'GitHub pages状态 (香港)',
      method: 'GET',
      target: 'https://github.io',
      tooltip: 'GitHub pages服务器 - 香港节点',
      statusPageLink: 'https://github.io',
      expectedCodes: [200],
      timeout: 10000,
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
