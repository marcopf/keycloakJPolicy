//
//https://www.keycloak.org/docs/24.0.1/authorization_services/#_policy_js
//
const context = $evaluation.getContext();
const identity = context.getIdentity();
const attributes = identity.getAttributes();
const email = attributes.getValue('email').asString(0);

if (email.endsWith('@keycloak.org')) {
    $evaluation.grant();
}
