import React from "react";
import { useAppContext } from "../context/AppContext";

const PrivacyPolicy = () => {
  const { countryCode } = useAppContext();

  const renderCAPolicy = () => (
    <div className="min-h-screen text-gray-200 p-6 md:px-12 py-28">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          FACTS
        </h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          WHAT DOES Herald Lenders DO WITH YOUR PERSONAL INFORMATION?
        </h2>

        <p className="mb-4">
          Financial companies choose how they share your personal information.
          Federal law gives consumers the right to limit some but not all
          sharing. Federal law also requires us to tell you how we collect,
          share, and protect your personal information. Please read this notice
          carefully to understand what we do.
        </p>

        <h2 className="text-2xl font-semibold text-white mb-4">What?</h2>
        <p className="mb-4">
          The types of personal information we collect and share depend on the
          product or service you have with us. This information can include:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Social Security number and Account Balances</li>
          <li>Payment History and Credit Scores</li>
          <li>Credit History and Transaction History</li>
        </ul>
        <p className="mb-4">
          When you are no longer our customer, we continue to share your
          information as described in this notice.
        </p>

        <h2 className="text-2xl font-semibold text-white mb-4">How?</h2>
        <p className="mb-4">
          All financial companies need to share customers’ personal information
          to run their everyday business. In the section below, we list the
          reasons financial companies can share their customers’ personal
          information; the reasons Herald Lenders chooses to share; and whether
          you can limit this sharing.
        </p>

        <table className="w-full border-collapse border border-gray-600 mb-6">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-600 p-2">
                REASONS WE CAN SHARE YOUR PERSONAL INFORMATION
              </th>
              <th className="border border-gray-600 p-2">
                DOES Herald Lenders SHARE?
              </th>
              <th className="border border-gray-600 p-2">
                CAN YOU LIMIT THIS SHARING?
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-600 p-2">
                For our everyday business purposes
              </td>
              <td className="border border-gray-600 p-2">Yes</td>
              <td className="border border-gray-600 p-2">No</td>
            </tr>
            <tr>
              <td className="border border-gray-600 p-2">
                For our marketing purposes
              </td>
              <td className="border border-gray-600 p-2">Yes</td>
              <td className="border border-gray-600 p-2">No</td>
            </tr>
            <tr>
              <td className="border border-gray-600 p-2">
                For joint marketing with other financial companies
              </td>
              <td className="border border-gray-600 p-2">Yes</td>
              <td className="border border-gray-600 p-2">No</td>
            </tr>
            <tr>
              <td className="border border-gray-600 p-2">
                For our affiliates’ everyday business purposes
              </td>
              <td className="border border-gray-600 p-2">Yes</td>
              <td className="border border-gray-600 p-2">No</td>
            </tr>
            <tr>
              <td className="border border-gray-600 p-2">
                For our affiliates’ marketing purposes
              </td>
              <td className="border border-gray-600 p-2">No</td>
              <td className="border border-gray-600 p-2">We don’t share</td>
            </tr>
            <tr>
              <td className="border border-gray-600 p-2">
                For non-affiliates to market to you
              </td>
              <td className="border border-gray-600 p-2">No</td>
              <td className="border border-gray-600 p-2">We don’t share</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold text-white mb-4">WHO WE ARE</h2>
        <p className="mb-4">
          Who is providing this notice? Herald Lenders Funding and affiliated
          trusts.
        </p>

        <h2 className="text-2xl font-semibold text-white mb-4">WHAT WE DO</h2>
        <p className="mb-4">
          To protect your personal information from unauthorized access and use,
          we use security measures that comply with federal law. These measures
          include computer safeguards and secured files and buildings.
        </p>
        <p className="mb-4">We collect your personal information when you:</p>
        <ul className="list-disc list-inside mb-6">
          <li>Apply for a loan or provide employment information</li>
          <li>
            Give us your account information or tell us where to send money
          </li>
          <li>Give us your income information</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mb-4">DEFINITIONS</h2>
        <p className="mb-4">
          <strong>Affiliates:</strong> Companies related by common ownership or
          control.
        </p>
        <p className="mb-4">
          <strong>Nonaffiliates:</strong> Companies not related by common
          ownership or control.
        </p>
        <p className="mb-4">
          <strong>Joint Marketing:</strong> A formal agreement between
          nonaffiliated financial companies that together market financial
          products or services to you.
        </p>

        <h2 className="text-2xl font-semibold text-white mb-4">
          OTHER IMPORTANT INFORMATION
        </h2>
        <p className="mb-4">
          For questions or complaints about this loan, contact Herald Lenders at
          -------------- or at{" "}
          <span className="text-blue-400">
            customerservice@HeraldLenders.com
          </span>
          .
        </p>
      </div>
    </div>
  );

  const renderUSAPolicy = () => (
    <div class="max-w-5xl mx-auto px-6 py-10 text-white mt-10">
      <h1 class="text-2xl font-bold mb-4">FACTS</h1>
      <h2 class="text-xl font-semibold mb-2">
        What Does <span class="text-blue-600">Herald Lenders</span> Do With Your
        Personal Information?
      </h2>

      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-1">Why?</h3>
        <p>
          Financial companies choose how they share your personal information.
          Federal law gives consumers the right to limit some—but not
          all—sharing. It also requires us to tell you how we collect, share,
          and protect your personal information.
          <strong>
            Please read this notice carefully to understand what we do.
          </strong>
        </p>
      </div>

      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-1">What?</h3>
        <p>
          The types of personal information we collect and share depend on the
          product or service you have with us. This information can include:
        </p>
        <ul class="list-disc list-inside mt-2">
          <li>Social Security number and Account Balances</li>
          <li>Payment History and Credit Scores</li>
          <li>Credit History and Transaction History</li>
        </ul>
        <p class="mt-2">
          When you are no longer our customer, we continue to share your
          information as described in this notice.
        </p>
      </div>

      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-1">How?</h3>
        <p>
          All financial companies need to share customers’ personal information
          to run their everyday business. Below we list the reasons financial
          companies can share your personal information, whether Herald Lenders
          shares it, and whether you can limit this sharing.
        </p>
      </div>

      <div class="overflow-x-auto mb-6">
        <table class="min-w-full border border-gray-600 text-sm">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-600 px-4 py-2 text-left">
                Reasons We Can Share Your Personal Information
              </th>
              <th class="border border-gray-600 px-4 py-2 text-center">
                Does Herald Lenders Share?
              </th>
              <th class="border border-gray-600 px-4 py-2 text-center">
                Can You Limit This Sharing?
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-600 px-4 py-2">
                For our everyday business purposes
              </td>
              <td class="border border-gray-600 px-4 py-2 text-center">Yes</td>
              <td class="border border-gray-600 px-4 py-2 text-center">No</td>
            </tr>
            <tr class="bg-gray-800">
              <td class="border border-gray-600 px-4 py-2">
                For our marketing purposes
              </td>
              <td class="border border-gray-600 px-4 py-2 text-center">Yes</td>
              <td class="border border-gray-600 px-4 py-2 text-center">No</td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-2">
                For joint marketing with other financial companies
              </td>
              <td class="border border-gray-600 px-4 py-2 text-center">Yes</td>
              <td class="border border-gray-600 px-4 py-2 text-center">No</td>
            </tr>
            <tr class="bg-gray-800">
              <td class="border border-gray-600 px-4 py-2">
                For our affiliates’ everyday business purposes (transactions &
                experiences)
              </td>
              <td class="border border-gray-600 px-4 py-2 text-center">Yes</td>
              <td class="border border-gray-600 px-4 py-2 text-center">No</td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-2">
                For our affiliates’ business purposes (creditworthiness)
              </td>
              <td class="border border-gray-600 px-4 py-2 text-center">No</td>
              <td class="border border-gray-600 px-4 py-2 text-center">
                We don’t share
              </td>
            </tr>
            <tr class="bg-gray-800">
              <td class="border border-gray-600 px-4 py-2">
                For our affiliates to market to you
              </td>
              <td class="border border-gray-600 px-4 py-2 text-center">No</td>
              <td class="border border-gray-600 px-4 py-2 text-center">
                We don’t share
              </td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-2">
                For nonaffiliates to market to you
              </td>
              <td class="border border-gray-600 px-4 py-2 text-center">No</td>
              <td class="border border-gray-600 px-4 py-2 text-center">
                We don’t share
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mb-6">
        <h3 class="text-lg font-semibold">Questions?</h3>
        <p>
          Call <strong>[Phone Number]</strong> or visit{" "}
          <a
            href="https://www.heraldlenders.com"
            class="text-blue-600 underline"
          >
            www.HeraldLenders.com
          </a>
        </p>
      </div>

      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-1">Who We Are</h3>
        <p>
          <strong>Who is providing this notice?</strong>
        </p>
        <p>
          Herald Lenders Funding | 2017-, Herald Lenders 2018-1 SPE Trust,
          Herald Lenders 2018 Funding Trust, Herald Lenders 2019-1 & 2019-2
          Asset Securitization Trusts, LP LMS 2019-1 & 2020-1 Asset
          Securitization Trusts, Herald Lenders 2020-1.
        </p>
      </div>

      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-1">What We Do</h3>
        <p>
          <strong>
            How does Herald Lenders protect my personal information?
          </strong>
          <br />
          We use security measures that comply with federal law—such as computer
          safeguards and secured files/buildings—to protect your information.
        </p>

        <p class="mt-4">
          <strong>
            How does Herald Lenders collect my personal information?
          </strong>
        </p>
        <ul class="list-disc list-inside">
          <li>Apply for a loan</li>
          <li>Provide employment, account, or income info</li>
          <li>Tell us where to send money</li>
        </ul>
        <p class="mt-2">
          We may also collect from credit bureaus, affiliates, or other
          companies.
        </p>
      </div>

      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-1">
          Why can’t I limit all sharing?
        </h3>
        <p>Federal law allows you to limit only:</p>
        <ul class="list-disc list-inside">
          <li>
            Sharing for affiliates’ everyday business purposes
            (creditworthiness)
          </li>
          <li>Affiliates from marketing to you</li>
          <li>Sharing for nonaffiliates to market to you</li>
        </ul>
        <p class="mt-2">
          State laws may give you more rights to limit sharing.
        </p>
      </div>

      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-1">Definitions</h3>
        <p>
          <strong>Affiliates:</strong> Companies related by common
          ownership/control.
          <br />
          Includes Herald Lenders Funding entities, SPEs, and Securitization
          Trusts listed earlier.
        </p>
        <p class="mt-2">
          <strong>Nonaffiliates:</strong> Companies not related by
          ownership/control.
          <br />
          We do not share with nonaffiliates to market to you.
        </p>
        <p class="mt-2">
          <strong>Joint Marketing:</strong> A formal agreement between
          nonaffiliated companies to market together.
          <br />
          Our partners include banks, credit card companies, and finance firms.
        </p>
      </div>

      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-1">Other Important Information</h3>
        <p>For questions or complaints about your loan:</p>
        <ul class="list-disc list-inside">
          <li>
            Contact Herald Lenders at <strong>[Phone Number]</strong> or{" "}
            <strong>customerservice@HeraldLenders.com</strong>
          </li>
          <li>
            Licensed and examined by the Office of Consumer Credit Commissioner
            (OCCC)
          </li>
          <li>If unresolved, contact the OCCC to file a complaint</li>
        </ul>
      </div>
    </div>
  );

  const renderUKPolicy = () => (
    <div class="max-w-5xl text-white mx-auto p-6 mt-16">
      <h1 class="text-3xl font-bold mb-6">
        FACTS: WHAT DOES Herald Lenders DO WITH YOUR PERSONAL INFORMATION?
      </h1>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2">Why?</h2>
        <p>
          Financial companies choose how they share your personal information.
          Federal law gives consumers the right to limit some but not all
          sharing. Federal law also requires us to tell you how we collect,
          share, and protect your personal information. Please read this notice
          carefully to understand what we do.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2">What?</h2>
        <p>
          The types of personal information we collect and share depend on the
          product or service you have with us. This information can include:
        </p>
        <ul class="list-disc list-inside ml-4">
          <li>Social Security number and Account Balances</li>
          <li>Payment History and Credit Scores</li>
          <li>Credit History and Transaction History</li>
        </ul>
        <p class="mt-2">
          When you are no longer our customer, we continue to share your
          information as described in this notice.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2">How?</h2>
        <p>
          All financial companies need to share customers’ personal information
          to run their everyday business. In the section below, we list the
          reasons financial companies can share their customers’ personal
          information; the reasons Herald Lenders chooses to share; and whether
          you can limit this sharing.
        </p>

        <div class="overflow-x-auto mt-4">
          <table class="w-full text-left border border-gray-300">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 border border-gray-600">
                  Reasons we can share your personal information
                </th>
                <th class="p-3 border border-gray-600">
                  Does Herald Lenders Share?
                </th>
                <th class="p-3 border border-gray-600">
                  Can you limit this sharing?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border border-gray-600">
                  For our everyday business purposes—such as to process your
                  transactions, maintain your account(s), respond to court
                  orders and legal investigations, or report to credit bureaus
                </td>
                <td class="p-3 border border-gray-600">Yes</td>
                <td class="p-3 border border-gray-600">No</td>
              </tr>
              <tr>
                <td class="p-3 border border-gray-600">
                  For our marketing purposes— to offer our products and services
                  to you
                </td>
                <td class="p-3 border border-gray-600">Yes</td>
                <td class="p-3 border border-gray-600">No</td>
              </tr>
              <tr>
                <td class="p-3 border border-gray-600">
                  For joint marketing with other financial companies
                </td>
                <td class="p-3 border border-gray-600">Yes</td>
                <td class="p-3 border border-gray-600">No</td>
              </tr>
              <tr>
                <td class="p-3 border border-gray-600">
                  For our affiliates’ everyday business purposes—information
                  about your transactions and experiences
                </td>
                <td class="p-3 border border-gray-600">Yes</td>
                <td class="p-3 border border-gray-600">No</td>
              </tr>
              <tr>
                <td class="p-3 border border-gray-600">
                  For our affiliates’ everyday business purposes—information
                  about your creditworthiness
                </td>
                <td class="p-3 border border-gray-600">No</td>
                <td class="p-3 border border-gray-600">We don’t share</td>
              </tr>
              <tr>
                <td class="p-3 border border-gray-600">
                  For our affiliates to market to you
                </td>
                <td class="p-3 border border-gray-600">No</td>
                <td class="p-3 border border-gray-600">We don’t share</td>
              </tr>
              <tr>
                <td class="p-3 border border-gray-600">
                  For nonaffiliates to market to you
                </td>
                <td class="p-3 border border-gray-600">No</td>
                <td class="p-3 border border-gray-600">We don’t share</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2">Questions?</h2>
        <p>
          Call -------------- or go to{" "}
          <a
            href="https://www.HeraldLenders.com"
            class="text-blue-600 underline"
          >
            www.HeraldLenders.com
          </a>
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2">Who We Are</h2>
        <p class="mb-2">Who is providing this notice?</p>
        <p>
          Herald Lenders Funding | 2017-, Herald Lenders 2018-1 SPE Trust,
          Herald Lenders 2018 Funding Trust, Herald Lenders 2019-1 Asset
          Securitization Trust, Herald Lenders 2019-2 Asset Securitization
          Trust, LP LMS 2019-1 Asset Securitization Trust, Herald Lenders 2020-1
          Asset Securitization Trust, LP LMS 2020-1 Asset Securitization Trust.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2">What We Do</h2>
        <p class="mb-2 font-medium">
          How does Herald Lenders protect my personal information?
        </p>
        <p>
          To protect your personal information from unauthorized access and use,
          we use security measures that comply with federal law. These measures
          include computer safeguards and secured files and buildings.
        </p>

        <p class="mt-4 font-medium">
          How does Herald Lenders collect my personal information?
        </p>
        <ul class="list-disc list-inside ml-4">
          <li>Apply for a loan or provide employment information</li>
          <li>
            Give us your account information or tell us where to send money
          </li>
          <li>Give us your income information</li>
        </ul>
        <p class="mt-2">
          We also collect your personal information from others, such as credit
          bureaus, affiliates, or other companies.
        </p>

        <p class="mt-4 font-medium">Why can’t I limit all sharing?</p>
        <p>Federal law gives you the right to limit only:</p>
        <ul class="list-disc list-inside ml-4">
          <li>
            Sharing for affiliates’ everyday business purposes—information about
            your creditworthiness
          </li>
          <li>Affiliates from using your information to market to you</li>
          <li>Sharing for nonaffiliates to market to you</li>
        </ul>
        <p class="mt-2">
          State laws and individual companies may give you additional rights to
          limit sharing.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2">Definitions</h2>
        <p class="mb-2">
          <strong>Affiliates:</strong> Companies related by common ownership or
          control. They can be financial and nonfinancial companies.
          <br />
          Includes: Herald Lenders Funding | 2017-, Herald Lenders 2018-1 SPE
          Trust, Herald Lenders 2018 Funding Trust, Herald Lenders 2019-1 Asset
          Securitization Trust, Herald Lenders 2019-2 Asset Securitization
          Trust, LP LMS 2019-1 Asset Securitization Trust, Herald Lenders 2020-1
          Asset Securitization Trust, LP LMS 2020-1 Asset Securitization Trust.
        </p>
        <p class="mb-2">
          <strong>Nonaffiliates:</strong> Companies not related by common
          ownership or control. They can be financial and nonfinancial
          companies. Herald Lenders does not share with non affiliates so they
          can market to you.
        </p>
        <p>
          <strong>Joint marketing:</strong> A formal agreement between
          nonaffiliated financial companies that together market financial
          products or services to you. Herald Lenders’s joint marketing partners
          include banks, home improvement finance, credit card companies and
          other consumer and commercial finance companies.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-2">Other Important Information</h2>
        <p>
          For questions or complaints about this loan, contact Herald Lenders at
          ----------- or at{" "}
          <a
            href="mailto:customerservice@HeraldLenders.com"
            class="text-blue-600 underline"
          >
            customerservice@HeraldLenders.com
          </a>
          .
        </p>
        <p>
          Herald Lenders is licensed and examined by the Office of Consumer
          Credit Commissioner (OCCC), a state agency. If a complaint or question
          cannot be resolved by contacting Herald Lenders, consumers can contact
          the OCCC to file a complaint or as a general credit-related question.
        </p>
      </section>
    </div>
  );

  return countryCode === "USA"
    ? renderUSAPolicy()
    : countryCode === "UK"
    ? renderUKPolicy()
    : renderCAPolicy();
};

export default PrivacyPolicy;
