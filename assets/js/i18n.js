(function () {
  const STORAGE_KEY = 'site-lang';
  const dictionaries = {
    en: {
      nav_about: 'About',
      nav_experience: 'Experience',
      nav_research: 'Research',
      nav_projects: 'Projects',
      nav_writing: 'Writing',
      nav_contact: 'Contact',

      hero_label: 'Applied Mathematics · Machine Learning · Computational Geometry',
      hero_sub: 'Optimization, structure, and the mathematics behind learning.',
      hero_desc: "I work at the boundary of mathematical theory and machine learning, studying how iterative algorithms become differentiable architectures, and how geometry gives structure to data. UCLA Applied Math '26 · Incoming INRIA Researcher · Imperial MSc AI '27.",
      hero_tag_explainable: 'Explainable ML',
      hero_tag_unrolling: 'Algorithm Unrolling',
      hero_tag_geometry: 'Computational Geometry',
      hero_tag_rl: 'Reinforcement Learning',
      hero_tag_vision: '3D Vision',
      hero_btn_research: 'Research',
      hero_btn_contact: 'Contact',

      about_p1: "I'm a final year Applied Mathematics student at UCLA, with a background in analysis, convex optimization, numerical methods, and algorithms. My core interest is understanding machine learning from the inside, not treating models as black boxes, but tracing how their behavior follows from mathematical structure.",
      about_p2_html: "This summer I join <strong>INRIA TITANE</strong> (Sophia Antipolis) as a research intern, working on variational mesh reconstruction from 3D point clouds using reinforcement learning and graph neural networks, supervised by Pierre Alliez.",
      about_p3_html: "In autumn I begin an <strong>MSc in AI at Imperial College London</strong>, where I plan to deepen work on principled model understanding by connecting optimization theory to interpretable, reliable learning systems.",
      about_p4: 'Outside of research: I love movies and literatures.',
      about_card_current: 'Current',
      about_card_current_val: 'UCLA Applied Math',
      about_card_next: 'Next',
      about_card_next_val: "Imperial MSc AI '27",
      about_card_summer: 'Summer',
      about_card_summer_val: 'INRIA TITANE',
      about_card_location: 'Location',
      about_card_location_val: 'LA → London',
      about_card_github: 'GitHub',
      about_card_email: 'Email',
      about_card_languages: 'Languages',
      about_card_languages_val: 'EN · ZH · JP',

      exp_cat_education: 'Education',
      exp_cat_internship: 'Internship',
      exp_cat_upcoming: 'Upcoming',
      exp_ucla_org: 'University of California, Los Angeles',
      exp_ucla_role: 'B.S. Applied Mathematics',
      exp_ucla_courses_html: '<span class="exp-courses-label">Key Courses &nbsp;·&nbsp; </span>Algorithms &nbsp;·&nbsp; Machine Learning &nbsp;·&nbsp; ODE &nbsp;·&nbsp; Real Analysis &nbsp;·&nbsp; Numerical Methods',
      exp_inria_role: 'Research Intern · Geometric Modeling &amp; Computer Vision',
      exp_inria_work_html: '<span class="exp-courses-label">Key Work &nbsp;·&nbsp; </span>RL driven 3D mesh reconstruction &nbsp;·&nbsp; GNN + GAT geometric feature modeling &nbsp;·&nbsp; DINOv2 image encoding &nbsp;·&nbsp; A2C multi agent policy optimization',
      exp_icl_org: 'Imperial College London',
      exp_icl_role: 'MSc Artificial Intelligence',

      research_type_tsp: 'Research · Ongoing',
      research_desc_tsp: 'An Image to TSP generative pipeline that converts image signals into large scale Euclidean TSP instances. It includes density field construction, adaptive sampling (brightness / edge / multilayer), Floyd Steinberg dithering, and LLM agent based auto configuration of solver parameters.',
      research_link_repo: 'View Repo',
      research_desc_topology: 'Algorithm unrolling applied to structural topology optimization: iterative level set updates become differentiable network layers, retaining mathematical guarantees while enabling learned descent. Full FEM pipeline with SIMP and level set frameworks, plus adjoint sensitivity analysis.',
      research_type_theory: 'Research · Theory',
      research_name_stochastic: 'Stochastic Processes & ML',
      research_desc_theory: 'Guided reading on Markov chains, Poisson processes, and random walks (Prof. Vadim Markel, 2023). Traced their appearance in modern ML: SGD as a discrete time stochastic process, and Bernoulli dropout in attention mechanisms.',
      research_type_pub: 'Publication · 2023',
      research_desc_pub: 'Published paper examining factors affecting linear regression model performance. DOI: 10.1145/3653724.3653734',
      skills_label: 'Skills',
      skill_group_languages: 'Languages',
      skill_group_frameworks: 'Frameworks',
      skill_group_areas: 'Research Areas',
      skill_group_human: 'Human Languages',
      human_lang_chinese: 'Chinese',
      human_lang_english: 'English',
      human_lang_japanese: 'Japanese',

      project_type_movie: 'Project · Bayesian Systems',
      project_desc_movie: 'Bayesian estimation system for movie viewing counts. It uses a FastAPI backend, session state machines, Beta Binomial Bayesian correction, weighted sampling from a Top 250 pool, and an LLM semantic correction layer.',
      project_type_population: 'Project · Dynamical Systems',
      project_desc_population: 'Lotka Volterra system analysis with real ecological time series data. It covers equilibrium analysis, linear stability, phase portraits, parameter estimation via numerical integration, and model extensions for carrying capacity, seasonality, and functional responses.',
      project_view_report: 'View Report',

      hound_img_credit: 'Art by Dollllls',
      hound_eyebrow: 'Original Novel',
      hound_char: 'Namterre Luo · 骆南洮',
      hound_film_label: 'In Film & Literature',
      hound_film_p1: 'My favourite director is Shunji Iwai, whose films move between tenderness and quiet devastation with an unhurried grace I find irreplaceable.',
      hound_film_p2: 'In literature I return most often to Yukio Mishima, drawn to his obsession with beauty, discipline, and the fatal coherence of an ideal.',
      hound_body_main: "<em>The Hound</em> is my current novel in progress, a suspense work written with classical restraint: slow burning tension, precise prose, and psychological depth over spectacle. It is a novel about the architecture of a criminal mind, not born of passion or madness, but of cold structural logic applied to human behavior.",
      hound_char_label: 'Namterre Luo · 骆南洮',
      hound_char_desc: 'A physics student with no emotional affect and exceptional intelligence. <em>The Hound</em> follows her slow, deliberate transformation, showing how someone who feels nothing comes to act with total, precise intention. She does not break rules out of rage or trauma; she simply decides, with perfect clarity, that they do not apply to her, and then acts accordingly.',
      hound_quote: '"The evil that men do lives after them; The good is oft interred with their bones."',

      contact_sub: 'Open to research discussions, collaborations, and interesting problems.',
      footer_main: '© 2026 Dengyuhan Dai · Los Angeles → London',
      footer_note: '「この世界は好都合に未完成だ。僕は知りたいんだ。」',

      exp_page_inria_role: 'Research Intern · Geometric Modeling & Computer Vision',
      exp_page_inria_b1: 'Formulating large scale 3D point cloud mesh reconstruction as a reinforcement learning problem, converting geometric reconstruction into sequential decision optimization.',
      exp_page_inria_b2: 'Designing an RL based framework to minimize quadric error (QEM) under complexity constraints, balancing reconstruction fidelity and mesh simplification.',
      exp_page_inria_b3: 'Building GNN based geometric feature modeling with graph attention networks (GAT), and integrating DINOv2 for image based local encoding under noise and nonuniform sampling.',
      exp_page_inria_b4: 'Implementing Actor Critic (A2C) policy optimization with decentralized multi agent and centralized value function architecture for scalable decisions on large point clouds.',
      exp_page_tsp_role: 'Undergraduate Research · Advised by Prof. Jiayin Lu',
      exp_page_tsp_b1: 'An end to end Image to TSP generative pipeline: density field construction, adaptive sampling, and single stroke path generation that realizes stipple art with mathematical structure.',
      exp_page_tsp_b2: 'An LLM agent configuration module for automatic sampling strategy and solver parameter selection. Recommended for SIAM undergraduate submission.',
      exp_page_topology_org: 'Topology Optimization · ML4Science',
      exp_page_topology_role: 'Independent Research · Advised by Prof. Takayuki Yamada',
      exp_page_topology_b1: 'PDE constrained structural topology optimization minimizing compliance under volume fraction constraints; implemented SIMP and level set frameworks with a full FEM pipeline including adjoint sensitivity analysis.',
      exp_page_topology_b2: 'Designed an algorithm unrolling differentiable architecture: iterative level set update steps are mapped to network layers, preserving optimization semantics while enabling learned, data adaptive convergence.',
      exp_page_stochastic_org: 'Stochastic Processes · Guided Reading',
      exp_page_stochastic_role: 'Research Reading · Advised by Prof. Vadim Markel',
      exp_page_stochastic_b1: 'Systematic study of Markov chains, Poisson processes, and random walk models.',
      exp_page_stochastic_b2: 'Explored connections to modern ML algorithms: SGD as a discrete time stochastic process, and Bernoulli dropout in attention mechanisms as controlled randomness.',

      research_page_secnum: '03: Research & Projects',
      research_page_movie_link: 'View Repo',
      research_page_skills_chinese: 'Chinese (Native)',
      research_page_skills_english: 'English (TOEFL 111)',
      research_page_skills_japanese: 'Japanese (JLPT N2)',

      hound_page_char: 'Namterre Luo · 骆南洮',
      hound_page_p1_html: 'A physics student with no emotional affect and exceptional intelligence. <em>The Hound</em> follows Namterre Luo\'s slow, deliberate transformation, showing how someone who feels nothing comes to act with total, precise intention.',
      hound_page_p2: 'It is a novel about the architecture of a criminal mind: not passion, not madness, but cold structural logic applied to human behavior. Namterre does not break rules out of rage or trauma. She simply decides that they do not apply to her, and then acts accordingly.',
      hound_page_p3: 'Written with a classical aesthetic sensibility: slow burning tension, precise prose, and psychological depth over spectacle.',
      hound_page_insp_label: 'Inspirations',
      hound_page_insp_text: 'The Silence of the Lambs · American Psycho',
      hound_page_aside_label: 'Beyond Academia',
      hound_page_aside_text: "Cinema and literary fiction occupy the other half of my inner life. I'm drawn to slow cinema and psychological auteur work, especially Haneke, Tarkovsky, and Lynch, and to anything that treats silence and ambiguity as primary materials. In literature I read widely: contemporary Chinese fiction, European modernism, and the psychological crime novel in particular. These aren't hobbies separate from my other work; they're part of the same interest in structure, intent, and what lies beneath surfaces."
    },
    zh: {
      nav_about: '关于',
      nav_experience: '经历',
      nav_research: '研究',
      nav_projects: '项目',
      nav_writing: '写作',
      nav_contact: '联系',

      hero_label: '应用数学 · 机器学习 · 计算几何',
      hero_sub: '优化、结构，以及学习背后的数学。',
      hero_desc: '我的工作位于数学理论与机器学习的交界处，关注迭代算法如何变成可微架构，以及几何结构如何赋予数据形式。UCLA 应用数学 2026 届 · 即将前往 INRIA 从事研究 · Imperial AI MSc 2027 届。',
      hero_tag_explainable: '可解释机器学习',
      hero_tag_unrolling: '算法展开',
      hero_tag_geometry: '计算几何',
      hero_tag_rl: '强化学习',
      hero_tag_vision: '三维视觉',
      hero_btn_research: '研究',
      hero_btn_contact: '联系',

      about_p1: '我目前是 UCLA 应用数学专业大四学生，受过分析、凸优化、数值方法与算法方面的系统训练。我最核心的兴趣，是从内部理解机器学习，不把模型当作黑箱，而是追踪它们的行为如何由数学结构推导出来。',
      about_p2_html: '今年夏天我将在法国 Sophia Antipolis 的 <strong>INRIA TITANE</strong> 担任研究实习生，在 Pierre Alliez 指导下，研究基于强化学习与图神经网络的三维点云变分网格重建。',
      about_p3_html: '今年秋天我将前往 <strong>帝国理工学院人工智能硕士项目</strong>，继续深入探索有原则的模型理解，把优化理论与可解释、可靠的学习系统连接起来。',
      about_p4: '研究之外，我热爱电影与文学。',
      about_card_current: '当前',
      about_card_current_val: 'UCLA 应用数学',
      about_card_next: '下一站',
      about_card_next_val: '帝国理工 AI 硕士 2027',
      about_card_summer: '今夏',
      about_card_summer_val: 'INRIA TITANE',
      about_card_location: '地点',
      about_card_location_val: '洛杉矶 → 伦敦',
      about_card_github: 'GitHub',
      about_card_email: '邮箱',
      about_card_languages: '语言',
      about_card_languages_val: '英 · 中 · 日',

      exp_cat_education: '教育',
      exp_cat_internship: '实习',
      exp_cat_upcoming: '下一阶段',
      exp_ucla_org: '加州大学洛杉矶分校',
      exp_ucla_role: '应用数学学士',
      exp_ucla_courses_html: '<span class="exp-courses-label">核心课程 &nbsp;·&nbsp; </span>算法 &nbsp;·&nbsp; 机器学习 &nbsp;·&nbsp; 常微分方程 &nbsp;·&nbsp; 实分析 &nbsp;·&nbsp; 数值方法',
      exp_inria_role: '研究实习生 · 几何建模与计算机视觉',
      exp_inria_work_html: '<span class="exp-courses-label">核心工作 &nbsp;·&nbsp; </span>强化学习驱动的三维网格重建 &nbsp;·&nbsp; GNN + GAT 几何特征建模 &nbsp;·&nbsp; DINOv2 图像编码 &nbsp;·&nbsp; A2C 多智能体策略优化',
      exp_icl_org: '帝国理工学院',
      exp_icl_role: '人工智能硕士',

      research_type_tsp: '研究 · 进行中',
      research_desc_tsp: '这是一个将图像信号转化为大规模欧氏 TSP 实例的 Image to TSP 生成流程，包含密度场构建、自适应采样（亮度 / 边缘 / 多层）、Floyd Steinberg 抖动，以及基于 LLM agent 的求解参数自动配置。',
      research_link_repo: '查看仓库',
      research_desc_topology: '将算法展开应用于结构拓扑优化：把迭代式 level set 更新映射为可微网络层，在保留数学保证的同时引入可学习下降。完整实现了包含 SIMP 与 level set 框架、伴随灵敏度分析在内的 FEM 流程。',
      research_type_theory: '研究 · 理论',
      research_name_stochastic: '随机过程与机器学习',
      research_desc_theory: '围绕马尔可夫链、泊松过程与随机游走进行指导阅读（Vadim Markel 教授，2023），并追踪它们在现代机器学习中的对应形式，例如把 SGD 视为离散时间随机过程，以及注意力机制中的伯努利 dropout。',
      research_type_pub: '论文 · 2023',
      research_desc_pub: '已发表论文，研究影响线性回归模型性能的因素。DOI: 10.1145/3653724.3653734',
      skills_label: '技能',
      skill_group_languages: '编程语言',
      skill_group_frameworks: '框架',
      skill_group_areas: '研究方向',
      skill_group_human: '自然语言',
      human_lang_chinese: '中文',
      human_lang_english: '英文',
      human_lang_japanese: '日文',

      project_type_movie: '项目 · 贝叶斯系统',
      project_desc_movie: '这是一个用于电影观看次数估计的贝叶斯系统，包含 FastAPI 后端、会话状态机、Beta Binomial 贝叶斯修正、Top 250 影片池加权采样，以及 LLM 语义校正层。',
      project_type_population: '项目 · 动力系统',
      project_desc_population: '结合真实生态时间序列数据，对 Lotka Volterra 系统进行分析，覆盖平衡点分析、线性稳定性、相图、数值积分参数估计，以及承载力、季节性和功能反应等扩展建模。',
      project_view_report: '查看报告',

      hound_img_credit: '插画：Dollllls',
      hound_eyebrow: '原创小说',
      hound_char: 'Namterre Luo · 骆南洮',
      hound_film_label: '电影与文学',
      hound_film_p1: '我最喜欢的导演是岩井俊二。他的电影总能在温柔与静默的摧毁之间缓慢游走，这种节制而悠长的气质，对我而言无可替代。',
      hound_film_p2: '在文学上，我最喜欢三岛由纪夫，着迷于他对美、纪律，以及理想自洽性走向毁灭的执念。',
      hound_body_main: '《恶犬》 是我正在写作中的小说，一部以古典节制方式推进的悬疑作品：慢燃式张力、精确的语言，以及重于奇观的心理深度。它关注的是犯罪心智的结构，不源于激情，也不源于疯狂，而是冷静的结构性逻辑如何作用于人类行为。',
      hound_char_label: 'Namterre Luo · 骆南洮',
      hound_char_desc: '她是一个情感反应极弱、智力异常出众的物理学生。《恶犬》 讲述了她缓慢而有意识的变化过程：一个几乎感受不到情绪的人，如何逐步形成绝对而精确的行动意志。她不会因为愤怒或创伤去打破规则；她只是以极端清晰的判断认定规则不适用于自己，然后照此行动。',
      hound_quote: '“人死后，其所行邪恶依然活着，良善则常随尸骨一同埋葬。”',

      contact_sub: '欢迎就研究、合作或有趣的问题与我联系。',
      footer_main: '© 2026 Dengyuhan Dai · 洛杉矶 → 伦敦',
      footer_note: '「这个世界残缺得恰到好处，才让我想求索通晓。」',

      exp_page_inria_role: '研究实习生 · 几何建模与计算机视觉',
      exp_page_inria_b1: '将大规模三维点云网格重建表述为强化学习问题，把几何重建过程转化为序列决策优化。',
      exp_page_inria_b2: '设计基于强化学习的框架，在复杂度约束下最小化 quadric error（QEM），平衡重建保真度与网格简化效率。',
      exp_page_inria_b3: '构建基于图注意力网络（GAT）的 GNN 几何特征建模，并融合 DINOv2 进行图像局部编码，以适应噪声和非均匀采样。',
      exp_page_inria_b4: '实现 Actor Critic（A2C）策略优化，采用分散式多智能体与集中式价值函数架构，以支持大规模点云上的可扩展决策。',
      exp_page_tsp_role: '本科科研 · 指导老师：Jiayin Lu 教授',
      exp_page_tsp_b1: '构建端到端的 Image to TSP 生成流程，覆盖密度场构建、自适应采样与单笔路径生成，让点描艺术具备明确的数学结构。',
      exp_page_tsp_b2: '实现基于 LLM agent 的采样策略与求解器参数自动配置模块，已获推荐投稿 SIAM 本科生项目。',
      exp_page_topology_org: '拓扑优化 · ML4Science',
      exp_page_topology_role: '独立研究 · 指导老师：Takayuki Yamada 教授',
      exp_page_topology_b1: '研究受 PDE 约束的结构拓扑优化问题，在体积分数约束下最小化柔度；实现了包含伴随灵敏度分析的完整 FEM 流程，并覆盖 SIMP 与 level set 框架。',
      exp_page_topology_b2: '设计算法展开式可微架构，把迭代 level set 更新步骤映射为网络层，在保留优化语义的同时实现数据驱动的自适应收敛。',
      exp_page_stochastic_org: '随机过程 · 指导阅读',
      exp_page_stochastic_role: '研究阅读 · 指导老师：Vadim Markel 教授',
      exp_page_stochastic_b1: '系统学习马尔可夫链、泊松过程与随机游走模型。',
      exp_page_stochastic_b2: '探索它们与现代机器学习算法的联系，例如把 SGD 视作离散时间随机过程，以及把注意力机制中的 Bernoulli dropout 看作受控随机性。',

      research_page_secnum: '03：研究与项目',
      research_page_movie_link: '查看仓库',
      research_page_skills_chinese: '中文（母语）',
      research_page_skills_english: '英文',
      research_page_skills_japanese: '日文',

      hound_page_char: 'Namterre Luo · 骆南洮',
      hound_page_p1_html: '她是一名情感反应极弱、智力极高的物理学生。《恶犬》 追踪的是 Namterre Luo 缓慢而有意识的转变过程，一个几乎感受不到情绪的人，如何逐步形成绝对而精确的行动意志。',
      hound_page_p2: '这部小说写的是犯罪心智的结构：不是激情，不是疯狂，而是冷静的结构性逻辑如何作用于人的行为。Namterre 打破规则并非出于愤怒或创伤，她只是认定规则不适用于自己，然后按这个结论去行动。',
      hound_page_p3: '整体采用偏古典的审美取向：慢燃式张力、精确的语言，以及重于奇观的心理深度。',
      hound_page_insp_label: '灵感来源',
      hound_page_insp_text: '沉默的羔羊 · 美国精神病人',
      hound_page_aside_label: '学术之外',
      hound_page_aside_text: '电影与文学构成了我内在生活的另一半。我偏爱慢电影与心理作者表达，比如 Haneke、Tarkovsky、Lynch，也偏爱那些把沉默和暧昧当作主要材料的作品。在文学上，我阅读范围很广，包括当代中文小说、欧洲现代主义，尤其是心理犯罪小说。这些并不是与研究分离的爱好，它们与我的其他工作一样，都在关心结构、意图，以及表象之下的东西。'
    }
  };

  function setNodeValue(node, value) {
    const mode = node.dataset.i18nMode || 'text';
    if (mode === 'html') {
      node.innerHTML = value;
    } else {
      node.textContent = value;
    }
  }

  function applyLanguage(lang) {
    const dict = dictionaries[lang] || dictionaries.en;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.classList.toggle('lang-zh', lang === 'zh');
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.dataset.i18n;
      if (dict[key] !== undefined) {
        setNodeValue(node, dict[key]);
      }
    });

    document.querySelectorAll('[data-lang-toggle]').forEach((button) => {
      button.textContent = lang === 'zh' ? 'EN' : '中文';
      button.classList.toggle('is-zh', lang === 'zh');
      button.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function bootLanguageToggle() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const initial = saved === 'zh' ? 'zh' : 'en';
    applyLanguage(initial);

    document.querySelectorAll('[data-lang-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const next = document.documentElement.lang === 'zh-CN' ? 'en' : 'zh';
        applyLanguage(next);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootLanguageToggle);
  } else {
    bootLanguageToggle();
  }
})();
