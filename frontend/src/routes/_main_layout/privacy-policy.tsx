import { PrivacyPolicyItem } from "@/components/Common/PrivacyPolicyItem"
import { PrivacyPolicyListItem } from "@/components/Common/PrivacyPolicyListItem"
import { Box, Container, Heading, List, Text } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_main_layout/privacy-policy")({
  component: PrivacyPolicy,
})


function PrivacyPolicy() {

  return (
    <Container
      p={["18px 21px 206px 16px", "4px 42px 393px", "4px 42px 393px", "4px 42px 393px",]}
    >
      <Heading
        as="h5"
        fontSize={["16px", "28px", "28px", "28px"]}
        lineHeight={["20px", "35px", "35px", "35px"]}
      >Privacy Policy</Heading>

      <Box>
        <Text
          fontSize={["14px", "18px", "18px", "18px"]}
          lineHeight={["18px", "23px", "23px", "23px"]}
          mt={["8px", "24px", "24px", "24px"]}
          fontWeight="600"
          
        >Effective Date: February 19, 2025</Text>
        <Text
          color="ui.muted"
          fontSize={["12px", "16px", "16px", "16px"]}
          lineHeight={["15px", "20px", "20px", "20px"]}
          mt="16px"
        >Planck Technologies Inc ("Company," "we," "our," or "us"), a Delaware C Corporation, provides AI-powered enterprise data solutions. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services in the USA, Europe (including the United Kingdom and European Economic Area), India, and other applicable jurisdictions.</Text>

        <PrivacyPolicyListItem
          number="1"
          title="Information We Collect"
          description="We collect the following types of information to provide and improve our services"
          points={[
            "Personal Data: Includes name, email, job title, contact details, and account credentials provided through account creation, service inquiries, or support requests.",
            "Enterprise Data: Data you provide via uploaded documents, integrated systems (e.g., Jira, Salesforce, Excel), and workspace collaborations. This data remains your property.",
            "Usage Data: Automatically collected information such as IP addresses, device details, browser type, and interaction with our services.",
            "Cookies and Tracking Technologies: We use cookies and similar tools to enhance functionality and analytics. You can manage preferences through browser settings."
          ]}
        />
        <PrivacyPolicyListItem
          number="2"
          title="How We Use Information"
          description="Your data is processed for the following purposes"
          points={[
            "Service Delivery: To provide, maintain, and improve our solutions.",
            "Support & Communication: For user support, updates, and service-related notifications.",
            "Compliance: To meet legal obligations under global privacy laws.",
            "Marketing: With your consent, we may send promotional communications, which you can opt out of anytime.",
            "Security: To detect, prevent, and address technical issues or unauthorized access."
          ]}
        />
        <PrivacyPolicyListItem
          number="3"
          title="Legal Bases for Processing (EU, UK, and EEA Users)"
          description="We process your data based on"
          points={[
            "Consent: Where required (e.g., marketing communications).",
            "Contractual Necessity: To fulfill service agreements.",
            "Legal Obligations: For compliance with laws like GDPR, UK GDPR, CCPA, CPRA, and India’s DPDP Act.",
            "Legitimate Interests: Improving services and ensuring security, provided your rights are not overridden."
          ]}
        />
        <PrivacyPolicyListItem
          number="4"
          title="Data Sharing and Disclosure"
          description="We may share information with"
          points={[
            "Service Providers: For operational support under strict confidentiality agreements.",
            "Amazon Web Services : to host our website and customer control panels",
            "Google : Google Analytics, Workspaces",
            "Hubspot : Our Customer Relationship Management",
            "Salesforce : Our Customer Relationship Management",
            "Atlassian : Trouble Ticketing Platform",
            "Microsoft : Our Customer Relationship Management, Testing Platform",
            "Mailchimp : Customer Emailing",
            "Stripe : Payment Processing",
            "Legal Authorities: When required to comply with applicable laws or protect our legal rights.",
            "Corporate Transactions: In connection with mergers or acquisitions (users will be notified of such changes).",
            "Consent-Based Sharing: We will obtain your consent before sharing information beyond these circumstances."
          ]}
        />
        <PrivacyPolicyListItem
          number="5"
          title="International Data Transfers"
          description="We process data in the USA, Europe, India, and other jurisdictions. For cross-border transfers"
          points={[
            "EU & UK Transfers: Protected under Standard Contractual Clauses (SCCs) and UK International Data Transfer Agreements (IDTAs).",
            "Indian Transfers: Comply with India’s Digital Personal Data Protection Act, 2023 (DPDP Act).",
            "US-Based Processing: Adheres to applicable state and federal privacy frameworks.",
          ]}
        />
        <PrivacyPolicyListItem
          number="6"
          title="Data Security"
          description="We implement industry-standard measures to secure your data, including"
          points={[
            "End-to-end encryption.",
            "Offline deployment and private cloud options for enterprise clients.",
            "Access controls",
          ]}
        />
      </Box>

      <PrivacyPolicyListItem
        number="7"
        title="Your Privacy Rights"
        description="Depending on your jurisdiction, you may have the following rights"
        points={[
          "Access: Obtain copies of your personal data.",
          "Rectification: Correct inaccurate or incomplete information.",
          "Deletion: Request data erasure, subject to legal obligations.",
          "Restriction & Objection: Limit or object to certain processing.",
          "Data Portability: Receive data in a machine-readable format.",
          "Withdraw Consent: Without affecting prior lawful processing."
        ]}
      />
      <PrivacyPolicyListItem
        number="7.2"
        title="Colorado, Virginia, Connecticut, and Utah Residents"
        titleFontSize="16px"
        description="Residents of these states have similar rights under their respective privacy laws. We honor valid requests for"
        points={[
          "Data access",
          "Correction",
          "Deletion",
          "Opt-outs"
        ]}
      />
      <PrivacyPolicyListItem
        number="7.3"
        title="UK and EU Residents (UK GDPR & GDPR)"
        titleFontSize="16px"
        description="You have rights to"
        points={[
          "Access",
          "Rectify",
          "Erase",
          "Restrict processing",
          "Request data portability",
          "Submit requests to privacy@planckai.io. Appeals can be directed to your Data Protection Authority."
        ]}
      />
      <PrivacyPolicyListItem
        number="7.4"
        title="India Residents (DPDP Act)"
        titleFontSize="16px"
        description="Under India’s DPDP Act, you may"
        points={[
          "Access personal data",
          "Correct inaccuracies",
          "Withdraw consent"
        ]}
      />
      <Text
        fontSize={["12px", "18px", "18px", "18px"]}
        lineHeight={["15px", "28px", "28px", "28px"]}
        fontWeight="500"
        mt="24px"
      >
        Contact us at <span
          style={{ textDecoration: "underline" }}>privacy@planckai.io.
        </span>
      </Text>
      <Box>
        <PrivacyPolicyItem
          number="8"
          title="Data Retention"
          description="We retain data only as long as necessary for the purposes outlined or to comply with legal obligations. Upon account closure or deletion requests, data is securely disposed of unless retention is legally required."
        />
        <PrivacyPolicyItem
          number="9"
          title="Children’s Privacy"
          description="Our services are not directed to children under 16, and we do not knowingly collect their data. Contact us if you believe a minor’s data has been collected."
        />
        <PrivacyPolicyItem
          number="10"
          title="Changes to This Privacy Policy"
          description="We may update this policy. Material changes will be communicated via email or prominent service notices. Continued use after updates constitutes acceptance."
        />
        <PrivacyPolicyItem
          number="11"
          title="Cookie Policy"
          description='This Cookie Policy explains how Planck AI ("we," "us," or "our") uses cookies and similar technologies on our website (www.planckai.io) (the "Website"). This policy applies to all visitors to the Website, regardless of location.'
        />

        <Box mb={["16px", "42px", "42px", "42px"]}>
          <Text
            mt={["16px", "36px", "36px", "36px"]}
            lineHeight={["18px", "20px", "20px", "20px"]}
            fontSize={["16px", "20px", "20px", "20px"]}
            fontWeight="600"
          >What are Cookies?</Text>
          <Text
            color="ui.muted"
            lineHeight={["15px", "20px", "20px", "20px"]}
            fontSize={["12px", "16px", "16px", "16px"]}
            mt="12px"
          >Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners. Similar technologies, such as web beacons, pixels, and local storage, also collect information about your browsing activity and are covered by this policy.
          </Text>
        </Box>

        <Box>
          <Text
            mb={["12px", "16px", "16px", "16px"]}
            fontSize={["14px", "16px", "16px", "16px"]}
            lineHeight={["18px", "20px", "20px", "20px"]}
            fontWeight="600"
          >Types of Cookies We Use:</Text>
          <Text
            color="ui.muted"
            fontSize={["12px", "16px", "16px", "16px"]}
            lineHeight={["15px", "20px", "20px", "20px"]}
            mt={["12px", "16px", "16px", "16px"]}
          >We use the following types of cookies on our Website:
          </Text>
          <Text
            color="ui.muted"
            fontSize={["12px", "16px", "16px", "16px"]}
            lineHeight={["15px", "20px", "20px", "20px"]}
            mt={["16px", "12px", "12px", "12px"]}
          >Strictly Necessary Cookies: These cookies are essential for the Website to function properly. They enable you to navigate the Website and use its features, such as accessing secure areas. Because these cookies are strictly necessary, we do not require your consent to use them.<br />
            Performance Cookies: These cookies collect information about how you use the Website, such as which pages you visit most often and if you receive any error messages. This information helps us improve the Website's performance and user experience. We will request your consent to use these cookies.<br />
            Functionality Cookies: These cookies allow the Website to remember choices you make (such as your language preference) and provide enhanced, more personalized features. They may also be used to provide services you have asked for, such as watching a video or commenting on a blog. The information these cookies collect may be anonymized, and they cannot track your browsing activity on other websites. We will request your consent to use these cookies.<br />
            Third-Party Cookies: We may allow third-party service providers, such as Google Analytics, e.g., analytics providers, to place cookies on our Website. These third parties may collect information about your online activities over time and across different websites. We do not control these third-party cookies, and you should consult the respective privacy policies of these third parties for more information.<br />
            Changes to this Cookie Policy: We may update this Cookie Policy from time to time. Any changes will be posted on this page with a revised "Effective Date."
          </Text>
        </Box>

        <Box mt="42px">
          <Text
            fontSize={["16px", "20px", "20px", "20px"]}
            lineHeight={["18px", "20px", "20px", "20px"]}
            fontWeight="600"
          >12. Contact Us</Text>
          <Text
            color="ui.muted"
            fontSize={["12px", "16px", "16px", "16px"]}
            lineHeight={["15px", "20px", "20px", "20px"]}
            mt="16px"
          >For privacy-related inquiries or data rights requests: Planck AI
          </Text>
          <Text
            fontWeight="600"
            fontSize={["12px", "16px", "16px", "16px"]}
            lineHeight={["15px", "20px", "20px", "20px"]}
            mt="12px"
          >Email: <Text
            color="ui.muted"
            as="span"
            textDecoration="underline"
            fontWeight="400"
          >
              privacy@planckai.io
            </Text>
          </Text>
          <Text mt="8px"
            color="ui.muted"
            fontSize={["12px", "16px", "16px", "16px"]}
            lineHeight={["15px", "20px", "20px", "20px"]}
          >Vishal Rai, Sudarshan Bhide</Text>
          <List.Root
            color="ui.muted"
            fontSize={["12px", "16px", "16px", "16px"]}
            lineHeight={["15px", "20px", "20px", "20px"]}
            mt="16px"
            marginInlineStart="1.5em"
          >
            <List.Item
              fontSize={["12px", "16px", "16px", "16px"]}
              lineHeight={["15px", "28px", "28px", "28px"]}
            >
              UK residents: Lodge complaints with the Information Commissioner’s Office (ICO) at &nbsp;
              <span
                style={{ textDecoration: "underline"}}>www.ico.org.uk.
              </span>
            </List.Item>
            <List.Item
              fontSize={["12px", "16px", "16px", "16px"]}
              lineHeight={["15px", "28px", "28px", "28px"]}
            >EU residents: File complaints with your local Data Protection Authority (DPA).</List.Item>
            <List.Item
              fontSize={["12px", "16px", "16px", "16px"]}
              lineHeight={["15px", "28px", "28px", "28px"]}
            >Indian residents: Contact the Data Protection Board of India.</List.Item>
            <List.Item
              fontSize={["12px", "16px", "16px", "16px"]}
              lineHeight={["15px", "28px", "28px", "28px"]}
            >California residents: Submit CCPA/CPRA requests via the contact details above.</List.Item>
          </List.Root>
        </Box>
      </Box>
    </Container>
  )
}
