import Layout from '../components/Layout'
import SideBar from '../components/SideBar'
import Title from '../components/Title'
import Content from '../components/Content'
import Main from '../components/Main'

const StepThree = () => {
  return (
    <div>
        <Layout>
            <SideBar />
            <Main>
              <Title   />
              <Content />
            </Main>
        </Layout>
    </div>
  )
}

export default StepThree