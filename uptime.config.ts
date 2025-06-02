import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "果园服务状态监控",
  links: [
    { link: 'https://github.com/gy216', label: 'GitHub' },
    { link: 'https://guoyuangzs.dpdns.org/', label: 'Back to Index website' },
    { link: 'https://guoyuangzs.dpdns.org/', label: '联系我', highlight: true },
  ],
  group: {
    '🌐 所有监控': [
      'orchard_website',
      'orchard_tv',
      'orchard_sub',
      'orchard_tv_gzw',
      'orchard_duckduckgo',
      'orchard_pypi',
      'ai_server',
      'bing_wallpaper',
      'status',
      'cloudflare',
      'github',
      'github_pages',
      'github_actions'
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
      expectedCodes: [200], // 仅检查状态码
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
      timeout: 15000, // 视频站可能需要更长时间
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
	// 镜像Duckduckgo
    {
      id: 'orchard_duckduckgo',
      name: '镜像Duckduckgo',
      method: 'GET',
      target: 'https://duckduckgo.guoyuangzs.dpdns.org',
      tooltip: '果园用小黄云部署的镜像Duckduckgo',
      statusPageLink: 'https://duckduckgo.guoyuangzs.dpdns.org',
      expectedCodes: [200],
      timeout: 15000,
      headers: { 'User-Agent': 'Uptimeflare' }
    },
    // 镜像Pypi
    {
      id: 'orchard_pypi',
      name: '镜像Pypi',
      method: 'GET',
      target: 'https://pypi.guoyuangzs.dpdns.org',
      tooltip: '果园用小黄云部署的镜像pypi',
      statusPageLink: 'https://pypi.guoyuangzs.dpdns.org',
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
      name: 'Bing壁纸服务器',
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
      name: '状态检查站',
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
      name: 'GitHub Pages',
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
      name: 'GitHub Actions状态',
      method: 'GET',
      target: 'https://github.com/gy216/websitestatus',
      tooltip: 'GitHub websitestatus actions服务器',
      statusPageLink: 'https://github.com/gy216/websitestatus',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' }
    }
  ],
  notification: {
    timeZone: 'Asia/Shanghai'
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
  // 可在此添加维护计划
]

export { pageConfig, workerConfig, maintenances }
