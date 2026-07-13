import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { Clients } from './pages/Clients'
import { Newsroom } from './pages/Newsroom'
import { Training } from './pages/Training'

type PageType = 'home' | 'about' | 'products' | 'clients' | 'newsroom' | 'training'

function App() {
  const [page, setPage] = useState<PageType>('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageType
      const validPages: PageType[] = ['home', 'about', 'products', 'clients', 'newsroom', 'training']
      if (validPages.includes(hash)) {
        setPage(hash)
        // Update document title for SEO
        const pageTitle = hash === 'about' ? 'About Us' : hash.charAt(0).toUpperCase() + hash.slice(1)
        document.title = `${pageTitle} | ARI Static Site`
      } else {
        window.location.hash = 'home'
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // initial check

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderContent = () => {
    switch (page) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'products':
        return <Products />
      case 'clients':
        return <Clients />
      case 'newsroom':
        return <Newsroom />
      case 'training':
        return <Training />
      default:
        return <Home />
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={page} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  )
}

export default App
