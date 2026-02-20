import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nqqbtjthryxlwfylfcvd.supabase.co'
const supabaseServiceKey = 'sb_publishable_g0DxElg04wma-A5xfVFMqw_hawAwKn-'

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function createUser() {
  const { data, error } = await supabase.auth.admin.createUser({
    email: 'testuser@example.com',
    password: '123456',
    email_confirm: true  // 跳过邮箱验证
  })
  if (error) {
    console.error('创建失败:', error)
  } else {
    console.log('创建成功:', data)
  }
}

createUser()