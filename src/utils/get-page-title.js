import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Element Admin'

// 向外暴露一个设置页面标题的方法
export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}