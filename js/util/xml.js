import { xml2js } from "xml-js";

import { verify } from "yonius";

const TEXT_KEY = "text";

/**
 * Builds the XML header for XML requests with license, username
 * and password.
 *
 * @param {String} username The UPS account username.
 * @param {String} password The UPS account password.
 * @param {String} license The UPS account license.
 * @returns {String} The XML request header.
 */
export const getXMLHeader = (username, password, license) => {
    verify(username, "Username must be defined");
    verify(password, "Password must be defined");
    verify(license, "License must be defined");

    return `<?xml version="1.0"?> 
    <AccessRequest xml:lang="en-US"> 
        <AccessLicenseNumber>${license}</AccessLicenseNumber> 
        <UserId>${username}</UserId> 
        <Password>${password}</Password> 
    </AccessRequest>`;
};

/**
 * Transforms the XML string to a JSON object.
 *
 * @param {String} xml The XML string to convert.
 * @returns {JSON} The JSON object.
 */
export const xmlToJson = xml => {
    let json = xml2js(xml, {
        compact: true,
        ignoreDeclaration: true,
        trim: true,
        textKey: TEXT_KEY
    });
    json = normalize(json);
    return json;
};

/**
 * Normalizes the structure resultant from the XML
 * to JSON conversion.
 *
 * @param {JSON} json The JSON resultant from the XML conversion to normalize.
 * @returns {JSON} The normalized JSON object.
 */
const normalize = json => {
    if (typeof json !== "object") return {};
    const normalizedJson = Object.assign({}, json);
    _normalize(normalizedJson);
    return normalizedJson;
};

const _normalize = async json => {
    Object.keys(json).forEach(k => {
        const child = json[k];
        const childKeys = Object.keys(child);
        if (childKeys.length === 1 && childKeys[0] === TEXT_KEY) json[k] = child[TEXT_KEY];
        else _normalize(child);
    });
};
