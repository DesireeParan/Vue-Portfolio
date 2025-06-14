// Global JavaScript moved from Main.vue
import { ref, watch } from 'vue'
import { computePosition, offset, flip, shift } from '@floating-ui/dom'
import emailjs from '@emailjs/browser'

export const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio site built with Vue and Vuetify.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    role: 'Full Stack Developer',
    tools: ['Vue.js', 'Vuetify', 'Node.js'],
  },
  {
    title: 'E-commerce Platform',
    description: 'Full stack e-commerce app using Node.js, Express, and MongoDB.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    role: 'Backend Developer',
    tools: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support and user authentication.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    role: 'Frontend Developer',
    tools: ['Vue.js', 'Vuetify', 'Bootstrap'],
  },
  {
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support and user authentication.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    role: 'Frontend Developer',
    tools: ['Vue.js', 'Vuetify', 'Bootstrap'],
  },
]

export const skills = [
  { name: 'JavaScript', icon: 'mdi-language-javascript' },
  { name: 'Vue.js', icon: 'mdi-vuejs' },
  { name: 'Node.js', icon: 'mdi-nodejs' },
  { name: 'HTML', icon: 'mdi-language-html5' },
  { name: 'CSS', icon: 'mdi-language-css3' },
  { name: 'Vuetify', icon: 'mdi-vuetify' },
  { name: 'REST APIs', icon: 'mdi-api' },
  { name: 'Git', icon: 'mdi-git' },
  { name: 'Bootstrap', icon: 'mdi-bootstrap' },
  { name: 'Laravel', icon: 'mdi-laravel' },
  { name: 'TypeScript', icon: 'mdi-language-typescript' },
]

export const skillGroups = [
  {
    group: 'Frontend',
    description: 'Technologies for building user interfaces and client-side applications.',
    skills: [
      { name: 'JavaScript', icon: 'mdi-language-javascript', desc: 'Core scripting language for web development.' },
      { name: 'Vue.js', icon: 'mdi-vuejs', desc: 'Progressive JavaScript framework for building UIs.' },
      { name: 'HTML', icon: 'mdi-language-html5', desc: 'Markup language for web pages.' },
      { name: 'CSS', icon: 'mdi-language-css3', desc: 'Styling language for web pages.' },
      { name: 'Tailwind CSS', icon: 'mdi-tailwind', desc: 'Utility-first CSS framework for rapid UI development.' },
      { name: 'Vuetify', icon: 'mdi-vuetify', desc: 'Material Design component framework for Vue.' },
      { name: 'Bootstrap', icon: 'mdi-bootstrap', desc: 'Popular CSS framework for responsive design.' },
    ]
  },
  {
    group: 'Backend',
    description: 'Technologies for server-side development and APIs.',
    skills: [
      { name: 'Node.js', icon: 'mdi-nodejs', desc: 'JavaScript runtime for server-side development.' },
      { name: 'Laravel', icon: 'mdi-laravel', desc: 'PHP framework for web applications.' },
      { name: 'REST APIs', icon: 'mdi-api', desc: 'Architectural style for designing networked applications.' },
    ]
  },
  {
    group: 'Tools & Others',
    description: 'Development tools and additional technologies.',
    skills: [
      { name: 'Git', icon: 'mdi-git', desc: 'Version control system for tracking code changes.' },
      { name: 'TypeScript', icon: 'mdi-language-typescript', desc: 'Typed superset of JavaScript.' },
      { name: 'Vercel', icon: 'mdi-cloud-outline', desc: 'Cloud platform for static sites and serverless functions.' },
      { name: 'VS Code', icon: 'mdi-microsoft-visual-studio-code', desc: 'Popular code editor for web and cloud development.' },
      { name: 'Figma', icon: 'mdi-figma', desc: 'Collaborative interface design tool for UI/UX.' },
    ]
  }
]

export const showTooltip = ref(false)
export const logoRef = ref(null)
export const tooltipRef = ref(null)
export const tooltipStyle = ref({})

export const updateTooltipPosition = async () => {
  if (logoRef.value && tooltipRef.value) {
    const { x, y } = await computePosition(logoRef.value.$el || logoRef.value, tooltipRef.value, {
      placement: 'top',
      middleware: [offset(8), flip(), shift()],
    })
    tooltipStyle.value = {
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      zIndex: 1000,
    }
  }
}

watch(showTooltip, (val) => {
  if (val) updateTooltipPosition()
})

// NavBar items
export const navItems = [
  { title: 'Home', to: '#' },
  { title: 'Projects', to: '#projects' },
  { title: 'Skills', to: '#skills' },
  { title: 'Contact', to: '#contact' },
]

// AppFooter items
export const footerItems = [
  {
    title: 'GitHub',
    icon: 'mdi-github',
    href: 'https://github.com/DesireeParan',
  },
  {
    title: 'LinkedIn',
    icon: 'mdi-linkedin',
    href: 'https://linkedin.com/in/maria-desiree-paran',
  },
  {
    title: 'Email',
    icon: 'mdi-email-outline',
    href: 'mailto:paranmariadesiree1@gmail.com',
  },
]

export const contactForm = ref({ subject: '', name: '', email: '', message: '' })
export const sending = ref(false)
export const sendStatus = ref('')

export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export async function submitMessage() {
  if (!contactForm.value.name || !contactForm.value.email || !contactForm.value.message || !contactForm.value.subject) {
    sendStatus.value = 'Please fill in all fields.'
    return
  }
  if (!validateEmail(contactForm.value.email)) {
    sendStatus.value = 'Please enter a valid email address.'
    return
  }
  sending.value = true
  sendStatus.value = ''
  try {
    await emailjs.send(
      'service_ot2fnkf',
      'template_xfpxatb',
      {
        subject: contactForm.value.subject,
        from_name: contactForm.value.name,
        from_email: contactForm.value.email,
        message: contactForm.value.message
      },
      'bdkIYKUmFIsO2igyS'
    )
    sendStatus.value = 'Message sent successfully!'
    contactForm.value = { subject: '', name: '', email: '', message: '' }
  } catch (error) {
    sendStatus.value = 'Failed to send message. Please try again later.'
  } finally {
    sending.value = false
  }
}
