import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "果园服务状态监控",
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
    { link: 'https://blog.lyc8503.net/', label: '博客' },
    { link: 'mailto:me@lyc8503.net', label: '联系我', highlight: true },
  ],
  // 分组配置（按服务类型）
  group: {
    '🌐 官方网站': ['orchard_website', 'orchard_tv'],
    '🛡️ 基础设施': ['cloudflare_status']
  },
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    // 果园Dpdns官网监控
    {
      id: 'orchard_website',
      name: '果园官网',
      method: 'GET',
      target: 'https://guoyuangzs.dpdns.org',
      tooltip: '果园的新域名官方网站',
      statusPageLink: 'https://guoyuangzs.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare'
      },
      // 添加关键词检查（可选）
      responseKeyword: '<title>', // 检查页面是否有标题标签
      responseForbiddenKeyword: '502 Bad Gateway'
    },
    
    // 果园影视站监控
    {
      id: 'orchard_tv',
      name: '果园影视',
      method: 'GET',
      target: 'https://tv.guoyuangzs.dpdns.org',
      tooltip: '小黄云部署的影视网站',
      statusPageLink: 'https://tv.guoyuangzs.dpdns.org',
      expectedCodes: [200],
      timeout: 15000, // 视频站可能需要更长时间
      headers: {
        'User-Agent': 'Uptimeflare'
      },
      // 特别检查影视站常见错误
      responseForbiddenKeyword: '404 Not Found'
    },
    
    // Cloudflare状态监控（简化版）
    {
      id: 'cloudflare_status',
      name: '小黄云状态',
      method: 'GET',
      target: 'https://www.cloudflare.com',
      tooltip: 'Cloudflare全球服务状态',
      statusPageLink: 'https://www.cloudflare.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare'
      },
      // Cloudflare有特定状态关键词
      responseKeyword: 'Cloudflare',
      responseForbiddenKeyword: 'Error'
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
