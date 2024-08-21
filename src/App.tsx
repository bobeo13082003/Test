import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import SectionFour from "./components/section/SectionFour"
import SectionOne from "./components/section/SectionOne"
import SectionThree from "./components/section/SectionThree"
import SectionTwo from "./components/section/SectionTwo"


function App() {

  return (
    <div style={{ overflow: 'hidden' }}>
      <div className='container'>
        <div className="my-5">
          <Header />
        </div>
        <div style={{ padding: '85px 0' }}>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
        </div>
        <div style={{ borderBottom: 'solid rgba(0, 0, 0, 0.2)' }}>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
