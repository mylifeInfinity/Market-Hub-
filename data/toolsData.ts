
import { AiTool, ExternalTool, WebsiteResource } from '../types';

export const TOOL_CATEGORIES = [
  'Marketing', 'Business', 'App Development', 'Freelance', 'Writing', 'Productivity', 
  'Design', 'Coding', 'Social Media', 'Education', 'Lifestyle', 'Finance', 'HR & Legal', 'Utilities', 'Mr. Freetools'
];

export const IMAGE_EDITING_SOFTWARE = [
  { name: 'Adobe Photoshop', type: 'Pro Editor', url: 'https://www.adobe.com/products/photoshop.html', icon: 'fa-layer-group', color: 'bg-blue-900', description: 'The industry standard for raster graphics editing and digital art.' },
  { name: 'Canva', type: 'Design Platform', url: 'https://www.canva.com', icon: 'fa-palette', color: 'bg-cyan-500', description: 'User-friendly design tool for social media, presentations, and more.' },
  { name: 'GIMP', type: 'Open Source', url: 'https://www.gimp.org', icon: 'fa-paintbrush', color: 'bg-yellow-700', description: 'Free and open-source raster graphics editor similar to Photoshop.' },
  { name: 'Figma', type: 'UI/UX Design', url: 'https://www.figma.com', icon: 'fa-figma', color: 'bg-purple-600', description: 'Collaborative interface design tool with vector editing features.' },
  { name: 'Adobe Lightroom', type: 'Photo Editor', url: 'https://www.adobe.com/products/photoshop-lightroom.html', icon: 'fa-image', color: 'bg-sky-700', description: 'Cloud-based service for photo editing, organizing, and storage.' },
  { name: 'Pixlr', type: 'Online Editor', url: 'https://pixlr.com', icon: 'fa-wand-magic-sparkles', color: 'bg-teal-500', description: 'Cloud-based set of image editing tools and utilities.' },
  { name: 'Snapseed', type: 'Mobile App', url: 'https://play.google.com/store/apps/details?id=com.niksoftware.snapseed', icon: 'fa-leaf', color: 'bg-green-600', description: 'Complete and professional photo editor developed by Google.' },
  { name: 'Photopea', type: 'Online Editor', url: 'https://www.photopea.com', icon: 'fa-clone', color: 'bg-slate-800', description: 'Advanced image editor supporting PSD, XCF, Sketch, XD and CDR formats.' },
];

export const BROWSERS_AND_ENGINES = [
  { name: 'Google', type: 'Search Engine', url: 'https://www.google.com', icon: 'fa-google', color: 'bg-blue-500', description: 'The world\'s most popular search engine.' },
  { name: 'Google Chrome', type: 'Browser', url: 'https://www.google.com/chrome', icon: 'fa-chrome', color: 'bg-green-500', description: 'Fast, secure, and free web browser.' },
  { name: 'Mozilla Firefox', type: 'Browser', url: 'https://www.mozilla.org/firefox', icon: 'fa-firefox-browser', color: 'bg-orange-500', description: 'Free and open-source web browser.' },
  { name: 'Microsoft Edge', type: 'Browser', url: 'https://www.microsoft.com/edge', icon: 'fa-edge', color: 'bg-blue-600', description: 'Fast and secure browser by Microsoft.' },
  { name: 'Opera', type: 'Browser', url: 'https://www.opera.com', icon: 'fa-opera', color: 'bg-red-600', description: 'Faster, safer and smarter browser.' },
  { name: 'Safari', type: 'Browser', url: 'https://www.apple.com/safari', icon: 'fa-compass', color: 'bg-blue-400', description: 'The best browser for Mac users.' },
  { name: 'Brave', type: 'Browser', url: 'https://brave.com', icon: 'fa-shield-halved', color: 'bg-orange-600', description: 'Privacy-focused browser.' },
  { name: 'Bing', type: 'Search Engine', url: 'https://www.bing.com', icon: 'fa-microsoft', color: 'bg-teal-600', description: 'Microsoft\'s search engine.' },
  { name: 'DuckDuckGo', type: 'Search Engine', url: 'https://duckduckgo.com', icon: 'fa-duck', color: 'bg-orange-400', description: 'Privacy, simplified. No tracking.' },
  { name: 'Yahoo', type: 'Search Engine', url: 'https://www.yahoo.com', icon: 'fa-y', color: 'bg-purple-600', description: 'News, email and search.' },
  { name: 'Yandex', type: 'Search Engine', url: 'https://yandex.com', icon: 'fa-y', color: 'bg-red-500', description: 'Russian internet company.' },
  { name: 'Tor Browser', type: 'Browser', url: 'https://www.torproject.org', icon: 'fa-user-secret', color: 'bg-purple-800', description: 'Protect your privacy and anonymity.' },
];

export const MARKETING_SOFTWARE = [
  { name: 'HubSpot', category: 'CRM & Auto', icon: 'fa-hubspot', color: 'bg-orange-500', url: 'https://www.hubspot.com', description: 'Inbound marketing, sales, and service software.' },
  { name: 'Salesforce', category: 'CRM', icon: 'fa-cloud', color: 'bg-blue-500', url: 'https://www.salesforce.com', description: 'Customer relationship management platform.' },
  { name: 'Mailchimp', category: 'Email', icon: 'fa-envelope-open', color: 'bg-yellow-400', url: 'https://mailchimp.com', description: 'Email marketing and automation brand.' },
  { name: 'Google Analytics', category: 'Analytics', icon: 'fa-chart-simple', color: 'bg-orange-400', url: 'https://analytics.google.com', description: 'Web analytics service offered by Google.' },
  { name: 'SEMrush', category: 'SEO', icon: 'fa-magnifying-glass-chart', color: 'bg-orange-600', url: 'https://www.semrush.com', description: 'Online visibility management and content marketing SaaS.' },
  { name: 'Ahrefs', category: 'SEO', icon: 'fa-link', color: 'bg-blue-600', url: 'https://ahrefs.com', description: 'SEO tools and resources to grow your search traffic.' },
  { name: 'Canva', category: 'Design', icon: 'fa-palette', color: 'bg-cyan-500', url: 'https://www.canva.com', description: 'Graphic design platform for social media graphics.' },
  { name: 'Buffer', category: 'Social Mgmt', icon: 'fa-layer-group', color: 'bg-blue-500', url: 'https://buffer.com', description: 'Social media management platform.' },
  { name: 'Hootsuite', category: 'Social Mgmt', icon: 'fa-crow', color: 'bg-slate-800', url: 'https://hootsuite.com', description: 'Social media management platform.' },
  { name: 'Slack', category: 'Comms', icon: 'fa-slack', color: 'bg-purple-600', url: 'https://slack.com', description: 'Business communication platform.' },
  { name: 'Zoom', category: 'Comms', icon: 'fa-video', color: 'bg-blue-500', url: 'https://zoom.us', description: 'Videotelephony software program.' },
  { name: 'Trello', category: 'Project Mgmt', icon: 'fa-trello', color: 'bg-blue-600', url: 'https://trello.com', description: 'Web-based list-making application.' },
];

export const ECOMMERCE_PLATFORMS = [
  { name: 'Amazon', category: 'Marketplace', icon: 'fa-amazon', color: 'bg-yellow-500', url: 'https://www.amazon.com', description: 'World\'s largest online marketplace.' },
  { name: 'Flipkart', category: 'Marketplace', icon: 'fa-bag-shopping', color: 'bg-blue-600', url: 'https://www.flipkart.com', description: 'Leading e-commerce marketplace in India.' },
  { name: 'Shopify', category: 'Platform', icon: 'fa-shopify', color: 'bg-green-500', url: 'https://www.shopify.com', description: 'E-commerce platform for online stores.' },
  { name: 'Myntra', category: 'Fashion', icon: 'fa-shirt', color: 'bg-pink-500', url: 'https://www.myntra.com', description: 'Major fashion e-commerce company.' },
  { name: 'eBay', category: 'Marketplace', icon: 'fa-ebay', color: 'bg-red-500', url: 'https://www.ebay.com', description: 'Online auction and shopping website.' },
  { name: 'Etsy', category: 'Creative', icon: 'fa-etsy', color: 'bg-orange-500', url: 'https://www.etsy.com', description: 'E-commerce focused on handmade or vintage items.' },
  { name: 'Walmart', category: 'Retail', icon: 'fa-cart-shopping', color: 'bg-blue-700', url: 'https://www.walmart.com', description: 'Multinational retail corporation.' },
  { name: 'Meesho', category: 'Reselling', icon: 'fa-store', color: 'bg-pink-600', url: 'https://meesho.com', description: 'Social commerce platform.' },
  { name: 'WooCommerce', category: 'Platform', icon: 'fa-wordpress', color: 'bg-purple-600', url: 'https://woocommerce.com', description: 'Open-source e-commerce plugin for WordPress.' },
  { name: 'BigCommerce', category: 'Platform', icon: 'fa-b', color: 'bg-slate-800', url: 'https://www.bigcommerce.com', description: 'SaaS ecommerce platform.' },
];

export const SOCIAL_MEDIA_PLATFORMS = [
  { name: 'Instagram', category: 'Visual', icon: 'fa-instagram', color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500', url: 'https://instagram.com', description: 'Photo and video sharing networking service.' },
  { name: 'TikTok', category: 'Video', icon: 'fa-tiktok', color: 'bg-black', url: 'https://tiktok.com', description: 'Short-form video hosting service.' },
  { name: 'YouTube', category: 'Video', icon: 'fa-youtube', color: 'bg-red-600', url: 'https://youtube.com', description: 'Global video sharing and social media platform.' },
  { name: 'LinkedIn', category: 'Professional', icon: 'fa-linkedin', color: 'bg-blue-700', url: 'https://linkedin.com', description: 'Business and employment-focused social media.' },
  { name: 'Twitter / X', category: 'Microblogging', icon: 'fa-x-twitter', color: 'bg-black', url: 'https://twitter.com', description: 'Social networking service for posting short posts.' },
  { name: 'Facebook', category: 'Networking', icon: 'fa-facebook', color: 'bg-blue-600', url: 'https://facebook.com', description: 'Online social media and social networking service.' },
  { name: 'Pinterest', category: 'Visual', icon: 'fa-pinterest', color: 'bg-red-600', url: 'https://pinterest.com', description: 'Image sharing and social media service.' },
  { name: 'Snapchat', category: 'Messaging', icon: 'fa-snapchat', color: 'bg-yellow-400', url: 'https://snapchat.com', description: 'Multimedia instant messaging app.' },
  { name: 'Reddit', category: 'Community', icon: 'fa-reddit', color: 'bg-orange-600', url: 'https://reddit.com', description: 'Social news aggregation and discussion website.' },
  { name: 'Discord', category: 'Community', icon: 'fa-discord', color: 'bg-indigo-500', url: 'https://discord.com', description: 'VoIP and instant messaging social platform.' },
  { name: 'Twitch', category: 'Streaming', icon: 'fa-twitch', color: 'bg-purple-600', url: 'https://twitch.tv', description: 'Video live streaming service.' },
  { name: 'WhatsApp', category: 'Messaging', icon: 'fa-whatsapp', color: 'bg-green-500', url: 'https://whatsapp.com', description: 'Freeware, cross-platform centralized messaging.' },
  { name: 'Telegram', category: 'Messaging', icon: 'fa-telegram', color: 'bg-sky-500', url: 'https://telegram.org', description: 'Cloud-based instant messaging service.' },
];

export const MOCK_SOCIAL_POSTS = [
  {
    id: 'p1',
    platform: 'Instagram',
    handle: '@creative_studio',
    content: 'Behind the scenes of our latest photoshoot! 📸 The lighting was absolutely perfect today. #Photography #BTS',
    likes: 1245,
    comments: 89,
    shares: 230,
    date: '2h ago',
    icon: 'fa-instagram',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    id: 'p2',
    platform: 'Twitter / X',
    handle: '@tech_insider',
    content: 'AI is changing the way we code faster than ever. What tools are you using this week? 🤖 #AI #Coding',
    likes: 543,
    comments: 120,
    shares: 89,
    date: '4h ago',
    icon: 'fa-x-twitter',
    color: 'text-slate-900',
    bgColor: 'bg-slate-100'
  },
  {
    id: 'p3',
    platform: 'LinkedIn',
    handle: 'Digital Solutions Inc.',
    content: 'We are thrilled to announce our Series B funding round led by top investors. This milestone enables us to expand our services globally.',
    likes: 3420,
    comments: 410,
    shares: 215,
    date: '1d ago',
    icon: 'fa-linkedin',
    color: 'text-blue-700',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'p4',
    platform: 'YouTube',
    handle: 'DesignMaster',
    content: 'New Tutorial Alert: Mastering Color Grading in DaVinci Resolve 18. Watch now! 🎥',
    likes: 8900,
    comments: 670,
    shares: 1200,
    date: '2d ago',
    icon: 'fa-youtube',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    id: 'p5',
    platform: 'Instagram',
    handle: '@creative_studio',
    content: 'Simple, clean, and effective. Minimalist design is here to stay. 🌿',
    likes: 890,
    comments: 34,
    shares: 56,
    date: '3d ago',
    icon: 'fa-instagram',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  }
];

export const EXTERNAL_TOOLS: ExternalTool[] = [
  { name: 'ChatGPT', company: 'OpenAI', category: 'LLM', description: 'Advanced conversational AI model.', url: 'https://chat.openai.com', icon: 'fa-robot', color: 'bg-emerald-500', badge: 'Popular' },
  { name: 'Midjourney', company: 'Midjourney', category: 'Image', description: 'AI art generator known for artistic style.', url: 'https://www.midjourney.com', icon: 'fa-paintbrush', color: 'bg-indigo-600' },
  { name: 'Runway', company: 'Runway ML', category: 'Video', description: 'Video generation and editing suite.', url: 'https://runwayml.com', icon: 'fa-video', color: 'bg-pink-600' },
  { name: 'GitHub Copilot', company: 'Microsoft', category: 'Coding', description: 'AI pair programmer.', url: 'https://github.com/features/copilot', icon: 'fa-github', color: 'bg-slate-800' },
  { name: 'Jasper', company: 'Jasper AI', category: 'Marketing', description: 'AI copywriter for marketing teams.', url: 'https://www.jasper.ai', icon: 'fa-pen-nib', color: 'bg-purple-600' },
  { name: 'Notion AI', company: 'Notion', category: 'Productivity', description: 'AI integrated into workspace.', url: 'https://www.notion.so', icon: 'fa-file-lines', color: 'bg-slate-700' },
];

export const WEBSITE_RESOURCES: WebsiteResource[] = [
  { name: 'WordPress', type: 'Builder', description: 'The world\'s most popular CMS.', url: 'https://wordpress.org', icon: 'fa-wordpress', color: 'bg-blue-600', features: ['Open Source', 'Plugins', 'Themes'] },
  { name: 'Wix', type: 'Builder', description: 'Cloud-based web development platform.', url: 'https://www.wix.com', icon: 'fa-w', color: 'bg-slate-800', features: ['Drag & Drop', 'Hosting', 'Templates'] },
  { name: 'Bluehost', type: 'Hosting', description: 'Web hosting services.', url: 'https://www.bluehost.com', icon: 'fa-server', color: 'bg-blue-500', features: ['Reliable', 'Support', 'Wordpress'] },
  { name: 'GoDaddy', type: 'Domain', description: 'Internet domain registrar.', url: 'https://www.godaddy.com', icon: 'fa-globe', color: 'bg-green-600', features: ['Domains', 'Hosting', 'Email'] },
  { name: 'Udemy', type: 'Learning', description: 'Online learning platform.', url: 'https://www.udemy.com', icon: 'fa-graduation-cap', color: 'bg-red-500', features: ['Courses', 'Instructors', 'Certificates'] },
  { name: 'Shopify', type: 'Commerce', description: 'E-commerce platform.', url: 'https://www.shopify.com', icon: 'fa-shopify', color: 'bg-green-500', features: ['Storefront', 'Payments', 'Marketing'] },
  { name: 'Google Analytics', type: 'Analytics', description: 'Web analytics service.', url: 'https://analytics.google.com', icon: 'fa-chart-simple', color: 'bg-orange-500', features: ['Tracking', 'Reports', 'Insights'] },
  { name: 'Figma', type: 'Design', description: 'Interface design tool.', url: 'https://www.figma.com', icon: 'fa-figma', color: 'bg-purple-600', features: ['Vector', 'Prototyping', 'Collaboration'] }
];

export const FREELANCE_PLATFORMS = [
  { name: 'Upwork', description: 'Global freelancing platform.', url: 'https://www.upwork.com', icon: 'fa-upwork', color: 'bg-green-600' },
  { name: 'Fiverr', description: 'Freelance services marketplace.', url: 'https://www.fiverr.com', icon: 'fa-handshake', color: 'bg-green-500' },
  { name: 'Freelancer', description: 'Freelance marketplace.', url: 'https://www.freelancer.com', icon: 'fa-laptop', color: 'bg-blue-500' },
  { name: 'Toptal', description: 'Exclusive network of top talent.', url: 'https://www.toptal.com', icon: 'fa-gem', color: 'bg-indigo-600' },
  { name: 'Guru', description: 'Freelance marketplace.', url: 'https://www.guru.com', icon: 'fa-briefcase', color: 'bg-purple-600' }
];

export const VFX_SOFTWARE = [
  { name: 'Blender', type: '3D Suite', description: 'Free and open source 3D creation suite.', url: 'https://www.blender.org', icon: 'fa-cube', color: 'bg-orange-500', badge: 'Free' },
  { name: 'After Effects', type: 'Compositing', description: 'Digital visual effects and motion graphics.', url: 'https://www.adobe.com/products/aftereffects.html', icon: 'fa-layer-group', color: 'bg-purple-700' },
  { name: 'Maya', type: '3D Animation', description: '3D computer animation software.', url: 'https://www.autodesk.com/products/maya/overview', icon: 'fa-dragon', color: 'bg-teal-600' },
  { name: 'Cinema 4D', type: '3D Design', description: '3D modeling, animation and rendering software.', url: 'https://www.maxon.net/en/cinema-4d', icon: 'fa-circle-notch', color: 'bg-blue-600' }
];

export const VFX_LEARNING = [
  { name: 'Video Copilot', topic: 'After Effects', url: 'https://www.videocopilot.net', icon: 'fa-film' },
  { name: 'Greyscalegorilla', topic: 'Cinema 4D', url: 'https://greyscalegorilla.com', icon: 'fa-cube' },
  { name: 'Blender Guru', topic: 'Blender', url: 'https://www.blenderguru.com', icon: 'fa-cookie-bite' }
];

export const VIDEO_EDITING_RESOURCES = [
  { category: 'Software', name: 'Adobe Premiere Pro', badge: 'Pro', color: 'bg-purple-900', icon: 'fa-film', description: 'Industry standard video editing.', url: 'https://www.adobe.com/products/premiere.html' },
  { category: 'Software', name: 'DaVinci Resolve', badge: 'Free Version', color: 'bg-blue-600', icon: 'fa-wand-magic-sparkles', description: 'Professional editing and color correction.', url: 'https://www.blackmagicdesign.com/products/davinciresolve' },
  { category: 'Online Editor', name: 'CapCut', badge: 'Popular', color: 'bg-black', icon: 'fa-scissors', description: 'All-in-one video editor.', url: 'https://www.capcut.com' },
  { category: 'AI Tool', name: 'Descript', badge: 'AI', color: 'bg-indigo-500', icon: 'fa-microphone-lines', description: 'Edit video by editing text.', url: 'https://www.descript.com' },
  { category: 'Open Source', name: 'Shotcut', badge: 'Free', color: 'bg-red-600', icon: 'fa-video', description: 'Free, open source video editor.', url: 'https://shotcut.org' },
  { category: 'Mobile App', name: 'InShot', badge: 'Mobile', color: 'bg-pink-500', icon: 'fa-mobile-screen', description: 'Powerful video editor for mobile.', url: 'https://inshot.com' }
];

export const EDUCATION_PLATFORMS = [
  { name: 'Coursera', url: 'https://www.coursera.org', color: 'bg-blue-600', icon: 'fa-graduation-cap', type: 'University', description: 'Courses from top universities.' },
  { name: 'Udemy', url: 'https://www.udemy.com', color: 'bg-red-500', icon: 'fa-video', type: 'Marketplace', description: 'Global marketplace for learning and teaching.' },
  { name: 'edX', url: 'https://www.edx.org', color: 'bg-slate-800', icon: 'fa-university', type: 'University', description: 'Access to 2000+ free online courses.' },
  { name: 'Simplilearn', url: 'https://www.simplilearn.com', color: 'bg-blue-500', icon: 'fa-certificate', type: 'Bootcamp', description: 'Online bootcamp and certification courses.' },
  { name: 'Khan Academy', url: 'https://www.khanacademy.org', color: 'bg-green-500', icon: 'fa-leaf', type: 'Non-profit', description: 'Free world-class education for anyone.' }
];

export const SIMPLILEARN_COURSES = [
  { category: 'Data Science', courses: ['Data Scientist', 'Data Analyst', 'AI Engineer'] },
  { category: 'Cyber Security', courses: ['Cyber Security Expert', 'Ethical Hacker'] },
  { category: 'Cloud', courses: ['AWS Architect', 'Azure Administrator', 'DevOps Engineer'] },
  { category: 'Project Mgmt', courses: ['PMP® Certification', 'Agile Scrum Master'] },
  { category: 'Digital Marketing', courses: ['Digital Marketing Specialist', 'SEO Expert'] }
];

export const ALL_TOOLS: AiTool[] = [
    // --- MR. FREETOOLS (New Category) ---
    {
      id: 'ft-1', title: 'Quick SVG Generator', category: 'Mr. Freetools', icon: 'fa-vector-square',
      description: 'Generate Scalable Vector Graphics code.',
      promptTemplate: 'Generate the raw SVG XML code for a {{desc}}. Ensure it is minimal, clean, and uses standard colors if not specified. Output only code.',
      inputs: [{ key: 'desc', label: 'Icon/Shape Description', placeholder: 'e.g. A flat style rocket icon' }]
    },
    {
      id: 'ft-2', title: 'Regex Master', category: 'Mr. Freetools', icon: 'fa-code-branch',
      description: 'Create regular expressions for any pattern.',
      promptTemplate: 'Write a Regular Expression (Regex) to match: {{pattern}}. Explain how it works briefly.',
      inputs: [{ key: 'pattern', label: 'Pattern to Match', placeholder: 'e.g. Email addresses ending in .edu' }]
    },
    {
      id: 'ft-3', title: 'Cron Schedule', category: 'Mr. Freetools', icon: 'fa-clock',
      description: 'Generate cron job expressions.',
      promptTemplate: 'Write the Cron expression for this schedule: {{schedule}}. Explain the fields.',
      inputs: [{ key: 'schedule', label: 'Schedule', placeholder: 'e.g. Every Monday at 3 AM' }]
    },
    {
      id: 'ft-4', title: 'ASCII Art Gen', category: 'Mr. Freetools', icon: 'fa-font',
      description: 'Create text-based art.',
      promptTemplate: 'Generate a creative ASCII art representation of: {{object}}. Keep it suitable for a code comment block.',
      inputs: [{ key: 'object', label: 'Object', placeholder: 'e.g. A dragon' }]
    },
    {
      id: 'ft-5', title: 'Complexity Analyzer', category: 'Mr. Freetools', icon: 'fa-stopwatch',
      description: 'Analyze Big O time complexity.',
      promptTemplate: 'Analyze the Big O Time and Space complexity of this code/algorithm: {{code}}. Explain why.',
      inputs: [{ key: 'code', label: 'Code/Algorithm', placeholder: 'e.g. Nested for loop...' }]
    },
    {
      id: 'ft-6', title: 'Code Converter', category: 'Mr. Freetools', icon: 'fa-right-left',
      description: 'Translate code between languages.',
      promptTemplate: 'Convert this {{from}} code to {{to}} code. Maintain functionality.\nCode:\n{{code}}',
      inputs: [{ key: 'from', label: 'From Language', placeholder: 'Python' }, { key: 'to', label: 'To Language', placeholder: 'JavaScript' }, { key: 'code', label: 'Code Snippet', placeholder: 'print("Hello")' }]
    },
    {
      id: 'ft-7', title: 'Dummy Data JSON', category: 'Mr. Freetools', icon: 'fa-database',
      description: 'Generate realistic JSON test data.',
      promptTemplate: 'Generate a JSON array of 5 objects representing {{entity}}. Include fields: {{fields}}.',
      inputs: [{ key: 'entity', label: 'Entity Type', placeholder: 'Products' }, { key: 'fields', label: 'Fields', placeholder: 'id, name, price, category' }]
    },
    {
      id: 'ft-8', title: 'CSS Gradient Gen', category: 'Mr. Freetools', icon: 'fa-palette',
      description: 'Create beautiful CSS gradients.',
      promptTemplate: 'Write the CSS background-image property for a linear-gradient described as: {{desc}}.',
      inputs: [{ key: 'desc', label: 'Description', placeholder: 'e.g. Sunset vibes, orange to purple' }]
    },
    {
      id: 'ft-9', title: 'Meta Tag Gen', category: 'Mr. Freetools', icon: 'fa-tags',
      description: 'SEO optimized meta tags.',
      promptTemplate: 'Generate standard HTML meta tags (title, description, keywords, og:title, og:description) for a page about: {{topic}}.',
      inputs: [{ key: 'topic', label: 'Page Topic', placeholder: 'e.g. Best Vegan Recipes 2024' }]
    },
    {
      id: 'ft-10', title: 'Startup Pitch Tweet', category: 'Mr. Freetools', icon: 'fa-twitter',
      description: 'Viral 280-char pitch.',
      promptTemplate: 'Write a viral 280-character Twitter pitch for a startup that does: {{desc}}.',
      inputs: [{ key: 'desc', label: 'Startup Idea', placeholder: 'e.g. Uber for dog walking' }]
    },
    {
      id: 'ft-11', title: 'Excel Formula', category: 'Mr. Freetools', icon: 'fa-table',
      description: 'Complex spreadsheet formulas.',
      promptTemplate: 'Write an Excel/Google Sheets formula to: {{task}}. Explain the logic.',
      inputs: [{ key: 'task', label: 'Task', placeholder: 'e.g. Sum column A if B is "Paid"' }]
    },
    {
      id: 'ft-12', title: 'SQL Formatter', category: 'Mr. Freetools', icon: 'fa-server',
      description: 'Format and explain SQL queries.',
      promptTemplate: 'Format this SQL query for readability and explain what it does: {{query}}',
      inputs: [{ key: 'query', label: 'SQL Query', placeholder: 'SELECT * FROM users WHERE...' }]
    },
    {
      id: 'ft-13', title: 'JSON Formatter', category: 'Mr. Freetools', icon: 'fa-file-code',
      description: 'Validate and beautify JSON string.',
      promptTemplate: 'Format and validate this JSON string. Output the beautified JSON with 2-space indentation. If there are errors, explain them: \n{{json}}',
      inputs: [{ key: 'json', label: 'JSON String', placeholder: '{"key": "value"}' }]
    },
    {
      id: 'ft-14', title: 'CSV to JSON', category: 'Mr. Freetools', icon: 'fa-table',
      description: 'Convert CSV data to JSON array.',
      promptTemplate: 'Convert this CSV text into a JSON array of objects. Treat the first row as headers. \nCSV:\n{{csv}}',
      inputs: [{ key: 'csv', label: 'CSV Data', placeholder: 'id,name\n1,John' }]
    },
    {
      id: 'ft-15', title: 'Lorem Ipsum Gen', category: 'Mr. Freetools', icon: 'fa-paragraph',
      description: 'Generate placeholder text.',
      promptTemplate: 'Generate {{paragraphs}} paragraphs of standard Lorem Ipsum text. Start with "Lorem ipsum dolor sit amet".',
      inputs: [{ key: 'paragraphs', label: 'Number of Paragraphs', placeholder: '3' }]
    },
    {
      id: 'ft-16', title: 'Markdown to HTML', category: 'Mr. Freetools', icon: 'fa-code',
      description: 'Convert Markdown to raw HTML.',
      promptTemplate: 'Convert the following Markdown syntax into raw HTML code. Do not include <html> or <body> tags, just the content elements: \n{{md}}',
      inputs: [{ key: 'md', label: 'Markdown Text', placeholder: '# Hello World' }]
    },
    {
      id: 'ft-17', title: 'Placeholder Image URL', category: 'Mr. Freetools', icon: 'fa-image',
      description: 'Generate placeholder image URLs.',
      promptTemplate: 'Generate a direct URL for a placeholder image service (like placehold.co) with size {{width}}x{{height}}, background color {{color}}, and text "{{text}}". Output only the URL.',
      inputs: [{ key: 'width', label: 'Width', placeholder: '600' }, { key: 'height', label: 'Height', placeholder: '400' }, { key: 'color', label: 'Hex Color (no #)', placeholder: '333333' }, { key: 'text', label: 'Overlay Text', placeholder: 'Sample Image' }]
    },

    // --- 1. Marketing ---
    {
      id: 'mkt-1', title: 'AIDA Framework', category: 'Marketing', icon: 'fa-bullhorn',
      description: 'Generate copy using Attention, Interest, Desire, Action.',
      promptTemplate: 'Write marketing copy for {{product}} using the AIDA framework. Audience: {{audience}}.',
      inputs: [{ key: 'product', label: 'Product', placeholder: 'e.g. AI Coffee Maker' }, { key: 'audience', label: 'Audience', placeholder: 'Tech lovers' }]
    },
    {
      id: 'mkt-2', title: 'Google Ads Headlines', category: 'Marketing', icon: 'fa-google',
      description: 'Punchy 30-character headlines for search ads.',
      promptTemplate: 'Generate 15 Google Ads headlines (max 30 chars) for {{product}}.',
      inputs: [{ key: 'product', label: 'Product', placeholder: 'e.g. Plumber in NYC' }]
    },
    {
      id: 'mkt-3', title: 'Landing Page Hero', category: 'Marketing', icon: 'fa-desktop',
      description: 'Compelling headlines and subheaders.',
      promptTemplate: 'Write 5 hero section headline variations for {{product}}. Value prop: {{value}}.',
      inputs: [{ key: 'product', label: 'Product', placeholder: 'CRM Software' }, { key: 'value', label: 'Value Proposition', placeholder: 'Save 10 hours a week' }]
    },
    {
      id: 'mkt-4', title: 'Email Sequence', category: 'Marketing', icon: 'fa-envelope-open-text',
      description: 'Outline a 5-day email marketing sequence.',
      promptTemplate: 'Outline a 5-day email marketing nurture sequence for {{product}}.',
      inputs: [{ key: 'product', label: 'Product', placeholder: 'Fitness Coaching' }]
    },
    {
      id: 'mkt-5', title: 'Press Release', category: 'Marketing', icon: 'fa-newspaper',
      description: 'Professional press release for company news.',
      promptTemplate: 'Write a press release for {{company}} about {{event}}.',
      inputs: [{ key: 'company', label: 'Company', placeholder: 'TechCorp' }, { key: 'event', label: 'News', placeholder: 'Series A Funding' }]
    },

    // --- NEW ADDITIONS (50 Tools) ---
    // Business
    {
      id: 'biz-6', title: 'Pitch Deck Critiquer', category: 'Business', icon: 'fa-chalkboard-user',
      description: 'Get feedback on your slide content.',
      promptTemplate: 'Critique this pitch deck slide text for clarity and impact: "{{text}}". Target audience: Investors.',
      inputs: [{ key: 'text', label: 'Slide Content', placeholder: 'Our market size is...' }]
    },
    {
      id: 'biz-7', title: 'Investor Cold Email', category: 'Business', icon: 'fa-envelope-circle-check',
      description: 'Write outreach emails to VCs.',
      promptTemplate: 'Write a cold email to an investor about my startup {{startup_name}}. Key metric: {{metric}}.',
      inputs: [{ key: 'startup_name', label: 'Startup Name', placeholder: 'Acme AI' }, { key: 'metric', label: 'Key Metric', placeholder: '$10k MRR' }]
    },
    {
      id: 'biz-8', title: 'Value Prop Canvas', category: 'Business', icon: 'fa-canvas',
      description: 'Define customer pains and gains.',
      promptTemplate: 'Create a Value Proposition Canvas for {{product}}. Customer Segment: {{segment}}.',
      inputs: [{ key: 'product', label: 'Product', placeholder: 'Smart Watch' }, { key: 'segment', label: 'Customer', placeholder: 'Athletes' }]
    },
    {
      id: 'biz-9', title: 'Competitor Battlecard', category: 'Business', icon: 'fa-chess',
      description: 'Compare your product vs competitors.',
      promptTemplate: 'Create a comparison battlecard between {{my_product}} and {{competitor}}. Highlight 3 advantages.',
      inputs: [{ key: 'my_product', label: 'My Product', placeholder: 'Zoom' }, { key: 'competitor', label: 'Competitor', placeholder: 'Skype' }]
    },
    {
      id: 'biz-10', title: 'Mission Statement', category: 'Business', icon: 'fa-flag',
      description: 'Draft inspiring mission statements.',
      promptTemplate: 'Generate 5 mission statement options for a {{industry}} company that values {{values}}.',
      inputs: [{ key: 'industry', label: 'Industry', placeholder: 'EdTech' }, { key: 'values', label: 'Values', placeholder: 'Accessibility and Fun' }]
    },

    // Marketing
    {
      id: 'mkt-6', title: 'SEO Keyword Clusters', category: 'Marketing', icon: 'fa-diagram-project',
      description: 'Group keywords by intent.',
      promptTemplate: 'Group these keywords into semantic clusters for SEO content strategy: {{keywords}}.',
      inputs: [{ key: 'keywords', label: 'Keywords List', placeholder: 'running shoes, best sneakers, marathon gear...' }]
    },
    {
      id: 'mkt-7', title: 'Sales Script Gen', category: 'Marketing', icon: 'fa-headset',
      description: 'Cold call scripts that convert.',
      promptTemplate: 'Write a cold call script for selling {{product}} to {{persona}}. Focus on pain point: {{pain}}.',
      inputs: [{ key: 'product', label: 'Product', placeholder: 'SEO Services' }, { key: 'persona', label: 'Persona', placeholder: 'Small Business Owner' }, { key: 'pain', label: 'Pain Point', placeholder: 'Low Traffic' }]
    },
    {
      id: 'mkt-8', title: 'Objection Handling', category: 'Marketing', icon: 'fa-shield-cat',
      description: 'Overcome sales resistance.',
      promptTemplate: 'Provide 3 responses to the sales objection: "{{objection}}" when selling {{product}}.',
      inputs: [{ key: 'objection', label: 'Objection', placeholder: 'It is too expensive' }, { key: 'product', label: 'Product', placeholder: 'SaaS Tool' }]
    },
    {
      id: 'mkt-9', title: 'Influencer Outreach', category: 'Marketing', icon: 'fa-handshake-simple',
      description: 'DM templates for collabs.',
      promptTemplate: 'Write an Instagram DM to an influencer inviting them to collaborate on {{campaign}}.',
      inputs: [{ key: 'campaign', label: 'Campaign', placeholder: 'Summer Launch' }]
    },
    {
      id: 'mkt-10', title: 'Press Release Headline', category: 'Marketing', icon: 'fa-newspaper',
      description: 'Catchy headlines for PR.',
      promptTemplate: 'Generate 10 press release headlines for: {{news_topic}}.',
      inputs: [{ key: 'news_topic', label: 'News Topic', placeholder: 'Company merges with AI giant' }]
    },

    // Writing & Social
    {
      id: 'soc-7', title: 'LinkedIn Carousel', category: 'Social Media', icon: 'fa-images',
      description: 'Outline for a slide deck post.',
      promptTemplate: 'Create an outline for a 5-slide LinkedIn carousel about {{topic}}.',
      inputs: [{ key: 'topic', label: 'Topic', placeholder: 'Remote Work Tips' }]
    },
    {
      id: 'soc-8', title: 'Twitter Hook Gen', category: 'Social Media', icon: 'fa-fish',
      description: 'Stop the scroll with hooks.',
      promptTemplate: 'Write 5 viral Twitter hooks for a thread about {{topic}}.',
      inputs: [{ key: 'topic', label: 'Topic', placeholder: 'No-code tools' }]
    },
    {
      id: 'write-6', title: 'eBook Outliner', category: 'Writing', icon: 'fa-book',
      description: 'Plan your next digital product.',
      promptTemplate: 'Create a chapter outline for an eBook titled "{{title}}". Target audience: {{audience}}.',
      inputs: [{ key: 'title', label: 'Title', placeholder: 'Freelancing 101' }, { key: 'audience', label: 'Audience', placeholder: 'Beginners' }]
    },
    {
      id: 'soc-9', title: 'Video Title Optimizer', category: 'Social Media', icon: 'fa-video',
      description: 'High CTR YouTube titles.',
      promptTemplate: 'Suggest 5 high-CTR YouTube video titles for a video about {{content}}.',
      inputs: [{ key: 'content', label: 'Video Content', placeholder: 'Reviewing the iPhone 15' }]
    },
    {
      id: 'write-7', title: 'Podcast Questions', category: 'Writing', icon: 'fa-microphone',
      description: 'Interview prep for hosts.',
      promptTemplate: 'Generate 10 insightful interview questions for a guest who is an expert in {{expertise}}.',
      inputs: [{ key: 'expertise', label: 'Expertise', placeholder: 'Neuroscience' }]
    },

    // Coding
    {
      id: 'code-6', title: 'Python Optimizer', category: 'Coding', icon: 'fa-python',
      description: 'Improve code efficiency.',
      promptTemplate: 'Optimize this Python code for speed and readability: \n{{code}}',
      inputs: [{ key: 'code', label: 'Code', placeholder: 'def function()...' }]
    },
    {
      id: 'code-7', title: 'JSON Mock Data', category: 'Coding', icon: 'fa-file-code',
      description: 'Generate test data.',
      promptTemplate: 'Generate a JSON array with 5 objects representing {{entity}}. Include fields: {{fields}}.',
      inputs: [{ key: 'entity', label: 'Entity', placeholder: 'Users' }, { key: 'fields', label: 'Fields', placeholder: 'id, name, email, role' }]
    },
    {
      id: 'code-8', title: 'Tailwind Helper', category: 'Coding', icon: 'fa-wind',
      description: 'Find the right classes.',
      promptTemplate: 'Give me the Tailwind CSS classes to create a {{element_desc}}.',
      inputs: [{ key: 'element_desc', label: 'Element', placeholder: 'Red button with rounded corners and shadow' }]
    },
    {
      id: 'code-9', title: 'Git Commit Msg', category: 'Coding', icon: 'fa-code-commit',
      description: 'Standardize commit logs.',
      promptTemplate: 'Write a semantic Git commit message for these changes: {{changes}}.',
      inputs: [{ key: 'changes', label: 'Changes', placeholder: 'Fixed login bug and updated logo' }]
    },
    {
      id: 'code-10', title: 'Dockerfile Gen', category: 'Coding', icon: 'fa-docker',
      description: 'Containerize apps.',
      promptTemplate: 'Write a Dockerfile for a {{stack}} application.',
      inputs: [{ key: 'stack', label: 'Tech Stack', placeholder: 'Node.js Express' }]
    },

    // Design
    {
      id: 'des-5', title: 'Color Psychology', category: 'Design', icon: 'fa-droplet',
      description: 'Choose colors with meaning.',
      promptTemplate: 'Suggest primary and accent colors for a brand that wants to convey {{emotions}}.',
      inputs: [{ key: 'emotions', label: 'Emotions', placeholder: 'Trust and Excitement' }]
    },
    {
      id: 'des-6', title: 'Font Pairing', category: 'Design', icon: 'fa-font',
      description: 'Typography suggestions.',
      promptTemplate: 'Suggest 3 Google Font pairings for a {{style}} website.',
      inputs: [{ key: 'style', label: 'Style', placeholder: 'Modern Minimalist' }]
    },
    {
      id: 'des-7', title: 'UX Microcopy', category: 'Design', icon: 'fa-message',
      description: 'Write UI text snippets.',
      promptTemplate: 'Write 3 variations of a {{type}} message for a mobile app. Context: {{context}}.',
      inputs: [{ key: 'type', label: 'Type', placeholder: 'Error' }, { key: 'context', label: 'Context', placeholder: 'No internet connection' }]
    },
    {
      id: 'des-8', title: 'Storyboard Desc', category: 'Design', icon: 'fa-film',
      description: 'Describe scenes for video.',
      promptTemplate: 'Describe the visual storyboard frames for a 30-second ad about {{product}}.',
      inputs: [{ key: 'product', label: 'Product', placeholder: 'Energy Drink' }]
    },
    {
      id: 'des-9', title: 'Midjourney Helper', category: 'Design', icon: 'fa-robot',
      description: 'Optimize image prompts.',
      promptTemplate: 'Enhance this prompt for Midjourney v6 to be photorealistic and cinematic: "{{prompt}}"',
      inputs: [{ key: 'prompt', label: 'Base Prompt', placeholder: 'Cat in space' }]
    },

    // Productivity & Lifestyle
    {
      id: 'prod-5', title: 'Decision Matrix', category: 'Productivity', icon: 'fa-table-cells',
      description: 'Weigh pros and cons.',
      promptTemplate: 'Create a decision matrix comparing option A: {{optA}} and option B: {{optB}} based on cost, time, and impact.',
      inputs: [{ key: 'optA', label: 'Option A', placeholder: 'Hire agency' }, { key: 'optB', label: 'Option B', placeholder: 'Hire freelancer' }]
    },
    {
      id: 'life-6', title: 'Morning Routine', category: 'Lifestyle', icon: 'fa-mug-saucer',
      description: 'Start your day right.',
      promptTemplate: 'Design a morning routine for a {{persona}} who wants to focus on {{goal}}.',
      inputs: [{ key: 'persona', label: 'Persona', placeholder: 'Busy Parent' }, { key: 'goal', label: 'Goal', placeholder: 'Mindfulness' }]
    },
    {
      id: 'prod-6', title: 'Book Summary', category: 'Productivity', icon: 'fa-book-open-reader',
      description: 'Key takeaways in seconds.',
      promptTemplate: 'Summarize the top 5 lessons from the book "{{book}}".',
      inputs: [{ key: 'book', label: 'Book Title', placeholder: 'Atomic Habits' }]
    },
    {
      id: 'life-7', title: 'Packing List', category: 'Lifestyle', icon: 'fa-suitcase',
      description: 'Travel preparation.',
      promptTemplate: 'Create a packing list for a {{days}}-day trip to {{dest}} in {{season}}.',
      inputs: [{ key: 'days', label: 'Days', placeholder: '7' }, { key: 'dest', label: 'Destination', placeholder: 'Iceland' }, { key: 'season', label: 'Season', placeholder: 'Winter' }]
    },
    {
      id: 'life-8', title: 'Grocery from Recipe', category: 'Lifestyle', icon: 'fa-carrot',
      description: 'Shop efficiently.',
      promptTemplate: 'Extract a categorized grocery list for making {{dish}}.',
      inputs: [{ key: 'dish', label: 'Dish', placeholder: 'Lasagna' }]
    },

    // HR & Career
    {
      id: 'hr-4', title: 'Resume Bullets', category: 'HR & Legal', icon: 'fa-list-ul',
      description: 'Impactful resume points.',
      promptTemplate: 'Rewrite this resume bullet point to be result-oriented and use strong action verbs: "{{bullet}}"',
      inputs: [{ key: 'bullet', label: 'Draft Bullet', placeholder: 'Responsible for sales' }]
    },
    {
      id: 'hr-5', title: 'Cover Letter Gen', category: 'HR & Legal', icon: 'fa-file-signature',
      description: 'Personalized cover letters.',
      promptTemplate: 'Write a cover letter for a {{role}} position at {{company}}. My strength: {{strength}}.',
      inputs: [{ key: 'role', label: 'Role', placeholder: 'Product Designer' }, { key: 'company', label: 'Company', placeholder: 'Apple' }, { key: 'strength', label: 'Strength', placeholder: 'Prototyping' }]
    },
    {
      id: 'hr-6', title: 'LinkedIn About', category: 'HR & Legal', icon: 'fa-linkedin',
      description: 'Professional summary.',
      promptTemplate: 'Write a LinkedIn "About" section for a {{role}} with {{years}} years of experience. Tone: {{tone}}.',
      inputs: [{ key: 'role', label: 'Role', placeholder: 'Marketing Manager' }, { key: 'years', label: 'Years', placeholder: '10' }, { key: 'tone', label: 'Tone', placeholder: 'Approachable' }]
    },
    {
      id: 'hr-7', title: 'Onboarding Checklist', category: 'HR & Legal', icon: 'fa-clipboard-list',
      description: 'Welcome new hires.',
      promptTemplate: 'Create a 1-week onboarding checklist for a new {{role}}.',
      inputs: [{ key: 'role', label: 'Role', placeholder: 'Remote Developer' }]
    },
    {
      id: 'hr-8', title: 'Performance Review', category: 'HR & Legal', icon: 'fa-user-check',
      description: 'Draft review comments.',
      promptTemplate: 'Draft positive performance review feedback for an employee who excelled at {{achievement}}.',
      inputs: [{ key: 'achievement', label: 'Achievement', placeholder: 'Leading the project' }]
    },

    // Education
    {
      id: 'edu-5', title: 'Flashcard Maker', category: 'Education', icon: 'fa-clone',
      description: 'Study aids.',
      promptTemplate: 'Create 5 flashcards (Term - Definition) for the topic: {{topic}}.',
      inputs: [{ key: 'topic', label: 'Topic', placeholder: 'Photosynthesis' }]
    },
    {
      id: 'edu-6', title: 'Analogy Generator', category: 'Education', icon: 'fa-lightbulb',
      description: 'Simplify complex concepts.',
      promptTemplate: 'Explain {{concept}} using an analogy related to {{relatable_topic}}.',
      inputs: [{ key: 'concept', label: 'Concept', placeholder: 'API' }, { key: 'relatable_topic', label: 'Relatable Topic', placeholder: 'Restaurant' }]
    },
    {
      id: 'edu-7', title: 'Math Solver', category: 'Education', icon: 'fa-square-root-variable',
      description: 'Step-by-step logic.',
      promptTemplate: 'Solve this math problem step-by-step: {{problem}}.',
      inputs: [{ key: 'problem', label: 'Problem', placeholder: 'Integral of x^2' }]
    },
    {
      id: 'edu-8', title: 'Vocab Builder', category: 'Education', icon: 'fa-language',
      description: 'Language learning list.',
      promptTemplate: 'List 10 essential vocabulary words for {{topic}} in {{language}} with English translations.',
      inputs: [{ key: 'topic', label: 'Topic', placeholder: 'Travel' }, { key: 'language', label: 'Language', placeholder: 'Spanish' }]
    },
    {
      id: 'edu-9', title: 'Science Experiment', category: 'Education', icon: 'fa-flask',
      description: 'Fun learning ideas.',
      promptTemplate: 'Suggest a simple science experiment to demonstrate {{principle}} using household items.',
      inputs: [{ key: 'principle', label: 'Principle', placeholder: 'Density' }]
    },

    // Wellness
    {
      id: 'life-9', title: 'Meditation Script', category: 'Lifestyle', icon: 'fa-spa',
      description: 'Guided relaxation.',
      promptTemplate: 'Write a 5-minute guided meditation script focusing on {{focus}}.',
      inputs: [{ key: 'focus', label: 'Focus', placeholder: 'Stress Relief' }]
    },
    {
      id: 'life-10', title: 'Journal Prompts', category: 'Lifestyle', icon: 'fa-pen',
      description: 'Self-reflection.',
      promptTemplate: 'Give me 3 journal prompts for {{mood}}.',
      inputs: [{ key: 'mood', label: 'Mood/Goal', placeholder: 'Gratitude' }]
    },
    {
      id: 'life-11', title: 'Affirmations', category: 'Lifestyle', icon: 'fa-heart',
      description: 'Positive thinking.',
      promptTemplate: 'Generate 5 positive affirmations for {{situation}}.',
      inputs: [{ key: 'situation', label: 'Situation', placeholder: 'Overcoming Imposter Syndrome' }]
    },
    {
      id: 'life-12', title: 'Workout Split', category: 'Lifestyle', icon: 'fa-dumbbell',
      description: 'Fitness planning.',
      promptTemplate: 'Create a 4-day workout split routine focusing on {{focus}}.',
      inputs: [{ key: 'focus', label: 'Focus', placeholder: 'Hypertrophy' }]
    },
    {
      id: 'life-13', title: 'Sleep Hygiene', category: 'Lifestyle', icon: 'fa-bed',
      description: 'Better rest.',
      promptTemplate: 'Create a checklist for good sleep hygiene for someone who struggles with {{issue}}.',
      inputs: [{ key: 'issue', label: 'Issue', placeholder: 'Phone usage at night' }]
    },

    // Fun & Util
    {
      id: 'util-14', title: 'Rap Lyrics Gen', category: 'Utilities', icon: 'fa-music',
      description: 'Drop a beat.',
      promptTemplate: 'Write 8 bars of rap lyrics about {{topic}} in the style of {{style}}.',
      inputs: [{ key: 'topic', label: 'Topic', placeholder: 'Coding' }, { key: 'style', label: 'Style', placeholder: 'Old School' }]
    },
    {
      id: 'util-15', title: 'RPG Character', category: 'Utilities', icon: 'fa-dungeon',
      description: 'Backstory generator.',
      promptTemplate: 'Create a backstory for a D&D character. Class: {{class}}, Race: {{race}}.',
      inputs: [{ key: 'class', label: 'Class', placeholder: 'Rogue' }, { key: 'race', label: 'Race', placeholder: 'Elf' }]
    },
    {
      id: 'util-16', title: 'Event Itinerary', category: 'Utilities', icon: 'fa-calendar-day',
      description: 'Plan an event.',
      promptTemplate: 'Create a timeline itinerary for a {{event_type}} lasting {{duration}} hours.',
      inputs: [{ key: 'event_type', label: 'Event', placeholder: 'Birthday Party' }, { key: 'duration', label: 'Duration', placeholder: '4' }]
    },
    {
      id: 'util-17', title: 'Gift Message', category: 'Utilities', icon: 'fa-gift',
      description: 'Thoughtful notes.',
      promptTemplate: 'Write a {{tone}} gift message for {{recipient}} for their {{occasion}}.',
      inputs: [{ key: 'tone', label: 'Tone', placeholder: 'Heartfelt' }, { key: 'recipient', label: 'Recipient', placeholder: 'Mom' }, { key: 'occasion', label: 'Occasion', placeholder: 'Retirement' }]
    },
    {
      id: 'util-18', title: 'Pet Name Gen', category: 'Utilities', icon: 'fa-paw',
      description: 'Name your furry friend.',
      promptTemplate: 'Suggest 10 names for a {{animal}} that looks {{appearance}}.',
      inputs: [{ key: 'animal', label: 'Animal', placeholder: 'Cat' }, { key: 'appearance', label: 'Appearance', placeholder: 'Orange and fluffy' }]
    },

    // --- 2. App Development (10 Tools) ---
    {
      id: 'app-1', title: 'React Component Gen', category: 'App Development', icon: 'fa-react',
      description: 'Generate React functional components instantly.',
      promptTemplate: 'Create a modern React functional component for a {{name}}. Features: {{features}}. Use Tailwind CSS for styling.',
      inputs: [{ key: 'name', label: 'Component Name', placeholder: 'UserProfileCard' }, { key: 'features', label: 'Features', placeholder: 'Avatar, Bio, Follow Button' }]
    },
    {
      id: 'app-2', title: 'Flutter Widget Architect', category: 'App Development', icon: 'fa-mobile-screen',
      description: 'Create Flutter widgets with clean code.',
      promptTemplate: 'Write a Flutter/Dart widget for a {{name}}. Functionality: {{function}}. Ensure it is stateless if possible.',
      inputs: [{ key: 'name', label: 'Widget Name', placeholder: 'ProductCarousel' }, { key: 'function', label: 'Functionality', placeholder: 'Horizontal scroll with images' }]
    },
    {
      id: 'app-3', title: 'App Idea Validator', category: 'App Development', icon: 'fa-clipboard-check',
      description: 'Analyze feasibility and audience of an app idea.',
      promptTemplate: 'Analyze this app idea: "{{idea}}". Target audience: "{{audience}}". Provide 3 Pros, 3 Cons, and a feasibility score out of 10.',
      inputs: [{ key: 'idea', label: 'App Idea', placeholder: 'Uber for Dog Walkers' }, { key: 'audience', label: 'Target Audience', placeholder: 'Pet owners in cities' }]
    },
    {
      id: 'app-4', title: 'Database Schema Gen', category: 'App Development', icon: 'fa-database',
      description: 'Design SQL or NoSQL database structures.',
      promptTemplate: 'Design a database schema for an app about {{topic}}. List tables/collections, key fields, and relationships.',
      inputs: [{ key: 'topic', label: 'App Topic', placeholder: 'E-commerce Store' }]
    },
    {
      id: 'app-5', title: 'API Endpoint Planner', category: 'App Development', icon: 'fa-server',
      description: 'Plan RESTful API endpoints.',
      promptTemplate: 'List the necessary REST API endpoints (Method, Path, Description) for a backend supporting a {{app_type}}.',
      inputs: [{ key: 'app_type', label: 'App Type', placeholder: 'Social Media App' }]
    },
    {
      id: 'app-6', title: 'User Flow Designer', category: 'App Development', icon: 'fa-route',
      description: 'Map out user journeys.',
      promptTemplate: 'Describe the step-by-step user flow for a user trying to {{goal}} in a {{app_type}} app. Include UI states.',
      inputs: [{ key: 'goal', label: 'User Goal', placeholder: 'Reset Password' }, { key: 'app_type', label: 'App Type', placeholder: 'Banking App' }]
    },
    {
      id: 'app-7', title: 'App Store Description', category: 'App Development', icon: 'fa-store',
      description: 'ASO-optimized store listings.',
      promptTemplate: 'Write an engaging, ASO-optimized App Store description for an app named "{{name}}" that helps users {{benefit}}.',
      inputs: [{ key: 'name', label: 'App Name', placeholder: 'FitTrack' }, { key: 'benefit', label: 'Main Benefit', placeholder: 'lose weight effortlessly' }]
    },
    {
      id: 'app-8', title: 'React Native Screen', category: 'App Development', icon: 'fa-mobile-button',
      description: 'Generate full screens for mobile apps.',
      promptTemplate: 'Generate a React Native screen code for "{{screen_name}}" containing these elements: {{elements}}. Use standard stylesheets.',
      inputs: [{ key: 'screen_name', label: 'Screen Name', placeholder: 'LoginScreen' }, { key: 'elements', label: 'Elements', placeholder: 'Email input, Password input, Login button, Social auth' }]
    },
    {
      id: 'app-9', title: 'Tailwind Layout Gen', category: 'App Development', icon: 'fa-layer-group',
      description: 'Mobile-first HTML/Tailwind layouts.',
      promptTemplate: 'Generate HTML with Tailwind CSS classes for a mobile app layout representing a {{view_type}}.',
      inputs: [{ key: 'view_type', label: 'View Type', placeholder: 'Dashboard with stats' }]
    },
    {
      id: 'app-10', title: 'App Icon Prompt', category: 'App Development', icon: 'fa-icons',
      description: 'Prompts for AI image generators.',
      promptTemplate: 'Create a detailed AI image generation prompt for an app icon. App concept: {{concept}}. Style: {{style}}. Ensure high contrast and simplicity.',
      inputs: [{ key: 'concept', label: 'App Concept', placeholder: 'Meditation App' }, { key: 'style', label: 'Visual Style', placeholder: 'Minimalist, Zen, Blue tones' }]
    },

    // --- 2. Business ---
    {
      id: 'biz-1', title: 'Business Name Gen', category: 'Business', icon: 'fa-signature',
      description: 'Creative names for your new venture.',
      promptTemplate: 'Generate 20 business names for a {{type}}. Keywords: {{keywords}}.',
      inputs: [{ key: 'type', label: 'Business Type', placeholder: 'Coffee Shop' }, { key: 'keywords', label: 'Keywords', placeholder: 'Modern, organic' }]
    },
    {
      id: 'biz-2', title: 'SWOT Analysis', category: 'Business', icon: 'fa-chart-pie',
      description: 'Strengths, Weaknesses, Opportunities, Threats.',
      promptTemplate: 'Perform a SWOT analysis for {{company}} in the {{industry}} sector.',
      inputs: [{ key: 'company', label: 'Company', placeholder: 'MyStartup' }, { key: 'industry', label: 'Industry', placeholder: 'Fintech' }]
    },
    {
      id: 'biz-3', title: 'Lean Canvas', category: 'Business', icon: 'fa-border-all',
      description: 'One-page business plan model.',
      promptTemplate: 'Create a Lean Canvas text outline for {{idea}}.',
      inputs: [{ key: 'idea', label: 'Business Idea', placeholder: 'Uber for dog walking' }]
    },
    {
      id: 'biz-4', title: 'Pitch Deck Outline', category: 'Business', icon: 'fa-person-chalkboard',
      description: 'Structure for an investor presentation.',
      promptTemplate: 'Create an outline for a 10-slide investor pitch deck for {{company}}.',
      inputs: [{ key: 'company', label: 'Company', placeholder: 'AI MedTech' }]
    },
    {
      id: 'biz-5', title: 'Startup Validator', category: 'Business', icon: 'fa-check-double',
      description: 'Analyze risks and potential of an idea.',
      promptTemplate: 'Validate this startup idea: {{idea}}. List 3 risks and 3 potentials.',
      inputs: [{ key: 'idea', label: 'Idea', placeholder: 'Subscription socks' }]
    },

    // --- 3. Freelance ---
    {
      id: 'free-1', title: 'Upwork Proposal', category: 'Freelance', icon: 'fa-hand-point-up',
      description: 'Winning proposals for freelance jobs.',
      promptTemplate: 'Write a persuasive Upwork proposal for a job posting about: {{job_desc}}. My skills: {{skills}}.',
      inputs: [{ key: 'job_desc', label: 'Job Description', placeholder: 'Need a React Dev...' }, { key: 'skills', label: 'My Skills', placeholder: 'React, TypeScript' }]
    },
    {
      id: 'free-2', title: 'Rate Negotiation', category: 'Freelance', icon: 'fa-money-bill-wave',
      description: 'Script to negotiate higher rates.',
      promptTemplate: 'Write a polite email negotiating a higher rate. Reason: {{reason}}.',
      inputs: [{ key: 'reason', label: 'Reason', placeholder: 'Increased scope' }]
    },
    {
      id: 'free-3', title: 'Client Onboarding', category: 'Freelance', icon: 'fa-door-open',
      description: 'Welcome email for new clients.',
      promptTemplate: 'Write a warm client onboarding email for a {{service}} business.',
      inputs: [{ key: 'service', label: 'Service', placeholder: 'SEO Agency' }]
    },
    {
      id: 'free-4', title: 'Bio Generator', category: 'Freelance', icon: 'fa-id-card',
      description: 'Professional bio for portfolios.',
      promptTemplate: 'Write a professional bio for a {{role}} with {{years}} years experience.',
      inputs: [{ key: 'role', label: 'Role', placeholder: 'Graphic Designer' }, { key: 'years', label: 'Years', placeholder: '5' }]
    },

    // --- 4. Writing (Content) ---
    {
      id: 'write-1', title: 'Grammar Fixer', category: 'Writing', icon: 'fa-spell-check',
      description: 'Correct grammar and spelling errors.',
      promptTemplate: 'Fix grammar and spelling in this text, keeping the same tone: {{text}}.',
      inputs: [{ key: 'text', label: 'Text to Fix', placeholder: 'Paste text here...' }]
    },
    {
      id: 'write-2', title: 'Text Summarizer', category: 'Writing', icon: 'fa-compress-arrows-alt',
      description: 'Summarize long text into a concise paragraph.',
      promptTemplate: 'Summarize the following text into a short paragraph: {{text}}.',
      inputs: [{ key: 'text', label: 'Text', placeholder: 'Paste long text...' }]
    },
    {
      id: 'write-3', title: 'Paraphraser', category: 'Writing', icon: 'fa-rotate',
      description: 'Rewrite text in a different style.',
      promptTemplate: 'Rewrite this text to be more {{tone}}: {{text}}.',
      inputs: [{ key: 'text', label: 'Text', placeholder: 'Original text' }, { key: 'tone', label: 'Tone', placeholder: 'Formal, Simple, Creative' }]
    },
    {
      id: 'write-4', title: 'Blog Outline', category: 'Writing', icon: 'fa-list-ol',
      description: 'Create a structure for your article.',
      promptTemplate: 'Create a detailed blog post outline for the title: "{{title}}".',
      inputs: [{ key: 'title', label: 'Blog Title', placeholder: 'Benefits of Yoga' }]
    },
    {
      id: 'write-5', title: 'Story Plot Gen', category: 'Writing', icon: 'fa-book-open',
      description: 'Generate fiction story ideas.',
      promptTemplate: 'Generate a story plot involving a {{character}} in a {{setting}}.',
      inputs: [{ key: 'character', label: 'Character', placeholder: 'Detective' }, { key: 'setting', label: 'Setting', placeholder: 'Mars Base' }]
    },

    // --- 5. Productivity ---
    {
      id: 'prod-1', title: 'Email Replier', category: 'Productivity', icon: 'fa-reply',
      description: 'Generate professional email responses.',
      promptTemplate: 'Write a polite reply to this email: "{{email_content}}". My intent: {{intent}}.',
      inputs: [{ key: 'email_content', label: 'Incoming Email', placeholder: 'Can we meet tomorrow?' }, { key: 'intent', label: 'Intent', placeholder: 'Agree and suggest 2 PM' }]
    },
    {
      id: 'prod-2', title: 'Task Breaker', category: 'Productivity', icon: 'fa-list-check',
      description: 'Break complex tasks into steps.',
      promptTemplate: 'Break down the project "{{project}}" into 10 actionable steps.',
      inputs: [{ key: 'project', label: 'Project', placeholder: 'Launch a podcast' }]
    },
    {
      id: 'prod-3', title: 'Meeting Summarizer', category: 'Productivity', icon: 'fa-clipboard-list',
      description: 'Turn notes into a summary.',
      promptTemplate: 'Summarize these meeting notes into key takeaways and action items: {{notes}}.',
      inputs: [{ key: 'notes', label: 'Notes', placeholder: 'John said...' }]
    },
    {
      id: 'prod-4', title: 'Schedule Optimizer', category: 'Productivity', icon: 'fa-calendar-check',
      description: 'Organize your day efficiently.',
      promptTemplate: 'Create a schedule for a {{role}} who needs to do: {{tasks}}.',
      inputs: [{ key: 'role', label: 'Role', placeholder: 'Manager' }, { key: 'tasks', label: 'Tasks', placeholder: 'Email, Team Meeting, Report' }]
    },

    // --- 6. Design ---
    {
      id: 'des-1', title: 'Logo Idea Gen', category: 'Design', icon: 'fa-paintbrush',
      description: 'Brainstorm logo concepts.',
      promptTemplate: 'Describe 3 logo concepts for a {{company_type}} named {{name}}.',
      inputs: [{ key: 'company_type', label: 'Type', placeholder: 'Coffee Shop' }, { key: 'name', label: 'Name', placeholder: 'BeanThere' }]
    },
    {
      id: 'des-2', title: 'Color Palette', category: 'Design', icon: 'fa-palette',
      description: 'Generate color schemes.',
      promptTemplate: 'Suggest a 5-color palette for a {{vibe}} brand. Include hex codes.',
      inputs: [{ key: 'vibe', label: 'Vibe', placeholder: 'Eco-friendly and modern' }]
    },
    {
      id: 'des-3', title: 'Midjourney Prompt', category: 'Design', icon: 'fa-image',
      description: 'Create complex art prompts.',
      promptTemplate: 'Write a detailed Midjourney prompt for an image of: {{subject}}.',
      inputs: [{ key: 'subject', label: 'Subject', placeholder: 'A cyberpunk city' }]
    },
    {
      id: 'des-4', title: 'UI Component Idea', category: 'Design', icon: 'fa-pen-ruler',
      description: 'Describe UI layout ideas.',
      promptTemplate: 'Describe the UI layout for a {{component}} in a mobile app.',
      inputs: [{ key: 'component', label: 'Component', placeholder: 'User Profile Page' }]
    },

    // --- 7. Coding ---
    {
      id: 'code-1', title: 'SQL Query Builder', category: 'Coding', icon: 'fa-database',
      description: 'Write complex SQL from English.',
      promptTemplate: 'Write a SQL query to {{goal}} for table {{table}}.',
      inputs: [{ key: 'goal', label: 'Goal', placeholder: 'Find active users' }, { key: 'table', label: 'Table', placeholder: 'users' }]
    },
    {
      id: 'code-2', title: 'Regex Generator', category: 'Coding', icon: 'fa-code',
      description: 'Create Regex patterns.',
      promptTemplate: 'Write a Regex to match: {{pattern}}.',
      inputs: [{ key: 'pattern', label: 'Pattern', placeholder: 'Email addresses' }]
    },
    {
      id: 'code-3', title: 'Code Explainer', category: 'Coding', icon: 'fa-file-code',
      description: 'Explain code in plain English.',
      promptTemplate: 'Explain this {{lang}} code: {{code}}.',
      inputs: [{ key: 'lang', label: 'Language', placeholder: 'Python' }, { key: 'code', label: 'Code', placeholder: 'def func()...' }]
    },
    {
      id: 'code-4', title: 'Bug Fixer', category: 'Coding', icon: 'fa-bug',
      description: 'Find errors in code.',
      promptTemplate: 'Find the bug in this code and fix it: {{code}}.',
      inputs: [{ key: 'code', label: 'Code', placeholder: 'Snippet here...' }]
    },
    {
      id: 'code-5', title: 'Git Helper', category: 'Coding', icon: 'fa-github',
      description: 'Find Git commands.',
      promptTemplate: 'What is the Git command to {{action}}?',
      inputs: [{ key: 'action', label: 'Action', placeholder: 'undo last commit' }]
    },

    // --- 8. Social Media ---
    {
      id: 'sm-1', title: 'YouTube Script', category: 'Social Media', icon: 'fa-youtube',
      description: 'Create a video script.',
      promptTemplate: 'Write a YouTube script for a video about "{{topic}}".',
      inputs: [{ key: 'topic', label: 'Topic', placeholder: 'Baking Sourdough' }]
    },
    {
      id: 'sm-2', title: 'Tweet Thread', category: 'Social Media', icon: 'fa-twitter',
      description: 'Viral Twitter/X threads.',
      promptTemplate: 'Write a 5-tweet thread about {{topic}}.',
      inputs: [{ key: 'topic', label: 'Topic', placeholder: 'AI trends' }]
    },
    {
      id: 'sm-3', title: 'Insta Captions', category: 'Social Media', icon: 'fa-instagram',
      description: 'Engaging captions + hashtags.',
      promptTemplate: 'Write an Instagram caption for a photo of {{photo}}. Vibe: {{vibe}}.',
      inputs: [{ key: 'photo', label: 'Photo', placeholder: 'Sunset' }, { key: 'vibe', label: 'Vibe', placeholder: 'Inspirational' }]
    },
    {
      id: 'sm-4', title: 'LinkedIn Post', category: 'Social Media', icon: 'fa-linkedin',
      description: 'Professional networking posts.',
      promptTemplate: 'Write a LinkedIn post about {{topic}}.',
      inputs: [{ key: 'topic', label: 'Topic', placeholder: 'My new promotion' }]
    },
    {
      id: 'sm-5', title: 'TikTok Ideas', category: 'Social Media', icon: 'fa-video',
      description: 'Viral video concepts.',
      promptTemplate: 'Give me 5 viral TikTok ideas for a {{niche}} account.',
      inputs: [{ key: 'niche', label: 'Niche', placeholder: 'Real Estate' }]
    },
    {
      id: 'sm-6', title: 'Post Idea Generator', category: 'Social Media', icon: 'fa-lightbulb',
      description: 'Generate 3 varied post ideas.',
      promptTemplate: 'Generate 3 creative post ideas for {{platform}} about {{topic}}. For each idea, specify the Content Type (e.g., Reel, Story, Feed Post) and Tone.',
      inputs: [{ key: 'platform', label: 'Platform', placeholder: 'Instagram' }, { key: 'topic', label: 'Topic', placeholder: 'Sustainable Fashion' }]
    },

    // --- 9. Education ---
    {
      id: 'edu-1', title: 'Study Plan', category: 'Education', icon: 'fa-calendar-days',
      description: 'Structured learning schedule.',
      promptTemplate: 'Create a {{duration}} study plan for learning {{subject}}.',
      inputs: [{ key: 'duration', label: 'Duration', placeholder: '2 weeks' }, { key: 'subject', label: 'Subject', placeholder: 'Calculus' }]
    },
    {
      id: 'edu-2', title: 'Quiz Maker', category: 'Education', icon: 'fa-circle-question',
      description: 'Generate practice questions.',
      promptTemplate: 'Create 5 multiple choice questions about {{topic}}.',
      inputs: [{ key: 'topic', label: 'Topic', placeholder: 'Biology' }]
    },
    {
      id: 'edu-3', title: 'Topic Simplifier', category: 'Education', icon: 'fa-child-reaching',
      description: 'Explain like I am 5.',
      promptTemplate: 'Explain {{topic}} like I am 5 years old.',
      inputs: [{ key: 'topic', label: 'Topic', placeholder: 'Black Holes' }]
    },
    {
      id: 'edu-4', title: 'Essay Outliner', category: 'Education', icon: 'fa-pen-to-square',
      description: 'Structure academic essays.',
      promptTemplate: 'Create an outline for an academic essay on: {{topic}}.',
      inputs: [{ key: 'topic', label: 'Topic', placeholder: 'Climate Change' }]
    },

    // --- 10. Lifestyle ---
    {
      id: 'life-1', title: 'Meal Planner', category: 'Lifestyle', icon: 'fa-utensils',
      description: 'Weekly diet plans.',
      promptTemplate: 'Create a 7-day meal plan for a {{diet}} diet.',
      inputs: [{ key: 'diet', label: 'Diet', placeholder: 'Vegan' }]
    },
    {
      id: 'life-2', title: 'Workout Gen', category: 'Lifestyle', icon: 'fa-dumbbell',
      description: 'Custom fitness routines.',
      promptTemplate: 'Create a workout plan for {{goal}}. Level: {{level}}.',
      inputs: [{ key: 'goal', label: 'Goal', placeholder: 'Muscle gain' }, { key: 'level', label: 'Level', placeholder: 'Beginner' }]
    },
    {
      id: 'life-3', title: 'Travel Plan', category: 'Lifestyle', icon: 'fa-plane',
      description: 'Itineraries for trips.',
      promptTemplate: 'Create a {{days}}-day itinerary for {{city}}.',
      inputs: [{ key: 'days', label: 'Days', placeholder: '3' }, { key: 'city', label: 'City', placeholder: 'Tokyo' }]
    },
    {
      id: 'life-4', title: 'Gift Ideas', category: 'Lifestyle', icon: 'fa-gift',
      description: 'Present suggestions.',
      promptTemplate: 'Suggest 5 gifts for a {{relation}} who likes {{interest}}.',
      inputs: [{ key: 'relation', label: 'Relation', placeholder: 'Dad' }, { key: 'interest', label: 'Interest', placeholder: 'Fishing' }]
    },
    {
      id: 'life-5', title: 'Dream Meaning', category: 'Lifestyle', icon: 'fa-cloud-moon',
      description: 'Interpret dreams.',
      promptTemplate: 'Interpret this dream: {{dream}}.',
      inputs: [{ key: 'dream', label: 'Dream', placeholder: 'Flying over ocean' }]
    },

    // --- 11. Finance ---
    {
      id: 'fin-1', title: 'Budget Planner', category: 'Finance', icon: 'fa-wallet',
      description: 'Monthly budget breakdown.',
      promptTemplate: 'Create a monthly budget breakdown for an income of {{income}}.',
      inputs: [{ key: 'income', label: 'Monthly Income', placeholder: '$4000' }]
    },
    {
      id: 'fin-2', title: 'Excel Formula', category: 'Finance', icon: 'fa-table',
      description: 'Complex spreadsheet formulas.',
      promptTemplate: 'Write an Excel formula to: {{task}}.',
      inputs: [{ key: 'task', label: 'Task', placeholder: 'Calculate CAGR' }]
    },
    {
      id: 'fin-3', title: 'Investment Terms', category: 'Finance', icon: 'fa-coins',
      description: 'Explain financial jargon.',
      promptTemplate: 'Explain the financial term "{{term}}" simply.',
      inputs: [{ key: 'term', label: 'Term', placeholder: 'Short Selling' }]
    },

    // --- 12. HR & Legal ---
    {
      id: 'hr-1', title: 'Job Description', category: 'HR & Legal', icon: 'fa-briefcase',
      description: 'Write job posts.',
      promptTemplate: 'Write a job description for a {{role}}.',
      inputs: [{ key: 'role', label: 'Role', placeholder: 'Product Manager' }]
    },
    {
      id: 'hr-2', title: 'Interview Questions', category: 'HR & Legal', icon: 'fa-users-viewfinder',
      description: 'Prepare for interviews.',
      promptTemplate: 'List 10 interview questions for a {{role}}.',
      inputs: [{ key: 'role', label: 'Role', placeholder: 'Software Engineer' }]
    },
    {
      id: 'hr-3', title: 'Legal Term Explainer', category: 'HR & Legal', icon: 'fa-scale-balanced',
      description: 'Simplify legal documents.',
      promptTemplate: 'Explain this legal clause in simple terms: {{clause}}.',
      inputs: [{ key: 'clause', label: 'Clause', placeholder: 'Paste text...' }]
    },

    // --- 13. Utilities ---
    {
      id: 'util-1', title: 'Password Generator', category: 'Utilities', icon: 'fa-key',
      description: 'Create strong passwords.',
      promptTemplate: 'Generate 5 strong, random passwords.',
      inputs: []
    },
    {
      id: 'util-2', title: 'Joke Generator', category: 'Utilities', icon: 'fa-face-laugh-squint',
      description: 'Get a good laugh.',
      promptTemplate: 'Tell me a joke about {{topic}}.',
      inputs: [{ key: 'topic', label: 'Topic', placeholder: 'Programmers' }]
    },
    {
      id: 'util-3', title: 'Quote Generator', category: 'Utilities', icon: 'fa-quote-left',
      description: 'Inspirational quotes.',
      promptTemplate: 'Give me an inspirational quote about {{topic}}.',
      inputs: [{ key: 'topic', label: 'Topic', placeholder: 'Perseverance' }]
    },
    {
      id: 'util-4', title: 'Riddle Me This', category: 'Utilities', icon: 'fa-question',
      description: 'Fun riddles to solve.',
      promptTemplate: 'Tell me a riddle about {{topic}}.',
      inputs: [{ key: 'topic', label: 'Topic', placeholder: 'Time' }]
    },
    {
      id: 'util-5', title: 'Team Name Gen', category: 'Utilities', icon: 'fa-people-group',
      description: 'Names for groups.',
      promptTemplate: 'Generate 10 creative team names for a {{type}} group.',
      inputs: [{ key: 'type', label: 'Group Type', placeholder: 'Trivia' }]
    },
     {
      id: 'util-6', title: 'Text Analyzer', category: 'Utilities', icon: 'fa-magnifying-glass-chart',
      description: 'Analyze sentiment & complexity.',
      promptTemplate: 'Analyze the sentiment and reading level of this text: {{text}}',
      inputs: [{ key: 'text', label: 'Text', placeholder: 'Paste content...' }]
    },
    {
      id: 'util-7', title: 'Horoscope', category: 'Utilities', icon: 'fa-star',
      description: 'Daily astrological forecast.',
      promptTemplate: 'Write a daily horoscope for {{sign}}.',
      inputs: [{ key: 'sign', label: 'Zodiac Sign', placeholder: 'Leo' }]
    },
    {
      id: 'util-8', title: 'Unit Converter', category: 'Utilities', icon: 'fa-right-left',
      description: 'Convert measurements.',
      promptTemplate: 'Convert {{amount}} {{from}} to {{to}}.',
      inputs: [{ key: 'amount', label: 'Amount', placeholder: '10' }, { key: 'from', label: 'From', placeholder: 'Miles' }, { key: 'to', label: 'To', placeholder: 'Kilometers' }]
    },
    {
      id: 'util-9', title: 'Trivia Question', category: 'Utilities', icon: 'fa-circle-question',
      description: 'Test your knowledge.',
      promptTemplate: 'Give me a trivia question about {{topic}}.',
      inputs: [{ key: 'topic', label: 'Topic', placeholder: 'History' }]
    },
    {
      id: 'util-10', title: 'Emoji Translator', category: 'Utilities', icon: 'fa-face-smile',
      description: 'Turn text into emojis.',
      promptTemplate: 'Translate this sentence into emojis: {{text}}',
      inputs: [{ key: 'text', label: 'Text', placeholder: 'I love pizza' }]
    },
    {
      id: 'util-11', title: 'Meta Tag Gen', category: 'Utilities', icon: 'fa-code',
      description: 'SEO meta tags.',
      promptTemplate: 'Generate HTML meta title and description for a page about {{topic}}.',
      inputs: [{ key: 'topic', label: 'Page Topic', placeholder: 'Vegan Recipes' }]
    },
    {
      id: 'util-12', title: 'Hashtag Gen', category: 'Utilities', icon: 'fa-hashtag',
      description: 'Tags for social media.',
      promptTemplate: 'Generate 15 relevant hashtags for a post about {{topic}}.',
      inputs: [{ key: 'topic', label: 'Post Topic', placeholder: 'Travel to Bali' }]
    },
    {
      id: 'util-13', title: 'Case Converter', category: 'Utilities', icon: 'fa-font',
      description: 'Change text case.',
      promptTemplate: 'Convert this text to Title Case: {{text}}',
      inputs: [{ key: 'text', label: 'Text', placeholder: 'hello world' }]
    },
    {
      id: 'ft-13', title: 'JSON Formatter', category: 'Mr. Freetools', icon: 'fa-file-code',
      description: 'Validate and beautify JSON string.',
      promptTemplate: 'Format and validate this JSON string. Output the beautified JSON with 2-space indentation. If there are errors, explain them: \n{{json}}',
      inputs: [{ key: 'json', label: 'JSON String', placeholder: '{"key": "value"}' }]
    },
    {
      id: 'ft-14', title: 'CSV to JSON', category: 'Mr. Freetools', icon: 'fa-table',
      description: 'Convert CSV data to JSON array.',
      promptTemplate: 'Convert this CSV text into a JSON array of objects. Treat the first row as headers. \nCSV:\n{{csv}}',
      inputs: [{ key: 'csv', label: 'CSV Data', placeholder: 'id,name\n1,John' }]
    },
    {
      id: 'ft-15', title: 'Lorem Ipsum Gen', category: 'Mr. Freetools', icon: 'fa-paragraph',
      description: 'Generate placeholder text.',
      promptTemplate: 'Generate {{paragraphs}} paragraphs of standard Lorem Ipsum text. Start with "Lorem ipsum dolor sit amet".',
      inputs: [{ key: 'paragraphs', label: 'Number of Paragraphs', placeholder: '3' }]
    },
    {
      id: 'ft-16', title: 'Markdown to HTML', category: 'Mr. Freetools', icon: 'fa-code',
      description: 'Convert Markdown to raw HTML.',
      promptTemplate: 'Convert the following Markdown syntax into raw HTML code. Do not include <html> or <body> tags, just the content elements: \n{{md}}',
      inputs: [{ key: 'md', label: 'Markdown Text', placeholder: '# Hello World' }]
    },
    {
      id: 'ft-17', title: 'Placeholder Image URL', category: 'Mr. Freetools', icon: 'fa-image',
      description: 'Generate placeholder image URLs.',
      promptTemplate: 'Generate a direct URL for a placeholder image service (like placehold.co) with size {{width}}x{{height}}, background color {{color}}, and text "{{text}}". Output only the URL.',
      inputs: [{ key: 'width', label: 'Width', placeholder: '600' }, { key: 'height', label: 'Height', placeholder: '400' }, { key: 'color', label: 'Hex Color (no #)', placeholder: '333333' }, { key: 'text', label: 'Overlay Text', placeholder: 'Sample Image' }]
    },
];

export const EXTERNAL_TOOLS: ExternalTool[] = [
  { name: 'ChatGPT', company: 'OpenAI', category: 'LLM', description: 'Advanced conversational AI model.', url: 'https://chat.openai.com', icon: 'fa-robot', color: 'bg-emerald-500', badge: 'Popular' },
  { name: 'Midjourney', company: 'Midjourney', category: 'Image', description: 'AI art generator known for artistic style.', url: 'https://www.midjourney.com', icon: 'fa-paintbrush', color: 'bg-indigo-600' },
  { name: 'Runway', company: 'Runway ML', category: 'Video', description: 'Video generation and editing suite.', url: 'https://runwayml.com', icon: 'fa-video', color: 'bg-pink-600' },
  { name: 'GitHub Copilot', company: 'Microsoft', category: 'Coding', description: 'AI pair programmer.', url: 'https://github.com/features/copilot', icon: 'fa-github', color: 'bg-slate-800' },
  { name: 'Jasper', company: 'Jasper AI', category: 'Marketing', description: 'AI copywriter for marketing teams.', url: 'https://www.jasper.ai', icon: 'fa-pen-nib', color: 'bg-purple-600' },
  { name: 'Notion AI', company: 'Notion', category: 'Productivity', description: 'AI integrated into workspace.', url: 'https://www.notion.so', icon: 'fa-file-lines', color: 'bg-slate-700' },
];

export const WEBSITE_RESOURCES: WebsiteResource[] = [
  { name: 'WordPress', type: 'Builder', description: 'The world\'s most popular CMS.', url: 'https://wordpress.org', icon: 'fa-wordpress', color: 'bg-blue-600', features: ['Open Source', 'Plugins', 'Themes'] },
  { name: 'Wix', type: 'Builder', description: 'Cloud-based web development platform.', url: 'https://www.wix.com', icon: 'fa-w', color: 'bg-slate-800', features: ['Drag & Drop', 'Hosting', 'Templates'] },
  { name: 'Bluehost', type: 'Hosting', description: 'Web hosting services.', url: 'https://www.bluehost.com', icon: 'fa-server', color: 'bg-blue-500', features: ['Reliable', 'Support', 'Wordpress'] },
  { name: 'GoDaddy', type: 'Domain', description: 'Internet domain registrar.', url: 'https://www.godaddy.com', icon: 'fa-globe', color: 'bg-green-600', features: ['Domains', 'Hosting', 'Email'] },
  { name: 'Udemy', type: 'Learning', description: 'Online learning platform.', url: 'https://www.udemy.com', icon: 'fa-graduation-cap', color: 'bg-red-500', features: ['Courses', 'Instructors', 'Certificates'] },
  { name: 'Shopify', type: 'Commerce', description: 'E-commerce platform.', url: 'https://www.shopify.com', icon: 'fa-shopify', color: 'bg-green-500', features: ['Storefront', 'Payments', 'Marketing'] },
  { name: 'Google Analytics', type: 'Analytics', description: 'Web analytics service.', url: 'https://analytics.google.com', icon: 'fa-chart-simple', color: 'bg-orange-500', features: ['Tracking', 'Reports', 'Insights'] },
  { name: 'Figma', type: 'Design', description: 'Interface design tool.', url: 'https://www.figma.com', icon: 'fa-figma', color: 'bg-purple-600', features: ['Vector', 'Prototyping', 'Collaboration'] }
];

export const FREELANCE_PLATFORMS = [
  { name: 'Upwork', description: 'Global freelancing platform.', url: 'https://www.upwork.com', icon: 'fa-upwork', color: 'bg-green-600' },
  { name: 'Fiverr', description: 'Freelance services marketplace.', url: 'https://www.fiverr.com', icon: 'fa-handshake', color: 'bg-green-500' },
  { name: 'Freelancer', description: 'Freelance marketplace.', url: 'https://www.freelancer.com', icon: 'fa-laptop', color: 'bg-blue-500' },
  { name: 'Toptal', description: 'Exclusive network of top talent.', url: 'https://www.toptal.com', icon: 'fa-gem', color: 'bg-indigo-600' },
  { name: 'Guru', description: 'Freelance marketplace.', url: 'https://www.guru.com', icon: 'fa-briefcase', color: 'bg-purple-600' }
];

export const VFX_SOFTWARE = [
  { name: 'Blender', type: '3D Suite', description: 'Free and open source 3D creation suite.', url: 'https://www.blender.org', icon: 'fa-cube', color: 'bg-orange-500', badge: 'Free' },
  { name: 'After Effects', type: 'Compositing', description: 'Digital visual effects and motion graphics.', url: 'https://www.adobe.com/products/aftereffects.html', icon: 'fa-layer-group', color: 'bg-purple-700' },
  { name: 'Maya', type: '3D Animation', description: '3D computer animation software.', url: 'https://www.autodesk.com/products/maya/overview', icon: 'fa-dragon', color: 'bg-teal-600' },
  { name: 'Cinema 4D', type: '3D Design', description: '3D modeling, animation and rendering software.', url: 'https://www.maxon.net/en/cinema-4d', icon: 'fa-circle-notch', color: 'bg-blue-600' }
];

export const VFX_LEARNING = [
  { name: 'Video Copilot', topic: 'After Effects', url: 'https://www.videocopilot.net', icon: 'fa-film' },
  { name: 'Greyscalegorilla', topic: 'Cinema 4D', url: 'https://greyscalegorilla.com', icon: 'fa-cube' },
  { name: 'Blender Guru', topic: 'Blender', url: 'https://www.blenderguru.com', icon: 'fa-cookie-bite' }
];

export const VIDEO_EDITING_RESOURCES = [
  { category: 'Software', name: 'Adobe Premiere Pro', badge: 'Pro', color: 'bg-purple-900', icon: 'fa-film', description: 'Industry standard video editing.', url: 'https://www.adobe.com/products/premiere.html' },
  { category: 'Software', name: 'DaVinci Resolve', badge: 'Free Version', color: 'bg-blue-600', icon: 'fa-wand-magic-sparkles', description: 'Professional editing and color correction.', url: 'https://www.blackmagicdesign.com/products/davinciresolve' },
  { category: 'Online Editor', name: 'CapCut', badge: 'Popular', color: 'bg-black', icon: 'fa-scissors', description: 'All-in-one video editor.', url: 'https://www.capcut.com' },
  { category: 'AI Tool', name: 'Descript', badge: 'AI', color: 'bg-indigo-500', icon: 'fa-microphone-lines', description: 'Edit video by editing text.', url: 'https://www.descript.com' },
  { category: 'Open Source', name: 'Shotcut', badge: 'Free', color: 'bg-red-600', icon: 'fa-video', description: 'Free, open source video editor.', url: 'https://shotcut.org' },
  { category: 'Mobile App', name: 'InShot', badge: 'Mobile', color: 'bg-pink-500', icon: 'fa-mobile-screen', description: 'Powerful video editor for mobile.', url: 'https://inshot.com' }
];

export const EDUCATION_PLATFORMS = [
  { name: 'Coursera', url: 'https://www.coursera.org', color: 'bg-blue-600', icon: 'fa-graduation-cap', type: 'University', description: 'Courses from top universities.' },
  { name: 'Udemy', url: 'https://www.udemy.com', color: 'bg-red-500', icon: 'fa-video', type: 'Marketplace', description: 'Global marketplace for learning and teaching.' },
  { name: 'edX', url: 'https://www.edx.org', color: 'bg-slate-800', icon: 'fa-university', type: 'University', description: 'Access to 2000+ free online courses.' },
  { name: 'Simplilearn', url: 'https://www.simplilearn.com', color: 'bg-blue-500', icon: 'fa-certificate', type: 'Bootcamp', description: 'Online bootcamp and certification courses.' },
  { name: 'Khan Academy', url: 'https://www.khanacademy.org', color: 'bg-green-500', icon: 'fa-leaf', type: 'Non-profit', description: 'Free world-class education for anyone.' }
];

export const SIMPLILEARN_COURSES = [
  { category: 'Data Science', courses: ['Data Scientist', 'Data Analyst', 'AI Engineer'] },
  { category: 'Cyber Security', courses: ['Cyber Security Expert', 'Ethical Hacker'] },
  { category: 'Cloud', courses: ['AWS Architect', 'Azure Administrator', 'DevOps Engineer'] },
  { category: 'Project Mgmt', courses: ['PMP® Certification', 'Agile Scrum Master'] },
  { category: 'Digital Marketing', courses: ['Digital Marketing Specialist', 'SEO Expert'] }
];
