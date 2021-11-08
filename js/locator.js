import { xml2js } from "xml-js";

import { verify } from "yonius";

export const LocatorAPI = superclass =>
    class extends superclass {
        async getNearestAccessPoint(addressLine, city, postalCode, countryCode, options = {}) {
            const xmlRequest = this._buildNearestAccessPointRequestXML(
                addressLine,
                city,
                postalCode,
                countryCode,
                options
            );
            const response = await this.post(this.locatorBaseUrl, {
                kwargs: { auth: "headers" },
                mime: "application/xml",
                data: xmlRequest,
                ...options
            });
            const xmlResponse = await response.text();
            const jsonResponse = xml2js(xmlResponse, {
                compact: true,
                ignoreDeclaration: true,
                trim: true,
                textKey: "text"
            });
            return jsonResponse;
        }

        _buildNearestAccessPointRequestXML(
            addressLine,
            city,
            postalCode,
            countryCode,
            { consignee = null, locale = "en_US", metric = true, radius = 150 } = {}
        ) {
            verify(addressLine, "Address line must be defined");
            verify(city, "City must be defined");
            verify(postalCode, "Postal code must be defined");
            verify(countryCode, "Country code must be defined");

            const xmlRequest =
                this._getXMLHeader() +
                `<?xml version="1.0"?>
                <LocatorRequest>
                    <Request>
                        <RequestAction>Locator</RequestAction>
                        <RequestOption>64</RequestOption>
                    </Request>
                    <OriginAddress>
                        <AddressKeyFormat>
                            ${consignee ? `<ConsigneeName>${consignee}</ConsigneeName>` : ""}
                            <AddressLine>${addressLine}</AddressLine>
                            <PoliticalDivision2>${city}</PoliticalDivision2>
                            <PostcodePrimaryLow>${postalCode}</PostcodePrimaryLow>
                            <CountryCode>${countryCode}</CountryCode>
                        </AddressKeyFormat>
                    </OriginAddress>
                    <Translate>
                        <Locale>${locale}</Locale>
                    </Translate>
                    <UnitOfMeasurement>
                        <Code>${metric ? "KM" : "MI"}</Code>
                    </UnitOfMeasurement>
                    <LocationSearchCriteria>
                        <SearchOption>
                            <OptionType>
                                <Code>01</Code>
                            </OptionType>
                        </SearchOption>
                        <MaximumListSize>1</MaximumListSize>
                        <SearchRadius>${radius}</SearchRadius>
                        <AccessPointSearch>
                            <AccessPointStatus>01</AccessPointStatus>
                        </AccessPointSearch>
                    </LocationSearchCriteria>
                </LocatorRequest>`;
            return xmlRequest;
        }
    };
