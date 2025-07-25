// 多语言配置文件
export const LANGUAGES = {
  'zh-CN': {
    code: 'zh-CN',
    name: '简体中文',
    nativeName: '简体中文'
  },
  'zh-TW': {
    code: 'zh-TW', 
    name: '繁體中文',
    nativeName: '繁體中文'
  },
  'en': {
    code: 'en',
    name: 'English',
    nativeName: 'English'
  }
};

export const translations = {
  'zh-CN': {
    // 首页
    'app.title': '绘本创建器',
    'home.title': '绘本创建器',
    'home.createBook': '📖 创建绘本',
    'home.subtitle': '轻松生成专属教学绘本',
    'home.description': '为老师和家长量身定制',
    'home.language': '语言',
    
    // 角色设置页
    'character.title': '角色设置',
    'character.subtitle': '设计你的绘本主角',
    'character.name': '角色姓名',
    'character.name.placeholder': '请输入角色姓名（可选，留空将随机生成）',
    'character.age': '角色年龄',
    'character.age.placeholder': '请输入年龄',
    'character.age.note': '适合年龄：3-12岁',
    'character.identity': '角色身份',
    'character.identity.human': '人类',
    'character.identity.animal': '动物',
    'character.gender': '角色性别',
    'character.gender.boy': '男孩',
    'character.gender.girl': '女孩',
    'character.gender.any': '不限',
    'character.advanced': '自定义角色形象',
    'character.advanced.expand': '展开',
    'character.advanced.collapse': '收起',
    'character.ai.title': '智能角色形象设计',
    'character.ai.description': '描述您想要的角色特征，AI将帮您完善关键细节。支持中文、英文、繁体输入，会用相同语言回复（约50字/词）',
    'character.ai.input.label': '角色特征描述',
    'character.ai.input.placeholder': '中文：一个穿着蓝色毛衣的小男孩，有着卷曲的棕色头发｜English: A boy with blue sweater and curly hair｜繁體：穿著藍色毛衣的男孩',
    'character.ai.input.note': '💡 支持中文、英文、繁体中文输入，AI会用相同语言回复。您可以描述任何特征，即使不完整也没关系！',
    'character.ai.optimize': '智能完善形象',
    'character.ai.optimizing': 'AI完善中...',
    'character.ai.result.label': '完善后的角色形象',
    'character.ai.result.note': '✨ AI已帮您完善角色形象描述，保持您使用的语言。系统会在生成图像时自动优化为最佳格式',
    'character.ai.clear': '清除重新开始',
    'character.ai.reoptimize': '重新完善',
    'character.ai.reoptimizing': '重新完善中...',
    'character.step': '步骤 1/3',
    'character.next': '下一步',
    'character.back': '返回首页',
    
    // 故事设置页
    'story.title': '故事设置',
    'story.subtitle': '为你的绘本构思情节',
    'story.theme': '故事主题',
    'story.theme.placeholder': '请输入故事主题（如：友谊、勇敢、分享）',
    'story.setting': '故事场景',
    'story.setting.placeholder': '描述故事发生的地点和环境',
    'story.plot': '故事情节',
    'story.plot.placeholder': '简单描述你希望的故事发展（可选）',
    'story.next': '下一步：教学内容',
    'story.back': '上一步',
    
    // 故事设置页（新增）
    'story.type': '故事类型',
    'story.type.placeholder': '请选择故事类型（可选，留空将随机选择）',
    'story.type.description': '选择适合的故事主题，帮助孩子学习和成长',
    'story.type.adventure': '冒险故事',
    'story.type.growth': '成长故事',
    'story.type.friendship': '友情故事',
    'story.type.lifeSkills': '生活技能',
    'story.pages': '故事页数',
    'story.pages.count': '故事页数：{count} 页',
    'story.pages.min': '4页',
    'story.pages.mid': '7页',
    'story.pages.max': '10页',
    'story.pages.description': '推荐6-8页，适合孩子的注意力时长',
    'story.preview': '故事预览',
    'story.preview.type': '故事类型：{type}',
    'story.preview.length': '故事长度：{pages} 页',
    'story.preview.duration': '预计阅读时间：{minutes} 分钟',
    'story.preview.random': '随机选择',
    'story.step': '步骤 2/3',
    
    // 教学内容页
    'content.title': '教学内容设置',
    'content.subtitle': '设置绘本的教育目标',
    'content.mode': '内容模式',
    'content.mode.custom': '自定义主题',
    'content.mode.random': '随机主题',
    'content.topic': '教学主题',
    'content.topic.placeholder': '请输入教学主题（如：学会分享、培养友谊）',
    'content.target': '目标受众',
    'content.target.placeholder': '描述目标读者群体（如：3-6岁儿童）',
    'content.next': '开始生成绘本',
    'content.back': '上一步',
    
    // 教学内容页（详细）
    'content.topics.shareAndCooperate': '学会分享与合作',
    'content.topics.braveAndConfident': '培养勇敢和自信',
    'content.topics.friendship': '理解友谊的重要性',
    'content.topics.problemSolving': '学习解决问题的方法',
    'content.topics.responsibility': '培养责任感',
    'content.topics.gratitudeAndKindness': '学会感恩和善良',
    'content.topics.honesty': '理解诚实的价值',
    'content.topics.timeManagement': '学习时间管理',
    'content.topics.creativity': '培养创造力和想象力',
    'content.topics.respect': '学会尊重他人',
    'content.status.preparing': '正在准备生成参数...',
    'content.status.customContent': '正在准备自定义教学内容...',
    'content.status.generating': '正在调用通义千问生成故事内容...',
    'content.status.saving': '正在保存生成的内容...',
    'content.status.complete': '生成完成！',
    'content.status.failed': '生成失败',
    'content.status.waiting': '请稍候，我们正在为您创造一个精彩的故事',
    'content.status.frequencyLimit': '❌ API频率限制：已进行8次重试仍失败，请等待15-30分钟后重试',
    'content.status.quotaExceeded': '❌ API配额不足：请检查通义千问账户余额并充值',
    'content.status.networkError': '❌ 网络连接异常：请检查网络连接状态',
    'content.status.unauthorized': '❌ API密钥无效：请检查API密钥配置',
    'content.status.generalError': '❌ 生成失败：请稍后重试或检查服务状态',
    'content.mode.custom.active': '自定义教学内容模式',
    'content.mode.random.active': '智能随机生成模式',
    'content.mode.custom.description': '您已开启自定义模式，AI将分析您的描述并生成相应的教学内容',
    'content.mode.default.description': '默认使用AI智能生成教学内容，或从下方主题示例中选择',
    'content.switch.on': '开启',
    'content.switch.off': '关闭',
    'content.mode.custom.title': '自定义模式已激活',
    'content.mode.smart.title': '智能生成模式',
    'content.custom.placeholder': '请详细描述您希望绘本传达的教学内容或价值观，例如：\n• 学会分享玩具和食物\n• 培养面对困难的勇气\n• 理解友谊的珍贵和维护\n• 学习基本的礼貌用语\n• 培养独立自主的能力...',
    'content.topics.selected': '已选择"{topic}"主题。点击其他主题可以切换，或再次点击取消选择。',
    'content.topics.instructions': '点击任何主题示例来选择，或保持不选择让系统智能随机生成。',
    'content.topics.selectedLabel': '已选择主题',
    
    // 预览页
    'preview.title': '绘本预览',
    'preview.generating': '正在生成绘本...',
    'preview.regenerate': '重新生成',
    'preview.download': '下载PDF',
    'preview.back': '返回编辑',
    'preview.page': '第 {page} 页',
    
    // 通用按钮
    'button.confirm': '确认',
    'button.cancel': '取消',
    'button.save': '保存',
    'button.edit': '编辑',
    'button.delete': '删除',
    'button.close': '关闭',
    
    // 错误信息
    'error.required': '此字段为必填项',
    'error.network': '网络连接失败，请重试',
    'error.generation': '生成失败，请重试',
    'error.invalid.age': '请输入有效的年龄',
    
    // 成功信息
    'success.saved': '保存成功',
    'success.generated': '生成成功',
    
    // 加载状态
    'loading.generating': '正在生成...',
    'loading.saving': '正在保存...',
    'loading.loading': '加载中...'
  },
  
  'zh-TW': {
    // 首頁
    'app.title': '繪本創建器',
    'home.title': '繪本創建器', 
    'home.createBook': '📖 創建繪本',
    'home.subtitle': '輕鬆生成專屬教學繪本',
    'home.description': '為老師和家長量身定製',
    'home.language': '語言',
    
    // 角色設置頁
    'character.title': '角色設置',
    'character.subtitle': '設計你的繪本主角',
    'character.name': '角色姓名',
    'character.name.placeholder': '請輸入角色姓名（可選，留空將隨機生成）',
    'character.age': '角色年齡',
    'character.age.placeholder': '請輸入年齡',
    'character.age.note': '適合年齡：3-12歲',
    'character.identity': '角色身份',
    'character.identity.human': '人類',
    'character.identity.animal': '動物',
    'character.gender': '角色性別',
    'character.gender.boy': '男孩',
    'character.gender.girl': '女孩',
    'character.gender.any': '不限',
    'character.advanced': '自定義角色形象',
    'character.advanced.expand': '展開',
    'character.advanced.collapse': '收起',
    'character.ai.title': '智能角色形象設計',
    'character.ai.description': '描述您想要的角色特徵，AI將幫您完善關鍵細節。支持中文、英文、繁體輸入，會用相同語言回覆（約50字/詞）',
    'character.ai.input.label': '角色特徵描述',
    'character.ai.input.placeholder': '中文：一個穿著藍色毛衣的小男孩，有著卷曲的棕色頭髮｜English: A boy with blue sweater and curly hair｜繁體：穿著藍色毛衣的男孩',
    'character.ai.input.note': '💡 支持中文、英文、繁體中文輸入，AI會用相同語言回覆。您可以描述任何特徵，即使不完整也沒關係！',
    'character.ai.optimize': '智能完善形象',
    'character.ai.optimizing': 'AI完善中...',
    'character.ai.result.label': '完善後的角色形象',
    'character.ai.result.note': '✨ AI已幫您完善角色形象描述，保持您使用的語言。系統會在生成圖像時自動優化為最佳格式',
    'character.ai.clear': '清除重新開始',
    'character.ai.reoptimize': '重新完善',
    'character.ai.reoptimizing': '重新完善中...',
    'character.step': '步驟 1/3',
    'character.next': '下一步',
    'character.back': '返回首頁',
    
    // 故事設置頁
    'story.title': '故事設置',
    'story.subtitle': '為你的繪本構思情節',
    'story.theme': '故事主題',
    'story.theme.placeholder': '請輸入故事主題（如：友誼、勇敢、分享）',
    'story.setting': '故事場景',
    'story.setting.placeholder': '描述故事發生的地點和環境',
    'story.plot': '故事情節',
    'story.plot.placeholder': '簡單描述你希望的故事發展（可選）',
    'story.next': '下一步：教學內容',
    'story.back': '上一步',
    
    // 故事設置頁（新增）
    'story.type': '故事類型',
    'story.type.placeholder': '請選擇故事類型（可選，留空將隨機選擇）',
    'story.type.description': '選擇適合的故事主題，幫助孩子學習和成長',
    'story.type.adventure': '冒險故事',
    'story.type.growth': '成長故事',
    'story.type.friendship': '友情故事',
    'story.type.lifeSkills': '生活技能',
    'story.pages': '故事頁數',
    'story.pages.count': '故事頁數：{count} 頁',
    'story.pages.min': '4頁',
    'story.pages.mid': '7頁',
    'story.pages.max': '10頁',
    'story.pages.description': '推薦6-8頁，適合孩子的注意力時長',
    'story.preview': '故事預覽',
    'story.preview.type': '故事類型：{type}',
    'story.preview.length': '故事長度：{pages} 頁',
    'story.preview.duration': '預計閱讀時間：{minutes} 分鐘',
    'story.preview.random': '隨機選擇',
    'story.step': '步驟 2/3',
    
    // 教學內容頁
    'content.title': '教學內容設置',
    'content.subtitle': '設置繪本的教育目標',
    'content.mode': '內容模式',
    'content.mode.custom': '自定義主題',
    'content.mode.random': '隨機主題',
    'content.topic': '教學主題',
    'content.topic.placeholder': '請輸入教學主題（如：學會分享、培養友誼）',
    'content.target': '目標受眾',
    'content.target.placeholder': '描述目標讀者群體（如：3-6歲兒童）',
    'content.next': '開始生成繪本',
    'content.back': '上一步',
    
    // 教學內容頁（詳細）
    'content.topics.shareAndCooperate': '學會分享與合作',
    'content.topics.braveAndConfident': '培養勇敢和自信',
    'content.topics.friendship': '理解友誼的重要性',
    'content.topics.problemSolving': '學習解決問題的方法',
    'content.topics.responsibility': '培養責任感',
    'content.topics.gratitudeAndKindness': '學會感恩和善良',
    'content.topics.honesty': '理解誠實的價值',
    'content.topics.timeManagement': '學習時間管理',
    'content.topics.creativity': '培養創造力和想象力',
    'content.topics.respect': '學會尊重他人',
    'content.status.preparing': '正在準備生成參數...',
    'content.status.customContent': '正在準備自定義教學內容...',
    'content.status.generating': '正在調用通義千問生成故事內容...',
    'content.status.saving': '正在保存生成的內容...',
    'content.status.complete': '生成完成！',
    'content.status.failed': '生成失敗',
    'content.status.waiting': '請稍候，我們正在為您創造一個精彩的故事',
    'content.status.frequencyLimit': '❌ API頻率限制：已進行8次重試仍失敗，請等待15-30分鐘後重試',
    'content.status.quotaExceeded': '❌ API配額不足：請檢查通義千問帳戶餘額並充值',
    'content.status.networkError': '❌ 網路連接異常：請檢查網路連接狀態',
    'content.status.unauthorized': '❌ API密鑰無效：請檢查API密鑰配置',
    'content.status.generalError': '❌ 生成失敗：請稍後重試或檢查服務狀態',
    'content.mode.custom.active': '自定義教學內容模式',
    'content.mode.random.active': '智能隨機生成模式',
    'content.mode.custom.description': '您已開啟自定義模式，AI將分析您的描述並生成相應的教學內容',
    'content.mode.default.description': '默認使用AI智能生成教學內容，或從下方主題示例中選擇',
    'content.switch.on': '開啟',
    'content.switch.off': '關閉',
    'content.mode.custom.title': '自定義模式已啟用',
    'content.mode.smart.title': '智能生成模式',
    'content.custom.placeholder': '請詳細描述您希望繪本傳達的教學內容或價值觀，例如：\n• 學會分享玩具和食物\n• 培養面對困難的勇氣\n• 理解友誼的珍貴和維護\n• 學習基本的禮貌用語\n• 培養獨立自主的能力...',
    'content.topics.selected': '已選擇"{topic}"主題。點擊其他主題可以切換，或再次點擊取消選擇。',
    'content.topics.instructions': '點擊任何主題示例來選擇，或保持不選擇讓系統智能隨機生成。',
    'content.topics.selectedLabel': '已選擇主題',
    
    // 預覽頁
    'preview.title': '繪本預覽',
    'preview.generating': '正在生成繪本...',
    'preview.regenerate': '重新生成',
    'preview.download': '下載PDF',
    'preview.back': '返回編輯',
    'preview.page': '第 {page} 頁',
    
    // 通用按鈕
    'button.confirm': '確認',
    'button.cancel': '取消',
    'button.save': '保存',
    'button.edit': '編輯',
    'button.delete': '刪除',
    'button.close': '關閉',
    
    // 錯誤信息
    'error.required': '此字段為必填項',
    'error.network': '網絡連接失敗，請重試',
    'error.generation': '生成失敗，請重試',
    'error.invalid.age': '請輸入有效的年齡',
    
    // 成功信息
    'success.saved': '保存成功',
    'success.generated': '生成成功',
    
    // 加載狀態
    'loading.generating': '正在生成...',
    'loading.saving': '正在保存...',
    'loading.loading': '加載中...'
  },
  
  'en': {
    // Home Page
    'app.title': 'Picture Book Creator',
    'home.title': 'Picture Book Creator',
    'home.createBook': '📖 Create Book',
    'home.subtitle': 'Easily generate custom educational picture books',
    'home.description': 'Tailored for teachers and parents',
    'home.language': 'Language',
    
    // Character Setup Page
    'character.title': 'Character Setup',
    'character.subtitle': 'Design your picture book protagonist',
    'character.name': 'Character Name',
    'character.name.placeholder': 'Enter character name (optional, leave blank for random)',
    'character.age': 'Character Age',
    'character.age.placeholder': 'Enter age',
    'character.age.note': 'Suitable age: 3-12 years old',
    'character.identity': 'Character Identity',
    'character.identity.human': 'Human',
    'character.identity.animal': 'Animal',
    'character.gender': 'Character Gender',
    'character.gender.boy': 'Boy',
    'character.gender.girl': 'Girl',
    'character.gender.any': 'Any',
    'character.advanced': 'Custom Character Image',
    'character.advanced.expand': 'Expand',
    'character.advanced.collapse': 'Collapse',
    'character.ai.title': 'AI Character Image Design',
    'character.ai.description': 'Describe your desired character traits, AI will help you refine key details. Supports Chinese, English, Traditional Chinese input, will reply in the same language (about 50 characters/words)',
    'character.ai.input.label': 'Character Features Description',
    'character.ai.input.placeholder': 'Chinese: A boy wearing a blue sweater with curly brown hair | English: A boy with blue sweater and curly hair | Traditional: A boy wearing a blue sweater',
    'character.ai.input.note': '💡 Supports Chinese, English, Traditional Chinese input, AI will reply in the same language. You can describe any features, even if incomplete!',
    'character.ai.optimize': 'AI Enhance Image',
    'character.ai.optimizing': 'AI Enhancing...',
    'character.ai.result.label': 'Enhanced Character Image',
    'character.ai.result.note': '✨ AI has helped you enhance character image description, keeping your language. System will automatically optimize for best format when generating images',
    'character.ai.clear': 'Clear and Restart',
    'character.ai.reoptimize': 'Re-enhance',
    'character.ai.reoptimizing': 'Re-enhancing...',
    'character.step': 'Step 1/3',
    'character.next': 'Next',
    'character.back': 'Back to Home',
    
    // Story Setup Page
    'story.title': 'Story Setup',
    'story.subtitle': 'Create the plot for your picture book',
    'story.theme': 'Story Theme',
    'story.theme.placeholder': 'Enter story theme (e.g., friendship, courage, sharing)',
    'story.setting': 'Story Setting',
    'story.setting.placeholder': 'Describe where and when the story takes place',
    'story.plot': 'Story Plot',
    'story.plot.placeholder': 'Briefly describe your desired story development (optional)',
    'story.next': 'Next: Educational Content',
    'story.back': 'Previous',
    
    // Story Setup Page (New)
    'story.type': 'Story Type',
    'story.type.placeholder': 'Please select story type (optional, leave blank for random)',
    'story.type.description': 'Choose appropriate story theme to help children learn and grow',
    'story.type.adventure': 'Adventure Story',
    'story.type.growth': 'Growth Story',
    'story.type.friendship': 'Friendship Story',
    'story.type.lifeSkills': 'Life Skills',
    'story.pages': 'Story Pages',
    'story.pages.count': 'Story Pages: {count} pages',
    'story.pages.min': '4 pages',
    'story.pages.mid': '7 pages',
    'story.pages.max': '10 pages',
    'story.pages.description': 'Recommended 6-8 pages, suitable for children\'s attention span',
    'story.preview': 'Story Preview',
    'story.preview.type': 'Story Type: {type}',
    'story.preview.length': 'Story Length: {pages} pages',
    'story.preview.duration': 'Estimated Reading Time: {minutes} minutes',
    'story.preview.random': 'Random Selection',
    'story.step': 'Step 2/3',
    
    // Educational Content Page
    'content.title': 'Educational Content Setup',
    'content.subtitle': 'Set educational goals for your picture book',
    'content.mode': 'Content Mode',
    'content.mode.custom': 'Custom Theme',
    'content.mode.random': 'Random Theme',
    'content.topic': 'Educational Topic',
    'content.topic.placeholder': 'Enter educational topic (e.g., learning to share, building friendship)',
    'content.target': 'Target Audience',
    'content.target.placeholder': 'Describe target readers (e.g., children aged 3-6)',
    'content.next': 'Start Generating Book',
    'content.back': 'Previous',
    
    // Educational Content Page (Detailed)
    'content.topics.shareAndCooperate': 'Learning to Share and Cooperate',
    'content.topics.braveAndConfident': 'Building Courage and Confidence',
    'content.topics.friendship': 'Understanding the Importance of Friendship',
    'content.topics.problemSolving': 'Learning Problem-Solving Skills',
    'content.topics.responsibility': 'Building Responsibility',
    'content.topics.gratitudeAndKindness': 'Learning Gratitude and Kindness',
    'content.topics.honesty': 'Understanding the Value of Honesty',
    'content.topics.timeManagement': 'Learning Time Management',
    'content.topics.creativity': 'Building Creativity and Imagination',
    'content.topics.respect': 'Learning to Respect Others',
    'content.status.preparing': 'Preparing generation parameters...',
    'content.status.customContent': 'Preparing custom educational content...',
    'content.status.generating': 'Calling Tongyi Qianwen to generate story content...',
    'content.status.saving': 'Saving generated content...',
    'content.status.complete': 'Generation complete!',
    'content.status.failed': 'Generation failed',
    'content.status.waiting': 'Please wait, we are creating an amazing story for you',
    'content.status.frequencyLimit': '❌ API rate limit: Failed after 8 retries, please wait 15-30 minutes before retrying',
    'content.status.quotaExceeded': '❌ API quota exceeded: Please check Tongyi Qianwen account balance and top up',
    'content.status.networkError': '❌ Network connection error: Please check network connection status',
    'content.status.unauthorized': '❌ Invalid API key: Please check API key configuration',
    'content.status.generalError': '❌ Generation failed: Please try again later or check service status',
    'content.mode.custom.active': 'Custom Educational Content Mode',
    'content.mode.random.active': 'Smart Random Generation Mode',
    'content.mode.custom.description': 'You have enabled custom mode, AI will analyze your description and generate corresponding educational content',
    'content.mode.default.description': 'By default, use AI smart generation of educational content, or select from theme examples below',
    'content.switch.on': 'On',
    'content.switch.off': 'Off',
    'content.mode.custom.title': 'Custom Mode Activated',
    'content.mode.smart.title': 'Smart Generation Mode',
    'content.custom.placeholder': 'Please describe in detail the educational content or values you want the picture book to convey, for example:\n• Learning to share toys and food\n• Building courage to face difficulties\n• Understanding the value and maintenance of friendship\n• Learning basic polite expressions\n• Building independent abilities...',
    'content.topics.selected': 'Selected "{topic}" theme. Click other themes to switch, or click again to deselect.',
    'content.topics.instructions': 'Click any theme example to select, or keep none selected to let the system intelligently generate randomly.',
    'content.topics.selectedLabel': 'Selected Theme',
    
    // Preview Page
    'preview.title': 'Book Preview',
    'preview.generating': 'Generating picture book...',
    'preview.regenerate': 'Regenerate',
    'preview.download': 'Download PDF',
    'preview.back': 'Back to Edit',
    'preview.page': 'Page {page}',
    
    // Common Buttons
    'button.confirm': 'Confirm',
    'button.cancel': 'Cancel',
    'button.save': 'Save',
    'button.edit': 'Edit',
    'button.delete': 'Delete',
    'button.close': 'Close',
    
    // Error Messages
    'error.required': 'This field is required',
    'error.network': 'Network connection failed, please try again',
    'error.generation': 'Generation failed, please try again',
    'error.invalid.age': 'Please enter a valid age',
    
    // Success Messages
    'success.saved': 'Saved successfully',
    'success.generated': 'Generated successfully',
    
    // Loading States
    'loading.generating': 'Generating...',
    'loading.saving': 'Saving...',
    'loading.loading': 'Loading...'
  }
};

// 默认语言
export const DEFAULT_LANGUAGE = 'zh-CN';

// 获取浏览器语言
export const getBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  
  // 检查是否有完全匹配的语言
  if (LANGUAGES[browserLang]) {
    return browserLang;
  }
  
  // 检查是否有语言前缀匹配（如 en-US -> en）
  const langPrefix = browserLang.split('-')[0];
  const matchedLang = Object.keys(LANGUAGES).find(lang => lang.startsWith(langPrefix));
  
  return matchedLang || DEFAULT_LANGUAGE;
}; 