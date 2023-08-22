import FooterCTA from "@modules/layout/components/footer-cta"
import FooterNav from "@modules/layout/components/footer-nav"
import MedusaCTA from "@modules/layout/components/medusa-cta"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <FooterNav />
      <MedusaCTA />
    </footer>
  )
}

export default Footer
