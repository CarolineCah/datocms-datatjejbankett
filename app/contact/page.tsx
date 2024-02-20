import { request } from "@/lib/dato";
import { toNextMetadata } from "react-datocms/seo";
import {
  StructuredText,
  StructuredTextDocument,
} from "react-datocms/structured-text";
import { ContactForm } from "@/components/ContactForm";

import { Metadata } from "next";

import query from "./page.graphql";

const getContactPageContent = async () => await request(query);

export async function generateMetadata(): Promise<Metadata> {
  const { contactPage } = await getContactPageContent();

  return toNextMetadata(contactPage?._seoMetaTags || []);
}

export default async function Home() {
  const { contactPage } = await request(query);

  if (!contactPage) {
    return null;
  }

  return (
    <main
      className="lg:fixed lg:inset-0 lg:flex lg:items-center lg:justify-center"
      style={{ marginTop: "100px" }}
    >
      <div className="mx-7 py-12 max-w-[700px] lg:m-0 lg:pr-32 lg:box-border">
        <div>
          <div className="uppercase tracking-widest text-sm mb-12 xl:mb-20">
            {contactPage.kicker}
          </div>
          <h1 className="text-black font-serif mb-12 text-5xl lg:text-8xl tracking-tight">
            {contactPage.title}
          </h1>
          <div className="prose max-w-none">
            <StructuredText
              data={contactPage.content.value as StructuredTextDocument}
            />
            {/* Email Contact */}
            <p>
              <a
                href="mailto:event@datatjej.se"
                className="text-blue-600 underline"
              >
                Email us your feedback about this year's conference
              </a>
            </p>
            {/* Facebook Page Link */}
            <p>
              <a
                href="https://www.facebook.com/DataTjej"
                className="text-blue-600 underline"
              >
                Visit our Facebook page
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mx-7 py-12 lg:mx-0 lg:py-0 lg:flex lg:items-center lg:justify-center">
        {/* Assuming ContactForm handles submissions through your preferred backend */}
        <ContactForm formId={contactPage.formsparkFormId} />
      </div>
    </main>
  );
}
