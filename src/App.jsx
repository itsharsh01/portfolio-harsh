import Header from './components/Header'
import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'
import portfolio from './data/portfolio.json'

function App() {
  return (
    <main id="top" className="min-h-screen bg-white px-3 py-8 md:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1400px]">
        <Header header={portfolio.header} />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <LeftColumn
              profile={portfolio.profile}
              skillsSection={portfolio.skillsSection}
              contacts={portfolio.contacts}
              blogSection={portfolio.blogSection}
            />
          </div>
          <div className="md:col-span-8">
            <RightColumn
              about={portfolio.about}
              rightPanelLinks={portfolio.rightPanelLinks}
              projectsSection={portfolio.projectsSection}
              experienceSection={portfolio.experienceSection}
              educationSection={portfolio.educationSection}
              achievementsSection={portfolio.achievementsSection}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
