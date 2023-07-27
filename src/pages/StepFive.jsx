import Layout from '../components/Layout'
import SideBar from '../components/SideBar'
import Content from '../components/Content'
import Main from '../components/Main'

const StepFive = () => {
  return (
    <div>
        <Layout>
            <SideBar />
            <Main>
              <Content />
            </Main>
        </Layout>
    </div>
  )
}

export default StepFive