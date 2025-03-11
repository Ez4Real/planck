import { TermsOfServiceItem } from "@/components/Common/TermsOfServiceItem"
import { TermsOfServiceTitle } from "@/components/Common/TermsOfServiceTitle"
import { Box, Container, Heading, List, Separator, Text } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import { Link as RouterLink } from "@tanstack/react-router"

export const Route = createFileRoute("/_main_layout/terms-of-service")({
  component: TermsOfService,
})


function TermsOfService() {
  return (
    <Container
      px={["16px", "42px", "42px", "42px"]}
    >
      <Heading
        as="h2"
        fontSize={["16px", "36px", "36px", "36px"]}
        lineHeight={["20px", "45px", "45px", "45px"]}
      >Terms of Service</Heading>

      <Box maxW={["365px", "1040px", "1040px", "1040px"]}>
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
          mt={["12px", "24px", "24px", "24px"]}
        >Welcome! We're glad you're interested in Planck Technologies, Inc.
          ("Planck AI," "we," or "us"). This document covers our website www.planckai.io,
          software, and related services (collectively, the "Service"). These Terms and Conditions,
          along with our Privacy Policy
          <RouterLink
            className="link-footer"
            to="/privacy-policy"
            hash="root"
          > <span style={{ color: "#131313", fontSize: "16px" }}>(https://planckai.io/privacy)</span>
          </RouterLink>
          ,form a legally binding agreement
          between you and Planck AI.
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
      </Box>

      <Box maxW={["362px", "1095px", "1095px", "1095px"]}>
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
          Except for the specific disputes outlined in Section 15, you agree that any dispute arising under these Terms will be resolved by binding, individual arbitration.<br/>By accepting these Terms, you and Planck AI each waive the right to a trial by jury and the right to participate in any class action or representative proceeding.
        </Text>
      </Box>

      <Separator
        mt={["32px", "42px", "42px", "42px"]}
        mb={["24px", "42px", "42px", "42px"]}
        borderColor="black"
      />

      <Box maxW={["365px", "1040px", "1040px", "1040px"]}>
        <Text
          fontSize={["16px", "20px", "20px", "20px"]}
          fontWeight="600"
          lineHeight={["20px", "25px", "25px", "25px"]}
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
            "Planck AI Service Overview. Our Planck AI platform offers a suite of data and document analysis tools driven by machine learning, to help users understand more easily, about the information in those files. The platform can also provide suggested texts, outputs or other functions.",
            "Eligibility. You must be at least 18 years old or the age of majority in your jurisdiction, whichever is older, to use the Service. By agreeing to these Terms, you represent and warrant that (a) you meet this age requirement; (b) you have not been previously suspended or removed from the Service; and (c) your registration and use of the Service comply with all applicable laws and regulations. If you are an entity, organization, or company, the individual accepting these Terms on your behalf represents and warrants that they have the authority to bind you to these Terms.",
            "Accounts and Registration: Access to many features of the Service requires account registration. During registration, you may be asked to provide certain information, including your name, email address, and other contact information. You represent and warrant that all information provided is accurate, complete, and not misleading, and that you will maintain its accuracy and completeness. You are solely responsible for maintaining the confidentiality of your account credentials and are responsible for all activities that occur under your account. In the event you believe your account security has been compromised, please notify us immediately at contact@planckai.io."
          ].map((point, index) => (
            <List.Item
              key={index}
              _marker={{ color: "ui.dark" }}
            >{point}</List.Item>
          ))}
        </List.Root>
      </Box>

      <Box maxW={["362px", "1048px", "1048px", "1048px"]}>
        <Text
          fontSize={["12px", "16px", "16px", "16px"]}
          lineHeight={["15px", "20px", "20px", "20px"]}
          mt={["24px", "42px", "42px", "42px"]}
        >
          <Text
            as="span"
            display={["flex", "inline", "inline", "inline"]}
            pb={["12px", 0, 0, 0]}
            fontSize={["13px", "18px", "18px", "18px"]}
            lineHeight={["20px", "25px", "25px", "25px"]}
            fontWeight="600"
          >Payment Terms: </Text>
          Certain features of the Service may require the payment of fees. Prior to incurring any fees, you will be afforded the opportunity to review and accept the applicable charges. Unless otherwise expressly provided in these Terms, all fees are payable in U.S. Dollars or such other currency as we may determine and are non-refundable, except where otherwise required by law. The pricing and payment terms set forth in this Section 4 are subject to any conflicting or supplemental pricing and payment terms specified in an Order Form.
        </Text>
      </Box>

      <Box maxW={["370px", "981px", "981px", "981px"]}>
        <TermsOfServiceItem
          number="4.1."
          title="Pricing."
          text="Planck AI retains the right to determine the pricing for the Service. While Planck AI will endeavor to maintain current pricing information on the Service, you are encouraged to periodically consult our pricing page for the most up-to-date details. Planck AI reserves the right to modify the fees for any feature of the Service, including the imposition of additional fees or charges, upon providing you with prior notice of such changes through the Service user interface, a pop-up notification, email, or other reasonable means. Your continued use of the Service following the effective date of a price change constitutes your acceptance of the revised pricing. You are responsible for the payment of all applicable taxes associated with the Service, excluding taxes based on Planck AI's net income. Planck AI may, at its sole discretion, extend promotional offers with varying features and pricing to any of its customers. Such promotional offers, unless specifically offered to you, will not be applicable to your account or these Terms."
        />
        <TermsOfServiceItem
          number="4.2."
          title="Online Payment Processing Partner."
          text="Planck AI does not directly process online payments for the Service. To facilitate such payments via bank account, credit card, or debit card, we utilize the services of Stripe, Inc. and its affiliates (&quot;Stripe&quot;), a third-party payment processor. These payment processing services are governed by the Stripe terms and conditions and privacy policy (collectively, the &quot;Stripe Agreements&quot;), accessible at  https://stripe.com/legal and https://stripe.com/privacy, respectively. By using the payment functionality of the Service, you agree to be bound by the Stripe Agreements, as they may be amended by Stripe from time to time. You hereby authorize Stripe to store and continue billing your designated payment method, including after its expiration, to ensure uninterrupted service. For further information regarding Stripe's services, please contact Stripe directly. Planck AI assumes no liability or responsibility for any payments processed through the Service. We reserve the right to add additional online payment providers, such as Stripe, in the future, and will update these Terms accordingly. Under certain circumstances, we may engage reseller partners for invoicing purposes."
        />
        <TermsOfServiceItem
          number="4.3."
          title="Subscription Service."
          text="The Service may include subscription-based plans with automatically recurring payments for periodic charges (&quot;Subscription Service&quot;). The &quot;Subscription Billing Date&quot; shall be the date on which you initiate your initial subscription to the Service. The Subscription Service will commence on the Subscription Billing Date and continue for the subscription period you select for your account (such period, the &quot;Initial Subscription Period&quot;), and will automatically renew for successive periods of the same duration as the Initial Subscription Period (the Initial Subscription Period and each such renewal period, each a &quot;Subscription Period&quot;) unless and until you cancel the Subscription Service or we terminate it. By activating a Subscription Service, you authorize Planck AI or its third-party payment processors to periodically charge, on a going-forward basis and until cancellation of the Subscription Service, all accrued sums on or before the payment due date. For information regarding the &quot;Subscription Fee,&quot; please refer to our pricing page. Your account will be automatically charged on the Subscription Billing Date and thereafter on the renewal date of your Subscription Service for all applicable fees and taxes for the ensuing Subscription Period. To avoid billing for the subsequent Subscription Period, you must cancel your Subscription Service prior to its renewal date via the cancellation functionality provided in your billing menu or by contacting us at contact@planckai.io. Cancellations must be received before the renewal date to avoid charges for the next Subscription Period."
        />
        <TermsOfServiceItem
          number="4.4."
          title="Delinquent Accounts."
          text="Planck AI reserves the right to suspend or terminate access to the Service, including fee-based portions thereof, for any account with outstanding and unpaid balances. In addition to the amount owed for the Service, a delinquent account will be subject to charges incidental to any chargeback or collection of unpaid amounts, including, but not limited to, collection fees. If your designated payment method is no longer valid at the time a renewal Subscription Fee is due, Planck AI reserves the right to delete your account and any associated information without incurring any liability to you."
        />

        <TermsOfServiceTitle title="Licenses" />
        <TermsOfServiceItem
          number="5.1."
          title="Limited License."
          text="Subject to your full and ongoing compliance with these Terms, Planck AI grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Service."
        />
        <TermsOfServiceItem
          number="5.2."
          title="License Restrictions."
          text="Except to the extent that such a restriction is impermissible under applicable law, you may not: (a) reproduce, distribute, publicly display, publicly perform, or create derivative works of the Service; (b) make modifications to the Service; (c) reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code, underlying structure, ideas, know-how, or algorithms relevant to the Service (except to the extent such restrictions are contrary to applicable law); (d) send or otherwise provide to Planck AI data or information considered to be sensitive or otherwise subject to specific protections under applicable laws beyond any requirements that apply to “personal information” or “personal data” generally, such as, by way of illustration, information that is regulated by the Health Insurance Portability and Accountability Act (“HIPAA”), the Payment Card Industry Data Security Standard (“PCI-DSS”), the Gramm-Leach-Bliley Act (“GLBA”), and other U.S. federal, state, or foreign laws applying specific security standards; (e) send or store material containing software viruses, worms, Trojan horses, or other harmful computer code, files, scripts, agents, or programs through the Service; (f) use any spider, crawler, scraper, or other automatic device, process, or software that intercepts, mines, scrapes, extracts, or otherwise accesses the Service to monitor, extract, copy, or collect information or data from or through the Service; (g) remove any proprietary notices or labels displayed on the Service; (h) interfere with or circumvent any feature of the Service, including any security or access control mechanism; or (i) otherwise use the Service except as expressly permitted herein. If you are prohibited under applicable law from using the Service, then you may not use it."
        />
        <TermsOfServiceItem
          number="5.3."
          title="Feedback."
          text="We value and appreciate the input and comments from our users. Should you choose to provide input and suggestions regarding existing functionalities, problems with, or proposed modifications or improvements to the Service (“Feedback”), you hereby grant Planck AI an unrestricted, perpetual, irrevocable, non-exclusive, fully paid, royalty-free right and license to exploit the Feedback in any manner and for any purpose, including to improve the Service and create other products and services. We will have no obligation to provide you with attribution for any Feedback you provide to us."
        />

        <TermsOfServiceTitle title="Ownership; Proprietary Rights." />
        <TermsOfServiceItem
          number="6.1."
          title="Ownership of Service and Materials."
          text="Planck AI owns and retains all right, title, and interest in and to the Service. The visual interfaces, graphics, design, compilation, information, data, computer code (including source code and object code), products, software, services, and all other elements of the Service, along with all improvements, enhancements, customizations, or modifications thereto provided by Planck AI (collectively, the &quot;Materials&quot;), are protected by intellectual property and other applicable laws. All Materials included in the Service are the property of Planck AI or its third-party licensors. Except as expressly authorized by Planck AI, you may not make use of the Materials. No implied licenses are granted under these Terms, and Planck AI reserves all rights to the Materials not expressly granted herein."
        />
        <TermsOfServiceItem
          number="6.2."
          title="Suggestions."
          text="You may utilize the Service to generate text, outputs, or other functions based on the input provided by you (collectively, “Suggestions”). Planck AI hereby assigns to you all of its right, title, and interest in and to any Suggestions. Notwithstanding the foregoing, you acknowledge that Suggestions are generated automatically by machine learning technology and may be similar to or the same as Suggestions provided to other customers, and no rights to any Suggestions generated, provided, or returned by the Service for or to other customers are granted to you under these Terms. Further, you acknowledge that numerous limitations apply with respect to Suggestions provided by large language and other AI models (each an “AI Model”) due to the fact that they are automatically generated, including that (a) they may contain errors or misleading information, (b) AI Models are based on predefined rules and algorithms that lack the ability to think creatively and come up with new ideas and can result in repetitive or formulaic content, (c) AI Models can struggle with understanding the nuances of language, tabular data, including slang, idioms, and cultural references, which can result in output that is out of context or does not make sense, (d) AI Models do not have emotions and cannot understand or convey emotions in the way humans can, which can result in output that lacks the empathy and emotion that humans are able to convey, (e) AI Models can perpetuate biases that are present in the data used to train them, which can result in output that is discriminatory or offensive, (f) AI Models can struggle with complex tasks that require reasoning, judgment, and decision-making, (g) AI Models require large amounts of data to train and generate content, and the data used to train AI Models may be of poor quality or biased, which will negatively impact the accuracy and quality of the generated output, and (h) output can lack the personal touch that comes with content created by humans, which can make it seem cold and impersonal. You agree that you are responsible for evaluating, and bearing all risks associated with, the use of any content, including any reliance on the accuracy, completeness, or usefulness of Suggestions. ANY SUGGESTIONS ARE PROVIDED “AS IS” WITHOUT ANY WARRANTIES OF ANY KIND."
        />

        <TermsOfServiceTitle title="Customer / Usage Data" />
        <TermsOfServiceItem
          number="7.1."
          title="Customer Data."
          text="Any data, text, and other works of authorship or other works, including source code (collectively, &quot;Customer Data&quot;), that you submit, upload, or otherwise post to or transmit (such actions, collectively, &quot;Upload&quot;) to the Service will be used solely for the purpose of providing Suggestions to you unless you affirmatively opt-in to permit Planck AI to use such Customer Data to improve and enhance the Service and for other development, diagnostic, and corrective purposes in connection with the Service and other Planck AI offerings."
        />
        <TermsOfServiceItem
          number="7.2."
          title="Usage Data."
          text="Planck AI may collect, generate, and derive performance, analytical, or usage data related to your Service use (&quot;Usage Data&quot;). Usage Data will not include Customer Data. Planck AI will use Usage Data to provide the Service, monitor its performance and stability, and address technical issues. Planck AI may also anonymize and aggregate Usage Data to improve its products and services."
        />

        <Box mt={["4px", "42px", "42px", "42px"]}>
          <TermsOfServiceItem
            title="Third-Party Software."
            text="The Service may incorporate third-party software components that are generally available without charge under licenses granting recipients broad rights to copy, modify, and distribute those components (“Third-Party Components”). While the Service is provided to you subject to these Terms, nothing in these Terms shall prevent, restrict, or be construed to prevent or restrict you from obtaining Third-Party Components under the applicable third-party licenses or to limit your use of Third-Party Components in accordance with those third-party licenses."
          />
        </Box>
        <Text
          maxW={["370px", "981px", "981px", "981px"]}
          fontWeight="600"
          fontSize={["12px", "16px", "16px", "16px"]}
          lineHeight={["15px", "20px", "20px", "20px"]}
          mt="12px"
        >Contact; Email. We may send you emails about our and third parties' products and services. It's easy to unsubscribe from these promotional emails: just reply to the email or contact us at contact@planckai.io.
        </Text>

        <Box mt={["24px", "32px", "32px", "32px"]}>
          <TermsOfServiceItem
            title="Modification of Terms."
            text="We may change these Terms occasionally, so it's important to check them periodically. We'll post the updated Terms at https://planckai.io/terms-of-service and change the &quot;Last Updated&quot; date when we make material changes. By continuing to use the Service after these changes, you agree to the new Terms. If you don't agree with the changes, please stop using the Service."
          />
        </Box>

        <TermsOfServiceTitle title="Term, Termination, and Modification of Service" />
        <TermsOfServiceItem
          number="11.1."
          title="Term:"
          text="These Terms are effective when you accept them or first use the Service, and end when either party terminates them (as described in Section 11.2) or, if applicable, when no Order Form is in effect."
        />
        <TermsOfServiceItem
          number="11.2."
          title="Termination:"
          text="If you breach these Terms, your Service access and these Terms automatically terminate. Planck AI may also terminate these Terms or your account, or suspend or terminate your Service access, at any time, for any reason, with or without notice, and without liability. If you have a free or trial account, you can delete it anytime. If you have a paid subscription, you can only terminate after your current subscription term ends by giving us notice before the end of that term."
        />
        <TermsOfServiceItem
          number="11.3."
          title="Effect of Termination:"
          text="Upon termination, your license rights end, you must stop using the Service, you will lose access to your account, and you must pay any outstanding balance. Sections 5.3 (Feedback), 6 (Ownership), 11.3 (Effect of Termination), 12 (Indemnity), 13 (Disclaimers), 14 (Limitation of Liability), 15 (Dispute Resolution), and 16 (Miscellaneous) survive termination. You are responsible for saving copies of your uploaded content, including Customer Data. You may lose access to your Service information. If your account is terminated for breach of these Terms, you cannot create a new account using different information."
        />
        <TermsOfServiceItem
          number="11.4."
          title="Service Modification:"
          text="Planck AI may modify or discontinue the Service (or any part of it), temporarily or permanently, at any time, without notice, and without liability. You should keep copies of your User Content, as Service modifications may result in loss of access."
        />

        <Box mt={["16px", "42px", "42px", "42px"]}>
          <TermsOfServiceItem
            title="Indemnity."
            text="To the fullest extent permitted by applicable law, you shall be responsible for your use of the Service, and you shall defend and indemnify Planck AI, its affiliates, and their respective shareholders, directors, managers, members, officers, employees, consultants, and agents (collectively, the “Planck AI Entities”) from and against any and all claims brought by a third party, and any related liabilities, damages, losses, and expenses, including reasonable attorneys’ fees and costs, arising out of or connected with: (1) your unauthorized use or misuse of the Service; (2) your violation of any provision of these Terms, any representation, warranty, or agreement referenced in these Terms, or any applicable law or regulation; (3) your infringement of any third-party right, including any intellectual property right or right of publicity, confidentiality, other property, or privacy; or (4) any dispute or issue between you and any third party. We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you (without limiting your indemnification obligations with respect to such matter), and in such event, you agree to cooperate fully with our defense of such claims."
          />
        </Box>

        <TermsOfServiceTitle title="Disclaimers; No Warranties by Planck AI" />
        <TermsOfServiceItem
          number="13.1."
          title="Disclaimer of Warranties:"
          text="The Service and all Materials and Content available through the Service, including Suggestions, are provided “AS IS” and on an “AS AVAILABLE” basis. Planck AI hereby disclaims all warranties of any kind, whether express or implied, relating to the Service and all Materials and Content available through the Service, including, but not limited to: (a) any implied warranty of merchantability, fitness for a particular purpose, title, quiet enjoyment, or non-infringement; and (b) any warranty arising out of course of dealing, usage, or trade. Planck AI does not warrant that the Service or any portion of the Service, or any Materials or Content offered through the Service, including Suggestions, will be uninterrupted, secure, or free of errors, viruses, or other harmful components, and Planck AI does not warrant that any of those issues will be corrected."
        />
        <TermsOfServiceItem
          number="13.2."
          title="No Warranty from Information:"
          text="No advice or information, whether oral or written, obtained by you from the Service or Planck AI Entities or any Materials or Content available through the Service, including Suggestions, shall create any warranty regarding any of the Planck AI Entities or the Service that is not expressly stated in these Terms. We are not responsible for any damage that may result from the Service or your interactions with any other service user. You understand and agree that you use any portion of the Service at your own discretion and risk, and that we are not responsible for any damage to your property (including your computer system or mobile device used in connection with the Service) or any loss of data, including User Content."
        />
        <TermsOfServiceItem
          number="13.3."
          title="Scope of Disclaimers:"
          text="The limitations, exclusions, and disclaimers in this Section 13 apply to the fullest extent permitted by applicable law. Planck AI does not disclaim any warranty or other right that Planck AI is prohibited from disclaiming under applicable law."
        />

        <TermsOfServiceTitle title="Limitation of Liability" />
        <TermsOfServiceItem
          number="14.1."
          title="Exclusion of Certain Damages:"
          text="To the fullest extent permitted by applicable law, in no event shall the Planck AI Entities be liable to you for any indirect, incidental, special, consequential, or punitive damages (including, but not limited to, damages for loss of profits, goodwill, or any other intangible loss) arising out of or relating to your access to or use of, or your inability to access or use, the Service or any Materials or Content on the Service, including Suggestions, whether based on warranty, contract, tort (including negligence), statute, or any other legal theory, and whether or not any Planck AI Entity has been informed of the possibility of such damage."
        />
        <TermsOfServiceItem
          number="14.2."
          title="Limitation of Liability:"
          text="To the fullest extent permitted by applicable law, the aggregate liability of the Planck AI Entities to you for all claims arising out of or relating to the use of or any inability to use any portion of the Service or otherwise under these Terms, whether in contract, tort, or otherwise, shall be limited to the greater of: (a) the amount you have paid to Planck AI for access to and use of the Service in the 6 months prior to the event or circumstance giving rise to the claim or, if greater, (b) USD 200."
        />
        <TermsOfServiceItem
          number="14.3."
          title="Allocation of Risk:"
          text="Each provision of these Terms that provides for a limitation of liability, disclaimer of warranties, or exclusion of damages is intended to and does allocate the risks between the parties under these Terms. This allocation is an essential element of the basis of the bargain between the parties. Each of these provisions is severable and independent of all other provisions of these Terms. The limitations in this Section 14 shall apply even if any limited remedy fails of its essential purpose."
        />

        <Text
          mt={["16px", "24px", "24px", "24px"]}
          fontSize={["14px", "16px", "16px", "16px"]}
          fontWeight="600"
          lineHeight={["18px", "20px", "20px", "20px"]}
        >
          Dispute Resolution by Binding Arbitration
        </Text>

        <TermsOfServiceTitle title="IMPORTANT: This section affects your legal rights. Please read carefully." />
        <TermsOfServiceItem
          number="15.1."
          title="Agreement to Arbitrate:"
          text="This Arbitration Agreement governs all disputes between you and Planck AI arising from these Terms, the Service, advertising, or our relationship. All disputes will be resolved by binding arbitration, not in court, except for individual claims in small claims court. This Agreement doesn't prevent you from reporting issues to government agencies, who may seek relief on your behalf. By agreeing to these Terms, you and Planck AI waive the right to a jury trial and to participate in a class action. Your rights will be determined by a neutral arbitrator, not a judge or jury. The Federal Arbitration Act governs this Agreement."
        />
        <TermsOfServiceItem
          number="15.2."
          title="No Class Actions:"
          text="You and Planck AI agree that all claims must be brought individually, not as a plaintiff or class member in any class or representative proceeding. The arbitrator may not consolidate claims or preside over any class proceeding. The arbitrator may award relief only to the individual party, except for public injunctive relief as allowed by law."
        />
        <TermsOfServiceItem
          number="15.3."
          title="Pre-Arbitration Notice:"
          text="We encourage you to contact us at contact@planckai.io to resolve issues informally. Before starting arbitration, you must send a written Notice of Dispute by certified mail, describing the claim and requested relief. If the issue isn't resolved within 60 days, either party may begin arbitration. Settlement offers will not be disclosed to the arbitrator until after the award is determined."
        />
        <TermsOfServiceItem
          number="15.4."
          title="Arbitration Procedure:"
          text="Arbitration will be conducted by a neutral arbitrator according to the American Arbitration Association's (&quot;AAA&quot;) rules, including the Consumer Arbitration Rules (the &quot;AAA Rules&quot;), as modified by this Agreement. For information on the AAA, visit https://www.adr.org. AAA Rules and consumer dispute fees are at https://www.adr.org/consumer. This Agreement controls if there are conflicts with the AAA Rules, unless the arbitrator determines that doing so would be fundamentally unfair. The arbitrator will apply these Terms as a court would. The arbitrator decides all issues, including the scope and enforceability of this Agreement. The arbitrator can award the same damages and relief as a court could award to an individual. Arbitrator decisions are enforceable in court and can be overturned only in limited circumstances. Arbitration hearings will be held in a reasonably convenient location, considering travel and other factors. The AAA will determine the location if the parties disagree. For claims of $10,000 or less, you may choose to have the arbitration conducted solely on documents, by phone, or in person, as per AAA Rules. For claims over $10,000, hearing rights are determined by AAA Rules. The arbitrator will issue a reasoned written decision."
        />
        <TermsOfServiceItem
          number="15.5."
          title="Arbitration Costs:"
          text="AAA Rules govern arbitration fees, unless this Agreement states otherwise. Fees not allocated by AAA Rules will be split equally, unless you demonstrate financial hardship or the arbitrator determines you shouldn't pay, in which case Planck AI will pay. If arbitration costs are prohibitive compared to litigation, Planck AI will pay necessary fees. Attorney's fees are governed by AAA Rules."
        />
        <TermsOfServiceItem
          number="15.6."
          title="Confidentiality:"
          text="All aspects of the arbitration, including rulings and awards, are confidential."
        />
        <TermsOfServiceItem
          number="15.7."
          title="Severability:"
          text="If any part of this Agreement (except the class action waiver) is invalid, the parties will replace it with a similar valid provision. The rest of the Agreement remains in effect. If the class action waiver is invalid, this entire Agreement is void, unless the waiver is invalid only for public injunctive relief claims. The rest of the Terms still apply."
        />
        <TermsOfServiceItem
          number="15.8."
          title="Future Changes to Arbitration Agreement:"
          text="Notwithstanding any provision in these Terms to the contrary, Planck AI agrees that if it makes any future change to this Arbitration Agreement (other than a change to the Notice Address) while you are a user of the Service, you may reject any such change by sending Planck AI written notice within thirty (30) calendar days of the change to the Notice Address provided above. By rejecting any future change, you are agreeing that you will arbitrate any dispute between us in accordance with the language of this Arbitration Agreement as of the date you first accepted these Terms (or accepted any subsequent changes to these Terms)."
        />

        <TermsOfServiceTitle title="Miscellaneous" />
        <TermsOfServiceItem
          number="16.1."
          title="General Terms."
          text="These Terms, including the Privacy Policy and any other agreements expressly incorporated by reference herein, constitute the entire and exclusive agreement between you and Planck AI concerning your use of the Service. You may not assign or transfer these Terms or your rights hereunder, in whole or in part, by operation of law or otherwise, without our prior written consent. We may assign these Terms and all rights granted hereunder, including with respect to your User Content, at any time without notice or consent. The failure to require performance of any provision shall not affect our right to require performance at any time thereafter, nor shall a waiver by us of any breach or default of these Terms, or any provision hereof, constitute a waiver of any subsequent breach or default or a waiver of the provision itself. The use of section headings in these Terms is for convenience of reference only and shall not have any impact on the interpretation of any provision. Throughout these Terms, the use of the word “including” shall be construed to mean “including but not limited to.” If any part of these Terms is held to be invalid or unenforceable, the unenforceable part shall be given effect to the greatest extent possible, and the remaining parts shall remain in full force and effect."
        />
        <TermsOfServiceItem
          number="16.2."
          title="Governing Law."
          text="These Terms shall be governed by and construed in accordance with the laws of the State of North Carolina, without regard to its principles of conflicts of law. All disputes and claims arising from or relating to these Terms shall be governed in accordance with the arbitration provisions set forth above in Section 15; provided, however, that you and Planck AI hereby submit to the personal and exclusive jurisdiction of the state courts and federal courts located within Cabarrus County, North Carolina, for the purpose of adjudicating (a) individual claims brought in small claims court, (b) claims for injunctive or equitable relief, (c) claims involving infringement or violation of intellectual property rights, and (d) the enforcement of any awards or relief provided following arbitration. We operate the Service from the United States, and we make no representation that Materials included in the Service are appropriate or available for use in other locations."
        />
        <TermsOfServiceItem
          number="16.3."
          title="Privacy Policy:"
          text="Our Privacy Policy (available at https://planckai.io/privacy) explains how we collect, use, store, and disclose your personal information and is incorporated into these Terms."
        />
        <TermsOfServiceItem
          number="16.4."
          title="Electronic Communications:"
          text="By using the Service, you agree to receive electronic communications from us as described in our Privacy Policy. You agree that these electronic communications satisfy any legal writing requirements."
        />
        <TermsOfServiceItem
          number="16.5."
          title="Contact Information."
          text="You may contact us by sending correspondence to that address or by emailing us at contact@planckai.io."
        />
        <TermsOfServiceItem
          number="16.6."
          title="Notice to California Residents:"
          text="Under California Civil Code Section 1789.3, California residents may contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 N. Market Blvd., Suite S-202, Sacramento, CA 95834, or by telephone at 1-800-952-5210 to resolve a complaint regarding the Service or to obtain further information regarding use of the Service."
        />
        <TermsOfServiceItem
          number="16.7."
          title="No Support:"
          text="We don't guarantee support for the Service. If we do offer it, it will be according to our published policies."
        />
        <TermsOfServiceItem
          number="16.8."
          title="International Use."
          text="This Service is designed for users in the United States. We can't guarantee it's appropriate or available elsewhere. Using the Service where it's illegal is prohibited."
        />
      </Box>
    </Container>
  )
}
