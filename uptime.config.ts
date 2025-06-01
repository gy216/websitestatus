import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "果园服务状态监控",
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
    { link: 'https://blog.lyc8503.net/', label: '博客' },
    { link: 'mailto:me@lyc8503.net', label: '联系我', highlight: true },
  ],
  // 单节点监控，不进行分组
  group: {
    '🌐 所有监控': [
      'orchard_website',
      'orchard_tv',
      'orchard_sub',
      'orchard_tv_gzw',
      'ai_server',
      'bing_wallpaper',
      'status',
      'cloudflare',
      'github',
      'github_pages',
      'github_actions',
      'deepseek'
    ]
  }
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    // 果园官网
    {
      id: 'orchard_website',
      name: '果园官网',
      method: 'GET',
      target: 'https://guoyuangzs.dpdns.org',
      tooltip: '果园的新域名官方网站',
      statusPageLink: 'https://guoyuangzs.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // 果园影视站
    {
      id: 'orchard_tv',
      name: '果园影视',
      method: 'GET',
      target: 'https://tv.guoyuangzs.dpdns.org',
      tooltip: '小黄云部署的影视网站',
      statusPageLink: 'https://tv.guoyuangzs.dpdns.org',
      expectedCodes: [200],
      timeout: 15000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // 果园副网站
    {
      id: 'orchard_sub',
      name: '果园副站',
      method: 'GET',
      target: 'https://guoyuancode.dpdns.org',
      tooltip: 'GZW副站',
      statusPageLink: 'https://guoyuancode.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // GZW的影视站
    {
      id: 'orchard_tv_gzw',
      name: 'GZW影视站',
      method: 'GET',
      target: 'https://tv.guoyuancode.dpdns.org',
      tooltip: 'GZW用小黄云部署的影视网站',
      statusPageLink: 'https://tv.guoyuancode.dpdns.org',
      expectedCodes: [200],
      timeout: 15000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // AI服务器状态
    {
      id: 'ai_server',
      name: 'AI服务器状态',
      method: 'GET',
      target: 'https://openrouter.ai/',
      tooltip: 'Openroute服务器状态',
      statusPageLink: 'https://openrouter.ai/',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // Bing壁纸服务器状态
    {
      id: 'bing_wallpaper',
      name: 'Bing壁纸服务器状态',
      method: 'GET',
      target: 'https://bing.ee123.net/img/rand',
      tooltip: '第三方壁纸服务器状态',
      statusPageLink: 'https://bing.ee123.net/img/rand',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // 状态检查站状态
    {
      id: 'status',
      name: '状态检查站状态',
      method: 'GET',
      target: 'https://status.guoyuangzs.dpdns.org/',
      tooltip: '本网站的服务器运行状态',
      statusPageLink: 'https://status.guoyuangzs.dpdns.org/',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // 小黄云状态
    {
      id: 'cloudflare',
      name: '小黄云状态',
      method: 'GET',
      target: 'https://www.cloudflare.com',
      tooltip: 'Cloudflare全球服务状态',
      statusPageLink: 'https://www.cloudflare.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // Github状态
    {
      id: 'github',
      name: 'Github状态',
      method: 'GET',
      target: 'https://github.com',
      tooltip: '小猫服务',
      statusPageLink: 'https://github.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // GitHub pages状态
    {
      id: 'github_pages',
      name: 'GitHub pages状态',
      method: 'GET',
      target: 'https://github.io',
      tooltip: 'GitHub pages服务器-网站源服务器',
      statusPageLink: 'https://github.io',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // 状态检查站源actions服务状态
    {
      id: 'github_actions',
      name: '状态检查站源actions服务状态',
      method: 'GET',
      target: 'https://github.com/gy216/websitestatus',
      tooltip: 'GitHub websitestatus actions服务器',
      statusPageLink: 'https://github.com/gy216/websitestatus',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // Deepseek状态
    {
      id: 'deepseek',
      name: 'Deepseek状态',
      method: 'GET',
      target: 'https://chat.deepseek.com/',
      tooltip: 'Deepseek服务器状态',
      statusPageLink: 'https://chat.deepseek.com/',
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
  //   monitors: ['orchard_website'],
  //   title: '官网维护',
  //   body: '服务器升级维护',
  //   start: '2024-06-01T00:00:00+08:00',
  //   end: '2024-06-01T02:00:00+08:00'
  // }
]

export { pageConfig, workerConfig, maintenances }
