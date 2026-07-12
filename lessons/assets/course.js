/* ============================================================
   🧩 PaperLesson 课程页交互脚本
   ============================================================ */

(function() {
  'use strict';

  // --- 折叠练习初始化 ---
  function initQuiz() {
    document.querySelectorAll('details.quiz').forEach((quiz, index) => {
      const summary = quiz.querySelector('summary');
      if (summary && !summary.dataset.numbered) {
        const num = quiz.closest('.lesson-section')
          ? Array.from(quiz.closest('.lesson-section').querySelectorAll('details.quiz')).indexOf(quiz) + 1
          : index + 1;
        summary.textContent = `📝 练习 ${num}：` + summary.textContent.replace(/^📝\s*练习\s*\d*[：:]\s*/, '');
        summary.dataset.numbered = 'true';
      }
    });
  }

  // --- 代码块复制功能 ---
  function initCodeCopy() {
    document.querySelectorAll('.code-block').forEach(block => {
      const header = block.querySelector('.code-header');
      if (header && !header.querySelector('.copy-btn')) {
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.textContent = '📋 复制';
        btn.style.cssText = `
          background: none;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 2px 8px;
          font-size: 0.75rem;
          cursor: pointer;
          color: var(--gray-500);
          transition: all 150ms ease;
        `;
        btn.addEventListener('click', async () => {
          const code = block.querySelector('code');
          if (code) {
            try {
              await navigator.clipboard.writeText(code.textContent);
              btn.textContent = '✅ 已复制';
              setTimeout(() => { btn.textContent = '📋 复制'; }, 2000);
            } catch {
              btn.textContent = '❌ 复制失败';
            }
          }
        });
        header.appendChild(btn);
      }
    });
  }

  // --- QA 块交互 ---
  function initQA() {
    document.querySelectorAll('.qa-block').forEach(block => {
      const question = block.querySelector('.qa-question');
      const answer = block.querySelector('.qa-answer');
      if (question && answer) {
        answer.style.display = 'none';
        question.style.cursor = 'pointer';
        question.addEventListener('click', () => {
          const isOpen = answer.style.display !== 'none';
          answer.style.display = isOpen ? 'none' : 'block';
          question.classList.toggle('is-open', !isOpen);
        });
      }
    });
  }

  // --- 图片懒加载 ---
  function initLazyImages() {
    if ('loading' in HTMLImageElement.prototype) {
      document.querySelectorAll('.lesson-section img:not([loading])').forEach(img => {
        img.loading = 'lazy';
      });
    }
  }

  // --- 外部链接新窗口 ---
  function initExternalLinks() {
    document.querySelectorAll('a[href^="http"]').forEach(link => {
      if (!link.hostname.includes(location.hostname)) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    });
  }

  // --- 打印友好 ---
  function initPrint() {
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        .nav, .lesson-nav, .copy-btn, .back-link { display: none !important; }
        .lesson-section { break-inside: avoid; box-shadow: none; border: 1px solid #ddd; }
      }
    `;
    document.head.appendChild(style);
  }

  // --- 初始化 ---
  document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
    initCodeCopy();
    initQA();
    initLazyImages();
    initExternalLinks();
    initPrint();
  });

})();
