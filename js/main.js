import { supabase } from './supabase.js'

// 导出获取用户函数
export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// 加载公共组件
async function loadComponent(elementId, filePath) {
  try {
    const response = await fetch(filePath)
    const html = await response.text()
    document.getElementById(elementId).innerHTML = html
  } catch (err) {
    console.warn(`加载组件失败: ${filePath}`, err)
  }
}

// 更新导航栏中的用户信息
async function updateUserDisplay() {
  const user = await getCurrentUser()
  const displaySpan = document.getElementById('userDisplay')
  if (!displaySpan) return
  if (user) {
    // 从 user_metadata 或 profiles 表获取用户名
    const username = user.user_metadata?.username || user.email
    displaySpan.textContent = `你好, ${username}`
  } else {
    displaySpan.textContent = ''
  }
}

// 登出功能
async function setupLogout() {
  const logoutBtn = document.getElementById('logoutBtn')
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      await supabase.auth.signOut()
      window.location.href = 'entry.html'
    })
  }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', async () => {
  // 加载头部和底部（如果页面中有对应的占位符）
  if (document.getElementById('header-placeholder')) {
    await loadComponent('header-placeholder', 'components/header.html')
  }
  if (document.getElementById('footer-placeholder')) {
    await loadComponent('footer-placeholder', 'components/footer.html')
  }

  // 更新用户显示并设置登出
  await updateUserDisplay()
  await setupLogout()
})