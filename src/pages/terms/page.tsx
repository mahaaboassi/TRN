import HeroSeparate from "../../components/heroSeprarte"

type Item = {
    title: string,
    description: string
}
const data: Item[] = [{
    title: "A Legal Disclaimer",
    description: "The information on this website is provided for general informational purposes only and is not guaranteed to be accurate, complete, or current. Use of this site is at your sole discretion and risk. We disclaim all liability for any loss or damage arising from reliance on the content herein. We are not responsible for third-party websites linked from this site. By using this website, you agree to our Terms, Privacy Policy, and Accessibility Policy. If you do not accept these terms, please refrain from using the site."
},{
    title: "Terms & Conditions",
    description: "By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions. All content on this site, including text, graphics, and logos, is protected by applicable intellectual property laws and may not be copied, distributed, or used without our prior written consent. The information provided is for general purposes only; we make no warranties regarding its accuracy, completeness, or reliability, and your use of any content is at your own risk. We are not liable for any loss or damage resulting from the use of this website. This site may contain links to third-party websites, which are provided for convenience only, we do not control or endorse them and disclaim all responsibility for their content. Your use of this website is also subject to our Privacy Policy. We reserve the right to modify these terms at any time without notice, and continued use constitutes acceptance of any changes."
},{
    title: "Privacy Policy",
    description: "This Privacy Policy outlines how we collect, use, and protect your personal information when you access our website or engage our services. We may collect personal data you voluntarily provide (e.g., name, email, contact details), as well as technical data (e.g., IP address, browser type). This information is used to respond to inquiries, provide services, improve user experience, and send communications, where permitted by law. We implement appropriate security measures; however, no internet transmission or electronic storage is entirely secure, and we disclaim liability for any unauthorized access. Cookies and tracking technologies may be used to analyze website usage. You may disable cookies via browser settings, though functionality may be affected. We may share data with trusted third-party service providers solely for operational purposes and in compliance with applicable data protection laws. We may disclose information to comply with legal obligations or protect our rights and users. We do not sell your data. By using this site, you consent to this policy. We reserve the right to update it at any time without notice. Continued use constitutes acceptance of any such changes."
}]


const Terms = ()=>{
    return(<article>
        <title> Terms & Conditions | TRN</title>
        <meta name="description" content={"ead TRN’s Terms & Conditions, Privacy Policy, and legal disclaimer. Learn about your rights, responsibilities, data protection, and limitations of liability when using our website and services."} />
        <meta name="keywords" content={"The Rangrez Network, TRN, terms and conditions, privacy policy, legal disclaimer, website terms, user agreement, intellectual property, liability disclaimer, data protection, cookies policy, website usage policy"} />
        <link rel="canonical" href={"/terms-and-conditions"} />
        {/*  Open Graph for Facebook, LinkedIn, etc.  */}
        <meta property="og:title" content={"Terms & Conditions | TRN"} />
        <meta property="og:url" content={"/terms-and-conditions"} />
        <meta property="og:description" content={"ead TRN’s Terms & Conditions, Privacy Policy, and legal disclaimer. Learn about your rights, responsibilities, data protection, and limitations of liability when using our website and services."} />
        {/* Twitter  */}
        <meta name="twitter:title" content={"Terms & Conditions | TRN"} />
        <meta property="twitter:description" content={"ead TRN’s Terms & Conditions, Privacy Policy, and legal disclaimer. Learn about your rights, responsibilities, data protection, and limitations of liability when using our website and services."} />


        <div className="separate-page flex flex-col gap-7 md:gap-10 lg:gap-20">
            <HeroSeparate title="Terms & Conditions"
                description=""
            />
            <div className="home  container-layout ">
                {
                    data.map((e,idx)=>(<div className="flex flex-col gap-3" key={`Privacy_Policy_${e.title}_${idx}`} >
                        <h2>{e.title}</h2>
                        <p>{e.description}</p>
                        { idx<2 &&<div className="line my-5" ></div>}
                    </div>))
                }
            </div>

        </div>
    </article>)
}
export default Terms