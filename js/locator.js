import { getXMLHeader, xmlToJson } from "./util";

export const LocatorAPI = superclass =>
    class extends superclass {
        /**
         * Finds the nearest UPS Access Point to a given address.
         *
         * @param {String} addressLine The address from where the distance is measured.
         * @param {String} city The city from where the distance is measured.
         * @param {String} postalCode The postalCode from where the distance is measured.
         * @param {String} countryCode The countryCode from where the distance is measured.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        async getNearestAccessPoint(addressLine, city, postalCode, countryCode, options = {}) {
            const data = this._buildNearestAccessPointPayload(
                addressLine,
                city,
                postalCode,
                countryCode,
                options
            );
            const response = await this.post(this._getLocatorBaseUrl(), {
                kwargs: { auth: "headers" },
                mime: "application/xml",
                data: data,
                ...options
            });
            const xml = await response.text();
            const result = xmlToJson(xml);
            return result;
        }

        _buildNearestAccessPointPayload(
            addressLine,
            city,
            postalCode,
            countryCode,
            { consignee = null, locale = "en_US", metric = true, radius = 150 } = {}
        ) {
            const xml =
                getXMLHeader(this.username, this.password, this.license) +
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
            return xml;
        }
    };
