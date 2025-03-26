import Featured from "../components/Featured";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import Steps from "../components/Steps";
// import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Featured />
      <Steps />
      <CTA />
      <Footer />
      {/* <Stats />
      <CTA />
      <Footer /> */}
    </>
  );
}
