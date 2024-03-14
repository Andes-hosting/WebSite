import React from "react"
import Header from "../../components/header/Header"
import Layout from "../layout/Layout"
import Footer from "../../components/footer/Footer"
import './Landing.scss'

const Plans = () => {
    return (
    <div className="landingPage">
        <Header></Header>
        <Layout id='plans'></Layout>
        <Footer></Footer>
    </div>
    )
}

export default Plans