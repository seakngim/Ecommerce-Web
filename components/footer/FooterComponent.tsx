import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import React from "react";

export default function FooterComponent() {
  return (
    <Footer container className="bg-[#253C95] rounded-none">
      <div className="w-full container mx-auto">
        <div className="grid w-full sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="inline text-white">
            <FooterBrand
              href="https://istad.co/"
              src="https://istad.co/resources/img/logo_md.png"
              alt="Cstad Logo"
              width={10}
              height={10}
            />
            <p>Start your IT career with CSTAD</p>
          </div>
          <div>
            <FooterTitle className="text-white" title="LEARN MORE" />
            <FooterLinkGroup col>
              <FooterLink className="text-white hover:underline hover:underline-offset-4" href="/course">
                Course
              </FooterLink>
              <FooterLink className="text-white hover:underline hover:underline-offset-4" href="it-news">
                IT News
              </FooterLink>
              <FooterLink className="text-white hover:underline hover:underline-offset-4" href="jpb-opportunity">
                Job Opportunity
              </FooterLink>
              <FooterLink className="text-white hover:underline hover:underline-offset-4" href="/policy">
                Privacy Policy
              </FooterLink>
              <FooterLink className="text-white hover:underline hover:underline-offset-4" href="/faq">
                FAQ
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className="text-white" title="CONTACT US" />
            <FooterLinkGroup col>
              <FooterLink className="text-white hover:underline hover:underline-offset-4" href="#">
                (+855) 95-990-910
              </FooterLink>
              <FooterLink className="text-white hover:underline hover:underline-offset-4" href="#">
                (+855) 93-990-910
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className="text-white" title="FOLLOW US" />
            <FooterLinkGroup col>
              <FooterLink
                className="text-white"
                href="https://web.facebook.com/istad.co?ref=embed_page"
              >
                Facebook Page
              </FooterLink>
              <FooterLink className="text-white hover:underline hover:underline-offset-4" href="#">
                Terms &amp; Conditions
              </FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full">
          <FooterCopyright
            className="text-white"
            href="#"
            by="Center of Science and Technology Advanced Development | All Rights Reserved™"
            year={2022}
          />
        </div>
      </div>
    </Footer>
  );
}
