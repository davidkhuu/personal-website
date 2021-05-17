import Container from "./container"
import Head from "next/head"
import { WEBSITE_NAME } from "../lib/constants"
import Layout from "./layout"
import Header from './header'

type Props = {
  title?: string
  children: React.ReactNode
  preview?: boolean
}

const Page = ({ title = '', children, preview }: Props) => {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{title}{title ? ' | ' : ''}{WEBSITE_NAME}</title>
      </Head>
      <Container>
        <Header />
        {children}
      </Container>
    </Layout>
  )
}

export default Page
