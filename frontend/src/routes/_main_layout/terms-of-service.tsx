// import { PrivacyPolicyItem } from "@/components/Common/PrivacyPolicyItem"
// import { PrivacyPolicyListItem } from "@/components/Common/PrivacyPolicyListItem"
import { Box, Container, Heading, List, Separator, Text } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_main_layout/terms-of-service")({
    component: TermsOfService,
})


function TermsOfService() {
  return (
    <Container
      px="42px"
    >
      <Heading
        as="h2"
        fontSize={["16px", "36px", "36px", "36px"]}
        lineHeight={["20px", "45px", "45px", "45px"]}
      >Terms of Service</Heading>

      <Box>
        <Text
          fontSize={["14px", "18px", "18px", "18px"]}
          fontWeight="600"
          lineHeight={["20px", "23px", "23px", "23px"]}
          mt="16px"
        >Planck AI Terms of Service</Text>
        <Text
          fontSize={["14px", "18px", "18px", "18px"]}
          fontWeight="600"
          lineHeight={["18px", "23px", "23px", "23px"]}
          mt="8px"
        >Last updated Feb 14, 2025</Text>
        <Text
          fontSize={["12px", "16px", "16px", "16px"]}
          lineHeight={["15px", "20px", "20px", "20px"]}
          mt={["12px" ,"24px" , "24px", "24px"]}
        >Welcome! We're glad you're interested in Planck Technologies, Inc. ("Planck AI," "we," or "us"). This document covers our website www.planckai.io, software, and related services (collectively, the "Service"). These Terms and Conditions, along with our Privacy Policy (https://planckai.io/privacy), form a legally binding agreement between you and Planck AI.
        </Text>

        <Text
          fontSize={["16px", "18px", "18px", "18px"]}
          fontWeight="600"
          lineHeight={["20px", "23px", "23px", "23px"]}
          mt={["24px", "52px", "52px", "52px"]}
        >Important Note About These Terms:</Text>
        <Text
          fontSize={["12px", "16px", "16px", "16px"]}
          lineHeight={["15px", "20px", "20px", "20px"]}
          mt="16px"
        >When you click "I Accept," sign an order form referencing these terms, or use our Service, you're agreeing to these terms. If you're using the Service for an organization that has a separate agreement with us, that agreement takes precedence if there's any conflict with these terms.
        </Text>

        <Text
          fontSize={["13px", "16px", "16px", "16px"]}
          lineHeight={["16px", "22px", "22px", "22px"]}
          mt={["16px", "36px", "36px", "36px"]}
        >
          <Text
            fontSize={["13px", "18px", "18px", "18px"]}
            as="span"
            fontWeight="600"
          >Notice of Arbitration and Class Action Waiver: </Text>
          Except for the specific disputes outlined in Section 15, you agree that any dispute arising under these Terms will be resolved by binding, individual arbitration. By accepting these Terms, you and Planck AI each waive the right to a trial by jury and the right to participate in any class action or representative proceeding.
        </Text>

        <Separator
          mt={["32px", "42px", "42px", "42px"]}
          mb={["24px", "42px", "42px", "42px"]}
        />

        <Text
          fontSize={["16px", "20px", "20px", "20px"]}
          fontWeight="600"
          lineHeight={["20px", "23px", "23px", "23px"]}
          mt={["24px", "52px", "52px", "52px"]}
        >Please carefully review the following terms</Text>
        <Text
          fontSize={["12px", "16px", "16px", "16px"]}
          lineHeight={["15px", "20px", "20px", "20px"]}
          mt={["20px", "12px", "12px", "12px"]}
        >We collect the following types of information to provide and improve our services: 
        </Text>

        <List.Root
          as="ol"
          fontSize={["12px", "16px", "16px", "16px"]}
          lineHeight={["15px", "20px", "20px", "20px"]}
          mt="12px"
          marginInlineStart="1.5em"
        >{[
            "Planck AI Service Overview. Our Planck AI platform offers a suite of data and document analysis tools driven by machine learning, to help users understand more easily, about the information in those files. The platform can also provide suggested texts, outputs or other functions",
            "Eligibility. You must be at least 18 years old or the age of majority in your jurisdiction, whichever is older, to use the Service. By agreeing to these Terms, you represent and warrant that (a) you meet this age requirement; (b) you have not been previously suspended or removed from the Service; and (c) your registration and use of the Service comply with all applicable laws and regulations. If you are an entity, organization, or company, the individual accepting these Terms on your behalf represents and warrants that they have the authority to bind you to these Terms",
            "Accounts and Registration: Access to many features of the Service requires account registration. During registration, you may be asked to provide certain information, including your name, email address, and other contact information. You represent and warrant that all information provided is accurate, complete, and not misleading, and that you will maintain its accuracy and completeness. You are solely responsible for maintaining the confidentiality of your account credentials and are responsible for all activities that occur under your account. In the event you believe your account security has been compromised, please notify us immediately at contact@planckai.io"
          ].map((point, index) => (
            <List.Item
              key={index}
              _marker={{ color: "ui.dark" }}
            >{point}</List.Item>
          ))}
        </List.Root>

        <Text
          fontSize={["12px", "16px", "16px", "16px"]}
          lineHeight={["15px", "20px", "20px", "20px"]}
          mt={["16px", "36px", "36px", "36px"]}
        >
          <Text
            as="span"
            display={["flex", "inline", "inline", "inline"]}
            pb={["12px", 0, 0, 0]}
            fontSize={["13px", "18px", "18px", "18px"]}
            fontWeight="600"
          >Payment Terms: </Text>
          Certain features of the Service may require the payment of fees. Prior to incurring any fees, you will be afforded the opportunity to review and accept the applicable charges. Unless otherwise expressly provided in these Terms, all fees are payable in U.S. Dollars or such other currency as we may determine and are non-refundable, except where otherwise required by law. The pricing and payment terms set forth in this Section 4 are subject to any conflicting or supplemental pricing and payment terms specified in an Order Form.
        </Text>



      </Box>

      <Box mt={250}>PLACEHOLDER</Box>
    </Container>
  )
}
