// ============================================================
// 📋 PaperLesson 课程数据源
// 三层结构：分馆(group) → 来源块(collection) → 课程页(lesson)
// 新增课程只需在这里添加条目，无需修改 index.html
// ============================================================

const COURSE_CATALOG = [
  {
    // --- 分馆 (group) ---
    id: 'papers',              // 唯一标识，用于 URL
    title: '论文馆',            // 显示名称
    icon: '📄',                // 图标
    description: '经典论文精读，逐段拆解核心思想与方法',  // 分馆描述
    collections: [
      // --- 来源块 (collection) ---
      // 一个 collection 对应一篇论文或一个主题系列
      {
        id: 'example-paper',          // 唯一标识
        title: '示例论文',             // 论文/主题名称
        authors: '作者名',             // 作者（可选）
        year: 2024,                   // 年份（可选）
        source: 'Conference/Journal', // 来源（可选）
        description: '这篇论文介绍了...', // 简短描述
        tags: ['transformer', 'attention'], // 标签（可选）
        lessons: [
          // --- 课程页 (lesson) ---
          {
            id: '0001-example',       // 对应 lessons/0001-example.html
            title: '示例课程',          // 课程标题
            subtitle: '理解核心概念',    // 副标题（可选）
            filename: '0001-示例课程.html', // HTML 文件名
            duration: '20min',         // 预计阅读时长
            difficulty: '入门',        // 难度：入门 / 进阶 / 高级
            sections: 3,              // 节数
            hasQuiz: true,            // 是否有练习
            tags: ['基础'],            // 课程标签
            // QA 答疑课程（可选）
            qa: [] // 答疑课文件名列表
          }
        ]
      }
    ]
  },
  {
    // --- 教材馆 ---
    id: 'books',
    title: '教材馆',
    icon: '📚',
    description: '教材与专著精读，系统构建知识体系',
    collections: [
      // 在这里添加教材 collection
      {
        id: 'example-book',
        title: '示例教材',
        authors: '作者名',
        description: '这本教材涵盖了...',
        lessons: []
      }
    ]
  }
];
