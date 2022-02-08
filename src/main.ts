import data from './data.json'
import './style.css'

const mainDiv = document.querySelector('main')
const template = document.getElementById('card') as HTMLTemplateElement

const bitStyle = [
  'lang',
  'bg-green-50',
  'text-sm',
  'p-2',
  'rounded-md',
  'text-green-600',
  'font-semibold',
  'hover:bg-green-800',
  'hover:text-white',
]

const list = (data as unknown as Data[]).map((item) => {
  const article = template.content.cloneNode(true) as HTMLElement
  const langContainer = article.querySelector('#langContainer')
  const toolsContainer = article.querySelector('#toolsContainer')

  article.querySelector('img')!.src = item.logo
  article.querySelector('#companyName')!.textContent = item.company
  article.querySelector('#new')!.textContent = item.new
    ? 'new!'
    : (article.querySelector('#new')!.className = '')

  article.querySelector('#featured')!.textContent = item.featured
    ? 'featured!'
    : (article.querySelector('#featured')!.className = '')

  article.querySelector('#position')!.textContent = item.position
  article.querySelector('#postedAt')!.textContent = item.postedAt
  article.querySelector('#contract')!.textContent = item.contract
  article.querySelector('#location')!.textContent = item.location
  article.querySelector('#role')!.textContent = item.role
  article.querySelector('#level')!.textContent = item.level

  item.languages.forEach((language) => {
    const span = document.createElement('span')
    span.classList.add(...bitStyle)
    let text = language
    span.textContent = text
    langContainer?.append(span)
  })

  item.tools.forEach((tool) => {
    const span = document.createElement('span')
    span.classList.add(...bitStyle)
    let text = tool
    span.textContent = text
    toolsContainer?.append(span)
  })

  return article
})

list.forEach((item) => mainDiv?.append(item))

interface Data {
  id: number
  company: string
  logo: string
  new: boolean
  featured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
}
