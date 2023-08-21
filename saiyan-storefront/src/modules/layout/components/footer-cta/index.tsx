import UnderlineLink from "@modules/common/components/underline-link"

const FooterCTA = () => {
  return (
    <div className="bg-base-200 w-full">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div>
          <h3 className="text-2xl-semi">Shop the latest styles</h3>
          <div className="mt-6">
            <UnderlineLink href="/store">Explore products</UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
