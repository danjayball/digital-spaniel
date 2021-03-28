import React from 'react';
import CapabilityHeader from './CapabilityHeader';
import CapabilityList from './CapabilityList';
import CapabilityListItem from './CapabilityListItem';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import SectionLink from './SectionLink';

function CapabilitySection() {
  return (
    <section className="bg-section-alt py-12 lg:py-44">
      <div className="container flex flex-wrap mx-auto">
        <div className="w-full px-4 mb-12 lg:w-1/2 lg:px-32 lg:mb-0">
          <SectionTitle className="mb-12 lg:mb-14">
            <span className="text-primary">What are</span>
            <br />
            <span className="text-secondary">we capable of</span>
          </SectionTitle>

          <SectionDescription>
            By focusing on design as an enabler and putting a huge emphasis on
            our clients as co-producers, we create innovative, sustainable
            marketing that enhances brand experience and user engagement.
          </SectionDescription>

          <SectionLink href="#">Our process</SectionLink>
        </div>

        <div className="w-full flex flex-wrap px-4 lg:w-1/2">
          <div className="flex flex-wrap w-full sm:w-2/3 lg:w-1/2">
            <div className="w-full sm:w-1/2 lg:w-full">
              <CapabilityHeader>Brand</CapabilityHeader>

              <CapabilityList>
                <CapabilityListItem href="#brand-strategy">
                  Brand Strategy
                </CapabilityListItem>

                <CapabilityListItem href="#logo-name">
                  Logo &amp; Name
                </CapabilityListItem>

                <CapabilityListItem href="#identity-collateral">
                  Identity &amp; Collateral
                </CapabilityListItem>
              </CapabilityList>
            </div>

            <div className="w-full sm:w-1/2 lg:w-full">
              <div className="h-10 sm:hidden lg:block"></div>

              <CapabilityHeader>Development</CapabilityHeader>

              <CapabilityList>
                <CapabilityListItem href="#e-commerce">
                  eCommerce
                </CapabilityListItem>

                <CapabilityListItem href="#web-development">
                  Web Development
                </CapabilityListItem>

                <CapabilityListItem href="#mobile-apps">
                  Mobile Apps
                </CapabilityListItem>
              </CapabilityList>
            </div>
          </div>

          <div className="w-full sm:w-1/3 lg:w-1/2">
            <div className="h-10 block sm:hidden"></div>

            <CapabilityHeader>Marketing</CapabilityHeader>

            <CapabilityList>
              <CapabilityListItem href="#digital">Digital</CapabilityListItem>

              <CapabilityListItem href="#market-research">
                Market Research
              </CapabilityListItem>
            </CapabilityList>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CapabilitySection;
